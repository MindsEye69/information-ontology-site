import ChainNav from "../ChainNav";
import AwarenessHomeostasisToy from "@/components/sims/AwarenessHomeostasisToy";

export default function AwarenessSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-black/55">Simulations · A</p>
        <h1 className="text-3xl font-bold tracking-tight">A — Awareness</h1>
        <p className="max-w-3xl text-black/70">
          Awareness is the regime in which informational registration is perspective-relative:
          a system&apos;s internal state shifts in a structured way because of the differences
          it occupies. These visual aids are not presented as proofs — only as intuition builders.
        </p>
      </div>

      <AwarenessHomeostasisToy />
    </div>
  );
}
