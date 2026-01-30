import fs from "fs";
import path from "path";


function cleanTitle(filename) {
  // Drop extension
  let base = filename.replace(/\.pdf$/i, "");

  // Remove leading numbering like "7. " / "7-" / "7_"
  base = base.replace(/^\d+\s*[._-]?\s*/, "");

  // Remove common build suffixes
  base = base.replace(/(_|-)?REVISED(_|-)?FINAL/gi, "");
  base = base.replace(/(_|-)?FINAL(_|-)?LOCKED/gi, "");
  base = base.replace(/(_|-)?FINAL/gi, "");
  base = base.replace(/(_|-)?LOCKED/gi, "");
  base = base.replace(/_v\d+(\.\d+)?/gi, "");
  base = base.replace(/-v\d+(\.\d+)?/gi, "");

  // Normalize separators
  base = base.replace(/_/g, " ").replace(/\s{2,}/g, " ").trim();

  return base || filename.replace(/\.pdf$/i, "");
}

const ROOT = process.cwd();
const PAPERS_DIR = path.join(ROOT, "public", "papers");
const OUT = path.join(ROOT, "content", "papers.json");

if (!fs.existsSync(PAPERS_DIR)) {
  console.error("Missing folder:", PAPERS_DIR);
  process.exit(1);
}

const files = fs
  .readdirSync(PAPERS_DIR)
  .filter((f) => f.toLowerCase().endsWith(".pdf"))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

// Heuristics: detect exec summary, then numbered papers
const exec = files.find((f) => /executive|summary/i.test(f)) || null;

const numbered = files
  .map((f) => {
    const m = f.match(/^(\d+)[-_ ]/); // "1-", "1_", "1 "
    return m ? { n: parseInt(m[1], 10), f } : null;
  })
  .filter(Boolean)
  .sort((a, b) => a.n - b.n);

const payload = {
  executive_summary: exec
    ? {
        title: "Executive Summary",
        slug: "executive-summary",
        pdf: `/papers/${exec}`,
        note: "",
        category: "front",
      }
    : {
        title: "Executive Summary",
        slug: "executive-summary",
        pdf: "/papers/executive-summary.pdf",
        note: "Executive summary PDF not detected. Add it to public/papers/.",
        category: "front",
      },

  // Minimal auto-generated list (you can later regroup into sections)
  sections: [
    {
      title: "Papers (auto-detected)",
      items: numbered.map(({ n, f }) => ({
        id: `paper-${n}`,
        paper_no: n,
        title: cleanTitle(f),
        slug: `paper-${n}`,
        pdf: `/papers/${f}`,
        blurb: "",
      })),
    },
    {
      title: "Unnumbered PDFs",
      items: files
        .filter((f) => !/^(\d+)[-_ ]/.test(f) && f !== exec)
        .map((f) => ({
          id: `file-${f.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`,
          title: f.replace(/\.pdf$/i, ""),
          slug: f.replace(/\.pdf$/i, "").replace(/[^a-z0-9]+/gi, "-").toLowerCase(),
          pdf: `/papers/${f}`,
          blurb: "",
        })),
    },
  ],
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(payload, null, 2), "utf-8");
console.log("Wrote:", OUT);
