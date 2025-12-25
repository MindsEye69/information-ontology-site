export default function MeaningPage() {
  const bg = "#050914";
  const card = "#0b1222";
  const border = "#334155";

  const textMain = "#e6f0ff";
  const textDim = "#cbd5e1";
  const accent = "#38bdf8"; // sky
  const safeBand = "#1f3b5f";
  const failBand = "#4a1e1e";
  const danger = "#ff6b6b";
  const ok = "#7cb8ff";

  const fontSize = 18;
  const fontWeight = 600;

  return (
    <main className="min-h-screen px-8 py-12" style={{ background: bg, color: "white" }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="text-sky-400 text-sm mb-2">Visual aids · M</div>
        <h1 className="text-4xl font-semibold mb-4">M — Meaning</h1>
        <p className="text-lg text-slate-300 max-w-4xl">
          In IO, <strong>meaning</strong> is not “in the signal by itself.” Meaning arises when
          information becomes <strong>relevant to persistence</strong> — relative to a system’s
          constraint (<strong>V</strong>) and its current situation/context.
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
        <h2 className="text-xl font-semibold mb-6">Same signal, different meaning</h2>

        {/* Diagram */}
        <svg viewBox="0 0 1100 520" className="w-full h-auto" aria-label="Meaning diagram">
          {/* Panel frames */}
          <rect x="0" y="0" width="1100" height="520" rx="14" fill="#071021" />

          {/* Titles */}
          <text x="80" y="70" fill={textMain} fontSize="22" fontWeight="700">
            System A (too hot)
          </text>
          <text x="630" y="70" fill={textMain} fontSize="22" fontWeight="700">
            System B (too cold)
          </text>

          {/* Divider */}
          <line x1="550" y1="90" x2="550" y2="460" stroke="#1f2a44" strokeWidth="2" />

          {/* Common legend header */}
          <text
            x="550"
            y="110"
            textAnchor="middle"
            fill={textDim}
            fontSize="16"
            fontWeight="600"
          >
            Same incoming information (signal): +2°C change
          </text>

          {/* LEFT PANEL — System A */}
          {/* Temperature band container */}
          <rect x="70" y="140" width="420" height="220" rx="12" fill="#08152e" stroke={border} />

          {/* Failure/Safe regions */}
          <rect x="70" y="140" width="420" height="55" fill={failBand} opacity="0.9" />
          <rect x="70" y="195" width="420" height="110" fill={safeBand} opacity="0.95" />
          <rect x="70" y="305" width="420" height="55" fill={failBand} opacity="0.9" />

          <text x="92" y="173" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>
          <text x="92" y="338" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>

          {/* Safe label */}
          <text
            x="280"
            y="260"
            textAnchor="middle"
            fill={textMain}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            safe band (persistence)
          </text>

          {/* Current state marker (too hot: near top edge of safe band) */}
          <circle cx="140" cy="210" r="10" fill={danger} />
          <text x="162" y="214" fill={textDim} fontSize="16" fontWeight="600">
            current state (near upper boundary)
          </text>

          {/* Signal arrow: +2°C pushes upward */}
          <line x1="140" y1="210" x2="140" y2="175" stroke={danger} strokeWidth="3" markerEnd="url(#arrowRed)" />
          <text x="160" y="182" fill="#ffb4b4" fontSize="16" fontWeight="700">
            +2°C pushes toward failure
          </text>

          {/* Meaning box (left) */}
          <rect x="70" y="385" width="420" height="75" rx="12" fill="#061025" stroke={border} />
          <text x="90" y="415" fill={textMain} fontSize="18" fontWeight="800">
            Meaning (for System A):
          </text>
          <text x="90" y="440" fill={textDim} fontSize="16" fontWeight="600">
            “danger increasing → act to cool / reduce temperature”
          </text>

          {/* RIGHT PANEL — System B */}
          <rect x="610" y="140" width="420" height="220" rx="12" fill="#08152e" stroke={border} />

          <rect x="610" y="140" width="420" height="55" fill={failBand} opacity="0.9" />
          <rect x="610" y="195" width="420" height="110" fill={safeBand} opacity="0.95" />
          <rect x="610" y="305" width="420" height="55" fill={failBand} opacity="0.9" />

          <text x="632" y="173" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>
          <text x="632" y="338" fill="#ffb4b4" fontSize="16" fontWeight="650">
            failure region
          </text>

          <text
            x="820"
            y="260"
            textAnchor="middle"
            fill={textMain}
            fontSize={fontSize}
            fontWeight={fontWeight}
          >
            safe band (persistence)
          </text>

          {/* Current state marker (too cold: near lower edge of safe band) */}
          <circle cx="680" cy="290" r="10" fill={ok} />
          <text x="702" y="294" fill={textDim} fontSize="16" fontWeight="600">
            current state (near lower boundary)
          </text>

          {/* Same signal arrow: +2°C pushes upward INTO safer area */}
          <line x1="680" y1="290" x2="680" y2="250" stroke={accent} strokeWidth="3" markerEnd="url(#arrowSky)" />
          <text x="700" y="255" fill={textDim} fontSize="16" fontWeight="700">
            +2°C moves toward stability
          </text>

          {/* Meaning box (right) */}
          <rect x="610" y="385" width="420" height="75" rx="12" fill="#061025" stroke={border} />
          <text x="630" y="415" fill={textMain} fontSize="18" fontWeight="800">
            Meaning (for System B):
          </text>
          <text x="630" y="440" fill={textDim} fontSize="16" fontWeight="600">
            “relief / safer → act less (or conserve effort)”
          </text>

          {/* Bottom takeaway */}
          <rect x="70" y="470" width="960" height="36" rx="10" fill="#071a33" stroke="#1f2a44" />
          <text x="550" y="494" textAnchor="middle" fill={textMain} fontSize="16" fontWeight="700">
            Meaning is not in the signal alone — it arises from Signal × Value × Context → action relevance.
          </text>

          {/* Arrow markers */}
          <defs>
            <marker id="arrowRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill={danger} />
            </marker>
            <marker id="arrowSky" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill={accent} />
            </marker>
          </defs>
        </svg>

        {/* Text under diagram */}
        <div className="mt-6 text-slate-300 text-base max-w-5xl space-y-2">
          <p>
            The <strong>same</strong> incoming information (“+2°C”) produces different meaning because each
            system is in a different situation relative to its persistence band.
          </p>
          <p className="text-slate-400">
            IO takeaway: meaning is <em>constraint-relative relevance</em> — what a piece of information
            implies for staying inside (or leaving) the band.
          </p>
        </div>
      </div>
    </main>
  );
}
