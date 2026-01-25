import glossary from "@/content/glossary.json";

type Term = { term: string; definition: string };

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/\s+/g, "-");
}

export default function GlossaryPage() {
  const terms = (glossary as any).terms as Term[];
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Glossary</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Key terms</h1>
        <p className="mt-4 text-black/70 leading-relaxed">
          This glossary defines complex terms and terms with special IO meanings. (Placeholder list—will be expanded from the finalized corpus.)
        </p>

        <div className="mt-10 divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/60">
          {terms.map((t) => (
            <div key={t.term} id={slugify(t.term)} className="p-5 scroll-mt-24">
              <div className="text-base font-medium">{t.term}</div>
              <div className="mt-2 text-sm text-black/70 leading-relaxed">{t.definition}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
