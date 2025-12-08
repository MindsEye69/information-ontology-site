// app/deep/practice/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Practice (P) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Practice (P) as meaning embodied in action and feedback.",
};

export default function DeepPracticePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep section · P — Practice
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Practice (P): when meaning acts in the world
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Practice is the stage at which meaning stops being purely &quot;in
          the head&quot; or &quot;in the model&quot; and shows up in what
          systems actually do—their actions, habits, constructions, and
          experiments.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Enacted understanding</h2>
        <p className="text-slate-300 leading-relaxed">
          A recipe understood but never cooked, or a map memorised but never
          used, is incomplete as practice. In IO, practice is where:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>information, awareness, valuation, and meaning</li>
          <li>are expressed in behaviour and material change.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          For humans, this includes everything from bodily skills to scientific
          experiments and ethical decisions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. Feedback: practice reshapes the earlier stages
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Practice is not just the endpoint of the chain. Actions succeed or
          fail, and those outcomes feed back into awareness, valuation, and
          meaning:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            New experiences change which differences a system notices (Δ, R).
          </li>
          <li>
            Repeated outcomes change what information is considered relevant (I).
          </li>
          <li>
            Success and failure reshape valuations and meanings (V, M).
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          In this way, practice closes the loop. IO is not just a static
          hierarchy; it describes a cycle in which acting in the world and
          understanding the world continually modify each other.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Next layers</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          This page treats Practice (P) at a conceptual level. A technical
          version might discuss policy spaces, action-selection mechanisms, and
          experimental design as structured practice.
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep/practice/formal" className="sm:w-1/2 w-full">
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
