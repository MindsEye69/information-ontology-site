import Link from "next/link";
import Image from "next/image";

export default function ArchivePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Archive</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Historical snapshot
        </h1>

        <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed">
          This is the preserved Rev5-era site, kept online as a historical record
          of the project’s development. The current site is the rebuilt Rev5+
          corpus interface.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/archive/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Open the archived site
          </Link>

          <Link
            href="/"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Back to the current site
          </Link>
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-5">
          <p className="text-sm text-black/70 leading-relaxed">
            The archive is intentionally frozen. It exists for documentation and
            reference—not as the primary reading experience.
          </p>
        </div>

        <Link
          href="/archive/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 block overflow-hidden rounded-2xl border border-black/10 bg-white hover:bg-white/80 transition-colors"
          aria-label="Open the archived site (preview image)"
        >
          <div className="relative w-full">
            <Image
              src="/archive-preview.png"
              alt="Preview of the archived Rev5-era site"
              width={1600}
              height={900}
              priority
              className="h-auto w-full"
            />
          </div>
        </Link>

        <p className="mt-3 text-xs text-black/55 leading-relaxed">
          Click the preview to open the archived site in a full window.
        </p>
      </div>
    </div>
  );
}
