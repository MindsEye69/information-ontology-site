// app/deep/value/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Value (V) – Technical notes | Informational Ontology",
  description:
    "Formal treatment of Value (V) as preference over informational states in Informational Ontology.",
};

export default function FormalValuePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical notes · Value (V)
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          V as Preference over Difference
        </h1>
        <p className="text-sm text-slate-300">
          This page formalizes Value (V) as structured preference over possible
          states, grounded in Awareness (A). Once a system is aware of
          differences in its own and its environment&apos;s states, some of
          those differences will be more compatible with its continued
          existence or goals than others. Value is how that compatibility is
          encoded.
        </p>
      </section>

      {/* Abstract */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">Abstract</h2>
        <p className="text-sm text-slate-300">
          In Informational Ontology, value is not an arbitrary projection but a
          structural consequence of awareness. A system that encodes and
          predicts differences can rank those differences in terms of their
          contribution to its own stability, integrity, or goals. We formalize
          value as a function over state spaces (or informational states) and
          show how it organizes action. This prepares the ground for Meaning
          (M), which is value structured across representational schemes.
        </p>
      </section>

      {/* 1. State space and value function */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          1. State Spaces and Value Functions
        </h2>
        <p className="text-sm text-slate-300">
          Retain S as a Δ-structured state space, and suppose a system is
          aware of S in the sense described in the A-module. We introduce:
        </p>
        <p className="font-mono text-xs text-slate-300">
          V: S → ℝ
        </p>
        <p className="text-sm text-slate-300">
          where V(s) is the value the system assigns to being in state s.
          Higher values correspond (at minimum) to greater compatibility with
          the system&apos;s persistence or objectives.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Definition 1.</span> A{" "}
          <span className="italic">value function</span> on S is any mapping
          V: S → ℝ such that for some dynamics on S, the system tends (in
          expectation) to move toward states with higher V.
        </p>
      </section>

      {/* 2. Awareness implies the possibility of value */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          2. Awareness Implies the Possibility of Value
        </h2>
        <p className="text-sm text-slate-300">
          IO&apos;s claim is not that all awareness carries value, but that
          once a system is aware of differences that bear on its persistence,
          a value structure is available.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Proposition 1.</span> Let a system S
          be aware of a subset S<sub>safe</sub> ⊆ S in which its structural
          integrity is maintained and of S<sub>unsafe</sub> ⊆ S in which it is
          threatened. If the system can distinguish S<sub>safe</sub> from
          S<sub>unsafe</sub>, then there exists a value function V such that:
        </p>
        <p className="font-mono text-xs text-slate-300">
          ∀s ∈ S<sub>safe</sub>, ∀t ∈ S<sub>unsafe</sub>, V(s) &gt; V(t).
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Sketch.</span> Define V(s) = 1 for
          s ∈ S<sub>safe</sub>, V(t) = 0 for t ∈ S<sub>unsafe</sub>, and
          extend arbitrarily elsewhere. The fact that the system can track the
          distinction means this assignment can be behaviorally realized. ◻︎
        </p>
        <p className="text-sm text-slate-300">
          Thus, Awareness of differences that matter for survival entails the
          conceptual possibility of a value function that ranks them.
        </p>
      </section>

      {/* 3. Value gradients and action */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          3. Value Gradients and Action Selection
        </h2>
        <p className="text-sm text-slate-300">
          Given a value function V on S and a set of possible actions A with
          transition probabilities P(s&apos; | s, a), we can define expected
          value:
        </p>
        <p className="font-mono text-xs text-slate-300">
          Q(s, a) = 𝔼[V(s&apos;) | s, a].
        </p>
        <p className="text-sm text-slate-300">
          An action policy π: S → A that tends to choose actions with higher
          Q(s, a) implements the value structure in behavior. In IO, this is
          not merely a decision-theoretic convenience but a manifestation of
          how value organizes the system&apos;s traversal of its Δ-structured
          state space.
        </p>
      </section>

      {/* 4. Value as informational density */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          4. Value and Informational Density
        </h2>
        <p className="text-sm text-slate-300">
          IO introduces the notion of{" "}
          <span className="italic">ethical density</span> elsewhere as coherent
          variation under constraint. Here we note the structural link: states
          with high value often sit at regions of high informational density
          (rich possibilities) but also high coherence (constraints that
          preserve the system).
        </p>
        <p className="text-sm text-slate-300">
          This is not needed for the basic definition of V but motivates why
          value tends to cluster in certain informational regions rather than
          being evenly spread.
        </p>
      </section>

      {/* 5. From Value to Meaning */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          5. From Value to Meaning
        </h2>
        <p className="text-sm text-slate-300">
          Meaning (M) in IO is defined as value structured across informational
          representations. Once a system has:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>representations Σ of states, and</li>
          <li>a value function V over those states,</li>
        </ul>
        <p className="text-sm text-slate-300">
          we can speak of which representations &quot;mean more&quot; to the
          system: they stand for states with higher V, or for patterns that
          shape many valuable trajectories.
        </p>
        <p className="text-sm text-slate-300">
          The next technical module makes this precise by introducing semantic
          structures over Σ and linking them to value.
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
