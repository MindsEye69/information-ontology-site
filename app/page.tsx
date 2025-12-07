import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">
        Informational Ontology
      </h1>
      <p className="max-w-2xl text-slate-200">
        Informational Ontology (IO) is an attempt to describe reality starting
        from pure difference and relation, building up through information,
        awareness, valuation, meaning, and practice.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Start here</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-sm text-slate-300">
              A lay-friendly path through IO, with analogies and diagrams.
            </p>
            <Link href="/intro" className="text-sm font-medium text-sky-400">
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
              The core sequence we explore:
            </p>
            <p className="font-mono text-sm text-sky-300">
              Δ → R → I → A → V → M → P
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Difference, Relation, Information, Awareness, Valuation,
              Meaning, Practice.
            </p>
            <Link href="/ontology" className="mt-3 inline-block text-sm">
              Formal overview →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Simulations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-3 text-sm text-slate-300">
              Small visual toys that show how structure and information can
              emerge from simple rules.
            </p>
            <Link href="/simulations" className="text-sm">
              Explore simulations →
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
