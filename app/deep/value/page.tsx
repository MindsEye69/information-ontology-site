// app/deep/value/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Value (V) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Value (V) as evaluative gradients over informational states in self-maintaining systems.",
};

export default function ValueDeepDivePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-12">
      <ExplanatoryBanner className="mb-8" />
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-green-400">
          Deep section · V — Value
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Value (V): better and worse for a system
        </h1>
        <p className="max-w-3xl text-sm text-slate-300 leading-relaxed">
          Once a system is aware of differences that matter for its own
          continuation, those differences do not remain neutral. Some states
          support its integrity; others undermine it. Value, in IO, is the
          name for this structural tilt: the “better/worse” gradient written
          into how a system interacts with its own possibilities.
        </p>
      </section>

      {/* Main explanation */}
      <section className="space-y-4">
        <p className="text-sm text-slate-300 leading-relaxed">
          IO treats value as neither a purely subjective feeling nor a mysterious
          external property. Instead, value is what you get when you combine:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300 leading-relaxed">
          <li>an informationally structured state space (I),</li>
          <li>
            a system that is aware of its own and its environment&apos;s states
            (A),
          </li>
          <li>
            and the simple fact that some states allow that system to persist,
            learn, and act, while others do not.
          </li>
        </ul>
        <p className="text-sm text-slate-300 leading-relaxed">
          From this perspective, value is not added “on top” of the world.
          Rather, it is the way an informationally self-maintaining system
          sorts and ranks the differences it is already aware of. The system
          does not treat all Δ-equivalent possibilities the same; it develops
          a preference structure over them.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          In simple organisms, this may look like moving toward nutrient-rich
          regions and away from damaging conditions. In more complex systems,
          it becomes richer: preferences about long-term stability, learning,
          social bonds, aesthetic experience, and so on. IO&apos;s claim is that
          all of these are variations on the same underlying pattern: a
          gradient over informational states that encodes &quot;more or less
          compatible with continued, coherent existence of this system (or
          system-of-systems).&quot;
        </p>
      </section>

      {/* Conceptual bridge to the technical side */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-100">
          From preferences to gradients
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          In everyday language, we talk about &quot;liking&quot; or
          &quot;wanting&quot; some outcomes more than others. In IO, this gets
          reframed as a structure over the state space: a way of assigning
          higher or lower &quot;goodness&quot; to different configurations of
          the system and its environment.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Once you have that structure, many ideas from control theory and
          decision theory become applicable: value landscapes, attractors,
          gradients, and policies that tend to move the system uphill in that
          landscape. But IO keeps the focus on what grounds these numbers:
          the informational architecture of a self-maintaining system, not a
          free-floating &quot;utility&quot; imposed from outside.
        </p>
      </section>

      {/* Next layers card (matches other pages) */}
      <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-6">
        <h2 className="text-lg font-semibold text-slate-100">Next layers</h2>
        <p className="mt-1 text-sm text-slate-400 leading-relaxed">
          This page is the deeper, non-technical treatment of Value (V). For a
          more technical take—explicit value functionals, evaluative gradients,
          and their connection to awareness and system stability—use the
          technical layer.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep/value/formal">
            <Button className="w-full sm:w-auto">
              Dive even deeper (technical) →
            </Button>
          </Link>

          <Link href="/ontology">
            <Button
              variant="outline"
              className="w-full border-slate-700 sm:w-auto"
            >
              Back to Ontological chain
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}