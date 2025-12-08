// app/start/summary/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Summary | Informational Ontology",
  description:
    "Final step of the Start Here journey: a compact toolkit for exploring the rest of the site.",
};

export default function SummaryStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here · Step 8 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Summary: your IO toolkit
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          You&apos;ve walked through the gentle version of the Informational
          Ontology chain. This page gathers the essentials in one place and
          points to where you can go next.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The chain in everyday language</h2>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
          <p className="text-sm font-mono tracking-wide text-sky-300">
            Δ → R → I → A → V → M → P
          </p>
          <ul className="list-decimal list-inside text-sm text-slate-300 space-y-1">
            <li>
              <span className="font-semibold">Difference</span>: If nothing ever
              differed from anything else, there would be no world to talk
              about.
            </li>
            <li>
              <span className="font-semibold">Relation</span>: As soon as things
              differ, they stand in distances, orders, and connections.
            </li>
            <li>
              <span className="font-semibold">Information</span>: Stable
              patterns in those relations rule in and rule out possibilities.
            </li>
            <li>
              <span className="font-semibold">Awareness</span>: Some systems use
              information to guide themselves.
            </li>
            <li>
              <span className="font-semibold">Valuation</span>: For such
              systems, some states are better or worse for continuing to exist.
            </li>
            <li>
              <span className="font-semibold">Meaning</span>: Over time,
              information and value weave into stories, expectations, and
              symbols.
            </li>
            <li>
              <span className="font-semibold">Practice</span>: Those stories and
              values show up in what systems actually do.
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How to use this going forward</h2>
        <p className="text-slate-300 leading-relaxed">
          You can treat the chain as a kind of mental lens. When you look at a
          situation—physical, social, personal—you can ask:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>What are the basic differences here?</li>
          <li>What relations do they form?</li>
          <li>What information do those relations carry?</li>
          <li>Who or what is aware of that information?</li>
          <li>What counts as better or worse for them?</li>
          <li>What does this situation mean in their ongoing story?</li>
          <li>How does that show up in practice?</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          Different areas of the site will revisit these questions at different
          levels of detail.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Where to go next</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Link
            href="/ontology"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-sky-500/70"
          >
            <h3 className="text-sm font-semibold text-sky-300">
              Ontological chain
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              See the same sequence in a more formal, structured way, with each
              step stated as a clear claim.
            </p>
          </Link>
          <Link
            href="/simulations"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-sky-500/70"
          >
            <h3 className="text-sm font-semibold text-sky-300">
              Simulations
            </h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Explore small interactive worlds that show how structure and
              information can emerge from simple rules.
            </p>
          </Link>
          <Link
            href="/glossary"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 hover:border-sky-500/70"
          >
            <h3 className="text-sm font-semibold text-sky-300">Glossary</h3>
            <p className="mt-2 text-sm text-slate-300 leading-relaxed">
              Look up key terms as they are used in IO, with both intuitive and
              more precise explanations.
            </p>
          </Link>
        </div>
      </section>

      <section className="border-t border-slate-800 pt-6">
        <p className="text-sm text-slate-400 leading-relaxed">
          As the project grows, this Start Here path will be linked to voice
          narration, diagrams, and animations. For now, it gives you a clean,
          conceptual backbone you can refer back to whenever the details get
          dense.
        </p>
      </section>

      <StepNav
        prevHref="/start/practice"
        prevLabel="Back: Practice"
        nextHref="/start"
        nextLabel="Return to Start here"
      />
    </main>
  );
}
