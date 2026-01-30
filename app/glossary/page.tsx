import Link from "next/link";

const TERMS: Array<{ slug: string; term: string; short: string; body: string[] }> = [
  {
    "slug": "difference",
    "term": "Difference (Δ)",
    "short": "The minimal condition of non-identity: if nothing differs, nothing can be tracked, related, stabilized, or described.",
    "body": [
      "The minimal condition of non-identity: if nothing differs, nothing can be tracked, related, stabilized, or described."
    ]
  },
  {
    "slug": "relation",
    "term": "Relation (R)",
    "short": "The structured contrasts, boundaries, and gradients among differences. Relation is not added to difference; it is what it means for diffe…",
    "body": [
      "The structured contrasts, boundaries, and gradients among differences. Relation is not added to difference; it is what it means for differences to stand in contrast."
    ]
  },
  {
    "slug": "information",
    "term": "Information (I)",
    "short": "Structured difference that rules in and rules out possibilities. Information is structural: it does not require an observer, language, or…",
    "body": [
      "Structured difference that rules in and rules out possibilities. Information is structural: it does not require an observer, language, or semantic interpretation."
    ]
  },
  {
    "slug": "awareness",
    "term": "Awareness (A)",
    "short": "Informational registration: information is taken up internally so that the system’s informational state constrains its future state-space…",
    "body": [
      "Informational registration: information is taken up internally so that the system’s informational state constrains its future state-space. This is a minimal structural notion (not a theory of phenomenal consciousness)."
    ]
  },
  {
    "slug": "value",
    "term": "Value (V)",
    "short": "Differential constraint on awareness: some continuations preserve a system’s organization and others degrade it. Value is “better/worse f…",
    "body": [
      "Differential constraint on awareness: some continuations preserve a system’s organization and others degrade it. Value is “better/worse for the system” before morality."
    ]
  },
  {
    "slug": "meaning",
    "term": "Meaning (M)",
    "short": "Structured value within awareness: patterns of value and expectation organized across contexts and over time. Meaning is not assumed to b…",
    "body": [
      "Structured value within awareness: patterns of value and expectation organized across contexts and over time. Meaning is not assumed to be representation or truth-conditions; those are later, optional specializations."
    ]
  },
  {
    "slug": "purpose",
    "term": "Purpose (P)",
    "short": "Value-guided meaningful trajectory: stable tendencies/projects in which meaning and value shape a system’s action over time without invok…",
    "body": [
      "Value-guided meaningful trajectory: stable tendencies/projects in which meaning and value shape a system’s action over time without invoking final causes or teleology as primitives."
    ]
  },
  {
    "slug": "constraint",
    "term": "Constraint",
    "short": "Structural restriction on what transitions are possible. In IO, constraint is not “a cause”; it is a shape of the state-space that filter…",
    "body": [
      "Structural restriction on what transitions are possible. In IO, constraint is not “a cause”; it is a shape of the state-space that filters continuation."
    ]
  },
  {
    "slug": "ordering",
    "term": "Ordering",
    "short": "A structural before/after relation that enables persistence and re-identification. Ordering is not assumed to be time as a substance; tim…",
    "body": [
      "A structural before/after relation that enables persistence and re-identification. Ordering is not assumed to be time as a substance; time is treated as a refinement of ordering under asymmetric constraint."
    ]
  },
  {
    "slug": "degeneracy",
    "term": "Degeneracy",
    "short": "Multiple distinct configurations that are equally viable under the current constraints (underdetermined next-step). Degeneracy forces res…",
    "body": [
      "Multiple distinct configurations that are equally viable under the current constraints (underdetermined next-step). Degeneracy forces resolution without smuggling in randomness, external choice, or goal-optimization."
    ]
  },
  {
    "slug": "salience",
    "term": "Salience",
    "short": "What becomes selectable/noticeable inside awareness. Salience shaping can structurally narrow an agent’s available transitions without co…",
    "body": [
      "What becomes selectable/noticeable inside awareness. Salience shaping can structurally narrow an agent’s available transitions without coercion."
    ]
  },
  {
    "slug": "regime",
    "term": "Regime",
    "short": "A stabilized level of organization defined by what constraints must hold for the system to persist and function at that level (e.g., info…",
    "body": [
      "A stabilized level of organization defined by what constraints must hold for the system to persist and function at that level (e.g., informational, awareness, value regimes)."
    ]
  },
  {
    "slug": "alignment",
    "term": "Structural compatibility (Alignment)",
    "short": "Compatibility between constraint regimes, not shared goals/values. Two systems are aligned when they can operate under mutually compatibl…",
    "body": [
      "Compatibility between constraint regimes, not shared goals/values. Two systems are aligned when they can operate under mutually compatible constraints without collapsing coherence or erasing the other’s action space."
    ]
  }
];

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Glossary</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Core terms</h1>

        <p className="mt-5 text-black/70 leading-relaxed">
          These are short, structural definitions for how the site uses key terms. Where a common word is used in an uncommon way, this glossary is the reference.
        </p>

        <div className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/10 bg-paper">
          {TERMS.map((t) => (
            <details key={t.slug} className="group p-5">
              <summary className="cursor-pointer list-none select-none">
                <div className="flex items-baseline justify-between gap-6 flex-wrap">
                  <div className="text-base font-medium">{t.term}</div>
                  <span className="text-sm text-black/45 group-open:hidden">Open</span>
                  <span className="text-sm text-black/45 hidden group-open:inline">Close</span>
                </div>
                <p className="mt-2 text-sm text-black/65 leading-relaxed">{t.short}</p>
              </summary>

              <div className="mt-4 space-y-3 text-black/75 leading-relaxed">
                {t.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <div className="pt-2">
                  <Link className="text-sm underline underline-offset-4 text-black/60" href={`/glossary/${t.slug}`}>
                    Permalink
                  </Link>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
