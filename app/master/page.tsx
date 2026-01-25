import Link from "next/link";
import sectionsData from "@/content/master/sections.json";

type Section = { slug: string; title: string };

export default function MasterPage() {
  const sections = (sectionsData as any).sections as Section[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">The Master</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Informational Ontology — Web Reader
        </h1>
        <p className="mt-4 text-black/70 leading-relaxed">
          The Master is shown verbatim. Optional explanations are collapsed by default and can be opened exactly where they’re needed.
          PDF downloads remain on <Link href="/papers" className="underline">/papers</Link>.
        </p>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6">
          <h2 className="text-lg font-semibold">Read by section</h2>
          <p className="mt-2 text-sm text-black/65">
            Start with the regime chain. We’ll expand the rest of the Master section-by-section once the interaction model feels right.
          </p>

          <div className="mt-6 divide-y divide-black/10 rounded-2xl border border-black/10 bg-paper">
            {sections.map((s) => (
              <div key={s.slug} className="p-5 flex items-center justify-between gap-6 flex-wrap">
                <div className="text-base font-medium">{s.title}</div>
                <Link
                  href={`/master/${s.slug}`}
                  className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
                >
                  Open
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/glossary" className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15">
              Glossary
            </Link>
            <Link href="/papers" className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15">
              Downloads (/papers)
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-black/45">
          Source files: <code className="bg-black/5 px-1.5 py-0.5 rounded">content/master/*.txt</code> (canonical text) and{" "}
          <code className="bg-black/5 px-1.5 py-0.5 rounded">content/master/*.explain.json</code> (optional explanations).
        </p>
      </div>
    </div>
  );
}
