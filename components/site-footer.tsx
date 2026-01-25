export function SiteFooter() {
  return (
    <footer className="border-t border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-black/60">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>© 2026 Michael Semprevivo</span>
          <span className="text-black/40">•</span>
          <a
            className="underline decoration-black/20 underline-offset-4 hover:decoration-black/40"
            href="mailto:info@informationontology.org"
          >
            info@informationontology.org
          </a>
        </div>
      </div>
    </footer>
  );
}
