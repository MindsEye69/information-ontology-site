export function StatCard({ label, value, help }: { label: string; value: string | number; help?: string }) {
  return <div className="rounded-2xl border border-black/10 bg-white/70 p-5"><p className="text-xs uppercase tracking-[0.18em] text-black/45">{label}</p><p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>{help ? <p className="mt-2 text-sm text-black/55 leading-relaxed">{help}</p> : null}</div>;
}
