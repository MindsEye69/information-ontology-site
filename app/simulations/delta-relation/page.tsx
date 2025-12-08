"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const PARTICLE_COUNT = 40;
const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 420;
const MAX_SPEED = 0.25; // base speed – scaled by slider
const LINK_DISTANCE = 90; // distance to draw relation lines

export default function DeltaRelationSimulationPage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [running, setRunning] = useState(true);
  const [speed, setSpeed] = useState(0.4); // 0.1–1.0 works well; 0.4 is calm
  const [frameRate, setFrameRate] = useState(0);

  // Initialize particles once
  useEffect(() => {
    const rng = () => Math.random();
    const initial: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: rng() * CANVAS_WIDTH,
      y: rng() * CANVAS_HEIGHT,
      vx: (rng() - 0.5) * MAX_SPEED,
      vy: (rng() - 0.5) * MAX_SPEED,
    }));
    setParticles(initial);
  }, []);

  // Animation loop
  useEffect(() => {
    let animationId: number;
    let lastTime = performance.now();

    let fpsSampleTime = performance.now();
    let frames = 0;

    const updateAndDraw = (now: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) {
        animationId = requestAnimationFrame(updateAndDraw);
        return;
      }

      const deltaMs = now - lastTime;
      lastTime = now;

      const timeFactor = Math.min(deltaMs / 16.67, 2) * speed;

      let nextParticles = particles;

      if (running) {
        nextParticles = particles.map((p) => {
          let x = p.x + p.vx * timeFactor;
          let y = p.y + p.vy * timeFactor;
          let vx = p.vx;
          let vy = p.vy;

          if (x < 0) {
            x = 0;
            vx = Math.abs(vx);
          } else if (x > CANVAS_WIDTH) {
            x = CANVAS_WIDTH;
            vx = -Math.abs(vx);
          }

          if (y < 0) {
            y = 0;
            vy = Math.abs(vy);
          } else if (y > CANVAS_HEIGHT) {
            y = CANVAS_HEIGHT;
            vy = -Math.abs(vy);
          }

          return { x, y, vx, vy };
        });

        setParticles(nextParticles);
      }

      // Clear
      ctx.fillStyle = "#020617"; // deep slate-ish
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      // Relation lines
      ctx.lineWidth = 0.7;

      for (let i = 0; i < nextParticles.length; i++) {
        for (let j = i + 1; j < nextParticles.length; j++) {
          const a = nextParticles[i];
          const b = nextParticles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < LINK_DISTANCE) {
            const alpha = 1 - dist / LINK_DISTANCE;
            ctx.strokeStyle = `rgba(56,189,248,${0.1 + 0.25 * alpha})`;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of nextParticles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#e5f6ff";
        ctx.fill();
      }

      // FPS sampling
      frames++;
      if (now - fpsSampleTime > 500) {
        setFrameRate(Math.round((frames * 1000) / (now - fpsSampleTime)));
        fpsSampleTime = now;
        frames = 0;
      }

      animationId = requestAnimationFrame(updateAndDraw);
    };

    animationId = requestAnimationFrame(updateAndDraw);
    return () => cancelAnimationFrame(animationId);
  }, [running, speed, particles]);

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Simulation · Δ → R
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          From Differences to Relations
        </h1>

        <p className="text-base text-slate-300 max-w-3xl leading-relaxed">
          This simulation begins with isolated points—differences in position.
          As they drift, a relational web forms between points that come close
          to one another. This illustrates the IO idea that once you admit
          difference (Δ), relation (R) follows almost immediately.
        </p>
      </section>

      {/* Canvas + Controls */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,3fr),minmax(0,2fr)] items-start">
        <div className="space-y-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3">
            <canvas
              ref={canvasRef}
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              className="w-full h-auto rounded-xl border border-slate-800 bg-slate-950"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <div>
              Particles: <span className="text-slate-200">{PARTICLE_COUNT}</span>
            </div>
            <div>
              FPS:{" "}
              <span className="text-slate-200">
                {frameRate > 0 ? frameRate : "…"}
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <div className="space-y-2">
            <h2 className="text-lg font-semibold">Controls</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Slow the system down, pause it, or reset it to watch relational
              structure emerge.
            </p>
          </div>

          <div className="space-y-3">
            {/* Pause / Resume */}
            <div className="flex gap-3">
              <Button
                variant={running ? "outline" : "default"}
                className="flex-1"
                onClick={() => setRunning((r) => !r)}
              >
                {running ? "Pause" : "Resume"}
              </Button>

              {/* Reset */}
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => {
                  const rng = () => Math.random();
                  setParticles(
                    Array.from({ length: PARTICLE_COUNT }, () => ({
                      x: rng() * CANVAS_WIDTH,
                      y: rng() * CANVAS_HEIGHT,
                      vx: (rng() - 0.5) * MAX_SPEED,
                      vy: (rng() - 0.5) * MAX_SPEED,
                    }))
                  );
                }}
              >
                Reset system
              </Button>
            </div>

            {/* Speed Slider */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-slate-300">
                <span>Speed</span>
                <span>{speed.toFixed(2)}×</span>
              </div>

              <input
                type="range"
                min={0.1}
                max={1}
                step={0.05}
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full accent-sky-400"
              />

              <div className="flex justify-between text-[10px] text-slate-500">
                <span>Slower</span>
                <span>Faster</span>
              </div>
            </div>
          </div>

          {/* Explanatory text */}
          <div className="space-y-2 text-sm text-slate-300 leading-relaxed">
            <h3 className="font-semibold text-sky-300">Why this matters</h3>

            <p>
              Each dot begins as a simple positional difference. But once two
              dots come close enough, their difference becomes structured—
              a relationship of nearness emerges.
            </p>

            <p>
              You aren’t imposing a graph on the points. The graph forms itself
              from their evolving configuration. This echoes the IO idea that
              relations appear wherever differences are patterned.
            </p>
          </div>

          {/* Navigation */}
          <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-3 text-xs">
            <Link href="/simulations" className="flex-1 min-w-[8rem]">
              <Button variant="outline" className="w-full border-slate-700">
                ← Back to simulations
              </Button>
            </Link>

            <Link href="/deep/delta" className="flex-1 min-w-[8rem]">
              <Button
                variant="outline"
                className="w-full border-sky-700/60 text-sky-300"
              >
                Read Δ — Difference deep dive
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
