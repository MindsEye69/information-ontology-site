import ChainNav from "../ChainNav";
import AwarenessHomeostasisToy from "@/components/sims/AwarenessHomeostasisToy";

export default function AwarenessSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-sky-400">Simulations · A</p>
        <h1 className="text-3xl font-bold tracking-tight">A — Awareness</h1>
        <p className="max-w-3xl text-slate-200">
          Awareness introduces feedback: a system uses information about its own state to regulate itself.
          These visual aids are not presented as proofs—only as intuition builders.
        </p>
      </div>

      <AwarenessHomeostasisToy />
    </div>
  );
}
