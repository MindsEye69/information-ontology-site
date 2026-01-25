import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import ChainNav from "./ChainNav";

export default function SimulationsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-semibold tracking-tight">
        Simulations &amp; Visual Aids
      </h1>
      <p className="max-w-2xl text-slate-200">
        These are small visual toys meant to illustrate specific steps in the IO
        chain. They are not full models of reality—just tools for intuition.
      </p>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-4 text-sm text-slate-200">
        <span className="font-semibold text-slate-100">Note:</span> These are
        visual aids (and sometimes interactive toys). They illustrate concepts in
        IO but are not presented as scientific proofs or full models of reality.
      </div>

      <ChainNav />

      <Card>
        <CardHeader>
          <CardTitle>Δ → R: Difference and Relation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-slate-200">
          <p>
            Two types of particles (blue and red) follow simple rules of
            attraction and repulsion. From mere type differences, we see
            clusters, boundaries, and mixed zones emerge.
          </p>
          <Link href="/simulations/delta-relation" className="text-sky-400">
            Open the Δ → R toy →
          </Link>
        </CardContent>
      </Card>

      <div className="text-xs text-slate-400">
        Tip: the chain above links to per-stage simulation pages (Δ, R, I, A,
        V, M, P).
      </div>
    </div>
  );
}
