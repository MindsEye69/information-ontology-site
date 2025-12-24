import ChainNav from "../ChainNav";

export default function InformationSimPage() {
  return (
    <div className="space-y-6">
      <ChainNav />

      <div className="space-y-2">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Simulations · I
        </p>
        <h1 className="text-3xl font-bold tracking-tight">I — Information</h1>
        <p className="max-w-3xl text-slate-200">
          Coming next. This page will host information-focused visual aids (stability, compressibility,
          and predictable structure).
        </p>
      </div>
    </div>
  );
}
