import Link from "next/link";

const TERMS = [
  {
    slug: "alignment",
    term: "Alignment",
    short: "Here: structural compatibility between systems, not shared goals or values.",
  },
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
