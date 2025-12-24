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
  drift: number; // 0..0.01
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

function Tip(props: { text: string }) {
  return (
    <span className="group relative inline-flex cursor-help select-none items-center">
      <span className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-white/20 text-[10px] text-slate-200">
        i
      </span>
      <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 rounded-xl border border-white/10 bg-black/90 p-3 text-xs text-slate-200 opacity-0 shadow-xl transition group-hover:opacity-100">
        {props.text}
      </span>
    </span>
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
        <span className="font-semibold text-slate-200">
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

export default function AwarenessHomeostasisToy() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const fieldRef = useRef<Float32Array | null>(null);
  const agentsRef = useRef<
    { x: number; y: number; e: number; m: number; vx: number; vy: number }[]
  >([]);

  const [running, setRunning] = useState(true);
  const runningRef = useRef(true);

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

  const paramsRef = useRef<Params>(params);
  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  useEffect(() => {
    runningRef.current = running;
  }, [running]);

  const scale = 5;

  const reset = () => {
    const P = paramsRef.current;
    const N = P.size;

    const f = new Float32Array(N * N);

    // Seed with coarse patches for readability
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

    // A couple of smoothing passes
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

    const agents: { x: number; y: number; e: number; m: number; vx: number; vy: number }[] = [];
    const n = P.nAgents === 1 ? 1 : 3;
    for (let i = 0; i < n; i++) {
      agents.push({
        x: Math.floor((N * (i + 1)) / (n + 1)),
        y: Math.floor(N / 2 + (i - 1) * 12),
        e: clamp01(P.target + (Math.random() - 0.5) * 0.2),
        m: 0.5,
        vx: 0,
        vy: 0,
      });
    }
    agentsRef.current = agents;
  };

  // Reset on size/agent-count changes
  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.size, params.nAgents]);

  // --- Simulation step ---
  const stepOnce = () => {
    const P = paramsRef.current;
    const field = fieldRef.current;
    if (!field) return;

    const N = P.size;

    // Environment drift (keeps regulation relevant)
    const drift = P.drift;
    if (drift > 0) {
      for (let i = 0; i < N * N; i++) {
        const dv = (Math.random() - 0.5) * drift;
        field[i] = clamp01(field[i] + dv - (field[i] - 0.5) * drift * 0.15);
      }
    }

    for (const a of agentsRef.current) {
      const i0 = idx(a.x, a.y, N);

      // Sensor reads local env + noise
      const sensedEnv = clamp01(field[i0] + (Math.random() - 0.5) * P.sensorNoise);

      // Error: below target -> positive error
      const err = P.target - a.e;

      // Memory = smoothing of recent sensory input
      const memAlpha = P.memory === 0 ? 1 : P.memory === 1 ? 0.25 : 0.08;
      a.m = clamp01(a.m + (sensedEnv - a.m) * memAlpha);

      // Control drive: stronger corrective action when below target
      const drive = clamp01(0.5 + err * P.controlGain);

      // Exploration: prevents permanent sticking; scales with noise/drift and when near-equilibrium
      const explore = clamp01(0.08 + P.sensorNoise * 0.9 + P.drift * 30) * (0.35 + 0.65 * (1 - Math.abs(err)));

      // Move rule: if below target seek higher env; if above seek lower env (avoid runaway)
      const seekHigh = err > 0;

      // Sample 4 neighbors
      const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ] as const;

      let bestDx = 0;
      let bestDy = 0;
      let bestVal = seekHigh ? -1 : 2;

      for (const [dx, dy] of dirs) {
        const nx = wrap(a.x + dx, N);
        const ny = wrap(a.y + dy, N);
        const v = field[idx(nx, ny, N)];
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

      // With exploration, occasionally move randomly instead of greedy best
      if (Math.random() < explore) {
        const [dx, dy] = dirs[(Math.random() * dirs.length) | 0];
        bestDx = dx;
        bestDy = dy;
      }

      // Movement inertia
      a.vx = a.vx * 0.65 + bestDx * 0.35;
      a.vy = a.vy * 0.65 + bestDy * 0.35;

      const stepProb = 0.28 + 0.5 * drive;
      if (Math.random() < stepProb) {
        a.x = wrap(a.x + Math.sign(a.vx), N);
        a.y = wrap(a.y + Math.sign(a.vy), N);
      }

      // Energy update: intake depends on env and drive, minus baseline loss
      const intake = sensedEnv * (0.06 + 0.2 * drive);
      const loss = 0.04;
      a.e = clamp01(a.e + intake - loss);

      // Tiny local perturbation for visibility
      field[i0] = clamp01(field[i0] + (Math.random() - 0.5) * 0.008);
    }
  };

  // --- Rendering ---
  const palette = useMemo(() => {
    return {
      low: [10, 18, 32] as const,
      high: [240, 248, 255] as const,
      cyan: [34, 211, 238] as const,
    };
  }, []);

  const accumRef = useRef(0);
  const lastRef = useRef<number | null>(null);

  const drawFrame = (t: number) => {
    const canvas = canvasRef.current;
    const field = fieldRef.current;
    if (!canvas || !field) return;

    const P = paramsRef.current;

    // time-based stepping with fractional accumulator
    if (lastRef.current == null) lastRef.current = t;
    const dt = t - lastRef.current;
    lastRef.current = t;

    if (runningRef.current) {
      const want = (dt / 1000) * P.speed + accumRef.current;
      const steps = Math.max(0, Math.floor(want));
      accumRef.current = want - steps;
      for (let k = 0; k < steps; k++) stepOnce();
    }

    const N = P.size;
    canvas.width = N * scale;
    canvas.height = N * scale;
    const ctx = canvas.getContext("2d")!;
    const img = ctx.createImageData(N * scale, N * scale);
    const W = N * scale;

    // Field render
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < N; x++) {
        const v = field[idx(x, y, N)];
        const g = Math.pow(v, 1.15);

        const rr = palette.low[0] + (palette.high[0] - palette.low[0]) * g;
        const gg = palette.low[1] + (palette.high[1] - palette.low[1]) * g;
        const bb = palette.low[2] + (palette.high[2] - palette.low[2]) * g;

        const tint = clamp01((g - 0.45) / 0.55);
        const r2 = rr * (1 - 0.18 * tint) + palette.cyan[0] * (0.18 * tint);
        const g2 = gg * (1 - 0.18 * tint) + palette.cyan[1] * (0.18 * tint);
        const b2 = bb * (1 - 0.18 * tint) + palette.cyan[2] * (0.18 * tint);

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

    // Agents: ring encodes energy error relative to target
    for (const a of agentsRef.current) {
      const cx = a.x * scale + scale / 2;
      const cy = a.y * scale + scale / 2;

      const err = a.e - P.target; // above target -> positive
      const mag = Math.min(1, Math.abs(err) * 3);
      const col = err >= 0 ? "rgba(56,189,248,0.95)" : "rgba(248,113,113,0.95)";

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

    // HUD: avg energy
    const avgE = agentsRef.current.reduce((s, a) => s + a.e, 0) / Math.max(1, agentsRef.current.length);
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "14px ui-sans-serif, system-ui, -apple-system, Segoe UI";
    ctx.fillText(`avg energy: ${avgE.toFixed(2)}   target: ${P.target.toFixed(2)}`, 12, 22);
    ctx.fillText(`agents: ${agentsRef.current.length}   running: ${runningRef.current ? "yes" : "no"}`, 12, 42);
  };

  useEffect(() => {
    let raf = 0;

    const loop = (t: number) => {
      drawFrame(t);
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.size]); // only restart if resolution changes

  const onReset = () => {
    lastRef.current = null;
    accumRef.current = 0;
    reset();
  };

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
            <Button variant="outline" onClick={onReset}>
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
              <li>Control gain changes how aggressively the agent corrects toward target.</li>
              <li>Noise and drift push the system away from equilibrium; feedback pulls it back.</li>
              <li>“Memory” is just smoothing of recent sensory input—no symbols, meaning, or goals.</li>
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
            <Range
              label="Target"
              tip="Desired internal energy level the agent tries to maintain. This is the set-point in the feedback loop."
              value={params.target}
              min={0.2}
              max={0.8}
              step={0.01}
              format={(v) => v.toFixed(2)}
              onChange={(v) => setParams((p) => ({ ...p, target: v }))}
            />

            <Range
              label="Control gain"
              tip="How strongly the agent reacts to error (target − energy). Higher gain = more aggressive correction (and possible overshoot)."
              value={params.controlGain}
              min={0}
              max={1}
              step={0.01}
              format={(v) => v.toFixed(2)}
              onChange={(v) => setParams((p) => ({ ...p, controlGain: v }))}
            />

            <Range
              label="Sensor noise"
              tip="Random distortion added to sensed environmental input. Higher noise makes regulation less reliable."
              value={params.sensorNoise}
              min={0}
              max={0.2}
              step={0.01}
              format={(v) => `${Math.round(v * 100)}%`}
              onChange={(v) => setParams((p) => ({ ...p, sensorNoise: v }))}
            />

            <Range
              label="Environment drift"
              tip="Rate at which the environment changes over time. Drift forces the agent to keep regulating to stay near target."
              value={params.drift}
              min={0}
              max={0.01}
              step={0.0005}
              format={(v) => v.toFixed(4)}
              onChange={(v) => setParams((p) => ({ ...p, drift: v }))}
            />

            <Range
              label="Speed"
              tip="Simulation steps per second. Higher values advance the system faster."
              value={params.speed}
              min={5}
              max={32}
              step={1}
              format={(v) => `${v} steps/sec`}
              onChange={(v) => setParams((p) => ({ ...p, speed: v }))}
            />

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-200">
                Memory
                <Tip text="Temporal smoothing of recent sensory input (a low-pass filter). Long memory is more stable but slower to respond." />
              </div>
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
                Memory is simple smoothing of sensed input (no symbols or meaning).
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-200">
                Agents
                <Tip text="Adds multiple self-regulating agents. Their trajectories will differ because of local conditions and noise." />
              </div>
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
              The environment is a drifting resource field. Each agent senses local conditions, compares its internal
              energy to a target, and acts to reduce error.
            </p>
            <p className="text-slate-300">
              This is a feedback loop: information about the system’s state guides action to maintain stability. There
              are no symbols or meaning—only regulation.
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
              human-like consciousness.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
