import { notFound } from "next/navigation";
import papersData from "@/content/papers.json";

type PaperStatus = "released" | "in_production";

type PaperItem = {
  id: string;
  paper_no?: number;
  title: string;
  slug: string;
  status: PaperStatus;
  state?: string;
  doi?: string | null;
  zenodo?: string | null;
  pdf?: string | null;
  summary?: string;
  function?: string;
  details?: string;
};

type Group = {
  id: string;
  title: string;
  items: PaperItem[];
};

function hasPdf(p: PaperItem): p is PaperItem & { pdf: string } {
  return typeof p.pdf === "string" && p.pdf.trim().length > 0;
}

function hasZenodo(p: PaperItem): p is PaperItem & { zenodo: string } {
  return typeof p.zenodo === "string" && p.zenodo.trim().length > 0;
}

function StatusPill({ status, state }: { status: PaperStatus; state?: string }) {
  const label =
    status === "released"
      ? "Released"
      : state === "complete_unpublished"
      ? "In production (complete)"
      : "In production";
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs text-black/70">
      {label}
    </span>
  );
}

export default function PaperDetailPage({ params }: { params: { slug: string } }) {
  const exec = (papersData as any).executive_summary as PaperItem;
  const groups = (papersData as any).groups as Group[];

  const all = [exec, ...groups.flatMap((g) => g.items)];
  const paper = all.find((p) => p.slug === params.slug);
  const group = groups.find((g) => g.items.some((p) => p.slug === params.slug));

  if (!paper) return notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">
          {paper.paper_no ? `Paper ${paper.paper_no}` : "Document"}
          {group?.title ? ` · ${group.title}` : ""}
        </p>

        <div className="mt-3 flex items-start justify-between gap-6 flex-wrap">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{paper.title}</h1>
          <StatusPill status={paper.status} state={paper.state} />
        </div>

        {paper.summary ? <p className="mt-5 text-lg text-black/70 leading-relaxed">{paper.summary}</p> : null}

        <div className="mt-8 flex flex-wrap gap-3">
          {hasZenodo(paper) ? (
            <a
              href={paper.zenodo}
              className="no-underline inline-flex items-center rounded-2xl px-4 py-2 bg-ink text-paper"
              target="_blank"
              rel="noreferrer"
            >
              View on Zenodo
            </a>
          ) : null}

          {hasPdf(paper) ? (
            <a
              href={paper.pdf}
              className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15"
              target="_blank"
              rel="noreferrer"
            >
              View PDF
            </a>
          ) : null}

          {hasPdf(paper) ? (
            <a
              href={paper.pdf}
              className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15"
              download
            >
              Download PDF
            </a>
          ) : null}

          <a
            href="/papers"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-black/70 hover:text-black"
          >
            Back to corpus
          </a>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 space-y-4">
          {paper.doi ? (
            <p className="text-sm text-black/70">
              <span className="font-medium">DOI:</span> {paper.doi}
            </p>
          ) : null}

          {paper.function ? (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/55">Function in corpus</p>
              <p className="mt-2 text-sm text-black/70 leading-relaxed">{paper.function}</p>
            </div>
          ) : null}

          {!hasPdf(paper) && !hasZenodo(paper) ? (
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-black/55">Availability</p>
              <p className="mt-2 text-sm text-black/70 leading-relaxed">
                This paper is listed for orientation and dependency tracking. No public PDF or Zenodo record is linked yet.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
