// app/deep/awareness/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Awareness (A) — Formal layer | Informational Ontology",
  description: "Awareness defined as informational registration (Rev 5).",
};

export default function FormalPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Formal layer · A — Awareness
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Awareness (A)
        </h1>
        <p className="max-w-3xl text-sm text-slate-400 leading-relaxed">
          This page is a structured extract of the Rev 5 master text (Section 5.1).
          It is intended as a precise anchor for the “Deep Dive” section, not as an expansion of the ontology.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-base text-slate-300 leading-relaxed">Information alone is not awareness. Information exists wherever differences are structured, but awareness arises only when information is registered from a particular perspective. Awareness is therefore not synonymous with complexity, processing, or storage. It is a structural condition in which information is presented to a system rather than merely instantiated within it. Awareness introduces asymmetry.</p>
        <p className="text-base text-slate-300 leading-relaxed">Where information is symmetric and relational, awareness establishes a distinction between what is registered and that which registers it. This subject–object differentiation is not psychological in origin; it is ontological. The moment information is registered relative to a system’s own state, awareness is present. Awareness does not require language, reflection, or conceptualization. It does not require semantic interpretation or symbolic manipulation.</p>
        <p className="text-base text-slate-300 leading-relaxed">It requires only that information be available to a system in a way that is internally differentiated from the rest of the informational environment. For this reason, awareness cannot be reduced to information alone. Nor can it be reduced to the quantity or complexity of information. A system may instantiate vast informational structure without awareness if none of that information is registered relative to the system itself. Awareness therefore marks a genuine ontological transition.</p>
        <p className="text-base text-slate-300 leading-relaxed">It is the point at which informational structure becomes perspectival. This transition is denoted as I → A. For boundary cases, stress tests, and illustrative analyses concerning awareness—including informational registration, zombies, gradualism, and artificial systems—see Appendix A. Part VI — Value</p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/deep/information/formal">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/deep">
            <Button variant="outline">Deep Dive index</Button>
          </Link>
          <Link href="/deep/value/formal">
            <Button>Next →</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
