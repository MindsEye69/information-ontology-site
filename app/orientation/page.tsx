import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";

function decodeBasicEntities(input: string): string {
  // Minimal decode for our exported HTML text payload.
  return input
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
}

async function loadOrientationText(): Promise<string> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "orientation",
    "how-to-build-a-someone.text.html",
  );

  const html = await readFile(filePath, "utf8");
  const match = html.match(/<pre>([\s\S]*?)<\/pre>/i);
  const raw = match?.[1] ?? "(Text not found.)";
  return decodeBasicEntities(raw).trim();
}

type Block =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "subtitle"; text: string }
  | { kind: "lede"; text: string }
  | { kind: "p"; text: string };

function isPageNumberLine(line: string): boolean {
  // PDF exports often leak standalone page numbers like "1" / "2".
  // Strip only lines that are *just* digits.
  return /^\d+$/.test(line.trim());
}

function parseOrientationText(raw: string): Block[] {
  const lines = raw
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((l) => l.trimEnd())
    .filter((l) => !isPageNumberLine(l));

  const blocks: Block[] = [];
  let i = 0;

  // The exported text file contains a duplicated title block at the top.
  // We already have the page title in the layout, so we:
  // - drop the first line if it starts with the guide title
  // - treat the next line as a short lede/subtitle if present
  const first = (lines[0] ?? "").trim();
  if (/^How\s+to\s+Build\s+a\s+Someone\s*:/i.test(first)) {
    i = 1;
    const maybeLede = (lines[1] ?? "").trim();
    if (maybeLede && maybeLede.length < 120 && !/^Introduction\s*:/i.test(maybeLede)) {
      blocks.push({ kind: "lede", text: maybeLede });
      i = 2;
    }
  }

  const pushParagraph = (startIdx: number): number => {
    const parts: string[] = [];
    let j = startIdx;
    while (j < lines.length && lines[j].trim() !== "") {
      parts.push(lines[j].trim());
      j++;
    }
    const text = parts.join(" ").replace(/\s+/g, " ").trim();
    if (text) blocks.push({ kind: "p", text });
    return j;
  };

  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      i++;
      continue;
    }

    // Section headers like: "Part 1: The Engine Room"
    if (/^Part\s+\d+\s*:/i.test(line)) {
      blocks.push({ kind: "h2", text: line });
      // Optional parenthetical subtitle line right after.
      const maybeSub = (lines[i + 1] ?? "").trim();
      if (/^\(.+\)$/.test(maybeSub)) {
        blocks.push({ kind: "subtitle", text: maybeSub.replace(/^\(|\)$/g, "") });
        i += 2;
        continue;
      }
      i++;
      continue;
    }

    // Intro-style headers like: "Introduction: The Code of Reality"
    if (/^[A-Za-z].*:\s+/.test(line) && line.length < 90) {
      blocks.push({ kind: "h2", text: line });
      i++;
      continue;
    }

    // Numbered entry title like: "1. The 7-Step Ladder"
    const m = line.match(/^(\d+)\.\s+(.*)$/);
    if (m) {
      blocks.push({ kind: "h3", text: `${m[1]}. ${m[2]}` });
      // Optional parenthetical subtitle like: "(The Master Paper)"
      const maybeSub = (lines[i + 1] ?? "").trim();
      if (/^\(.+\)$/.test(maybeSub)) {
        blocks.push({ kind: "subtitle", text: maybeSub.replace(/^\(|\)$/g, "") });
        i += 2;
      } else {
        i += 1;
      }
      // Body paragraph(s) until next blank line.
      i = pushParagraph(i);
      continue;
    }

    // Fallback paragraph.
    i = pushParagraph(i);
  }

  return blocks;
}

export default async function OrientationGuidePage() {
  const text = await loadOrientationText();
  const blocks = parseOrientationText(text);
  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        How to Build a Someone
      </h1>

      <p className="mt-2 text-sm text-black/55">
        Orientation Guide — Non-canonical, explanatory only
      </p>

      <section className="mt-8 rounded-2xl border border-black/10 bg-white p-6 md:p-8">
        <article className="max-w-none">
          {blocks.map((b, idx) => {
            if (b.kind === "lede")
              return (
                <p key={idx} className="mt-2 text-base text-black/70 leading-7">
                  {b.text}
                </p>
              );

            if (b.kind === "h2")
              return (
                <h2
                  key={idx}
                  className="mt-10 text-xl md:text-2xl font-semibold tracking-tight"
                >
                  {b.text}
                </h2>
              );

            if (b.kind === "h3")
              return (
                <h3
                  key={idx}
                  className="mt-7 text-lg md:text-xl font-semibold tracking-tight"
                >
                  {b.text}
                </h3>
              );

            if (b.kind === "subtitle")
              return (
                <p key={idx} className="mt-1 text-sm text-black/55">
                  {b.text}
                </p>
              );

            return (
              <p key={idx} className="mt-3 text-base leading-7">
                {b.text}
              </p>
            );
          })}
        </article>
      </section>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/orientation/How To Build A Someone - A Guide to IO.pdf"
          className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          download
        >
          Download PDF
        </a>

        <Link
          href="/start-here"
          className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
        >
          Back to Start Here
        </Link>
      </div>
    </main>
  );
}
