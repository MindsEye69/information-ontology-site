// app/deep/purpose/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Purpose (P) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Purpose (P) as temporally extended, value-guided trajectories in informational systems.",
};

export default function PurposeDeepDivePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-12">
      <ExplanatoryBanner className=\"mb-8\" />
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-purple-400">
          Deep section · P — Purpose
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Purpose (P): when value runs through time
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 leading-relaxed">
          Purpose is what value looks like when you stretch it along time.
          Instead of asking &quot;Which state is better right now?&quot; a
          purposive system asks &quot;Which unfolding of states should I steer
          toward?&quot; IO treats purpose as the highest-level pattern in the
          Δ → R → I → A → V → M → P chain: the structural shape of
          value-laden information as it drives action.
        </p>
      </section>

      {/* Main explanation */}
      <section className="space-y-4">
        <p className="text-sm text-slate-300 leading-relaxed">
          By the time we reach Purpose in the chain, several things are already
          in place:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300 leading-relaxed">
          <li>
            differences and relations (Δ, R) structure what is even possible;
          </li>
          <li>
            information (I) organizes those possibilities under constraints;
          </li>
          <li>
            awareness (A) internalizes some of that structure in a model of
            self and world;
          </li>
          <li>
            value (V) tilts the space of possibilities toward “better” and away
            from “worse” for the system;
          </li>
          <li>
            meaning (M) weaves value and information into a network of
            structures that encode what the system treats as significant.
          </li>
        </ul>
        <p className="text-sm text-slate-300 leading-relaxed">
          Purpose is the way all of that becomes directional. A system has a
          purpose, in the IO sense, when its dynamics are not just reacting
          locally to what is better or worse, but reliably driving toward
          certain regions of its state space because of the meanings and values
          it carries.
        </p>
      </section>

      {/* Time and trajectories */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-100">
          Purposes as preferred trajectories
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Instead of imagining a single externally specified “goal state,” IO
          emphasizes <span className="italic">trajectories</span> — sequences of
          states a system tends to follow. A purpose can then be seen as a
          cluster of such trajectories that share a common shape: staying
          within certain bounds, achieving certain landmarks, avoiding certain
          collapses.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          For a simple organism, that might mean cycling through feeding,
          resting, and reproduction in ways that keep the organism intact. For a
          complex agent, it may involve long-term projects, norms, or missions.
          In both cases, what makes them &quot;purposes&quot; is that they are
          sustained by informational structures (I, A, M) and value gradients
          (V) that select some futures over others.
        </p>
      </section>

      {/* Next layers card */}
      <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-lg font-semibold text-slate-100">Next layers</h2>
        <p className="mt-1 text-sm text-slate-400 leading-relaxed">
          This page is the deeper, non-technical treatment of Purpose (P). For a
          more technical take—purpose functionals, policies, attractors, and
          time-extended constraint structure—use the technical layer.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep/purpose/formal">
            <Button className="w-full sm:w-auto">
              Dive even deeper (technical) →
            </Button>
          </Link>

          <Link href="/ontology">
            <Button
              variant="outline"
              className="w-full border-slate-700 sm:w-auto"
            >
              Back to Ontological chain
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}