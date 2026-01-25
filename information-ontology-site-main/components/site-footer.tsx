export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-black/60 flex flex-col gap-2">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span>© {new Date().getFullYear()} Informational Ontology</span>
          <span className="text-black/40">•</span>
          <span>Master is authoritative</span>
          <span className="text-black/40">•</span>
          <span>Ariadne is downstream</span>
        </div>
        <div className="text-xs text-black/45">
          This is the rebuilt site. The historical snapshot remains available via the Archive link.
        </div>
      </div>
    </footer>
  );
}
