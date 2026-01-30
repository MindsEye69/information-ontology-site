import Link from "next/link";
import { notFound } from "next/navigation";

const TERMS: Record<string, { term: string; short: string; body: string[] }> = {
  "difference": {
    "term": "Difference (Δ)",
    "short": "The minimal condition of non-identity: if nothing differs, nothing can be tracked, related, stabilized, or described.",
    "body": [
      "The minimal condition of non-identity: if nothing differs, nothing can be tracked, related, stabilized, or described."
    ]
  },
  "relation": {
    "term": "Relation (R)",
    "short": "The structured contrasts, boundaries, and gradients among differences. Relation is not added to difference; it is what it means for diffe…",
    "body": [
      "The structured contrasts, boundaries, and gradients among differences. Relation is not added to difference; it is what it means for differences to stand in contrast."
    ]
  },
  "information": {
    "term": "Information (I)",
    "short": "Structured difference that rules in and rules out possibilities. Information is structural: it does not require an observer, language, or…",
    "body": [
      "Structured difference that rules in and rules out possibilities. Information is structural: it does not require an observer, language, or semantic interpretation."
    ]
  },
  "awareness": {
    "term": "Awareness (A)",
    "short": "Informational registration: information is taken up internally so that the system’s informational state constrains its future state-space…",
    "body": [
      "Informational registration: information is taken up internally so that the system’s informational state constrains its future state-space. This is a minimal structural notion (not a theory of phenomenal consciousness)."
    ]
  },
  "value": {
    "term": "Value (V)",
    "short": "Differential constraint on awareness: some continuations preserve a system’s organization and others degrade it. Value is “better/worse f…",
    "body": [
      "Differential constraint on awareness: some continuations preserve a system’s organization and others degrade it. Value is “better/worse for the system” before morality."
    ]
  },
  "meaning": {
    "term": "Meaning (M)",
    "short": "Structured value within awareness: patterns of value and expectation organized across contexts and over time. Meaning is not assumed to b…",
    "body": [
      "Structured value within awareness: patterns of value and expectation organized across contexts and over time. Meaning is not assumed to be representation or truth-conditions; those are later, optional specializations."
    ]
  },
  "purpose": {
    "term": "Purpose (P)",
    "short": "Value-guided meaningful trajectory: stable tendencies/projects in which meaning and value shape a system’s action over time without invok…",
    "body": [
      "Value-guided meaningful trajectory: stable tendencies/projects in which meaning and value shape a system’s action over time without invoking final causes or teleology as primitives."
    ]
  },
  "constraint": {
    "term": "Constraint",
    "short": "Structural restriction on what transitions are possible. In IO, constraint is not “a cause”; it is a shape of the state-space that filter…",
    "body": [
      "Structural restriction on what transitions are possible. In IO, constraint is not “a cause”; it is a shape of the state-space that filters continuation."
    ]
  },
  "ordering": {
    "term": "Ordering",
    "short": "A structural before/after relation that enables persistence and re-identification. Ordering is not assumed to be time as a substance; tim…",
    "body": [
      "A structural before/after relation that enables persistence and re-identification. Ordering is not assumed to be time as a substance; time is treated as a refinement of ordering under asymmetric constraint."
    ]
  },
  "degeneracy": {
    "term": "Degeneracy",
    "short": "Multiple distinct configurations that are equally viable under the current constraints (underdetermined next-step). Degeneracy forces res…",
    "body": [
      "Multiple distinct configurations that are equally viable under the current constraints (underdetermined next-step). Degeneracy forces resolution without smuggling in randomness, external choice, or goal-optimization."
    ]
  },
  "salience": {
    "term": "Salience",
    "short": "What becomes selectable/noticeable inside awareness. Salience shaping can structurally narrow an agent’s available transitions without co…",
    "body": [
      "What becomes selectable/noticeable inside awareness. Salience shaping can structurally narrow an agent’s available transitions without coercion."
    ]
  },
  "regime": {
    "term": "Regime",
    "short": "A stabilized level of organization defined by what constraints must hold for the system to persist and function at that level (e.g., info…",
    "body": [
      "A stabilized level of organization defined by what constraints must hold for the system to persist and function at that level (e.g., informational, awareness, value regimes)."
    ]
  },
  "alignment": {
    "term": "Structural compatibility (Alignment)",
    "short": "Compatibility between constraint regimes, not shared goals/values. Two systems are aligned when they can operate under mutually compatibl…",
    "body": [
      "Compatibility between constraint regimes, not shared goals/values. Two systems are aligned when they can operate under mutually compatible constraints without collapsing coherence or erasing the other’s action space."
    ]
  }
};

export default function GlossaryTermPage({ params }: { params: { slug: string } }) {
  const entry = TERMS[params.slug];
  if (!entry) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <Link href="/glossary" className="text-sm text-black/60 underline underline-offset-4">
          ← Back to glossary
        </Link>

        <h1 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight">{entry.term}</h1>
        <p className="mt-4 text-black/70 leading-relaxed">{entry.short}</p>

        <div className="mt-6 space-y-4 text-black/75 leading-relaxed">
          {entry.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
