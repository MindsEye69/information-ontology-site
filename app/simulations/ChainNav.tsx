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
    <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
      <div className="text-xs font-semibold tracking-wide text-black/45">
        IO Chain
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {CHAIN.map((c, i) => (
          <div key={c.symbol} className="flex items-center gap-3">
            <Link
              href={c.href}
              className="group flex flex-col items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-4 hover:border-black/25 hover:bg-black/5"
              title={c.label}
            >
              <div className="text-4xl font-extrabold tracking-tight text-black">
                {c.symbol}
              </div>
              <div className="mt-1 text-xs font-semibold text-black/45 group-hover:text-black/70">
                {c.label}
              </div>
            </Link>

            {i < CHAIN.length - 1 && (
              <div className="text-2xl font-bold text-black/25">→</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
