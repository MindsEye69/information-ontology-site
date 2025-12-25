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
      <div className="max-w-6xl mx-auto mb-10">
        <div className="text-sky-400 text-sm mb-2">Visual aids · P</div>
        <h1 className="text-4xl font-semibold mb-4">P — Purpose</h1>
        <p className="text-lg text-slate-300 max-w-4xl">
          In IO, <strong>purpose</strong> is not an inner intention. It is the{" "}
          <strong>stable, goal-like pattern</strong> that emerges when a system must satisfy persistence constraints
          (<strong>V</strong>) and has mechanisms that regulate itself under disturbance.
        </p>
        <p className="text-slate-400 mt-2">
          This diagram is intentionally simple. It is an intuition builder, not a proof.
        </p>
      </div>

      <div className="max-w-6xl mx-auto rounded-xl p-8" style={{ background: card, border: `1px solid ${border}` }}>
        <h2 className="text-xl font-semibold mb-6">Purpose as a control outcome (not an inner “aim”)</h2>

        <svg viewBox="0 0 1100 560" className="w-full h-auto" aria-label="Purpose diagram">
          <rect x="0" y="0" width="1100" height="560" rx="14" fill="#071021" />

          {/* Titles */}
          <text x="150" y="80" fill={textMain} fontSize="22" fontWeight="700">
            No regulation
          </text>
          <text x="690" y="80" fill={textMain} fontSize="22" fontWeight="700">
            Regulation under constraint
          </text>

          {/* Divider */}
          <line x1="550" y1="105" x2="550" y2="470" stroke="#1f2a44" strokeWidth="2" />

          {/* Shared note */}
          <text x="550" y="120" textAnchor="middle" fill={textDim} fontSize="16" fontWeight="600">
            Same persistence band + same disturbances — only the feedback loop differs
          </text>

          {/* === LEFT PANEL (No regulation) === */}
          <rect x="90" y="160" width="420" height="240" rx="12" fill="#08152e" stroke={border} />
          <rect x="90" y="160" width="420" height="60" fill={failBand} opacity="0.92" />
          <rect x="90" y="220" width="420" height="120" fill={safeBand} opacity="0.96" />
          <rect x="90" y="340" width="420" height="60" fill={failBand} opacity="0.92" />

          <text x="112" y="196" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>
          <text x="112" y="376" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>
          <text x="300" y="290" textAnchor="middle" fill={textMain} fontSize="18" fontWeight="700">
            safe band (persistence)
          </text>

          {/* Calm drift trajectory: slowly trends downward until it crosses */}
          <path
            d="
              M 110 270
              C 190 250, 260 290, 330 275
              C 390 262, 430 260, 480 270
              C 505 276, 515 300, 510 330
              C 505 360, 490 385, 470 405
            "
            fill="none"
            stroke={ok}
            strokeWidth="4"
          />

          {/* Crossing segment emphasized (small, clear) */}
          <path
            d="M 510 330 C 505 360, 490 385, 470 405"
            fill="none"
            stroke={danger}
            strokeWidth="4"
          />

          <text x="112" y="430" fill={textDim} fontSize="15" fontWeight="700">
            drift accumulates → exits occur
          </text>

          {/* === RIGHT PANEL (Regulation) === */}
          <rect x="590" y="160" width="420" height="240" rx="12" fill="#08152e" stroke={border} />
          <rect x="590" y="160" width="420" height="60" fill={failBand} opacity="0.92" />
          <rect x="590" y="220" width="420" height="120" fill={safeBand} opacity="0.96" />
          <rect x="590" y="340" width="420" height="60" fill={failBand} opacity="0.92" />

          <text x="612" y="196" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>
          <text x="612" y="376" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>
          <text x="800" y="290" textAnchor="middle" fill={textMain} fontSize="18" fontWeight="700">
            safe band (persistence)
          </text>

          {/* Damped oscillation around the center line (no loops) */}
          <path
            d="
              M 610 285
              C 660 265, 710 305, 760 285
              C 800 270, 840 295, 880 285
              C 905 278, 930 288, 955 285
            "
            fill="none"
            stroke={ok}
            strokeWidth="4"
          />

          {/* Disturbance nudges (small red arrows) */}
          <line x1="720" y1="245" x2="740" y2="260" stroke={danger} strokeWidth="2.5" markerEnd="url(#arrowRed)" />
          <line x1="860" y1="318" x2="840" y2="305" stroke={danger} strokeWidth="2.5" markerEnd="url(#arrowRed)" />

          {/* Corrections (small sky arrows back toward midline) */}
          <line x1="740" y1="260" x2="730" y2="280" stroke={accent} strokeWidth="2.5" markerEnd="url(#arrowSky)" />
          <line x1="840" y1="305" x2="850" y2="286" stroke={accent} strokeWidth="2.5" markerEnd="url(#arrowSky)" />

          <text x="612" y="430" fill={textDim} fontSize="15" fontWeight="700">
            repeated return toward a stable region
          </text>

          {/* Bottom takeaway bar */}
          <rect x="90" y="470" width="920" height="62" rx="12" fill="#071a33" stroke="#1f2a44" />
          <text x="550" y="500" textAnchor="middle" fill={textMain} fontSize="15" fontWeight="800">
            “Purpose” is the stable, goal-like behavior produced by constraint + regulation over time.
          </text>
          <text x="550" y="523" textAnchor="middle" fill={textDim} fontSize="14" fontWeight="650">
            It can look intentional, even when it is just feedback maintaining persistence.
          </text>

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
