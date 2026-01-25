import Link from "next/link";
import ChainNav from "../ChainNav";
import DifferenceEngine from "@/components/sims/DifferenceEngine";

export default function DeltaSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Simulations · Δ
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Δ — Difference</h1>
        <p className="max-w-3xl text-slate-200">
          Visual aids for the <span className="font-semibold text-slate-50">Difference</span> stage.
          These tools are not presented as proofs—only as intuition builders.
        </p>
      </div>

      <DifferenceEngine />

      <div className="text-sm text-slate-300">
        Already have the older Δ → R particle toy? It&apos;s still available here: {" "}
        <Link href="/simulations/delta-relation" className="text-sky-400">
          open Δ → R →
        </Link>
      </div>
    </div>
  );
}
