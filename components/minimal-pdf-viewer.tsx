"use client";

import { useEffect, useRef, useState } from "react";

type MinimalPdfViewerProps = {
  /** Public URL to the PDF (served from /public). */
  src: string;
  /** Max width (px) for rendered pages. */
  maxWidth?: number;
};

export default function MinimalPdfViewer({
  src,
  maxWidth = 920,
}: MinimalPdfViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [status, setStatus] = useState<
    { kind: "idle" } | { kind: "loading" } | { kind: "error"; message: string }
  >({ kind: "idle" });

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        setStatus({ kind: "loading" });

        // Dynamic import keeps pdfjs off the server bundle.
        const pdfjs = (await import("pdfjs-dist")) as any;

        // ✅ Use CDN worker to avoid Next/Vercel bundling/minify issues.
        // Uses the same version as the installed pdfjs-dist package.
        const v = pdfjs.version || "4.0.379";
        pdfjs.GlobalWorkerOptions.workerSrc =
          `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${v}/pdf.worker.min.js`;

        const loadingTask = pdfjs.getDocument(src);
        const pdf = await loadingTask.promise;
        if (cancelled) return;

        const host = containerRef.current;
        if (!host) return;
        host.innerHTML = "";

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (cancelled) return;

          const page = await pdf.getPage(pageNum);

          const vp1 = page.getViewport({ scale: 1 });
          const scale = Math.min(maxWidth / vp1.width, 2);
          const viewport = page.getViewport({ scale });

          const canvas = document.createElement("canvas");
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.style.width = "100%";
          canvas.style.height = "auto";
          canvas.style.display = "block";
          canvas.style.borderRadius = "12px";

          const wrap = document.createElement("div");
          wrap.style.maxWidth = `${maxWidth}px`;
          wrap.style.margin = "0 auto";
          wrap.style.padding = "12px 0";

          const ctx = canvas.getContext("2d");
          if (!ctx) continue;

          wrap.appendChild(canvas);
          host.appendChild(wrap);

          await page.render({ canvasContext: ctx, viewport }).promise;
        }

        if (!cancelled) setStatus({ kind: "idle" });
      } catch (e) {
        const message = e instanceof Error ? e.message : "Unknown error";
        if (!cancelled) setStatus({ kind: "error", message });
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [src, maxWidth]);

  return (
    <div className="rounded-2xl border border-black/10 bg-white">
      <div className="max-h-[80vh] overflow-auto px-4 py-2">
        {status.kind === "loading" ? (
          <div className="py-10 text-sm text-black/55">Loading…</div>
        ) : null}

        {status.kind === "error" ? (
          <div className="py-10 text-sm text-black/55">
            Could not render the PDF inline. You can still download it.
          </div>
        ) : null}

        <div ref={containerRef} />
      </div>
    </div>
  );
}
