// app/start/awareness/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Awareness | Informational Ontology",
  description:
    "Step 4 of the Start Here journey: minimal awareness as sensitivity to information.",
};

export default function AwarenessStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here · Step 4 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Awareness: when information starts to matter
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Information by itself is just structure in the world. Awareness is
          what happens when a system{" "}
          <span className="font-semibold">responds</span> to information in ways
          that make a difference to how it continues. At that point, some
          informational states are effectively “better” for the system than
          others — the seed of{" "}
          <span className="font-semibold">value</span> is already present.
        </p>
      </section>

      {/* ...your existing middle sections stay the same... */}

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-slate-300 leading-relaxed">
          The key idea from this step:
        </p>
        <p className="text-slate-200 leading-relaxed font-medium">
          Awareness is information in use: a system whose behaviour shifts in
          structured ways because of the information it carries.
        </p>
      </section>

      <StepNav
        prevHref="/start/information"
        prevLabel="Back: Information"
        nextHref="/start/value"
        nextLabel="Next: Value"
      />
    </main>
  );
}
