// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      {/* Hero */}
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Informational Ontology
        </h1>
        <p className="max-w-2xl text-slate-200 leading-relaxed">
          Informational Ontology (IO) is an attempt to describe reality
          starting from pure difference and relation, building up through
          information, awareness, value, meaning, and purpose.
        </p>
        <p className="max-w-2xl text-sm text-slate-400 leading-relaxed">
          The site is designed in layers: a guided path for lay readers, a
          more formal ontological overview, and deeper technical materials
          and simulations for specialists.
        </p>
      </section>

      {/* Three-column cards */}
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
                Recommended if you&apos;re new to the ideas, or just curious
                and not in the mood for formal philosophy.
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
              Difference, Relation, Information, Awareness, Value, Meaning,
              Purpose.
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
            <p className="mb-3 text-sm text-slate-300 leading-relaxed">
              Small visual toys that show how rich structure can emerge from
              simple, rule-based systems tied to the Δ → R → I story.
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

      {/* Intro link */}
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

      {/* Context link */}
      <section>
        <p className="text-xs text-slate-500">
          For philosophical background and positioning, see the{" "}
          <Link
            href="/context"
            className="text-sky-400 hover:text-sky-300 font-medium"
          >
            Context
          </Link>{" "}
          page.
        </p>
      </section>

      {/* Contact */}
      <section className="pt-4">
        <a
          href="mailto:info@informationontology.org"
          className="inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          info@informationontology.org
        </a>
      </section>
    </main>
  );
}
