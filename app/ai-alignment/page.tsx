import Link from "next/link";

const paperCards = [
  {
    kicker: "Start Here",
    title: "Working as Designed: Diagnosing Alignment Failure Without Error",
    shortTitle: "Working as Designed",
    href: "/papers/working-as-designed",
    hook:
      "Some AI failures are not malfunctions. They occur when systems operate correctly relative to their specifications while changing the regime conditions under which their outputs remain answerable.",
    button: "Read Working as Designed",
  },
  {
    kicker: "Why Oversight Is Not Enough",
    title: "Witness Conditions: Regime Preservation in AI-Mediated Decision Systems",
    shortTitle: "Witness Conditions",
    href: "/papers/witness-conditions",
    hook:
      "Human presence, review, or approval does not by itself preserve witnessing; what matters is whether consequence can still terminate in a locus capable of responsibility-bearing intervention.",
    button: "Read Witness Conditions",
  },
  {
    kicker: "When Automation Is Necessary but Dangerous",
    title: "The Handover Protocol: Formalizing Necessary Regime Thinning Under Automation",
    shortTitle: "The Handover Protocol",
    href: "https://doi.org/10.5281/zenodo.18615342",
    hook:
      "Some automation is structurally necessary under scale and tempo, but it must be acknowledged as handover rather than disguised as ordinary delegation or oversight.",
    button: "Read The Handover Protocol",
  },
  {
    kicker: "The Boundary of Alignment",
    title: "Alignment After Witnessing: Governance at the Edge of Intelligibility",
    shortTitle: "Alignment After Witnessing",
    href: "/papers/alignment-after-witnessing",
    hook:
      "Once witnessing fails, alignment does not merely become harder; it changes kind, weakening from authority-bearing alignment into trace-consistency.",
    button: "Read Alignment After Witnessing",
  },
  {
    kicker: "A Sharp Applied Failure Mode",
    title: "Vulnerability Laundering in AI-Mediated Regimes",
    shortTitle: "Vulnerability Laundering",
    href: "/papers/vulnerability-laundering-in-ai-mediated-regimes",
    hook:
      "AI-mediated regimes can preserve the appearance of accountability while relocating vulnerability away from the loci where decisions are specified, justified, or enforced.",
    button: "Read Vulnerability Laundering",
  },
];

type SmartLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

function SmartLink({ href, className, children }: SmartLinkProps) {
  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function PrimaryButton({ href, children }: SmartLinkProps) {
  return (
    <SmartLink
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 dark:border-[#1a1e2a] bg-black dark:bg-[#111828] px-5 py-3 text-sm font-medium text-white dark:text-[#b8c6de] no-underline hover:bg-black/90 dark:hover:bg-[#1a1e2a]"
    >
      {children} <span aria-hidden>→</span>
    </SmartLink>
  );
}

function SecondaryButton({ href, children }: SmartLinkProps) {
  return (
    <SmartLink
      href={href}
      className="inline-flex items-center justify-center rounded-2xl border border-black/10 dark:border-[#1a1e2a] bg-white dark:bg-[#111828] px-5 py-3 text-sm font-medium text-black/80 dark:text-[#b8c6de] no-underline hover:bg-black/5 dark:hover:bg-[#1a1e2a]"
    >
      {children}
    </SmartLink>
  );
}

export default function AIAlignmentLandingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <section className="max-w-4xl">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55 dark:text-[#5a6a82]">
          AI Alignment / AI Governance
        </p>
        <h1 className="mt-3 text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-black dark:text-[#b8c6de]">
          Informational Ontology for AI Alignment and AI Governance
        </h1>
        <p className="mt-4 text-lg text-black/65 dark:text-[#b8c6de] leading-relaxed">
          A structural diagnostic for AI-mediated systems that work as specified while displacing responsibility, witnessing, contestability, or authority-bearing alignment.
        </p>
        <div className="mt-8 rounded-3xl border border-black/10 dark:border-[#1a1e2a] bg-white/70 dark:bg-[#111828]/70 p-6 shadow-sm md:p-8">
          <p className="text-lg leading-relaxed text-black/75 dark:text-[#b8c6de]">
            Informational Ontology offers a structural diagnostic for AI-mediated systems that work as specified while displacing the conditions under which responsibility, contestability, witnessing, or authority-bearing alignment remain coherent. The AI-facing papers do not propose a new optimization target or governance checklist. They ask a prior question: when automated systems produce correct outputs at scale, what must still be true of the surrounding regime for those outputs to remain answerable?
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryButton href="/papers/working-as-designed">Start with Working as Designed</PrimaryButton>
          <SecondaryButton href="/ai-alignment/when-ai-systems-work-as-designed">
            Read the short guide
          </SecondaryButton>
        </div>
      </section>

      <section className="mt-14 grid gap-5">
        {paperCards.map((paper, index) => (
          <article
            key={paper.title}
            className="rounded-3xl border border-black/10 dark:border-[#1a1e2a] bg-white/65 dark:bg-[#111828]/70 p-6 shadow-sm md:p-7"
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.2em] text-black/45 dark:text-[#5a6a82]">
                  {index + 1}. {paper.kicker}
                </p>
                <h2 className="mt-3 text-lg sm:text-2xl font-semibold tracking-tight">
                  <SmartLink
                    href={paper.href}
                    className="text-black dark:text-[#b8c6de] no-underline hover:underline"
                  >
                    {paper.title}
                  </SmartLink>
                </h2>
                <p className="mt-4 text-black/70 dark:text-[#b8c6de] leading-relaxed">{paper.hook}</p>
                {paper.shortTitle === "Working as Designed" ? (
                  <p className="mt-3 text-sm text-black/55 dark:text-[#5a6a82] leading-relaxed">
                    This is a strong first paper for AI researchers because it begins from a familiar problem: correct system operation can still produce regime-level failure.
                  </p>
                ) : null}
              </div>
              <div className="shrink-0 md:pt-9">
                <SmartLink
                  href={paper.href}
                  className="inline-flex items-center justify-center rounded-2xl border border-black/10 dark:border-[#1a1e2a] bg-white dark:bg-[#111828] px-4 py-2 text-sm font-medium text-black/80 dark:text-[#b8c6de] no-underline hover:bg-black/5 dark:hover:bg-[#1a1e2a]"
                >
                  {paper.button}
                </SmartLink>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-14 rounded-3xl border border-black/10 bg-black p-7 text-white md:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-white/55">
          What this is, and what it is not
        </p>
        <h2 className="mt-3 text-lg sm:text-2xl font-semibold tracking-tight">
          A diagnostic path, not a replacement program
        </h2>
        <p className="mt-5 max-w-4xl text-white/75 leading-relaxed">
          This work is not a claim that AI systems are conscious, morally responsible, or purposive in the human sense. It is also not a proposal for replacing technical alignment, interpretability, evaluation, or governance work. It is a structural vocabulary for diagnosing a class of failures that can remain invisible when systems are evaluated only by output quality, procedural compliance, or specification-following.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <SmartLink
            href="/papers#ai-alignment"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-medium text-black no-underline hover:bg-white/90"
          >
            Explore the AI-facing IO papers <span aria-hidden>→</span>
          </SmartLink>
          <SmartLink
            href="/corpus-map"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white no-underline hover:bg-white/15"
          >
            Open the corpus map
          </SmartLink>
        </div>
      </section>
    </div>
  );
}
