const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const BAD = [
  'CANONICAL TEXT PLACEHOLDER',
  'Explanation (placeholder)',
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === '.next' || ent.name === 'node_modules' || ent.name === 'public/archive') continue;
      walk(p, out);
    } else {
      if (p.endsWith('.ts') || p.endsWith('.tsx') || p.endsWith('.json') || p.endsWith('.html') || p.endsWith('.md')) out.push(p);
    }
  }
  return out;
}

const files = walk(ROOT);
const hits = [];
for (const f of files) {
  let s;
  try { s = fs.readFileSync(f, 'utf8'); } catch { continue; }
  for (const b of BAD) {
    if (s.includes(b)) hits.push({ file: path.relative(ROOT, f), token: b });
  }
}

if (hits.length) {
  console.error('Build blocked: placeholder tokens found:');
  for (const h of hits) console.error(`- ${h.token} in ${h.file}`);
  process.exit(1);
}

console.log('Placeholder check: OK');
