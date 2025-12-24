"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Params = {
  size: number;
  speed: number; // steps/sec
  target: number; // 0..1
  controlGain: number; // 0..1
  sensorNoise: number; // 0..0.2
  drift: number; // environment drift per step
  memory: 0 | 1 | 2; // 0 none, 1 short, 2 long
  nAgents: 1 | 3;
};

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}
function wrap(v: number, N: number) {
  return (v + N) % N;
}
function idx(x: number, y: number, N: number) {
  return y * N + x;
}

export default function AwarenessHomeostasisToy() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fieldRef = useRef<Float32Array | null>(null); // environmental resource field (0..1)
  const tickRef = useRef(0);
  const accumRef = useRef(0); // fractional step accumulator

  // agents: positions + internal variable "energy" (0..1) and memory of sensed value
  const agentsRef = useRef<
    { x: number; y: number; e: number; m: number; v: number; vx: number; vy: number }[]
  >([]);

  const [running, setRunning] = useState(true);
  const [params, setParams] = useState<Params>({
    size: 120,
    speed: 18,
    target: 0.55,
    controlGain: 0.55,
    sensorNoise: 0.03,
    drift: 0.0025,
    memory: 1,
    nAgents: 1,
  });

  const scale = 5;

  const reset = () => {
    const P = paramsRef.current;
    const N = P.size;
    const f = new Float32Array(N * N);

    // Smooth random field via coarse patches + blur-ish averaging
    const patch = 10;
    for (let py = 0; py < N; py += patch) {
      for (let px = 0; px < N; px += patch) {
        const v = Math.random();
        for (let y = py; y < Math.min(N, py + patch); y++) {
          for (let x = px; x < Math.min(N, px + patch); x++) {
            f[idx(x, y, N)] = v;
          }
        }
      }
    }
    // quick smoothing passes
    for (let pass = 0; pass < 2; pass++) {
      const g = new Float32Array(N * N);
      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          let sum = 0;
          let c = 0;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const nx = wrap(x + dx, N);
              const ny = wrap(y + dy, N);
              sum += f[idx(nx, ny, N)];
              c++;
            }
          }
          g[idx(x, y, N)] = sum / c;
        }
      }
      f.set(g);
    }

    fieldRef.current = f;

    const agents: { x: number; y: number; e: number; m: number; v: number; vx: number; vy: number }[] =
      [];
    const n = params.nAgents === 1 ? 1 : 3;
    for (let i = 0; i < n; i++) {
      agents.push({
        x: Math.floor((N * (i + 1)) / (n + 1)),
        y: Math.floor(N / 2 + (i - 1) * 12),
        e: 0.55 + (Math.random() - 0.5) * 0.15,
        m: 0.55,
        v: 0.0,
        vx: 0,
        vy: 0,
      });
    }
    agentsRef.current = agents;

    tickRef.current = 0;
    accumRef.current = 0;
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.size, params.nAgents]);

  // -------- Simulation step (Awareness = feedback using information about internal state) --------
  const stepOnce = () => {
    const P = paramsRef.current;
    const N = P.size;
    const field = fieldRef.current;
    if (!field) return;

    // environment drift: slowly shifts the field (forces regulation to matter)
    // do a gentle "push" toward a random direction each tick, but tiny.
    const drift = P.drift;
    for (let i = 0; i < N * N; i++) {
      // slight stochastic drift + damping
      const dv = (Math.random() - 0.5) * drift;
      field[i] = clamp01(field[i] + dv - (field[i] - 0.5) * drift * 0.15);
    }

    for (const a of agentsRef.current) {
      const i = idx(a.x, a.y, N);

      // sensor reads local environment + noise
      const sensedEnv = clamp01(field[i] + (Math.random() - 0.5) * P.sensorNoise);

      // sensed internal error (difference from target)
      const err = P.target - a.e;

      // memory: low-pass filter over sensed env (info persistence)
      const memAlpha = P.memory === 0 ? 1 : P.memory === 1 ? 0.25 : 0.08;
      a.m = clamp01(a.m + (sensedEnv - a.m) * memAlpha);

      // controller: uses information (error + sensed env) to choose action:
      // - move toward better environment if low energy, away if high (overshoot control)
      // - adjust intake rate via gain on error
      const gain = P.controlGain;
      const drive = clamp01(0.5 + err * gain); // 0..1, stronger drive when below target
      a.v = drive;

      // pick movement direction by sampling 4 neighbors on the (memory-filtered) sensed field
      // the agent seeks higher env when below target, and lower env when above target (to avoid runaway).
      const seekHigh = err > 0;
      const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ] as const;

      let bestDx = 0,
        bestDy = 0;
      let bestVal = seekHigh ? -1 : 2;

      for (const [dx, dy] of dirs) {
        const nx = wrap(a.x + dx, N);
        const ny = wrap(a.y + dy, N);
        const ni = idx(nx, ny, N);
        const v = field[ni];

        if (seekHigh) {
          if (v > bestVal) {
            bestVal = v;
            bestDx = dx;
            bestDy = dy;
          }
        } else {
          if (v < bestVal) {
            bestVal = v;
            bestDx = dx;
            bestDy = dy;
          }
        }
      }

      // inertia in movement (prevents jitter)
      a.vx = a.vx * 0.6 + bestDx * 0.4;
      a.vy = a.vy * 0.6 + bestDy * 0.4;

      const stepProb = 0.35 + 0.55 * drive; // move more when regulation "active"
      if (Math.random() < stepProb) {
        a.x = wrap(a.x + Math.sign(a.vx), N);
        a.y = wrap(a.y + Math.sign(a.vy), N);
      }

      // energy update: intake depends on local env, minus baseline loss.
      // feedback drives how strongly intake converts to internal state.
      const intake = sensedEnv * (0.08 + 0.22 * drive);
      const loss = 0.04 + 0.015 * (0.5 - Math.abs(err)); // small variation
      a.e = clamp01(a.e + intake - loss);

      // ensure field isn't depleted (this is pedagogy, not ecology)
      // but add a tiny local perturbation so behavior is visible.
      field[i] = clamp01(field[i] + (Math.random() - 0.5) * 0.01);
    }

    tickRef.current += 1;
  };

  // ---------- Rendering ----------
  const palette = useMemo(() => {
    // dark background + subtle cyan highs
    return {
      low: [10, 18, 32] as const, // #0a1220
      high: [240, 248, 255] as const, // near white
      cyan: [34, 211, 238] as const,
      agent: [255, 255, 255] as const,
    };
  }, []);

  const draw = (dt: number) => {
    const canvas = canvasRef.current;
    const field = fieldRef.current;
    if (!canvas || !field) return;

    // time-based stepping
    const P = paramsRef.current;
    const stepsPerSec = P.speed;
    if (runningRef.current) {
      const want = (dt / 1000) * stepsPerSec + accumRef.current;
      const steps = Math.max(0, Math.floor(want));
      accumRef.current = want - steps;
      for (let k = 0; k < steps; k++) stepOnce();
    }
    const P = paramsRef.current;
    const N = P.size;
    canvas.width = N * scale;
    canvas.height = N * scale;
    const ctx = canvas.getContext("2d")!;
    const img = ctx.createImageData(N * scale, N * scale);
    const W = N * scale;

    // render field as grayscale (resource) with subtle cyan tint for mid-high values
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const v = field[idx(x, y, N)];
        // gamma-ish curve for contrast
        const g = Math.pow(v, 1.15);

        // blend between low and high
        const rr = palette.low[0] + (palette.high[0] - palette.low[0]) * g;
        const gg = palette.low[1] + (palette.high[1] - palette.low[1]) * g;
        const bb = palette.low[2] + (palette.high[2] - palette.low[2]) * g;

        // tint mid-high slightly cyan
        const t = clamp01((g - 0.45) / 0.55);
        const r2 = rr * (1 - 0.18 * t) + palette.cyan[0] * (0.18 * t);
        const g2 = gg * (1 - 0.18 * t) + palette.cyan[1] * (0.18 * t);
        const b2 = bb * (1 - 0.18 * t) + palette.cyan[2] * (0.18 * t);

        for (let dy = 0; dy < scale; dy++) {
          for (let dx = 0; dx < scale; dx++) {
            const p = (y * scale + dy) * W + (x * scale + dx);
            img.data[p * 4 + 0] = r2 | 0;
            img.data[p * 4 + 1] = g2 | 0;
            img.data[p * 4 + 2] = b2 | 0;
            img.data[p * 4 + 3] = 255;
          }
        }
      }
    }

    ctx.putImageData(img, 0, 0);

    // Draw agents: ring encodes energy vs target (homeostasis)
    for (const a of agentsRef.current) {
      const cx = a.x * scale + scale / 2;
      const cy = a.y * scale + scale / 2;

      const err = a.e - params.target; // positive = above target
      const mag = Math.min(1, Math.abs(err) * 3);
      const col = err >= 0 ? "rgba(56,189,248,0.95)" : "rgba(248,113,113,0.95)"; // cyan vs red

      ctx.beginPath();
      ctx.arc(cx, cy, 5 + 4 * mag, 0, Math.PI * 2);
      ctx.strokeStyle = col;
      ctx.lineWidth = 2;
      ctx.shadowColor = col;
      ctx.shadowBlur = 6;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 2.2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.shadowBlur = 0;
      ctx.fill();
    }

    // HUD: show average energy vs target
    const avgE =
      agentsRef.current.reduce((s, a) => s + a.e, 0) / Math.max(1, agentsRef.current.length);
    const avgErr = avgE - params.target;

    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "14px ui-sans-serif, system-ui, -apple-system, Segoe UI";
    ctx.fillText(`avg energy: ${avgE.toFixed(2)}   target: ${params.target.toFixed(2)}`, 12, 22);
    ctx.fillText(`avg error: ${avgErr.toFixed(2)}`, 12, 42);
  };

  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const loop = (t: number) => {
      const dt = t - last;
      last = t;
      draw(dt);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // Only restart the render loop when the canvas resolution changes.
  }, [params.size, running]);
return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Card className="border border-white/10 bg-white/5">
        <CardHeader className="flex flex-row items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="text-lg">Homeostasis Loop Toy</CardTitle>
            <p className="text-sm text-slate-200">
              Awareness introduces feedback: the system uses information about its own state to regulate itself.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setRunning((v) => !v)}>
              {running ? "Pause" : "Run"}
            </Button>
            <Button variant="outline" onClick={reset}>
              Reset
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
                The agent’s ring turns <span className="text-sky-300">cyan</span> when energy is above target and{" "}
                <span className="text-red-300">red</span> when below.
              </li>
              <li>
                With feedback (control gain), energy hovers near target despite environmental drift.
              </li>
              <li>
                “Memory” here is just smoothing of recent sensory input—no symbols, meaning, or goals.
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
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-slate-200">Target</span>
                <span>{params.target.toFixed(2)}</span>
              </div>
              <input
                className="w-full"
                type="range"
                min={0.2}
                max={0.8}
                step={0.01}
                value={params.target}
                onChange={(e) => setParams((p) => ({ ...p, target: Number(e.target.value) }))}
              />
            </div>

            <Range
              label="Control gain"
              value={params.controlGain}
              min={0}
              max={1}
              step={0.01}
              onChange={(v) => setParams((p) => ({ ...p, controlGain: v }))}
            />

            <Range
              label="Sensor noise"
              value={params.sensorNoise}
              min={0}
              max={0.2}
              step={0.01}
              format={(v) => `${Math.round(v * 100)}%`}
              onChange={(v) => setParams((p) => ({ ...p, sensorNoise: v }))}
            />

            <Range
              label="Environment drift"
              value={params.drift}
              min={0}
              max={0.01}
              step={0.0005}
              format={(v) => v.toFixed(4)}
              onChange={(v) => setParams((p) => ({ ...p, drift: v }))}
            />

            <Range
              label="Speed"
              value={params.speed}
              min={5}
              max={32}
              step={1}
              format={(v) => `${v} steps/sec`}
              onChange={(v) => setParams((p) => ({ ...p, speed: v }))}
            />

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-200">Memory</div>
              <div className="flex flex-wrap gap-2">
                <Chip active={params.memory === 0} onClick={() => setParams((p) => ({ ...p, memory: 0 }))}>
                  Off
                </Chip>
                <Chip active={params.memory === 1} onClick={() => setParams((p) => ({ ...p, memory: 1 }))}>
                  Short
                </Chip>
                <Chip active={params.memory === 2} onClick={() => setParams((p) => ({ ...p, memory: 2 }))}>
                  Long
                </Chip>
              </div>
              <div className="text-xs text-slate-300">
                Memory is a simple smoothing of recent sensory input (a low-pass filter).
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-200">Agents</div>
              <div className="flex flex-wrap gap-2">
                <Chip active={params.nAgents === 1} onClick={() => setParams((p) => ({ ...p, nAgents: 1 }))}>
                  1 agent
                </Chip>
                <Chip active={params.nAgents === 3} onClick={() => setParams((p) => ({ ...p, nAgents: 3 }))}>
                  3 agents
                </Chip>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle className="text-sm">How this simulation works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-200">
            <p>
              The environment is a drifting resource field. The agent senses local conditions (with optional noise),
              compares its internal energy to a target, and acts to reduce error.
            </p>
            <p className="text-slate-300">
              This is a feedback loop: information about the system’s state guides action to maintain stability.
              There are no symbols or meaning—only regulation.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle className="text-sm">IO note</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-200">
            <p>
              <strong>A (Awareness)</strong> here means self-regulation using information about internal state—not
              human-like consciousness. It is the first place a system becomes meaningfully “about itself.”
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
        <span className="font-semibold text-slate-200">{props.label}</span>
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
