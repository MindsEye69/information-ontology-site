// app/start/difference/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Difference | Informational Ontology",
  description: "Step 1 of the Start Here journey: beginning from difference.",
};

export default function DifferenceStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-neutral-500">
          Start here · Step 1 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Difference: the tiniest possible &quot;something&quot;
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-3xl">
          We&apos;ll begin as small as we possibly can. Not with atoms or
          particles or minds, but with something even simpler: the idea that
          things can be different.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The blank page and the dot</h2>
        <p className="text-neutral-700 leading-relaxed">
          Imagine a completely blank sheet of paper. No dots, no lines, no
          folds, no colour, no texture. Just an idea of featureless emptiness.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Now imagine you put a tiny dot on it.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Suddenly there is something you can point to: <span className="italic">there</span>.
          The dot is only interesting because it differs from the rest of the
          page. If everything looked exactly the same everywhere, there would
          be nothing to notice, nothing to talk about, nothing to experience.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Informational Ontology starts from this simple idea:
          <span className="font-semibold">
            {" "}
            to exist, in any meaningful sense, is to differ.
          </span>
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Difference without details</h2>
        <p className="text-neutral-700 leading-relaxed">
          Notice what we haven&apos;t said yet. We haven&apos;t said what the
          dot is made of, how big it is, what colour it is, or who is looking at
          it. All of that comes later.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          For now, all we care about is the most minimal thing you can say:
          <span className="italic"> something is not the same as something else.</span>
        </p>
        <p className="text-neutral-700 leading-relaxed">
          You can play the same game in other ways:
        </p>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>Two rooms separated by a wall: &quot;inside&quot; vs &quot;outside&quot;.</li>
          <li>Two musical notes: higher vs lower pitch.</li>
          <li>Two moments in time: before vs after.</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          In each case, once you can honestly say &quot;this is not exactly the
          same as that&quot;, you already have difference.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-neutral-700">
            Deeper insight: why start here?
          </summary>
          <div className="mt-2 space-y-2 text-sm text-neutral-700 leading-relaxed">
            <p>
              Many philosophies start by assuming matter, or minds, or logical
              laws. IO tries to go one step more minimal. If you deny that
              anything ever differs from anything else, there is nothing left to
              hang any idea on—not even the idea of &quot;you&quot; making that
              claim.
            </p>
            <p>
              So we treat difference as something you cannot coherently get rid
              of. It is not a conclusion; it is the starting point.
            </p>
          </div>
        </details>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-neutral-700 leading-relaxed">
          For the rest of this journey, you only need to remember one thing from
          this step:
        </p>
        <p className="text-neutral-900 leading-relaxed font-medium">
          Wherever there is anything at all, there are differences. No
          differences, no world.
        </p>
      </section>

      <StepNav
        prevHref="/start"
        prevLabel="Back to Start here"
        nextHref="/start/relation"
        nextLabel="Next: Relation"
      />
    </main>
  );
}
