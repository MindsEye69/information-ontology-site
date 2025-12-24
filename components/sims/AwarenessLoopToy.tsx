"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Params = {
  n: number;
  feedback: number;
  drive: number;
  friction: number;
  noise: number;
};

const DEFAULT_PARAMS: Params = {
  n: 240,
  feedback: 0.72,
  drive: 0.35,
  friction: 0.08,
  noise: 0.02,
};

function clamp(x: number, a: number, b: number) {
  return Math.max(a, Math.min(b, x));
}

export default function AwarenessLoopToy() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [running, setRunning] = useState(true);
  const [params, setParams] = useState<Params>(DEFAULT_PARAMS);
  const [resetSignal, setResetSignal] = useState(0);

  const stateRef = useRef<Float32Array | null>(null);
  const velRef = useRef<Float32Array | null>(null);
  const phaseRef = useRef(0);

  const reset = () => {
    stateRef.current = new Float32Array(params.n);
    velRef.current = new Float32Array(params.n);
    for (let i = 0; i < params.n; i++) {
      stateRef.current[i] = (Math.random() - 0.5) * 0.2;
      velRef.current[i] = 0;
    }
    phaseRef.current = 0;
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.n, resetSignal]);

  useEffect(() => {
    if (!stateRef.current) reset();

    let raf = 0;
    const tick = () => {
      const canvas = canvasRef.current;
      const x = stateRef.current;
      const v = velRef.current;
      if (!canvas || !x || !v) {
        raf = requestAnimationFrame(tick);
        return;
      }

      if (running) {
        phaseRef.current += 0.02;
        const phase = phaseRef.current;

        for (let i = 0; i < params.n; i++) {
          const env = Math.sin(phase + i * 0.04) * params.drive;
          const target = params.feedback * x[i] + (1 - params.feedback) * env;

          const force = target - x[i];
          v[i] += force;
          v[i] *= 1 - params.friction;

          if (Math.random() < params.noise) v[i] += (Math.random() - 0.5) * 0.8;

          x[i] = clamp(x[i] + v[i] * 0.06, -1, 1);
        }
      }

      const ctx = canvas.getContext("2d")!;
      canvas.width = 980;
      canvas.height = 260;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // baseline
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = "#94a3b8";
      ctx.fillRect(20, canvas.height / 2, canvas.width - 40, 1);
      ctx.globalAlpha = 1;

      // ribbon
      ctx.beginPath();
      for (let i = 0; i < params.n; i++) {
        const px = 20 + (i / (params.n - 1)) * (canvas.width - 40);
        const py = canvas.height / 2 - x[i] * 95;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.strokeStyle = "#38bdf8";
      ctx.lineWidth = 2;
      ctx.stroke();

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params, running]);

  return (
    <div className="grid gap-8 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] items-start">
      <Card>
        <CardHeader className="flex flex-row items-start justify-between gap-4">
          <div>
            <CardTitle>Awareness Loop Toy (Feedback Dynamics)</CardTitle>
            <p className="mt-2 text-sm text-slate-200 max-w-2xl">
              The present depends on the past: stabilization, hysteresis, and regulation—without implying cognition.
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
        <CardContent>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
            <canvas
              ref={canvasRef}
              className="block w-full h-auto rounded-xl border border-slate-800 bg-slate-950"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-slate-200">
          <Control
            label="Feedback (path dependence)"
            tip="How much the next state depends on the current state (self-coupling). Higher feedback makes the ribbon ‘remember’ itself more strongly."
            value={params.feedback}
            min={0}
            max={0.92}
            step={0.01}
            onChange={(v) => setParams((p) => ({ ...p, feedback: v }))}
          />
          <Control
            label="Drive (environment forcing)"
            tip="How strongly an external oscillation pushes the system. Increase to see the loop track the environment more."
            value={params.drive}
            min={0}
            max={0.8}
            step={0.01}
            onChange={(v) => setParams((p) => ({ ...p, drive: v }))}
          />
          <Control
            label="Friction (damping)"
            tip="How quickly momentum decays. Higher damping smooths and stabilizes; lower damping can overshoot and oscillate."
            value={params.friction}
            min={0}
            max={0.25}
            step={0.01}
            onChange={(v) => setParams((p) => ({ ...p, friction: v }))}
          />
          <Control
            label="Noise (perturbations)"
            tip="Random jolts injected into the dynamics. This is statistical—watch a few seconds after changing."
            value={params.noise}
            min={0}
            max={0.12}
            step={0.005}
            onChange={(v) => setParams((p) => ({ ...p, noise: v }))}
          />

          <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-3 text-xs text-slate-300">
            <div className="font-semibold text-slate-100">Clarifier</div>
            <p className="mt-2">
              In IO, awareness here means <span className="text-slate-100 font-semibold">feedback-shaped information dynamics</span>: the system&apos;s next state depends partly on its prior state.
              This does not imply consciousness.
            </p>
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
  const display = value.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
  return (
    <div>
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="font-semibold text-slate-200 flex items-center gap-2">
          {label}
          {tip ? <Tip text={tip} /> : null}
        </span>
        <span className="tabular-nums">{display}</span>
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
      className="inline-flex h-4 w-4 select-none cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] text-slate-200"
      title={text}
      aria-label={text}
    >
      i
    </span>
  );
}
