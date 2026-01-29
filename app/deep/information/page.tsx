// app/deep/information/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Information (I) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Information (I) as constrained possibility in relational structure.",
};

export default function DeepInformationPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <ExplanatoryBanner className=\"mb-8\" />
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep section · I — Information
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Information (I): patterns that constrain what can happen
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Given a web of relations, information arises when some patterns become
          stable enough to rule in or rule out possibilities. IO uses a
          structural sense of information that does not depend on any particular
          observer or language.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          1. Information as constrained possibility
        </h2>
        <p className="text-slate-300 leading-relaxed">
          A system contains information when its current configuration makes
          some other configurations more or less likely. The classic intuition:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            A detector that reliably flips when a particle passes through
            contains information about that event.
          </li>
          <li>
            A pattern of footprints in snow contains information about the path
            and kind of walker.
          </li>
          <li>
            The state of a memory cell rules out some bits and permits others.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          In each case, we can say: given this state, these possibilities are
          excluded, these others remain open. That exclusion is what IO treats
          as informational.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          2. Structural, not purely subjective
        </h2>
        <p className="text-slate-300 leading-relaxed">
          It is tempting to define information purely in terms of what an
          observer knows. IO resists that temptation. The footprints still
          constrain what happened even if no-one ever sees them; the flipped
          detector still narrows the space of possibilities.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Later, when awareness and meaning enter the picture, information will
          also have &quot;for-someone&quot; aspects. But at the I stage, the
          focus is on structure: which patterns make a difference to what can
          happen next, regardless of who is looking.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Quantitative vs. qualitative</h2>
        <p className="text-slate-300 leading-relaxed">
          In information theory, information is often quantified: bits,
          entropies, mutual information. IO is compatible with that, but not
          limited to it. The key idea is more qualitative:
        </p>
        <p className="text-slate-300 leading-relaxed">
          <span className="font-semibold">
            information is pattern that matters for the structure and dynamics
            of a system.
          </span>
        </p>
        <p className="text-slate-300 leading-relaxed">
          You can count how many bits are needed to encode a message, but IO
          also cares about what the pattern is <em>about</em> for systems that
          act on it. That is where the later stages (A, V, M, P) come in.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. From information to awareness</h2>
        <p className="text-slate-300 leading-relaxed">
          Up to this point, information could exist in a world with no
          self-organising or self-maintaining systems. The next step in the
          chain, awareness, begins when information is systematically taken up
          by a system in ways that affect how it continues.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The move from I to A is not about adding magic consciousness dust. It
          is about a change in how information is <em>used</em>.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Next layers</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          This page develops Information (I) at an intuitive level. For a more
          technical angle—Shannon measures, state spaces, constraint structures—
          use the formal layer.
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep/information/formal" className="sm:w-1/2 w-full">
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