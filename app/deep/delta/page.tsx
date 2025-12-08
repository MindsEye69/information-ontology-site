// app/deep/delta/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Difference (Δ) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Difference (Δ) as the minimal ontological starting point in Informational Ontology.",
};

export default function DeepDifferencePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
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
          mind, spacetime) or a certain set of laws. IO takes a different route.
          It asks: what is the least we can assume while still being able to
          talk at all about a world, an experience, or a measurement?
        </p>
        <p className="text-slate-300 leading-relaxed">
          The answer offered here is not a particular substance, but a
          structural feature:
          <span className="font-semibold">
            {" "}
            there must be some way in which one possible state is not exactly
            the same as another.
          </span>{" "}
          Call that feature difference.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Why difference is hard to get rid of</h2>
        <p className="text-slate-300 leading-relaxed">
          Suppose someone says: &quot;There are no differences at all.&quot;
        </p>
        <p className="text-slate-300 leading-relaxed">
          To even understand that claim, you have to contrast it with the
          alternative that there <span className="italic">are</span>{" "}
          differences. You&apos;re already relying on a contrast between
          possibilities: a world with differences vs. a world without them.
        </p>
        <p className="text-slate-300 leading-relaxed">
          Similarly, the act of making the claim happens at a particular time,
          in a particular configuration of your brain or environment, which is
          different from other possible configurations. The content and the act
          of denial both rely on difference.
        </p>
        <p className="text-slate-300 leading-relaxed">
          That is why IO treats difference as something you cannot coherently
          subtract. It is not an empirical hypothesis but a structural
          background condition.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Difference without extra baggage</h2>
        <p className="text-slate-300 leading-relaxed">
          At this stage, we deliberately avoid adding details that are not yet
          forced on us. In particular, we do not assume:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>what the &quot;things&quot; that differ are made of,</li>
          <li>whether they are physical, mental, mathematical, or something else,</li>
          <li>whether time and space already exist as a backdrop,</li>
          <li>or whether there is any observer present.</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          We only assume that there is <span className="italic">some</span> way
          for &quot;this&quot; to not be exactly &quot;that&quot;. Everything
          else in IO is built on top of that minimal asymmetry.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. From bare difference to structure</h2>
        <p className="text-slate-300 leading-relaxed">
          Once you have even a single bare difference, you immediately have the
          possibility of more than one such difference, and of comparisons
          between them. This is where the next step in the chain, relation (R),
          starts to become unavoidable.
        </p>
        <p className="text-slate-300 leading-relaxed">
          The deeper claim of IO is that you do not need to posit fully formed
          objects and laws at the base level. You can instead let them emerge as
          patterns in how differences hang together. But that is the work of
          later sections. Here, we only secure the ground: difference is the
          minimal &quot;something&quot; we start from.
        </p>
      </section>

      <section className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Further layers</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          This page is the &quot;deep&quot; non-technical layer for Δ —
          Difference. For readers who want the fully formal version—explicit
          definitions, dependency graphs, and more symbolic structure—there is a
          dedicated technical page.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="/deep/delta/formal"
            className="inline-flex items-center text-sky-400 hover:text-sky-300"
          >
            Dive even deeper (technical) →
          </Link>
          <Link
            href="/ontology"
            className="inline-flex items-center text-slate-300 hover:text-white"
          >
            Back to Ontological chain
          </Link>
        </div>
      </section>
    </main>
  );
}
