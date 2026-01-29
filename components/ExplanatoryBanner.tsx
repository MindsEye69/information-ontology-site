export function ExplanatoryBanner({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black/70 " +
        className
      }
    >
      <span className="font-medium">Explanatory Layer — Not Canonical.</span>{" "}
      <span className="text-black/60">
        This page is a guide to help you navigate the corpus. The canonical text lives in the Master and the PDFs.
      </span>
    </div>
  );
}
