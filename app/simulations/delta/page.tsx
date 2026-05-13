import Link from "next/link";
import ChainNav from "../ChainNav";
import DifferenceEngine from "@/components/sims/DifferenceEngine";

export default function DeltaSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">
          Simulations · Δ
        </p>
        <h1 className="text-3xl font-bold tracking-tight">Δ — Difference</h1>
        <p className="max-w-3xl text-black/70">
          Visual aids for the <span className="font-semibold text-black">Difference</span> stage.
          These tools are not presented as proofs — only as intuition builders.
        </p>
      </div>

      <div className="rounded-2xl bg-slate-950 p-1">
        <DifferenceEngine />
      </div>

      <div className="text-sm text-black/55">
        Already have the older Δ → R particle toy? It&apos;s still available here:{" "}
        <Link href="/simulations/delta-relation" className="underline underline-offset-4 hover:text-black">
          open Δ → R →
        </Link>
      </div>
    </div>
  );
}
