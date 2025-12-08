// app/deep/delta/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Difference (Δ) – Technical notes | Informational Ontology",
  description:
    "Technical and formal notes on Difference (Δ) as the base of the IO chain.",
};

export default function FormalDifferencePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical layer · Δ — Difference
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Formal notes on Difference (Δ)
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This page is reserved for a more technical treatment of Difference:
          explicit definitions, dependency relations, and possible mappings to
          formal frameworks (e.g. information theory, relational structures,
          category-theoretic sketches). For now, it serves as a placeholder and
          a waypoint for future work.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Planned content</h2>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          <li>
            Minimal formal definition of &quot;difference&quot; as a relation
            over a set of possible states.
          </li>
          <li>
            Argument schema showing the inconsistency of globally denying
            difference while using it in the denial.
          </li>
          <li>
            Links to candidate mathematical formalisms that could instantiate
            Δ: e.g. partitions over sets, preorders, or basic category-theoretic
            structures.
          </li>
          <li>
            Diagrams illustrating chains of difference leading naturally into R
            (Relation).
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          As the project matures, this page will be updated with concrete
          technical proposals. For most readers, the main{" "}
          <Link
            href="/deep/delta"
            className="text-sky-400 hover:text-sky-300"
          >
            deep section
          </Link>{" "}
          will be sufficient.
        </p>
      </section>

      <section className="border-t border-slate-800 pt-6">
        <Link
          href="/deep/delta"
          className="text-sm text-sky-400 hover:text-sky-300"
        >
          ← Back to Difference deep dive
        </Link>
      </section>
    </main>
  );
}
