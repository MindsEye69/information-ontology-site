// app/deep/value/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Value (V) — Formal layer | Informational Ontology",
  description: "Value as differential constraint on awareness (A → V) (Rev 5).",
};

export default function FormalPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <ExplanatoryBanner className="mb-8" />
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Formal layer · V — Value
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Value (V)
        </h1>
        <p className="max-w-3xl text-sm text-slate-400 leading-relaxed">
          This page is a structured extract of the Rev 5 master text (Section 6.1).
          It is intended as a precise anchor for the “Deep Dive” section, not as an expansion of the ontology.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-base text-slate-300 leading-relaxed">Awareness alone does not yet yield value. Awareness registers information from a perspective, but without preference, salience, or constraint, all registered information would be equivalent. Value arises when distinctions within awareness are not merely registered, but weighted. Value is the introduction of differential importance within awareness. It is the condition under which some informational states matter more than others to a system. This “mattering” is not moral, semantic, or cultural by default.</p>
        <p className="text-base text-slate-300 leading-relaxed">It is structural. Value specifies which differences are favored, avoided, preserved, or suppressed relative to the system’s continued organization. Value therefore introduces constraint. Where awareness opens a field of possible informational states, value shapes that field by biasing transitions within it. A system with values is not merely aware of differences; it is oriented with respect to them. Value is not reducible to desire, emotion, or subjective feeling, though such phenomena may instantiate it.</p>
        <p className="text-base text-slate-300 leading-relaxed">Nor is value equivalent to external norms or objective prescriptions. At this stage of the ontology, value is defined solely by its structural role: it constrains the dynamics of awareness. Because value arises only once awareness is present, value cannot exist in purely informational systems lacking perspective. Conversely, once awareness exists within a system that persists under ordering, some form of value becomes structurally unavoidable for that system.</p>
        <p className="text-base text-slate-300 leading-relaxed">To register information from a perspective is already to differentiate relevance, even if only minimally. The transition from awareness to value is therefore necessary rather than optional. It is denoted as A → V. With value, awareness ceases to be neutral and becomes oriented. This orientation is the precondition for meaning, agency, and purpose. For clarifications and boundary conditions concerning value—including neutrality, minimal value systems, moral misinterpretations, and artificial systems—see Appendix B.</p>
        <p className="text-base text-slate-300 leading-relaxed">Part VII — Meaning</p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/deep/awareness/formal">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/deep">
            <Button variant="outline">Deep Dive index</Button>
          </Link>
          <Link href="/deep/meaning/formal">
            <Button>Next →</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}