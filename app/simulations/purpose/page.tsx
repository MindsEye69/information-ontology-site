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

          {/* Safe band label moved UP so it never overlaps the line */}
          <text x="300" y="258" textAnchor="middle" fill={textMain} fontSize="18" fontWeight="700">
            safe band (persistence)
          </text>

          {/* Calm drift trajectory moved slightly DOWN for breathing room */}
          <path
            d="
              M 110 285
              C 190 265, 260 305, 330 290
              C 390 277, 430 275, 480 285
              C 505 292, 515 315, 510 340
              C 503 368, 485 388, 455 402
            "
            fill="none"
            stroke={ok}
            strokeWidth="4"
          />

          {/* Exit segment emphasized — diagonal crossing (clearer than vertical drop) */}
          <path
            d="M 510 340 C 503 368, 485 388, 455 402"
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

          {/* Safe band label moved UP so it never overlaps the line */}
          <text x="800" y="258" textAnchor="middle" fill={textMain} fontSize="18" fontWeight="700">
            safe band (persistence)
          </text>

          {/* Damped oscillation, placed slightly DOWN */}
          <path
            d="
              M 610 295
              C 660 278, 710 312, 760 295
              C 800 283, 840 305, 880 295
              C 905 290, 930 300, 955 295
            "
            fill="none"
            stroke={ok}
            strokeWidth="4"
          />

          {/* Disturbance nudges moved ABOVE the line, away from the label */}
          <line x1="725" y1="250" x2="745" y2="270" stroke={danger} strokeWidth="2.5" markerEnd="url(#arrowRed)" />
          <line x1="865" y1="250" x2="845" y2="270" stroke={danger} strokeWidth="2.5" markerEnd="url(#arrowRed)" />

          {/* Corrections moved BELOW the line, away from the label */}
          <line x1="745" y1="340" x2="735" y2="315" stroke={accent} strokeWidth="2.5" markerEnd="url(#arrowSky)" />
          <line x1="845" y1="340" x2="855" y2="315" stroke={accent} strokeWidth="2.5" markerEnd="url(#arrowSky)" />

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
