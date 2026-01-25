// app/context/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Context | Informational Ontology",
  description:
    "Philosophical context and influences for the Informational Ontology project.",
};

export default function ContextPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">
          Context
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Philosophical Context &amp; Influences
        </h1>
        <p className="max-w-3xl text-base text-slate-300 leading-relaxed">
          Informational Ontology (IO) is presented as a first‑principles
          framework rather than a restatement of any single existing school.
          It nonetheless overlaps with several well‑established traditions.
        </p>
        <p className="max-w-3xl text-sm text-slate-400 leading-relaxed">
          If you&apos;re new to the project, the best entry point is the{" "}
          <Link
            href="/start"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            Start here
          </Link>
          {" "}path.
        </p>
      </section>

      {/* Body */}
      <section className="space-y-6 max-w-3xl">
        <h2 className="text-xl font-semibold tracking-tight">Relation to Existing Work</h2>
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            <span className="font-semibold text-slate-100">Structural realism:</span>{" "}
            IO shares the view that relations and structure are prior to objects,
            but derives structure from the more minimal axiom of difference.
          </p>
          <p>
            <span className="font-semibold text-slate-100">Philosophy of information:</span>{" "}
            IO treats information as structured difference, not as communication,
            semantics, or Shannon‑style signal theory.
          </p>
          <p>
            <span className="font-semibold text-slate-100">Process and systems philosophy:</span>{" "}
            IO aligns with process views while retaining a strict axiomatic
            grounding.
          </p>
        </div>

        <p className="text-sm text-slate-400 leading-relaxed">
          IO should be read as a contribution to this landscape, offering a
          minimal generative grammar rather than a synthesis of existing
          theories.
        </p>
      </section>
    </main>
  );
}
