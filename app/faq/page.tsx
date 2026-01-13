// app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQ | Informational Ontology",
  description:
    "Common questions and clarifications about Informational Ontology (IO), aligned to the Rev 5 master text.",
};

const qa = [
  {
    "q": "Is this panpsychism?",
    "a": "No. The ontology does not claim that everything is aware. Awareness arises only when information is registered from a perspective. Many informational systems lack awareness entirely."
  },
  {
    "q": "Is this just information theory or computationalism?",
    "a": "No. Information is defined ontologically as structured difference, not as signal, encoding, or computation. Computational and informational theories may model instances of this structure, but they do not ground it."
  },
  {
    "q": "Does this explain consciousness?",
    "a": "The ontology specifies the structural conditions under which awareness can arise. It does not offer a psychological, neuroscientific, or phenomenological theory of consciousness."
  },
  {
    "q": "Is meaning dependent on language?",
    "a": "No. Meaning arises from structured value within awareness. Language is one way meaning can be expressed or stabilized, but it is not its source."
  },
  {
    "q": "Is value subjective here?",
    "a": "Value is system-relative but not arbitrary. It arises from structural constraints within a system, not from opinion or preference in the everyday sense."
  },
  {
    "q": "Does this imply free will or moral responsibility?",
    "a": "No such claims are made in the core ontology. Questions of free will, ethics, and responsibility are downstream applications that depend on additional assumptions."
  },
  {
    "q": "Is this an AI alignment framework?",
    "a": "No. While the ontology can be applied to artificial systems, it does not propose designs, objectives, or alignment strategies."
  },
  {
    "q": "Why isn’t this fully formalized mathematically?",
    "a": "Because awareness, value, meaning, and purpose are structurally definable but not exhaustively formalizable without loss. The ontology explicitly addresses the limits of formalization."
  }
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <section className="space-y-3">
        <p className="text-sm font-semibold tracking-wide text-sky-400 uppercase">
          FAQ
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Questions people naturally ask
        </h1>
        <p className="max-w-3xl text-base text-slate-300 leading-relaxed">
          These answers are derived from the project’s canonical FAQ and kept consistent with the Rev 5 master text.
        </p>
      </section>

      <section className="space-y-4">
        {qa.map((item) => (
          <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 space-y-2">
            <h2 className="text-lg font-semibold text-slate-100">{item.q}</h2>
            <p className="text-base text-slate-300 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 space-y-3">
        <h2 className="text-lg font-semibold">Next</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/abstract">
            <Button variant="secondary">Abstract</Button>
          </Link>
          <Link href="/ontology">
            <Button>Explore the chain</Button>
          </Link>
          <Link href="/deep">
            <Button variant="secondary">Deep Dive</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
