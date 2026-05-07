import Link from "next/link";

type PaperLinkProps = {
  href: string;
  children: React.ReactNode;
};

function PaperLink({ href, children }: PaperLinkProps) {
  const external = href.startsWith("http");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="font-medium text-black no-underline hover:underline">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className="font-medium text-black no-underline hover:underline">
      {children}
    </Link>
  );
}

export default function WhenAISystemsWorkAsDesignedPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-black/55">
        AI Alignment / AI Governance
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
        When AI Systems Work as Designed
      </h1>
      <p className="mt-4 text-lg text-black/65 leading-relaxed">
        A short guide to the AI-facing Informational Ontology papers
      </p>

      <div className="mt-10 space-y-6 text-black/75 leading-relaxed">
        <p>Some AI failures are not errors.</p>

        <p>
          They do not begin with a hallucination, a bug, a bad prediction, or a model that refuses to follow instructions. They begin with a system doing exactly what it was built to do: producing outputs, routing cases, ranking options, summarizing evidence, enforcing policy, accelerating decisions, and satisfying the visible specification.
        </p>

        <p>The failure appears elsewhere.</p>

        <p>
          A decision still gets made, but it becomes harder to say who can answer for it. A review process still exists, but the human reviewer no longer occupies a position where intervention can actually change the outcome. An audit trail remains, but the trail records procedure more clearly than responsibility. A governance regime still speaks the language of oversight, authority, and accountability, while the underlying structure has shifted into something thinner.
        </p>

        <p>That is the problem the AI-facing Informational Ontology papers are trying to isolate.</p>

        <p>
          They do not argue that AI systems are conscious, morally responsible, or purposive in the human sense. They do not propose a new optimization target, a replacement for interpretability, or a governance checklist. Their concern is more prior: when AI-mediated systems operate correctly at scale, what has to remain true of the surrounding regime for those outputs to remain answerable?
        </p>

        <p>
          A good first entry point is{" "}
          <PaperLink href="/papers/working-as-designed">
            Working as Designed: Diagnosing Alignment Failure Without Error
          </PaperLink>
          .
        </p>

        <p>
          The paper begins from a familiar but often under-described failure mode: a system can be locally correct while the regime around it becomes structurally misaligned. The point is not that the system “really” failed according to some hidden moral standard. The point is that output quality, procedural compliance, and specification-following do not by themselves preserve answerability.
        </p>

        <p>
          This matters especially in AI governance because automation often improves the visible surface of administration. It can make decisions faster, more consistent, more traceable, and easier to document. But those improvements can also conceal a deeper displacement. The system may preserve the form of accountability while changing the conditions under which responsibility can terminate in a locus capable of contestable intervention.
        </p>

        <p>
          That leads to the second paper in the sequence:{" "}
          <PaperLink href="/papers/witness-conditions">
            Witness Conditions: Regime Preservation in AI-Mediated Decision Systems
          </PaperLink>
          .
        </p>

        <p>
          The key distinction is simple but sharp: human presence is not the same as witnessing. A person may remain in the loop without occupying a position where consequence can terminate, responsibility can attach, and intervention can still matter. In high-tempo or highly distributed systems, oversight can become decorative. The reviewer is present, the sign-off is recorded, and the process remains formally compliant, but the witness function has already thinned.
        </p>

        <p>
          This does not mean automation is always illegitimate. In many domains, automation is necessary because scale and tempo exceed what real-time human discretion can handle. That is the concern of{" "}
          <PaperLink href="https://doi.org/10.5281/zenodo.18615342">
            The Handover Protocol: Formalizing Necessary Regime Thinning Under Automation
          </PaperLink>
          .
        </p>

        <p>
          The Handover Protocol asks what happens when direct witnessing cannot be preserved. Its central move is to distinguish acknowledged handover from disguised oversight. If decision execution must move into automated or pre-specified systems, the relocation should be structurally explicit. Responsibility should not disappear into the machinery of procedure. It should be relocated in a way that preserves regime intelligibility.
        </p>

        <p>
          But even formal handover has limits. That is where{" "}
          <PaperLink href="/papers/alignment-after-witnessing">
            Alignment After Witnessing: Governance at the Edge of Intelligibility
          </PaperLink>{" "}
          becomes important.
        </p>

        <p>
          Once witnessing fails, alignment does not simply become harder. It changes kind. A system may still match upstream specifications, comply with envelopes, and produce outputs consistent with its design. But if contest pathways no longer terminate in reachable, vulnerable loci, then authority-bearing alignment weakens into trace-consistency alignment. The system can still be consistent with what was specified. What becomes less clear is whether the regime can still answer for what that consistency does in particular cases.
        </p>

        <p>
          The final paper in the entry sequence,{" "}
          <PaperLink href="/papers/vulnerability-laundering-in-ai-mediated-regimes">
            Vulnerability Laundering in AI-Mediated Regimes
          </PaperLink>
          , names a concrete failure mode that follows from this structure.
        </p>

        <p>
          AI-mediated regimes can preserve accountability in form while relocating vulnerability away from the loci where decisions are specified, justified, or enforced. The result is not necessarily opacity. It may be the opposite: a highly visible, auditable, procedurally intact system in which consequence systematically fails to return to the places where constraint is produced. Accountability appears preserved because the paperwork is intact. Functionally, exposure has been laundered.
        </p>

        <p>This is the through-line of the AI-facing IO work:</p>

        <p className="rounded-2xl border border-black/10 bg-white/70 p-5 text-lg font-medium text-black shadow-sm">
          AI systems can work correctly while displacing answerability.
        </p>

        <p>
          That claim does not replace technical alignment work. It does not compete with interpretability, evaluations, security, model behavior research, policy design, or institutional governance. It gives those efforts a structural diagnostic question to carry with them:
        </p>

        <p className="text-2xl font-semibold tracking-tight text-black">
          When the system works, where does responsibility terminate?
        </p>

        <p>
          Start with <span className="font-medium text-black">Working as Designed</span>, then follow the AI alignment and governance reading path.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/ai-alignment"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-black px-5 py-3 text-sm font-medium text-white no-underline hover:bg-black/90"
        >
          Explore the AI-facing papers <span aria-hidden>→</span>
        </Link>
        <Link
          href="/papers/working-as-designed"
          className="inline-flex items-center justify-center rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black/80 no-underline hover:bg-black/5"
        >
          Read Working as Designed
        </Link>
      </div>
    </article>
  );
}
