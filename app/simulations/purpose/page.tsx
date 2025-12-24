import ChainNav from "../ChainNav";

export default function PurposeSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Simulations · P
        </p>
        <h1 className="text-3xl font-bold tracking-tight">P — Purpose</h1>
        <p className="max-w-3xl text-slate-200">
          Coming next. This page will host purpose-focused visual aids (stable trajectories and resilience under disturbance).
        </p>
      </div>
    </div>
  );
}
