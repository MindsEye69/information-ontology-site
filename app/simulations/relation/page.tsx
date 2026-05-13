import ChainNav from "../ChainNav";
import RelationFieldEngine from "@/components/sims/RelationFieldEngine";

export default function RelationSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Simulations · R</p>
        <h1 className="text-3xl font-bold tracking-tight">R — Relation</h1>
        <p className="max-w-3xl text-black/70">
          Relation adds constraint between differences. Nothing here evaluates, remembers, or
          optimizes — relations simply couple nearby states.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-950 p-1">
        <RelationFieldEngine />
      </div>
    </div>
  );
}
