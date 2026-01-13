// app/abstract/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Abstract (Rev 5) | Informational Ontology",
  description:
    "The canonical abstract of Informational Ontology, Revision 5 (Jan 2026).",
};

const paragraphs = ["This work presents the Informational Ontology as a scope-disciplined ontological framework", "describing a sequence of organizational regimes: Difference, Relation, Information, Awareness,", "Value, Meaning, and Purpose (\u0394 \u2192 R \u2192 I \u2192 A \u2192 V \u2192 M \u2192 P). The framework is not offered as", "an axiom-only derivation of all possible being. Instead, it specifies structural constraints that", "become unavoidable under explicit conditions: differentiation, ordering, and selection under", "perturbation.", "The ontology is structural rather than empirical. It does not propose physical models, cognitive", "mechanisms, or normative prescriptions. It articulates the conditions under which systems", "capable of registration, differential constraint, coherent organization, and self-influencing", "trajectories can arise, without assuming any particular implementation.", "The core derivation is presented without reliance on metaphor, intuition pumps, or", "application-specific examples. Exploratory material and boundary analyses are separated into", "appendices. The framework is intended to be evaluated on internal coherence, clarity of scope,", "and the adequacy of its stated premises and regime transitions."];

export default function AbstractPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">
          Revision 5 · Jan 2026
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Abstract</h1>
        <p className="max-w-3xl text-sm text-slate-400 leading-relaxed">
          This is the abstract from the Rev 5 master text. It is the best “one page”
          statement of scope, commitments, and evaluation criteria.
        </p>
      </section>

      <section className="space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-base text-slate-300 leading-relaxed">
            {p}
          </p>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Next</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/intro">
            <Button variant="outline">How to read the site</Button>
          </Link>
          <Link href="/ontology">
            <Button>Explore the chain</Button>
          </Link>
          <Link href="/faq">
            <Button variant="outline">FAQ</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
