import fs from "fs";
import path from "path";

function norm(s) {
  return (s ?? "")
    .toString()
    .toLowerCase()
    .replace(/\([^)]*\)/g, " ") // drop parentheticals
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function loadJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function saveJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n", "utf8");
}

function* iterPapers(papersData) {
  // executive summary (non-numbered)
  if (papersData.executive_summary) yield papersData.executive_summary;
  // grouped items
  const groups = papersData.groups ?? [];
  for (const g of groups) {
    for (const item of g.items ?? []) {
      yield item;
    }
  }
}

function main() {
  const repoRoot = process.cwd();
  const papersPath = path.join(repoRoot, "content", "papers.json");

  const mappingArg = process.argv[2];
  if (!mappingArg) {
    console.error("Usage: node scripts/apply_details_summaries.mjs <mapping.json>");
    process.exit(2);
  }

  const mappingPath = path.isAbsolute(mappingArg) ? mappingArg : path.join(repoRoot, mappingArg);

  if (!fs.existsSync(papersPath)) {
    console.error(`Cannot find ${papersPath}. Run this from repo root.`);
    process.exit(2);
  }
  if (!fs.existsSync(mappingPath)) {
    console.error(`Cannot find mapping file: ${mappingPath}`);
    process.exit(2);
  }

  const papersData = loadJson(papersPath);
  const mapping = loadJson(mappingPath);

  // mapping: { by_title: {"normalized title": "summary text"}, by_slug?: {...} }
  const byTitle = mapping.by_title ?? {};
  const bySlug = mapping.by_slug ?? {};

  let applied = 0;
  let skipped = 0;
  const misses = [];

  for (const paper of iterPapers(papersData)) {
    const slug = paper.slug;
    const title = paper.title;

    const sFromSlug = slug && bySlug[slug];
    const sFromTitle = byTitle[norm(title)];

    const summary = sFromSlug ?? sFromTitle;
    if (!summary) {
      skipped++;
      continue;
    }

    const existing = (paper.details ?? "").toString();
    const existingTrim = existing.trimStart();

    // idempotence: don't double-apply if details already begins with our Summary header
    if (existingTrim.startsWith("Summary\n") || existingTrim.startsWith("Summary\r\n")) {
      // Already has a summary block. Leave as-is.
      applied++;
      continue;
    }

    paper.details = existing ? `${summary}\n\n${existing}` : summary;
    applied++;
  }

  saveJson(papersPath, papersData);

  console.log(`Applied summaries to ${applied} item(s). Skipped ${skipped} item(s).`);
  console.log(`Updated: ${papersPath}`);
}

main();
