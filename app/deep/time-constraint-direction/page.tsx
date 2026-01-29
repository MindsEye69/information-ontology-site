// app/deep/time-constraint-direction/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Time, Constraint, and Direction – Deep dive | Informational Ontology",
  description:
    "A lay-friendly explanation of why time has a direction in Informational Ontology, without treating time as a fundamental primitive.",
};

export default function TimeConstraintDirectionPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <ExplanatoryBanner className="mb-8" />
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep section · Time · Constraint · Direction
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Time, Constraint, and Direction
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Most people picture time as a kind of invisible river that everything
          flows through. Informational Ontology takes a different approach:
          time is not treated as a basic ingredient of reality. Instead, the
          direction of time is explained as a structural consequence of how
          constrained states open into less constrained states.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Time is not a container</h2>
        <p className="text-slate-300 leading-relaxed">
          When people say “time flows,” they often mean the past is fixed and
          the future is open. But that picture doesn’t explain why direction is
          so consistent: why we remember yesterday but not tomorrow, and why
          order tends to dissolve unless effort is applied.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Here, time is treated as something that{" "}
          <span className="font-semibold">emerges</span> when states are ordered
          in a way that is not symmetrically reversible. You don’t need clocks
          to get ordering. You only need an asymmetry in how states can follow
          one another.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Ordering without clocks</h2>
        <p className="text-slate-300 leading-relaxed">
          If one situation can happen only if another situation has already
          happened — but not the other way around — then you already have a
          before/after structure. This is an ordering relation, even if you
          never mention seconds, durations, or “flow.”
        </p>
        <p className="text-slate-300 leading-relaxed">
          Stack enough persistent asymmetries like that together and you get
          something we naturally label as time: a stable, global “this tends to
          come before that.”
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Constraint and possibility</h2>
        <p className="text-slate-300 leading-relaxed">
          To understand why direction appears so naturally, it helps to think in
          terms of <span className="font-semibold">constraint</span>.
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>A constrained system has fewer configurations it can be in.</li>
          <li>
            A less constrained system has more configurations available.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          This is a structural point, not a probabilistic one: constraints shrink
          the space of allowable states; removing constraints expands it.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Why direction emerges naturally</h2>
        <p className="text-slate-300 leading-relaxed">
          If a system is in a tightly constrained state, there are only a few
          ways it can continue while staying constrained. But if constraint
          relaxes, there are suddenly many more continuations available.
        </p>
        <p className="text-slate-300 leading-relaxed">
          That creates an asymmetry: it is “easier” (structurally, not morally)
          to go from fewer options to more options than to go from more options
          back into fewer — because returning requires coordinated structure
          capable of re-imposing restrictions.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Nothing needs to be pushed or pulled. Direction appears because one
          side of the transition has vastly more available next-steps than the
          other.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">A simple analogy: water leaving a maze</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Imagine water moving through a maze. Inside the maze, motion is
          constrained: narrow paths, forced turns, limited options. Once the
          water exits, motion becomes unconstrained: open space, many paths.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          The water doesn’t “prefer” the open space. There is no attraction
          required. It moves that way because there are more ways to move once
          constraints are gone.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Why constraints don’t reappear “for free”</h2>
        <p className="text-slate-300 leading-relaxed">
          Constraints can break locally without explanation — they only require
          failure of maintenance. But new constraints do not appear “for free.”
          To re-constrain something, you need existing coordinated structure:
          funnels, walls, filters, boundaries, rule-sets.
        </p>
        <p className="text-slate-300 leading-relaxed">
          This is why reversals are possible in principle but unstable in
          practice. The world can locally become more ordered, but doing so
          typically requires exporting disorder elsewhere — and that export is
          itself part of the asymmetry.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Combinatorial sinks</h2>
        <p className="text-slate-300 leading-relaxed">
          Less constrained states behave like “sinks” in possibility space — not
          because anything pulls systems toward them, but because once you’re
          there, there are far more ways to stay loosely constrained than to
          climb back into a very specific configuration.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The result is an overwhelming structural bias toward continuation into
          larger spaces of possibility. That bias is what we experience as time
          having a direction.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Why this matters downstream</h2>
        <p className="text-slate-300 leading-relaxed">
          Once you have reliable direction, you also have the conditions for
          records, memory, accumulation, learning, and coordinated action.
          Without direction, value and purpose would have no stable meaning —
          because “improvement over time” would collapse into symmetry.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Time’s direction is not an extra metaphysical feature. It is the kind
          of asymmetry you should expect once constrained informational relations
          exist at all.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep" className="sm:w-1/2 w-full">
            <Button variant="outline" className="w-full border-slate-700">
              Back to Deep Dive index
            </Button>
          </Link>
          <Link href="/ontology" className="sm:w-1/2 w-full">
            <Button
              variant="outline"
              className="w-full border-sky-700/60 text-sky-300 hover:bg-sky-950/40"
            >
              Back to Ontological chain
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}