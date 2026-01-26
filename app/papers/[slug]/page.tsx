import type { Metadata } from "next";
import Link from "next/link";
import papersData from "@/content/papers.json";

type PaperItem = {
  id: string;
  paper_no?: number;
  title: string;
  slug: string;
  pdf: string;
  blurb?: string;
  details?: string;
  abstract?: string;
};

type Section = {
  title: string;
  items: PaperItem[];
};

function getAllPapers(): Array<PaperItem & { sectionTitle: string }> {
  const sections = (papersData as any).sections as Section[];
  const out: Array<PaperItem & { sectionTitle: string }> = [];
  for (const s of sections) {
    for (const p of s.items) out.push({ ...p, sectionTitle: s.title });
  }
  return out;
}

function findPaperBySlug(slug: string): (PaperItem & { sectionTitle: string }) | null {
  return getAllPapers().find((p) => p.slug === slug) ?? null;
}

export function generateStaticParams() {
  return getAllPapers().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const paper = findPaperBySlug(params.slug);
  if (!paper) {
    return {
      title: "Paper | Informational Ontology",
    };
  }
  return {
    title: `${paper.title} | Informational Ontology`,
    description: paper.blurb || paper.details || "Paper abstract and download.",
  };
}

export default function PaperAbstractPage({ params }: { params: { slug: string } }) {
  const paper = findPaperBySlug(params.slug);
  if (!paper) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-14">
        <p className="text-sm text-black/65">Paper not found.</p>
        <div className="mt-6">
          <Link className="text-sm underline" href="/papers">
            Back to Papers
          </Link>
        </div>
      </div>
    );
  }

  const abstractText = paper.abstract?.trim();
  // If abstract isn’t supplied yet, we show a short placeholder and (optionally) the Details text.
  const fallback = paper.details?.trim();
  const paragraphs = abstractText
    ? abstractText.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)
    : [];

  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div className="min-w-[16rem]">
          <p className="text-xs uppercase tracking-[0.2em] text-black/55">Paper</p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{paper.title}</h1>
          <p className="mt-2 text-sm text-black/55">
            {paper.paper_no ? `Paper ${paper.paper_no} · ` : ""}
            {paper.sectionTitle}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={paper.pdf}
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 bg-ink text-paper"
            download
          >
            Download PDF
          </a>
          <Link
            href="/papers"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm text-black/70 hover:text-black"
          >
            Back to Papers
          </Link>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6">
        <h2 className="text-lg font-semibold">Abstract</h2>

        {paragraphs.length > 0 ? (
          <div className="mt-4 space-y-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-base text-black/75 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            <p className="text-base text-black/75 leading-relaxed">Abstract forthcoming.</p>
            {fallback ? (
              <p className="text-sm text-black/60 leading-relaxed">{fallback}</p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
