// app/deep/awareness/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Awareness (A) — Formal layer (planned) | Informational Ontology",
  description:
    "Placeholder page for the formal/technical layer of Awareness (A) in the Informational Ontology Deep Dive.",
};

export default function FormalPlannedPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Formal layer · A — Awareness
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Awareness (A) — Formal page (planned)
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          You&apos;re looking at a placeholder. The formal/technical layer for
          this module is planned for <span className="font-semibold">Revision 5</span>.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">What will live here later</h2>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          <li>Definitions and notation used in the formal treatment.</li>
          <li>Propositions / lemmas tied directly to the IO derivation chain.</li>
          <li>Proof sketches (illustrating the formal structure of the argument).</li>
          <li>Optional links to supporting mathematics (sets, graphs, metrics, etc.).</li>
        </ul>
        <p className="text-sm text-slate-300 leading-relaxed">
          Until Rev 5, use the main Deep Dive page for this topic.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep/awareness" className="sm:w-1/2 w-full">
            <Button variant="outline" className="w-full border-slate-700">
              Back to Awareness (A)
            </Button>
          </Link>
          <Link href="/deep" className="sm:w-1/2 w-full">
            <Button
              variant="outline"
              className="w-full border-sky-700/60 text-sky-300 hover:bg-sky-950/40"
            >
              Back to Deep Dive index
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
