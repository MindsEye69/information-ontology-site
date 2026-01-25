import Link from "next/link";
import outline from "@/content/master-outline.json";

type Section = { id: string; title: string; lay: string; terms?: string[]; page_start?: number | null };

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/\s+/g, "-");
}

function GlossaryLinks({ terms }: { terms?: string[] }) {
  if (!terms || terms.length === 0) return null;
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {terms.map((t) => (
        <Link
          key={t}
          href={`/glossary#${encodeURIComponent(slugify(t))}`}
          className="no-underline text-xs rounded-full border border-black/15 px-3 py-1 text-black/65 hover:text-black"
        >
          {t}
        </Link>
      ))}
    </div>
  );
}

export default function MasterPage() {
  const sections = (outline as any).sections as Section[];
  const sourcePdf = (outline as any).source_pdf as string | undefined;

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">The Master</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          {(outline as any).title}
        </h1>

        <p className="mt-4 text-black/70 leading-relaxed">
          {(outline as any).note}{" "}
          <span className="text-black/55">
            If you want PDFs, go to{" "}
            <Link href="/papers" className="underline">
              /papers
            </Link>
            .
          </span>
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {sourcePdf ? (
            <a
              href={sourcePdf}
              className="no-underline inline-flex items-center rounded-2xl px-4 py-2 bg-ink text-paper"
              target="_blank"
              rel="noreferrer"
            >
              Open Master PDF
            </a>
          ) : null}
          <Link
            href="/papers"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15"
          >
            Downloads (/papers)
          </Link>
          <Link
            href="/glossary"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15"
          >
            Glossary
          </Link>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6">
          <h2 className="text-lg font-semibold">How this page works</h2>
          <ul className="mt-3 space-y-2 text-sm text-black/70 list-disc pl-5">
            <li>Each section has a short, plain-language explanation (for fast onboarding).</li>
            <li>
              Complex terms—or terms with a special IO definition—link to the{" "}
              <Link href="/glossary" className="underline">glossary</Link>.
            </li>
            <li>
              This is a reading interface. The canonical downloadable corpus lives on{" "}
              <Link href="/papers" className="underline">/papers</Link>.
            </li>
          </ul>
        </div>

        <div className="mt-12 space-y-4">
          {sections.map((s) => (
            <details key={s.id} className="group rounded-2xl border border-black/10 bg-white/60 p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-base font-medium">{s.title}</span>
                  {typeof s.page_start === "number" ? (
                    <span className="mt-1 text-xs text-black/45">Starts on PDF page {s.page_start}</span>
                  ) : null}
                </div>
                <span className="text-xs text-black/50 group-open:hidden">Expand</span>
                <span className="text-xs text-black/50 hidden group-open:inline">Collapse</span>
              </summary>

              <div className="mt-4 text-sm text-black/75 leading-relaxed space-y-4">
                <p><span className="font-medium">Lay explanation:</span> {s.lay}</p>

                <div className="rounded-xl border border-black/10 bg-paper p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-black/50">Canonical text</p>
                  <p className="mt-2 text-sm text-black/65">
                    (Next step) Paste the canonical section text here as a web-readable excerpt, or link to a per-section reader page.
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-black/50">Key terms</p>
                  <GlossaryLinks terms={s.terms} />
                </div>
              </div>
            </details>
          ))}
        </div>

        <p className="mt-10 text-xs text-black/45">
          Outline source: {(outline as any).extraction === "toc-extracted" ? "extracted from the Master PDF table of contents" : "temporary fallback outline"}.
        </p>
      </div>
    </div>
  );
}
