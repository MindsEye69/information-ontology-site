// app/deep/purpose/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Purpose (P) — Formal layer | Informational Ontology",
  description: "Purpose as value-guided meaningful trajectory (M → P) (Rev 5).",
};

export default function FormalPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Formal layer · P — Purpose
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Purpose (P)
        </h1>
        <p className="max-w-3xl text-sm text-slate-400 leading-relaxed">
          This page is a structured extract of the Rev 5 master text (Section 8.1).
          It is intended as a precise anchor for the “Deep Dive” section, not as an expansion of the ontology.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-base text-slate-300 leading-relaxed">P) Meaning alone does not yet constitute purpose. Meaning organizes valued distinctions into coherent interpretive structures, but purpose arises when those structures are oriented toward the regulation of future states. Purpose is the directional constraint of meaning over time. A system exhibits purpose when its meaningful states bias action, selection, or persistence toward some subset of possible futures rather than others. Purpose therefore introduces trajectory.</p>
        <p className="text-base text-slate-300 leading-relaxed">It is not merely that certain states are meaningful, but that meaning functions to guide the system’s ongoing evolution. Purpose does not require conscious deliberation, explicit goals, or linguistic formulation. It is not synonymous with intention in the psychological sense. At the ontological level, purpose exists wherever meaningful structures systematically constrain transitions toward preferred outcomes. Purpose is likewise not externally imposed.</p>
        <p className="text-base text-slate-300 leading-relaxed">While external forces may shape a system’s behavior, purpose arises only when the system’s internal meanings and values participate in regulating its own future states. A rock follows trajectories, but it does not have purpose; an aware, valuing, meaning-bearing system can. Purpose therefore marks the point at which systems become agents in the minimal ontological sense. Agency here does not imply free will, moral responsibility, or self-reflection.</p>
        <p className="text-base text-slate-300 leading-relaxed">It denotes only that the system’s future is, in part, determined by its internally structured meanings and values. The transition from meaning to purpose is denoted as M → P. With purpose, the ontological chain is complete: existence has progressed from mere distinction to directed, self-influencing trajectories within the space of possible states. For boundary cases concerning purpose, agency, teleology, free will, responsibility, and artificial systems, see Appendix D. Part IX — Time, Ordering, and Constraint</p>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Navigation</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/deep/meaning/formal">
            <Button variant="outline">← Previous</Button>
          </Link>
          <Link href="/deep">
            <Button variant="outline">Deep Dive index</Button>
          </Link>
          <Link href="/deep/time-constraint-direction">
            <Button>Next →</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
