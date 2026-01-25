import Link from "next/link";

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">
          The Project
        </p>

        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
          The Project as Process
        </h1>

        <div className="mt-8 rounded-2xl border border-black/10 bg-white/60 p-6 md:p-8">
          <p className="text-base md:text-lg text-black/80 leading-relaxed">
            <em>
              The collaboration was not planned as a demonstration of alignment.
              <br />
              The theory of alignment emerged as an explanation of why the collaboration worked.
            </em>
          </p>

          <p className="mt-4 text-sm text-black/65 leading-relaxed">
            The fact that the ontology makes the project intelligible in retrospect
            is evidence of its explanatory adequacy.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">Structural correspondence</h2>
          <p className="mt-2 text-sm text-black/65 leading-relaxed">
            This section outlines how core claims of Informational Ontology map
            onto features of the project itself. The table below is intentionally
            schematic and non-narrative.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full border-collapse border border-black/10 text-sm">
              <thead>
                <tr className="bg-black/5">
                  <th className="border border-black/10 px-4 py-2 text-left font-medium">
                    Ontological claim
                  </th>
                  <th className="border border-black/10 px-4 py-2 text-left font-medium">
                    Project instantiation
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black/10 px-4 py-3">
                    Alignment is structural comparability
                  </td>
                  <td className="border border-black/10 px-4 py-3">
                    Human–AI collaboration stabilized around shared constraints
                    rather than value matching or goal obedience
                  </td>
                </tr>
                <tr>
                  <td className="border border-black/10 px-4 py-3">
                    Purpose emerges without teleology
                  </td>
                  <td className="border border-black/10 px-4 py-3">
                    No predefined end-state for the paper series; direction emerged
                    from constraint ordering and review pressure
                  </td>
                </tr>
                <tr>
                  <td className="border border-black/10 px-4 py-3">
                    Constraint ordering matters
                  </td>
                  <td className="border border-black/10 px-4 py-3">
                    Fixed sequencing of derivative papers with locked upstream authority
                  </td>
                </tr>
                <tr>
                  <td className="border border-black/10 px-4 py-3">
                    Agency arises under degeneracy
                  </td>
                  <td className="border border-black/10 px-4 py-3">
                    Productive AI contribution occurred under constrained,
                    non-deterministic generation space
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-black/10 bg-paper p-6 md:p-8">
          <p className="text-sm text-black/70 leading-relaxed">
            No attempt was made to apply Informational Ontology during the project.
            The ontology is offered here solely as an explanatory framework, not as
            a design principle or guiding methodology.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/master"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Read the Master
          </Link>
          <Link
            href="/papers"
            className="no-underline inline-flex items-center rounded-2xl px-4 py-2 border border-black/15 text-sm"
          >
            Papers (downloads)
          </Link>
        </div>
      </div>
    </div>
  );
}