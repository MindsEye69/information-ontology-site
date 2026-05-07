import crypto from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { appendJsonl, paths } from "@/lib/admin/storage";
export const runtime = "nodejs";
function hashIp(value: string) { const secret = process.env.ANALYTICS_SALT || process.env.AUTH_SECRET || "io-analytics-dev-salt"; return crypto.createHmac("sha256", secret).update(value).digest("base64url").slice(0, 18); }
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as { path?: string; referrer?: string };
    const path = typeof body.path === "string" ? body.path.slice(0, 300) : "/";
    if (path.startsWith("/admin") || path.startsWith("/api")) return NextResponse.json({ ok: true });
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    appendJsonl(paths.analyticsEvents, { ts: new Date().toISOString(), type: "page_view", path, referrer: typeof body.referrer === "string" ? body.referrer.slice(0, 500) : "", userAgent: req.headers.get("user-agent")?.slice(0, 500) || "", ipHash: hashIp(ip) });
  } catch {}
  return NextResponse.json({ ok: true });
}
