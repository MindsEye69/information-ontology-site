import ChainNav from "../ChainNav";

export default function ValueSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Simulations · V
        </p>
        <h1 className="text-3xl font-bold tracking-tight">V — Value</h1>
        <p className="max-w-3xl text-slate-200">
          Coming next. This page will host value-focused visual aids (bias, weighting, and selection pressures).
        </p>
      </div>
    </div>
  );
}
