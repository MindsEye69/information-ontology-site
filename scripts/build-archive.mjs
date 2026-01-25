import { execSync } from "node:child_process";
import { existsSync, rmSync, mkdirSync, cpSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const archiveSrc = path.join(root, "archive-src");
const outDir = path.join(archiveSrc, "out");
const targetDir = path.join(root, "public", "archive");

function run(cmd, cwd) {
  execSync(cmd, { cwd, stdio: "inherit", env: process.env });
}

if (!existsSync(archiveSrc)) {
  console.error(`ERROR: archive-src not found at ${archiveSrc}`);
  process.exit(1);
}

console.log(`==> Building archive snapshot from: ${archiveSrc}`);
console.log(`==> Target output directory:        ${targetDir}`);

// Install deps in archive-src
const hasLock = existsSync(path.join(archiveSrc, "package-lock.json"));
run(hasLock ? "npm ci" : "npm install", archiveSrc);

// Build static export (Next output:'export' writes to ./out)
run("npm run build", archiveSrc);

if (!existsSync(outDir)) {
  console.error(`ERROR: Expected export output folder not found: ${outDir}`);
  process.exit(1);
}

// Replace contents of /public/archive
rmSync(targetDir, { recursive: true, force: true });
mkdirSync(targetDir, { recursive: true });
cpSync(outDir, targetDir, { recursive: true });

console.log("==> Done. Archive is now served at /archive (and /archive/index.html).");
