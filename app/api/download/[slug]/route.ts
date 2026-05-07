import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { appendJsonl, findPaper, getPapersData, paths } from "@/lib/admin/storage";
export const runtime = "nodejs";
function hashIp(value: string) { const secret = process.env.ANALYTICS_SALT || process.env.AUTH_SECRET || "io-analytics-dev-salt"; return crypto.createHmac("sha256", secret).update(value).digest("base64url").slice(0, 18); }
export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const found = findPaper(getPapersData(), params.slug);
  if (!found?.paper.pdf) return NextResponse.redirect(new URL("/papers", req.url));
  const type = req.nextUrl.searchParams.get("mode") === "view" ? "paper_pdf_view" : "paper_download";
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  appendJsonl(paths.analyticsEvents, { ts: new Date().toISOString(), type, slug: found.paper.slug, title: found.paper.title, path: found.paper.pdf, referrer: req.headers.get("referer") || "", userAgent: req.headers.get("user-agent")?.slice(0, 500) || "", ipHash: hashIp(ip) });
  return NextResponse.redirect(new URL(found.paper.pdf, req.url));
}
