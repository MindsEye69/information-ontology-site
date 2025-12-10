// app/deep/meaning/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Meaning (M) – Technical notes | Informational Ontology",
  description:
    "Formal treatment of Meaning (M) as structured value over representations in Informational Ontology.",
};

export default function FormalMeaningPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical notes · Meaning (M)
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          M as Structured Value in Representations
        </h1>
        <p className="text-sm text-slate-300">
          This page formalizes Meaning (M) as value structured across
          representational states. Given Awareness (A) and Value (V), meaning
          arises when a system associates internal symbols or models with
          valued states of itself and its environment in a systematic way.
        </p>
      </section>

      {/* Abstract */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">Abstract</h2>
        <p className="text-sm text-slate-300">
          In Informational Ontology, meaning is not a primitive, nor is it
          purely subjective; it is the structure of value within and across
          representations. We treat meaning as a mapping from representational
          states to value-relevant states, together with a value function over
          those states. This yields an IO-compatible counterpart to semantic
          theories that emphasize reference, use, or inferential role,
          integrating them into the Δ → R → I → A → V → M → P chain.
        </p>
      </section>

      {/* 1. Representational layer */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          1. Representations and Targets
        </h2>
        <p className="text-sm text-slate-300">
          Let Σ be a Δ-structured set of internal representations (as in the
          Awareness module), and let W be a Δ-structured set of world states
          (including internal bodily states if relevant).
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Definition 1.</span> A{" "}
          <span className="italic">semantic mapping</span> is a partial
          function:
        </p>
        <p className="font-mono text-xs text-slate-300">
          σ: Σ ⇀ W
        </p>
        <p className="text-sm text-slate-300">
          assigning to some representational states σ a corresponding target
          state in W. For σ(σ) = w, we say that &quot;σ represents w&quot;.
        </p>
      </section>

      {/* 2. Meaning as value-informed mapping */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          2. Meaning as Value-Informed Representation
        </h2>
        <p className="text-sm text-slate-300">
          Suppose we also have a value function V: W → ℝ as before. We can then
          define:
        </p>
        <p className="font-mono text-xs text-slate-300">
          M(σ) = V(σ(σ))
        </p>
        <p className="text-sm text-slate-300">
          for all σ in the domain of the semantic mapping. Here M(σ) is the{" "}
          <span className="italic">meaning-strength</span> or value-content of
          the representational state σ: how much it matters to the system,
          given what it stands for.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Definition 2.</span> Meaning (in IO&apos;s
          technical sense) is the function M: Σ ⇀ ℝ defined by composition of
          semantic mapping σ with value function V.
        </p>
        <p className="text-sm text-slate-300">
          In this sense, meaning is literally &quot;structured value&quot; over
          representational space.
        </p>
      </section>

      {/* 3. Inferential structure and networks of meaning */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          3. Inferential Role and Networks of Meaning
        </h2>
        <p className="text-sm text-slate-300">
          Representations in Σ are typically related to each other by
          inferential or associative links (e.g. one concept leading to
          another). Let R<sub>Σ</sub> ⊆ Σ × Σ be such a relation.
        </p>
        <p className="text-sm text-slate-300">
          A representation&apos;s meaning then depends not only on the value of
          what it directly stands for, but on the network of consequences it
          participates in. We can formalize a simple version:
        </p>
        <p className="font-mono text-xs text-slate-300">
          M*(σ) = M(σ) + ∑<sub>σ&apos;: RΣ(σ, σ&apos;)</sub> w(σ, σ&apos;) ·
          M(σ&apos;)
        </p>
        <p className="text-sm text-slate-300">
          where w(σ, σ&apos;) are weights reflecting the strength of
          inferential or associative links. M* is a network-augmented measure
          of meaning: a representation signifies more insofar as it opens
          pathways toward other valued representations.
        </p>
      </section>

      {/* 4. Meaning and misrepresentation */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          4. Misrepresentation and Error
        </h2>
        <p className="text-sm text-slate-300">
          Misrepresentation in IO occurs when σ(σ) ≠ w, i.e. when the system&apos;s
          mapping from representation to world state is incorrect, yet the
          value structure still treats σ as if σ(σ) were correct.
        </p>
        <p className="text-sm text-slate-300">
          This is crucial for understanding meaning dynamically: M is not a
          static assignment but can be revised when the system detects that its
          representational mappings fail to support valued outcomes.
        </p>
      </section>

      {/* 5. From Meaning to Purpose */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          5. From Meaning to Purpose
        </h2>
        <p className="text-sm text-slate-300">
          Purpose (P) in IO is defined as meaning extended through time: the
          organization of meaningful representations into trajectories of
          action. Once a system:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>represents the world (Σ, σ),</li>
          <li>values outcomes (V), and</li>
          <li>
            connects representations in ways that shape action (R<sub>Σ</sub>),
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          we can speak of its &quot;purposes&quot;: stable patterns of
          behavior oriented toward configurations of high M*.
        </p>
        <p className="text-sm text-slate-300">
          The next technical module makes this explicit in terms of policies,
          trajectories, and teleodynamic structure.
        </p>
      </section>

      {/* Back link */}
      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/meaning">
          <Button variant="outline" className="border-slate-700">
            ← Back to Meaning deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
