import fs from "node:fs";
import path from "node:path";
import { unstable_noStore as noStore } from "next/cache";

export type PaperStatus = "released" | "in_production" | "retired";
export type PaperItem = {
  id: string;
  paper_no?: number;
  title: string;
  slug: string;
  status: PaperStatus;
  state?: string;
  doi?: string | null;
  zenodo?: string | null;
  pdf?: string | null;
  summary?: string;
  function?: string;
  details?: string;
  [key: string]: unknown;
};
export type PaperGroup = { id: string; title: string; items: PaperItem[] };
export type PapersData = {
  meta: { title: string; subtitle?: string; total_papers?: number; released_papers?: number; [key: string]: unknown };
  executive_summary?: PaperItem;
  groups: PaperGroup[];
  [key: string]: unknown;
};
export type AnalyticsEvent = { ts: string; type: string; path?: string; slug?: string; title?: string; referrer?: string; userAgent?: string; ipHash?: string; [key: string]: unknown };
export type AuditEvent = { ts: string; actor: string; action: string; target?: string; details?: Record<string, unknown> };

const root = process.cwd();
export const paths = {
  root,
  papersJson: path.join(root, "content", "papers.json"),
  publicPapers: path.join(root, "public", "papers"),
  analyticsEvents: path.join(root, "data", "analytics", "events.jsonl"),
  auditEvents: path.join(root, "data", "admin", "audit.jsonl"),
  pdfArchiveDir: path.join(root, "data", "admin", "pdf-archive"),
};

function ensureDir(dir: string) { try { fs.mkdirSync(dir, { recursive: true }); } catch {} }
function readJsonFile<T>(filePath: string): T { return JSON.parse(fs.readFileSync(filePath, "utf8")) as T; }
function writeJsonFile(filePath: string, data: unknown) {
  ensureDir(path.dirname(filePath));
  const tmp = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  fs.renameSync(tmp, filePath);
}

export function getPapersData(): PapersData { noStore(); return readJsonFile<PapersData>(paths.papersJson); }
export function flattenPapers(data: PapersData): PaperItem[] { return [data.executive_summary, ...data.groups.flatMap((g) => g.items)].filter(Boolean) as PaperItem[]; }
export function writePapersData(data: PapersData) {
  data.meta = {
    ...data.meta,
    total_papers: data.groups.reduce((sum, group) => sum + group.items.length, 0),
    released_papers: flattenPapers(data).filter((p) => p.status === "released").length,
  };
  writeJsonFile(paths.papersJson, data);
}
export function findPaper(data: PapersData, slug: string): { paper: PaperItem; group?: PaperGroup; index?: number } | null {
  if (data.executive_summary?.slug === slug) return { paper: data.executive_summary };
  for (const group of data.groups) {
    const index = group.items.findIndex((paper) => paper.slug === slug);
    if (index >= 0) return { paper: group.items[index], group, index };
  }
  return null;
}
export function sanitizeSlug(input: string) {
  return input.trim().toLowerCase().replace(/['']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 120);
}
export function uniqueSlug(data: PapersData, desiredSlug: string, currentSlug?: string) {
  const base = sanitizeSlug(desiredSlug) || "paper";
  const taken = new Set(flattenPapers(data).map((p) => p.slug).filter((slug) => slug !== currentSlug));
  let candidate = base; let n = 2;
  while (taken.has(candidate)) { candidate = `${base}-${n}`; n += 1; }
  return candidate;
}
export function sanitizeFilename(input: string) {
  const cleaned = input.normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[\\/:*?"<>|]/g, "-").replace(/\s+/g, " ").trim();
  return cleaned || `paper-${Date.now()}.pdf`;
}
export async function saveUploadedPdf(file: File, previousPublicPath?: string | null) {
  if (!file || file.size === 0) return null;
  if (file.type && file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) throw new Error("Only PDF uploads are accepted.");
  ensureDir(paths.publicPapers); ensureDir(paths.pdfArchiveDir);
  if (previousPublicPath?.startsWith("/papers/")) {
    const oldPath = path.join(paths.root, "public", previousPublicPath);
    if (fs.existsSync(oldPath)) {
      const archiveName = `${new Date().toISOString().replace(/[:.]/g, "-")}-${path.basename(oldPath)}`;
      fs.copyFileSync(oldPath, path.join(paths.pdfArchiveDir, archiveName));
    }
  }
  const safe = sanitizeFilename(file.name.endsWith(".pdf") ? file.name : `${file.name}.pdf`);
  const parsed = path.parse(safe);
  let fileName = safe;
  let target = path.join(paths.publicPapers, fileName);
  if (fs.existsSync(target)) { fileName = `${parsed.name}-${Date.now()}${parsed.ext || ".pdf"}`; target = path.join(paths.publicPapers, fileName); }
  fs.writeFileSync(target, Buffer.from(await file.arrayBuffer()));
  return `/papers/${fileName}`;
}
export function appendJsonl(filePath: string, event: unknown) { try { ensureDir(path.dirname(filePath)); fs.appendFileSync(filePath, `${JSON.stringify(event)}\n`, "utf8"); } catch {} }
export function readJsonl<T>(filePath: string, limit = 10000): T[] {
  noStore(); if (!fs.existsSync(filePath)) return [];
  return fs.readFileSync(filePath, "utf8").split(/\r?\n/).filter(Boolean).slice(-limit).flatMap((line) => { try { return [JSON.parse(line) as T]; } catch { return []; } });
}
export function logAudit(event: Omit<AuditEvent, "ts">) { appendJsonl(paths.auditEvents, { ts: new Date().toISOString(), ...event }); }
export function getAnalyticsEvents(limit = 50000) { return readJsonl<AnalyticsEvent>(paths.analyticsEvents, limit); }
export function getAuditEvents(limit = 1000) { return readJsonl<AuditEvent>(paths.auditEvents, limit); }
export function aggregateAnalytics(events: AnalyticsEvent[]) {
  const pageViews = events.filter((event) => event.type === "page_view");
  const downloads = events.filter((event) => event.type === "paper_download");
  const pdfViews = events.filter((event) => event.type === "paper_pdf_view");
  const countBy = <T extends AnalyticsEvent>(items: T[], key: keyof T) => {
    const map = new Map<string, number>();
    for (const item of items) { const value = item[key]; if (typeof value === "string" && value) map.set(value, (map.get(value) ?? 0) + 1); }
    return Array.from(map.entries()).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  };
  const since = (days: number) => { const threshold = Date.now() - days * 86400000; return events.filter((event) => Date.parse(event.ts) >= threshold); };
  return { totalEvents: events.length, pageViews: pageViews.length, downloads: downloads.length, pdfViews: pdfViews.length, last24h: since(1).length, last7d: since(7).length, last30d: since(30).length, topPages: countBy(pageViews, "path").slice(0,20), topDownloads: countBy(downloads, "title").slice(0,20), topPdfViews: countBy(pdfViews, "title").slice(0,20), topReferrers: countBy(events, "referrer").slice(0,20) };
}
