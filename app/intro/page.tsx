// app/intro/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introduction | Informational Ontology",
  description:
    "How to read the Informational Ontology site, who it is for, and what problem it tries to solve.",
};

export default function IntroPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-12">
      {/* Page header */}
      <section className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Introduction
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          How to read Informational Ontology
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Informational Ontology (IO) is an attempt to describe reality by
          starting from what cannot be denied: pure difference and relation.
          From there, it builds a chain through information, awareness, value,
          meaning, and practice. This page explains what the project is trying
          to do, who it is for, and how to move through the material without
          getting lost.
        </p>
      </section>

      {/* 1. Purpose */}
      <section className="grid gap-8 md:grid-cols-[3fr,2fr] items-start">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">1. Purpose of this project</h2>
          <p className="text-slate-300 leading-relaxed">
            IO aims to be more than a set of interesting ideas. The target is a{" "}
            <span className="font-semibold">
              coherent ontology grounded in information
            </span>{" "}
            that can speak to questions about physics, mind, ethics, and
            meaning without collapsing into hand-waving or vague metaphors.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The guiding constraint is simple:{" "}
            <span className="font-semibold">
              every step should follow from the previous ones
            </span>
            . We start from difference, show why relation must follow, how
            relation gives rise to information, and how awareness, value,
            meaning, and practice emerge from that informational structure.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The website version exists so that these steps can be explored at
            different depths. Lay readers can stay with the intuitive track;
            technically inclined readers can follow the more formal arguments
            and simulations.
          </p>
        </div>

        {/* Sidebar for lay readers */}
        <aside className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 space-y-2">
          <h3 className="text-sm font-semibold text-sky-300">
            For casual / lay readers
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            If you&apos;re not a philosopher or physicist, don&apos;t worry.
            You can treat IO as a{" "}
            <span className="font-semibold">
              guided tour through one possible map of reality
            </span>
            . The{" "}
            <Link
              href="/start"
              className="font-semibold text-sky-400 hover:text-sky-300"
            >
              Start here
            </Link>{" "}
            path is designed specifically for you.
          </p>
        </aside>
      </section>

      {/* 2. How to read */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. How to move through the site</h2>
        <p className="text-slate-300 leading-relaxed">
          The site is organised roughly along the core ontological chain:
          difference → relation → information → awareness → value → meaning →
          practice. You don&apos;t need to absorb everything at once. A good
          way to read is:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-slate-300">
          <li>
            <span className="font-semibold">Start with the guided path</span>{" "}
            on the{" "}
            <Link
              href="/start"
              className="text-sky-400 hover:text-sky-300 font-medium"
            >
              Start here
            </Link>{" "}
            section for a narrative, analogy-rich overview.
          </li>
          <li>
            Visit the{" "}
            <Link
              href="/ontology"
              className="text-sky-400 hover:text-sky-300 font-medium"
            >
              Ontological chain
            </Link>{" "}
            section for a more structured, step-by-step formulation.
          </li>
          <li>
            Dip into{" "}
            <Link
              href="/simulations"
              className="text-sky-400 hover:text-sky-300 font-medium"
            >
              Simulations
            </Link>{" "}
            to see small visual &quot;toy worlds&quot; that illustrate how
            structure can emerge from informational rules.
          </li>
          <li>
            Use the{" "}
            <Link
              href="/glossary"
              className="text-sky-400 hover:text-sky-300 font-medium"
            >
              Glossary
            </Link>{" "}
            whenever a term feels slippery or overloaded.
          </li>
        </ol>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-sky-300">
              If you like intuition and analogies
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Follow the{" "}
              <Link
                href="/start"
                className="font-semibold text-sky-400 hover:text-sky-300"
              >
                Start here
              </Link>{" "}
              track, read the examples, and skim the rest. You can treat the
              formal structure as optional scaffolding.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-sky-300">
              If you want formal structure
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Treat each section as a set of claims to be checked. Follow the
              chain Δ → R → I → A → V → M → P and ask whether each step really
              follows. The simulations and analogies are then tools for
              stress-testing the structure, not replacements for it.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Scope & limits */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. Scope, limits, and intended audience
        </h2>
        <p className="text-slate-300 leading-relaxed">
          IO is not a physics theory, not a theology, and not a self-help
          system. It is{" "}
          <span className="font-semibold">
            a metaphysical and structural proposal
          </span>{" "}
          about how reality can be understood in informational terms.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The primary audience includes people who are already thinking about
          metaphysics, consciousness, systems theory, or foundations of
          physics—but it is written so that a motivated lay reader can follow
          with patience and the help of sidebars and diagrams.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The project makes commitments: for example, that{" "}
          <span className="italic">to exist is to differ</span>, and that
          information and awareness are not optional add-ons but{" "}
          <span className="font-semibold">structural features of reality</span>.
          Those commitments can be challenged, but they are always stated as
          clearly as possible so disagreement has something definite to push
          against.
        </p>
      </section>

      {/* 4. Relation to earlier drafts / versions */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          4. Relation to earlier drafts and future versions
        </h2>
        <p className="text-slate-300 leading-relaxed">
          This site corresponds to what was previously called{" "}
          <span className="font-semibold">Revision 4</span> of the
          Informational Ontology manuscript. The goal is to stabilise the core
          arguments in a public, inspectable form. Earlier drafts and private
          notes are treated as background material, not as canonical sources.
        </p>
        <p className="text-slate-300 leading-relaxed">
          As the project evolves, new sections, simulations, and sidebars may
          be added. When that happens, the aim is{" "}
          <span className="font-semibold">
            clarification, not endless reinvention
          </span>
          : changes should reduce confusion, tighten arguments, or integrate
          feedback—rather than shifting the foundations under the reader&apos;s
          feet.
        </p>
      </section>

      {/* Closing */}
      <section className="border-t border-slate-800 pt-6 space-y-2">
        <p className="text-sm text-slate-400 leading-relaxed">
          If you&apos;re unsure where to go next, the{" "}
          <Link
            href="/start"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            Start here
          </Link>{" "}
          journey is the safest entry point. If you already like formal
          structure, you can instead jump to the{" "}
          <Link
            href="/ontology"
            className="font-medium text-sky-400 hover:text-sky-300"
          >
            Ontological chain
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
