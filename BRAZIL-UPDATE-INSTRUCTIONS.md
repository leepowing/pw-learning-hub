# Year 8 Geography Chapter 1 — Brazil Update Instructions

## Before copying

1. Close the local development server.
2. In `E:\Projects\pw-learning-hub`, run `git status --short` and keep a copy of any uncommitted work.
3. Extract this ZIP to a temporary folder. Do not delete the existing project or replace unrelated files.

## Apply the update

Copy the ZIP contents into `E:\Projects\pw-learning-hub`, preserving the folder structure.

- New Brazil chapter files and image assets can be copied directly.
- Shared files listed in `SHARED-FILES-CHANGELOG-BRAZIL.md` must be merged with the latest local versions if they have local edits. Do not blindly replace a newer shared file.
- No SQL migration and no new npm dependency are required.

## Validate locally

From PowerShell in `E:\Projects\pw-learning-hub`:

```powershell
npm install
node scripts/generate-brazil-coverage.mjs
node scripts/validate-brazil.mjs
npx tsc --noEmit
npm run build
```

The production build uses the project's existing `.env.local` Supabase values. Then run:

```powershell
npm run dev
```

Open:

- `http://localhost:3000/knowledge-organisers/year8/geography`
- `http://localhost:3000/knowledge-organisers/year8/geography/autumn/brazil`
- `http://localhost:3000/knowledge-organisers/year8/geography/revision-quiz`

Complete the checks in `BRAZIL-LOCAL-TESTING-CHECKLIST.md` before committing.

