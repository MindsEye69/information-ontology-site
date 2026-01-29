import Link from "next/link";
import masterData from "@/content/master/master.json";

type Block =
  | { type: "h"; level: number; id: string; title: string; explain?: boolean }
  | { type: "p"; text: string };

function isHeading(b: Block): b is Extract<Block, { type: "h" }> {
  return b.type === "h";
}

function Paragraph({ text }: { text: string }) {
  // Preserve line breaks inside paragraphs (the PDF extraction uses hard wraps).
  const parts = text.split("\n");
  return (
    <p className="mt-4 text-sm md:text-base leading-relaxed text-black/75">
      {parts.map((line, i) => (
        <span key={i}>
          {line}
          {i < parts.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  );
}

function ExplainPlaceholder() {
  return (
    <details className="mt-3 rounded-2xl border border-black/10 bg-white/60 px-4 py-3">
      <summary className="cursor-pointer text-sm text-black/65 select-none">
        Explanation forthcoming
      </summary>
      <div className="mt-2 text-sm leading-relaxed text-black/70">
        <p>
          Plain-language explanations, examples, and cross-links will be added here in a future update.
        </p>
      </div>
    </details>
  );
}


export default function MasterPage() {
  const blocks = (masterData as any).blocks as Block[];

  const toc = blocks
    .filter((b) => isHeading(b) && (b.level === 1 || b.level === 2))
    .map((b) => ({ id: (b as any).id, title: (b as any).title, level: (b as any).level }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-5xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">The Master</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Informational Ontology — Rev 5.1 (web reader)
        </h1>

        <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed">
          The canonical Master is shown verbatim. Optional explanations will appear as collapsed
          drop-downs at selected anchors.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/papers"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Downloads (/papers)
          </Link>
          <Link
            href="/glossary"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Glossary
          </Link>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-black/55">On this page</p>
          <ul className="mt-3 grid gap-2">
            {toc.map((item) => (
              <li key={item.id} className={item.level === 2 ? "ml-4" : ""}>
                <a
                  className="text-sm text-black/70 hover:text-black underline decoration-black/20 hover:decoration-black/40"
                  href={`#${item.id}`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <article className="mt-12">
          {blocks.map((b, idx) => {
            if (b.type === "h") {
              const Tag = b.level === 1 ? "h2" : b.level === 2 ? "h3" : "h4";
              const cls =
                b.level === 1
                  ? "mt-12 text-2xl md:text-3xl font-semibold tracking-tight"
                  : b.level === 2
                  ? "mt-10 text-xl md:text-2xl font-semibold tracking-tight"
                  : "mt-8 text-lg md:text-xl font-semibold tracking-tight";

              return (
                <section key={idx} className="scroll-mt-24">
                  <a id={b.id} />
                  <Tag className={cls}>{b.title}</Tag>
                  {b.explain ? <ExplainPlaceholder /> : null}
                </section>
              );
            }
            return <Paragraph key={idx} text={b.text} />;
          })}
        </article>
      </div>
    </div>
  );
}
