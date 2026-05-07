import ChainNav from "../ChainNav";

export default function PurposePage() {
  const card = "#0b1222";
  const border = "#334155";
  const textMain = "#e6f0ff";
  const textDim = "#cbd5e1";
  const safeBand = "#1f3b5f";
  const failBand = "#4a1e1e";
  const danger = "#ff6b6b";
  const ok = "#7cb8ff";
  const accent = "#38bdf8";

  const leftPanel = { x: 90, y: 160, w: 420, h: 240 };
  const rightPanel = { x: 590, y: 160, w: 420, h: 240 };
  const safeTop = 220;
  const safeH = 120;
  const safeBottom = safeTop + safeH;
  const leftCross = { x: 504, y: safeBottom };

  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Simulations · P</p>
        <h1 className="text-3xl font-bold tracking-tight">P — Purpose</h1>
        <p className="max-w-3xl text-black/70">
          In IO, <strong>purpose</strong> is not an inner intention or goal. It is the{" "}
          <strong>directional pattern</strong> that results when a system repeatedly returns
          to its persistence band under disturbance — constraint sustained through time.
        </p>
        <p className="text-sm text-black/45">This diagram is intentionally simple. It is an intuition builder, not a proof.</p>
      </div>

      <div className="rounded-2xl p-8" style={{ background: card, border: `1px solid ${border}` }}>
        <h2 className="text-xl font-semibold mb-6 text-white">
          Purpose as a structural outcome (not an inner &ldquo;aim&rdquo;)
        </h2>

        <svg viewBox="0 0 1100 560" className="w-full h-auto" aria-label="Purpose diagram">
          <rect x="0" y="0" width="1100" height="560" rx="14" fill="#071021" />

          <text x="150" y="80" fill={textMain} fontSize="22" fontWeight="700">No regulation</text>
          <text x="690" y="80" fill={textMain} fontSize="22" fontWeight="700">Regulation under constraint</text>
          <line x1="550" y1="105" x2="550" y2="470" stroke="#1f2a44" strokeWidth="2" />
          <text x="550" y="120" textAnchor="middle" fill={textDim} fontSize="16" fontWeight="600">
            Same persistence band + same disturbances — only the feedback loop differs
          </text>

          {/* Left panel */}
          <rect x={leftPanel.x} y={leftPanel.y} width={leftPanel.w} height={leftPanel.h} rx="12" fill="#08152e" stroke={border} />
          <rect x={leftPanel.x} y={leftPanel.y} width={leftPanel.w} height="60" fill={failBand} opacity="0.92" />
          <rect x={leftPanel.x} y={safeTop} width={leftPanel.w} height={safeH} fill={safeBand} opacity="0.96" />
          <rect x={leftPanel.x} y={safeBottom} width={leftPanel.w} height="60" fill={failBand} opacity="0.92" />
          <text x={leftPanel.x + 22} y={leftPanel.y + 36} fill="#ffb4b4" fontSize="16" fontWeight="650">failure region</text>
          <text x={leftPanel.x + 22} y={leftPanel.y + 216} fill="#ffb4b4" fontSize="16" fontWeight="650">failure region</text>
          <text x={leftPanel.x + leftPanel.w / 2} y={safeTop + 38} textAnchor="middle" fill={textMain} fontSize="18" fontWeight="700">safe band (persistence)</text>
          <path
            d={`M ${leftPanel.x} 295 C ${leftPanel.x + 70} 275, ${leftPanel.x + 145} 315, ${leftPanel.x + 220} 300 C ${leftPanel.x + 280} 287, ${leftPanel.x + 320} 285, ${leftPanel.x + 365} 295 C ${leftPanel.x + 405} 305, ${leftPanel.x + 418} 322, ${leftCross.x} ${leftCross.y}`}
            fill="none" stroke={ok} strokeWidth="4"
          />
          <line x1={leftCross.x - 10} y1={leftCross.y - 10} x2={leftCross.x + 10} y2={leftCross.y + 10} stroke={danger} strokeWidth="4" />
          <line x1={leftCross.x - 10} y1={leftCross.y + 10} x2={leftCross.x + 10} y2={leftCross.y - 10} stroke={danger} strokeWidth="4" />
          <text x={leftPanel.x + 22} y={leftPanel.y + 270} fill={textDim} fontSize="15" fontWeight="700">drift accumulates → exits occur</text>

          {/* Right panel */}
          <rect x={rightPanel.x} y={rightPanel.y} width={rightPanel.w} height={rightPanel.h} rx="12" fill="#08152e" stroke={border} />
          <rect x={rightPanel.x} y={rightPanel.y} width={rightPanel.w} height="60" fill={failBand} opacity="0.92" />
          <rect x={rightPanel.x} y={safeTop} width={rightPanel.w} height={safeH} fill={safeBand} opacity="0.96" />
          <rect x={rightPanel.x} y={safeBottom} width={rightPanel.w} height="60" fill={failBand} opacity="0.92" />
          <text x={rightPanel.x + 22} y={rightPanel.y + 36} fill="#ffb4b4" fontSize="16" fontWeight="650">failure region</text>
          <text x={rightPanel.x + 22} y={rightPanel.y + 216} fill="#ffb4b4" fontSize="16" fontWeight="650">failure region</text>
          <text x={rightPanel.x + rightPanel.w / 2} y={safeTop + 38} textAnchor="middle" fill={textMain} fontSize="18" fontWeight="700">safe band (persistence)</text>
          <path
            d={`M ${rightPanel.x} 305 C ${rightPanel.x + 70} 288, ${rightPanel.x + 135} 322, ${rightPanel.x + 200} 305 C ${rightPanel.x + 250} 295, ${rightPanel.x + 300} 315, ${rightPanel.x + 350} 305 C ${rightPanel.x + 380} 302, ${rightPanel.x + 400} 308, ${rightPanel.x + 420} 305`}
            fill="none" stroke={ok} strokeWidth="4"
          />
          <line x1={rightPanel.x + 175} y1={safeTop + 55} x2={rightPanel.x + 195} y2={safeTop + 75} stroke={danger} strokeWidth="2.5" markerEnd="url(#arrowRed)" />
          <line x1={rightPanel.x + 350} y1={safeTop + 60} x2={rightPanel.x + 370} y2={safeTop + 80} stroke={danger} strokeWidth="2.5" markerEnd="url(#arrowRed)" />
          <line x1={rightPanel.x + 210} y1={safeTop + 120} x2={rightPanel.x + 200} y2={safeTop + 95} stroke={accent} strokeWidth="2.5" markerEnd="url(#arrowSky)" />
          <line x1={rightPanel.x + 300} y1={safeTop + 120} x2={rightPanel.x + 310} y2={safeTop + 95} stroke={accent} strokeWidth="2.5" markerEnd="url(#arrowSky)" />
          <text x={rightPanel.x + 22} y={rightPanel.y + 270} fill={textDim} fontSize="15" fontWeight="700">repeated return toward a stable region</text>

          <rect x="90" y="470" width="920" height="62" rx="12" fill="#071a33" stroke="#1f2a44" />
          <text x="550" y="500" textAnchor="middle" fill={textMain} fontSize="15" fontWeight="800">
            Purpose is the directional pattern produced by constraint + regulation over time.
          </text>
          <text x="550" y="523" textAnchor="middle" fill={textDim} fontSize="14" fontWeight="650">
            It can appear intentional, even when it is only constraint maintaining persistence.
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
            Purpose (P) names the <strong>pattern</strong> that results when a system persists under
            disturbance: it repeatedly returns to a viable region rather than drifting away.
          </p>
          <p className="text-slate-400">
            The &ldquo;failure regions&rdquo; do not imply any specific sensor or target. They mark states
            outside the persistence constraint.
          </p>
        </div>
      </div>
    </div>
  );
}
