"use client";

export default function ValueConstraintDiagram() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl border border-white/10 bg-black/30 p-6">
      <h3 className="mb-4 text-lg font-semibold text-slate-100">
        V — Value as a Persistence Constraint
      </h3>

      <svg
        viewBox="0 0 1000 300"
        className="w-full h-auto rounded-lg bg-slate-950"
        aria-label="Value as persistence constraint diagram"
      >
        {/* Failure regions */}
        <rect x="0" y="0" width="1000" height="60" fill="#3f1d1d" />
        <rect x="0" y="240" width="1000" height="60" fill="#3f1d1d" />

        {/* Safe band */}
        <rect x="0" y="80" width="1000" height="140" fill="#1e3a5f" />

        {/* Safe band label (bottom of band) */}
        <text
          x="500"
          y="205"
          textAnchor="middle"
          className="fill-slate-200 text-[18px] font-medium"
        >
          safe band (persistence satisfied)
        </text>

        {/* Failure labels */}
        <text
          x="20"
          y="38"
          className="fill-red-300 text-[16px] font-medium"
        >
          failure region
        </text>

        <text
          x="20"
          y="278"
          className="fill-red-300 text-[16px] font-medium"
        >
          failure region
        </text>

        {/* Internal state trajectory */}
        <path
          d="
            M 60 160
            C 220 150, 360 165, 500 155
            C 620 145, 720 170, 780 185
            C 820 200, 860 225, 900 255
          "
          fill="none"
          stroke="#60a5fa"
          strokeWidth="4"
        />

        {/* Red excursion segment */}
        <path
          d="M 820 200 C 860 225, 900 255"
          fill="none"
          stroke="#f87171"
          strokeWidth="4"
        />

        {/* Trajectory callout */}
        <line
          x1="360"
          y1="150"
          x2="360"
          y2="110"
          stroke="#cbd5f5"
          strokeWidth="1.5"
        />
        <rect
          x="260"
          y="80"
          width="200"
          height="34"
          rx="6"
          fill="#020617"
          stroke="#334155"
        />
        <text
          x="360"
          y="103"
          textAnchor="middle"
          className="fill-slate-200 text-[14px]"
        >
          internal state over time
        </text>

        {/* Exit band annotation */}
        <line
          x1="840"
          y1="220"
          x2="760"
          y2="190"
          stroke="#f87171"
          strokeWidth="1.5"
        />
        <text
          x="700"
          y="190"
          textAnchor="end"
          className="fill-red-300 text-[16px] font-medium"
        >
          exits band → fails
        </text>
      </svg>

      <div className="mt-4 text-sm text-slate-300 space-y-2">
        <p>
          <strong>Value (V)</strong> in IO is not preference or desire. It is the
          condition that must remain satisfied for the system to continue.
        </p>
        <p>
          The system does not “aim” for the band — it simply ceases to persist
          when the constraint is violated.
        </p>
      </div>
    </div>
  );
}
