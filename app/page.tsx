// app/page.tsx
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Informational Ontology
        </h1>
        <p className="max-w-2xl text-slate-200 leading-relaxed">
          Informational Ontology (IO) is an attempt to describe reality starting
          from pure difference and relation, building up through information,
          awareness, valuation, meaning, and practice.
        </p>
        <p className="max-w-2xl text-sm text-slate-400 leading-relaxed">
          This site offers a gentle, narrative path for lay readers, a more
          formal ontological overview, and interactive simulations that make key
          ideas visible.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Start here</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-sm text-slate-300">
              A guided, hand-holding journey through IO using analogies and
              everyday examples. Designed for non-specialists.
            </p>
            <Link
              href="/start"
              className="mt-2 inline-flex items-center text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              Open the introductory path →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ontological chain</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-slate-300">
              The core sequence explored in IO:
            </p>
            <p className="font-mono text-sm text-sky-300">
              Δ → R → I → A → V → M → P
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Difference, Relation, Information, Awareness, Valuation, Meaning,
              Practice.
            </p>
            <Link
              href="/ontology"
              className="mt-3 inline-flex items-center text-sm text-sky-400 hover:text-sky-300"
            >
              View the formal overview →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Simulations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-sm text-slate-300">
              Small visual toys that show how rich structure can emerge from
              simple, rule-based systems.
            </p>
            <Link
              href="/simulations"
              className="mt-2 inline-flex items-center text-sm text-sky-400 hover:text-sky-300"
            >
              Explore simulations →
            </Link>
          </CardContent>
        </Card>
      </section>

      <section>
        <p className="text-xs text-slate-500">
          For a more meta-level overview of the project, see the{" "}
          <Link
            href="/intro"
            className="text-sky-400 hover:text-sky-300 font-medium"
          >
            Introduction
          </Link>{" "}
          page.
        </p>
      </section>
    </main>
  );
}
