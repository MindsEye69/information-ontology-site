import ChainNav from "../ChainNav";

export default function MeaningPage() {
  const card = "#0b1222";
  const border = "#334155";
  const textMain = "#e6f0ff";
  const textDim = "#cbd5e1";
  const accent = "#38bdf8";
  const safeBand = "#1f3b5f";
  const failBand = "#4a1e1e";
  const danger = "#ff6b6b";
  const ok = "#7cb8ff";
  const bandFont = 18;
  const bandWeight = 650;

  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Simulations · M</p>
        <h1 className="text-3xl font-bold tracking-tight">M — Meaning</h1>
        <p className="max-w-3xl text-black/70">
          In IO, <strong>meaning</strong> is not in a difference by itself. It arises when
          structured information is organized by a system&apos;s value constraint — what a
          difference implies depends on where the system stands relative to its persistence band.
        </p>
        <p className="text-sm text-black/45">This diagram is intentionally simple. It is an intuition builder, not a proof.</p>
      </div>

      <div className="rounded-2xl p-8" style={{ background: card, border: `1px solid ${border}` }}>
        <h2 className="text-xl font-semibold mb-6 text-white">Same information, different meaning</h2>

        <svg viewBox="0 0 1100 560" className="w-full h-auto" aria-label="Meaning diagram">
          <rect x="0" y="0" width="1100" height="560" rx="14" fill="#071021" />

          <text x="80" y="70" fill={textMain} fontSize="22" fontWeight="700">System A (too hot)</text>
          <text x="630" y="70" fill={textMain} fontSize="22" fontWeight="700">System B (too cold)</text>
          <line x1="550" y1="90" x2="550" y2="510" stroke="#1f2a44" strokeWidth="2" />
          <text x="550" y="110" textAnchor="middle" fill={textDim} fontSize="16" fontWeight="600">
            Same incoming information: +2°C change
          </text>

          {/* Left panel */}
          <rect x="70" y="170" width="420" height="240" rx="12" fill="#08152e" stroke={border} />
          <rect x="70" y="170" width="420" height="60" fill={failBand} opacity="0.92" />
          <rect x="70" y="230" width="420" height="120" fill={safeBand} opacity="0.96" />
          <rect x="70" y="350" width="420" height="60" fill={failBand} opacity="0.92" />
          <text x="92" y="208" fill="#ffb4b4" fontSize="16" fontWeight="650">failure region</text>
          <text x="92" y="388" fill="#ffb4b4" fontSize="16" fontWeight="650">failure region</text>
          <text x="280" y="300" textAnchor="middle" fill={textMain} fontSize={bandFont} fontWeight={bandWeight}>safe band (persistence)</text>
          <text x="92" y="150" fill="#ffb4b4" fontSize="16" fontWeight="800">+2°C pushes toward failure</text>
          <circle cx="140" cy="252" r="10" fill={danger} />
          <text x="166" y="257" fill={textDim} fontSize="15" fontWeight="650">current state (near upper boundary)</text>
          <line x1="140" y1="252" x2="140" y2="222" stroke={danger} strokeWidth="3" markerEnd="url(#arrowRed)" />

          {/* Right panel */}
          <rect x="610" y="170" width="420" height="240" rx="12" fill="#08152e" stroke={border} />
          <rect x="610" y="170" width="420" height="60" fill={failBand} opacity="0.92" />
          <rect x="610" y="230" width="420" height="120" fill={safeBand} opacity="0.96" />
          <rect x="610" y="350" width="420" height="60" fill={failBand} opacity="0.92" />
          <text x="632" y="208" fill="#ffb4b4" fontSize="16" fontWeight="650">failure region</text>
          <text x="632" y="388" fill="#ffb4b4" fontSize="16" fontWeight="650">failure region</text>
          <text x="820" y="300" textAnchor="middle" fill={textMain} fontSize={bandFont} fontWeight={bandWeight}>safe band (persistence)</text>
          <text x="632" y="150" fill={textDim} fontSize="16" fontWeight="800">+2°C moves toward stability</text>
          <circle cx="680" cy="328" r="10" fill={ok} />
          <text x="706" y="333" fill={textDim} fontSize="15" fontWeight="650">current state (near lower boundary)</text>
          <line x1="680" y1="328" x2="680" y2="288" stroke={accent} strokeWidth="3" markerEnd="url(#arrowSky)" />

          {/* Meaning boxes */}
          <rect x="70" y="435" width="420" height="70" rx="12" fill="#061025" stroke={border} />
          <text x="90" y="463" fill={textMain} fontSize="17" fontWeight="800">Meaning (for System A):</text>
          <text x="90" y="488" fill={textDim} fontSize="15" fontWeight="650">&ldquo;constraint tightening — continuation requires correction&rdquo;</text>

          <rect x="610" y="435" width="420" height="70" rx="12" fill="#061025" stroke={border} />
          <text x="630" y="463" fill={textMain} fontSize="17" fontWeight="800">Meaning (for System B):</text>
          <text x="630" y="488" fill={textDim} fontSize="15" fontWeight="650">&ldquo;constraint easing — continuation is less pressured&rdquo;</text>

          <rect x="70" y="520" width="960" height="28" rx="10" fill="#071a33" stroke="#1f2a44" />
          <text x="550" y="540" textAnchor="middle" fill={textMain} fontSize="14" fontWeight="800">
            Meaning is not in the difference alone — it arises from Information × Value × Position → organized continuation.
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
            The <strong>same</strong> incoming difference (+2°C) produces different meaning because each
            system stands in a different position relative to its persistence constraint.
          </p>
          <p className="text-slate-400">
            IO note: meaning is value-organized constraint — what a difference implies for continuation
            within the persistence band.
          </p>
        </div>
      </div>
    </div>
  );
}
