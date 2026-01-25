import { existsSync, readFileSync } from "fs";
import path from "path";
import Link from "next/link";
import { redirect } from "next/navigation";

export const runtime = "nodejs";

function isPlaceholder(html: string) {
  return html.includes("Archive (Not Built Yet)") || html.includes("Archive snapshot not built yet");
}

export default function ArchiveEntry() {
  const indexPath = path.join(process.cwd(), "public", "archive", "index.html");

  if (existsSync(indexPath)) {
    try {
      const html = readFileSync(indexPath, "utf8");
      if (!isPlaceholder(html)) {
        // The archive snapshot exists — hand off to the static export.
        redirect("/archive/index.html");
      }
    } catch {
      // Fall through to instructions.
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Archive</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Archive snapshot not built yet
        </h1>

        <div className="mt-8 rounded-2xl border border-black/10 bg-white/60 p-6 md:p-8">
          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            The historical snapshot of the previous site will appear here once it has been exported from{" "}
            <code className="rounded bg-black/5 px-1.5 py-0.5">/archive-src</code> and copied into{" "}
            <code className="rounded bg-black/5 px-1.5 py-0.5">/public/archive</code>.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <code className="rounded bg-black/5 px-2 py-1 text-sm">
              npm run build-archive
            </code>
            <code className="rounded bg-black/5 px-2 py-1 text-sm">
              node scripts/build-archive.mjs
            </code>
          </div>

          <p className="mt-5 text-sm text-black/60 leading-relaxed">
            Once built, the frozen site will be served at{" "}
            <Link className="underline underline-offset-4" href="/archive/index.html">
              /archive/index.html
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
