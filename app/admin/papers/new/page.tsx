import { AdminNav } from "@/components/admin/admin-nav";
import { PaperForm } from "@/components/admin/paper-form";
import { requireAdminSession } from "@/lib/admin/auth";
import { getPapersData } from "@/lib/admin/storage";
export const dynamic = "force-dynamic";
export default function NewPaperPage() { const session = requireAdminSession(); const data = getPapersData(); return <div><AdminNav username={session.username} /><main className="mx-auto max-w-4xl px-4 py-10"><p className="text-xs uppercase tracking-[0.2em] text-black/55">Admin · Paper manager</p><h1 className="mt-3 text-3xl font-semibold tracking-tight">Add paper</h1><p className="mt-3 text-sm text-black/60 leading-relaxed">Create a new corpus record, assign it to a cluster, and optionally upload its PDF.</p><div className="mt-8 rounded-2xl border border-black/10 bg-white/70 p-6"><PaperForm groups={data.groups} /></div></main></div>; }
