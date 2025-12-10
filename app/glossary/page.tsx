// app/glossary/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossary | Informational Ontology",
  description:
    "Glossary of key terms used throughout the Informational Ontology project, written for lay readers.",
};

export default function GlossaryPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">
          Reference
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Glossary
        </h1>
        <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
          This glossary explains the main terms used throughout the
          Informational Ontology project. It is written for lay readers, but
          kept precise enough that you can use it as a reference while reading
          the main text or exploring the website.
        </p>
        <p className="text-sm text-slate-400">
          Tip: you don&apos;t need to memorise everything here. Treat this page
          as a map you can return to whenever a term feels unfamiliar.
        </p>
      </section>

      {/* Core Ontology Terms */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Core ontology terms</h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold text-slate-100">
              Difference (Δ)
            </dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The foundational condition for existence: things must differ to
              exist at all. Without difference, nothing can be distinguished,
              related, or known.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">
              Relation (R)
            </dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A structured connection between differences. Relations form
              patterns (such as order, distance, or connectivity), which are the
              raw material for information.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">
              Information (I)
            </dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Structured differences that rule in or rule out possibilities.
              Information is what patterned difference does when it constrains
              how things can be.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">
              Awareness (A)
            </dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A system&apos;s ability to use information to regulate itself. This
              does not have to be human-like or conscious: a thermostat or a
              bacterium already shows a minimal form of awareness by changing
              behaviour in response to information.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">
              Value (V)
            </dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The distinction between better and worse outcomes for a system&apos;s
              continued existence or organisation. Once a system is aware, some
              states are simply better for it than others. That gradient is what
              IO calls value.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">
              Meaning (M)
            </dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Patterns of information and value woven over time into
              expectations, interpretations, symbols, and internal structure.
              Meaning is what information becomes when it is organised by value.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">
              Purpose (P)
            </dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Meaning and value expressed in consistent, directed action over
              time. A system shows purpose when its behaviour forms trajectories
              that make sense in light of what matters to it.
            </dd>
          </div>
        </dl>
      </section>

      {/* Supporting philosophical terms */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Supporting philosophical terms
        </h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold text-slate-100">Axiom</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A foundational starting-point statement that is not derived from
              anything more basic. IO begins from the axiom that to exist is to
              differ.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">Ontology</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The philosophical study of existence and the fundamental structure
              of reality. Informational Ontology is an ontological framework
              built from difference and information.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">Epistemology</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The study of knowledge and how systems come to know, model, or
              justify beliefs about the world. IO connects epistemology to
              information and awareness.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">Teleology</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Explanation in terms of purpose, goals, or ends. IO treats
              purpose as a real structural feature of complex informational
              systems, rather than something mysterious or supernatural.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">Emergence</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Complex behaviour or structure that arises from simpler components
              and rules. IO treats emergence as a natural result of structured
              difference across scales, not as magic.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">
              Identity persistence
            </dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The way something maintains itself as &quot;the same thing&quot;
              over time despite changes. In IO, identity is tied to patterns of
              information and organisation, not to unchanging &quot;substances&quot;.
            </dd>
          </div>

          <div>
            <dt className="font-semibold text-slate-100">Normativity</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Any structure that involves &quot;better&quot; or &quot;worse&quot;
              (ought-like) assessments. IO grounds normativity in value
              gradients: some outcomes genuinely matter more for a system&apos;s
              continuation.
            </dd>
          </div>
        </dl>
      </section>

      {/* Systems & cognitive terms */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Systems &amp; cognitive terms</h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold text-slate-100">System</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Any coherent organisation of interacting parts: an organism, a
              machine, a process, a social structure, a network of ideas.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Self-regulation</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A system adjusting its own behaviour or structure to maintain
              stability or pursue continuation (for example, keeping
              temperature, energy, or organisation within certain bounds).
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Feedback loop</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A situation where a system&apos;s outputs also act as inputs,
              influencing future behaviour. Feedback can stabilise a system or
              amplify changes.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">State</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The condition of a system at a given moment: the values of its
              relevant variables, positions, or configurations.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Signal</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Anything that carries information from one place to another, such
              as light, sound, electrical impulses, or chemical concentrations.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Gradient</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A directional difference across space or time (for example, a heat
              gradient or chemical gradient). Many minimal forms of awareness
              operate by tracking gradients.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Representation</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A stable internal structure within a system that systematically
              corresponds to some aspect of the world, and can be used to guide
              behaviour.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Prediction</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A system&apos;s anticipation of future conditions based on current
              information and internal models. Predictions help systems prepare
              for and shape what comes next.
            </dd>
          </div>
        </dl>
      </section>

      {/* Physics & information */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Physics &amp; information-related terms
        </h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold text-slate-100">Possibility space</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The set of all states a system could in principle occupy. IO uses
              this idea to talk about how information constrains what is
              possible.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Constraint</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A rule or limitation that restricts which states are possible.
              Constraints are what make lawfulness and structure in the world
              possible.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Entropy</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Roughly, a measure of how many different ways a system could be
              arranged. IO connects entropy to informational structure and
              value.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Decoherence</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              In quantum physics, the process by which superposed states lose
              their ability to interfere due to interactions with the
              environment. IO interprets this in terms of information
              stabilisation, not mystical observation.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Collapse</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The transition from many possible quantum outcomes to one actual
              outcome. In IO, this is treated as a physical process of
              difference and relation, not something caused by human
              consciousness.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Attractor</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A state or set of states that a system tends to move toward during
              its evolution. Purposeful behaviour often appears as movement
              toward attractors in a system&apos;s state space.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Phase space</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A formal space representing all possible states of a system, often
              used in physics and dynamical systems theory.
            </dd>
          </div>
        </dl>
      </section>

      {/* Biological analogy terms */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Biological analogy terms</h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold text-slate-100">Homeostasis</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Self-maintaining behaviour that keeps a system within certain
              ranges (like body temperature or pH). IO uses homeostasis as a
              natural example of value-guided awareness.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Chemotaxis</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Movement of an organism in response to chemical gradients (toward
              nutrients or away from toxins). An example of simple, embodied
              awareness and value.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Fitness</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              In evolutionary theory, how well a system succeeds at surviving
              and reproducing in a given environment. IO treats fitness as a
              long-term measure of how value and structure interact.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">
              Signal transduction
            </dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The process by which biological cells convert external signals
              (like chemicals or light) into internal changes. A concrete
              example of information becoming awareness and action.
            </dd>
          </div>
        </dl>
      </section>

      {/* Computation & networks */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Computation &amp; network terms
        </h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold text-slate-100">Bit</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The simplest unit of digital difference (0 or 1). IO uses bits as
              an analogy for minimal difference, not as the literal building
              blocks of reality.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Logic gate</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A basic computational element that takes one or more binary inputs
              and produces a binary output according to a rule. Used in IO as an
              analogy for structured transformation of information.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Network</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              A set of nodes and connections along which information can flow.
              Examples include neural networks, social networks, or the
              internet.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Integration</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The process of combining multiple signals or pieces of information
              into a coherent internal state. IO treats rich awareness as highly
              integrated information.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Policy</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              In control theory and AI, a policy maps information about the
              world (or states) to actions. Purposeful systems implement
              policies shaped by value and meaning.
            </dd>
          </div>
        </dl>
      </section>

      {/* Site & project specific terms */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Site &amp; project terms</h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-semibold text-slate-100">Start here</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The guided eight-step introduction to the IO chain, written for
              lay readers. It explains Difference, Relation, Information,
              Awareness, Value, Meaning, Purpose, and a final summary.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Deep dives</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Longer, more technical pages that explore each stage and related
              concepts in more depth, aimed at readers with philosophical or
              scientific background.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Simulations</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              Interactive visual tools that illustrate how simple rules on
              differences and relations can give rise to structure, awareness,
              value, and purpose. They are analogies, not proofs.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">
              Ontological chain
            </dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The core sequence Δ → R → I → A → V → M → P that defines the
              Informational Ontology. It appears throughout the site and the
              Rev4 master text.
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-100">Master document</dt>
            <dd className="text-sm text-slate-300 leading-relaxed">
              The canonical Revision 4 text of Informational Ontology, maintained
              offline and mirrored on this site. All conceptual changes must
              pass through the master first.
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
