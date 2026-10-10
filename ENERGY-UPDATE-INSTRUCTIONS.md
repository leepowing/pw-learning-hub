# Year 8 Science Chapter 6 — Energy Update Instructions

## Target

Install into:

`E:\Projects\pw-learning-hub`

This update adds Year 8 Science Chapter 6 and automatically includes it in the existing Science Cross-Chapter Quiz.

## Source accounting

- Supplied source: one Knowledge Organiser image
- Teacher question PDFs / worksheets: none supplied and confirmed by the user
- Teacher-question manifest: 0 items
- SQL or Supabase migration: not required
- New npm package: not required

## Chapter-specific new files — safe to copy

- `app/knowledge-organisers/year8/science/autumn/energy/page.tsx`
- `data/knowledgeOrganisers/year8ScienceEnergy.ts`
- `data/knowledgeOrganisers/year8ScienceEnergy*`
- `public/knowledge-organisers/science/energy-ko.jpg`
- `scripts/generate-energy-coverage.mjs`
- `scripts/validate-energy.mjs`
- Chapter 6 audit and testing Markdown files

## Shared file — merge carefully

- `data/knowledgeOrganisers/registry.ts`

The only Chapter 6 change is:

1. Import `year8ScienceEnergy`.
2. Add it immediately after `year8ScienceElectricityAndMagnetism` in the organiser array.

The registry in this package preserves History Chapters 1–4, Science Chapters 1–5 and English Crime. If the local registry has newer work, do not blindly replace it; merge the two Chapter 6 lines.

No shared component, AI route, type, theme or Science landing page requires modification. The landing page, trusted question lookup and Cross-Chapter Quiz already load the registry dynamically.

## Safe installation

Before copying:

```cmd
cd /d E:\Projects\pw-learning-hub
git status --short
git diff -- data\knowledgeOrganisers\registry.ts
copy data\knowledgeOrganisers\registry.ts data\knowledgeOrganisers\registry.before-energy.ts
```

Extract the ZIP and copy its folders and files into `E:\Projects\pw-learning-hub`.

- Choose **Replace** for Chapter 6-specific files if prompted.
- For `registry.ts`, replace only if its contents match the package baseline; otherwise merge the two lines described above.

## Verification

```cmd
node scripts\generate-energy-coverage.mjs
node scripts\validate-energy.mjs
npx tsc --noEmit
npx eslint data\knowledgeOrganisers\year8ScienceEnergy.ts app\knowledge-organisers\year8\science\autumn\energy\page.tsx data\knowledgeOrganisers\registry.ts scripts\generate-energy-coverage.mjs scripts\validate-energy.mjs
npm run build
npm run dev
```

Open:

- `http://localhost:3000/knowledge-organisers/year8/science`
- `http://localhost:3000/knowledge-organisers/year8/science/autumn/energy`
- `http://localhost:3000/knowledge-organisers/year8/science/revision-quiz`

Use `Ctrl+F5` if the browser shows cached content.

Do not run `git add`, commit, push or deploy until localhost testing has been approved.
