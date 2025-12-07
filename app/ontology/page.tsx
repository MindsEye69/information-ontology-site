import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OntologyPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold tracking-tight">
        Ontological Structure
      </h1>
      <p className="max-w-2xl text-slate-200">
        This will house the more formal treatment: definitions, propositions,
        diagrams, and references to the working compendium.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Core sequence (draft)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-slate-200">
          <p className="font-mono text-sky-300">
            Δ → R → I → A → V → M → P
          </p>
          <ul className="list-disc space-y-1 pl-5 text-slate-300">
            <li>Δ — Difference</li>
            <li>R — Relation</li>
            <li>I — Information</li>
            <li>A — Awareness</li>
            <li>V — Valuation</li>
            <li>M — Meaning</li>
            <li>P — Practice</li>
          </ul>
          <p className="text-xs text-slate-400">
            Each node will eventually link to its own detailed page, and to
            relevant simulations.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
