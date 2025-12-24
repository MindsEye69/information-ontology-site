"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PresetId = "symmetric" | "weak" | "asymmetric";
type Complexity = "binary" | "multitype";

type Params = {
  size: number;          // grid width/height
  speed: number;         // simulation steps per animation frame (may be < 1)
  radius: 1 | 2;         // neighborhood radius (1 = local, 2 = slightly wider)
  inertia: number;       // probability of keeping current state
  jitter: number;        // rare random perturbations (kept tiny)
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

/**
 * Relation matrix:
 * influence[neighborState][candidateState] = how much a neighbor of type neighborState
 * supports the cell being in candidateState.
 *
 * This stays purely relational: local constraints, no global scoring, no "fitness".
 */
function buildInfluenceMatrix(preset: PresetId, K: number) {
  // K = number of states (2 or 4)
  // Default: "similar supports similar" / "different resists different"
  const influence: number[][] = Array.from({ length: K }, () => Array(K).fill(0));

  for (let n = 0; n < K; n++) {
    for (let c = 0; c < K; c++) {
      influence[n][c] = n === c ? 1 : -1;
    }
  }

  if (preset === "weak") {
    // same shape, lower magnitude handled elsewhere via coupling strength
    // keep matrix identical
  }

  if (preset === "asymmetric") {
    // A influences B more than B influences A (binary only)
    // For K>2, we keep it gentle: state 0 slightly dominates interactions.
    if (K === 2) {
      // neighbor A (0) strongly supports A and strongly discourages B
      influence[0][0] = 1.2;
      influence[0][1] = -1.2;
      // neighbor B (1) is weaker
      influence[1][1] = 0.7;
      influence[1][0] = -0.7;
    } else {
      for (let c = 0; c < K; c++) {
        influence[0][c] *= 1.15;
      }
      for (let c = 0; c < K; c++) {
        influence[1][c] *= 0.95;
      }
    }
  }

  return influence;
}

function couplingStrength(preset: PresetId) {
  switch (preset) {
    case "weak":
      return 0.35;
    case "asymmetric":
      return 1.05;
    case "symmetric":
    default:
      return 0.8;
  }
}

export default function RelationFieldEngine() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const stateRef = useRef<Uint8Array | null>(null);
  const nextRef = useRef<Uint8Array | null>(null);
  const stepAccRef = useRef(0);

  const [running, setRunning] = useState(true);
  const [preset, setPreset] = useState<PresetId>("symmetric");
  const [complexity, setComplexity] = useState<Complexity>("binary");
  const [params, setParams] = useState<Params>({
    size: 140,
    speed: 0.25,
    radius: 1,
    inertia: 0.78,
    jitter: 0.003,
  });

  const K = complexity === "binary" ? 2 : 4;

  const palette = useMemo(() => {
    // High contrast but neutral. We avoid "good/bad" coloring.
    // (This stays inside the component; no interpretive labels.)
    if (K === 2) return ["#0b1220", "#f8fafc"];
    return ["#0b1220", "#f8fafc", "#94a3b8", "#1f2937"];
  }, [K]);

  const scale = 4;

  const reset = () => {
    const N = params.size;
    const n = N * N;
    const s = new Uint8Array(n);
    const t = new Uint8Array(n);

    // Seed: blocky patches (makes relational negotiation visible without adding goals).
    // We assign a random state per patch, then fill the patch.
    const patch = K === 2 ? 10 : 14;
    for (let py = 0; py < N; py += patch) {
      for (let px = 0; px < N; px += patch) {
        const v = Math.floor(Math.random() * K);
        for (let y = py; y < Math.min(N, py + patch); y++) {
          for (let x = px; x < Math.min(N, px + patch); x++) {
            s[idx(x, y, N)] = v;
          }
        }
      }
    }

    // Add a small central patch to make the start visually readable
    const mid = Math.floor(N / 2);
    for (let y = mid - 4; y <= mid + 4; y++) {
      for (let x = mid - 4; x <= mid + 4; x++) {
        s[idx(wrap(x, N), wrap(y, N), N)] = 0;
      }
    }

    stateRef.current = s;
    nextRef.current = t;
    stepAccRef.current = 0;
  };

  useEffect(() => {
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.size, complexity]);

  // When the relation preset changes, re-seed so differences are legible.
  useEffect(() => {
    const wasRunning = running;
    setRunning(false);
    reset();
    const t = setTimeout(() => setRunning(wasRunning), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preset]);

  useEffect(() => {
    let raf = 0;

    const stepOnce = () => {
      const s = stateRef.current;
      const t = nextRef.current;
      if (!s || !t) return;

      const N = params.size;
      const influence = buildInfluenceMatrix(preset, K);
      const coup = couplingStrength(preset);

      // Von Neumann neighborhood for r=1, small diamond for r=2
      const offsets: Array<[number, number]> = [];
      const r = params.radius;
      for (let dy = -r; dy <= r; dy++) {
        for (let dx = -r; dx <= r; dx++) {
          if (dx === 0 && dy === 0) continue;
          // Diamond (Manhattan distance) preserves "relation" feel better than full square.
          if (Math.abs(dx) + Math.abs(dy) <= r) offsets.push([dx, dy]);
        }
      }

      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          const i = idx(x, y, N);
          const cur = s[i];

          // inertia: keep state often (prevents flicker; emphasizes constraint not randomness)
          if (Math.random() < params.inertia) {
            t[i] = cur;
            continue;
          }

          // score each candidate state purely from neighbor relations
          const scores = new Float32Array(K);
          for (const [dx, dy] of offsets) {
            const nx = wrap(x + dx, N);
            const ny = wrap(y + dy, N);
            const nstate = s[idx(nx, ny, N)];
            for (let cand = 0; cand < K; cand++) {
              scores[cand] += influence[nstate][cand] * coup;
            }
          }

          // choose candidate with max relational support
          let best = 0;
          let bestScore = scores[0];
          for (let cand = 1; cand < K; cand++) {
            if (scores[cand] > bestScore) {
              best = cand;
              bestScore = scores[cand];
            }
          }

          // tiny perturbations: keep extremely low, just to avoid pathological lockups
          if (Math.random() < params.jitter) {
            best = Math.floor(Math.random() * K);
          }

          t[i] = best as number;
        }
      }

      // swap
      stateRef.current = t;
      nextRef.current = s;
    };

    const draw = () => {
      const canvas = canvasRef.current;
      const s = stateRef.current;
      if (!canvas || !s) {
        raf = requestAnimationFrame(draw);
        return;
      }

      // slow-motion accumulator: allow speed < 1
      if (running) stepAccRef.current += params.speed;
      const steps = running ? Math.floor(stepAccRef.current) : 0;
      stepAccRef.current -= steps;

      for (let k = 0; k < steps; k++) stepOnce();

      const N = params.size;
      canvas.width = N * scale;
      canvas.height = N * scale;
      const ctx = canvas.getContext("2d")!;
      const img = ctx.createImageData(N * scale, N * scale);

      const pxW = N * scale;

      for (let y = 0; y < N; y++) {
        for (let x = 0; x < N; x++) {
          const v = stateRef.current![idx(x, y, N)];
          const col = palette[v] ?? palette[0];

          // parse hex
          const r = parseInt(col.slice(1, 3), 16);
          const g = parseInt(col.slice(3, 5), 16);
          const b = parseInt(col.slice(5, 7), 16);

          for (let dy = 0; dy < scale; dy++) {
            for (let dx = 0; dx < scale; dx++) {
              const p = (y * scale + dy) * pxW + (x * scale + dx);
              img.data[p * 4 + 0] = r;
              img.data[p * 4 + 1] = g;
              img.data[p * 4 + 2] = b;
              img.data[p * 4 + 3] = 255;
            }
          }
        }
      }

      ctx.putImageData(img, 0, 0);
      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [K, palette, params, preset, running]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Card className="border border-white/10 bg-white/5">
        <CardHeader className="flex flex-row items-start justify-between gap-3">
          <div className="space-y-1">
            <CardTitle className="text-lg">Relational Field Engine</CardTitle>
            <p className="text-sm text-slate-200">
              Same differences, different relations. Watch structure emerge from local constraint.
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
              <li>The same differences behave differently under different relations.</li>
              <li>Structure emerges without memory, goals, or evaluation.</li>
              <li>Boundaries stabilize purely through local constraint.</li>
              <li>Nothing here selects or interprets — it only relates.</li>
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
              <div className="text-xs font-semibold text-slate-200">Relation preset</div>
              <div className="flex flex-wrap gap-2">
                <Chip active={preset === "symmetric"} onClick={() => setPreset("symmetric")}>
                  Symmetric Attraction
                </Chip>
                <Chip active={preset === "weak"} onClick={() => setPreset("weak")}>
                  Weak Coupling
                </Chip>
                <Chip active={preset === "asymmetric"} onClick={() => setPreset("asymmetric")}>
                  Asymmetric
                </Chip>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-200">State complexity (optional)</div>
              <div className="flex gap-2">
                <Chip active={complexity === "binary"} onClick={() => setComplexity("binary")}>
                  Binary (2)
                </Chip>
                <Chip active={complexity === "multitype"} onClick={() => setComplexity("multitype")}>
                  Multi-type (4)
                </Chip>
              </div>
              <div className="text-xs text-slate-300">
                Relations operate the same way; only the number of difference-types changes.
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold text-slate-200">Interaction radius</span>
                <span>{params.radius === 1 ? "1 cell (local)" : "2 cells (wider)"}</span>
              </div>
              <div className="flex gap-2">
                <Chip
                  active={params.radius === 1}
                  onClick={() => setParams((p) => ({ ...p, radius: 1 }))}
                >
                  Local (1)
                </Chip>
                <Chip
                  active={params.radius === 2}
                  onClick={() => setParams((p) => ({ ...p, radius: 2 }))}
                >
                  Wider (2)
                </Chip>
              </div>
              <div className="text-xs text-slate-300">
                Local uses a Von Neumann neighborhood; Wider uses an extended diamond neighborhood.
              </div>
            </div>

            <Range
              label="Speed"
              value={params.speed}
              min={0.1}
              max={8}
              step={0.1}
              onChange={(v) => setParams((p) => ({ ...p, speed: v }))}
            />

            <Range
              label="Inertia"
              value={params.inertia}
              min={0}
              max={0.9}
              step={0.01}
              onChange={(v) => setParams((p) => ({ ...p, inertia: v }))}
            />
          </CardContent>
        </Card>

        <Card className="border border-white/10 bg-white/5">
          <CardHeader>
            <CardTitle className="text-sm">IO note</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-200">
            <p>
              <strong>R (Relation)</strong> adds constraint between differences. Nothing here
              evaluates, prefers, or remembers—relations simply couple nearby states. This is the
              step that makes Δ non-isolated.
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
        props.active ? "border-white/60 bg-white/10 text-white" : "border-white/10 bg-black/10 text-slate-200 hover:border-white/30",
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
  format?: (v: any) => string;
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
