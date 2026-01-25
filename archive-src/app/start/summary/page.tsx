// app/start/summary/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Summary & toolkit | Informational Ontology",
  description:
    "Step 8 of the Start Here journey: a quick recap of the Δ → R → I → A → V → M → P chain and tools for reading the rest of the site.",
};

export default function StartSummaryPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here · Step 8 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Summary & toolkit
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          You&apos;ve walked through the core chain of Informational Ontology in
          narrative form. This page gathers the main ideas in one place and
          gives you a small toolkit for exploring the rest of the site.
        </p>
      </section>

      {/* Chain recap */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The chain in one breath</h2>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
          <p className="text-sm font-mono tracking-wide text-sky-300">
            Δ → R → I → A → V → M → P
          </p>
          <ul className="list-decimal list-inside text-sm text-slate-300 space-y-1">
            <li>
              <span className="font-semibold">Difference</span> – If nothing
              ever differed from anything else, there would be no world to talk
              about.
            </li>
            <li>
              <span className="font-semibold">Relation</span> – As soon as
              things differ, they stand in distances, orders, and connections.
            </li>
            <li>
              <span className="font-semibold">Information</span> – Stable
              patterns in those relations rule in and rule out possibilities.
            </li>
            <li>
              <span className="font-semibold">Awareness</span> – Some systems
              use information to guide themselves.
            </li>
            <li>
              <span className="font-semibold">Value</span> – For such systems,
              some states are better or worse for continuing to exist.
            </li>
            <li>
              <span className="font-semibold">Meaning</span> – Over time,
              information and value weave into stories, expectations, and
              symbols.
            </li>
            <li>
              <span className="font-semibold">Purpose</span> – Those stories and
              values show up in the directions a system tends to move and the
              actions it actually takes.
            </li>
          </ul>
        </div>
      </section>

      {/* Reading toolkit */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How to use the rest of the site</h2>
        <p className="text-slate-300 leading-relaxed">
          From here, there are a few natural next steps:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            Visit the{" "}
            <span className="font-semibold">Ontological chain</span> page for a
            more compact, formal overview of each stage.
          </li>
          <li>
            Dive into the <span className="font-semibold">deep</span> sections
            for each stage if you want more technical detail.
          </li>
          <li>
            Explore the <span className="font-semibold">simulations</span> to
            see some of these ideas in action.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          You don&apos;t need to keep all the details in your head. The important
          thing is to remember how the pieces hang together: differences,
          relations, information, awareness, value, meaning, and purpose.
        </p>
      </section>

      {/* Closing */}
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-slate-300 leading-relaxed">
          IO is not just a list of definitions. It&apos;s a way of seeing the
          world as layered, structured, and meaningful without hand-waving.
        </p>
        <p className="text-slate-200 leading-relaxed font-medium">
          Use the chain as a map: when something puzzles you, ask what&apos;s
          differing, how it&apos;s related, what information is present, who or
          what is aware of it, what has value, what it means, and what purpose
          is at work.
        </p>
      </section>

      <StepNav
        prevHref="/start/purpose"
        prevLabel="Back: Purpose"
        // no next step; this is the end of the Start here chain
      />
    </main>
  );
}
