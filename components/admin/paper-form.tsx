import { createPaperAction, updatePaperAction } from "@/lib/admin/actions";
import type { PaperGroup, PaperItem } from "@/lib/admin/storage";

function Input({ label, name, defaultValue, required, type = "text" }: { label: string; name: string; defaultValue?: string | number | null; required?: boolean; type?: string }) {
  return <label className="block"><span className="text-xs uppercase tracking-[0.16em] text-black/50">{label}</span><input name={name} type={type} required={required} defaultValue={defaultValue ?? ""} className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/35" /></label>;
}
function Textarea({ label, name, defaultValue, rows = 5 }: { label: string; name: string; defaultValue?: string | null; rows?: number }) {
  return <label className="block"><span className="text-xs uppercase tracking-[0.16em] text-black/50">{label}</span><textarea name={name} defaultValue={defaultValue ?? ""} rows={rows} className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm leading-relaxed outline-none focus:border-black/35" /></label>;
}
export function PaperForm({ paper, groups, currentGroupId }: { paper?: PaperItem; groups: PaperGroup[]; currentGroupId?: string }) {
  const action = paper ? updatePaperAction : createPaperAction;
  return <form action={action} className="space-y-6" encType="multipart/form-data">
    {paper ? <input type="hidden" name="currentSlug" value={paper.slug} /> : null}
    <div className="grid gap-5 md:grid-cols-2"><Input label="Internal ID" name="id" defaultValue={paper?.id} /><Input label="Internal paper number" name="paper_no" type="number" defaultValue={paper?.paper_no} /></div>
    <Input label="Public title" name="title" defaultValue={paper?.title} required />
    <Input label="Slug" name="slug" defaultValue={paper?.slug} />
    <div className="grid gap-5 md:grid-cols-3">
      <label className="block"><span className="text-xs uppercase tracking-[0.16em] text-black/50">Cluster</span><select name="groupId" defaultValue={currentGroupId ?? groups[0]?.id} className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/35">{groups.map((group) => <option key={group.id} value={group.id}>{group.title}</option>)}</select></label>
      <label className="block"><span className="text-xs uppercase tracking-[0.16em] text-black/50">Public status</span><select name="status" defaultValue={paper?.status ?? "in_production"} className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm outline-none focus:border-black/35"><option value="in_production">In production</option><option value="released">Released</option><option value="retired">Retired</option></select></label>
      <Input label="Internal state" name="state" defaultValue={paper?.state} />
    </div>
    <div className="grid gap-5 md:grid-cols-2"><Input label="DOI" name="doi" defaultValue={paper?.doi} /><Input label="Zenodo URL" name="zenodo" defaultValue={paper?.zenodo} /></div>
    <Input label="PDF path" name="pdf" defaultValue={paper?.pdf} />
    <label className="block rounded-2xl border border-black/10 bg-white/60 p-5"><span className="text-xs uppercase tracking-[0.16em] text-black/50">Upload or replace PDF</span><input name="pdfFile" type="file" accept="application/pdf,.pdf" className="mt-3 block w-full text-sm" /><span className="mt-2 block text-xs text-black/50">Uploaded files are saved into public/papers. When replacing an existing PDF, the old file is copied into data/admin/pdf-archive first.</span></label>
    <Textarea label="Short description" name="summary" defaultValue={paper?.summary} />
    <Textarea label="Function in corpus" name="function" defaultValue={paper?.function} />
    <Textarea label="Details" name="details" defaultValue={paper?.details} rows={9} />
    <div className="flex gap-3 flex-wrap"><button type="submit" className="rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-black/90">{paper ? "Save paper" : "Create paper"}</button><a href="/admin/papers" className="no-underline rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm text-black/70 hover:bg-black/5">Cancel</a></div>
  </form>;
}
