// app/start/awareness/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Awareness | Informational Ontology",
  description:
    "Step 4 of the Start Here journey: minimal awareness as sensitivity to information.",
};

export default function AwarenessStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here · Step 4 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Awareness: when information starts to matter
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Information by itself is just structure in the world. Awareness is
          what happens when a system{" "}
          <span className="font-semibold">responds</span> to information in ways
          that make a difference to how it continues. At that point, some
          informational states are effectively “better” for the system than
          others — the seed of{" "}
          <span className="font-semibold">value</span> is already present.
        </p>
      </section>

      {/* Example section */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">A thermostat’s “awareness”</h2>
        <p className="text-slate-300 leading-relaxed">
          Take a simple thermostat. It has a sensor and a rule: if the
          temperature drops below a certain point, turn the heater on; if it
          goes above another point, turn it off. The thermostat does not “know”
          in any human sense, but information about the temperature is being
          used to guide what happens next.
        </p>
        <p className="text-slate-300 leading-relaxed">
          In IO terms, this already counts as a minimal kind of awareness: the
          system&apos;s internal state changes in a structured way because of
          information it receives. The information makes a difference to the
          system&apos;s behaviour.
        </p>
      </section>

      {/* Deeper insight box (optional narrative content) */}
      <section className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-sky-300">
            Deeper insight: awareness without mystery
          </summary>
          <div className="mt-2 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p>
              In IO, we don&apos;t treat awareness as an all-or-nothing,
              magical property. Instead, it comes in degrees and depends on how
              a system uses information about differences in its environment and
              its own state.
            </p>
            <p>
              A rock doesn&apos;t qualify, because its internal organisation
              doesn&apos;t systematically change to track information. A
              bacterium, on the other hand, does respond to gradients of
              chemicals, moving toward nutrients and away from toxins. That&apos;s
              a richer form of awareness than a thermostat, but built on the
              same basic pattern.
            </p>
          </div>
        </details>
      </section>

      {/* What to carry forward */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-slate-300 leading-relaxed">
          The key idea from this step:
        </p>
        <p className="text-slate-200 leading-relaxed font-medium">
          Awareness is information in use: a system whose behaviour shifts in
          structured ways because of the information it carries.
        </p>
      </section>

      {/* Navigation */}
      <StepNav
        prevHref="/start/information"
        prevLabel="Back: Information"
        nextHref="/start/value"
        nextLabel="Next: Value"
      />
    </main>
  );
}
