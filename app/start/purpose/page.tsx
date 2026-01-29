// app/start/purpose/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Start here – Purpose | Informational Ontology",
  description:
    "Step 7 of the Start Here journey: purpose as meaning and value expressed in action.",
};

export default function PurposeStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <ExplanatoryBanner className="mb-8" />
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-neutral-500">
          Start here · Step 7 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Purpose: what we actually do with meaning
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-3xl">
          Purpose is where the chain stops being theoretical. When meaning and
          value start to shape{" "}
          <span className="font-semibold">how a system actually behaves</span>,
          we have purpose: tendencies and projects oriented toward what matters.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">From recipe to cooking</h2>
        <p className="text-neutral-700 leading-relaxed">
          A recipe has meaning when you can read it and imagine the dish. It has
          purpose when you tie on an apron and start chopping vegetables.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          In the same way, an ontology that never shapes behaviour remains
          hypothetical. Purpose is where your understanding starts to change
          what you do, which experiments you run, which relationships you
          protect, which risks you avoid.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Purpose as feedback</h2>
        <p className="text-neutral-700 leading-relaxed">
          In IO, purpose is not a one-way arrow from thought to action. Actions
          feed back:
        </p>
        <ul className="list-disc list-inside text-neutral-700 space-y-1">
          <li>They generate new information.</li>
          <li>
            They confirm or disconfirm values (“this goal was worth it”, “this
            wasn&apos;t”).
          </li>
          <li>They reshape meaning (“so that&apos;s what this really implies”).</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          Purpose closes the loop: Δ → R → I → A → V → M → P → new Δ. What we do
          changes the differences that will exist next.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-neutral-700 leading-relaxed">
          The key idea from this step:
        </p>
        <p className="text-neutral-900 leading-relaxed font-medium">
          Purpose is meaning and value in motion: how a system&apos;s stories
          about what matters become patterns of action in the world.
        </p>
      </section>

      <StepNav
        prevHref="/start/meaning"
        prevLabel="Back: Meaning"
        nextHref="/start/summary"
        nextLabel="Next: Summary & toolkit"
      />
    </main>
  );
}