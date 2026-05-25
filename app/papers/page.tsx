"use client";

import Link from "next/link";
import { useState } from "react";
import papersData from "@/content/papers.json";

type PaperStatus = "released" | "in_production" | "retired";
type PaperItem = {
  id: string;
  paper_no?: number;
  title: string;
  slug: string;
  status: PaperStatus;
  state?: string;
  doi?: string | null;
  zenodo?: string | null;
  pdf?: string | null;
  summary?: string;
  function?: string;
  details?: string;
  [key: string]: unknown;
};
type PaperGroup = { id: string; title: string; items: PaperItem[] };

function hasPdf(item: PaperItem): item is PaperItem & { pdf: string } {
  return typeof item.pdf === "string" && item.pdf.trim().length > 0;
}
function hasZenodo(item: PaperItem): item is PaperItem & { zenodo: string } {
  return typeof item.zenodo === "string" && item.zenodo.trim().length > 0;
}

function StatusPill({ status, state }: { status: PaperItem["status"]; state?: string }) {
  const label =
    status === "released" ? "Released" :
    status === "retired" || state === "retired" ? "Retired" :
    state === "complete_unpublished" ? "In production (complete)" : "In production";
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 dark:border-[#1a1e2a] bg-white/70 dark:bg-[#111828]/70 px-3 py-1 text-xs text-black/70 dark:text-[#5a6a82]">
      {label}
    </span>
  );
}

function PaperActions({ item }: { item: PaperItem }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {hasZenodo(item) ? (
        <a href={item.zenodo} className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 dark:border-[#1a1e2a] text-sm text-black dark:text-[#b8c6de] hover:bg-black/5 dark:hover:bg-[#111828]" target="_blank" rel="noreferrer">Zenodo</a>
      ) : null}
      {hasPdf(item) ? (
        <a href={`/api/download/${item.slug}?mode=view`} className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 dark:border-[#1a1e2a] text-sm text-black dark:text-[#b8c6de] hover:bg-black/5 dark:hover:bg-[#111828]" target="_blank" rel="noreferrer">View</a>
      ) : null}
      {hasPdf(item) ? (
        <a href={`/api/download/${item.slug}`} className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 dark:border-[#1a1e2a] text-sm text-black dark:text-[#b8c6de] hover:bg-black/5 dark:hover:bg-[#111828]" download>Download</a>
      ) : null}
      <Link href={`/papers/${item.slug}`} className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 dark:border-[#1a1e2a] text-sm text-black/70 dark:text-[#5a6a82] hover:text-black dark:hover:text-[#b8c6de]">Details</Link>
    </div>
  );
}

export default function PapersPage() {
  const meta = (papersData as any).meta as { title: string; subtitle?: string; total_papers?: number; released_papers?: number };
  const exec = (papersData as any).executive_summary as PaperItem;
  const groups = (papersData as any).groups as PaperGroup[];

  const [openGroupId, setOpenGroupId] = useState<string | null>(groups[0]?.id ?? null);

  function toggle(id: string) {
    setOpenGroupId(prev => prev === id ? null : id);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55 dark:text-[#5a6a82]">Corpus</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-black dark:text-[#b8c6de]">
          {meta?.title ?? "The Corpus"}
        </h1>
        {meta?.subtitle ? <p className="mt-2 text-sm text-black/60 dark:text-[#5a6a82]">{meta.subtitle}</p> : null}

        <p className="mt-4 text-black/70 dark:text-[#b8c6de] leading-relaxed">
          The corpus is in active production. Released papers include PDF download and Zenodo DOI links.
          Papers in production are catalogued with summaries and corpus function.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {typeof meta?.released_papers === "number" ? (
            <span className="text-xs text-black/55 dark:text-[#5a6a82] rounded-full border border-black/10 dark:border-[#1a1e2a] bg-white/60 dark:bg-[#111828]/70 px-3 py-1">{meta.released_papers} released</span>
          ) : null}
          {typeof meta?.total_papers === "number" ? (
            <span className="text-xs text-black/55 dark:text-[#5a6a82] rounded-full border border-black/10 dark:border-[#1a1e2a] bg-white/60 dark:bg-[#111828]/70 px-3 py-1">{meta.total_papers} total</span>
          ) : null}
        </div>

        {/* Executive Summary — always visible */}
        {exec ? (
          <div className="mt-10 rounded-2xl border border-black/10 dark:border-[#1a1e2a] bg-white/60 dark:bg-[#111828]/70 p-6">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="min-w-0 md:min-w-[16rem]">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-lg font-semibold text-black dark:text-[#b8c6de]">Executive Summary</h2>
                  <StatusPill status={exec.status} state={exec.state} />
                </div>
                <p className="mt-2 text-sm text-black/65 dark:text-[#b8c6de] leading-relaxed">
                  {exec.summary ?? "High-level structural orientation to the project and corpus map."}
                </p>
                {exec.function ? <p className="mt-2 text-xs text-black/50 dark:text-[#5a6a82]">{exec.function}</p> : null}
              </div>
              <PaperActions item={exec} />
            </div>
          </div>
        ) : null}

        {/* Accordion groups */}
        <div className="mt-12 space-y-3">
          {groups.map((group) => {
            const isOpen = openGroupId === group.id;
            return (
              <section key={group.id} id={group.id} className="scroll-mt-24 rounded-2xl border border-black/10 dark:border-[#1a1e2a] bg-white/60 dark:bg-[#111828]/70 overflow-hidden">
                <button
                  onClick={() => toggle(group.id)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-black/5 dark:hover:bg-[#111828] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-base font-semibold text-black dark:text-[#b8c6de]">{group.title}</span>
                    <span className="text-xs text-black/40 dark:text-[#5a6a82]">{group.items.length} papers</span>
                  </div>
                  <span className="text-black/35 dark:text-[#5a6a82] text-lg leading-none shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="divide-y divide-black/10 dark:divide-[#1a1e2a] border-t border-black/10 dark:border-[#1a1e2a]">
                    {group.items.map((item) => (
                      <div key={item.id} className="p-5 flex items-start justify-between gap-6 flex-wrap">
                        <div className="min-w-0 md:min-w-[16rem]">
                          <div className="flex items-center gap-3 flex-wrap">
                            <div className="text-sm text-black/45 dark:text-[#5a6a82]">Corpus entry</div>
                            <StatusPill status={item.status} state={item.state} />
                          </div>
                          <div className="mt-1">
                            <Link href={`/papers/${item.slug}`} className="no-underline text-base font-medium text-black dark:text-[#b8c6de] hover:underline">
                              {item.title}
                            </Link>
                          </div>
                          {item.summary ? <p className="mt-2 text-sm text-black/65 dark:text-[#b8c6de] leading-relaxed">{item.summary}</p> : null}
                          {item.function ? <p className="mt-2 text-xs text-black/50 dark:text-[#5a6a82]">{item.function}</p> : null}
                          {item.status === "released" && item.doi ? <p className="mt-2 text-xs text-black/45 dark:text-[#5a6a82]">DOI: {item.doi}</p> : null}
                        </div>
                        <PaperActions item={item} />
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        <p className="mt-12 text-xs text-black/45 dark:text-[#5a6a82]">
          Note: anything placed under <code className="bg-black/5 dark:bg-[#111828] px-1.5 py-0.5 rounded">public/</code> is publicly
          accessible by URL on Vercel even if it is not linked here. If you want unreleased PDFs offline, don&apos;t
          deploy them inside <code className="bg-black/5 dark:bg-[#111828] px-1.5 py-0.5 rounded">public/papers/</code>.
        </p>
      </div>
    </div>
  );
}
