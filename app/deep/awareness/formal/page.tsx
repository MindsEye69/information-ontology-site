// app/deep/awareness/formal/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Awareness (A) – Technical notes | Informational Ontology",
  description:
    "Formal treatment of Awareness (A) as integrated, self-referential information in Informational Ontology.",
};

export default function FormalAwarenessPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Technical notes · Awareness (A)
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
          A as Integrated Information
        </h1>
        <p className="text-sm text-slate-300">
          This page develops Awareness (A) as integrated, recursive information:
          information that a system maintains, organizes, and applies to itself
          and its environment. The treatment here is structural rather than
          phenomenological; it does not attempt to reduce qualia, but to give
          a minimal formal account of what it is for a system to be aware in
          IO&apos;s sense.
        </p>
      </section>

      {/* Abstract */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">Abstract</h2>
        <p className="text-sm text-slate-300">
          Building on Δ, R, and I, Awareness (A) is defined in Informational
          Ontology as what occurs when information is integrated into a
          self-maintaining system that forms models of differences and uses
          those models to guide its behavior. We formalize awareness as
          recursive informational closure: a system S is aware to the extent
          that it encodes distinctions about its own states and environment,
          stores them in an internal model M, and applies M to update itself
          under new inputs. This yields a graded notion of awareness, suitable
          for comparing minimal and complex systems without invoking
          mysticism.
        </p>
      </section>

      {/* 1. System model */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          1. Systems, States, and Models
        </h2>
        <p className="text-sm text-slate-300">
          We model a system as a tuple:
        </p>
        <p className="font-mono text-xs text-slate-300">
          S = (X, E, Σ, f)
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>
            X is a Δ-structured set of possible internal states of the system.
          </li>
          <li>
            E is a Δ-structured set of possible environmental states relevant
            to the system.
          </li>
          <li>
            Σ is a Δ-structured set of internal <span className="italic">
              model states
            </span>{" "}
            (representations).
          </li>
          <li>
            f is a transition function f: X × E → X × Σ mapping current
            internal and environmental states to new internal states plus
            updated model states.
          </li>
        </ul>
        <p className="text-sm text-slate-300">
          Intuitively, Σ captures &quot;what the system thinks is going on&quot;
          in terms of differences in X and E; f specifies how the system
          revises that in light of new information.
        </p>
      </section>

      {/* 2. Awareness as internalized information */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          2. Awareness as Internalized Information
        </h2>
        <p className="text-sm text-slate-300">
          The minimal IO claim is that a system is aware if it does not merely
          respond to differences, but maintains an internal structure Σ that
          tracks those differences and can be consulted or updated.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Definition 1 (Minimal Awareness).</span>{" "}
          A system S = (X, E, Σ, f) is minimally aware of E if there exists an
          injective mapping g: E → Σ such that, for relevant histories,
        </p>
        <p className="font-mono text-xs text-slate-300">
          Σ<sub>t</sub> ≈ g(E<sub>t</sub>)
        </p>
        <p className="text-sm text-slate-300">
          where Σ<sub>t</sub> is the model state at time t and E<sub>t</sub>
          is the corresponding environmental state. The ≈ symbol indicates
          that Σ need not encode all details of E, but must preserve some set
          of task-relevant differences.
        </p>
        <p className="text-sm text-slate-300">
          Put simply: the system carries within itself a differentiated
          structure that systematically corresponds to differentiated
          structures outside it.
        </p>
      </section>

      {/* 3. Recursive self-reference */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          3. Recursive Self-Reference
        </h2>
        <p className="text-sm text-slate-300">
          Awareness deepens when a system does not only encode E but also X:
          differences in its own internal states.
        </p>
        <p className="text-sm text-slate-300">
          <span className="font-semibold">Definition 2 (Self-Model).</span> A
          system S has a self-model if there exists a mapping h: X → Σ such
          that, for relevant histories,
        </p>
        <p className="font-mono text-xs text-slate-300">
          Σ<sub>t</sub> = h(X<sub>t</sub>) or Σ<sub>t</sub> = h(X<sub>t</sub>,
          E<sub>t</sub>).
        </p>
        <p className="text-sm text-slate-300">
          This means that the system&apos;s model states encode differences not
          just in the environment, but in its own configuration. Recursive
          awareness arises when updates to Σ depend on Σ itself:
        </p>
        <p className="font-mono text-xs text-slate-300">
          Σ<sub>t+1</sub> = F(Σ<sub>t</sub>, X<sub>t</sub>, E<sub>t</sub>)
        </p>
        <p className="text-sm text-slate-300">
          for some update rule F. This recursive dependence is a structural
          signature of what IO calls <span className="italic">awareness</span>.
        </p>
      </section>

      {/* 4. Awareness as graded */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          4. Graded Awareness
        </h2>
        <p className="text-sm text-slate-300">
          Because Σ, g, and h can be more or less complex, Awareness is
          naturally graded in IO. We can define a simple awareness functional:
        </p>
        <p className="font-mono text-xs text-slate-300">
          A(S) = I(Σ; E, X)
        </p>
        <p className="text-sm text-slate-300">
          where I(Σ; E, X) is the mutual information between the system&apos;s
          model states and the joint external/internal state. Higher A(S)
          indicates that Σ carries more structured information about the
          relevant differences.
        </p>
        <p className="text-sm text-slate-300">
          This does not equate awareness with mutual information, but uses it
          as a convenient measure of how tightly a system&apos;s internal model
          is coupled to its own and its environment&apos;s Δ-structure.
        </p>
      </section>

      {/* 5. From Awareness to Value */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">
          5. Awareness as Precondition for Value
        </h2>
        <p className="text-sm text-slate-300">
          IO&apos;s next step is that awareness of possible states makes
          preference between them possible. If a system can discriminate
          states (via Σ) and anticipate consequences of being in one rather
          than another, it can come to prefer certain differences over others.
        </p>
        <p className="text-sm text-slate-300">
          In the next technical module, we represent such preferences as value
          functions over state spaces and show how they arise naturally once
          Awareness is present.
        </p>
      </section>

      {/* Back link */}
      <section className="border-t border-slate-800 pt-6">
        <Link href="/deep/awareness">
          <Button variant="outline" className="border-slate-700">
            ← Back to Awareness deep dive
          </Button>
        </Link>
      </section>
    </main>
  );
}
