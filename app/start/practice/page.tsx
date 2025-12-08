// app/start/practice/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Practice | Informational Ontology",
  description:
    "Step 7 of the Start Here journey: practice as meaning expressed in action.",
};

export default function PracticeStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here · Step 7 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Practice: when meaning hits the ground
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Practice is where the chain closes back on the world. Meaning that
          never affects action, behaviour, or structure stays hypothetical. In
          practice, systems enact their understanding of reality.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cooking from a recipe</h2>
        <p className="text-slate-300 leading-relaxed">
          A recipe is information. It has ingredients, quantities, and steps. It
          only becomes meaningful in a full sense when:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>someone cares about the outcome (valuation),</li>
          <li>understands what the instructions mean,</li>
          <li>and actually uses them to cook.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          The result—a finished meal—embodies the whole chain: differences,
          relations, information, awareness, valuation, and meaning, all
          expressed in practice.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Science, ethics, and everyday life</h2>
        <p className="text-slate-300 leading-relaxed">
          At larger scales, practice shows up as:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            scientific experiments that test and refine our models of the world,
          </li>
          <li>
            ethical decisions where we act on what we think is right or wrong,
          </li>
          <li>
            personal habits that embody what we really value, not just what we
            say we value.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          IO treats practice as part of ontology, not an afterthought. How
          systems act is one of the clearest windows into how they organise
          information, awareness, and value.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-sky-300">
            Deeper insight: practice and feedback
          </summary>
          <div className="mt-2 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p>
              Practice doesn&apos;t just express an ontology; it also feeds back
              into it. When actions succeed or fail, systems update how they
              carve up the world, what they treat as important, and what they
              expect next.
            </p>
            <p>
              In this way, practice is both the outcome of the chain and one of
              the main forces that shapes earlier stages over time.
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
          An ontology is not just a description; it is also a guide to practice,
          and practice is where its claims are tested and lived.
        </p>
      </section>

      <StepNav
        prevHref="/start/meaning"
        prevLabel="Back: Meaning"
        nextHref="/start/summary"
        nextLabel="Next: Summary & toolkit"
      />
    </main>
  );
}
