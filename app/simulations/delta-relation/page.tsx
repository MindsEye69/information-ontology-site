"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: 0 | 1;
};

const NUM_PARTICLES = 80;

export default function DeltaRelationSimPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    if (particlesRef.current.length === 0) {
      const arr: Particle[] = [];
      for (let i = 0; i < NUM_PARTICLES; i++) {
        arr.push({
          x: Math.random(),
          y: Math.random(),
          vx: (Math.random() - 0.5) * 0.002,
          vy: (Math.random() - 0.5) * 0.002,
          type: Math.random() < 0.5 ? 0 : 1
        });
      }
      particlesRef.current = arr;
    }

    let frame: number;
    const loop = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let ax = 0;
        let ay = 0;
        for (let j = 0; j < particles.length; j++) {
          if (i === j) continue;
          const q = particles[j];
          const dx = q.x - p.x;
          const dy = q.y - p.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < 0.0001 || distSq > 0.02) continue;
          const dist = Math.sqrt(distSq);
          const nx = dx / dist;
          const ny = dy / dist;
          const same = p.type === q.type;
          const strength = same ? 0.0006 : -0.0006;
          ax += nx * strength;
          ay += ny * strength;
        }
        p.vx = (p.vx + ax) * 0.98;
        p.vy = (p.vy + ay) * 0.98;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x += 1;
        if (p.x > 1) p.x -= 1;
        if (p.y < 0) p.y += 1;
        if (p.y > 1) p.y -= 1;
      }

      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, 4, 0, Math.PI * 2);
        ctx.fillStyle = p.type === 0 ? "#38bdf8" : "#fb7185";
        ctx.fill();
      }

      frame = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">
        Δ → R: Difference and Relation
      </h1>
      <Card>
        <CardHeader>
          <CardTitle>Simple two-type particle toy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-slate-200">
          <p>
            Each particle has just one intrinsic &quot;difference&quot;: a type
            (blue or red). Same-type particles gently attract; different-type
            particles gently repel.
          </p>
          <p>
            From this tiny rule set we see clusters, boundaries, and mixed
            regions — a visual hint of how structured relations (R) can emerge
            from raw differences (Δ).
          </p>
          <div className="mt-4 h-80 rounded-2xl border border-slate-800 bg-slate-950/80">
            <canvas
              ref={canvasRef}
              className="h-full w-full"
              aria-label="Δ to R particle simulation"
            />
          </div>
          <p className="text-xs text-slate-400">
            This is only a toy: the goal is intuition, not accuracy. Future
            versions may let you tweak parameters and export runs.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
