import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE, createSessionCookie, isAuthConfigured, verifyAdminLogin } from "@/lib/admin/auth";
import { logAudit } from "@/lib/admin/storage";
export const runtime = "nodejs";
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const username = String(formData.get("username") || "").trim();
  const password = String(formData.get("password") || "");
  const next = String(formData.get("next") || "/admin");
  if (!isAuthConfigured()) return NextResponse.redirect(new URL("/admin/login?error=not-configured", req.url), { status: 303 });
  if (!verifyAdminLogin(username, password)) { logAudit({ actor: username || "unknown", action: "login.failed" }); return NextResponse.redirect(new URL("/admin/login?error=invalid", req.url), { status: 303 }); }
  logAudit({ actor: username, action: "login.success" });
  const res = NextResponse.redirect(new URL(next.startsWith("/admin") ? next : "/admin", req.url), { status: 303 });
  res.cookies.set(AUTH_COOKIE, createSessionCookie(username), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 8 });
  return res;
}
