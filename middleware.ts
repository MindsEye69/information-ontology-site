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
  "master",
  "papers",
  "process",
  "glossary",
  "archive",
  "ariadne",
  "about",
  "contact",
]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

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

  // Do not rewrite known current-site routes
  if (CURRENT_SITE_ROUTES.has(seg)) return NextResponse.next();

  // Rewrite legacy route -> archive html
  const url = req.nextUrl.clone();
  url.pathname = `/archive/${seg}.html`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/:path*"],
};
