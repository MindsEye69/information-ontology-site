import ChainNav from "../ChainNav";
import ValueConstraintDiagram from "@/components/sims/ValueConstraintDiagram";

export default function ValueSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-sky-400">Visual aids · V</p>
        <h1 className="text-3xl font-bold tracking-tight">V — Value</h1>
        <p className="max-w-3xl text-slate-200">
          In IO, <span className="font-semibold">value</span> is not a preference or a moral claim. It is a
          {" "}
          <span className="font-semibold">persistence constraint</span>: a condition that must remain
          satisfied for the system to keep existing.
        </p>
        <p className="max-w-3xl text-slate-300">
          The diagram below is intentionally simple. It is an intuition builder, not a proof.
        </p>
      </div>

      <ValueConstraintDiagram />
    </div>
  );
}
