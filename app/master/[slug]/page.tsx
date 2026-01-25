import { notFound } from "next/navigation";
import Link from "next/link";
import sectionsData from "@/content/master/sections.json";
import fs from "fs";
import path from "path";

type Section = { slug: string; title: string; file: string; explain: string };

function getContent(slug: string) {
  const sections = (sectionsData as any).sections as Section[];
  const s = sections.find((x) => x.slug === slug);
  if (!s) return null;

  const base = path.join(process.cwd(), "content", "master");
  const txtPath = path.join(base, s.file);
  const explainPath = path.join(base, s.explain);

  const text = fs.readFileSync(txtPath, "utf8");
  const explain = fs.existsSync(explainPath) ? JSON.parse(fs.readFileSync(explainPath, "utf8")) : {};
  return { meta: s, text, explain };
}

function Paragraph({
  id,
  text,
  explanation,
}: {
  id: string;
  text: string;
  explanation?: { title?: string; text: string };
}) {
  const has = !!explanation;
  return (
    <div className="relative">
      <p className="text-black/80 leading-relaxed whitespace-pre-wrap">
        {text}
        {has ? <a href={`#${id}`} className="no-underline text-black/45 hover:text-black/70">{" "}▸</a> : null}
      </p>

      {has ? (
        <details id={id} className="mt-3 rounded-xl border border-black/10 bg-white/60 p-4">
          <summary className="cursor-pointer list-none text-sm font-medium text-black/70">
            Explanation{explanation?.title ? `: ${explanation.title}` : ""}
          </summary>
          <div className="mt-2 text-sm text-black/70 leading-relaxed whitespace-pre-wrap">
            {explanation.text}
          </div>
        </details>
      ) : null}
    </div>
  );
}

export default function MasterSectionPage({ params }: { params: { slug: string } }) {
  const data = getContent(params.slug);
  if (!data) return notFound();

  const paras = data.text
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/g)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">The Master</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{data.meta.title}</h1>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/master" className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15">
            Back to Master index
          </Link>
          <Link href="/glossary" className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15">
            Glossary
          </Link>
          <Link href="/papers" className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15">
            Downloads (/papers)
          </Link>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6">
          <p className="text-sm text-black/70 leading-relaxed">
            Canonical text is shown verbatim. Optional explanations are collapsed by default and can be opened locally (▸).
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {paras.map((p, idx) => {
            const pid = `p${idx + 1}`;
            const ex = (data.explain as any)[pid];
            return <Paragraph key={pid} id={pid} text={p} explanation={ex} />;
          })}
        </div>

        <p className="mt-12 text-xs text-black/45">
          To add or edit explanations, update{" "}
          <code className="bg-black/5 px-1.5 py-0.5 rounded">content/master/{data.meta.explain}</code>.
        </p>
      </div>
    </div>
  );
}
