
export default function GlossaryPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-6">Terminology & Regime Reference</h1>

      <p className="mb-6 text-sm text-gray-500">
        This glossary is provided for reader orientation only. It is not part of the
        canonical Revision 5 master and introduces no definitions or claims.
      </p>

      <p className="mb-10">
        Terms below function as labels for structural regimes of organization within
        the Informational Ontology and should be interpreted by their role in the
        regime ladder and the constraints governing their emergence.
      </p>

      <section className="space-y-6">
        <Entry term="Difference (Δ)">
          Minimal distinguishability sufficient to support structure. Difference is
          not a substance, object, or event.
        </Entry>

        <Entry term="Relation (R)">
          Structured ordering among differences. Relations articulate differences
          into persistent patterns.
        </Entry>

        <Entry term="Information (I)">
          Re-identifiable structured relations under constraint. Information is not
          semantic content or representation.
        </Entry>

        <Entry term="Awareness (A)">
          Localized informational registration within a system. Awareness does not
          imply consciousness or experience.
        </Entry>

        <Entry term="Value (V)">
          Persistent modulation of informational states under constraint. Value is
          not moral normativity or preference.
        </Entry>

        <Entry term="Meaning (M)">
          Stabilized informational patterns that constrain interpretation or
          response. Meaning is not linguistic semantics.
        </Entry>

        <Entry term="Purpose (P)">
          Sustained directional organization across informational states. Purpose is
          not intention or teleology-as-primitive.
        </Entry>
      </section>
    </main>
  );
}

function Entry({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-medium">{term}</h2>
      <p className="text-gray-700">{children}</p>
    </div>
  );
}
