// app/start/value/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Value | Informational Ontology",
  description:
    "Step 5 of the Start Here journey: value as better/worse for a system’s continued existence.",
};

export default function ValueStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-neutral-500">
          Start here · Step 5 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Value: when some states are better than others
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-3xl">
          Once a system is aware of information and responds to it, a new
          distinction appears: some responses help the system stay organised,
          while others do not. Whenever a system can do <em>better</em> or
          <em>worse</em> at continuing, we say it has{" "}
          <span className="font-semibold">value</span>.
        </p>
      </section>

      {/* Example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">A hungry animal</h2>
        <p className="text-neutral-700 leading-relaxed">
          Picture an animal navigating a landscape. It can move toward food or
          away from it, toward shelter or into danger. The same information
          (smells, sounds, light) can lead to different outcomes depending on
          how the animal responds.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          For that animal, some states of the world are{" "}
          <span className="font-semibold">better</span> in a literal sense:
          they support its continued existence. Others are worse—leading to
          starvation, injury, or collapse of organisation. This gradient of
          better and worse is what IO calls <span className="font-semibold">
            value
          </span>.
        </p>
      </section>

      {/* Clarification */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Value before morality</h2>
        <p className="text-neutral-700 leading-relaxed">
          This isn’t morality yet. A thermostat “prefers” certain temperatures
          without having ethical opinions. A bacterium “prefers” nutrient-rich
          regions without having a moral code.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          IO’s point is that as soon as a system’s awareness is tied to its own
          survival or flourishing, value is baked into its structure. Moral
          questions build later on top of this simpler fact.
        </p>
      </section>

      {/* Insight box */}
      <section className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-neutral-700">
            Deeper insight: value as a structural gradient
          </summary>
          <div className="mt-2 space-y-2 text-sm text-neutral-700 leading-relaxed">
            <p>
              IO treats value as a structural asymmetry: some states preserve a
              system’s organisation, others degrade it. No conscious
              judge is needed. Value originates in the behaviour of
              self-maintaining informational systems.
            </p>
            <p>
              This makes value a universal feature of sufficiently complex
              systems, not a human invention.
            </p>
          </div>
        </details>
      </section>

      {/* What to carry forward */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-neutral-700 leading-relaxed">The key idea:</p>
        <p className="text-neutral-900 leading-relaxed font-medium">
          When awareness makes some outcomes better or worse for a system’s
          continued existence, value is already present.
        </p>
      </section>

      {/* Navigation */}
      <StepNav
        prevHref="/start/awareness"
        prevLabel="Back: Awareness"
        nextHref="/start/meaning"
        nextLabel="Next: Meaning"
      />
    </main>
  );
}
