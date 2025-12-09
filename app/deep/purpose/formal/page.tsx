// app/deep/purpose/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Purpose (P) – Technical notes | Informational Ontology",
  description:
    "Technical and formal notes on Purpose (P) in the IO framework.",
};

export default function FormalPurposePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical layer · P — Purpose
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Formal notes on Purpose (P)
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This page will collect more formal treatments of purpose in IO:
          directed policies over state spaces, goal structures, and feedback
          from action into earlier stages of the chain (Δ, R, I, A, V, M).
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Planned technical content</h2>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          <li>
            Purpose as policy over states, given informational and value
            structures.
          </li>
          <li>
            Links to reinforcement learning, control theory, and theories of
            agency.
          </li>
          <li>
            Feedback loops where purposive action reshapes information, value,
            and meaning.
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          As with the other technical pages, this is meant as a bridge between
          IO and existing formal work on decision, control, and agency.
        </p>
      </section>

      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/purpose">
          <Button variant="outline" className="border-slate-700">
            ← Back to Purpose deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
