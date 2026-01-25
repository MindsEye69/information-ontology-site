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

function isPilotNode(n: NodeKey) {
  return n === "Δ";
}

const PHRASES: Partial<Record<NodeKey, string>> = {
  "Δ": "to be is to differ",
};

export default function RegimeChainExplorer() {
  const [pane, setPane] = useState<Pane>({ kind: "none" });

  const [phrase, setPhrase] = useState<string | null>(null);
  const [phraseVisible, setPhraseVisible] = useState(false);
  const hideTimer = useRef<number | null>(null);
  const fadeTimer = useRef<number | null>(null);

  const content = useMemo(() => {
    if (pane.kind === "node" && pane.key === "Δ") {
      return {
        title: "Δ — Difference",
        body: [
          "Everything begins with difference: a world with no difference has nothing to track, nothing to update, and nothing to stabilize.",
          "Δ names the minimal starting point—before words, before meaning, before interpretation—where variation is present at all.",
        ],
        links: [
          { href: "/master/regime-chain", label: "Read this in the Master" },
          { href: "/papers", label: "Download the corpus" },
        ],
      };
    }
    return null;
  }, [pane]);

  useEffect(() => {
    return () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      if (fadeTimer.current) window.clearTimeout(fadeTimer.current);
    };
  }, []);

  function flashPhraseForNode(n: NodeKey) {
    const p = PHRASES[n];
    if (!p) return;

    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    if (fadeTimer.current) window.clearTimeout(fadeTimer.current);

    setPhrase(p);
    setPhraseVisible(true);

    fadeTimer.current = window.setTimeout(() => setPhraseVisible(false), 1200);
    hideTimer.current = window.setTimeout(() => setPhrase(null), 2600);
  }

  function onNodeClick(n: NodeKey) {
    if (!isPilotNode(n)) return;
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
          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xl md:text-2xl">
            {NODES.map((n, idx) => (
              <div key={n} className="flex items-center gap-3 md:gap-4">
                <button
                  type="button"
                  onClick={() => onNodeClick(n)}
                  disabled={!isPilotNode(n)}
                  className={[
                    "rounded-2xl px-4 py-2",
                    "border border-black/15",
                    "transition-colors",
                    isPilotNode(n)
                      ? "hover:bg-black/5 text-black"
                      : "text-black/35 border-black/10 cursor-not-allowed",
                  ].join(" ")}
                  aria-label={`Open ${nodeLabel(n)}`}
                >
                  {nodeLabel(n)}
                </button>
                {idx < NODES.length - 1 ? (
                  <button
                    type="button"
                    disabled
                    className="text-black/30 select-none cursor-default"
                    aria-hidden="true"
                    title="Transition pages will be added"
                  >
                    →
                  </button>
                ) : null}
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-black/55 leading-relaxed">
            Click a symbol to explore. (Pilot: Δ is live today; the rest will come next.)
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
