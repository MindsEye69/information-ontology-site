import ChainNav from "../ChainNav";
import ValuePersistenceToy from "@/components/sims/ValuePersistenceToy";

export default function ValueSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-sky-400">Simulations · V</p>
        <h1 className="text-3xl font-bold tracking-tight">V — Value</h1>
        <p className="max-w-3xl text-slate-200">
          Value, in the IO sense, can be modeled as a persistence constraint: what a system must maintain to
          continue existing. This toy shows an agent trying to keep an internal variable within a safe band.
          It is an intuition builder, not a proof.
        </p>
      </div>

      <ValuePersistenceToy />
    </div>
  );
}
