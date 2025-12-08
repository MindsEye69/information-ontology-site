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
          Informational Ontology (IO) describes reality starting from pure
          difference and relation, building up through information, awareness,
          valuation, meaning, and practice.
        </p>
        <p className="max-w-2xl text-sm text-slate-400 leading-relaxed">
          The site is structured in layers: a guided path for lay readers,
          a formal ontological overview, and deeper technical material.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {/* Start Here */}
        <Card>
          <CardHeader>
            <CardTitle>Start Here</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-300 leading-relaxed">
              A guided, analogy-rich journey through IO designed for curious
              non-specialists.
            </p>

            <div className="mt-4 flex justify-start">
              <Link href="/start" className="w-full">
                <Button className="w-full rounded-xl font-semibold shadow-lg shadow-sky-500/20">
                  Start the Journey →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Ontology */}
        <Card>
          <CardHeader>
            <CardTitle>Ontological Chain</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2 text-sm text-slate-300">
              The formal structure at the heart of IO:
            </p>
            <p className="font-mono text-sm text-sky-300">
              Δ → R → I → A → V → M → P
            </p>

            <div className="mt-5">
              <Link href="/ontology" className="w-full">
                <Button variant="outline" className="w-full text-sky-300 border-sky-700/60 hover:bg-sky-950/30">
                  Dive Into the Chain →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Simulations */}
        <Card>
          <CardHeader>
            <CardTitle>Simulations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-sm text-slate-300 leading-relaxed">
              Interactive toy systems showing how complex structure
              emerges from simple rules.
            </p>

            <div className="mt-5">
              <Link href="/simulations" className="w-full">
                <Button variant="outline" className="w-full border-slate-700 hover:bg-slate-800">
                  Explore Simulations →
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <p className="text-xs text-slate-500">
          Want background instead? Visit the{" "}
          <Link href="/intro" className="text-sky-400 hover:text-sky-300">
            Introduction
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
