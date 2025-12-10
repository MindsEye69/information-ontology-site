// app/deep/purpose/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Purpose (P) – Deep dive | Informational Ontology",
  description:
    "Purpose as long-horizon teleological structure derived from meaning and evaluative dynamics.",
};

export default function PurposeDeepDivePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-12">

      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-purple-400">
          Deep dive · Purpose (P)
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
          Understanding Purpose (P)
        </h1>
        <p className="max-w-3xl text-sm text-slate-300">
          Purpose emerges when meaning is extended across time: the long-horizon
          teleological orientation of an informational system toward futures
          that preserve or enhance its coherence.
        </p>
      </section>

      {/* Body content */}
      <section className="space-y-6">
        <p className="text-sm text-slate-300">
          Once a system forms structured meaning (patterns of value within its
          internal informational model), it can project those structures forward
          in time. This projection shapes behavior along long-horizon
          trajectories rather than immediate reactions. Purpose therefore marks
          the highest level of the IO chain.
        </p>

        <p className="text-sm text-slate-300">
          This page presents the conceptual overview. For a rigorous definition
          — including purpose functionals, teleological operators, and the
          derivation from meaning structures — continue to the formal section.
        </p>
      </section>

      {/* Dive deeper box */}
      <section className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-lg font-semibold text-slate-200">
          Dive even deeper
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Explore the formal teleodynamics behind Purpose (P).
        </p>

        <Link
          href="/deep/purpose/formal"
          className="mt-3 inline-flex items-center text-sm font-medium text-purple-300 hover:text-purple-200"
        >
          Technical exposition <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
