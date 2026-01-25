// app/start/information/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Information | Informational Ontology",
  description:
    "Step 3 of the Start Here journey: seeing information as patterns in relations.",
};

export default function InformationStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here · Step 3 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Information: patterns that can make a difference
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Once relations become stable, something new appears: patterns that can
          be used to predict or guide what happens next. That&apos;s the sense
          of &quot;information&quot; we&apos;ll use here.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Footprints in the snow</h2>
        <p className="text-slate-300 leading-relaxed">
          Imagine you wake up after a fresh snowfall. The ground outside is
          perfectly smooth—until you notice a line of footprints crossing the
          yard.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The footprints are just differences in the snow. But they also{" "}
          <span className="font-semibold">tell you something</span>:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Someone or something walked by.</li>
          <li>You can guess which way they were going.</li>
          <li>You can estimate how long ago it happened from how sharp the edges are.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          The shape and spacing of the footprints form a{" "}
          <span className="italic">pattern</span>. That pattern makes some
          possibilities likely and others unlikely. In that sense, it carries{" "}
          information.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Patterns that matter</h2>
        <p className="text-slate-300 leading-relaxed">
          Information, in this ontology, is not about news headlines or
          meaningful sentences. It&apos;s more basic than that. It&apos;s about{" "}
          <span className="font-semibold">
            which possibilities get ruled in or out by the way things are
            arranged.
          </span>
        </p>
        <p className="text-slate-300 leading-relaxed">
          A few examples:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            The position of the hands on a clock tells you what time it is.
          </li>
          <li>
            The colour of a traffic light tells drivers whether to stop or go.
          </li>
          <li>
            The pattern of dark and light bars in a barcode lets a scanner
            identify a product.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          In each case, a stable relation—between shapes, colours, positions,
          timings—makes a difference to what can be expected or done next.
        </p>
      </section>

      <section className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-sky-300">
            Deeper insight: information without a reader?
          </summary>
          <div className="mt-2 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p>
              Do you need a conscious mind for there to be information? IO
              leans toward &quot;no&quot; in the basic sense used here. The
              footprints in the snow constrain what happened whether or not
              anyone looks at them.
            </p>
            <p>
              Later, when we talk about awareness and meaning, we&apos;ll layer
              on the idea of information being used and experienced. But at
              this stage, information is just about structure in the world that
              makes some possibilities stand out from others.
            </p>
          </div>
        </details>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-slate-300 leading-relaxed">
          From this step, keep this in mind:
        </p>
        <p className="text-slate-200 leading-relaxed font-medium">
          When relations form stable patterns that rule in and rule out
          possibilities, we have information in the structural sense.
        </p>
      </section>

      <StepNav
        prevHref="/start/relation"
        prevLabel="Back: Relation"
        nextHref="/start/awareness"
        nextLabel="Next: Awareness"
      />
    </main>
  );
}
