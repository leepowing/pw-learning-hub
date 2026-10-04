# Year 8 History Chapter 4 — Update Instructions

Copy the ZIP contents into `E:\Projects\pw-learning-hub` while preserving folders.

## Chapter-only files — safe to add

- `data/knowledgeOrganisers/year8HistoryEnslavement.ts`
- `data/knowledgeOrganisers/year8HistoryEnslavementCoverage.md`
- `data/knowledgeOrganisers/year8HistoryEnslavementAiTests.md`
- `app/knowledge-organisers/year8/history/autumn/enslavement/page.tsx`
- `scripts/validate-enslavement.mjs`

## Shared files — check before Replace

- `data/knowledgeOrganisers/registry.ts`
- `app/knowledge-organisers/year8/history/page.tsx`

These shared files are based on the deployed version containing Chapters 1–3 and the Cross-Chapter Quiz entry. The changes are deliberately minimal: one import/registry entry and one Chapter 4 navigation card. They do not alter the AI route or reusable components.

Before copying, run:

```powershell
git status --short
git diff -- data/knowledgeOrganisers/registry.ts
git diff -- app/knowledge-organisers/year8/history/page.tsx
Copy-Item data/knowledgeOrganisers/registry.ts data/knowledgeOrganisers/registry.before-enslavement.ts
Copy-Item app/knowledge-organisers/year8/history/page.tsx app/knowledge-organisers/year8/history/page.before-enslavement.tsx
```

If either shared file has newer uncommitted changes beyond the Chapter 3 version, stop and merge the two small additions instead of selecting Replace. Otherwise select **Replace the files in the destination**.

After copying:

```powershell
node scripts/validate-enslavement.mjs
npx tsc --noEmit
npx eslint data/knowledgeOrganisers/year8HistoryEnslavement.ts data/knowledgeOrganisers/registry.ts app/knowledge-organisers/year8/history/page.tsx app/knowledge-organisers/year8/history/autumn/enslavement/page.tsx
npm run build
npm run dev
```

If the build reports `supabaseUrl is required`, confirm that the project's normal `.env.local` is present. For an isolated compile-only check, non-secret placeholder values may be supplied exactly as described in `ENSLAVEMENT-VALIDATION-REPORT.md`; never paste real keys into Git or screenshots.

No `npm install`, SQL or Supabase migration is needed. Use Ctrl+F5 in the browser, then follow `ENSLAVEMENT-LOCAL-TESTING.md`.

Do not run git add, commit, push or deploy until localhost testing is complete.
