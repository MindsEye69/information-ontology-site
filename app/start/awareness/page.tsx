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
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here · Step 4 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Awareness: when information starts to matter
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Information by itself is just structure in the world. Awareness
          begins when some system is organized so that information makes a
          difference to what it does.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The humble thermostat</h2>
        <p className="text-slate-300 leading-relaxed">
          Think about a basic thermostat on a wall. It doesn&apos;t think. It
          doesn&apos;t feel. But:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>It has a sensor for temperature.</li>
          <li>It compares the current temperature to a target value.</li>
          <li>It turns the heating or cooling on or off accordingly.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          In a thin, mechanical sense, the thermostat is{" "}
          <span className="italic">aware</span> of the temperature. The
          information doesn&apos;t just sit there; it feeds into a response.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Plants that follow the light</h2>
        <p className="text-slate-300 leading-relaxed">
          A sunflower turning its head to follow the sun is another kind of
          awareness. The plant has no nervous system like ours, but it still:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>detects the direction of the light,</li>
          <li>changes its growth patterns,</li>
          <li>and ends up catching more energy as a result.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          Information about light direction is being used to shape the plant&apos;s
          own behaviour over time. That&apos;s awareness in a minimal, structural
          sense.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-sky-300">
            Deeper insight: awareness without consciousness?
          </summary>
          <div className="mt-2 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p>
              When people hear &quot;awareness&quot;, they often think of
              vivid, human experience: colours, sounds, thoughts, emotions.
              IO uses the word in a thinner, structural way at this level.
            </p>
            <p>
              A system is aware, in this minimal sense, when it is
              systematically sensitive to information in ways that help shape
              its own ongoing pattern. Full-blown consciousness, if it appears,
              would be a very rich, layered form of this kind of organisation.
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
          Awareness begins when information doesn&apos;t just exist, but is used
          by a system to guide itself.
        </p>
      </section>

      <StepNav
        prevHref="/start/information"
        prevLabel="Back: Information"
        nextHref="/start/value"
        nextLabel="Next: Value"
      />
    </main>
  );
}
