# Information Ontology Website (Single Vercel Project — Root Deploy)

This repo is a single Next.js site deployed from the **repo root**.

## Archive snapshot

- `/archive-src` contains the historical source of the prior site.
- `/public/archive` serves the frozen snapshot at `https://<domain>/archive`.

To build the archive snapshot (static export with basePath `/archive`):

```bash
./scripts/build-archive.sh
```

## Corpus downloads

The canonical corpus download hub is:

- `/papers`

Backed by:

- `content/papers.json`
- PDFs in `public/papers/`

## Ariadne

Specs:
- `ARIADNE_REQUIREMENTS.md`
- `ARIADNE_IMPLEMENTATION_CHECKLIST.md`
