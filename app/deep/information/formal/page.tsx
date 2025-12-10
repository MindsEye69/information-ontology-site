// app/deep/information/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Information (I) – Technical notes | Informational Ontology",
  description:
    "Formal treatment of Information (I) as structured difference and constrained relation in Informational Ontology.",
};

export default function FormalInformationPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical notes · Information (I)
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          I as Structured Difference
        </h1>
        <p className="text-sm text-slate-300">
          This page formalizes Information (I) as structured difference:
          patterns in Relation (R) that are stable enough to encode, transmit,
          and transform distinctions. We connect the IO notion of information
          to standard tools from information theory (entropy, mutual
          information) while emphasizing its ontological rather than purely
          statistical status.
        </p>
      </section>

      {/* Abstract */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">Abstract</h2>
        <p className="text-sm text-slate-300">
          In Informational Ontology, information is not an abstract measure
          attached to messages, but the structural form of difference itself
          when organized through relation under constraint. Starting from Δ and
          R, we define informational structures as those relational patterns
          that support reliable encoding and transformation. Using entropy-like
          measures as a guide (rather than an ultimate foundation), we show how
          information emerges from constrained variation and why I is the
          natural bridge from structural ontology to awareness in the next
          stage.
        </p>
      </section>

      {/* 1. Preliminaries and Notation */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          1. Preliminaries and Notation
        </h2>
        <p className="text-sm text-slate-300">
          Retaining U as a domain and Δ, R as defined in prior modules, we now
          introduce a more explicitly information-theoretic vocabulary.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>
            A <span className="font-mono">state space</span> S is a set of
            possible configurations (e.g. of a system, signal, or environment).
          </li>
          <li>
            A <span className="font-mono">random variable</span> X on S is a
            function from an underlying sample space Ω to S; for our purposes,
            we can treat X as a variable ranging over S with associated
            probabilities p(s).
          </li>
          <li>
            The <span className="font-mono">Shannon entropy</span> of X is H(X)
            = −∑ p(s) log p(s), measuring expected surprise.
          </li>
          <li>
            The <span className="font-mono">mutual information</span> of X and
            Y is I(X; Y) = H(X) + H(Y) − H(X, Y), measuring reduction in
            uncertainty about one variable given the other.
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          In IO, these quantities are interpreted as <span className="italic">
            measures over structures grounded in Δ and R
          </span>, not as free-floating mathematical artifacts.
        </p>
      </section>

      {/* 2. From Relation to Information */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          2. From R to I: Structured Difference Under Constraint
        </h2>
        <p className="text-sm text-slate-300">
          Informally, we can express the R → I step as:
        </p>
        <blockquote className="border-l-2 border-slate-700 pl-4 text-sm text-slate-200">
          Information is what relational structure looks like when it is
          constrained, repeatable, and exploitable by systems.
        </blockquote>
        <p className="text-sm text-slate-300">
          Consider a system with state space S and a set of admissible
          transitions T ⊆ S × S. Let R<sub>S</sub> be the relation capturing
          which states can be distinguished (via Δ) and how they are connected
          (via T). An informational structure is present when:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>not all transitions are allowed (constraints), and</li>
          <li>
            those constraints can be exploited to reduce uncertainty about S.
          </li>
        </ul>

        <p className="text-sm text-slate-300">
          <span className="font-semibold">Definition 1.</span> An{" "}
          <span className="italic">informational channel</span> in IO is a
          triple (S, T, μ) where:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>S is a Δ-structured state space,</li>
          <li>
            T ⊆ S × S is a Δ-consistent transition relation (only between
            distinct states),
          </li>
          <li>
            μ is a measure assigning probabilities or frequencies to transitions
            in T.
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          The informational content of such a channel depends on how μ departs
          from maximal entropy over admissible transitions.
        </p>
      </section>

      {/* 3. Entropy as Measure of Differentiation */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          3. Entropy as a Measure of Differentiation
        </h2>
        <p className="text-sm text-slate-300">
          Shannon entropy quantifies how finely a probability distribution
          differentiates its support: uniform distributions are maximally
          undifferentiated, highly peaked distributions are highly
          differentiated. In IO, this is interpreted structurally:
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Proposition 1.</span> For a fixed
          Δ-structured state space S, higher entropy distributions over S
          correspond to more even distribution of realized differences, while
          lower entropy distributions correspond to concentration on specific
          differences.
        </p>
        <p className="text-sm text-slate-300">
          This does not make entropy the essence of information; rather, it is
          a way to quantify how a system&apos;s realized states explore the
          possibility space carved out by Δ and R.
        </p>
      </section>

      {/* 4. Mutual Information and Structural Coupling */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          4. Mutual Information and Structural Coupling
        </h2>
        <p className="text-sm text-slate-300">
          Mutual information I(X; Y) measures how much knowing X reduces
          uncertainty about Y. Ontologically, this corresponds to{" "}
          <span className="italic">structural coupling</span>: patterns in one
          system systematically track patterns in another.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Definition 2.</span> Two Δ-structured
          systems S<sub>1</sub>, S<sub>2</sub> are informationally coupled if
          there exist variables X on S<sub>1</sub> and Y on S<sub>2</sub> such
          that I(X; Y) &gt; 0 with respect to some joint measure μ.
        </p>
        <p className="text-sm text-slate-300">
          In IO, this is the formal backbone of representation: a system
          &quot;represents&quot; something when its internal states stand in a
          stable informational coupling with external states. This becomes
          crucial for Awareness (A), where such couplings become internalized
          as models.
        </p>
      </section>

      {/* 5. Structural vs. Statistical Information */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          5. Structural vs. Statistical Information
        </h2>
        <p className="text-sm text-slate-300">
          IO distinguishes between:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>
            <span className="font-semibold">Structural information:</span>{" "}
            relational patterns that exist independently of any particular
            probability measure (e.g. possible state transitions, symmetries,
            invariants).
          </li>
          <li>
            <span className="font-semibold">Statistical information:</span>{" "}
            numerical measures like H and I(X; Y) that quantify how those
            structures are actually traversed or realized.
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          Structural information is primary in IO: it is what reality is like
          in virtue of Δ and R. Statistical information is derivative: it is
          how reality happens to be explored by specific processes.
        </p>
      </section>

      {/* 6. Toward Awareness */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          6. Information as Precondition for Awareness
        </h2>
        <p className="text-sm text-slate-300">
          Awareness, in IO, arises when informational structures become{" "}
          <span className="italic">integrated and self-referential</span>. The
          step from I to A is not a leap from physics to mystery, but a
          tightening of information into closed loops and internal models.
        </p>
        <p className="text-sm text-slate-300">
          In the next technical module, we formalize Awareness as what happens
          when information about differences is not merely present, but{" "}
          maintained, integrated, and recursively applied by a system to itself
          and its environment.
        </p>
      </section>

      {/* Back link */}
      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/information">
          <Button variant="outline" className="border-slate-700">
            ← Back to Information deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
