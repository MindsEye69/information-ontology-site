// app/start/valuation/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Valuation | Informational Ontology",
  description:
    "Step 5 of the Start Here journey: how awareness brings better and worse into play.",
};

export default function ValuationStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here · Step 5 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Valuation: when some states are better than others
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Once a system&apos;s awareness is tied to its own continued pattern,
          information stops being neutral. Some possibilities are good for the
          system, some are bad. This is valuation in a basic, structural sense.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">A candle and the wind</h2>
        <p className="text-slate-300 leading-relaxed">
          Picture a candle flame in a quiet room. As long as the air is calm and
          there&apos;s enough fuel, the flame keeps its shape.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Now open a window. A strong gust of wind can blow the flame out. For
          the flame, some air patterns are &quot;good&quot; (they keep it
          going), and some are &quot;bad&quot; (they snuff it out).
        </p>
        <p className="text-slate-300 leading-relaxed">
          The flame doesn&apos;t have opinions. But there is still a clear
          sense in which certain conditions support its continued existence
          while others destroy it. That is valuation in embryo form.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Living systems and stakes</h2>
        <p className="text-slate-300 leading-relaxed">
          For living organisms, the stakes are higher. A bacterium in a chemical
          gradient &quot;prefers&quot; moving toward nutrients rather than
          poison. A heart &quot;prefers&quot; regular rhythm over chaotic
          fibrillation.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Again, we don&apos;t have to assume feelings yet. The point is
          structural:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            Some states support the system&apos;s organisation and continuation.
          </li>
          <li>
            Other states undermine it or bring it to an end.
          </li>
          <li>
            Awareness can, in principle, be organised to seek the first and
            avoid the second.
          </li>
        </ul>
      </section>

      <section className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-sky-300">
            Deeper insight: value without human emotion
          </summary>
          <div className="mt-2 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p>
              In everyday language, &quot;value&quot; often means personal
              preference or moral judgment. IO starts earlier than that. It
              looks at what the structure of a system makes important for that
              system to keep existing in its current form.
            </p>
            <p>
              Emotional, reflective, ethical value may be layered on top of
              this, but the basic logic is already present whenever something
              can persist or fail to persist.
            </p>
          </div>
        </details>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-slate-300 leading-relaxed">
          The key idea from this step:
        </p>
        <p className="text-slate-200 leading-relaxed font-medium">
          When information is used by a system that can do better or worse at
          continuing, valuation is already in play.
        </p>
      </section>

      <StepNav
        prevHref="/start/awareness"
        prevLabel="Back: Awareness"
        nextHref="/start/meaning"
        nextLabel="Next: Meaning"
      />
    </main>
  );
}
