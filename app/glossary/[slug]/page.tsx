import Link from "next/link";
import { notFound } from "next/navigation";

const TERMS: Record<
  string,
  { term: string; short: string; body: string[] }
> = {
  alignment: {
    term: "Alignment",
    short: "Here: structural compatibility between systems, not shared goals or values.",
    body: [
      "In this project, “alignment” is used in a restricted sense: whether two systems can operate under compatible constraints without loss of coherence.",
      "This is not a claim that alignment is solved in general, nor a claim about shared intentions, values, or goals.",
      "Where the word appears on the site, it is either used in this restricted sense or clearly marked when used in a broader, everyday sense.",
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
