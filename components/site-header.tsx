import Link from "next/link";

const nav = [
  { href: "/start-here", label: "Start Here" },
  { href: "/orientation/how-to-build-a-someone", label: "Orientation Guide" },
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
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="no-underline">
          <div className="flex items-baseline gap-3 min-w-0">
            <span className="text-lg font-semibold tracking-tight truncate">Informational Ontology</span>
            <span className="text-xs text-black/55 whitespace-nowrap">Rev5+ corpus</span>
          </div>
        </Link>

        {/* Mobile / tablet: simple dropdown (prevents chopped links) */}
        <div className="flex items-center lg:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer select-none text-sm text-black/75 hover:text-black px-3 py-2 rounded-md border border-black/10 bg-white/60 [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-xl border border-black/10 bg-white shadow-lg p-2">
              <div className="flex flex-col">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="no-underline text-sm text-black/80 hover:text-black px-3 py-2 rounded-lg hover:bg-black/5"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="/archive"
                  className="no-underline text-sm text-black/70 hover:text-black px-3 py-2 rounded-lg hover:bg-black/5"
                  title="Historical snapshot of the earlier site"
                >
                  Archive
                </a>
              </div>
            </div>
          </details>
        </div>

        {/* Desktop: full nav */}
        <nav className="hidden lg:flex items-center gap-5 text-sm">
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


