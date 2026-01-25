"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

type NodeKey = "Δ" | "R" | "I" | "A" | "V" | "M" | "P";
type EdgeKey = `${NodeKey}-${NodeKey}`;

type Pane =
  | { kind: "none" }
  | { kind: "node"; key: NodeKey }
  | { kind: "edge"; key: EdgeKey };

const NODES: NodeKey[] = ["Δ", "R", "I", "A", "V", "M", "P"];

function nodeLabel(n: NodeKey) {
  return n;
}

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
      { href: "/master/regime-chain", label: "Read this in the Master" },
      { href: "/papers", label: "Download the corpus" },
    ],
  },
  "R": {
    title: "R — Relation",
    body: [
      "Placeholder: Relation (R) will be expanded. For now: R captures structured dependencies among differences — what changes with what, and what must hold fixed for anything to persist.",
      "(Extended explanations are deferred.)",
    ],
    links: [
      { href: "/master/regime-chain", label: "Read this in the Master" },
      { href: "/start/relation", label: "Start Here: Relation" },
    ],
  },
  "I": {
    title: "I — Information",
    body: [
      "Placeholder: Information (I) will be expanded. For now: I is difference under constraint — differences that can be tracked, updated, and carried forward.",
      "(Extended explanations are deferred.)",
    ],
    links: [
      { href: "/master/regime-chain", label: "Read this in the Master" },
      { href: "/start/information", label: "Start Here: Information" },
    ],
  },
  "A": {
    title: "A — Awareness",
    body: [
      "Placeholder: Awareness (A) will be expanded. For now: A is selective sensitivity — the system tracks some informational differences rather than others, due to constraint structure.",
      "(Extended explanations are deferred.)",
    ],
    links: [
      { href: "/master/regime-chain", label: "Read this in the Master" },
      { href: "/start/awareness", label: "Start Here: Awareness" },
    ],
  },
  "V": {
    title: "V — Value",
    body: [
      "Placeholder: Value (V) will be expanded. For now: V is structured preference in stabilization — which differences get preserved, amplified, or suppressed across transitions.",
      "(Extended explanations are deferred.)",
    ],
    links: [
      { href: "/master/regime-chain", label: "Read this in the Master" },
      { href: "/start/value", label: "Start Here: Value" },
    ],
  },
  "M": {
    title: "M — Meaning",
    body: [
      "Placeholder: Meaning (M) will be expanded. For now: M is coordination under constraint — patterns that function as stable interpretive handles within a system’s regime structure.",
      "(Extended explanations are deferred.)",
    ],
    links: [
      { href: "/master/regime-chain", label: "Read this in the Master" },
      { href: "/start/meaning", label: "Start Here: Meaning" },
    ],
  },
  "P": {
    title: "P — Purpose",
    body: [
      "Placeholder: Purpose (P) will be expanded. For now: P is persistent direction — trajectory-level constraint ordering that yields robust continuation patterns without teleology.",
      "(Extended explanations are deferred.)",
    ],
    links: [
      { href: "/master/regime-chain", label: "Read this in the Master" },
      { href: "/start/purpose", label: "Start Here: Purpose" },
    ],
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
  // Default to Δ so the landing page loads with meaningful content immediately.
  const [pane, setPane] = useState<Pane>({ kind: "node", key: "Δ" });

  const [phrase, setPhrase] = useState<string | null>(null);
  const [phraseVisible, setPhraseVisible] = useState(false);
  const hideTimer = useRef<number | null>(null);
  const fadeTimer = useRef<number | null>(null);

  const content = useMemo(() => {
    if (pane.kind === "node") return NODE_CONTENT[pane.key];
    return null;
  }, [pane]);

  useEffect(() => {
    // Show a short catchphrase above the chain on first load.
    flashPhraseForNode("Δ");

    return () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    };
  }, []);

  function flashPhraseForNode(n: NodeKey) {
    const p = PHRASES[n];

    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    if (fadeTimer.current) window.clearTimeout(fadeTimer.current);

    setPhrase(p);
    setPhraseVisible(true);

    fadeTimer.current = window.setTimeout(() => setPhraseVisible(false), 1200);
    hideTimer.current = window.setTimeout(() => setPhrase(null), 2600);
  }

  function onNodeClick(n: NodeKey) {
    setPane({ kind: "node", key: n });
    flashPhraseForNode(n);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-4xl">
        <div className="h-12 md:h-14 flex items-end">
          {phrase ? (
            <div
              className={[
                "text-2xl md:text-3xl font-semibold tracking-tight",
                "transition-opacity duration-[1400ms] ease-out",
                phraseVisible ? "opacity-100" : "opacity-0",
              ].join(" ")}
            >
              {phrase}
            </div>
          ) : (
            <div className="text-2xl md:text-3xl font-semibold tracking-tight opacity-0 select-none">
              placeholder
            </div>
          )}
        </div>

        <div className="mt-6 rounded-3xl border border-black/10 bg-white/60 p-6 md:p-8">
          {/*
            Interaction hardening:
            - ensure symbols remain clickable even if any ancestor introduces overlays
            - support pointer events consistently across browsers
            - keep chain ordering + glyphs canonical (do not modify)
          */}
          <div className="relative z-10 flex flex-wrap items-center gap-3 md:gap-4 text-xl md:text-2xl pointer-events-auto">
            {NODES.map((n, idx) => (
              <div key={n} className="flex items-center gap-3 md:gap-4">
                <button
                  type="button"
                  onPointerDown={() => onNodeClick(n)}
                  onClick={() => onNodeClick(n)}
                  className={[
                    "rounded-2xl px-4 py-2",
                    "border border-black/15",
                    "transition-colors",
                    pane.kind === "node" && pane.key === n
                      ? "bg-black/5 text-black"
                      : "hover:bg-black/5 text-black",
                  ].join(" ")}
                  aria-label={`Open ${nodeLabel(n)}`}
                >
                  {nodeLabel(n)}
                </button>
                {idx < NODES.length - 1 ? (
                  <Link
                    href={EDGE_HREFS[`${NODES[idx]}-${NODES[idx + 1]}` as EdgeKey]}
                    className="text-black/45 hover:text-black/80 transition-colors select-none"
                    aria-label={`Open transition ${NODES[idx]} to ${NODES[idx + 1]}`}
                    title={`Transition ${NODES[idx]} → ${NODES[idx + 1]}`}
                  >
                    →
                  </Link>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-black/55 leading-relaxed">
            Click a regime symbol to update the panel. Click an arrow to open the transition page.
          </p>
        </div>

        <div className="mt-10 min-h-[220px] rounded-3xl border border-black/10 bg-paper p-6 md:p-8">
          {content ? (
            <div>
              <h2 className="text-lg md:text-xl font-semibold">{content.title}</h2>
              <div className="mt-3 space-y-3 text-sm md:text-base text-black/75 leading-relaxed">
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
            </div>
          ) : (
            <div className="text-sm md:text-base text-black/55 leading-relaxed">
              Select a symbol to begin.
            </div>
          )}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/master"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            The Master (web reader)
          </Link>
          <Link
            href="/papers"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Papers (downloads)
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
