// app/deep/delta/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Difference (Δ) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Difference (Δ) as the minimal ontological starting point in Informational Ontology.",
};

export default function DeepDifferencePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <ExplanatoryBanner className="mb-8" />
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep section · Δ — Difference
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Difference (Δ): starting as small as possible
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This section develops the first step of the IO chain in a more
          deliberate way. We want a starting point that is both minimal and
          unavoidable: something you cannot deny without using it. Difference is
          proposed as that starting point.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. The role of a starting point</h2>
        <p className="text-slate-300 leading-relaxed">
          Many ontologies begin by assuming a certain kind of stuff (matter,
          mind, spacetime) or a certain set of laws. IO takes a different route:
          it asks what must be in place for there to be a world that can even be
          talked or thought about.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The candidate is structural rather than material: there must be{" "}
          <span className="font-semibold">
            some way for one possible state not to be exactly the same as
            another.
          </span>{" "}
          Call that &quot;difference&quot; in the most general sense.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Why difference is hard to deny</h2>
        <p className="text-slate-300 leading-relaxed">
          Suppose someone claims: &quot;There are no differences anywhere.&quot;
        </p>
        <p className="text-slate-300 leading-relaxed">
          To understand that claim, you already contrast it with the alternative
          that there are differences. You rely on a difference between:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>&quot;a world with differences&quot;</li>
          <li>and &quot;a world with none&quot;.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          The act of making the claim also happens at a particular time, in a
          particular configuration of a brain or system, which is different from
          other possible configurations. The content and the act of denial both
          presuppose difference.
        </p>
        <p className="text-slate-300 leading-relaxed">
          IO takes this self-undermining structure seriously: difference is not
          a conclusion reached from neutral ground, it is part of the ground
          itself.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Keeping difference thin</h2>
        <p className="text-slate-300 leading-relaxed">
          At this stage we resist the urge to thicken the notion of difference
          with extra assumptions. In particular, we do not yet specify:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>what kinds of &quot;things&quot; are differing,</li>
          <li>whether the background is spatial, temporal, or something else,</li>
          <li>whether matter, mind, or mathematics are fundamental,</li>
          <li>or whether any observer is present.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          Difference here is simply the abstract possibility that &quot;this&quot;
          is distinguishable from &quot;that&quot; in some way. It is a
          constraint on how reality must be structured to allow anything like
          experience, measurement, or thought.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          4. From isolated differences to networks
        </h2>
        <p className="text-slate-300 leading-relaxed">
          One bare difference is already enough to block total uniformity. But
          as soon as you admit more than one difference, you can compare them:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Are they larger or smaller?</li>
          <li>Closer or further apart?</li>
          <li>Compatible or incompatible?</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          Those comparisons are the first hint of what IO calls relation (R).
          You cannot have indefinitely many free-floating differences that never
          stand in any systematic &quot;in-between&quot;—they fall naturally
          into patterns. Capturing that is the work of the next step in the
          chain.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Next layers</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          This page is the deeper, non-technical treatment of Difference (Δ).
          For a more technical take—explicit definitions, dependency graphs, and
          possible mathematical formalisms—use the technical layer.
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep/delta/formal" className="sm:w-1/2 w-full">
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