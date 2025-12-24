"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Params = {
  size: number;
  noise: number;
  diffuse: number;
  threshold: number;
  speed: number;
};

const DEFAULT_PARAMS: Params = {
  size: 140,
  // Tuned for readable, “big blob” pattern formation.
  noise: 0.05,
  diffuse: 0.25,
  threshold: 0.52,
  // Meditative by default.
  speed: 0.6,
};

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

export default function DifferenceEngine() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparkRef = useRef<HTMLCanvasElement | null>(null);

  const [running, setRunning] = useState(true);
  const [params, setParams] = useState<Params>(DEFAULT_PARAMS);
  const [resetSignal, setResetSignal] = useState(0);

  const history = useRef<number[]>([]);
  const stateRef = useRef<Float32Array | null>(null);
  const tmpRef = useRef<Float32Array | null>(null);
  const stepAccRef = useRef(0);

  const scale = useMemo(() => 4, []);

  const reset = () => {
    stepAccRef.current = 0;
    history.current = [];
    const n = params.size * params.size;
    const s = new Float32Array(n);
    const t = new Float32Array(n);

    // Seed with sparse random differences so the system has something to work with.
    const density = 0.08;
    for (let i = 0; i < n; i++) {
      s[i] = Math.random() < density ? 1 : 0;
    }

    // Add a central "difference seed" for a clear starting point.
    const mid = Math.floor(params.size / 2);
    s[mid * params.size + mid] = 1;

    stateRef.current = s;
    tmpRef.current = t;
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.size, resetSignal]);

  useEffect(() => {
    let raf = 0;

    const loop = () => {
      const canvas = canvasRef.current;
      const spark = sparkRef.current;
      const s = stateRef.current;
      const t = tmpRef.current;

      if (!canvas || !spark || !s || !t) {
        raf = requestAnimationFrame(loop);
        return;
      }

      const N = params.size;
      // Allow true slow-motion: speed is "simulation steps per animation frame" and may be < 1.
      if (running) {
        stepAccRef.current += params.speed;
      }
      const steps = running ? Math.floor(stepAccRef.current) : 0;
      stepAccRef.current -= steps;

      for (let step = 0; step < steps; step++) {
        for (let y = 0; y < N; y++) {
          const y0 = (y - 1 + N) % N;
          const y1 = (y + 1) % N;
          for (let x = 0; x < N; x++) {
            const x0 = (x - 1 + N) % N;
            const x1 = (x + 1) % N;

            const i = y * N + x;
            const up = y0 * N + x;
            const dn = y1 * N + x;
            const lf = y * N + x0;
            const rt = y * N + x1;

            const avg = (s[i] + s[up] + s[dn] + s[lf] + s[rt]) / 5;

            // neighborhood decision (threshold around ~0.5)
            let next = avg >= params.threshold ? 1 : 0;

            // inertia: keep current state sometimes (lower diffuse => more inertia)
            const inertia = clamp01(1 - params.diffuse);
            if (Math.random() < inertia) next = s[i];

            // random injection of difference: occasional flips
            if (Math.random() < params.noise) next = next ? 0 : 1;

            t[i] = next;
          }
        }

        stateRef.current = t;
        tmpRef.current = s;
      }

      const cur = stateRef.current!;
      let edges = 0;
      let diffs = 0;
      for (let y = 0; y < N; y++) {
        const y1 = (y + 1) % N;
        for (let x = 0; x < N; x++) {
          const x1 = (x + 1) % N;
          const i = y * N + x;
          const r = y * N + x1;
          const d = y1 * N + x;
          edges += 2;
          diffs += cur[i] !== cur[r] ? 1 : 0;
          diffs += cur[i] !== cur[d] ? 1 : 0;
        }
      }
      const density = diffs / edges;
      history.current.push(density);
      if (history.current.length > 200) history.current.shift();

      // draw grid
      const ctx = canvas.getContext("2d")!;
      canvas.width = N * scale;
      canvas.height = N * scale;

      const img = ctx.createImageData(N * scale, N * scale);
      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          const v = cur[y * N + x];
          const c = v ? 25 : 230;
          for (let dy = 0; dy < scale; dy++) {
            for (let dx = 0; dx < scale; dx++) {
              const px = (y * scale + dy) * (N * scale) + (x * scale + dx);
              img.data[px * 4 + 0] = c;
              img.data[px * 4 + 1] = c;
              img.data[px * 4 + 2] = c;
              img.data[px * 4 + 3] = 255;
            }
          }
        }
      }
      ctx.putImageData(img, 0, 0);

      // draw sparkline
      const sctx = spark.getContext("2d")!;
      spark.width = 520;
      spark.height = 90;
      sctx.clearRect(0, 0, spark.width, spark.height);
      sctx.globalAlpha = 0.25;
      sctx.fillStyle = "#94a3b8";
      sctx.fillRect(0, spark.height - 1, spark.width, 1);
      sctx.globalAlpha = 1;
      sctx.strokeStyle = "#38bdf8";
      const h = history.current;
      if (h.length > 1) {
        sctx.strokeStyle = "rgba(255,255,255,0.9)";
        sctx.beginPath();
        for (let i = 0; i < h.length; i++) {
          const x = (i / (h.length - 1)) * (spark.width - 10) + 5;
          const y = spark.height - 5 - h[i] * (spark.height - 10);
          if (i === 0) sctx.moveTo(x, y);
          else sctx.lineTo(x, y);
        }
        sctx.lineWidth = 2;
        sctx.stroke();
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [params, running, scale]);

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] items-start">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>Minimal Difference Engine</CardTitle>
            <p className="mt-2 text-sm text-slate-200 max-w-2xl">
              Start with a tiny difference, let it propagate via local coupling, and watch stable patterns emerge.
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
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
            <canvas ref={canvasRef} className="block w-full h-auto rounded-xl border border-slate-800 bg-slate-950" />
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-100">
              Difference density (edge disagreements)
            </div>
            <div className="mt-2 rounded-2xl border border-slate-800 bg-slate-950/60 p-2">
              <canvas ref={sparkRef} className="block w-full" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-slate-200">
          <Control
            label="Grid size"
            tip="Changes the simulation resolution. Larger grids show finer detail but run slower."
            value={params.size}
            min={80}
            max={200}
            step={10}
            onChange={(v) => setParams((p) => ({ ...p, size: v }))}
          />
          <Control
            label="Noise injection"
            tip="Random flips that can seed new boundaries or dissolve patterns. This is statistical—watch a few seconds after changing."
            value={params.noise}
            min={0}
            max={0.2}
            step={0.01}
            onChange={(v) => setParams((p) => ({ ...p, noise: v }))}
          />
          <Control
            label="Diffusion"
            tip="How quickly local differences spread. Higher diffusion tends to smooth/merge regions; lower diffusion preserves blocky structure."
            value={params.diffuse}
            min={0}
            max={0.6}
            step={0.01}
            onChange={(v) => setParams((p) => ({ ...p, diffuse: v }))}
          />
          <Control
            label="Threshold"
            tip="The local decision boundary (around 0.5). Small changes can shift the system from blobs to speckle—adjust slowly."
            value={params.threshold}
            min={0.45}
            max={0.6}
            step={0.005}
            onChange={(v) => setParams((p) => ({ ...p, threshold: v }))}
          />
          <Control
            label="Speed"
            tip="Simulation steps per animation frame. Lower is calmer; higher evolves patterns faster (immediate effect)."
            value={params.speed}
            min={0.1}
            max={8}
            step={0.1}
            onChange={(v) => setParams((p) => ({ ...p, speed: v }))}
          />

          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3 text-xs text-slate-300">
            <div className="font-semibold text-slate-100">What to look for</div>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Stable regions indicate structure emerging from local differences.</li>
              <li>Noise can either dissolve patterns or help seed new boundaries.</li>
              <li>The density line shows how “edginess” rises/falls as patterns form.</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Control(props: {
  label: string;
  tip?: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  const { label, tip, value, min, max, step, onChange } = props;
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="font-semibold text-slate-200 flex items-center gap-2">
          {label}
          {tip ? <Tip text={tip} /> : null}
        </span>
        <span className="tabular-nums">{typeof value === "number" ? value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "") : value}</span>
      </div>
      <input
        className="mt-2 w-full"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
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
