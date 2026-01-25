// app/deep/awareness/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Awareness (A) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Awareness (A) as information used by a system to guide itself.",
};

export default function DeepAwarenessPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep section · A — Awareness
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Awareness (A): when information is taken up by a system
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Awareness, in IO, is not yet full-blown human consciousness. It is the
          minimal condition under which information is systematically used by a
          system to shape its own ongoing behaviour or organisation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. From passive structure to active use</h2>
        <p className="text-slate-300 leading-relaxed">
          Up to the I stage, information can be entirely passive: patterns in
          the world that constrain possibilities whether or not anything does
          anything with them. Awareness appears when:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            there is a system with some internal organisation, and
          </li>
          <li>
            that organisation is updated or modulated in a regular way by
            information.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          The thermostat is a toy example, but it makes the point: information
          about temperature is not idle; it directly affects the system&apos;s
          state and output.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Degrees and layers of awareness</h2>
        <p className="text-slate-300 leading-relaxed">
          Awareness in this sense admits of degrees:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            A simple feedback controller tracks a single variable and responds
            with a fixed rule.
          </li>
          <li>
            A cell responds to chemical gradients in many dimensions, altering
            complex metabolic networks.
          </li>
          <li>
            A brain integrates huge volumes of multi-modal information into
            unified behaviour.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          IO does not assume that all these cases involve experience in the
          same sense. The common thread is: information is being used to shape
          the system in ways that depend on its internal organisation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          3. Awareness and self-maintaining systems
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Awareness becomes especially interesting when the system has something
          like a &quot;stake&quot; in the outcome: it can persist or fall apart.
          A rock may register impacts in its structure, but it does not organise
          around maintaining itself. A living cell does.
        </p>
        <p className="text-slate-300 leading-relaxed">
          IO links richer forms of awareness to systems that use information to
          maintain, protect, or extend their own organisation. This sets the
          stage for value: some informationally guided states will be better
          or worse for that ongoing project.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Next layers</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          This page gives a non-technical account of Awareness (A). A more
          formal discussion of system dynamics, feedback, and state spaces will
          live in the technical layer.
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep/awareness/formal" className="sm:w-1/2 w-full">
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
