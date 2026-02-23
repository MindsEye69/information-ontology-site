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
          <span className="text-black/40">•</span>
          <a
            className="inline-flex items-center gap-2 underline decoration-black/20 underline-offset-4 hover:decoration-black/40"
            href="https://michaelsemprevivo.substack.com/"
            target="_blank"
            rel="noreferrer"
          >
            <span
              aria-hidden
              className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-[#FF6719] text-white"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                <path d="M6 5.5h12v2H6v-2Zm0 4h12v2H6v-2Zm0 4h12v8.5L12 19.8 6 22v-8.5Z" />
              </svg>
            </span>
            <span>IO Substack</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
