"use client";

import Link from "next/link";
import { useTheme } from "@/lib/theme-context";
import { useEffect } from "react";

// Feature flags
// Default: hidden unless explicitly enabled.
const SHOW_ARIADNE = process.env.NEXT_PUBLIC_SHOW_ARIADNE === "true";

const nav = [
  { href: "/start-here", label: "Start Here" },
  { href: "/ai-alignment", label: "AI Path" },
  { href: "/orientation/how-to-build-a-someone", label: "Orientation Guide" },
  { href: "/master", label: "The Master" },
  { href: "/papers", label: "Papers" },
  { href: "/corpus-map", label: "Corpus Map" },
  { href: "/simulations", label: "Simulations" },
  { href: "/process", label: "Process" },
  { href: "/glossary", label: "Glossary" },
  ...(SHOW_ARIADNE ? [{ href: "/ariadne", label: "Ariadne" }] : []),
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Only close on mouseleave for pointer devices that support hover.
    // On touch screens (hover: none) this event fires unexpectedly during
    // tap gestures and causes the menu to close before the user can select an item.
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) return;

    const detailsEl = document.querySelector('details');
    if (!detailsEl) return;

    const handleMouseLeave = () => {
      detailsEl.open = false;
    };

    detailsEl.addEventListener('mouseleave', handleMouseLeave);
    return () => detailsEl.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-paper/85 dark:bg-[#07080d]/85 backdrop-blur border-b border-black/10 dark:border-[#1a1e2a]">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="no-underline">
          <div className="flex flex-col xl:flex-row xl:items-baseline xl:gap-3 min-w-0">
            <span className="text-lg font-semibold tracking-tight truncate text-black dark:text-[#b8c6de]">Informational Ontology</span>
            <span className="text-xs text-black/55 dark:text-[#5a6a82] leading-tight">Rev5.1+ corpus</span>
          </div>
        </Link>

        {/* Mobile / tablet: simple dropdown (prevents chopped links) */}
        <div className="flex items-center xl:hidden gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-black/10 dark:border-slate-700 bg-white/60 dark:bg-[#0d0f18]/60 hover:bg-black/5 dark:hover:bg-[#111828]/80 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <details className="relative">
            <summary className="list-none cursor-pointer select-none text-sm text-black/75 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] px-3 py-2 sm:px-4 sm:py-3 rounded-md border border-black/10 dark:border-slate-700 bg-white/60 dark:bg-[#0d0f18]/60 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-56 max-w-[calc(100vw-1rem)] rounded-xl border border-black/10 dark:border-slate-700 bg-white dark:bg-[#0d0f18] shadow-lg p-2">
              <div className="flex flex-col">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="no-underline text-sm text-black/80 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0] px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:bg-black/5 dark:hover:bg-[#111828]"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="/archive"
                  className="no-underline text-sm text-black/70 dark:text-[#5a6a82] hover:text-black dark:hover:text-[#e4e8f0] px-3 py-2 sm:px-4 sm:py-3 rounded-lg hover:bg-black/5 dark:hover:bg-[#111828]"
                  title="Historical snapshot of the earlier site"
                >
                  Archive
                </a>
              </div>
            </div>
          </details>
        </div>

        {/* Desktop: full nav */}
        <nav className="hidden xl:flex items-center gap-4 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="no-underline whitespace-nowrap text-black/75 dark:text-[#b8c6de] hover:text-black dark:hover:text-[#e4e8f0]">
              {item.label}
            </Link>
          ))}
          <a
            href="/archive"
            className="no-underline whitespace-nowrap text-black/60 dark:text-[#5a6a82] hover:text-black dark:hover:text-[#e4e8f0]"
            title="Historical snapshot of the earlier site"
          >
            Archive
          </a>
          <button
            onClick={toggleTheme}
            className="ml-4 p-2 rounded-md border border-black/10 dark:border-slate-700 bg-white/60 dark:bg-[#0d0f18]/60 hover:bg-black/5 dark:hover:bg-[#111828]/80 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
}


