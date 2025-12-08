// app/deep/valuation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Valuation (V) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Valuation (V) as better/worse for self-maintaining systems.",
};

export default function DeepValuationPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep section · V — Valuation
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Valuation (V): when some possibilities are better than others
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Once a system uses information to maintain its own organisation,
          information is no longer neutral. Some states are better for the
          system&apos;s continued existence, others worse. This structural
          asymmetry is what IO calls valuation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Stakes and asymmetry</h2>
        <p className="text-slate-300 leading-relaxed">
          For a candle flame, gentle air flow that sustains combustion is
          &quot;good&quot; and a gust that blows it out is &quot;bad&quot;—not
          emotionally, but structurally. For a cell, sufficient nutrients and
          proper temperature ranges are good; lethal toxins and extreme heat are
          bad.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The structural pattern is clear: some conditions support ongoing
          organisation; others undermine or destroy it. Information about which
          is which becomes the raw material of valuation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Valuation without morality (yet)</h2>
        <p className="text-slate-300 leading-relaxed">
          In everyday language, &quot;value&quot; often suggests moral or
          emotional weight. IO begins earlier, with a simpler notion:
        </p>
        <p className="text-slate-300 leading-relaxed">
          <span className="font-semibold">
            relative to a given system and its ongoing pattern, some outcomes
            are structurally better or worse.
          </span>
        </p>
        <p className="text-slate-300 leading-relaxed">
          This does not yet decide anything about ethical right or wrong.
          Instead, it sets up the basic asymmetry that later ethical reasoning
          will have to respect: systems do not relate to all possibilities in a
          neutral way.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. Awareness, valuation, and feedback
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Awareness becomes valuation when a system not only tracks information
          but also changes its behaviour in ways that favour its own continued
          organisation. Moving toward food and away from poison are basic
          examples.
        </p>
        <p className="text-slate-300 leading-relaxed">
          This is not a separate module added on top of awareness. It is a
          natural consequence of being the kind of system whose future states
          depend on what it does now.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Next layers</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          This page treats valuation structurally rather than morally. For more
          technical work—e.g. utility-like functions, viability measures, or
          dynamical stability analyses—see the formal layer.
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep/valuation/formal" className="sm:w-1/2 w-full">
            <Button
              variant="outline"
              className="w-full border-sky-700/60 text-sky-300 hover:bg-sky-950/40"
            >
              Dive even deeper (technical) →
            </Button>
          </Link>
          <Link href="/ontology" className="sm:w-1/2 w-full">
            <Button variant="outline" className="w-full border-slate-700">
              Back to Ontological chain
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
