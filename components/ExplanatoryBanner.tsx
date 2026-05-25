export function ExplanatoryBanner({ className = "" }: { className?: string }) {
  return (
    <div
      className={
        "rounded-2xl border border-black/10 dark:border-[#1a1e2a] bg-white/60 dark:bg-[#111828]/70 px-4 py-3 text-sm text-black/70 dark:text-[#b8c6de] " +
        className
      }
    >
      <span className="font-medium">Explanatory Layer — Not Canonical.</span>{" "}
      <span className="text-black/60 dark:text-[#5a6a82]">
        This page is a guide to help you navigate the corpus. The canonical text lives in the Master and the PDFs.
      </span>
    </div>
  );
}
