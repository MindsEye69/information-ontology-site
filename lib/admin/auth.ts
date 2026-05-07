import crypto from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const AUTH_COOKIE = "io_admin_session";
const ITERATIONS = 210_000;
const KEYLEN = 32;
const DIGEST = "sha256";
function base64url(input: Buffer | string) { return Buffer.from(input).toString("base64url"); }
function fromBase64url(input: string) { return Buffer.from(input, "base64url").toString("utf8"); }
export function hashPassword(password: string, salt = crypto.randomBytes(16).toString("base64url")) {
  const hash = crypto.pbkdf2Sync(password, salt, ITERATIONS, KEYLEN, DIGEST).toString("base64url");
  return `pbkdf2$${ITERATIONS}$${salt}$${hash}`;
}
export function verifyPassword(password: string, storedHash: string) {
  const [scheme, iterationsRaw, salt, expected] = storedHash.split("$");
  if (scheme !== "pbkdf2" || !iterationsRaw || !salt || !expected) return false;
  const iterations = Number(iterationsRaw);
  if (!Number.isFinite(iterations) || iterations < 100_000) return false;
  const actual = crypto.pbkdf2Sync(password, salt, iterations, KEYLEN, DIGEST).toString("base64url");
  const a = Buffer.from(actual); const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
function authSecret() { return process.env.AUTH_SECRET || process.env.ADMIN_SESSION_SECRET || "dev-only-change-me-before-deploy"; }
function sign(payload: string) { return crypto.createHmac("sha256", authSecret()).update(payload).digest("base64url"); }
export function getAdminUsername() { return process.env.ADMIN_USERNAME || "admin"; }
export function isAuthConfigured() { return Boolean(process.env.ADMIN_PASSWORD_HASH || process.env.ADMIN_PASSWORD); }
export function verifyAdminLogin(username: string, password: string) {
  if (username !== getAdminUsername()) return false;
  if (process.env.ADMIN_PASSWORD_HASH) return verifyPassword(password, process.env.ADMIN_PASSWORD_HASH);
  if (process.env.ADMIN_PASSWORD) { const a = Buffer.from(password); const b = Buffer.from(process.env.ADMIN_PASSWORD); return a.length === b.length && crypto.timingSafeEqual(a, b); }
  return false;
}
export type AdminSession = { username: string; exp: number };
export function createSessionCookie(username: string) {
  const payload = base64url(JSON.stringify({ username, exp: Date.now() + 1000 * 60 * 60 * 8 } satisfies AdminSession));
  return `${payload}.${sign(payload)}`;
}
export function parseSessionCookie(cookieValue?: string | null): AdminSession | null {
  if (!cookieValue) return null;
  const [payload, signature] = cookieValue.split(".");
  if (!payload || !signature) return null;
  const expected = sign(payload);
  const a = Buffer.from(signature); const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try { const session = JSON.parse(fromBase64url(payload)) as AdminSession; return session.username && Date.now() <= session.exp ? session : null; } catch { return null; }
}
export function getAdminSession() { return parseSessionCookie(cookies().get(AUTH_COOKIE)?.value); }
export function requireAdminSession() { const session = getAdminSession(); if (!session) redirect("/admin/login"); return session; }
export function authStatus() { return { configured: isAuthConfigured(), username: getAdminUsername(), hasPasswordHash: Boolean(process.env.ADMIN_PASSWORD_HASH), hasPlainPasswordEnv: Boolean(process.env.ADMIN_PASSWORD), hasCustomSecret: Boolean(process.env.AUTH_SECRET || process.env.ADMIN_SESSION_SECRET) }; }
