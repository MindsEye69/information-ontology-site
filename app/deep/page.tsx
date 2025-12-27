// app/deep/page.tsx

import Link from "next/link";

export const metadata = {
  title: "Deep Dive — Informational Ontology",
  description:
    "Technical deep-dive into the Δ→R→I→A→V→M→P chain for advanced readers.",
};

export default function DeepDiveIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
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
          </li>

          <li className="rounded-lg border border-slate-800 p-4 hover:bg-slate-900/60">
            <h3 className="text-base font-semibold">
              <Link href="/deep/delta/formal" className="hover:underline">
                Difference (Δ) — Formal Axiomatization
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              PhD-level, formal treatment of Δ as the unique, non-derivable
              ontological primitive, with propositions and proof sketches.
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

          {/* Coming soon: placeholders for the rest of the chain */}
          <li className="rounded-lg border border-slate-800/60 p-4 opacity-70">
            <h3 className="text-base font-semibold text-slate-200">
              Relation (R) — Deep Dive <span className="text-slate-400">(coming soon)</span>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              How differences connect, depend, and form the first stable structure.
            </p>
          </li>

          <li className="rounded-lg border border-slate-800/60 p-4 opacity-70">
            <h3 className="text-base font-semibold text-slate-200">
              Information (I) — Deep Dive <span className="text-slate-400">(coming soon)</span>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              When relational structure becomes pattern, constraint, and “difference that matters.”
            </p>
          </li>

          <li className="rounded-lg border border-slate-800/60 p-4 opacity-70">
            <h3 className="text-base font-semibold text-slate-200">
              Awareness (A) — Deep Dive <span className="text-slate-400">(coming soon)</span>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              When information becomes integrated enough to regulate the system that carries it.
            </p>
          </li>

          <li className="rounded-lg border border-slate-800/60 p-4 opacity-70">
            <h3 className="text-base font-semibold text-slate-200">
              Value (V) — Deep Dive <span className="text-slate-400">(coming soon)</span>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              Why “better/worse” appears naturally once awareness exists.
            </p>
          </li>

          <li className="rounded-lg border border-slate-800/60 p-4 opacity-70">
            <h3 className="text-base font-semibold text-slate-200">
              Meaning (M) — Deep Dive <span className="text-slate-400">(coming soon)</span>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              How value organizes information into interpretations, stories, and expectations.
            </p>
          </li>

          <li className="rounded-lg border border-slate-800/60 p-4 opacity-70">
            <h3 className="text-base font-semibold text-slate-200">
              Purpose (P) — Deep Dive <span className="text-slate-400">(coming soon)</span>
            </h3>
            <p className="mt-1 text-sm text-slate-300">
              How meaning extended through time becomes directed action.
            </p>
          </li>

          {/* You can keep adding entries for other stages as they’re ready */}
        </ul>
      </section>
    </main>
  );
}
