export default function PurposePage() {
  const bg = "#050914";
  const card = "#0b1222";
  const border = "#334155";

  const textMain = "#e6f0ff";
  const textDim = "#cbd5e1";

  const safeBand = "#1f3b5f";
  const failBand = "#4a1e1e";
  const danger = "#ff6b6b";
  const ok = "#7cb8ff";
  const accent = "#38bdf8";

  return (
    <main className="min-h-screen px-8 py-12" style={{ background: bg, color: "white" }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="text-sky-400 text-sm mb-2">Visual aids · P</div>
        <h1 className="text-4xl font-semibold mb-4">P — Purpose</h1>
        <p className="text-lg text-slate-300 max-w-4xl">
          In IO, <strong>purpose</strong> is not a hidden intention or “goal-stuff.”
          It is the <strong>stable, goal-like pattern</strong> that emerges when a system must satisfy
          persistence constraints (<strong>V</strong>) and has mechanisms that regulate itself under disturbance.
        </p>
        <p className="text-slate-400 mt-2">
          This diagram is intentionally simple. It is an intuition builder, not a proof.
        </p>
      </div>

      {/* Main Card */}
      <div
        className="max-w-6xl mx-auto rounded-xl p-8"
        style={{ background: card, border: `1px solid ${border}` }}
      >
        <h2 className="text-xl font-semibold mb-6">Purpose as a control outcome (not an inner “aim”)</h2>

        <svg viewBox="0 0 1100 560" className="w-full h-auto" aria-label="Purpose diagram">
          <rect x="0" y="0" width="1100" height="560" rx="14" fill="#071021" />

          {/* Titles */}
          <text x="90" y="70" fill={textMain} fontSize="22" fontWeight="700">
            No regulation
          </text>
          <text x="690" y="70" fill={textMain} fontSize="22" fontWeight="700">
            Regulation under constraint
          </text>

          {/* Divider */}
          <line x1="550" y1="90" x2="550" y2="505" stroke="#1f2a44" strokeWidth="2" />

          {/* Shared note */}
          <text x="550" y="110" textAnchor="middle" fill={textDim} fontSize="16" fontWeight="600">
            Same persistence band + same disturbances — only the feedback loop differs
          </text>

          {/* === LEFT PANEL === */}
          <rect x="70" y="150" width="420" height="250" rx="12" fill="#08152e" stroke={border} />
          <rect x="70" y="150" width="420" height="60" fill={failBand} opacity="0.92" />
          <rect x="70" y="210" width="420" height="130" fill={safeBand} opacity="0.96" />
          <rect x="70" y="340" width="420" height="60" fill={failBand} opacity="0.92" />

          <text x="92" y="186" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>
          <text x="92" y="378" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>
          <text x="280" y="285" textAnchor="middle" fill={textMain} fontSize="18" fontWeight="700">
            safe band (persistence)
          </text>

          {/* Wandering trajectory (no regulation) */}
          <path
            d="
              M 90 270
              C 150 250, 200 310, 250 295
              C 300 280, 330 235, 360 240
              C 390 245, 420 300, 450 330
              C 470 350, 455 380, 430 400
            "
            fill="none"
            stroke={ok}
            strokeWidth="4"
          />

          {/* Exit segment emphasized */}
          <path
            d="M 450 330 C 470 350, 455 380, 430 400"
            fill="none"
            stroke={danger}
            strokeWidth="4"
          />

          <text x="92" y="430" fill={textDim} fontSize="15" fontWeight="700">
            drift accumulates → exits occur
          </text>

          {/* === RIGHT PANEL === */}
          <rect x="610" y="150" width="420" height="250" rx="12" fill="#08152e" stroke={border} />
          <rect x="610" y="150" width="420" height="60" fill={failBand} opacity="0.92" />
          <rect x="610" y="210" width="420" height="130" fill={safeBand} opacity="0.96" />
          <rect x="610" y="340" width="420" height="60" fill={failBand} opacity="0.92" />

          <text x="632" y="186" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>
          <text x="632" y="378" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>
          <text x="820" y="285" textAnchor="middle" fill={textMain} fontSize="18" fontWeight="700">
            safe band (persistence)
          </text>

          {/* "Attractor-like" regulated trajectory: kicked, then corrected back */}
          <path
            d="
              M 630 285
              C 700 260, 760 300, 810 285
              C 860 270, 885 250, 910 240
              C 935 232, 950 242, 940 260
              C 928 285, 885 300, 840 295
              C 780 288, 730 285, 700 285
            "
            fill="none"
            stroke={ok}
            strokeWidth="4"
          />

          {/* Disturbance kicks (small red nudges) */}
          <line x1="840" y1="255" x2="865" y2="240" stroke={danger} strokeWidth="2.5" markerEnd="url(#arrowRed)" />
          <line x1="760" y1="305" x2="785" y2="320" stroke={danger} strokeWidth="2.5" markerEnd="url(#arrowRed)" />

          {/* Correction arrows (blue/sky) */}
          <line x1="910" y1="240" x2="890" y2="265" stroke={accent} strokeWidth="2.5" markerEnd="url(#arrowSky)" />
          <line x1="785" y1="320" x2="805" y2="295" stroke={accent} strokeWidth="2.5" markerEnd="url(#arrowSky)" />

          <text x="632" y="430" fill={textDim} fontSize="15" fontWeight="700">
            repeated return toward a stable region
          </text>

          {/* Bottom takeaway bar */}
          <rect x="70" y="470" width="960" height="60" rx="12" fill="#071a33" stroke="#1f2a44" />
          <text x="550" y="500" textAnchor="middle" fill={textMain} fontSize="15" fontWeight="800">
            “Purpose” is the stable, goal-like behavior produced by constraint + regulation over time.
          </text>
          <text x="550" y="522" textAnchor="middle" fill={textDim} fontSize="14" fontWeight="650">
            It can look intentional, even when it is just feedback maintaining persistence.
          </text>

          {/* Markers */}
          <defs>
            <marker id="arrowRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill={danger} />
            </marker>
            <marker id="arrowSky" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill={accent} />
            </marker>
          </defs>
        </svg>

        <div className="mt-6 text-slate-300 text-base max-w-5xl space-y-2">
          <p>
            Purpose (P) names the <strong>pattern</strong> that results when a system persists under disturbance:
            it repeatedly returns to a viable region rather than drifting away.
          </p>
          <p className="text-slate-400">
            IO takeaway: “purpose” is a description of stable control outcomes — not a claim about inner intention.
          </p>
        </div>
      </div>
    </main>
  );
}
