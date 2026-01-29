// app/deep/meaning/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Meaning (M) — Formal layer | Informational Ontology",
  description: "Meaning as structured value within awareness (V → M) (Rev 5).",
};

export default function FormalPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <ExplanatoryBanner className=\"mb-8\" />
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Formal layer · M — Meaning
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Meaning (M)
        </h1>
        <p className="max-w-3xl text-sm text-slate-400 leading-relaxed">
          This page is a structured extract of the Rev 5 master text (Section 7.1).
          It is intended as a precise anchor for the “Deep Dive” section, not as an expansion of the ontology.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-base text-slate-300 leading-relaxed">M) Value alone does not yet constitute meaning. Value establishes differential importance within awareness, but meaning arises when those valued distinctions are organized into coherent patterns that relate present states to other states across time, context, or possibility. Meaning is structured value within awareness. Clarification: Terms such as interpretation, reference, understanding, and anticipation are used here as descriptive correspondences to structural organization, not as semantic primitives.</p>
        <p className="text-base text-slate-300 leading-relaxed">Ontologically, meaning refers to the organization of value across possible system transitions. Semantic vocabulary functions as shorthand for these structural relations and does not introduce representational or linguistic commitments beyond what is structurally specified. A system encounters meaning when informational states are not only weighted, but interpreted relative to other valued states—past, anticipated, or counterfactual. Meaning therefore introduces internal reference.</p>
        <p className="text-base text-slate-300 leading-relaxed">A given state means something to a system when it stands in an organized relationship to other states that the system values. Meaning is not language-dependent. Linguistic symbols may encode or express meaning, but they do not generate it. Meaning precedes language and is possible wherever values are organized into relational structures that guide interpretation and response. Meaning is likewise not reducible to semantics in the formal sense.</p>
        <p className="text-base text-slate-300 leading-relaxed">Formal semantics presupposes meaningful distinctions; it does not explain their origin. In the Informational Ontology, meaning emerges when value constrains awareness in a way that produces internally coherent interpretive patterns. Meaning is therefore neither purely subjective nor externally imposed. It arises from the interaction between awareness and value within a system.</p>
        <p className="text-base text-slate-300 leading-relaxed">Different systems may instantiate different meanings even when exposed to the same information, because meaning depends on the system’s internal value structure. The transition from value to meaning—denoted as V → M—marks the point at which awareness becomes interpretive rather than merely oriented. With meaning, informational states acquire significance beyond immediate salience, enabling understanding, anticipation, and context-sensitive response.</p>
        <p className="text-base text-slate-300 leading-relaxed">For extended discussion of meaning in relation to language, symbols, interpretation, and cross-system divergence, see Appendix C. Part VIII — Purpose</p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/deep/value/formal">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/deep">
            <Button variant="outline">Deep Dive index</Button>
          </Link>
          <Link href="/deep/purpose/formal">
            <Button>Next →</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}