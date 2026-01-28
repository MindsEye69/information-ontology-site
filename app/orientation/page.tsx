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

export default async function OrientationGuidePage() {
  const text = await loadOrientationText();
  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        How to Build a Someone
      </h1>

      <p className="mt-2 text-sm text-black/55">
        Orientation Guide — Non-canonical, explanatory only
      </p>

      <section className="mt-8 rounded-2xl border border-black/10 bg-white p-6 md:p-8">
        <pre className="whitespace-pre-wrap font-sans text-[15px] leading-7 text-black/90">
          {text}
        </pre>
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
