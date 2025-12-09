// app/deep/value/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Value (V) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Value (V) as the structural asymmetry that makes some states better or worse for a system.",
};

export default function DeepValuePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep layer · V — Value
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Value: when some futures matter more than others
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          By the time we reach Value in the IO chain, we already have systems
          that are aware of information and respond to it. Value adds a simple
          but decisive twist: for such systems,{" "}
          <span className="font-semibold">
            not all states of the world are equivalent
          </span>
          . Some support their continued existence or organisation better than
          others. That structural asymmetry is what IO calls{" "}
          <span className="font-semibold">value</span>.
        </p>
      </section>

      {/* 1. Value as structural asymmetry */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Value without mysticism</h2>
        <p className="text-slate-300 leading-relaxed">
          In everyday language, “value” often sounds moral or emotional: good,
          bad, right, wrong. IO starts from something more basic. A system has
          value-structure whenever:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>it can exist in multiple possible states, and</li>
          <li>
            some of those states are{" "}
            <span className="font-semibold">
              better for its continued organisation
            </span>{" "}
            than others.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          A simple thermostat has more “preferred” states (comfortable
          temperature band) and less preferred ones (too cold / too hot). A
          bacterium “prefers” nutrient-rich regions of a chemical gradient. A
          human “prefers” not falling off a cliff. None of this needs
          high-level moral judgment to get started.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Value, in the structural sense, is the{" "}
          <span className="italic">gradient</span> that pulls behaviour toward
          some regions of state space and away from others.
        </p>
      </section>

      {/* 2. From awareness to value */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. How value follows from awareness
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Awareness, in IO, is the point where information starts to{" "}
          <span className="font-semibold">
            make a difference to a system&apos;s behaviour
          </span>
          . Once a system is aware in this minimal sense, value is not an
          optional add-on. It emerges as soon as:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            the system&apos;s structure would be destroyed in some conditions,
            and
          </li>
          <li>
            preserved or enhanced in others, and
          </li>
          <li>
            its awareness guides it in ways that track this difference.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          If a system responds to information in ways that systematically{" "}
          <span className="font-semibold">
            protect its own organisation from collapse
          </span>
          , then we can read off a value structure: states compatible with
          continued functioning are, for that system, better than those that
          are not.
        </p>
      </section>

      {/* 3. Biological and human-scale value */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. From survival gradients to ethical landscapes
        </h2>
        <p className="text-slate-300 leading-relaxed">
          In living systems, value gradients become extremely rich:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            Cells regulate internal chemistry to maintain homeostasis: value as
            metabolic stability.
          </li>
          <li>
            Animals seek food, mates, and safety: value as behavioural
            priorities shaped by evolution.
          </li>
          <li>
            Humans organise social norms, laws, and personal commitments: value
            as ethical and cultural structure.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          IO does not reduce ethics to biology, but it insists that all these
          layers ride on the same basic fact:{" "}
          <span className="italic">
            some patterns of relation are better than others at sustaining
            coherent, meaningful difference
          </span>
          . Higher-level notions like justice or dignity are then understood as
          complex value structures, not floating abstractions.
        </p>
      </section>

      {/* Deeper insight box */}
      <section className="space-y-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <details>
          <summary className="cursor-pointer text-sm font-semibold text-sky-300">
            Deeper insight: value without a conscious judge
          </summary>
          <div className="mt-2 space-y-2 text-sm text-slate-300 leading-relaxed">
            <p>
              IO does <span className="italic">not</span> require a conscious
              observer assigning scores for value to be present. Value is first
              a structural feature of systems that can be sustained or
              destroyed.
            </p>
            <p>
              Later, when humans explicitly reason about ethics, we are{" "}
              <span className="italic">
                reflecting on value structures already implied
              </span>{" "}
              by our organisation as living, social, and reflective systems.
            </p>
          </div>
        </details>
      </section>

      {/* Navigation buttons */}
      <section className="flex flex-wrap gap-3 border-t border-slate-800 pt-6">
        <Link href="/deep/value/formal">
          <Button variant="outline" className="border-slate-700">
            Technical notes on Value
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
