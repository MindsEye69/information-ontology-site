// app/deep/value/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Value (V) – Deep dive | Informational Ontology",
  description:
    "Value as the evaluative structure arising from awareness and informational self-maintenance.",
};

export default function ValueDeepDivePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-12">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-green-400">
          Deep dive · Value (V)
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50">
          Understanding Value (V)
        </h1>
        <p className="max-w-3xl text-sm text-slate-300">
          Value arises when an aware system distinguishes states that support or
          undermine its own informational stability. This section expands on how
          evaluative gradients emerge from awareness.
        </p>
      </section>

      {/* Body content */}
      <section className="space-y-6">
        <p className="text-sm text-slate-300">
          Once a system has internal awareness of its own informational state,
          it can distinguish between states that preserve coherence and those
          that degrade it. This distinction introduces preference, and
          preference grounds value. In this sense, Value (V) is not a mental or
          subjective construct; it is a structural feature of any system that
          evaluates possible transitions relative to its own persistence.
        </p>

        <p className="text-sm text-slate-300">
          This deep-dive page provides the conceptual narrative. For the
          mathematical treatment — including value functionals, evaluative
          gradients, and the formal linkage to awareness — continue to the
          technical section.
        </p>
      </section>

      {/* Dive deeper box */}
      <section className="rounded-lg border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-lg font-semibold text-slate-200">
          Dive even deeper
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Explore the formal axioms and mathematical structure behind Value (V).
        </p>

        <Link
          href="/deep/value/formal"
          className="mt-3 inline-flex items-center text-sm font-medium text-green-400 hover:text-green-300"
        >
          Technical exposition <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
