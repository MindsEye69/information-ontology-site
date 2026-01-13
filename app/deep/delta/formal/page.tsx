// app/deep/delta/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Difference (Δ) — Formal layer | Informational Ontology",
  description: "Formal definition and commitments for Difference (Δ) in the Informational Ontology (Rev 5).",
};

export default function FormalPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Formal layer · Δ — Difference
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Difference (Δ)
        </h1>
        <p className="max-w-3xl text-sm text-slate-400 leading-relaxed">
          This page is a structured extract of the Rev 5 master text (Sections 4.1–4.2).
          It is intended as a precise anchor for the “Deep Dive” section, not as an expansion of the ontology.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-base text-slate-300 leading-relaxed">To exist is to differ. A universe in which no differences obtain—no distinctions, no contrasts, no variations of any kind—admits no internal structure, and therefore no relations, constraints, or regimes of organization. Such a state is not denied as a metaphysical possibility; rather, it lies outside the domain addressed by this ontology, because nothing within it can participate in the structural transitions described here.</p>
        <p className="text-base text-slate-300 leading-relaxed">Differentiation is therefore treated as the minimal condition for nontrivial ontological description within this framework: wherever structure is present, differentiation is already implied. Difference is therefore not a property added to existence; it is the condition under which existence becomes intelligible. Without difference, there can be no identity, because identity requires contrast with what something is not.</p>
        <p className="text-base text-slate-300 leading-relaxed">There can be no persistence, because persistence requires change or stability relative to alternatives. There can be no causation, because causation requires that one state differ from another. There can be no interaction, because interaction requires relational asymmetry. There can be no structure, because structure is constituted by patterned differences. Difference is not equivalent to substance, energy, matter, mind, or information. Each of these presupposes difference in order to be defined or detected.</p>
        <p className="text-base text-slate-300 leading-relaxed">Substance must differ from other substances or from non-substance; energy must differ in magnitude or distribution; matter must differ in configuration; mind must differ in state; information must differ in form or content. Difference is therefore the minimal ontological commitment. Nothing simpler can be posited without implicitly assuming it. Any ontology that attempts to begin elsewhere necessarily smuggles difference in through unexamined assumptions. Difference is not a thing, field, force, or substance.</p>
        <p className="text-base text-slate-300 leading-relaxed">Nor is it equivalent to matter, energy, mind, or information. It is the most basic condition under which anything whatsoever can be said to be. 4.2 Why Difference Must Be Self-Existent If difference is the minimal condition for existence, then it cannot itself be derived from anything more fundamental. Any attempt to ground difference in some deeper ontological substrate necessarily presupposes the very distinction it seeks to explain.</p>
        <p className="text-base text-slate-300 leading-relaxed">To claim that difference arises from substance requires that substances already differ from one another or from non-substance. To claim that difference arises from energy requires variations in magnitude, distribution, or state—each of which is already a difference. To claim that difference arises from mind requires that mental states differ, which presupposes difference. To claim that difference arises from information requires that information already be structured, which again presupposes difference.</p>
        <p className="text-base text-slate-300 leading-relaxed">In every case, difference cannot be generated without already being assumed. This establishes that difference is not an emergent property of some deeper entity, nor is it reducible to any ontological primitive more basic than itself. Difference is therefore self-existent in the sense that it does not require grounding in anything else. This does not mean that difference exists independently as an object or substance.</p>
        <p className="text-base text-slate-300 leading-relaxed">Rather, it means that difference is ontologically primitive: it is the condition under which any object, substance, process, or system can be said to exist at all. Any ontology that attempts to begin with something other than difference—whether matter, energy, mind, or information—must still rely on difference to articulate that starting point. Difference cannot be eliminated, postponed, or derived away. For this reason, difference occupies the foundational position in the Informational Ontology.</p>
        <p className="text-base text-slate-300 leading-relaxed">It is not chosen arbitrarily, but required as a minimal condition for nontrivial ontological description. To deny difference is to remove the structural basis for ontology as developed here.</p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/deep/delta">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/deep">
            <Button variant="outline">Deep Dive index</Button>
          </Link>
          <Link href="/deep/relation/formal">
            <Button>Next →</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
