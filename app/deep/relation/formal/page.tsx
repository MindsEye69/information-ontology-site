// app/deep/relation/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Relation (R) – Technical notes | Informational Ontology",
  description:
    "Formal treatment of Relation (R) as structure over Difference (Δ) in Informational Ontology.",
};

export default function FormalRelationPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical notes · Relation (R)
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          R as Structured Difference
        </h1>
        <p className="text-sm text-slate-300">
          This page develops Relation (R) as structure on top of Difference (Δ).
          Where Δ guarantees that some items differ, R captures how those
          differences are organized: which items are connected, by what
          pattern, and with what structural properties. The treatment here is
          graph-theoretic and purely ontological; it does not assume any
          particular physics.
        </p>
      </section>

      {/* Abstract */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">Abstract</h2>
        <p className="text-sm text-slate-300">
          Given Δ as the primitive of Informational Ontology, Relation (R) is
          introduced as the structural organization of instantiated
          differences. Rather than treating relations as additional ontological
          primitives, IO defines R as pattern over Δ: a subset of the Cartesian
          product U × U endowed with properties such as connectivity,
          symmetry, and composability. We show that once Δ is granted, R is
          unavoidable, and that R supplies the necessary scaffolding for
          information (I) in the next stage of the chain.
        </p>
      </section>

      {/* 1. Preliminaries */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          1. Preliminaries and Notation
        </h2>
        <p className="text-sm text-slate-300">
          As in the Δ module, let <span className="font-mono">U</span> denote a
          non-empty domain of discourse, and let Δ(x, y) be a primitive
          predicate meaning &quot;x differs from y&quot;.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>
            <span className="font-mono">U × U</span> is the Cartesian product
            of U with itself.
          </li>
          <li>
            A <span className="font-mono">binary relation</span> on U is any
            subset R ⊆ U × U.
          </li>
          <li>
            When needed, we write R(x, y) as shorthand for &lt;x, y&gt; ∈ R.
          </li>
          <li>
            A <span className="font-mono">graph</span> G over U is an ordered
            pair (U, E) where E ⊆ U × U is a set of edges; we will frequently
            identify R with such an E.
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          The move from Δ to R is the move from a mere fact that differences
          exist to the recognition that these differences form structured
          families. We make that transition precise below.
        </p>
      </section>

      {/* 2. From Δ to the Difference Graph */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          2. From Δ to the Difference Graph
        </h2>
        <p className="text-sm text-slate-300">
          Once Δ is instantiated, we can collect all realized differences into
          a single object:
        </p>
        <p className="font-mono text-xs text-slate-300">
          D = &#123;&lt;x, y&gt; ∈ U × U : Δ(x, y)&#125;.
        </p>
        <p className="text-sm text-slate-300">
          D is what we may call the <span className="italic">difference graph</span>:
          the complete record of which items differ from which others. It is
          already a binary relation in the set-theoretic sense.
        </p>
        <p className="text-sm text-slate-300">
          IO&apos;s move is to treat Relation (R) as <span className="italic">
            structure
          </span>{" "}
          over such graphs. That is, R is not an extra primitive, but a way of
          talking about the patterns and constraints that D (and its subsets)
          exhibit.
        </p>

        <p className="text-sm text-slate-300">
          We can, for example, distinguish:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>
            <span className="italic">symmetric</span> difference patterns:
            Δ(x, y) ⇔ Δ(y, x),
          </li>
          <li>
            <span className="italic">directed</span> difference patterns (if we
            interpret &lt;x, y&gt; and &lt;y, x&gt; asymmetrically),
          </li>
          <li>
            <span className="italic">connected components</span>: subsets of U
            within which chains of differences link any two items.
          </li>
        </ul>
      </section>

      {/* 3. Necessity of Relation given Δ */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          3. Necessity of R Given Δ
        </h2>
        <p className="text-sm text-slate-300">
          We now show that as soon as Δ is instantiated, relational structure
          (in the IO sense) is unavoidable. Intuitively, once there are at least
          two distinct items, there are facts about how they differ and how
          those difference-facts compose.
        </p>

        <p className="text-sm text-slate-300">
          <span className="font-semibold">Proposition 1.</span> If Axiom Δ1
          holds (∃x, y ∈ U such that Δ(x, y)), then there exists a non-empty
          relation R ⊆ U × U that encodes at least one structural property of
          the difference graph D.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Sketch of proof.</span> From Δ1,
          construct D as above. Consider any property Φ that can be
          meaningfully predicated of ordered pairs &lt;x, y&gt; with Δ(x, y)
          (e.g. &quot;spatially adjacent&quot;, &quot;same kind&quot;,
          &quot;causally connected&quot;). If Φ is non-trivial, its extension
          is a proper subset R = &#123;&lt;x, y&gt; ∈ D : Φ(&lt;x, y&gt;)&#125;.
          This R is a relation on U that captures a structured sub-pattern
          within D. Thus, as soon as D is non-empty and describable, at least
          one relational structure R exists. ◻︎
        </p>
        <p className="text-sm text-slate-300">
          The point is not that a particular R is necessary, but that <span className="italic">
            some
          </span>{" "}
          relational structuring of Δ is inevitable once any properties or
          regularities over differences are admitted.
        </p>
      </section>

      {/* 4. Axiomatic Characterization of R */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          4. Axiomatic Characterization of R
        </h2>
        <p className="text-sm text-slate-300">
          IO does not fix a single privileged relation R; instead, it demands
          that the world admits families of relations that satisfy basic
          coherence conditions. At minimum, any relation R we treat as
          ontologically serious must satisfy:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>
            <span className="font-semibold">Non-emptiness:</span> R ≠ ∅.
          </li>
          <li>
            <span className="font-semibold">Δ-consistency:</span> if R(x, y),
            then Δ(x, y) (relations do not identify non-differences as
            differences).
          </li>
          <li>
            <span className="font-semibold">Closure under composition:</span>{" "}
            if R(x, y) and R(y, z), then some derived relation R&apos;(x, z)
            is admissible (even if R&apos; ≠ R).
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          These conditions ensure that R is not a random subset of U × U but a
          structure through which multi-step patterns of difference can be
          traced.
        </p>

        <p className="text-sm text-slate-300">
          In more advanced formulations (e.g., a category-theoretic version
          postponed to a later revision), objects would be items in U and
          morphisms would be Δ-respecting relations, with composition encoding
          the chaining of differences.
        </p>
      </section>

      {/* 5. Graph Properties and Multiscale Order */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          5. Graph Properties and Multiscale Order
        </h2>
        <p className="text-sm text-slate-300">
          Once R is seen as a graph over U, many structural properties become
          available:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>
            <span className="font-semibold">Degree distribution:</span> how many
            relations each item participates in.
          </li>
          <li>
            <span className="font-semibold">Connected components:</span>{" "}
            regions of U where all items are reachable via R-chains.
          </li>
          <li>
            <span className="font-semibold">Cliques and communities:</span>{" "}
            subsets with especially dense relational structure.
          </li>
          <li>
            <span className="font-semibold">Hierarchies and layers:</span>{" "}
            partial orders induced by asymmetric R.
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          These structural features are what later IO stages call{" "}
          <span className="italic">multiscale order</span>. They will play a
          central role in the treatment of information (I), where patterns in R
          under constraints become informational content.
        </p>
      </section>

      {/* 6. Relation as Bridge to Information */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          6. R as Bridge to I
        </h2>
        <p className="text-sm text-slate-300">
          Information, in IO, is not an independent ontological layer but the
          organization of relation under constraint. Informally:
        </p>
        <blockquote className="border-l-2 border-slate-700 pl-4 text-sm text-slate-200">
          Difference (Δ) guarantees distinguishability; Relation (R) organizes
          those differences; Information (I) is that organization under stable
          constraints that allow encoding, transmission, and transformation.
        </blockquote>
        <p className="text-sm text-slate-300">
          The next technical module makes this precise using entropy and
          related notions from information theory, interpreted ontologically
          rather than merely statistically.
        </p>
      </section>

      {/* Back link */}
      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/relation">
          <Button variant="outline" className="border-slate-700">
            ← Back to Relation deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
