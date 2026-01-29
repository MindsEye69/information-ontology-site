// app/deep/relation/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata: Metadata = {
  title: "Relation (R) – Deep dive | Informational Ontology",
  description:
    "A deeper treatment of Relation (R) as the structured web that arises from differences.",
};

export default function DeepRelationPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <ExplanatoryBanner className=\"mb-8\" />
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep section · R — Relation
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Relation (R): webs of &quot;in-between&quot;
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          If Δ secures the idea that there are differences at all, R is about
          what happens when those differences cannot help but stand in patterns.
          Relations are the &quot;in-betweens&quot; that turn scattered
          differences into structure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. From pairs to patterns</h2>
        <p className="text-slate-300 leading-relaxed">
          With a single difference, there is not much more to say. With two or
          more, questions arise immediately:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Is this difference larger or smaller than that one?</li>
          <li>Does one difference depend on another?</li>
          <li>Are they compatible, or do they interfere?</li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          These questions presuppose ways of comparing, ordering, and
          connecting. Those ways of &quot;standing with respect to&quot; are
          relations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Relations are not optional extras</h2>
        <p className="text-slate-300 leading-relaxed">
          IO treats relations as primitive in a structural sense. We do not
          start from self-contained objects and then imagine relational ties
          being added later as &quot;links&quot; between them. Instead:
        </p>
        <p className="text-slate-300 leading-relaxed">
          <span className="font-semibold">
            As soon as you have multiple differences, you already have a web of
            possible relations.
          </span>
        </p>
        <p className="text-slate-300 leading-relaxed">
          Whether we describe that web in terms of distances, causal
          connections, similarity measures, or something else is a modelling
          choice. The underlying idea is that the world is patterned, not a
          loose heap of unrelated bits.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Examples of relational structure</h2>
        <p className="text-slate-300 leading-relaxed">
          Everyday cases make this easy to see:
        </p>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>
            In geometry, points stand in relations of distance, angle,
            adjacency, and containment.
          </li>
          <li>
            In time, events stand in relations of before/after, simultaneity,
            and possible influence.
          </li>
          <li>
            In social systems, agents stand in relations like friend, stranger,
            ally, or rival.
          </li>
        </ul>
        <p className="text-slate-300 leading-relaxed">
          Physics, biology, psychology, and sociology can all be seen as
          different ways of charting relational structure at different scales
          and with different emphases.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          4. Why R leads naturally toward information
        </h2>
        <p className="text-slate-300 leading-relaxed">
          Once some relations become stable and repeatable, they can be used to
          draw inferences: if A stands in relation R to B, then C is more likely
          than D. At that point, relational structure starts to carry
          information.
        </p>
        <p className="text-slate-300 leading-relaxed">
          That is why the IO chain moves from Δ → R → I. We do not add
          &quot;information&quot; as an independent ingredient; it emerges from
          how relations constrain what is possible.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <h2 className="text-lg font-semibold">Next layers</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          This page develops Relation (R) in a non-technical way. For more
          technical material—graphs, relational models, and mappings to
          mathematical frameworks—see the formal layer.
        </p>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <Link href="/deep/relation/formal" className="sm:w-1/2 w-full">
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