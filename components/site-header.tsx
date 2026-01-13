"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/intro", label: "Intro" },
  { href: "/abstract", label: "Abstract" },
  { href: "/faq", label: "FAQ" },
  { href: "/ontology", label: "Ontology" },
  { href: "/simulations", label: "Simulations" },
  { href: "/glossary", label: "Glossary" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950/90">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-400">
            IO
          </span>
          <span className="text-sm text-slate-300">
            Informational Ontology
          </span>
        </Link>
        <nav className="hidden gap-2 text-sm md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant={pathname === item.href ? "default" : "ghost"}
                size="sm"
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
