// app/start/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { StepNav } from "./StepNav";

export const metadata: Metadata = {
  title: "Start here | Informational Ontology",
  description:
    "A guided, analogy-rich introduction to the Δ → R → I → A → V → M → P chain in Informational Ontology.",
};

export default function StartIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Guided path
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Start here: a gentle tour of Informational Ontology
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This is the narrative, analogy-heavy path through the core chain:
          Difference → Relation → Information → Awareness →{" "}
          <span className="font-semibold">Value</span> → Meaning →{" "}
          <span className="font-semibold">Purpose</span>. Each step keeps the
          formal machinery in the background and focuses on everyday examples.
        </p>
      </section>

      {/* How it works */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How this path works</h2>
        <p className="text-slate-300 leading-relaxed">
          The journey is broken into small steps. Each step:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>introduces one idea in simple language,</li>
          <li>uses analogies and little stories instead of heavy symbols,</li>
          <li>may include a “deeper insight” box you can open,</li>
          <li>ends with a short summary of what you just learned.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          If you ever feel lost, you can jump to the{" "}
          <Link
            href="/ontology"
            className="text-sky-400 hover:text-sky-300 font-medium"
          >
            Ontological chain
          </Link>{" "}
          page to see the full structure laid out in one place.
        </p>
      </section>

      {/* Steps list */}
      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">The steps ahead</h2>
        <ol className="list-decimal list-inside text-sm text-slate-300 space-y-1">
          <li>Difference – starting from the tiniest possible “something”.</li>
          <li>Relation – how differences lean on each other.</li>
          <li>Information – patterns that can make a difference.</li>
          <li>Awareness – when information starts to matter to a system.</li>
          <li>Value – when better / worse becomes real for that system.</li>
          <li>Meaning – patterns weaving into stories and expectations.</li>
          <li>Purpose – how meaning and value guide action.</li>
          <li>Summary – your “toolkit” for the rest of the site.</li>
        </ol>
      </section>

      <StepNav nextHref="/start/difference" nextLabel="Begin with Difference" />
    </main>
  );
}
