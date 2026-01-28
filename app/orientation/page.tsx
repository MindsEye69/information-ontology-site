import Link from "next/link";
import MinimalPdfViewer from "@/components/minimal-pdf-viewer";

export default function OrientationGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        How to Build a Someone
      </h1>

      <p className="mt-2 text-sm text-black/55">
        Orientation Guide — Non-canonical, explanatory only
      </p>

      <div className="mt-8">
        <MinimalPdfViewer src="/orientation/How To Build A Someone - A Guide to IO.pdf" />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href="/orientation/How To Build A Someone - A Guide to IO.pdf"
          className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          download
        >
          Download PDF
        </a>

        <Link
          href="/start"
          className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
        >
          Back to Start Here
        </Link>
      </div>
    </main>
  );
}
