export default function ValuePage() {
  // Styling constants so "in-band" text is uniform
  const bandTextFill = "#e6f0ff";
  const bandTextSize = 20; // matches your current safe band size intent
  const bandTextWeight = 600;

  return (
    <main className="min-h-screen bg-[#050914] text-white px-8 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="text-sky-400 text-sm mb-2">Visual aids · V</div>
        <h1 className="text-4xl font-semibold mb-4">V — Value</h1>
        <p className="text-lg text-slate-300 max-w-4xl">
          In Informational Ontology, <strong>value</strong> is not a preference or moral claim.
          It is a <strong>persistence constraint</strong>: a condition that must remain
          satisfied for the system to keep existing.
        </p>
        <p className="text-slate-400 mt-2">
          The diagram below is intentionally simple. It is an intuition builder, not a proof.
        </p>
      </div>

      {/* Diagram Card */}
      <div className="max-w-6xl mx-auto bg-[#0b1222] rounded-xl p-8 border border-slate-700">
        <h2 className="text-xl font-semibold mb-6">
          V — Value as a Persistence Constraint
        </h2>

        <svg
          viewBox="0 0 1000 360"
          className="w-full h-auto"
          aria-label="Value as persistence constraint diagram"
        >
          {/* Failure regions (touch the safe band directly — no barrier) */}
          <rect x="0" y="0" width="1000" height="90" fill="#4a1e1e" />
          <rect x="0" y="270" width="1000" height="90" fill="#4a1e1e" />

          {/* Safe band */}
          <rect x="0" y="90" width="1000" height="180" fill="#1f3b5f" />

          {/* Failure labels */}
          <text x="24" y="55" fill="#ffb4b4" fontSize="18" fontWeight="600">
            failure region
          </text>
          <text x="24" y="325" fill="#ffb4b4" fontSize="18" fontWeight="600">
            failure region
          </text>

          {/* Safe band label (uniform style) */}
          <text
            x="500"
            y="205"
            textAnchor="middle"
            fill={bandTextFill}
            fontSize={bandTextSize}
            fontWeight={bandTextWeight}
          >
            safe band (persistence satisfied)
          </text>

          {/* Internal state trajectory (starts at left edge) */}
          <path
            d="
              M 0 180
              C 150 170, 300 185, 450 175
              C 600 165, 720 185, 820 205
              C 900 225, 950 260, 1000 300
            "
            fill="none"
            stroke="#7cb8ff"
            strokeWidth="4"
          />

          {/* "Internal state over time" label (uniform style, white, no black pill) */}
          <text
            x="360"
            y="140"
            textAnchor="middle"
            fill={bandTextFill}
            fontSize={bandTextSize}
            fontWeight={bandTextWeight}
          >
            internal state over time
          </text>

          {/* Clear arrow from label to the line */}
          <line
            x1="360"
            y1="150"
            x2="360"
            y2="176"
            stroke={bandTextFill}
            strokeWidth="2"
            markerEnd="url(#arrowWhite)"
          />

          {/* Exit annotation (higher, with arrow to exact crossing point) */}
          {/*
            The safe band lower boundary is y=270.
            We point to (950,270) — the curve is crossing into failure around there visually.
          */}
          <text
            x="820"
            y="135"
            textAnchor="start"
            fill="#ffb4b4"
            fontSize="18"
            fontWeight="700"
          >
            exits band → fails
          </text>

          <line
            x1="900"
            y1="145"
            x2="950"
            y2="270"
            stroke="#ff6b6b"
            strokeWidth="2.5"
            markerEnd="url(#arrowRed)"
          />

          {/* Arrow markers */}
          <defs>
            <marker
              id="arrowRed"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b6b" />
            </marker>

            <marker
              id="arrowWhite"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={bandTextFill} />
            </marker>
          </defs>
        </svg>

        <div className="mt-6 text-slate-300 text-base max-w-5xl">
          <p className="mb-2">
            Value (V) in IO is not preference or desire. It is the condition that must
            remain satisfied for the system to continue.
          </p>
          <p className="text-slate-400">
            The system does not “aim” for the band — it simply ceases to persist when the
            constraint is violated.
          </p>
        </div>
      </div>
    </main>
  );
}
