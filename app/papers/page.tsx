import Link from "next/link";
import papersData from "@/content/papers.json";

type PaperItem = {
  id: string;
  paper_no?: number;
  title: string;
  slug: string;
  pdf: string;
  blurb?: string;
};

type Section = {
  title: string;
  items: PaperItem[];
};

export default function PapersPage() {
  const exec = (papersData as any).executive_summary as { title: string; pdf: string; note?: string };
  const sections = (papersData as any).sections as Section[];

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Downloads</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">The Corpus</h1>
        <p className="mt-4 text-black/70 leading-relaxed">
          This page is the canonical download hub for the full Informational Ontology corpus. Titles link directly to PDFs.
        </p>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-lg font-semibold">Executive Summary</h2>
              <p className="mt-1 text-sm text-black/65">
                A short orientation and overview of the whole project.
              </p>
              {exec?.note ? <p className="mt-2 text-xs text-black/45">{exec.note}</p> : null}
            </div>
            <a
              href={exec.pdf}
              className="no-underline inline-flex items-center rounded-2xl px-4 py-2 bg-ink text-paper"
              download
            >
              Download PDF
            </a>
          </div>
        </div>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title} className="space-y-4">
              <div className="flex items-baseline justify-between gap-6 flex-wrap">
                <h2 className="text-xl font-semibold">{section.title}</h2>
                <span className="text-xs text-black/45">PDF downloads</span>
              </div>

              <div className="divide-y divide-black/10 rounded-2xl border border-black/10 bg-white/60">
                {section.items.map((item) => (
                  <div key={item.id} className="p-5 flex items-start justify-between gap-6 flex-wrap">
                    <div className="min-w-[16rem]">
                      <div className="text-sm text-black/45">{item.paper_no ? `Paper ${item.paper_no}` : "Paper"}</div>
                      <div className="mt-1">
                        <a href={item.pdf} className="no-underline text-base font-medium text-ink hover:underline" download>
                          {item.title}
                        </a>
                      </div>
                      {item.blurb ? <p className="mt-2 text-sm text-black/65 leading-relaxed">{item.blurb}</p> : null}
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={item.pdf}
                        className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
                        download
                      >
                        Download
                      </a>
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
          If a download 404s, the PDF file has not yet been placed in{" "}
          <code className="bg-black/5 px-1.5 py-0.5 rounded">site/public/papers/</code>.
        </p>
      </div>
    </div>
  );
}
