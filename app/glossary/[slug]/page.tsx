import Link from "next/link";
import { notFound } from "next/navigation";

const TERMS: Record<
  string,
  { term: string; short: string; body: string[] }
> = {
  difference: {
    term: "Difference (\u0394)",
    short: "Minimal ontological starting point: to exist is to differ.",
    body: [
      "Difference (\u0394) is the minimal condition for anything to be at all. A world with no difference contains no distinctions, no structure, and no persistence.",
      "In IO, difference is not a concept about observers or measurement. It is the structural precondition for any further articulation.",
    ],
  },
  relation: {
    term: "Relation (R)",
    short: "Differences articulated together: contrasts, boundaries, gradients, patterns.",
    body: [
      "Relation (R) names the minimal articulation of differences together: contrasts, boundaries, gradients, and patterned co-variation.",
      "Relation is not an extra ingredient added to difference; it is what it means for differences to stand in contrast and constrain each other.",
    ],
  },
  information: {
    term: "Information (I)",
    short: "Re-identifiable structured difference: patterns that persist under selection/ordering.",
    body: [
      "Information (I) is re-identifiable structured difference: relational patterns stable enough to be distinguished from flux and to persist under ordering/selection.",
      "This is an ontological use of \u2018information\u2019\u2014not limited to minds, symbols, or communication.",
    ],
  },
  awareness: {
    term: "Awareness (A)",
    short: "Constraint-sensitive tracking: integrated information that updates across states.",
    body: [
      "Awareness (A) is constraint-sensitive tracking: information integrated such that it updates across states and conditions what happens next.",
      "This is a minimal structural notion (not human-level consciousness).",
    ],
  },
  value: {
    term: "Value (V)",
    short: "Selective stability: better/worse emerges for a system relative to persistence.",
    body: [
      "Value (V) arises when some states are better or worse for a system\u2019s continued organization and persistence.",
      "In IO, value is not mere preference-talk; it is a structural tilt over possible states relative to stability.",
    ],
  },
  meaning: {
    term: "Meaning (M)",
    short: "Coordinated constraint: value-structured patterns that guide expectation and action.",
    body: [
      "Meaning (M) is value structured into stable patterns that coordinate expectation and action.",
      "Meaning can exist without language or semantics: it is a way a system organizes what matters, when, and in which contexts.",
    ],
  },
  purpose: {
    term: "Purpose (P)",
    short: "Trajectory-level direction: meaning and value constraining future states without teleology.",
    body: [
      "Purpose (P) is trajectory-level direction: meaning and value constraining future states over time.",
      "IO rejects teleology: purpose is not the future \u2018pulling\u2019 the present, but present structure steering trajectories.",
    ],
  },
  constraint: {
    term: "Constraint",
    short: "Structure that limits possible transitions; internal to organization, not an external force.",
    body: [
      "Constraint is the structural limitation of possible transitions: what can change without dissolving, and which transitions are stable.",
      "Constraints are internal to organization; they are not an external \u2018force\u2019 added on top of physics.",
    ],
  },
  regime: {
    term: "Regime",
    short: "A stable constraint-pattern that organizes transitions (e.g., epistemic, ethical, salience regimes).",
    body: [
      "A regime is a relatively stable pattern of constraints that organizes transitions across time (e.g., an epistemic regime, ethical regime, or salience regime).",
      "Regimes are how higher-order stability is maintained: they filter, prioritize, and stabilize behavior.",
    ],
  },
  salience: {
    term: "Salience",
    short: "A constraint over attention/availability: what gets registered, amplified, and acted on.",
    body: [
      "Salience is the constraint structure that determines what becomes available for registration, attention, and action.",
      "High-salience channels can dominate downstream value/meaning, producing control, manipulation, or addiction-like lock-in.",
    ],
  },
  degeneracy: {
    term: "Degeneracy",
    short: "Underdetermination where multiple distinct configurations are equally viable under constraints.",
    body: [
      "Degeneracy is underdetermination where multiple distinct configurations are equally viable relative to the constraints in play.",
      "Resolution under degeneracy explains continuity without appealing to randomness or executive choice.",
    ],
  },
  underdetermination: {
    term: "Underdetermination",
    short: "Local non-uniqueness: constraints do not uniquely fix the next state or interpretation.",
    body: [
      "Underdetermination is local non-uniqueness: constraints do not uniquely fix a next state, interpretation, or selection.",
      "IO treats many \u2018open\u2019 phenomena as perspectival openness under constraint, compatible with global determinism.",
    ],
  },
  alignment: {
    term: "Alignment",
    short: "Here: structural compatibility between systems, not shared goals or values.",
    body: [
      "In this project, \u201calignment\u201d is used in a restricted sense: whether two systems can operate under compatible constraints without loss of coherence.",
      "This is not a claim that alignment is solved in general, nor a claim about shared intentions, values, or goals.",
    ],
  },
};

export default function GlossaryEntry({ params }: { params: { slug: string } }) {
  const entry = TERMS[params.slug];
  if (!entry) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Glossary</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          {entry.term}
        </h1>
        <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed">
          {entry.short}
        </p>

        <div className="mt-10 space-y-4 rounded-2xl border border-black/10 bg-paper p-6 md:p-8">
          {entry.body.map((p) => (
            <p key={p} className="text-sm md:text-base text-black/75 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/glossary"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Back to glossary
          </Link>
          <Link
            href="/process"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            The Project as Process
          </Link>
        </div>
      </div>
    </div>
  );
}
