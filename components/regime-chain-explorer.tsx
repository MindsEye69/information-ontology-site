"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ExplanatoryBanner } from "@/components/ExplanatoryBanner";

type NodeKey = "Δ" | "R" | "I" | "A" | "V" | "M" | "P";
type EdgeKey = "Δ-R" | "R-I" | "I-A" | "A-V" | "V-M" | "M-P";

type Pane =
  | { kind: "none" }
  | { kind: "node"; key: NodeKey };

const NODES: NodeKey[] = ["Δ", "R", "I", "A", "V", "M", "P"];

const PHRASES: Record<NodeKey, string> = {
  "Δ": "to be is to differ",
  "R": "relations stabilize difference",
  "I": "information is structured difference",
  "A": "awareness is constraint-sensitive tracking",
  "V": "value is selective stability",
  "M": "meaning is coordinated constraint",
  "P": "purpose is persistent direction",
};

const NODE_CONTENT: Record<
  NodeKey,
  {
    title: string;
    body: string[];
    links: Array<{ href: string; label: string }>;
  }
> = {
  "Δ": {
    title: "Δ — Difference",
    body: [
      "Everything begins with difference: a world with no difference has nothing to track, nothing to update, and nothing to stabilize.",
      "Δ names the minimal starting point—before words, before meaning, before interpretation—where variation is present at all.",
    ],
    links: [
      { href: "/master", label: "Read the Master" },
      { href: "/papers", label: "Download the corpus" },
    ],
  },
  "R": {
    title: "R — Relation",
    body: [
      "Difference, once present, is always articulated under some ordering: this and not that, before and after, here and elsewhere. That structured articulation—held under ordering and persistence—is what IO calls Relation.",
      "R marks the first level at which organizational structure appears. Differences do not simply exist side by side; they are positioned relative to each other.",
    ],
    links: [{ href: "/start/relation", label: "Start Here: Relation" }],
  },
  "I": {
    title: "I — Information",
    body: [
      "Where structured difference persists across transitions—where a pattern remains re-identifiable rather than dissolving—IO calls this Information. Not message, not meaning, but structured difference that holds.",
      "I is prior to interpretation. The re-identifiability is load-bearing: without it, nothing downstream can organize itself against a stable contrast.",
    ],
    links: [{ href: "/start/information", label: "Start Here: Information" }],
  },
  "A": {
    title: "A — Awareness",
    body: [
      "Not every position within a system is the same position with respect to structured difference. Awareness names the regime in which informational registration is perspective-relative: which differences are available depends on where within the structure a system stands.",
      "A is not consciousness. It is the organizational condition under which information is not uniformly present but differentially registered from a position.",
    ],
    links: [{ href: "/start/awareness", label: "Start Here: Awareness" }],
  },
  "V": {
    title: "V — Value",
    body: [
      "Within awareness, not all registrations are equivalent with respect to what persists. Some registered states allow continued organization; others do not. That differential stabilization—relative to persistence—is what IO calls Value.",
      "V is not preference or moral worth. It is the structural asymmetry that appears whenever differences are registered from a position that has persistence conditions of its own.",
    ],
    links: [{ href: "/start/value", label: "Start Here: Value" }],
  },
  "M": {
    title: "M — Meaning",
    body: [
      "Where the differential stabilization of one transition structures what is available in the next—where value is coordinated across transitions—IO calls this Meaning. Interpretation becomes possible without requiring symbols or semantic content.",
      "M is not semantics. It is the organizational regime in which structured constraint carries interpretive weight across time, prior to any representational apparatus.",
    ],
    links: [{ href: "/start/meaning", label: "Start Here: Meaning" }],
  },
  "P": {
    title: "P — Purpose",
    body: [
      "Where the coordination of value across transitions acquires a directional bias that persists—where constraint structure leans through time rather than merely across it—IO calls this Purpose. Not intention, not goal, but sustained directional constraint.",
      "P marks the structural persistence condition under which organized continuation holds its orientation. It closes the chain: the differences P generates are the Δ from which the next cycle begins.",
    ],
    links: [{ href: "/start/purpose", label: "Start Here: Purpose" }],
  },
};

const EDGE_HREFS: Record<EdgeKey, string> = {
  "Δ-R": "/start/relation",
  "R-I": "/start/information",
  "I-A": "/start/awareness",
  "A-V": "/start/value",
  "V-M": "/start/meaning",
  "M-P": "/start/purpose",
};

export default function RegimeChainExplorer() {
  const [pane, setPane] = useState<Pane>({ kind: "node", key: "Δ" });
  const [phrase, setPhrase] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const hideTimer = useRef<number | null>(null);
  const fadeTimer = useRef<number | null>(null);

  const content = useMemo(
    () => (pane.kind === "node" ? NODE_CONTENT[pane.key] : null),
    [pane]
  );

  useEffect(() => {
    flashPhrase("Δ");
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
      if (fadeTimer.current) clearTimeout(fadeTimer.current);
    };
  }, []);

  function flashPhrase(n: NodeKey) {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    if (fadeTimer.current) clearTimeout(fadeTimer.current);

    setPhrase(PHRASES[n]);
    setVisible(true);

    fadeTimer.current = window.setTimeout(() => setVisible(false), 1200);
    hideTimer.current = window.setTimeout(() => setPhrase(null), 2600);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-4xl">
        <ExplanatoryBanner className="mb-6" />
        <div className="h-12 md:h-14 flex items-end">
          {phrase && (
            <div
              className={`text-2xl md:text-3xl font-semibold tracking-tight transition-opacity duration-[1400ms] text-black dark:text-[#b8c6de] ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              {phrase}
            </div>
          )}
        </div>

        <div className="mt-6 rounded-3xl border border-black/10 dark:border-[#1a1e2a] bg-white/60 dark:bg-[#111828]/70 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xl md:text-2xl">
            {NODES.map((n, i) => (
              <div key={n} className="flex items-center gap-3 md:gap-4">
                <button
                  onClick={() => {
                    setPane({ kind: "node", key: n });
                    flashPhrase(n);
                  }}
                  className="rounded-2xl px-4 py-2 border border-black/15 dark:border-slate-700 text-black dark:text-[#b8c6de] hover:bg-black/5 dark:hover:bg-[#111828]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-slate-700"
                >
                  {n}
                </button>

                {i < NODES.length - 1 && (
                  <Link
                    href={
                      EDGE_HREFS[
                        `${NODES[i]}-${NODES[i + 1]}` as EdgeKey
                      ]
                    }
                    className="no-underline text-black/45 dark:text-[#5a6a82] hover:text-black/80 dark:hover:text-[#b8c6de] rounded px-1 hover:bg-black/5 dark:hover:bg-[#111828]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 dark:focus-visible:ring-slate-700"
                  >
                    →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-black/45 dark:text-[#5a6a82] text-center">
            Click the symbols or arrows to explore the chain.
          </p>
        </div>

        <div className="mt-10 min-h-[220px] rounded-3xl border border-black/10 dark:border-[#1a1e2a] bg-paper dark:bg-[#111828]/70 p-6 md:p-8">
          {content && (
            <>
              <h2 className="text-lg md:text-xl font-semibold text-black dark:text-[#b8c6de]">
                {content.title}
              </h2>
              <div className="mt-3 space-y-3 text-black/75 dark:text-[#b8c6de]">
                {content.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {content.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 dark:border-slate-700 text-sm text-black dark:text-[#b8c6de] hover:bg-black/5 dark:hover:bg-[#111828]/80"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/master"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 dark:border-slate-700 text-sm text-black dark:text-[#b8c6de] hover:bg-black/5 dark:hover:bg-[#111828]/80"
          >
            The Master
          </Link>
          <Link
            href="/papers"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 dark:border-slate-700 text-sm text-black dark:text-[#b8c6de] hover:bg-black/5 dark:hover:bg-[#111828]/80"
          >
            Papers
          </Link>
          <Link
            href="/orientation/how-to-build-a-someone"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 dark:border-slate-700 text-sm text-black dark:text-[#b8c6de] hover:bg-black/5 dark:hover:bg-[#111828]/80"
          >
            Orientation Guide
          </Link>
          <Link
            href="/archive"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 dark:border-slate-700 text-sm text-black dark:text-[#b8c6de] hover:bg-black/5 dark:hover:bg-[#111828]/80"
          >
            Archived site
          </Link>
        </div>
      </div>
    </div>
  );
}
