// app/deep/purpose/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Purpose (P) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Purpose (P) as meaning and value organised into directed patterns of action.",
};

export default function DeepPurposePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep layer · P — Purpose
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Purpose: when meaning leans forward into action
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Purpose is where the chain closes back onto the world. By this stage
          we have information, awareness, value, and meaning. Purpose is{" "}
          <span className="font-semibold">
            meaning and value organised into directed tendencies
          </span>
          : patterns of action aimed at sustaining or realising what matters for
          a system.
        </p>
      </section>

      {/* 1. From meaning to purpose */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. When stories start to steer</h2>
        <p className="text-slate-300 leading-relaxed">
          Meaning gathers information and value into stories: models of what is,
          what matters, and what might happen. Purpose appears when those
          stories stop being purely descriptive and start{" "}
          <span className="font-semibold">guiding behaviour</span>.
        </p>
        <p className="text-slate-300 leading-relaxed">
          A map has meaning for you when you can read it. It has purpose when it
          structures how you move through a city. A promise has meaning when you
          understand it; it has purpose when it shapes what you actually do
          tomorrow.
        </p>
      </section>

      {/* 2. Purpose as directional structure */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. Purpose as directional structure in state space
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Formally, we can think of purpose as{" "}
          <span className="font-semibold">vector-like</span>: it points from
          current states toward preferred regions of state space, guided by
          value and meaning.
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            Information tells the system what is possible and how things hang
            together.
          </li>
          <li>
            Value ranks those possibilities in terms of better and worse.
          </li>
          <li>
            Meaning weaves those rankings into models and narratives.
          </li>
          <li>
            Purpose turns those models into{" "}
            <span className="font-semibold">coherent tendencies to act</span>.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          Without purpose, meaning can become a detached spectator sport.
          Purpose is meaning with consequences.
        </p>
      </section>

      {/* 3. Human-level purpose */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. Human purposes and revision
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Human lives are thick with overlapping purposes:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>short-term goals (finish this task, make dinner),</li>
          <li>medium-term projects (learn a skill, raise a child),</li>
          <li>
            long-term orientations (live honestly, reduce suffering, seek
            understanding).
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          IO suggests that these are not arbitrary. They are ways in which
          informationally-structured beings participate in{" "}
          <span className="italic">
            stabilising and enriching meaningful difference
          </span>{" "}
          across scales: personal, social, ecological, even cosmological.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Crucially, purposes can be{" "}
          <span className="font-semibold">revised</span>. When new information
          or perspectives arrive, meaning shifts, and so do our purposes. This
          feedback loop makes purpose the most dynamic part of the chain.
        </p>
      </section>

      {/* Deeper insight */}
      <section className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-sky-300">
            Deeper insight: purpose vs. mere habit
          </summary>
          <div className="mt-2 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p>
              Not all repeated behaviour counts as purpose. A rock rolling down
              a hill is regular, but not purposeful. Purpose requires{" "}
              <span className="font-semibold">
                value-informed organisation
              </span>
              : behaviour that can be interpreted as oriented by what matters to
              the system.
            </p>
            <p>
              Habits become purposive when they are embedded in, and revisable
              by, a broader web of meaning and value. That&apos;s why IO puts
              Purpose <span className="italic">after</span> Meaning, not
              before.
            </p>
          </div>
        </details>
      </section>

      {/* Nav buttons */}
      <section className="flex flex-wrap gap-3 border-t border-slate-800 pt-6">
        <Link href="/deep/purpose/formal">
          <Button variant="outline" className="border-slate-700">
            Technical notes on Purpose
          </Button>
        </Link>
        <Link href="/ontology">
          <Button variant="outline" className="border-slate-700">
            ← Back to ontological chain
          </Button>
        </Link>
      </section>
    </main>
  );
}
