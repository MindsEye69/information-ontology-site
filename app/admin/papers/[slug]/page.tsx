import { notFound } from "next/navigation";
import { AdminNav } from "@/components/admin/admin-nav";
import { PaperForm } from "@/components/admin/paper-form";
import { requireAdminSession } from "@/lib/admin/auth";
import { findPaper, getPapersData } from "@/lib/admin/storage";
export const dynamic = "force-dynamic";
export default function EditPaperPage({ params, searchParams }: { params: { slug: string }; searchParams?: { saved?: string; created?: string } }) {
  const session = requireAdminSession(); const data = getPapersData(); const found = findPaper(data, params.slug); if (!found) return notFound();
  return <div><AdminNav username={session.username} /><main className="mx-auto max-w-4xl px-4 py-10"><p className="text-xs uppercase tracking-[0.2em] text-black/55">Admin · Paper manager</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">Edit paper</h1><p className="mt-3 text-sm text-black/60 leading-relaxed">Internal paper numbers and state tags stay inside the admin area. Public pages use title, status, DOI, description, and PDF links.</p>{searchParams?.saved || searchParams?.created ? <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">{searchParams.created ? "Paper created." : "Changes saved."}</div> : null}<div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6"><PaperForm paper={found.paper} groups={data.groups} currentGroupId={found.group?.id} /></div></main></div>;
}
