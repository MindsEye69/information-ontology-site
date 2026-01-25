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
            <strong>
              The fact that Informational Ontology makes the project intelligible
              in retrospect is evidence of its explanatory adequacy.
            </strong>
          </p>

          <p className="mt-4 text-base md:text-lg text-black/80 leading-relaxed">
            The collaboration was not planned as a demonstration of alignment;
            a downstream account of alignment was later developed to explain why
            the collaboration worked.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            This project did not begin as an attempt to construct a philosophical
            system, nor as an experiment in human–AI collaboration. It began with
            a small set of persistent questions about how structure, meaning, and
            apparent direction can arise without presupposing purpose, intention,
            normativity, or teleology.
          </p>

          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            No prior methodological framework governed the work. There was no
            target tradition, no predefined ontology, and no expectation that the
            project would expand beyond exploratory dialogue. The eventual
            emergence of a multi-paper corpus was not anticipated at the outset,
            nor was the role that artificial intelligence would come to play
            within it.
          </p>

          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            Throughout the process, the AI system was not treated as a
            philosophical agent. It did not supply understanding, judgment, or
            authority. Those functions remained irreducibly human at every stage.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            The development of Informational Ontology proceeded through sustained
            human–AI interaction under increasing constraint. Early stages were
            permissive and exploratory. As provisional structure appeared, the
            process shifted toward stricter constraint enforcement.
          </p>

          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            Candidate explanations were proposed, tested, and discarded when they
            collapsed into hidden assumptions—semantic representation, implicit
            normativity, executive control, or teleological explanation. Entire
            lines of argument were abandoned rather than patched. What stabilized
            was not a narrative or metaphor, but a framework whose components
            constrained one another across documents.
          </p>

          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            As the corpus grew, additional discipline was imposed. Terminology was
            locked, upstream papers were treated as authoritative background, and
            adversarial review was applied systematically. Later, the work was
            externalized into a public, versioned website, introducing further
            constraints of consistency, traceability, and exposure to critique.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            The role of the AI system was one of amplification rather than
            authorship. It enabled rapid generation and critique of candidate
            structures, high-bandwidth adversarial simulation, and consistency
            checking across an expanding body of material. These capabilities
            affected what was feasible to attempt, not the standards by which
            success was judged.
          </p>

          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            At no point did the AI determine which questions mattered, which
            explanatory costs were acceptable, or when stabilization had been
            reached. Those judgments required sustained human evaluation under
            uncertainty and could not be automated.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            A later paper on AI alignment drew on Informational Ontology to explain
            one aspect of why this collaboration succeeded. The claim advanced
            there is not that alignment consists in shared values, intentions, or
            goals, but that it depends on structural comparability: the ability of
            two systems to operate under compatible constraints without loss of
            coherence.
          </p>

          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            This account does not imply that AI systems are aligned in general, nor
            that the problem of alignment is solved. It offers a structural
            explanation of a specific outcome, grounded in a completed case.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-black/10 bg-paper p-6 md:p-8">
          <p className="text-sm md:text-base text-black/70 leading-relaxed">
            Nothing in this section suggests that philosophical work can be
            delegated to machines, that training and expertise are obsolete, or
            that institutional scholarship is dispensable. The claim is narrower:
            under sufficiently disciplined conditions, a human–AI system can
            instantiate a process that is recognizably philosophical in method
            and outcome, and Informational Ontology provides a coherent way of
            explaining how that occurred in this case.
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