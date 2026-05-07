"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { findPaper, getPapersData, logAudit, PaperItem, saveUploadedPdf, uniqueSlug, writePapersData } from "@/lib/admin/storage";
import { requireAdminSession } from "@/lib/admin/auth";

function getString(formData: FormData, key: string) { const value = formData.get(key); return typeof value === "string" ? value.trim() : ""; }
function getOptionalString(formData: FormData, key: string) { const value = getString(formData, key); return value.length ? value : null; }
function getNumber(formData: FormData, key: string) { const value = getString(formData, key); if (!value) return undefined; const parsed = Number(value); return Number.isFinite(parsed) ? parsed : undefined; }
function cleanStatus(value: string): PaperItem["status"] { return value === "released" || value === "retired" || value === "in_production" ? value : "in_production"; }
function mutatePaths(slug?: string) { revalidatePath("/papers"); revalidatePath("/admin"); revalidatePath("/admin/papers"); revalidatePath("/admin/statistics"); if (slug) { revalidatePath(`/papers/${slug}`); revalidatePath(`/admin/papers/${slug}`); } }

export async function updatePaperAction(formData: FormData) {
  const session = requireAdminSession();
  const currentSlug = getString(formData, "currentSlug");
  const desiredSlug = getString(formData, "slug");
  const targetGroupId = getString(formData, "groupId");
  const data = getPapersData();
  const found = findPaper(data, currentSlug);
  if (!found) throw new Error("Paper not found.");
  const upload = formData.get("pdfFile");
  let uploadedPdf: string | null = null;
  if (upload instanceof File && upload.size > 0) uploadedPdf = await saveUploadedPdf(upload, found.paper.pdf);
  const updated: PaperItem = {
    ...found.paper,
    id: getString(formData, "id") || found.paper.id,
    title: getString(formData, "title") || found.paper.title,
    slug: uniqueSlug(data, desiredSlug || found.paper.title, currentSlug),
    status: cleanStatus(getString(formData, "status") || found.paper.status),
    state: getOptionalString(formData, "state") ?? undefined,
    paper_no: getNumber(formData, "paper_no"),
    doi: getOptionalString(formData, "doi"),
    zenodo: getOptionalString(formData, "zenodo"),
    pdf: uploadedPdf ?? getOptionalString(formData, "pdf"),
    summary: getOptionalString(formData, "summary") ?? undefined,
    function: getOptionalString(formData, "function") ?? undefined,
    details: getOptionalString(formData, "details") ?? undefined,
  };
  if (found.group && typeof found.index === "number") {
    const targetGroup = data.groups.find((group) => group.id === targetGroupId) ?? found.group;
    found.group.items.splice(found.index, 1);
    targetGroup.items.push(updated);
    targetGroup.items.sort((a, b) => (a.paper_no ?? 9999) - (b.paper_no ?? 9999) || a.title.localeCompare(b.title));
  } else data.executive_summary = updated;
  writePapersData(data);
  logAudit({ actor: session.username, action: "paper.update", target: updated.slug, details: { title: updated.title } });
  mutatePaths(currentSlug); mutatePaths(updated.slug);
  redirect(`/admin/papers/${updated.slug}?saved=1`);
}

export async function createPaperAction(formData: FormData) {
  const session = requireAdminSession();
  const data = getPapersData();
  const group = data.groups.find((item) => item.id === getString(formData, "groupId")) ?? data.groups[0];
  if (!group) throw new Error("No paper groups exist.");
  const title = getString(formData, "title");
  if (!title) throw new Error("Title is required.");
  const slug = uniqueSlug(data, getString(formData, "slug") || title);
  const upload = formData.get("pdfFile");
  let pdf = getOptionalString(formData, "pdf");
  if (upload instanceof File && upload.size > 0) pdf = await saveUploadedPdf(upload);
  const paper: PaperItem = { id: getString(formData, "id") || slug, paper_no: getNumber(formData, "paper_no"), title, slug, status: cleanStatus(getString(formData, "status")), state: getOptionalString(formData, "state") ?? undefined, doi: getOptionalString(formData, "doi"), zenodo: getOptionalString(formData, "zenodo"), pdf, summary: getOptionalString(formData, "summary") ?? undefined, function: getOptionalString(formData, "function") ?? undefined, details: getOptionalString(formData, "details") ?? undefined };
  group.items.push(paper);
  group.items.sort((a, b) => (a.paper_no ?? 9999) - (b.paper_no ?? 9999) || a.title.localeCompare(b.title));
  writePapersData(data);
  logAudit({ actor: session.username, action: "paper.create", target: paper.slug, details: { title: paper.title, group: group.id } });
  mutatePaths(paper.slug);
  redirect(`/admin/papers/${paper.slug}?created=1`);
}
