// app/deep/delta/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Difference (Δ) – Technical notes | Informational Ontology",
  description:
    "Formal exposition of Difference (Δ) as the unique, non-derivable primitive in Informational Ontology.",
};

export default function FormalDeltaPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header / tag */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical notes · Difference (Δ)
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          Δ as Ontological Axiom
        </h1>
        <p className="text-sm text-slate-300">
          This page gives a formally rigorous treatment of Difference (Δ) as
          the unique, non-derivable ontological primitive in Informational
          Ontology (IO). It assumes familiarity with first-order logic,
          axiomatic method, and basic set-theoretic notation.
        </p>
      </section>

      {/* Abstract */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">Abstract</h2>
        <p className="text-sm text-slate-300">
          Informational Ontology begins from a single primitive: difference.
          The central claim is that{" "}
          <span className="font-semibold">to exist is to differ</span>, and that
          difference is the only candidate for an ontological axiom that cannot
          be denied without presupposing it. We formalize this claim by
          introducing a primitive binary predicate Δ, stating existence and
          ineliminability axioms, and showing how Δ underwrites identity,
          relation, and information. The goal is not to model difference in a
          particular physical theory, but to show that in any world where
          &quot;existence&quot; is meaningful, some structure extensionally
          equivalent to Δ must be instantiated.
        </p>
      </section>

      {/* 1. Preliminaries */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          1. Preliminaries and Notation
        </h2>
        <p className="text-sm text-slate-300">
          We work in a first-order meta-language enriched with a minimal
          ontological vocabulary. The point is not to reduce Δ to set theory,
          but to make IO&apos;s foundational claim legible to analytic
          metaphysics and the philosophy of information.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>
            <span className="font-mono">U</span> denotes a non-empty domain of
            discourse (the set of items that can, in principle, exist in a
            given world-model).
          </li>
          <li>
            <span className="font-mono">Δ(x, y)</span> is a primitive binary
            predicate read as &quot;x differs from y&quot;. Δ is not defined in
            terms of more basic notions.
          </li>
          <li>
            <span className="font-mono">=</span> is the usual identity relation
            of first-order logic; we argue that its non-trivial use presupposes
            Δ.
          </li>
          <li>
            Angle brackets like <span className="font-mono">&lt;x, y&gt;</span>{" "}
            belong to the meta-language (we use them to talk about ordered
            pairs); they are not part of the object language of IO.
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          The modest formal project here is to show that any ontological theory
          that allows talk of distinct items, states, or propositions must
          operate in a language that presupposes a relation extensionally
          equivalent to Δ.
        </p>
      </section>

      {/* 2. Axiom Δ */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          2. The Axiom of Difference
        </h2>
        <p className="text-sm text-slate-300">
          Δ is primitive in two senses: it is{" "}
          <span className="italic">logically primitive</span> (not defined in
          terms of more basic concepts) and{" "}
          <span className="italic">ontologically primitive</span> (not grounded
          in any deeper feature of reality).
        </p>

        <h3 className="text-base font-semibold text-slate-50">
          2.1 Informal Principle
        </h3>
        <blockquote className="border-l-2 border-slate-700 pl-4 text-sm text-slate-200">
          <span className="font-semibold">(Δ-Informal)</span> To exist is to
          differ. If nothing differed in any respect, nothing would exist in any
          respect.
        </blockquote>

        <h3 className="text-base font-semibold text-slate-50">
          2.2 Formal Axioms
        </h3>
        <p className="text-sm text-slate-300">
          A minimal formalization requires both instantiation and
          ineliminability.
        </p>
        <p className="font-mono text-xs text-slate-300">
          Axiom Δ1 (Existence of Difference): ∃x ∈ U ∃y ∈ U such that Δ(x, y).
        </p>
        <p className="text-sm text-slate-300">
          There exist at least two items in the domain that differ in some
          respect. We do not yet specify in virtue of what they differ; that
          belongs to later stages (Relation, Information, etc.).
        </p>
        <p className="font-mono text-xs text-slate-300">
          Axiom Δ2 (Ineliminability in Assertion): For any well-formed formula
          ϕ, the performative act of asserting &quot;¬∃x ∈ U ∃y ∈ U Δ(x, y)&quot;
          presupposes at least one instantiation of Δ.
        </p>
        <p className="text-sm text-slate-300">
          Δ2 is a meta-level constraint: any attempt to deny the existence of
          difference is self-undermining, because the act of formulating and
          tokening that denial already requires differences (between the
          assertion and silence, between symbols, between truth-values, etc.).
        </p>
      </section>

      {/* 3. Non-derivability */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          3. Non-derivability of Δ
        </h2>
        <p className="text-sm text-slate-300">
          Saying that Δ is ontologically primitive means that no alternative
          ontological starting point can be specified without implicitly
          appealing to difference. We can show this by considering generic
          &quot;starting-point&quot; predicates and revealing their dependence
          on Δ.
        </p>

        <h3 className="text-base font-semibold text-slate-50">
          3.1 Generic Competing Primitives
        </h3>
        <p className="text-sm text-slate-300">
          Let <span className="font-mono">P</span> be any unary predicate
          proposed as an ontological primitive (e.g. &quot;substance&quot;,
          &quot;matter&quot;, &quot;mind&quot;, &quot;experience&quot;,
          &quot;energy&quot;).
        </p>
        <p className="font-mono text-xs text-slate-300">
          (P0) &nbsp; ∃x ∈ U such that P(x).
        </p>
        <p className="text-sm text-slate-300">
          For <span className="font-mono">P</span> to be non-trivial, there must
          be at least two admissible configurations: items that are P and
          items that are not, or at least two P-instances that can be
          discriminated.
        </p>

        <h3 className="text-base font-semibold text-slate-50">
          3.2 Δ-Prior Constraint
        </h3>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">
            Proposition 1 (Δ-Prior Constraint).
          </span>{" "}
          For any non-trivial ontological predicate P, if P individuates a
          domain in which distinct items, states, or properties can be
          meaningfully discriminated, then the language in which P is expressed
          presupposes an extensionally equivalent relation to Δ.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Sketch of proof.</span> Assume P is
          non-trivial: there exist x, y ∈ U such that both satisfy P and are
          distinguishable. &quot;Distinguishable&quot; minimally means that
          there exists some predicate Q with Q(x) ∧ ¬Q(y) or ¬Q(x) ∧ Q(y). The
          possibility of formulating that contrast requires that we can say
          &quot;x differs from y&quot; in some respect; call this relation
          Δ<sub>P</sub>. Even if Δ<sub>P</sub> is not explicitly symbolized,
          the theory tolerates an interpretation where a binary predicate plays
          the role of &quot;difference&quot;. That role is what Δ names in IO.
          Hence, Δ (or its functional equivalent) is prior to any candidate P. ◻︎
        </p>
      </section>

      {/* 4. Self-refuting denial */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          4. Self-refuting Denial of Difference
        </h2>
        <p className="text-sm text-slate-300">
          A central move in IO&apos;s axiomatics is that Δ cannot be coherently
          denied. This is a strengthened version of Δ2: the attempt to assert
          the absence of all difference destroys the very conditions of
          assertion.
        </p>
        <p className="font-mono text-xs text-slate-300">
          (¬Δ) &nbsp; &quot;There are no differences whatsoever.&quot;
        </p>
        <p className="text-sm text-slate-300">
          If (¬Δ) were true, there would be no difference between the
          occurrence and non-occurrence of any token (including this sentence),
          no difference between truth and falsity, and no difference between
          asserting and not asserting (¬Δ). But any concrete token of (¬Δ)
          already discriminates:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>this token from its absence,</li>
          <li>this sentence from others,</li>
          <li>its asserted content from its negation.</li>
        </ul>
        <p className="text-sm text-slate-300">
          Thus, the use of (¬Δ) in a context C entails ∃x, y ∈ U such that
          Δ(x, y). The denial is pragmatically self-refuting.
        </p>
      </section>

      {/* 5. Δ and identity / relation / information */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          5. Δ as Precondition for Identity, Relation, and Information
        </h2>
        <p className="text-sm text-slate-300">
          With Δ established as ineliminable, we can state its role as a
          precondition for more familiar structures that later IO stages
          develop.
        </p>

        <h3 className="text-base font-semibold text-slate-50">
          5.1 Identity
        </h3>
        <p className="text-sm text-slate-300">
          The classical identity relation &quot;=&quot; is governed by
          axioms like reflexivity, symmetry, and transitivity. However, its
          non-triviality depends on the possibility of non-identity.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Proposition 2.</span> If identity is
          non-trivial in a domain U (i.e. there exist at least two items that
          can fail to be identical), then Δ is presupposed.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Sketch.</span> For x ≠ y to be
          meaningful, there must be some respect in which x and y can differ.
          The intelligibility of &quot;=&quot; in any non-degenerate model thus
          presupposes a binary relation extensionally equivalent to Δ. ◻︎
        </p>

        <h3 className="text-base font-semibold text-slate-50">
          5.2 Relation as Structured Difference (Preview)
        </h3>
        <p className="text-sm text-slate-300">
          The next IO stage, R, treats relations as structure over differences.
          Once distinct items exist, there is the question of how they differ
          and how they stand to one another. Formally, we can represent the set
          of all instantiated differences as:
        </p>
        <p className="font-mono text-xs text-slate-300">
          D = &#123;&lt;x, y&gt; ∈ U × U : Δ(x, y)&#125;.
        </p>
        <p className="text-sm text-slate-300">
          Once D exists, we can study its structure (connectivity, clustering,
          paths, etc.). That structure is what IO calls relation. Informally:
        </p>
        <blockquote className="border-l-2 border-slate-700 pl-4 text-sm text-slate-200">
          Relation is difference plus pattern; information is relation plus
          constraint.
        </blockquote>
      </section>

      {/* 6. Refutation conditions */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          6. Refutation Conditions for Δ
        </h2>
        <p className="text-sm text-slate-300">
          IO is axiomatic, so it is important to say what would count as
          refutation. Δ is not a free assumption; it stands or falls with the
          possibility of a difference-free yet intelligible ontology.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Refutation criterion.</span> To
          refute Δ, one would need to specify a primitive Q such that:
        </p>
        <ol className="list-decimal space-y-1 pl-5 text-sm text-slate-300">
          <li>
            a complete description of a world W can be given using Q without
            employing any discriminations, and
          </li>
          <li>
            reference to difference is eliminable from both the language
            describing W and the meta-language in which the theory of W is
            articulated.
          </li>
        </ol>
        <p className="text-sm text-slate-300">
          As soon as a theory admits distinct states, propositions, truth
          values, or semantic roles, it is already operating in a Δ-structured
          space, even if the symbol &quot;Δ&quot; never appears.
        </p>
      </section>

      {/* 7. Conclusion */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          7. Conclusion and Outlook
        </h2>
        <p className="text-sm text-slate-300">
          We have articulated Δ as the unique ontological primitive in IO by:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>stating existence and ineliminability axioms for difference,</li>
          <li>
            showing that any competing primitive P presupposes Δ (Δ-Prior
            Constraint),
          </li>
          <li>
            demonstrating that global denial of difference is pragmatically
            self-refuting, and
          </li>
          <li>
            identifying Δ as a precondition for identity, relation, and
            information.
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          The next technical module, <span className="font-semibold">R — Relation</span>,
          will take Δ as given and formalize the move from mere difference to
          structured difference using graph-theoretic and topological tools.
          That structure, in turn, supports the information-theoretic treatment
          on the <span className="font-semibold">I — Information</span> page.
        </p>
      </section>

      {/* Back link */}
      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/delta">
          <Button variant="outline" className="border-slate-700">
            ← Back to Difference deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
