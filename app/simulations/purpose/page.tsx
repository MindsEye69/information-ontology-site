export default function PurposePage() {
  const bg = "#050914";
  const card = "#0b1222";
  const border = "#334155";

  const textMain = "#e6f0ff";
  const textDim = "#cbd5e1";

  const safeBand = "#1f3b5f";
  const failBand = "#4a1e1e";

  const danger = "#ff6b6b";
  const ok = "#7cb8ff";
  const accent = "#38bdf8";

  return (
    <main className="min-h-screen px-8 py-12" style={{ background: bg, color: "white" }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="text-sky-400 text-sm mb-2">Visual aids · P</div>
        <h1 className="text-4xl font-semibold mb-4">P — Purpose</h1>
        <p className="text-lg text-slate-300 max-w-4xl">
          In IO, <strong>purpose</strong> is not a mind-only “goal.” Purpose is a stable, repeatable
          pattern of behavior that can be described as <strong>serving persistence</strong> — i.e.,
          keeping the system inside its <strong>value constraint</strong> (V) over time.
        </p>
        <p className="text-slate-400 mt-2">
          This diagram is intentionally simple. It is an intuition builder, not a proof.
        </p>
      </div>

      {/* Main Card */}
      <div
        className="max-w-6xl mx-auto rounded-xl p-8"
        style={{ background: card, border: `1px solid ${border}` }}
      >
        <h2 className="text-xl font-semibold mb-6">Purpose as persistence-producing feedback</h2>

        <svg viewBox="0 0 1100 590" className="w-full h-auto" aria-label="Purpose diagram">
