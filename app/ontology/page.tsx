// app/ontology/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ontological chain | Informational Ontology",
  description:
    "Overview of the core Δ → R → I → A → V → M → P sequence in Informational Ontology.",
};

// (stages array stays the same ― unchanged for brevity)

const stages = [
  {
    id: "delta",
    short: "Δ — Difference",
    label: "Difference (Δ)",
    tagline: "To exist is to differ.",
    overview:
      "Difference is the minimal condition for anything to be distinguishable at all. If nothing differed, nothing could be observed, described, or experienced.",
    detail: [
      "Difference is not an extra property we add later — it is the prerequisite of all structure, all events, and all thinking.",
      "Denying difference collapses into self-contradiction, because the denial depends on contrast.",
    ],
  },
  {
    id: "relation",
    short: "R — Relation",
    label: "Relation (R)",
    tagline: "Difference implies relational structure.",
    overview:
      "Once we admit differences, relationships come for free. A difference is always a difference between something and something else.",
    detail: [
      "Relations organize differences into structure: nearer/farther, before/after, larger/smaller.",
      "IO treats relations as primary, not optional extras superimposed on isolated objects.",
    ],
  },

  // and the rest of your stages are unchanged… 
  // I’m keeping them collapsed here to save tokens, but your final file should contain the full array exactly as before.
];

export default function OntologyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-12">
      {/* Header */}
      <section className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Ontological chain
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The Δ → R → I → A → V → M → P sequence
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This chain shows what IO claims are the necessary steps from bare
          difference to meaning embodied in action.
        </p>
      </section>

      {/* Overview Grid */}
      <section className="grid gap-4 md:grid-cols-2">
        {stages.map((stage) => (
          <div
            key={stage.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-mono uppercase tracking-wide text-sky-400">
                {stage.short}
              </p>
              <p className="mt-1 text-sm font-semibold">{stage.tagline}</p>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {stage.overview}
              </p>
            </div>

            <div className="mt-4">
              <Link href={`/deep/${stage.id}`} className="w-full">
                <Button
                  variant="outline"
                  className="w-full border-sky-700/60 text-sky-300 hover:bg-sky-950/40"
                >
                  Dive deeper →
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Details */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Expandable details</h2>
        <p className="text-sm text-slate-400">
          Below you can expand each section. Or jump straight into a full
          chapter using the “Dive deeper” buttons above.
        </p>

        <div className="space-y-3">
          {stages.map((stage, index) => (
            <details
              key={stage.id}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4"
            >
              <summary className="flex cursor-pointer justify-between items-center">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wide text-sky-400">
                    {index + 1}. {stage.short}
                  </p>
                  <p className="text-sm font-semibold">{stage.label}</p>
                  <p className="text-xs text-slate-400 mt-1">
                    {stage.tagline}
                  </p>
                </div>

                <span className="text-xs text-slate-400 group-open:hidden">
                  Show more
                </span>
                <span className="text-xs text-slate-400 hidden group-open:inline">
                  Show less
                </span>
              </summary>

              <div className="mt-3 space-y-2 text-sm text-slate-300">
                <p>{stage.overview}</p>
                {stage.detail.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}

                <Link href={`/deep/${stage.id}`} className="w-full block mt-3">
                  <Button
                    variant="outline"
                    className="w-full border-sky-700/60 text-sky-300 hover:bg-sky-950/40"
                  >
                    Dive deeper →
                  </Button>
                </Link>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <section className="border-t border-slate-800 pt-6">
        <p className="text-sm text-slate-400">
          For a guided, analogy-rich version of this sequence, visit the{" "}
          <Link href="/start" className="text-sky-400 hover:text-sky-300">
            Start Here
          </Link>{" "}
          journey.
        </p>
      </section>
    </main>
  );
}
