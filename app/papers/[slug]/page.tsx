import { notFound } from "next/navigation";
import papersData from "@/content/papers.json";

type PaperItem = {
  id: string;
  paper_no?: number;
  title: string;
  slug: string;
  pdf: string;
  blurb?: string;
};

export default function PaperDetailPage({ params }: { params: { slug: string } }) {
  const sections = (papersData as any).sections as { title: string; items: PaperItem[] }[];
  const all = sections.flatMap((s) => s.items);
  const paper = all.find((p) => p.slug === params.slug);

  if (!paper) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">
          {paper.paper_no ? `Paper ${paper.paper_no}` : "Paper"}
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{paper.title}</h1>
        {paper.blurb ? <p className="mt-5 text-lg text-black/70 leading-relaxed">{paper.blurb}</p> : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={paper.pdf} className="no-underline inline-flex items-center rounded-2xl px-4 py-2 bg-ink text-paper" download>
            Download PDF
          </a>
          <a
            href={paper.pdf}
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15"
            target="_blank"
            rel="noreferrer"
          >
            Open in new tab
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6">
          <p className="text-sm text-black/65">
            This page is a placeholder for future enhancements: abstract, citations, dependency links, and a web-readable version.
          </p>
        </div>
      </div>
    </div>
  );
}
