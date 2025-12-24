export default function ValueVisualAid() {
  return (
    <main className="min-h-screen bg-[#050914] text-white px-8 py-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="text-sky-400 text-sm mb-2">Visual aids · V</div>
        <h1 className="text-4xl font-semibold mb-4">V — Value</h1>
        <p className="text-lg text-slate-300 max-w-4xl">
          In Informational Ontology, <strong>value</strong> is not preference or desire.
          It is a <strong>persistence constraint</strong>: a condition that must remain
          satisfied for a system to continue existing.
        </p>
        <p className="text-slate-400 mt-2">
          This diagram is intentionally simple. It is an intuition builder, not a proof.
        </p>
      </div>

      {/* Diagram Card */}
      <div className="max-w-6xl mx-auto bg-[#0b1222] rounded-xl p-8 border border-slate-700">
        <h2 className="text-xl font-semibold mb-6">
          V — Value as a Persistence Constraint
        </h2>

        {/* SVG Diagram */}
        <svg
          viewBox="0 0 1000 360"
          className="w-full h-auto"
          aria-label="Value as persistence band diagram"
        >
          {/* Failure regions */}
          <rect x="0" y="0" width="1000" height="90" fill="#4a1e1e" />
          <rect x="0" y="270" width="1000" height="90" fill="#4a1e1e" />

          {/* Failure region labels */}
          <text
            x="24"
            y="55"
            fill="#ffb4b4"
            fontSize="18"
            fontWeight="500"
          >
            failure region
          </text>
          <text
            x="24"
            y="325"
            fill="#ffb4b4"
            fontSize="18"
            fontWeight="500"
          >
            failure region
          </text>

          {/* Safe band */}
          <rect x="0" y="90" width="1000" height="180" fill="#1f3b5f" />

          {/* Safe band label */}
          <text
            x="500"
            y="190"
            textAnchor="middle"
            fill="#e6f0ff"
            fontSize="20"
            fontWeight="500"
          >
            safe band (persistence satisfied)
          </text>

          {/* Internal state trajectory */}
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

          {/* Trajectory label */}
          <line
            x1="360"
            y1="150"
            x2="360"
            y2="175"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <rect
            x="260"
            y="118"
            width="200"
            height="28"
            rx="6"
            fill="#020617"
            stroke="#475569"
          />
          <text
            x="360"
            y="138"
            textAnchor="middle"
            fill="#e5e7eb"
            fontSize="14"
          >
            internal state over time
          </text>

          {/* Exit annotation */}
          <line
            x1="900"
            y1="230"
            x2="840"
            y2="205"
            stroke="#ff6b6b"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <text
            x="910"
            y="235"
            fill="#ffb4b4"
            fontSize="16"
            fontWeight="500"
          >
            exits band → fails
          </text>

          {/* Arrow marker */}
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b6b" />
            </marker>
          </defs>
        </svg>

        {/* Explanatory text */}
        <div className="mt-6 text-slate-300 text-base max-w-5xl">
          <p className="mb-2">
            Value (V) in Informational Ontology names the constraint that must remain
            satisfied for persistence. The system does not “aim” for the band —
            it simply ceases to persist when the constraint is violated.
          </p>
          <p className="text-slate-400">
            IO takeaway: <em>“Value” names the boundary condition, not a feeling,
            preference, or goal.</em>
          </p>
        </div>
      </div>
    </main>
  );
}
