// app/deep/value/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Value (V) – Technical notes | Informational Ontology",
  description:
    "Technical and formal notes on Value (V) in the IO framework.",
};

export default function FormalValuePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical layer · V — Value
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Formal notes on Value (V)
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This page will house more formal approaches to value in IO: gradients
          over state spaces, stability functionals, and links to decision theory
          and ethics. The aim is to clarify how value can be treated as a{" "}
          structural property of informational systems rather than a purely
          subjective projection.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Planned technical content</h2>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          <li>
            Representing value as a function over informational states (e.g.
            V(s) measuring viability or coherence).
          </li>
          <li>
            Links between value, homeostasis, and control theory (e.g. minimising
            error or surprise).
          </li>
          <li>
            How ethical notions (harm, flourishing, justice) can be interpreted
            as higher-order value structures.
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          The goal is not to collapse ethics into optimisation, but to show how
          ethical questions presuppose and reshape underlying value gradients.
        </p>
      </section>

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
