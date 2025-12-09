// app/start/value/page.tsx
import type { Metadata } from "next";
import { StepNav } from "../StepNav";

export const metadata: Metadata = {
  title: "Start here – Value | Informational Ontology",
  description:
    "Step 5 of the Start Here journey: value as better / worse for a system's ongoing existence.",
};

export default function ValueStepPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Start here · Step 5 of 8
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Value: when some states are better than others
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          Once a system is aware of information and responds to it, another
          distinction quietly appears:{" "}
          <span className="font-semibold">
            some responses keep the system going, others don&apos;t
          </span>
          . IO calls this structural difference{" "}
          <span className="font-semibold">value</span>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">A hungry animal</h2>
        <p className="text-slate-300 leading-relaxed">
          Imagine an animal in a landscape. It can move toward food or away from
          it, toward shelter or into danger. The same information (smell, sight,
          sound) can lead to very different futures depending on how the animal
          responds.
        </p>
        <p className="text-slate-300 leading-relaxed">
          For that animal, some states of the world are{" "}
          <span className="font-semibold">better</span> in a very literal sense:
          they allow its organisation to continue. Others are worse: they lead
          to injury, starvation, or death. That gradient — better / worse for
          continued existence — is what we mean by value at this stage.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Value before morality</h2>
        <p className="text-slate-300 leading-relaxed">
          This doesn&apos;t yet say anything about right or wrong in a moral
          sense. A thermostat “prefers” certain temperatures without having
          ethics. A bacterium “prefers” nutrient-rich regions without having a
          moral code.
        </p>
        <p className="text-slate-300 leading-relaxed">
          IO&apos;s point is that as soon as a system&apos;s awareness is tied
          to its own survival or flourishing, value is baked into the structure
          of what it is to be that system. Moral questions later build on top of
          this more basic fact.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">What to carry forward</h2>
        <p className="text-slate-300 leading-relaxed">
          From this step, keep this in mind:
        </p>
        <p className="text-slate-200 leading-relaxed font-medium">
          When information is used by a system that can do better or worse at
          continuing, value is already in play.
        </p>
      </section>

      <StepNav
        prevHref="/start/awareness"
        prevLabel="Back: Awareness"
        nextHref="/start/meaning"
        nextLabel="Next: Meaning"
      />
    </main>
  );
}
