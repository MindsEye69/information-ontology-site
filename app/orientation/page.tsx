import Link from "next/link";

export default function OrientationGuidePage() {
  // Minimal PDF embed: avoids the busy sidebar/tools and keeps the page calm.
  // URL-encode spaces for reliability across browsers.
  const pdfDownload =
    "/orientation/How%20To%20Build%20A%20Someone%20-%20A%20Guide%20to%20IO.pdf";
  const pdfEmbed = `${pdfDownload}#toolbar=0&navpanes=0&scrollbar=1`;

  return (
    <main className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
        How to Build a Someone
      </h1>

      <p className="mt-2 text-sm text-black/55">
        Orientation Guide — Non-canonical, explanatory only
      </p>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white overflow-hidden">
        <iframe
          title="How to Build a Someone — Orientation Guide"
          src={pdfEmbed}
          className="w-full h-[80vh]"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={pdfDownload}
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
