"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Params = {
  size: number;
  speed: number; // steps/sec
  bandCenter: number; // 0..1
  bandWidth: number; // 0.05..0.9
  controlGain: number; // 0..1
  envVolatility: number; // 0..0.02
  sensorNoise: number; // 0..0.2
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

export default function ValuePersistenceToy() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const graphRef = useRef<HTMLCanvasElement | null>(null);

  const fieldRef = useRef<Float32Array | null>(null);
  const agentRef = useRef<{ x: number; y: number; v: number; alive: boolean } | null>(null);

  const [running, setRunning] = useState(true);
  const runningRef = useRef(true);

  const [deaths, setDeaths] = useState(0);
  const deathsRef = useRef(0);

  const [params, setParams] = useState<Params>({
    size: 120,
    speed: 20,
    bandCenter: 0.55,
    bandWidth: 0.28,
    controlGain: 0.6,
    envVolatility: 0.006,
    sensorNoise: 0.03,
  });

  const paramsRef = useRef(params);
  useEffect(() => {
    paramsRef.current = params;
  }, [params]);

  useEffect(() => {
    runningRef.current = running;
  }, [running]);

  const scale = 5;

  const historyRef = useRef<number[]>([]);

  const band = useMemo(() => {
    const c = params.bandCenter;
    const w = params.bandWidth;
    const lo = clamp01(c - w / 2);
    const hi = clamp01(c + w / 2);
    return { lo, hi };
  }, [params.bandCenter, params.bandWidth]);

  const reset = () => {
    const P = paramsRef.current;
    const N = P.size;

    // Coarse patches for readability
    const f = new Float32Array(N * N);
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

    // Simple smoothing pass
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

    fieldRef.current = f;
    agentRef.current = {
      x: (N / 2) | 0,
      y: (N / 2) | 0,
      v: clamp01(paramsRef.current.bandCenter + (Math.random() - 0.5) * 0.12),
      alive: true,
    };

    historyRef.current = [];
    setDeaths(0);
    deathsRef.current = 0;
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.size]);

  const shock = () => {
    const P = paramsRef.current;
    const field = fieldRef.current;
    const a = agentRef.current;
    if (!field || !a) return;
    const N = P.size;

    // Spike internal value and roughen local area so delayed parameters become obvious.
    a.v = clamp01(a.v + (Math.random() < 0.5 ? -1 : 1) * (0.18 + Math.random() * 0.12));

    const r = 6;
    for (let dy = -r; dy <= r; dy++) {
      for (let dx = -r; dx <= r; dx++) {
        const x = wrap(a.x + dx, N);
        const y = wrap(a.y + dy, N);
        const i = idx(x, y, N);
        field[i] = clamp01(field[i] + (Math.random() - 0.5) * 0.35);
      }
    }
  };

  const stepOnce = () => {
    const P = paramsRef.current;
    const field = fieldRef.current;
    const a = agentRef.current;
    if (!field || !a) return;
    const N = P.size;

    // Environment volatility: gentle random walk back toward 0.5
    const vol = P.envVolatility;
    if (vol > 0) {
      for (let i = 0; i < N * N; i++) {
        const dv = (Math.random() - 0.5) * vol;
        field[i] = clamp01(field[i] + dv - (field[i] - 0.5) * vol * 0.12);
      }
    }

    // Sense local environment (+ noise)
    const local = field[idx(a.x, a.y, N)];
    const sensed = clamp01(local + (Math.random() - 0.5) * P.sensorNoise);

    // Internal dynamics: environment pushes v up/down; baseline decay pulls v down a bit.
    const decay = 0.003;
    const uptake = 0.020;
    a.v = clamp01(a.v + (sensed - 0.5) * uptake - decay);

    // Value band is the persistence constraint.
    const c = P.bandCenter;
    const w = P.bandWidth;
    const lo = clamp01(c - w / 2);
    const hi = clamp01(c + w / 2);

    // Move rule: below band -> seek higher env; above band -> seek lower env.
    const err = a.v < lo ? lo - a.v : a.v > hi ? hi - a.v : 0;
    const seekHigh = a.v < c;
    const gain = P.controlGain;

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

    // The farther from the band, the more likely it follows the greedy move.
    const follow = clamp01(0.15 + Math.abs(err) * 8) * (0.25 + 0.75 * gain);
    if (Math.random() < follow) {
      a.x = wrap(a.x + bestDx, N);
      a.y = wrap(a.y + bestDy, N);
    } else {
      const [dx, dy] = dirs[(Math.random() * dirs.length) | 0];
      a.x = wrap(a.x + dx, N);
      a.y = wrap(a.y + dy, N);
    }

    // Death/reset if outside the value band.
    if (a.v < lo || a.v > hi) {
      deathsRef.current += 1;
      setDeaths(deathsRef.current);

      a.x = (Math.random() * N) | 0;
      a.y = (Math.random() * N) | 0;
      a.v = clamp01(c + (Math.random() - 0.5) * w * 0.6);
    }

    // Track history for graph.
    const h = historyRef.current;
    h.push(a.v);
    if (h.length > 220) h.shift();
  };

  const draw = () => {
    const P = paramsRef.current;
    const field = fieldRef.current;
    const a = agentRef.current;
    const canvas = canvasRef.current;
    if (!canvas || !field || !a) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const N = P.size;

    // Field
    const img = ctx.createImageData(N, N);
    for (let i = 0; i < N * N; i++) {
      const v = field[i];
      const c = (v * 255) | 0;
      const j = i * 4;
      img.data[j + 0] = c;
      img.data[j + 1] = c;
      img.data[j + 2] = c;
      img.data[j + 3] = 255;
    }

    // Draw to offscreen scale 1, then scale up (crisp)
    const off = document.createElement("canvas");
    off.width = N;
    off.height = N;
    const octx = off.getContext("2d");
    if (!octx) return;
    octx.putImageData(img, 0, 0);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(off, 0, 0, N * scale, N * scale);

    // Agent
    const ax = a.x * scale + scale / 2;
    const ay = a.y * scale + scale / 2;
    ctx.beginPath();
    ctx.arc(ax, ay, scale * 1.2, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(56, 189, 248, 0.95)"; // sky
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(255,255,255,0.7)";
    ctx.stroke();

    // Overlay band text
    const c = P.bandCenter;
    const w = P.bandWidth;
    const lo = clamp01(c - w / 2);
    const hi = clamp01(c + w / 2);
    ctx.fillStyle = "rgba(0,0,0,0.55)";
    ctx.fillRect(8, 8, 220, 52);
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.font = "12px ui-sans-serif, system-ui";
    ctx.fillText(`Value band: ${lo.toFixed(2)}–${hi.toFixed(2)}`, 16, 28);
    ctx.fillText(`Internal value: ${a.v.toFixed(2)}`, 16, 48);
  };

  const drawGraph = () => {
    const canvas = graphRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const P = paramsRef.current;
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.fillRect(0, 0, w, h);

    const c = P.bandCenter;
    const bw = P.bandWidth;
    const lo = clamp01(c - bw / 2);
    const hi = clamp01(c + bw / 2);

    // Band
    ctx.fillStyle = "rgba(56,189,248,0.18)";
    ctx.fillRect(0, (1 - hi) * h, w, (hi - lo) * h);

    // Midline
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, (1 - c) * h);
    ctx.lineTo(w, (1 - c) * h);
    ctx.stroke();

    const data = historyRef.current;
    if (data.length < 2) return;

    ctx.strokeStyle = "rgba(255,255,255,0.9)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < data.length; i++) {
      const x = (i / (data.length - 1)) * (w - 2) + 1;
      const y = (1 - data[i]) * (h - 2) + 1;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  };

  // Animation loop
  useEffect(() => {
    const tick = () => {
      const P = paramsRef.current;
      if (runningRef.current) {
        const steps = Math.max(1, Math.round(P.speed / 30));
        for (let i = 0; i < steps; i++) stepOnce();
      }
      draw();
      drawGraph();
      raf = requestAnimationFrame(tick);
    };

    let raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const canvasW = params.size * scale;
  const canvasH = params.size * scale;

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
      <Card className="overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base">Value as persistence constraints</CardTitle>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant={running ? "secondary" : "default"}
              onClick={() => setRunning((v) => !v)}
            >
              {running ? "Pause" : "Run"}
            </Button>
            <Button size="sm" onClick={reset}>
              Reset
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="rounded-2xl border border-white/10 bg-black/10 p-2">
            <canvas
              ref={canvasRef}
              width={canvasW}
              height={canvasH}
              className="h-auto w-full"
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-3">
              <div className="text-xs font-semibold text-slate-200">Internal value (recent)</div>
              <div className="mt-2">
                <canvas ref={graphRef} width={320} height={110} className="w-full" />
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/10 p-3">
              <div className="text-xs font-semibold text-slate-200">Resets</div>
              <div className="mt-1 text-3xl font-bold text-white">{deaths}</div>
              <div className="mt-2 text-xs text-slate-300">
                When the internal value leaves the highlighted band, the agent “fails” and resets.
              </div>
              <div className="mt-3">
                <Button size="sm" variant="secondary" onClick={shock}>
                  SHOCK
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Range
            label="Speed"
            value={params.speed}
            min={6}
            max={60}
            step={1}
            onChange={(v) => setParams((p) => ({ ...p, speed: v }))}
          />

          <Range
            label="Value band center"
            tip="Immediate: moves the safe zone. You’ll see the band shift right away."
            value={params.bandCenter}
            min={0.1}
            max={0.9}
            step={0.01}
            onChange={(v) => setParams((p) => ({ ...p, bandCenter: v }))}
            format={(v) => v.toFixed(2)}
          />

          <Range
            label="Value band width"
            tip="Immediate: narrower bands are harder to satisfy (more resets)."
            value={params.bandWidth}
            min={0.08}
            max={0.8}
            step={0.01}
            onChange={(v) => setParams((p) => ({ ...p, bandWidth: v }))}
            format={(v) => v.toFixed(2)}
          />

          <Range
            label="Control gain"
            tip="Mostly time/variance-based. Use SHOCK if it feels subtle. Higher gain makes the agent follow gradients more aggressively."
            value={params.controlGain}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => setParams((p) => ({ ...p, controlGain: v }))}
            format={(v) => v.toFixed(2)}
          />

          <Range
            label="Environment volatility"
            tip="Time/variance-based. Higher volatility changes the field faster."
            value={params.envVolatility}
            min={0}
            max={0.02}
            step={0.0005}
            onChange={(v) => setParams((p) => ({ ...p, envVolatility: v }))}
            format={(v) => v.toFixed(4)}
          />

          <Range
            label="Sensor noise"
            tip="Time/variance-based. Noise makes regulation less reliable; SHOCK helps reveal it."
            value={params.sensorNoise}
            min={0}
            max={0.2}
            step={0.005}
            onChange={(v) => setParams((p) => ({ ...p, sensorNoise: v }))}
            format={(v) => v.toFixed(3)}
          />

          <div className="rounded-2xl border border-white/10 bg-black/10 p-3 text-xs text-slate-200">
            <div className="font-semibold text-slate-100">How to read this</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-200">
              <li>
                The highlighted band is what the system must keep satisfied to persist (a minimal “value” condition).
              </li>
              <li>
                The field is an external influence that can push the internal value up or down.
              </li>
              <li>
                SHOCK makes the delayed effects of gain/noise/volatility obvious without waiting.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
