import ChainNav from "../ChainNav";

export default function ValuePage() {
  const bandTextFill = "#e6f0ff";
  const bandTextSize = 20;
  const bandTextWeight = 600;

  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Simulations · V</p>
        <h1 className="text-3xl font-bold tracking-tight">V — Value</h1>
        <p className="max-w-3xl text-black/70">
          In IO, <strong>value</strong> is not a preference or moral claim. It is a{" "}
          <strong>persistence constraint</strong>: a structural condition that must remain
          satisfied for the system to continue.
        </p>
        <p className="text-sm text-black/45">
          The diagram below is intentionally simple. It is an intuition builder, not a proof.
        </p>
      </div>

      <div className="rounded-2xl bg-[#0b1222] p-8 border border-slate-700">
        <h2 className="text-xl font-semibold mb-6 text-white">
          V — Value as a Persistence Constraint
        </h2>

        <svg
          viewBox="0 0 1000 360"
          className="w-full h-auto"
          aria-label="Value as persistence constraint diagram"
        >
          <rect x="0" y="0" width="1000" height="90" fill="#4a1e1e" />
          <rect x="0" y="270" width="1000" height="90" fill="#4a1e1e" />
          <rect x="0" y="90" width="1000" height="180" fill="#1f3b5f" />

          <text x="24" y="55" fill="#ffb4b4" fontSize="18" fontWeight="600">failure region</text>
          <text x="24" y="325" fill="#ffb4b4" fontSize="18" fontWeight="600">failure region</text>

          <path
            d="M 0 180 C 150 170, 300 185, 450 175 C 600 165, 720 185, 820 205 C 900 225, 950 260, 1000 300"
            fill="none" stroke="#7cb8ff" strokeWidth="4"
          />

          <text x="360" y="138" textAnchor="middle" fill={bandTextFill} fontSize={bandTextSize} fontWeight={bandTextWeight}>
            internal state over time
          </text>
          <line x1="360" y1="145" x2="360" y2="176" stroke={bandTextFill} strokeWidth="2" markerEnd="url(#arrowWhite)" />

          <line x1="360" y1="212" x2="640" y2="212" stroke={bandTextFill} strokeWidth="4" strokeLinecap="round" />
          <text x="500" y="206" textAnchor="middle" fill={bandTextFill} fontSize={bandTextSize} fontWeight={bandTextWeight}>
            safe band (persistence satisfied)
          </text>

          <text x="760" y="120" fill="#ffb4b4" fontSize="18" fontWeight="700">exits band → fails</text>
          <line x1="830" y1="130" x2="950" y2="270" stroke="#ff6b6b" strokeWidth="2.5" markerEnd="url(#arrowRed)" />

          <defs>
            <marker id="arrowRed" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ff6b6b" />
            </marker>
            <marker id="arrowWhite" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill={bandTextFill} />
            </marker>
          </defs>
        </svg>

        <div className="mt-6 text-slate-300 text-base max-w-5xl space-y-2">
          <p>
            Value (V) in IO is not preference or desire. It is the structural condition that must
            remain satisfied for the system to continue.
          </p>
          <p className="text-slate-400">
            The system does not &ldquo;aim&rdquo; for the band — it simply ceases to persist when the
            constraint is violated.
          </p>
        </div>
      </div>
    </div>
  );
}
