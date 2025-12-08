// app/ontology/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ontological chain | Informational Ontology",
  description:
    "Overview of the core Δ → R → I → A → V → M → P sequence in Informational Ontology.",
};

const stages = [
  {
    id: "delta",
    short: "Δ — Difference",
    label: "Difference (Δ)",
    tagline: "To exist is to differ.",
    overview:
      "We begin from what cannot be denied without using it: difference. If there were no differences at all, nothing could be distinguished, described, or talked about.",
    detail: [
      "Difference is not an extra property we add to an already-existing world. It is the most minimal condition under which anything like a 'world' can appear at all. If there were no differences, there would be no boundaries, no events, no change, and no way to draw a line between 'this' and 'that'.",
      "Stating 'there are differences' is not a speculative claim about physics; it is a structural claim about what must be the case for any experience, measurement, or statement to be possible.",
    ],
  },
  {
    id: "relation",
    short: "R — Relation",
    label: "Relation (R)",
    tagline: "Difference implies relational structure.",
    overview:
      "Once we admit differences, we get relations for free. A difference is always a difference between at least two somethings. Those somethings stand in structured patterns of 'more / less', 'before / after', 'near / far', and so on.",
    detail: [
      "A lone, isolated 'difference' that relates to nothing else is incoherent. As soon as we distinguish A from B, we can also ask how they stand with respect to each other: closer or further, similar or dissimilar, causally connected or independent.",
      "The ontology at this stage is still extremely thin. We are not yet talking about particles, fields, or minds; only about the fact that whatever exists is caught up in networks of relations.",
    ],
  },
  {
    id: "information",
    short: "I — Information",
    label: "Information (I)",
    tagline: "Stable relations encode information.",
    overview:
      "Information, in this context, is not 'news' or 'meaningful messages'. It is pattern in relational structure: regularities that make a difference to what can happen next.",
    detail: [
      "A system has information when some of its possible states rule out others in a structured way. For example, if a detector reliably flips when a certain event occurs, that flip carries information about the event, even if no conscious mind ever reads it.",
      "Informational Ontology treats information as an objective feature of relational structure, not something that only exists relative to a human observer.",
    ],
  },
  {
    id: "awareness",
    short: "A — Awareness",
    label: "Awareness (A)",
    tagline: "Information becomes about something for a system.",
    overview:
      "Awareness, in IO, is not full human consciousness. It is the minimal condition under which a system is sensitive to information in a way that guides its own state or behaviour.",
    detail: [
      "A thermostat 'knows' the temperature only in a very thin sense, but it does stand in an informational relation that makes a difference to what it does. At higher levels, biological organisms integrate vast streams of information to maintain their own structure.",
      "Awareness is what it looks like when informational structure is organised around maintaining or updating a system's own ongoing pattern.",
    ],
  },
  {
    id: "valuation",
    short: "V — Valuation",
    label: "Valuation (V)",
    tagline: "Awareness carries implicit tendencies: better / worse.",
    overview:
      "Once a system is organised around its own continuation, information is no longer neutral. Some states are good for the system, some are bad, and information is processed accordingly.",
    detail: [
      "For a system that can fail or succeed at staying organised, 'better' and 'worse' are not merely human projections. They are structural facts about which conditions support or undermine the system's pattern of activity.",
      "Valuation at this level does not yet involve explicit goals or ethical judgments. It is closer to the way a living cell 'prefers' certain chemical conditions: what sustains its organisation is implicitly valued.",
    ],
  },
  {
    id: "meaning",
    short: "M — Meaning",
    label: "Meaning (M)",
    tagline: "Valuation structured over time and context.",
    overview:
      "Meaning arises when information and valuation are woven into longer-term patterns: expectations, models, narratives, and symbols that matter to a system because of how they guide its ongoing activity.",
    detail: [
      "A signal has meaning for a system when it is not just correlated with something, but used by the system in ways that connect to its valuations.",
      "Human meaning-making adds language, culture, and reflection on top of this deeper informational-valuation layer.",
    ],
  },
  {
    id: "practice",
    short: "P — Practice",
    label: "Practice (P)",
    tagline: "Meaning embodied in action.",
    overview:
      "Practice is where the chain closes back on the world. Meaning that never shows up in action, behaviour, or transformed structure remains hypothetical.",
    detail: [
      "For humans, practice includes everything from bodily habits to scientific experimentation and ethical decision-making.",
      "By placing practice at the end of the chain, IO emphasises that an ontology is not merely a description of what is. It is also a guide to how we move, build, and live within what is.",
    ],
  },
];

export default function OntologyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-12">
      {/* Page header */}
      <section className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Ontological chain
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The Δ → R → I → A → V → M → P sequence
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Informational Ontology is organised around a single chain of ideas:
          Difference → Relation → Information → Awareness → Valuation → Meaning
          → Practice. This page gives a high-level map of that chain, followed
          by expandable sections that go into more depth for each stage.
        </p>
      </section>

      {/* Compact chain overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Overview at a glance</h2>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
          <p className="text-sm font-mono tracking-wide text-sky-300">
            Δ → R → I → A → V → M → P
          </p>
          <p className="mt-3 text-sm text-slate-300 leading-relaxed">
            Each arrow indicates a claimed dependency: once you grant the left
            side, IO argues that you are already committed to the right. The
            goal is not to add extra metaphysical entities, but to show how much
            structure follows from starting with difference and refusing to
            smuggle in anything else.
          </p>
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

      {/* Expandable detail sections */}
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
                  For a full chapter-style treatment of {stage.label.toLowerCase()},
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

      {/* Closing note */}
      <section className="border-t border-slate-800 pt-6">
        <p className="text-sm text-slate-400 leading-relaxed">
          The rest of the site unpacks this chain in more detail. The{" "}
          <Link
            href="/start"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            Start here
          </Link>{" "}
          journey gives a story-like version for lay readers; the{" "}
          <Link
            href="/simulations"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            Simulations
          </Link>{" "}
          show small toy-worlds that illustrate how structure can emerge from
          simple informational rules; and the{" "}
          <Link
            href="/deep/delta"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            deep section pages
          </Link>{" "}
          provide book-length treatments of each stage.
        </p>
      </section>
    </main>
  );
}
