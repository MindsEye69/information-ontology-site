// app/deep/information/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Information (I) – Technical notes | Informational Ontology",
  description:
    "Technical and formal notes on Information (I) in the IO framework.",
};

export default function FormalInformationPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical layer · I — Information
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Formal notes on Information (I)
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This page will gather more explicit treatments of information in IO:
          how constrained possibility can be represented mathematically, and how
          that connects to awareness and valuation.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Planned technical content</h2>
        <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
          <li>
            Relationship between IO&apos;s structural notion of information and
            Shannon information (entropy, mutual information).
          </li>
          <li>
            State spaces, constraints, and transition structures as carriers of
            information.
          </li>
          <li>
            How informational structure interacts with system dynamics, preparing
            the ground for awareness (A).
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          This page is intended for readers comfortable with formal tools. For
          most purposes, the{" "}
          <Link
            href="/deep/information"
            className="text-sky-400 hover:text-sky-300"
          >
            main deep section
          </Link>{" "}
          is the primary reference.
        </p>
      </section>

      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/information">
          <Button variant="outline" className="border-slate-700">
            ← Back to Information deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
