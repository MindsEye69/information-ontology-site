// app/deep/meaning/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Meaning (M) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Meaning (M) as value and information woven over time.",
};

export default function DeepMeaningPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep section · M — Meaning
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Meaning (M): patterns that matter in a story
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Meaning in IO emerges when information and value are not just
          momentary, but organised across time into expectations, models, and
          narratives that guide a system&apos;s ongoing activity.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. From signals to significance</h2>
        <p className="text-slate-300 leading-relaxed">
          A raw signal—a light turning red, a sound, a symbol—becomes meaningful
          when it is tied into a structure of:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>what it typically precedes,</li>
          <li>what it calls for in response,</li>
          <li>and how that response connects to what the system values.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          Meaning is not in the bare shape of the signal alone, but in its role
          inside a larger web of information and value.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Personal and shared meaning</h2>
        <p className="text-slate-300 leading-relaxed">
          Human meaning-making adds extra layers: language, culture, memory,
          reflection. A melody can mean comfort for one person and grief for
          another because it connects to different stories and values.
        </p>
        <p className="text-slate-300 leading-relaxed">
          IO does not try to collapse all of this richness into a single
          formula. Instead, it emphasises the common structure: a pattern
          acquires meaning for a system when it plays a role in how that system
          interprets and responds to the world in light of what it cares about.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Meaning and prediction</h2>
        <p className="text-slate-300 leading-relaxed">
          Many forms of meaning are predictive. A warning call means a predator
          is likely nearby; a scientific model&apos;s graph means a particular
          observable is expected to behave in a certain way under specified
          conditions.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The link to value is crucial: the same information can have
          different meanings for different systems depending on what is at stake
          for them and what they have learned to expect.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Next layers</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          This page sketches Meaning (M) in structural terms. Technical work
          might connect this to semantics, model theory, and learning dynamics.
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep/meaning/formal" className="sm:w-1/2 w-full">
            <Button
              variant="outline"
              className="w-full border-sky-700/60 text-sky-300 hover:bg-sky-950/40"
            >
              Dive even deeper (technical) →
            </Button>
          </Link>
          <Link href="/ontology" className="sm:w-1/2 w-full">
            <Button variant="outline" className="w-full border-slate-700">
              Back to Ontological chain
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
