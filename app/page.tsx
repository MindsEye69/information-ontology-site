import Link from "next/link";

const SUBSTACK_URL = "https://michaelsemprevivo.substack.com/";

function PrimaryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 dark:border-slate-700 bg-black dark:bg-[#111828] text-white px-5 py-3 text-sm font-medium no-underline hover:bg-black/90 dark:hover:bg-slate-700"
    >
      {label} <span aria-hidden className="text-base leading-none">→</span>
    </Link>
  );
}

function SecondaryLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-2xl border border-black/10 dark:border-slate-700 bg-white dark:bg-[#0d0f18] px-5 py-3 text-sm font-medium text-black/80 dark:text-[#b8c6de] no-underline hover:bg-black/5 dark:hover:bg-[#111828]"
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
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 dark:border-slate-700 bg-white dark:bg-[#0d0f18] px-5 py-3 text-sm font-medium text-black/80 dark:text-[#b8c6de] no-underline hover:bg-black/5 dark:hover:bg-[#111828]"
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
        <p className="text-xs uppercase tracking-[0.2em] text-black/55 dark:text-[#5a6a82]">
          Informational Ontology • Rev5.1+ corpus
        </p>

        <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-black dark:text-[#b8c6de]">
          Welcome
        </h1>

        <div className="mt-6 text-black/75 dark:text-[#b8c6de] leading-relaxed space-y-4">
          <p>
            <span className="font-semibold text-black dark:text-[#b8c6de]">Informational Ontology</span> is a
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
        </div>

        <section className="mt-9 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-black/10 dark:border-[#1a1e2a] bg-white/70 dark:bg-[#0d0f18]/70 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-black/45 dark:text-[#b8c6de]0">Reader path</p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-black dark:text-[#b8c6de]">Philosophical path</h2>
            <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-[#5a6a82]">
              Start with the core regime chain: difference, relation, information, awareness, value, meaning, and purpose.
            </p>
            <div className="mt-5">
              <PrimaryLink href="/start-here" label="Start Here" />
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 dark:border-[#1a1e2a] bg-white/70 dark:bg-[#0d0f18]/70 p-6 shadow-sm">
            <p className="text-xs uppercase tracking-[0.2em] text-black/45 dark:text-[#b8c6de]0">Reader path</p>
            <h2 className="mt-3 text-xl font-semibold tracking-tight text-black dark:text-[#b8c6de]">AI Alignment path</h2>
            <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-[#5a6a82]">
              Enter through the AI-facing papers on correct-operation failure, witnessing, handover, alignment boundaries, and vulnerability laundering.
            </p>
            <div className="mt-5">
              <PrimaryLink href="/ai-alignment" label="AI Alignment path" />
            </div>
          </div>
        </section>

        <div className="mt-9 text-black/75 dark:text-[#b8c6de] leading-relaxed space-y-4">
          <p>
            The site is also layered for different readers:
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <span className="font-semibold text-black dark:text-[#b8c6de]">Start Here</span> — an interactive
              chain view (fast intuition and navigation).
            </li>
            <li>
              <span className="font-semibold text-black dark:text-[#b8c6de]">Orientation Guide</span> — how to
              read the corpus, recommended paths, and context.
            </li>
            <li>
              <span className="font-semibold text-black dark:text-[#b8c6de]">Papers</span> — the full master and
              extended/derivative papers (downloadable PDFs).
            </li>
            <li>
              <span className="font-semibold text-black dark:text-[#b8c6de]">Interactive Corpus Map</span> — a
              visual map of the full corpus architecture.
            </li>
          </ul>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <SecondaryLink href="/orientation" label="Orientation Guide" />
          <SecondaryLink href="/papers" label="Papers" />
          <SecondaryLink href="/corpus-map" label="Interactive Corpus Map" />
          <ExternalSecondaryLink
            href={SUBSTACK_URL}
            label="IO Substack"
          />
        </div>

        <div className="mt-10 rounded-2xl border border-black/10 dark:border-[#1a1e2a] bg-white/60 dark:bg-[#0d0f18]/60 p-5">
          <p className="text-sm text-black/70 dark:text-[#5a6a82] leading-relaxed">
            If you want the analogy-heavy guided path through the core chain, visit{" "}
            <Link
              href="/start"
              className="text-black/80 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] font-medium no-underline"
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
