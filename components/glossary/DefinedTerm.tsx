"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

export default function DefinedTerm({
  term,
  slug,
  tooltip,
  children,
  className = "",
  delayMs = 420,
}: {
  term?: string;
  slug: string;
  tooltip: string;
  children?: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const label = children ?? term ?? slug;
  const [open, setOpen] = useState(false);
  const t = useRef<number | null>(null);
  const id = useId();

  useEffect(() => {
    return () => {
      if (t.current) window.clearTimeout(t.current);
    };
  }, []);

  function arm() {
    if (t.current) window.clearTimeout(t.current);
    t.current = window.setTimeout(() => setOpen(true), delayMs);
  }

  function disarm() {
    if (t.current) window.clearTimeout(t.current);
    t.current = null;
    setOpen(false);
  }

  return (
    <span className="relative inline-block align-baseline">
      <Link
        href={`/glossary/${slug}`}
        onMouseEnter={arm}
        onMouseLeave={disarm}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-describedby={open ? id : undefined}
        className={[
          "no-underline rounded-md px-0.5",
          "text-slate-600 hover:text-slate-700",
          "hover:bg-black/5 transition-colors",
          className,
        ].join(" ")}
        title="Glossary entry"
      >
        {label}
      </Link>

      {open ? (
        <div
          id={id}
          role="tooltip"
          className="absolute left-0 top-full mt-2 w-[min(320px,80vw)] rounded-xl border border-black/10 bg-white/95 p-3 shadow-sm"
        >
          <div className="text-xs leading-relaxed text-black/70 whitespace-pre-wrap">
            {tooltip}
          </div>
          <div className="mt-2">
            <Link
              href={`/glossary/${slug}`}
              className="no-underline text-xs text-black/55 hover:text-black/70"
            >
              Open glossary entry →
            </Link>
          </div>
        </div>
      ) : null}
    </span>
  );
}
