export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Ariadne</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Ariadne</h1>

        <div className="mt-6 text-black/75 leading-relaxed space-y-4">
          <p>
            Ariadne will be a constrained interface for navigating the Informational Ontology corpus. It is designed to help readers locate the relevant
            paper, section, or regime transition without turning the ontology into a “chatty” paraphrase that risks drift.
          </p>

          <div className="rounded-2xl border border-black/10 bg-white/60 p-5 space-y-2">
            <p className="font-medium">Status: Planned for a future update (offline for now).</p>
            <p className="text-sm text-black/65">
              If you have feedback on what you’d want from an interactive navigator, email:{" "}
              <a className="underline underline-offset-4" href="mailto:info@informationontology.org">
                info@informationontology.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
