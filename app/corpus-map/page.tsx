"use client";

import Link from "next/link";

const MAP_SRC = "/IO_Corpus_Map_v19.html";

export default function CorpusMapPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Corpus navigation</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Interactive Corpus Map
        </h1>
        <p className="mt-6 text-black/75 leading-relaxed">
          Explore the full IO corpus in two views. <strong>Reading Order</strong> traces
          each cluster as a branching chain — follow any thread from the master outward
          through its dependency sequence. <strong>Corpus Architecture</strong> shows the
          radial bloom of all papers and their cross-cluster connections. Light and dark
          mode are available via the toggle inside the map.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={MAP_SRC}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/80 no-underline hover:bg-black/5"
        >
          Open in new tab ↗
        </a>
        <Link
          href="/ai-alignment"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-black px-5 py-3 text-sm font-medium text-white no-underline hover:bg-black/90"
        >
          AI Alignment path
        </Link>
        <Link
          href="/papers"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/80 no-underline hover:bg-black/5"
        >
          Back to papers
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <iframe
          src={MAP_SRC}
          title="Interactive Corpus Map"
          className="h-[82vh] min-h-[720px] w-full"
        />
      </div>
    </main>
  );
}
