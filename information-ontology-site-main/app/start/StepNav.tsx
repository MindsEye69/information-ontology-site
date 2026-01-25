// app/start/StepNav.tsx
import Link from "next/link";

type StepNavProps = {
  prevHref?: string;
  prevLabel?: string;
  nextHref?: string;
  nextLabel?: string;
};

export function StepNav({ prevHref, prevLabel, nextHref, nextLabel }: StepNavProps) {
  if (!prevHref && !nextHref) return null;

  return (
    <nav className="mt-10 flex flex-col gap-3 border-t border-slate-800 pt-4 sm:flex-row sm:items-center sm:justify-between">
      {prevHref ? (
        <Link
          href={prevHref}
          className="inline-flex items-center text-sm text-slate-300 hover:text-white"
        >
          <span className="mr-2 text-slate-500">←</span>
          {prevLabel}
        </Link>
      ) : (
        <span />
      )}
      {nextHref && (
        <Link
          href={nextHref}
          className="inline-flex items-center justify-end text-sm font-medium text-sky-400 hover:text-sky-300"
        >
          {nextLabel}
          <span className="ml-2 text-slate-500">→</span>
        </Link>
      )}
    </nav>
  );
}
