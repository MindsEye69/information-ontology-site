export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">About</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">About this project</h1>

        <div className="mt-6 text-black/75 leading-relaxed space-y-5">
          <p>
            Informational Ontology (IO) is a structural framework that treats information—re-identifiable structured difference—and constraint as the primary explanatory currency.
            It is written as a compact Master text plus a set of derivative papers that extend the same architecture into specific domains.
          </p>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5">
            <p className="font-medium">How the site is layered</p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-black/70">
              <li><span className="font-medium">Canonical layer</span>: the Master and the PDFs (/master, /papers).</li>
              <li><span className="font-medium">Explanatory layer</span>: guides, tours, and deep-dives that help you read the canon (clearly labeled “Not Canonical”).</li>
              <li><span className="font-medium">Archive</span>: a frozen snapshot of older drafts, isolated under /archive.</li>
            </ul>
          </div>

          <p>
            Scope limits: IO is not a replacement for physics, biology, or cognitive science. It is an ontological and structural vocabulary intended to remain compatible with those disciplines while clarifying how stability, agency, meaning, and purpose can arise without importing teleology or observer-dependence.
          </p>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5 text-sm text-black/70">
            <p className="font-medium">License</p>
            <p className="mt-2">
              © 2025–2026 Michael Semprevivo. This work is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0).
            </p>
          </div>

          <p className="text-sm text-black/65">
            If you are new: start with <span className="font-medium">Start Here</span>, then read the Master, then choose derivative papers by topic.
          </p>
        </div>
      </div>
    </div>
  );
}
