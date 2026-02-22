import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const dataPath = path.join(repoRoot, "content", "papers.json");

if (!fs.existsSync(dataPath)) {
  console.error("Missing content/papers.json");
  process.exit(1);
}

/** @type {any} */
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const groups = Array.isArray(data.groups) ? data.groups : [];
const exec = data.executive_summary ? [data.executive_summary] : [];
const all = [...exec, ...groups.flatMap((g) => g.items ?? [])];

const released = all.filter((p) => p?.status === "released");

/** @type {string[]} */
const problems = [];

for (const p of released) {
  if (!p?.zenodo) {
    problems.push(`${p.paper_no ?? "?"} ${p.title}: missing zenodo link`);
  }

  // If a released paper declares a local PDF, make sure it exists under /public.
  if (p?.pdf) {
    const publicPath = path.join(repoRoot, "public", p.pdf.replace(/^\//, ""));
    if (!fs.existsSync(publicPath)) {
      problems.push(`${p.paper_no ?? "?"} ${p.title}: pdf not found at public${p.pdf}`);
    }
  }
}

if (problems.length) {
  console.error("Released paper asset check failed:\n" + problems.map((x) => `- ${x}`).join("\n"));
  process.exit(1);
}

console.log(`Papers check OK: ${released.length} released paper(s) validated.`);
