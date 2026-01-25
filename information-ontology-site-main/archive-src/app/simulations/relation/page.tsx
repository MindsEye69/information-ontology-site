import ChainNav from "../ChainNav";
import RelationFieldEngine from "@/components/sims/RelationFieldEngine";

export default function RelationSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-sky-400">Simulations · R</p>
        <h1 className="text-3xl font-bold tracking-tight">R — Relation</h1>
        <p className="max-w-3xl text-slate-200">
          Relation adds constraint between differences. Nothing here evaluates, remembers, or
          optimizes—relations simply couple nearby states.
        </p>
      </div>

      <RelationFieldEngine />
    </div>
  );
}
