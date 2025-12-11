// app/deep/purpose/formal/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Purpose (P) – Technical notes | Informational Ontology",
  description:
    "Formal exposition of Purpose (P) as teleological structure arising from meaning, value gradients, and informational persistence.",
};

export default function FormalPurposePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">

      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-purple-400">
          Technical notes · Purpose (P)
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          P as Teleological Extension of Meaning
        </h1>
        <p className="text-sm text-slate-300">
          This page provides the formal definition of Purpose (P) as the
          long-horizon teleological orientation of an informational system whose
          meaning structures guide its trajectory through state space.
        </p>
      </section>

      {/* 1. Preliminaries */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">1. Preliminaries</h2>
        <p className="text-sm text-slate-300">
          Let S be an informationally-aware system with:
        </p>
        <ul className="list-disc pl-5 text-sm text-slate-300">
          <li>state space Ω</li>
          <li>transition structure T</li>
          <li>Value functional V</li>
          <li>Meaning structure M: Ω → ℳ, where ℳ is a semantic space</li>
        </ul>
        <p className="text-sm text-slate-300">
          Purpose is not reducible to Value or Meaning alone. It is a temporal
          structure: an orientation of behavior across extended horizons.
        </p>
      </section>

      {/* 2. Definition */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          2. Formal Definition of Purpose
        </h2>

        <p className="font-mono text-base text-slate-200">
          Definition (Purpose Functional).  
          P: Ω × ℕ → ℝ is a functional assigning long-term expected evaluative
          return to a trajectory beginning in state x₀.
        </p>

        <p className="text-sm text-slate-300">
          Purpose extends Value into projected futures; it encodes the system’s
          teleological orientation.
        </p>

        <p className="font-mono text-base text-slate-200">
          P(x₀, τ) = E[ Σₙ γⁿ V(xₙ) | T, M ]
        </p>

        <p className="text-sm text-slate-300">
          where γ ∈ (0,1] is a temporal discount factor and τ is a feasible
          trajectory under the system dynamics. This mirrors decision-theoretic
          formulations but is grounded in informational ontology rather than
          external reward.
        </p>
      </section>

      {/* 3. Derivation */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          3. Deriving Purpose from Meaning
        </h2>

        <p className="text-sm text-slate-300">
          Meaning structures M provide semantic relevance over states. Purpose
          emerges when these semantic relations guide the selection of
          trajectories in Ω.
        </p>

        <p className="font-mono text-base text-slate-200">
          Proposition 1.  
          If Meaning assigns relevance structures over Ω, and Value assigns
          evaluative gradients, then Purpose exists as the temporal extension
          that selects trajectories maximizing long-term coherence.
        </p>

        <p className="font-mono text-base text-slate-200">
          Proposition 2 (Teleological Necessity).  
          In any system with stable meaning structures, purpose is the unique
          functional that encodes the consistent pursuit of relevance-weighted
          evaluative futures.
        </p>
      </section>

      {/* 4. Purpose as teleological dynamics */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          4. Purpose as Informational Teleodynamics
        </h2>
        <p className="text-sm text-slate-300">
          Purpose describes directional behavior that cannot be captured by
          instantaneous Value alone. It identifies attractors in extended
          informational dynamics, often corresponding to goals, projects,
          missions, or long-term stabilizing structures.
        </p>
      </section>

      {/* 5. Conclusion */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">5. Conclusion</h2>
        <p className="text-sm text-slate-300">
          Purpose (P) formalizes the teleological structure at the apex of the
          IO chain: the long-term orientation of an informational system toward
          states that preserve or extend its meaning and value structures. This
          completes the formal Δ → R → I → A → V → M → P hierarchy.
        </p>
      </section>

      {/* Back link */}
      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/purpose">
          <Button variant="outline" className="border-slate-700">
            ← Back to Purpose deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
