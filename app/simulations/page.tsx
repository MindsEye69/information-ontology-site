import Link from "next/link";
import ChainNav from "./ChainNav";

export default function SimulationsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-[#b8c6de]">
        Simulations &amp; Visual Aids
      </h1>
      <p className="max-w-2xl text-black/70 dark:text-[#b8c6de]">
        These are small visual tools meant to illustrate specific steps in the IO
        chain. They are not full models of reality — only aids for intuition.
      </p>

      <div className="rounded-2xl border border-black/10 dark:border-[#1a1e2a] bg-white/60 dark:bg-[#111828]/70 p-4 text-sm text-black/65 dark:text-[#b8c6de]">
        <span className="font-semibold text-black/80 dark:text-[#e4e8f0]">Note:</span> These are
        visual aids and interactive toys. They illustrate IO concepts but are not
        presented as scientific proofs or full models of reality.
      </div>

      <ChainNav />

      <div className="rounded-2xl border border-black/10 dark:border-[#1a1e2a] bg-white/60 dark:bg-[#111828]/70 p-5 space-y-2">
        <h2 className="font-semibold text-black dark:text-[#b8c6de]">Δ → R: Difference and Relation</h2>
        <p className="text-sm text-black/65 dark:text-[#b8c6de]">
          Two types of particles follow simple rules of attraction and repulsion.
          From positional differences, clusters, boundaries, and mixed zones emerge.
        </p>
        <Link href="/simulations/delta-relation" className="text-sm text-black/70 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] underline underline-offset-4">
          Open the Δ → R toy →
        </Link>
      </div>

      <div className="rounded-2xl border border-black/10 dark:border-[#1a1e2a] bg-white/60 dark:bg-[#111828]/70 p-5 space-y-3">
        <h2 className="font-semibold text-black dark:text-[#b8c6de]">Archived simulations (pre-Rev5 snapshot)</h2>
        <p className="text-sm text-black/65 dark:text-[#b8c6de]">
          The older site included a set of lightweight HTML simulations for each regime stage.
          They are still available as a historical snapshot. Use them as intuition aids; they are
          not presented as proofs, and the UI/wording may not match the current Rev5+ corpus.
        </p>

        <div className="grid gap-2 sm:grid-cols-2 text-sm">
          <a className="text-black/65 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] underline underline-offset-4" href="/archive/simulations/delta.html" target="_blank" rel="noreferrer">Open archived Δ →</a>
          <a className="text-black/65 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] underline underline-offset-4" href="/archive/simulations/relation.html" target="_blank" rel="noreferrer">Open archived R →</a>
          <a className="text-black/65 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] underline underline-offset-4" href="/archive/simulations/information.html" target="_blank" rel="noreferrer">Open archived I →</a>
          <a className="text-black/65 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] underline underline-offset-4" href="/archive/simulations/awareness.html" target="_blank" rel="noreferrer">Open archived A →</a>
          <a className="text-black/65 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] underline underline-offset-4" href="/archive/simulations/value.html" target="_blank" rel="noreferrer">Open archived V →</a>
          <a className="text-black/65 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] underline underline-offset-4" href="/archive/simulations/meaning.html" target="_blank" rel="noreferrer">Open archived M →</a>
          <a className="text-black/65 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] underline underline-offset-4" href="/archive/simulations/purpose.html" target="_blank" rel="noreferrer">Open archived P →</a>
          <a className="text-black/65 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] underline underline-offset-4" href="/archive/simulations/delta-relation.html" target="_blank" rel="noreferrer">Open archived Δ → R →</a>
        </div>

        <p className="text-xs text-black/40 dark:text-[#5a6a82]">
          The full archived site is also available at /archive.
        </p>
      </div>

      <div className="text-xs text-black/40 dark:text-[#5a6a82]">
        Tip: the chain above links to per-stage simulation pages (Δ, R, I, A, V, M, P).
      </div>
    </div>
  );
}
