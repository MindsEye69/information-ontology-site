"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTheme } from "@/lib/theme-context";

const MAP_SRC = "/IO_Corpus_Map_v19.html";

export default function CorpusMapPage() {
  const { theme } = useTheme();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = MAP_SRC;
    }
  }, [theme]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55 dark:text-[#5a6a82]">Corpus navigation</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl text-black dark:text-[#b8c6de]">
          Interactive Corpus Map
        </h1>
        <p className="mt-6 text-black/75 dark:text-[#b8c6de] leading-relaxed">
          Explore the full IO corpus in two views. <strong>Reading Order</strong> traces
          each cluster as a branching chain — follow any thread from the master outward
          through its dependency sequence. <strong>Corpus Architecture</strong> shows the
          radial bloom of all papers and their cross-cluster connections. Choose your theme via the site header toggle.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={MAP_SRC}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 dark:border-slate-700 bg-white dark:bg-[#0d0f18] px-5 py-3 text-sm font-medium text-black/80 dark:text-[#b8c6de] no-underline hover:bg-black/5 dark:hover:bg-[#111828]"
        >
          Open in new tab ↗
        </a>
        <Link
          href="/ai-alignment"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 dark:border-slate-700 bg-black dark:bg-[#111828] px-5 py-3 text-sm font-medium text-white no-underline hover:bg-black/90 dark:hover:bg-slate-700"
        >
          AI Alignment path
        </Link>
        <Link
          href="/papers"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 dark:border-slate-700 bg-white dark:bg-[#0d0f18] px-5 py-3 text-sm font-medium text-black/80 dark:text-[#b8c6de] no-underline hover:bg-black/5 dark:hover:bg-[#111828]"
        >
          Back to papers
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-black/10 dark:border-[#1a1e2a] bg-white dark:bg-[#0d0f18] shadow-sm">
        <iframe
          ref={iframeRef}
          src={MAP_SRC}
          title="Interactive Corpus Map"
          className="h-[82vh] min-h-[720px] w-full"
        />
      </div>
    </main>
  );
}
