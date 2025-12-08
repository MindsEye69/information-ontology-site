// app/page.tsx
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <section className="space-y-4">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Informational Ontology
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          A layered ontology of difference, relation, and information
        </h1>
        <p className="max-w-2xl text-slate-200 leading-relaxed">
          Informational Ontology (IO) is an attempt to describe reality starting
          from pure difference and relation, building up through information,
          awareness, valuation, meaning, and practice.
        </p>
        <p className="max-w-2xl text-sm text-slate-400 leading-relaxed">
          The site is designed in layers: a guided path for lay readers, a more
          formal ontological overview, and deeper technical materials for
          specialists.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {/* Start here card */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Start here</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-300 leading-relaxed">
              A guided, hand-holding journey through IO using analogies and
              everyday examples. Designed for non-specialists.
            </p>
            <div className="mt-5">
              <Link href="/start">
                <Button className="w-full rounded-2xl text-sm font-semibold shadow-lg shadow-sky-500/30">
                  Start the journey →
                </Button>
              </Link>
              <p className="mt-2 text-[11px] text-slate-400 leading-relaxed">
                Recommended first step if you&apos;re new to the ideas, or just
                curious and not in the mood for formal philosophy.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Ontological chain card */}
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
              className="mt-4 inline-flex items-center text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              View the formal overview →
            </Link>
          </CardContent>
        </Card>

        {/* Simulations card */}
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
