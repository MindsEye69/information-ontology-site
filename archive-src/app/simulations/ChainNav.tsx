import Link from "next/link";

const CHAIN = [
  { symbol: "Δ", label: "Difference", href: "/simulations/delta" },
  { symbol: "R", label: "Relation", href: "/simulations/relation" },
  { symbol: "I", label: "Information", href: "/simulations/information" },
  { symbol: "A", label: "Awareness", href: "/simulations/awareness" },
  { symbol: "V", label: "Value", href: "/simulations/value" },
  { symbol: "M", label: "Meaning", href: "/simulations/meaning" },
  { symbol: "P", label: "Purpose", href: "/simulations/purpose" },
];

export default function ChainNav() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
      <div className="text-xs font-semibold tracking-wide text-slate-400">
        IO Chain
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {CHAIN.map((c, i) => (
          <div key={c.symbol} className="flex items-center gap-3">
            <Link
              href={c.href}
              className="group flex flex-col items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/60 px-5 py-4 hover:border-slate-600"
              title={c.label}
            >
              <div className="text-4xl font-extrabold tracking-tight text-slate-50">
                {c.symbol}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-400 group-hover:text-slate-200">
                {c.label}
              </div>
            </Link>

            {i < CHAIN.length - 1 && (
              <div className="text-2xl font-bold text-slate-600">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
