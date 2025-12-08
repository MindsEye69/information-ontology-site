// app/deep/awareness/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Awareness (A) – Technical notes | Informational Ontology",
  description:
    "Technical and formal notes on Awareness (A) in the IO framework.",
};

export default function FormalAwarenessPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical layer · A — Awareness
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Formal notes on Awareness (A)
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This page will explore ways to formalise awareness as informational
          sensitivity within dynamical systems, including feedback and control
          structures.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Planned technical content</h2>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          <li>
            Modelling awareness as mappings from environmental states to internal
            states and actions.
          </li>
          <li>
            Links to control theory, cybernetics, and enactive approaches to
            cognition.
          </li>
          <li>
            Distinctions between minimal awareness and richer, possibly
            conscious, forms.
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          This layer is optional and aimed at readers interested in tying IO to
          more explicit dynamical models.
        </p>
      </section>

      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/awareness">
          <Button variant="outline" className="border-slate-700">
            ← Back to Awareness deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
