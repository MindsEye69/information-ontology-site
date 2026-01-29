// app/deep/page.tsx

import Link from "next/link";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

export const metadata = {
  title: "Deep Dive — Informational Ontology",
  description:
    "Technical deep-dive into the Δ→R→I→A→V→M→P chain for advanced readers.",
};

export default function DeepDiveIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <ExplanatoryBanner className=\"mb-8\" />
      <header className="mb-8 border-b border-slate-800 pb-6">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Deep Dive
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Informational Ontology — Technical Exposition
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-300">
          This section presents the Informational Ontology (IO) at a technical,
          graduate-level depth. It assumes familiarity with logic, set theory,
          and the philosophy of information. Each module refines one stage of
          the canonical IO chain:{" "}
          <span className="font-mono">Δ → R → I → A → V → M → P</span>.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Available Deep Dive Modules</h2>
        <p className="text-sm text-slate-300">
          Start with Difference (Δ) and proceed through the chain. Technical
          subpages (labeled &quot;formal&quot;) provide proofs and
          definitions.
        </p>

        <ul className="mt-4 space-y-3">
          <li className="rounded-lg border border-slate-800 p-4 hover:bg-slate-900/60">
            <h3 className="text-base font-semibold">
              <Link href="/deep/delta" className="hover:underline">
                Difference (Δ) — Deep Dive
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Narrative, examples, and structured exposition of Difference as
              the minimal ontological starting point. Links onward to the
              formal axiomatization.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Formal layer: {" "}
              <Link href="/deep/delta/formal" className="text-sky-300 hover:underline">
                Δ — Formal Axiomatization
              </Link>{" "}
            </p>
          </li>

          <li className="rounded-lg border border-slate-800 p-4 hover:bg-slate-900/60">
            <h3 className="text-base font-semibold">
              <Link href="/deep/relation" className="hover:underline">
                Relation (R) — Deep Dive
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              How differences connect, depend, and form the first stable structure.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Formal layer: {" "}
              <Link href="/deep/relation/formal" className="text-sky-300 hover:underline">
                R — Technical notes
              </Link>{" "}
            </p>
          </li>

          <li className="rounded-lg border border-slate-800 p-4 hover:bg-slate-900/60">
            <h3 className="text-base font-semibold">
              <Link href="/deep/information" className="hover:underline">
                Information (I) — Deep Dive
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              When relational structure becomes pattern, constraint, and “difference that matters.”
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Formal layer: {" "}
              <Link href="/deep/information/formal" className="text-sky-300 hover:underline">
                I — Technical notes
              </Link>{" "}
            </p>
          </li>

          <li className="rounded-lg border border-slate-800 p-4 hover:bg-slate-900/60">
            <h3 className="text-base font-semibold">
              <Link href="/deep/awareness" className="hover:underline">
                Awareness (A) — Deep Dive
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              When information becomes integrated enough to regulate the system that carries it.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Formal layer: {" "}
              <Link href="/deep/awareness/formal" className="text-sky-300 hover:underline">
                A — Technical notes
              </Link>{" "}
            </p>
          </li>

          <li className="rounded-lg border border-slate-800 p-4 hover:bg-slate-900/60">
            <h3 className="text-base font-semibold">
              <Link href="/deep/value" className="hover:underline">
                Value (V) — Deep Dive
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Why “better/worse” appears naturally once awareness exists.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Formal layer: {" "}
              <Link href="/deep/value/formal" className="text-sky-300 hover:underline">
                V — Technical notes
              </Link>{" "}
            </p>
          </li>

          <li className="rounded-lg border border-slate-800 p-4 hover:bg-slate-900/60">
            <h3 className="text-base font-semibold">
              <Link href="/deep/meaning" className="hover:underline">
                Meaning (M) — Deep Dive
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              How value organizes information into interpretations, stories, and expectations.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Formal layer: {" "}
              <Link href="/deep/meaning/formal" className="text-sky-300 hover:underline">
                M — Technical notes
              </Link>{" "}
            </p>
          </li>

          <li className="rounded-lg border border-slate-800 p-4 hover:bg-slate-900/60">
            <h3 className="text-base font-semibold">
              <Link href="/deep/purpose" className="hover:underline">
                Purpose (P) — Deep Dive
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              How meaning extended through time becomes directed action.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Formal layer: {" "}
              <Link href="/deep/purpose/formal" className="text-sky-300 hover:underline">
                P — Technical notes
              </Link>{" "}
            </p>
          </li>

          <li className="rounded-lg border border-slate-800 p-4 hover:bg-slate-900/60">
            <h3 className="text-base font-semibold">
              <Link
                href="/deep/time-constraint-direction"
                className="hover:underline"
              >
                Time, Constraint, and Direction — Deep Dive
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              A lay-friendly deep dive explaining why time has a direction as a
              consequence of constraint asymmetry and expanding possibility
              space.
            </p>
          </li>
        </ul>
      </section>
    </main>
  );
}