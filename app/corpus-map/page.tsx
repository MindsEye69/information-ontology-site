"use client";

import { useState } from "react";
import Link from "next/link";

type MapMode = "light" | "dark";

const MAPS: Record<MapMode, { src: string; label: string; note: string }> = {
  light: {
    src: "/IO_Corpus_Map_light_v17.html",
    label: "Light",
    note: "Default map view",
  },
  dark: {
    src: "/IO_Corpus_Map_v17.html",
    label: "Dark",
    note: "Dark-mode map view",
  },
};

function ModeButton({
  active,
  onClick,
  label,
  note,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  note: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex flex-col items-start rounded-2xl border px-4 py-3 text-left transition ${
        active
          ? "border-black bg-black text-white"
          : "border-black/10 bg-white text-black/80 hover:bg-black/5"
      }`}
      aria-pressed={active}
    >
      <span className="text-sm font-medium">{label}</span>
      <span className={`text-xs ${active ? "text-white/70" : "text-black/55"}`}>{note}</span>
    </button>
  );
}

export default function CorpusMapPage() {
  const [mode, setMode] = useState<MapMode>("light");
  const currentMap = MAPS[mode];

  return (
    <main className="mx-auto max-w-7xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Corpus navigation</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Interactive Corpus Map
        </h1>
        <p className="mt-6 text-black/75 leading-relaxed">
          Explore the full IO corpus architecture visually. The map opens in light mode by
          default, and you can switch to the dark version at any time.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <ModeButton
          active={mode === "light"}
          onClick={() => setMode("light")}
          label="Light"
          note="Default"
        />
        <ModeButton
          active={mode === "dark"}
          onClick={() => setMode("dark")}
          label="Dark"
          note="Alternate view"
        />
        <a
          href={currentMap.src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/80 no-underline hover:bg-black/5"
        >
          Open current view in a new tab
        </a>
        <Link
          href="/papers"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/80 no-underline hover:bg-black/5"
        >
          Back to papers
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm">
        <iframe
          key={currentMap.src}
          src={currentMap.src}
          title={`Interactive Corpus Map (${mode})`}
          className="h-[78vh] min-h-[720px] w-full"
        />
      </div>
    </main>
  );
}
