import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function IntroPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold tracking-tight">
        Introductory Path
      </h1>
      <p className="max-w-2xl text-slate-200">
        This section will gradually become the main layman&apos;s explanation of IO.
        For now it&apos;s a placeholder and a scaffold for the future Rev 4 text.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>The chain in one breath</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-slate-200">
          <p>
            IO starts from the idea that the bare minimum needed for a world is{" "}
            <strong>difference</strong> — some way in which one state is not the
            same as another.
          </p>
          <p>
            Once you have differences, you can talk about{" "}
            <strong>relations</strong> between them. Patterns of relations that
            stay stable enough become what we call{" "}
            <strong>information</strong>.
          </p>
          <p>
            From there, we build up through awareness, valuation, meaning, and
            practice. Each step will get its own section, with a layman
            explanation and a deeper technical layer.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
