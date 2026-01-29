import Link from "next/link";

const TERMS = [
  { slug: "difference", term: "Difference (Δ)", short: "Minimal ontological starting point: to exist is to differ." },
  { slug: "relation", term: "Relation (R)", short: "Differences articulated together: contrasts, boundaries, gradients, patterns." },
  { slug: "information", term: "Information (I)", short: "Re-identifiable structured difference: patterns that persist under selection/ordering." },
  { slug: "awareness", term: "Awareness (A)", short: "Constraint-sensitive tracking: integrated information that updates across states." },
  { slug: "value", term: "Value (V)", short: "Selective stability: better/worse emerges for a system relative to persistence." },
  { slug: "meaning", term: "Meaning (M)", short: "Coordinated constraint: value-structured patterns that guide expectation and action." },
  { slug: "purpose", term: "Purpose (P)", short: "Trajectory-level direction: meaning and value constraining future states without teleology." },
  { slug: "constraint", term: "Constraint", short: "Structure that limits possible transitions; internal to organization, not an external force." },
  { slug: "regime", term: "Regime", short: "A stable constraint-pattern that organizes transitions (e.g., epistemic, ethical, salience regimes)." },
  { slug: "salience", term: "Salience", short: "A constraint over attention/availability: what gets registered, amplified, and acted on." },
  { slug: "degeneracy", term: "Degeneracy", short: "Underdetermination where multiple distinct configurations are equally viable under constraints." },
  { slug: "underdetermination", term: "Underdetermination", short: "Local non-uniqueness: constraints do not uniquely fix the next state or interpretation." },
  { slug: "alignment", term: "Alignment", short: "Here: structural compatibility between systems, not shared goals or values." },
];

export default function GlossaryIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Glossary</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Terms and definitions
        </h1>
        <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed">
          Glossary entries are available for terms that have project-specific meanings or where a common word is used in an uncommon way.
        </p>

        <div className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/10 bg-paper">
          {TERMS.map((t) => (
            <div key={t.slug} className="p-5">
              <div className="flex items-baseline justify-between gap-6 flex-wrap">
                <div className="text-base font-medium">{t.term}</div>
                <Link
                  href={`/glossary/${t.slug}`}
                  className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
                >
                  Open
                </Link>
              </div>
              <p className="mt-2 text-sm text-black/65 leading-relaxed">{t.short}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
