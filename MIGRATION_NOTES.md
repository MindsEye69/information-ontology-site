# Migration note (build error fix)

If your Vercel build is failing with missing modules like:

- @radix-ui/react-slot
- class-variance-authority
- clsx
- tailwind-merge

that means **old UI/simulation components** (from the previous site) are still present in the repo and being compiled.

You have two valid paths:

## A) Clean swap (recommended)
1. Commit or stash your current work.
2. Delete legacy Next.js app folders at repo root:
   - `app/`
   - `components/`
   - `lib/`
   - `public/` (only if you are okay replacing it)
3. Unzip the new rebuild over the repo root.
4. Re-add any assets you want (PDFs, images) into the new `public/`.

This ensures the new site builds without pulling in legacy shadcn/radix components.

## B) Keep legacy files temporarily
This zip adds the missing dependencies to `package.json` so the build can succeed even if old components remain.
You can then remove old routes incrementally later.

