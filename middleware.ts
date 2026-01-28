import { NextRequest, NextResponse } from "next/server";

/**
 * Archive compatibility middleware.
 *
 * The archived snapshot was originally served from the domain root with routes like:
 *   /intro, /faq, /ontology, /simulations, ...
 *
 * When hosted under /public/archive, those absolute links would 404 unless rewritten.
 * This middleware rewrites unknown legacy paths to /archive/<path>.html.
 *
 * It intentionally avoids rewriting current-site routes.
 */

const CURRENT_SITE_ROUTES = new Set([
  "", // home
  // Core navigation
  "start",
  "start-here",
  "deep",
  "intro",
  "abstract",
  "faq",
  "ontology",
  "simulations",
  "context",
  "orientation",
  "master",
  "papers",
  "process",
  "glossary",
  "archive",
  "ariadne",
  "about",
  "contact",
]);

// Known legacy top-level routes that exist in /public/archive as .html snapshots.
// These were historically served at the domain root (e.g. /faq) and appear as
// absolute links inside the archived HTML.
const LEGACY_ARCHIVE_ROUTES = new Set([
  "index",
  "start",
  "intro",
  "abstract",
  "faq",
  "ontology",
  "simulations",
  "context",
  "deep",
  "glossary",
]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const referer = req.headers.get("referer") || "";
  const fromArchive = (() => {
    try {
      const u = new URL(referer);
      return u.pathname.startsWith("/archive/");
    } catch {
      return false;
    }
  })();

  // Ignore Next internals / assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/robots") ||
    pathname.startsWith("/sitemap") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/images")
  ) {
    return NextResponse.next();
  }

  // If already requesting the archive folder, allow /archive/index.html etc.
  if (pathname.startsWith("/archive/")) {
    // Support /archive/<slug> and /archive/<slug>/ by rewriting to .html
    const rest = pathname.slice("/archive/".length).replace(/^\/+|\/+$/g, "");
    if (rest && !rest.includes(".") && !rest.endsWith(".html")) {
      const url = req.nextUrl.clone();
      url.pathname = `/archive/${rest}.html`;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // Root is current site
  if (pathname === "/") return NextResponse.next();

  // Only attempt to rewrite simple one-segment legacy paths (e.g. /faq)
  const seg = pathname.replace(/^\/+|\/+$/g, "");
  if (!seg || seg.includes("/") || seg.includes(".")) return NextResponse.next();

  // If this is a known current-site route, normally do NOT rewrite.
  if (CURRENT_SITE_ROUTES.has(seg) && !fromArchive) return NextResponse.next();

  // If navigating from within the archive, rewrite only the legacy routes that
  // actually exist as archived HTML. This prevents archive pages from hijacking
  // newer site-only routes (e.g. /start-here).
  if (fromArchive && CURRENT_SITE_ROUTES.has(seg) && !LEGACY_ARCHIVE_ROUTES.has(seg)) {
    return NextResponse.next();
  }

  // Rewrite legacy route -> archive html
  const url = req.nextUrl.clone();
  url.pathname = `/archive/${seg}.html`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/:path*"],
};
