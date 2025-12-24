"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PresetId = "chaotic" | "settling" | "oscillating";

type Params = {
  size: number;
  speed: number;          // steps per second (time-based, so 1 can be truly slow)
  radius: 1 | 2;
  inertia: number;        // chance to keep current
  jitter: number;         // random flips
  window: number;         // stability window in steps
  outlineThreshold: number; // stable if change-rate <= threshold
  outlineStrength: number;  // opacity/strength
};

const DEFAULT_PRESET: PresetId = "settling";

const DEFAULT_PARAMS: Params = {
  size: 140,
  // Meditative default: slow enough to watch stabilization build.
  speed: 12,
  radius: 2,
  inertia: 0.78,
  jitter: 0.004,
  window: 220,
  outlineThreshold: 0.12,
  outlineStrength: 0.85,
};

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function idx(x: number, y: number, N: number) {
  return y * N + x;
}

function wrap(v: number, N: number) {
  return (v + N) % N;
}

function presetParams(p: PresetId) {
  // These are tuned for pedagogy: different "information regimes"
  switch (p) {
    case "chaotic":
      return { inertia: 0.25, jitter: 0.04, radius: 1 as const };
    case "oscillating":
      return { inertia: 0.55, jitter: 0.01, radius: 1 as const };
    case "settling":
    default:
      return { inertia: 0.78, jitter: 0.004, radius: 2 as const };
  }
}

export default function InformationStabilityEngine() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const stateRef = useRef<Uint8Array | null>(null);
  const nextRef = useRef<Uint8Array | null>(null);

  // for oscillating preset we keep two previous states
  const prev1Ref = useRef<Uint8Array | null>(null);
  const prev2Ref = useRef<Uint8Array | null>(null);

  // per-cell change counter within a sliding window
  // exponential moving average of "did this cell change" (≈ sliding window without storing history)
  const changeEmaRef = useRef<Float32Array | null>(null);

  const stepAccRef = useRef(0);
  const lastTimeRef = useRef<number>(0);

  const [running, setRunning] = useState(true);
  const [preset, setPreset] = useState<PresetId>(DEFAULT_PRESET);

  const [params, setParams] = useState<Params>(DEFAULT_PARAMS);
  const [resetSignal, setResetSignal] = useState(0);

  const scale = 4;

  // palette for binary states (neutral, high contrast)
  const palette = useMemo(() => ["#0b1220", "#f8fafc"], []);

  const reset = () => {
    stepAccRef.current = 0;
    lastTimeRef.current = 0;
    const N = params.size;
    const n = N * N;

    const s = new Uint8Array(n);
    const t = new Uint8Array(n);
    const p1 = new Uint8Array(n);
    const p2 = new Uint8Array(n);
    const ema = new Float32Array(n);

    // Seed with blocky patches (readable boundaries)
    const patch = 10;
    for (let py = 0; py < N; py += patch) {
      for (let px = 0; px < N; px += patch) {
        const v = Math.random() < 0.5 ? 0 : 1;
        for (let y = py; y < Math.min(N, py + patch); y++) {
          for (let x = px; x < Math.min(N, px + patch); x++) {
            s[idx(x, y, N)] = v;
          }
        }
      }
    }

    stateRef.current = s;
    nextRef.current = t;
    prev1Ref.current = p1;
    prev2Ref.current = p2;
    changeEmaRef.current = ema;
    stepAccRef.current = 0;
    lastTimeRef.current = 0;
  };

  // reset on size changes
  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.size, resetSignal]);

  // apply preset parameters (and reseed so effects are visible)
  useEffect(() => {
    const wasRunning = running;
    setRunning(false);

    const pp = presetParams(preset);
    setParams((p) => ({
      ...p,
      inertia: pp.inertia,
      jitter: pp.jitter,
      radius: pp.radius,
    }));

    reset();
    const t = setTimeout(() => setRunning(wasRunning), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset]);

  const stepOnce = () => {
    const s = stateRef.current;
    const t = nextRef.current;
    const ema = changeEmaRef.current;
    if (!s || !t || !ema) return;

    const N = params.size;

    // neighborhood offsets: diamond (Manhattan)
    const offsets: Array<[number, number]> = [];
    const r = params.radius;
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        if (dx === 0 && dy === 0) continue;
        if (Math.abs(dx) + Math.abs(dy) <= r) offsets.push([dx, dy]);
      }
    }

    // For oscillating: we softly "pull" toward prev2 to create a 2-cycle regime.
    const prev2 = prev2Ref.current;
    const prev1 = prev1Ref.current;
    const useOsc = preset === "oscillating" && prev2 && prev1;

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const i = idx(x, y, N);
        const cur = s[i];

        // inertia
        if (Math.random() < params.inertia) {
          t[i] = cur;
          continue;
        }

        // local majority vote (purely relational constraint)
        let sum = 0;
        for (const [dx, dy] of offsets) {
          const nx = wrap(x + dx, N);
          const ny = wrap(y + dy, N);
          sum += s[idx(nx, ny, N)] === 1 ? 1 : -1;
        }
        let next = sum >= 0 ? 1 : 0;

        // oscillation bias: occasionally prefer state from two steps ago
        if (useOsc && Math.random() < 0.22) {
          next = prev2[i];
        }

        // jitter: random flips
        if (Math.random() < params.jitter) next = next ? 0 : 1;

        t[i] = next;
      }
    }

    // update EMA of per-cell change-rate (≈ change frequency over a window)
    // alpha ~= 1/window so "window" still behaves intuitively.
    const alpha = 1 / Math.max(1, params.window);
    for (let i = 0; i < N * N; i++) {
      const changed = t[i] !== s[i] ? 1 : 0;
      ema[i] = ema[i] + alpha * (changed - ema[i]);
    }

    // shift prev states for oscillating preset
    if (prev1Ref.current && prev2Ref.current) {
      prev2Ref.current.set(prev1Ref.current);
      prev1Ref.current.set(s);
    }

    // swap
    stateRef.current = t;
    nextRef.current = s;
  };

  const draw = () => {
    const canvas = canvasRef.current;
    const s = stateRef.current;
    const ema = changeEmaRef.current;
    if (!canvas || !s || !ema) return;

    // time-based stepping so the slow end is truly slow (and consistent across devices)
    const now = typeof performance !== "undefined" ? performance.now() : Date.now();
    if (lastTimeRef.current === 0) lastTimeRef.current = now;
    const dt = Math.min(50, now - lastTimeRef.current); // clamp to avoid huge jumps
    lastTimeRef.current = now;

    if (running) stepAccRef.current += (dt * params.speed) / 1000;
    const steps = running ? Math.floor(stepAccRef.current) : 0;
    stepAccRef.current -= steps;

    for (let k = 0; k < steps; k++) stepOnce();

    const N = params.size;
    canvas.width = N * scale;
    canvas.height = N * scale;
    const ctx = canvas.getContext("2d")!;
    const img = ctx.createImageData(N * scale, N * scale);
    const pxW = N * scale;

    // base grid render
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const v = s[idx(x, y, N)];
        const col = palette[v];

        const rr = parseInt(col.slice(1, 3), 16);
        const gg = parseInt(col.slice(3, 5), 16);
        const bb = parseInt(col.slice(5, 7), 16);

        for (let dy = 0; dy < scale; dy++) {
          for (let dx = 0; dx < scale; dx++) {
            const p = (y * scale + dy) * pxW + (x * scale + dx);
            img.data[p * 4 + 0] = rr;
            img.data[p * 4 + 1] = gg;
            img.data[p * 4 + 2] = bb;
            img.data[p * 4 + 3] = 255;
          }
        }
      }
    }

    ctx.putImageData(img, 0, 0);

    // Outline stable regions: draw edges where a stable cell borders an unstable cell.
    // Stability proxy: EMA(change) (≈ change frequency over "window")
    const thr = params.outlineThreshold;
    const alpha = clamp01(params.outlineStrength);

    const stable = (i: number) => ema[i] <= thr;

    // Build a stability mask and lightly clean it to avoid single-cell speckles.
    const mask = new Uint8Array(N * N);
    for (let i = 0; i < N * N; i++) mask[i] = stable(i) ? 1 : 0;

    // One-pass neighborhood cleanup: keep cells that are stable AND have stable support nearby.
    // (This preserves large stable regions while removing isolated stable dots.)
    const mask2 = new Uint8Array(N * N);
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const i = idx(x, y, N);
        if (mask[i] === 0) continue;
        let support = 0;
        const r2 = 1;
        for (let dy = -r2; dy <= r2; dy++) {
          for (let dx = -r2; dx <= r2; dx++) {
            if (dx === 0 && dy === 0) continue;
            if (Math.abs(dx) + Math.abs(dy) > r2) continue;
            const nx = wrap(x + dx, N);
            const ny = wrap(y + dy, N);
            support += mask[idx(nx, ny, N)];
          }
        }
        // require at least 2 stable neighbors to count as part of a stable region
        if (support >= 2) mask2[i] = 1;
      }
    }

    const stableClean = (i: number) => mask2[i] === 1;

    ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
    ctx.lineWidth = 4;
    ctx.shadowColor = "rgba(34, 211, 238, 0.7)";
    ctx.shadowBlur = 6;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";

    ctx.beginPath();
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const i = idx(x, y, N);
        const s0 = stableClean(i);
        if (!s0) continue;

        // check 4-neighbors for boundary between stable and unstable (outline only the stable "islands")
        const right = idx(wrap(x + 1, N), y, N);
        const down = idx(x, wrap(y + 1, N), N);

        const sr = stableClean(right);
        const sd = stableClean(down);

        // Draw an outline when:
        // 1) stable vs unstable boundary, OR
        // 2) both stable but different state (domain boundary inside stable structure)
        if (!sr || (sr && s[right] !== s[i])) {
          const x0 = (x + 1) * scale;
          const y0 = y * scale;
          ctx.moveTo(x0, y0);
          ctx.lineTo(x0, y0 + scale);
        }
        if (!sd || (sd && s[down] !== s[i])) {
          const x0 = x * scale;
          const y0 = (y + 1) * scale;
          ctx.moveTo(x0, y0);
          ctx.lineTo(x0 + scale, y0);
        }
      }
    }
    ctx.stroke();
  };

  useEffect(() => {
    let raf = 0;
    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  });

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Card className="border border-white/10 bg-white/5">
        <CardHeader className="flex flex-row items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="text-lg">Stability &amp; Compressibility Explorer</CardTitle>
            <p className="text-sm text-slate-200">
              Information is persistent structure: patterns that stay stable enough to be referred to again.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setRunning((v) => !v)}>
              {running ? "Pause" : "Run"}
            </Button>
            <Button variant="outline" onClick={reset}>
              Reset
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setRunning(true);
                setPreset(DEFAULT_PRESET);
                setParams(DEFAULT_PARAMS);
                setResetSignal((s) => s + 1);
              }}
              title="Restore the default slider settings and restart the simulation."
            >
              Reset defaults
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
            <canvas ref={canvasRef} className="block h-auto w-full" />
          </div>

          <div className="text-sm text-slate-200">
            <strong>What to look for</strong>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                The cyan outlines mark regions that have changed very little over the recent window.
              </li>
              <li>
                Chaos produces difference and relation, but often low persistence (low information).
              </li>
              <li>
                Settling and repeating patterns are stable enough to be re-identified across time.
              </li>
              <li>
                Information here is about <em>persistence</em>, not meaning or goals.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Card className="border border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle className="text-sm">Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                Regime preset
                <Tip text="Switches between different local-rule balances to illustrate when patterns settle (more stable) versus churn (less stable)." />
              </div>
              <div className="flex flex-wrap gap-2">
                <Chip active={preset === "settling"} onClick={() => setPreset("settling")}>
                  Settling
                </Chip>
                <Chip active={preset === "oscillating"} onClick={() => setPreset("oscillating")}>
                  Oscillating
                </Chip>
                <Chip active={preset === "chaotic"} onClick={() => setPreset("chaotic")}>
                  Chaotic
                </Chip>
              </div>
              <div className="text-xs text-slate-300">
                Presets change the local rule balance (inertia/jitter/radius) to show different stability regimes.
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-slate-200 flex items-center gap-2">
                  Interaction radius
                  <Tip text="How far each cell looks. Wider neighborhoods tend to merge and smooth patterns; local neighborhoods preserve sharper boundaries." />
                </span>
                <span>{params.radius === 1 ? "1 cell (local)" : "2 cells (wider)"}</span>
              </div>
              <div className="flex gap-2">
                <Chip active={params.radius === 1} onClick={() => setParams((p) => ({ ...p, radius: 1 }))}>
                  Local (1)
                </Chip>
                <Chip active={params.radius === 2} onClick={() => setParams((p) => ({ ...p, radius: 2 }))}>
                  Wider (2)
                </Chip>
              </div>
            </div>

            <Range
              label="Speed"
              tip="Simulation speed in steps per second. Higher is faster (immediate effect)."
              value={params.speed}
              min={5}
              max={32}
              step={1}
              format={(v) => `${Math.round(v)} steps/sec`}
              onChange={(v) => setParams((p) => ({ ...p, speed: v }))}
            />

            <Range
              label="Stability window (steps)"
              tip="How far back we consider when labeling a cell ‘stable’. Larger windows require longer persistence (watch 10–20s)."
              value={params.window}
              min={80}
              max={600}
              step={10}
              onChange={(v) => setParams((p) => ({ ...p, window: v }))}
            />

            <Range
              label="Outline sensitivity"
              tip="Threshold for counting a region as stable. Lower = stricter (fewer stable regions). Adjust, then watch a few seconds."
              value={params.outlineThreshold}
              min={0.03}
              max={0.3}
              step={0.01}
              format={(v) => `${Math.round(v * 100)}%`}
              onChange={(v) => setParams((p) => ({ ...p, outlineThreshold: v }))}
            />

            <Range
              label="Outline strength"
              tip="Visual opacity/strength of the stability outlines (purely visual; does not affect the dynamics)."
              value={params.outlineStrength}
              min={0.2}
              max={1}
              step={0.05}
              onChange={(v) => setParams((p) => ({ ...p, outlineStrength: v }))}
            />
          </CardContent>
        </Card>

        <Card className="border border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle className="text-sm">How this simulation works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-200">
            <p>
              The grid evolves by a simple local update rule (neighbors influence neighbors) with a bit of inertia
              and rare random flips. Alongside the grid, we track how often each cell changes within a recent window.
            </p>
            <p className="text-slate-300">
              A cell is treated as <strong>stable</strong> if its change-rate stays below a threshold. The cyan
              outlines mark borders between stable and unstable regions.
            </p>
            <p className="text-slate-300">
              This is a teaching aid: the stability/“compressibility” indicators are rough proxies, not proofs.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle className="text-sm">IO note</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-200">
            <p>
              <strong>I (Information)</strong> emphasizes persistent structure: patterns stable enough to be
              re-identified across time. Nothing here adds meaning or goals—only stability.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function Chip(props: { active?: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={props.onClick}
      className={[
        "rounded-xl border px-3 py-2 text-xs font-semibold transition",
        props.active
          ? "border-white/60 bg-white/10 text-white"
          : "border-white/10 bg-black/10 text-slate-200 hover:border-white/30",
      ].join(" ")}
      type="button"
    >
      {props.children}
    </button>
  );
}

function Range(props: {
  label: string;
  tip?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format?: (v: number) => string;
}) {
  const shown = props.format ? props.format(props.value) : String(props.value);
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-slate-300">
        <span className="font-semibold text-slate-200 flex items-center gap-2">
          {props.label}
          {props.tip ? <Tip text={props.tip} /> : null}
        </span>
        <span>{shown}</span>
      </div>
      <input
        className="w-full"
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ text }: { text: string }) {
  return (
    <span
      className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] text-slate-200"
      title={text}
      aria-label={text}
    >
      i
    </span>
  );
}

function Tip({ text }: { text: string }) {
  return (
    <span
      className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] text-slate-200"
      title={text}
      aria-label={text}
    >
      i
    </span>
  );
}
