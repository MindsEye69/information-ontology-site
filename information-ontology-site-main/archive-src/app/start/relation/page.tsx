// app/start/relation/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Relation | Informational Ontology",
  description: "Step 2 of the Start Here journey: how differences form relations.",
};

export default function RelationStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here · Step 2 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Relation: when differences lean on each other
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Once we admit differences, something else quietly comes along for the
          ride: relations. Two things that differ are not just separate; they
          stand in some way with respect to each other.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">From dots to distances</h2>
        <p className="text-slate-300 leading-relaxed">
          Go back to the sheet of paper with a single dot. Now add a second dot.
        </p>
        <p className="text-slate-300 leading-relaxed">
          As soon as you do that, something new is present: a{" "}
          <span className="italic">distance</span> between them. You didn&apos;t
          have to draw the distance. It comes along automatically when there
          are two separate points.
        </p>
        <p className="text-slate-300 leading-relaxed">
          You can now talk about:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>which dot is to the left or right,</li>
          <li>which one is closer to the edge of the page,</li>
          <li>what would happen if you joined them with a line.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          The dots haven&apos;t changed. But the <span className="italic">web</span> they form
          has become richer.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Relations everywhere</h2>
        <p className="text-slate-300 leading-relaxed">
          The same idea shows up in ordinary life:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            Two notes in music: one can be higher, lower, consonant, or dissonant.
          </li>
          <li>
            Two events in time: one can happen before, after, or at the same
            time as the other.
          </li>
          <li>
            Two temperatures: one can be warmer or colder, closer to freezing or
            boiling.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          Whenever you have differences, you also have ways of comparing,
          ordering, and connecting them. This is what IO calls{" "}
          <span className="font-semibold">relational structure</span>.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-sky-300">
            Deeper insight: no lonely differences
          </summary>
          <div className="mt-2 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p>
              It would be strange to imagine a &quot;difference&quot; that
              doesn&apos;t relate to anything. Different from what? As soon as
              you answer that, you have at least a pair, and therefore a
              relation.
            </p>
            <p>
              IO takes this seriously. It doesn&apos;t treat relations as an
              optional extra you sprinkle onto isolated things. Things are
              already caught up in networks of relations simply by being
              different at all.
            </p>
          </div>
        </details>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-slate-300 leading-relaxed">
          From this step, keep one simple phrase in mind:
        </p>
        <p className="text-slate-200 leading-relaxed font-medium">
          Where there are differences, there are relations. The world is not
          just a pile of separate bits, but a web of &quot;in-between&quot;.
        </p>
      </section>

      <StepNav
        prevHref="/start/difference"
        prevLabel="Back: Difference"
        nextHref="/start/information"
        nextLabel="Next: Information"
      />
    </main>
  );
}
