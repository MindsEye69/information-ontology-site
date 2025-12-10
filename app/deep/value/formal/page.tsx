// app/deep/value/formal/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Value (V) – Technical notes | Informational Ontology",
  description:
    "Formal treatment of Value (V) as emergent evaluative structure from awareness and informational self-maintenance.",
};

export default function FormalValuePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-green-400">
          Technical notes · Value (V)
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          V as Evaluative Gradient in Informational Systems
        </h1>
        <p className="text-sm text-slate-300">
          This page provides the rigorous foundation for Value (V) as the
          necessary evaluative structure arising from informational
          self-maintenance. It assumes familiarity with the formal definitions
          of Information (I) and Awareness (A).
        </p>
      </section>

      {/* 1. Preliminaries */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          1. Preliminaries
        </h2>
        <p className="text-sm text-slate-300">
          Let S be an informationally integrated system with:
        </p>
        <ul className="list-disc pl-5 text-sm text-slate-300">
          <li>state space Ω</li>
          <li>transition structure T: Ω → Ω</li>
          <li>
            internal awareness function A: Ω → Σ, mapping system states to
            internal informational encodings
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          We define Value not as subjective preference, but as the structural
          gradient through which a system stabilizes and extends its
          informational coherence.
        </p>
      </section>

      {/* 2. Emergence of Value */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          2. The Necessity of Value
        </h2>
        <p className="text-sm text-slate-300">
          An aware system must discriminate between states that strengthen or
          degrade its own informational coherence. This yields an evaluative
          ordering over Ω.
        </p>

        <p className="font-mono text-xs text-slate-300">
          Definition (Value Functional).  
          V: Ω → ℝ is any functional such that  
          V(x) &gt; V(y) ⇔ state x increases informational coherence relative
          to state y.
        </p>

        <p className="text-sm text-slate-300">
          Value is thus structurally necessary for any system with recursive
          informational awareness.
        </p>
      </section>

      {/* 3. Derivation */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          3. Derivation of Value from Awareness
        </h2>

        <p className="font-mono text-xs text-slate-300">
          Proposition 1.  
          If a system S has awareness A of its own informational state, then a
          non-trivial Value functional V necessarily exists.
        </p>

        <p className="text-sm text-slate-300">
          Sketch: Awareness provides internal models over Ω. Any internal model
          that distinguishes change must encode deviations from favorable or
          unfavorable informational configurations. This discrimination induces
          an ordering, which is V.
        </p>

        <p className="font-mono text-xs text-slate-300">
          Proposition 2 (Evaluative Gradient).  
          For any trajectory τ = (x₀, x₁, x₂, …) under T,  
          S exhibits evaluative behavior iff ∃V such that V(xₙ₊₁) ≥ V(xₙ) for
          non-random transitions.
        </p>
      </section>

      {/* 4. Value as a stability structure */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          4. Value as System Stability Criterion
        </h2>
        <p className="text-sm text-slate-300">
          Value encodes the tendency of a system to maintain coherent internal
          informational structure. High-value states correspond to attractors
          in the system’s informational dynamics.
        </p>
      </section>

      {/* 5. Conclusion */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">5. Conclusion</h2>
        <p className="text-sm text-slate-300">
          Value is the mathematically necessary evaluative consequence of a
          system possessing internal awareness. It formalizes the gradient by
          which systems regulate themselves, and forms the basis of Meaning (M).
        </p>
      </section>

      {/* Back link */}
      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/value">
          <Button variant="outline" className="border-slate-700">
            ← Back to Value deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
