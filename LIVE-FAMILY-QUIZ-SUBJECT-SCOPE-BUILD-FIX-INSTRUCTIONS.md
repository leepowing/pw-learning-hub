# Live Family Quiz — Subject Scope Build Fix

This package includes the complete subject/section update required by the Host page.

It fixes this Vercel error:

`Property 'sectionIds' does not exist on type 'FamilyQuizCatalogQuestion'.`

## Install

1. Extract this ZIP.
2. Copy all three included folders into:

   `E:\Projects\pw-learning-hub`

3. Allow Windows to merge folders and replace existing files.
4. Run:

```powershell
cd E:\Projects\pw-learning-hub
npm run build
```

5. If the build succeeds, run:

```powershell
git add app/family-quiz/host/page.tsx app/api/family-quiz/catalog/route.ts lib/familyQuiz.ts
git commit -m "Fix family quiz subject and section scope"
git push origin main
```

The npm `cache-dir` and `install-scripts` messages shown by Vercel are warnings, not the cause of the failed deployment.

No Supabase SQL or environment-variable changes are required.
