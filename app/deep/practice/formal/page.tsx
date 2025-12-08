// app/deep/practice/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Practice (P) – Technical notes | Informational Ontology",
  description:
    "Technical and formal notes on Practice (P) in the IO framework.",
};

export default function FormalPracticePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical layer · P — Practice
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Formal notes on Practice (P)
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This page will eventually house more formal treatments of practice in
          IO: action spaces, policies, experimental practice, and their relation
          to the rest of the chain.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Planned technical content</h2>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          <li>
            Practice as policy over states, given informational and valuation
            structures.
          </li>
          <li>
            Links to reinforcement learning, control theory, and experimental
            methodology.
          </li>
          <li>
            Feedback loops from practice to earlier stages (Δ, R, I, A, V, M).
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          As with the other technical pages, this is intended as a bridge
          between IO and existing formal disciplines.
        </p>
      </section>

      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/practice">
          <Button variant="outline" className="border-slate-700">
            ← Back to Practice deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
