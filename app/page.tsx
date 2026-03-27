import Link from "next/link";

const SUBSTACK_URL = "https://michaelsemprevivo.substack.com/";

function PrimaryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-black text-white px-5 py-3 text-sm font-medium no-underline hover:bg-black/90"
    >
      {label} <span aria-hidden className="text-base leading-none">→</span>
    </Link>
  );
}

function SecondaryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/80 no-underline hover:bg-black/5"
    >
      {label}
    </Link>
  );
}

function ExternalSecondaryLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/80 no-underline hover:bg-black/5"
    >
      <span
        aria-hidden
        className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#FF6719] text-white"
      >
        {/* Substack-inspired mark */}
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
          <path d="M6 5.5h12v2H6v-2Zm0 4h12v2H6v-2Zm0 4h12v8.5L12 19.8 6 22v-8.5Z" />
        </svg>
      </span>
      <span className="text-[15px] leading-none">{label}</span>
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">
          Informational Ontology • Rev5.1+ corpus
        </p>

        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          Welcome
        </h1>

        <div className="mt-6 text-black/75 leading-relaxed space-y-4">
          <p>
            <span className="font-semibold text-black">Informational Ontology</span> is a
            structural account of how increasingly rich kinds of order can arise without
            smuggling in meaning, minds, or goals up front. It starts from the smallest
            possible notion of difference and builds a chain that reaches all the way to
            awareness, value, meaning, and purpose.
          </p>

          <p>
            This corpus did not begin as an attempt to produce a large number of papers. It
            grew because Informational Ontology repeatedly demonstrated explanatory reach
            beyond its initial statement. As one argument was clarified, further claims,
            implications, and applications became visible—often important enough that they
            could not be left implicit, yet distinct enough that they required separate
            treatment. Many of the later papers were written to address questions that
            earlier papers had made newly available, but had not themselves set out to
            resolve. The series therefore expanded in a disciplined way: not by pursuing
            volume, but by following the consequences of the framework until its most
            important open paths had been worked through.
          </p>

          <p>
            The site is layered for different readers:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold text-black">Start Here</span> — an interactive
              chain view (fast intuition and navigation).
            </li>
            <li>
              <span className="font-semibold text-black">Orientation Guide</span> — how to
              read the corpus, recommended paths, and context.
            </li>
            <li>
              <span className="font-semibold text-black">Papers</span> — the full master and
              extended/derivative papers (downloadable PDFs).
            </li>
            <li>
              <span className="font-semibold text-black">Interactive Corpus Map</span> — a
              visual map of the full corpus architecture, with light mode by default and a
              dark-mode option on the map page.
            </li>
          </ul>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <PrimaryLink href="/start-here" label="Start Here" />
          <SecondaryLink href="/orientation" label="Orientation Guide" />
          <SecondaryLink href="/papers" label="Papers" />
          <SecondaryLink href="/corpus-map" label="Interactive Corpus Map" />
          <ExternalSecondaryLink
            href={SUBSTACK_URL}
            label="IO Substack"
          />
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-5">
          <p className="text-sm text-black/70 leading-relaxed">
            If you want the analogy-heavy guided path through the core chain, visit{" "}
            <Link
              href="/start"
              className="text-black/80 hover:text-black font-medium no-underline"
            >
              /start
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
