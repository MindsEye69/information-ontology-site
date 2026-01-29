// app/start/meaning/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Start here – Meaning | Informational Ontology",
  description:
    "Step 6 of the Start Here journey: meaning as value woven into patterns.",
};

export default function MeaningStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <ExplanatoryBanner className="mb-8" />
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-neutral-500">
          Start here · Step 6 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Meaning: patterns that matter over time
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-3xl">
          When information and value are woven together across time, we get
          something richer: meaning. Signals, symbols, and events start to fit
          into stories about what matters and what to expect.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The red light at a crossing</h2>
        <p className="text-neutral-700 leading-relaxed">
          At a traffic light, red doesn&apos;t just mean “this part of the
          spectrum”. For drivers, it means:
        </p>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>Stop now.</li>
          <li>Because cross traffic is about to move.</li>
          <li>And not stopping could be dangerous or illegal.</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          The colour is tied to a network of expectations, rules, and possible
          outcomes. That&apos;s meaning: information shaped by{" "}
          <span className="font-semibold">value</span> and context.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Meaning as lived pattern</h2>
        <p className="text-neutral-700 leading-relaxed">
          At human scales, meaning shows up everywhere:
        </p>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>
            A wedding ring means a promise and a shared history, not just a
            piece of metal.
          </li>
          <li>
            A familiar song can mean comfort, nostalgia, or grief, depending on
            your story with it.
          </li>
          <li>
            A scientific graph can mean support for a theory or a reason to
            doubt it.
          </li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          In each case, information is plugged into patterns of value and
          expectation. What something means is inseparable from{" "}
          <span className="italic">
            what it does to the web of values a system carries
          </span>
          .
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-neutral-700">
            Deeper insight: many layers of meaning
          </summary>
          <div className="mt-2 space-y-2 text-sm text-neutral-700 leading-relaxed">
            <p>
              IO does not assume there is only one “true” level of meaning. A
              single event can mean different things to different systems,
              depending on how it fits into their existing structures of value
              and information.
            </p>
            <p>
              What the ontology tries to do is show the{" "}
              <span className="italic">conditions</span> under which meaning is
              possible at all: stable information, organised awareness, and
              patterns of value that reach through time.
            </p>
          </div>
        </details>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-neutral-700 leading-relaxed">
          The key idea from this step:
        </p>
        <p className="text-neutral-900 leading-relaxed font-medium">
          Meaning is what you get when information, value, and context are
          woven into patterns that guide expectations and interpretation.
        </p>
      </section>

      <StepNav
        prevHref="/start/value"
        prevLabel="Back: Value"
        nextHref="/start/purpose"
        nextLabel="Next: Purpose"
      />
    </main>
  );
}