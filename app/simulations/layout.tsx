import type { ReactNode } from "react";

export default function SimulationsLayout({ children }: { children: ReactNode }) {
  return (
    <section className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-12">{children}</div>
    </section>
  );
}
