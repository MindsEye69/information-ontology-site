import { NextResponse } from "next/server";
import { AUTH_COOKIE, getAdminSession } from "@/lib/admin/auth";
import { logAudit } from "@/lib/admin/storage";
export const runtime = "nodejs";
export async function POST(req: Request) {
  const session = getAdminSession();
  if (session) logAudit({ actor: session.username, action: "logout" });
  const res = NextResponse.redirect(new URL("/admin/login?loggedOut=1", req.url), { status: 303 });
  res.cookies.set(AUTH_COOKIE, "", { path: "/", maxAge: 0 });
  return res;
}
