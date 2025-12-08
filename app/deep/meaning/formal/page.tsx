// app/deep/meaning/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Meaning (M) – Technical notes | Informational Ontology",
  description:
    "Technical and formal notes on Meaning (M) in the IO framework.",
};

export default function FormalMeaningPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical layer · M — Meaning
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Formal notes on Meaning (M)
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This page will host more formal approaches to meaning in IO, including
          possible links to semantics, model theory, and learning systems.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Planned technical content</h2>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          <li>
            Connections between IO&apos;s notion of meaning and possible-world
            semantics or structural representations.
          </li>
          <li>
            Ways in which meaning can be seen as a function from informational
            states and valuations to action policies.
          </li>
          <li>
            The role of learning and model revision in reshaping meaning over
            time.
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          The aim is not to reduce meaning to one technical framework, but to
          indicate how IO can be mapped into several existing formalisms.
        </p>
      </section>

      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/meaning">
          <Button variant="outline" className="border-slate-700">
            ← Back to Meaning deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
