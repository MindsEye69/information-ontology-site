// app/ontology/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ontological chain | Informational Ontology",
  description:
    "Overview of the core Δ → R → I → A → V → M → P sequence in Informational Ontology.",
};

const stages = [
  {
    id: "delta",
    short: "Δ",
    label: "Difference",
    tagline: "To exist is to differ.",
    overview:
      "Difference is the minimal condition for anything to exist at all. If there were no differences, nothing could be distinguished, related, or known.",
    detail: [
      "Denying difference already presupposes a difference between denial and non-denial. This makes difference the unique, non-derivable ontological primitive.",
    ],
  },
  {
    id: "relation",
    short: "R",
    label: "Relation",
    tagline: "Differences never occur in isolation.",
    overview:
      "Once you have at least one difference, you immediately have relationships: contrasts, gradients, boundaries, and patterns among differences.",
    detail: [
      "Relation is not something added on top of difference; it is what it means for differences to stand in contrast with one another.",
    ],
  },
  {
    id: "information",
    short: "I",
    label: "Information",
    tagline: "Structured differences form information.",
    overview:
      "Information is what we get when differences are organized into patterns. Order, correlation, and structure are all forms of information.",
    detail: [
      "On this view, physics itself can be understood as the dynamics of information—structured differences evolving under lawful constraints.",
    ],
  },
  {
    id: "awareness",
    short: "A",
    label: "Awareness",
    tagline: "When information refers to itself.",
    overview:
      "Awareness arises when information is integrated and recursively related to itself. A system becomes aware when it not only carries information, but tracks and updates it.",
    detail: [
      "This is a minimal, structural notion of awareness: no human-level cognition is required. Any system that internally models its own informational state has at least some degree of awareness.",
    ],
  },
  {
    id: "value",
    short: "V",
    label: "Value",
    tagline: "Awareness introduces preference.",
    overview:
      "Once a system is aware of different possible states, some of those states will be better or worse for its continued existence or stability. This generates value.",
    detail: [
      "Value, in this sense, is not arbitrary or purely subjective. It is awareness applied to possible states, where some outcomes support the system and others undermine it.",
    ],
  },
  {
    id: "meaning",
    short: "M",
    label: "Meaning",
    tagline: "Value becomes structured and shared.",
    overview:
      "Meaning is the pattern of value across an informational landscape. It is how a system organizes what matters, for what, and in which contexts.",
    detail: [
      "Semantic meaning in language, functional meaning in systems, and personal meaning in a life are all special cases of value structured into stable patterns.",
    ],
  },
  {
    id: "purpose",
    short: "P",
    label: "Purpose",
    tagline: "Meaning extended through time.",
    overview:
      "Purpose is what happens when meaning is stabilized and projected into the future. It is the directed, goal-like structure of a system’s meaningful organization.",
    detail: [
      "On this view, purpose is not something mysteriously added to reality. It is the long-term shape of meaning in action: how a system consistently leans toward certain patterns of value.",
    ],
  },
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
          Δ → R → I → A → V → M → P
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 leading-relaxed">
          This page summarizes the core sequence of Informational Ontology:
          Difference, Relation, Information, Awareness, Value, Meaning, and
          Purpose. Each step is treated as a logical and structural
          development from the previous one, rather than as an arbitrary list
          of concepts.
        </p>
        <p className="max-w-3xl text-xs text-slate-400 leading-relaxed">
          For a more narrative and analogy-rich path through the same ideas,
          see the{" "}
          <Link
            href="/start"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            Start here
          </Link>{" "}
          section.
        </p>
      </section>

      {/* Overview cards */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1. One chain, seven stages
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          The goal is not to multiply metaphysical entities, but to show how
          much structure follows from starting with difference and refusing
          to smuggle in anything else. Each stage deepens what came before.
        </p>

        {/* How the chain derives */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
          <h3 className="text-sm font-semibold">How each step follows</h3>
          <p className="mt-1 text-xs text-slate-400 leading-relaxed max-w-3xl">
            These are short, non-technical bridges between stages. The Deep Dive pages
            give the full argumentation.
          </p>

          <div className="mt-4 space-y-2">
            <details className="group rounded-xl border border-slate-800 bg-slate-950/20 p-3">
              <summary className="cursor-pointer list-none text-sm font-medium text-slate-200">
                Δ → R: Difference implies relation
                <span className="ml-2 text-xs text-slate-500 group-open:hidden">(open)</span>
              </summary>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                A difference is never “alone”: to differ is to stand in contrast. Boundaries,
                gradients, and contrasts are relations among differences, not additions on top of them.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-800 bg-slate-950/20 p-3">
              <summary className="cursor-pointer list-none text-sm font-medium text-slate-200">
                R → I: Structured relation becomes information
                <span className="ml-2 text-xs text-slate-500 group-open:hidden">(open)</span>
              </summary>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                When relations form stable patterns, they rule in and rule out possibilities.
                That constraint is what IO calls information: structured difference with implications.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-800 bg-slate-950/20 p-3">
              <summary className="cursor-pointer list-none text-sm font-medium text-slate-200">
                I → A: Awareness is informational reflexivity
                <span className="ml-2 text-xs text-slate-500 group-open:hidden">(open)</span>
              </summary>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                A system becomes aware when information is not only present, but internally registered
                such that the system’s own informational state constrains its future state-space.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-800 bg-slate-950/20 p-3">
              <summary className="cursor-pointer list-none text-sm font-medium text-slate-200">
                A → V: Persistence creates preference
                <span className="ml-2 text-xs text-slate-500 group-open:hidden">(open)</span>
              </summary>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Once a system can track alternative states, some states support its continued coherence
                and others undermine it. That differentiation is value: better and worse outcomes for the system.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-800 bg-slate-950/20 p-3">
              <summary className="cursor-pointer list-none text-sm font-medium text-slate-200">
                V → M: Meaning is value structured in context
                <span className="ml-2 text-xs text-slate-500 group-open:hidden">(open)</span>
              </summary>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Meaning is not an inherent property of information. It emerges when information is filtered
                through value—when what matters is organized across an internal landscape of alternatives and implications.
              </p>
            </details>

            <details className="group rounded-xl border border-slate-800 bg-slate-950/20 p-3">
              <summary className="cursor-pointer list-none text-sm font-medium text-slate-200">
                M → P: Purpose projects meaning through time
                <span className="ml-2 text-xs text-slate-500 group-open:hidden">(open)</span>
              </summary>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Purpose is meaning stabilized into directed trajectories. It is value and meaning extended over time,
                shaping consistent action rather than isolated responses.
              </p>
            </details>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
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
              <div className="mt-3">
                <Link
                  href={`/deep/${stage.id}`}
                  className="inline-flex items-center text-xs font-medium text-sky-400 hover:text-sky-300"
                >
                  Dive deeper →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expandable detail list */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. Expandable details for each stage
        </h2>
        <p className="text-slate-300 text-sm leading-relaxed">
          You can skim the overviews above and only open the sections that
          matter to you, or work through the chain in order. The{" "}
          <Link
            href="/start"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            Start here
          </Link>{" "}
          path tells the same story in more narrative form.
        </p>

        <div className="space-y-3">
          {stages.map((stage, index) => (
            <details
              key={stage.id}
              className="group rounded-2xl border border-slate-800 bg-slate-900/50 px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-wide text-sky-400">
                    {index + 1}. {stage.short}
                  </p>
                  <p className="text-sm font-semibold">{stage.label}</p>
                  <p className="mt-1 text-xs text-slate-400">
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
              <div className="mt-3 space-y-2 text-sm text-slate-300 leading-relaxed">
                <p>{stage.overview}</p>
                {stage.detail.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <p className="pt-2 text-xs text-slate-400">
                  For a chapter-style treatment of {stage.label.toLowerCase()},
                  see{" "}
                  <Link
                    href={`/deep/${stage.id}`}
                    className="font-medium text-sky-400 hover:text-sky-300"
                  >
                    Dive deeper →
                  </Link>
                  .
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Back link */}
      <section>
        <Link href="/" className="inline-flex">
          <Button variant="outline" size="sm">
            ← Back to home
          </Button>
        </Link>
      </section>
    </main>
  );
}
