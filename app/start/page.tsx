// app/start/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { StepNav } from "./StepNav";

export const metadata: Metadata = {
  title: "Start here | Informational Ontology",
  description:
    "A gentle, analogy-rich path through Informational Ontology for lay readers.",
};

export default function StartHerePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          A gentle journey through Informational Ontology
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This path is written for curious, non-technical readers. It uses
          pictures, analogies, and stories to walk you through the core idea of
          Informational Ontology: starting from simple differences in the world,
          all the way to awareness, value, meaning, and practice.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Who this is for</h2>
        <p className="text-slate-300 leading-relaxed">
          You don&apos;t need a background in philosophy or physics. If you can
          follow everyday examples and are willing to think slowly and
          carefully, you have everything you need. When the site later adds
          animations and voice-overs, this will be the track they follow.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-sky-300">
              What this journey is not
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              <li>Not a religion or belief system.</li>
              <li>Not quantum mysticism or &quot;woo&quot;.</li>
              <li>Not a self-help program.</li>
              <li>Not academic jargon for its own sake.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-sky-300">
              What you might gain
            </h3>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              <li>A new way to look at &quot;what is real&quot;.</li>
              <li>A sense of how structure can arise from almost nothing.</li>
              <li>A clearer view of how awareness and meaning fit into reality.</li>
              <li>A vocabulary for thinking about information and value.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How this path works</h2>
        <p className="text-slate-300 leading-relaxed">
          The journey is broken into small steps. Each step:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>introduces one idea in simple language,</li>
          <li>uses analogies and little stories instead of heavy symbols,</li>
          <li>optionally includes a &quot;deeper insight&quot; box you can open,</li>
          <li>ends with a short summary of what you just learned.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          If you ever feel lost, you can jump to the{" "}
          <Link href="/ontology" className="text-sky-400 hover:text-sky-300">
            Ontological chain
          </Link>{" "}
          page to see the full structure laid out in one place.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">The steps ahead</h2>
        <ol className="list-decimal list-inside text-sm text-slate-300 space-y-1">
          <li>Difference – starting from the tiniest possible &quot;something&quot;.</li>
          <li>Relation – how differences lean on each other.</li>
          <li>Information – patterns that can make a difference.</li>
          <li>Awareness – when information starts to matter to a system.</li>
          <li>Valuation – better / worse becomes real for that system.</li>
          <li>Meaning – patterns weaving into stories and expectations.</li>
          <li>Practice – how meaning shows up in action.</li>
          <li>Summary – your &quot;toolkit&quot; for the rest of the site.</li>
        </ol>
      </section>

      <StepNav
        nextHref="/start/difference"
        nextLabel="Begin with Difference"
      />
    </main>
  );
}
