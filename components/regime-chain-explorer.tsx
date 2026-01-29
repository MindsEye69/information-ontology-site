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
    body: ["Extended explanation forthcoming."],
    links: [{ href: "/start/relation", label: "Start Here: Relation" }],
  },
  "I": {
    title: "I — Information",
    body: ["Extended explanation forthcoming."],
    links: [{ href: "/start/information", label: "Start Here: Information" }],
  },
  "A": {
    title: "A — Awareness",
    body: ["Extended explanation forthcoming."],
    links: [{ href: "/start/awareness", label: "Start Here: Awareness" }],
  },
  "V": {
    title: "V — Value",
    body: ["Extended explanation forthcoming."],
    links: [{ href: "/start/value", label: "Start Here: Value" }],
  },
  "M": {
    title: "M — Meaning",
    body: ["Extended explanation forthcoming."],
    links: [{ href: "/start/meaning", label: "Start Here: Meaning" }],
  },
  "P": {
    title: "P — Purpose",
    body: ["Extended explanation forthcoming."],
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
              className={`text-2xl md:text-3xl font-semibold tracking-tight transition-opacity duration-[1400ms] ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              {phrase}
            </div>
          )}
        </div>

        <div className="mt-6 rounded-3xl border border-black/10 bg-white/60 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xl md:text-2xl">
            {NODES.map((n, i) => (
              <div key={n} className="flex items-center gap-3 md:gap-4">
                <button
                  onClick={() => {
                    setPane({ kind: "node", key: n });
                    flashPhrase(n);
                  }}
                  className="rounded-2xl px-4 py-2 border border-black/15 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
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
                    className="no-underline text-black/45 hover:text-black/80 rounded px-1 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                  >
                    →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-black/45 text-center">
            Click the symbols or arrows to explore the chain.
          </p>
        </div>

        <div className="mt-10 min-h-[220px] rounded-3xl border border-black/10 bg-paper p-6 md:p-8">
          {content && (
            <>
              <h2 className="text-lg md:text-xl font-semibold">
                {content.title}
              </h2>
              <div className="mt-3 space-y-3 text-black/75">
                {content.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {content.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
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
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            The Master
          </Link>
          <Link
            href="/papers"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Papers
          </Link>
          <Link
            href="/orientation/how-to-build-a-someone"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Orientation Guide
          </Link>
          <Link
            href="/archive"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Archived site
          </Link>
        </div>
      </div>
    </div>
  );
}
