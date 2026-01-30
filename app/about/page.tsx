export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">About</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">About Informational Ontology</h1>

        <div className="mt-6 text-black/75 leading-relaxed space-y-5">
          <p>
            Informational Ontology (IO) is a scope-disciplined structural framework describing how increasingly rich kinds of organization can arise
            without assuming meaning, minds, goals, or teleology as primitives.
          </p>

          <p>
            The core ladder is: Difference → Relation → Information → Awareness → Value → Meaning → Purpose (Δ → R → I → A → V → M → P). IO does not
            claim these regimes are universally instantiated; it characterizes the forms they cannot fail to take when the stated structural conditions
            obtain.
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold tracking-tight text-black/85">What this site is</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>A public interface to the canonical Master text and the full paper corpus (PDF).</li>
              <li>A layered reading experience: fast intuition, guided tour, and canonical documents.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold tracking-tight text-black/85">What this site is not</h2>
            <p>
              IO is not a physics theory, a cognitive mechanism, a semantic theory of truth/representation, or a moral prescription. “Awareness”,
              “meaning”, and “purpose” are used as names for structural regimes, not as folk-psychological imports.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold tracking-tight text-black/85">How to read</h2>
            <ol className="list-decimal pl-6 space-y-1">
              <li>If you want the authoritative statement: read the Master (PDF or web reader).</li>
              <li>If you want a gentle introduction: use Start Here and the guided path (/start).</li>
              <li>If you want details of specific transitions: use the Papers page and the relevant derivative paper.</li>
            </ol>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold tracking-tight text-black/85">License</h2>
            <p>© 2025–2026 Michael Semprevivo. Licensed CC BY 4.0 (see Master / PDFs for full text).</p>
            <p>
              Contact:{" "}
              <a className="underline underline-offset-4" href="mailto:info@informationontology.org">
                info@informationontology.org
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
