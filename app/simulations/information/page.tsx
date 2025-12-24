import ChainNav from "../ChainNav";
import InformationStabilityEngine from "@/components/sims/InformationStabilityEngine";

export default function InformationSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-sky-400">Simulations · I</p>
        <h1 className="text-3xl font-bold tracking-tight">I — Information</h1>
        <p className="max-w-3xl text-slate-200">
          Information emphasizes persistent structure: patterns stable enough to be re-identified across time.
          These visual aids are not presented as proofs—only as intuition builders.
        </p>
      </div>

      <InformationStabilityEngine />
    </div>
  );
}
