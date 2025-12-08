// app/deep/valuation/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Valuation (V) – Technical notes | Informational Ontology",
  description:
    "Technical and formal notes on Valuation (V) in the IO framework.",
};

export default function FormalValuationPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical layer · V — Valuation
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Formal notes on Valuation (V)
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This page will explore ways to formalise valuation as structural
          asymmetry in outcome desirability for self-maintaining systems.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Planned technical content</h2>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          <li>
            Viability kernels and attractor structures in dynamical systems as
            implementations of &quot;better/worse&quot; outcomes.
          </li>
          <li>
            Relations to decision theory and utility functions, with care not to
            collapse valuation into human preferences.
          </li>
          <li>
            Links between valuation and learning processes in adaptive systems.
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          This material will be most relevant to readers interested in formal
          theories of agency, control, and viability.
        </p>
      </section>

      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/valuation">
          <Button variant="outline" className="border-slate-700">
            ← Back to Valuation deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
