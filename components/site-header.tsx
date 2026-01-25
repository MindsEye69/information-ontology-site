import Link from "next/link";

const nav = [
  { href: "/start-here", label: "Start Here" },
  { href: "/master", label: "The Master" },
  { href: "/papers", label: "Papers" },
  { href: "/process", label: "Process" },
  { href: "/glossary", label: "Glossary" },
  { href: "/ariadne", label: "Ariadne" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link href="/" className="no-underline">
          <div className="flex items-baseline gap-3">
            <span className="text-lg font-semibold tracking-tight">Informational Ontology</span>
            <span className="text-xs text-black/55">Rev5+ corpus</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="no-underline text-black/75 hover:text-black">
              {item.label}
            </Link>
          ))}
          <a
            href="/archive"
            className="no-underline text-black/60 hover:text-black"
            title="Historical snapshot of the earlier site"
          >
            Archive
          </a>
        </nav>
      </div>
    </header>
  );
}
