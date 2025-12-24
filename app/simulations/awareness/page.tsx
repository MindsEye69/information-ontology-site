import ChainNav from "../ChainNav";
import AwarenessLoopToy from "@/components/sims/AwarenessLoopToy";

export default function AwarenessSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Simulations · A
        </p>
        <h1 className="text-3xl font-bold tracking-tight">A — Awareness</h1>
        <p className="max-w-3xl text-slate-200">
          In IO, <span className="font-semibold text-slate-50">awareness</span> is treated as
          feedback-shaped information dynamics: the next state depends partly on the prior state.
        </p>
      </div>

      <AwarenessLoopToy />
    </div>
  );
}
