import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Informational Ontology</p>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
          A structural ontology of information.
        </h1>
        <p className="mt-5 text-lg text-black/70 leading-relaxed">
          The Master text is the canonical source. The derivative papers demonstrate explanatory reach downstream of the
          core regime chain. Ariadne is a constrained interface for navigating and stress-testing the corpus.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/start-here" className="no-underline inline-flex items-center rounded-2xl px-4 py-2 bg-ink text-paper">
            Start Here
          </Link>
          <Link href="/master" className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15">
            Read the Master
          </Link>
          <Link href="/papers" className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15">
            Browse Papers
          </Link>
          <Link href="/ariadne" className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15">
            Ariadne (Offline)
          </Link>
        </div>
      </div>
    </div>
  );
}
