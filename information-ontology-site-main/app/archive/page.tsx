import Link from "next/link";

export default function ArchivePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Archive</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Historical snapshot
        </h1>

        <p className="mt-4 text-sm md:text-base text-black/70 leading-relaxed">
          This is a preserved snapshot of an earlier version of the site, kept as a
          historical record of the project’s development.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/archive/index.html"
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

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-4">
          <p className="text-xs text-black/60 leading-relaxed">
            If you see a 404 after clicking “Open”, it means the archive snapshot hasn’t been
            generated or committed yet. Build it locally (once) and commit the contents of
            <code className="ml-1 rounded bg-black/5 px-1 py-0.5">public/archive</code>.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-black/10 bg-white">
          <iframe
            src="/archive/index.html"
            title="Archived site"
            className="h-[70vh] w-full"
          />
        </div>
      </div>
    </div>
  );
}
