import Link from "next/link";
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
};

type Group = {
  id: string;
  title: string;
  items: PaperItem[];
};

function hasPdf(item: PaperItem): item is PaperItem & { pdf: string } {
  return typeof item.pdf === "string" && item.pdf.trim().length > 0;
}

function hasZenodo(item: PaperItem): item is PaperItem & { zenodo: string } {
  return typeof item.zenodo === "string" && item.zenodo.trim().length > 0;
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

export default function PapersPage() {
  const meta = (papersData as any).meta as {
    title: string;
    subtitle?: string;
    total_papers?: number;
    released_papers?: number;
  };
  const exec = (papersData as any).executive_summary as PaperItem;
  const groups = (papersData as any).groups as Group[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Corpus</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          {meta?.title ?? "The Corpus"}
        </h1>
        {meta?.subtitle ? <p className="mt-2 text-sm text-black/60">{meta.subtitle}</p> : null}

        <p className="mt-4 text-black/70 leading-relaxed">
          The corpus is in active production. Action buttons appear automatically when a PDF and/or Zenodo record is
          available.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {typeof meta?.released_papers === "number" ? (
            <span className="text-xs text-black/55 rounded-full border border-black/10 bg-white/60 px-3 py-1">
              {meta.released_papers} released
            </span>
          ) : null}
          {typeof meta?.total_papers === "number" ? (
            <span className="text-xs text-black/55 rounded-full border border-black/10 bg-white/60 px-3 py-1">
              {meta.total_papers} total
            </span>
          ) : null}
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="min-w-[16rem]">
              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-lg font-semibold">Executive Summary</h2>
                <StatusPill status={exec.status} state={exec.state} />
              </div>
              <p className="mt-2 text-sm text-black/65 leading-relaxed">
                {exec.summary ??
                  "High-level structural orientation to the project and corpus map (non-numbered)."}
              </p>
              {exec.function ? <p className="mt-2 text-xs text-black/50">{exec.function}</p> : null}
            </div>

            <div className="flex items-center gap-2">
              {hasZenodo(exec) ? (
                <a
                  href={exec.zenodo}
                  className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zenodo
                </a>
              ) : null}

              {hasPdf(exec) ? (
                <a
                  href={exec.pdf}
                  className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              ) : null}

              {hasPdf(exec) ? (
                <a
                  href={exec.pdf}
                  className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
                  download
                >
                  Download
                </a>
              ) : null}

              <Link
                href={`/papers/${exec.slug}`}
                className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm text-black/70 hover:text-black"
              >
                Details
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-10">
          {groups.map((group) => (
            <section key={group.id} className="space-y-4">
              <div className="flex items-baseline justify-between gap-6 flex-wrap">
                <h2 className="text-xl font-semibold">{group.title}</h2>
                <span className="text-xs text-black/45">{group.items.length} items</span>
              </div>

              <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/60">
                {group.items.map((item) => (
                  <div key={item.id} className="p-5 flex items-start justify-between gap-6 flex-wrap">
                    <div className="min-w-[16rem]">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="text-sm text-black/45">{item.paper_no ? `Paper ${item.paper_no}` : "Paper"}</div>
                        <StatusPill status={item.status} state={item.state} />
                      </div>

                      <div className="mt-1">
                        <Link href={`/papers/${item.slug}`} className="no-underline text-base font-medium text-ink hover:underline">
                          {item.title}
                        </Link>
                      </div>

                      {item.summary ? <p className="mt-2 text-sm text-black/65 leading-relaxed">{item.summary}</p> : null}
                      {item.function ? <p className="mt-2 text-xs text-black/50">{item.function}</p> : null}
                      {item.status === "released" && item.doi ? <p className="mt-2 text-xs text-black/45">DOI: {item.doi}</p> : null}
                    </div>

                    <div className="flex items-center gap-2">
                      {hasZenodo(item) ? (
                        <a
                          href={item.zenodo}
                          className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Zenodo
                        </a>
                      ) : null}

                      {hasPdf(item) ? (
                        <a
                          href={item.pdf}
                          className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View
                        </a>
                      ) : null}

                      {hasPdf(item) ? (
                        <a
                          href={item.pdf}
                          className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
                          download
                        >
                          Download
                        </a>
                      ) : null}

                      <Link
                        href={`/papers/${item.slug}`}
                        className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm text-black/70 hover:text-black"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-xs text-black/45">
          Note: anything placed under <code className="bg-black/5 px-1.5 py-0.5 rounded">public/</code> is publicly accessible
          by URL on Vercel even if it is not linked here. If you want unreleased PDFs offline, don’t deploy them inside{" "}
          <code className="bg-black/5 px-1.5 py-0.5 rounded">public/papers/</code>.
        </p>
      </div>
    </div>
  );
}
