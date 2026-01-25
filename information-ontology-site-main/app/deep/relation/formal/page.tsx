// app/deep/relation/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Relation (R) — Formal layer | Informational Ontology",
  description: "Formal transition from Difference (Δ) to Relation (R) in Informational Ontology (Rev 5).",
};

export default function FormalPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Formal layer · R — Relation
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Relation (R)
        </h1>
        <p className="max-w-3xl text-sm text-slate-400 leading-relaxed">
          This page is a structured extract of the Rev 5 master text (Section 4.3).
          It is intended as a precise anchor for the “Deep Dive” section, not as an expansion of the ontology.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-base text-slate-300 leading-relaxed">Difference cannot exist in isolation. To assert that a difference exists is already to imply that something differs from something else. Difference, by its nature, introduces comparability. This ontology adopts contrastive differentiation as a primitive: difference is understood as non-identity between distinguishable states, rather than as monadic thisness without contrast. A single, wholly isolated difference is incoherent.</p>
        <p className="text-base text-slate-300 leading-relaxed">Difference requires at least two distinguishable terms or states, and the distinguishability between them constitutes a relation. To say that A differs from B is to place A and B in relation to one another. There is no additional step by which relation is imposed upon difference; relation is entailed by difference itself. This entails that relationality is not a secondary feature of reality, nor a construct imposed by observers. It is a necessary consequence of difference.</p>
        <p className="text-base text-slate-300 leading-relaxed">Wherever difference exists, relations exist. Relation is the structural expression of difference. Relation should not be understood here as a human-defined or semantic association. It is the minimal ontological fact that distinctions imply ordering, contrast, or comparison. Any difference establishes a relational structure, however primitive. Thus, relation is not optional, emergent, or contingent. It is the first necessary entailment of difference.</p>
        <p className="text-base text-slate-300 leading-relaxed">The transition from difference to relation—denoted as Δ → R—marks the point at which existence acquires structure rather than remaining a mere abstraction. Without relation, difference could not be articulated; without difference, relation could not arise. The two are inseparable, but ontologically ordered: difference is primary, and relation necessarily follows.</p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/deep/delta/formal">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/deep">
            <Button variant="outline">Deep Dive index</Button>
          </Link>
          <Link href="/deep/information/formal">
            <Button>Next →</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
