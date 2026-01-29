// app/start/time-and-direction/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Why Time Has a Direction | Informational Ontology",
  description:
    "A friendly introduction to why time has a direction, without treating time as a fundamental ingredient of reality.",
};

export default function TimeAndDirectionStartPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-10">
      <ExplanatoryBanner className="mb-8" />
      <section className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-neutral-500">
          Start here · Big questions
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Why does time have a direction?
        </h1>
        <p className="text-lg text-neutral-700 leading-relaxed">
          We remember the past but not the future. Order tends to fall apart
          unless effort is applied. Causes come before effects.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Most explanations quietly assume time itself is doing the work —
          flowing, pushing, or carrying events along. Informational Ontology
          asks a simpler question:
        </p>
        <p className="text-neutral-900 font-semibold">
          What if time isn’t fundamental at all?
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          A different way to think about time
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          Instead of treating time as a background container, Informational
          Ontology treats time as something that appears when situations are
          ordered in an uneven way.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          If one situation can only happen after another — but not the other
          way around — you already have a before and after. You don’t need
          clocks to get that. You only need asymmetry.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
        <h2 className="text-lg font-semibold">
          Constraint makes the difference
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed">
          Some situations are tightly constrained — there are only a few ways
          they can continue. Other situations are loose and open — there are
          many more ways forward.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed">
          When constraints relax, possibilities multiply. And once there are
          more ways to go forward than backward, a direction appears naturally.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          No force. No flow. Just structure.
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          Nothing needs to push the universe “forward in time.” Direction
          emerges because there are simply more ways for constrained situations
          to open up than to re-form themselves perfectly.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          That quiet structural imbalance is enough to explain why time feels
          directional — and why it’s so hard to reverse.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
        <h2 className="text-lg font-semibold">
          Want the full explanation?
        </h2>
        <p className="text-sm text-neutral-700 leading-relaxed">
          This page is an introduction. The full version explores the idea in
          more detail, with examples, analogies, and careful reasoning.
        </p>
        <Link href="/deep/time-constraint-direction">
          <Button
            variant="outline"
            className="mt-2 border-slate-700 w-full sm:w-auto"
          >
            Go deeper: Time, Constraint, and Direction
          </Button>
        </Link>
      </section>

      <section className="pt-6">
        <Link href="/start">
          <Button variant="outline" className="border-slate-700">
            Back to Start Here
          </Button>
        </Link>
      </section>
    </main>
  );
}