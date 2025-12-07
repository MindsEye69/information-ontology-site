import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const terms = [
  {
    term: "Difference (Δ)",
    description: "The minimal condition for one state not being another."
  },
  {
    term: "Relation (R)",
    description: "Structured differences between differences."
  },
  {
    term: "Information (I)",
    description:
      "Patterns over relations that are stable enough to 'make a difference'."
  }
];

export default function GlossaryPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold tracking-tight">Glossary</h1>
      <p className="max-w-2xl text-slate-200">
        A working glossary of IO terms. As we migrate the corpus, this section
        will expand and gain cross-links to the main text and simulations.
      </p>

      <div className="space-y-4">
        {terms.map((t) => (
          <Card key={t.term}>
            <CardHeader>
              <CardTitle>{t.term}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-200">
              {t.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
