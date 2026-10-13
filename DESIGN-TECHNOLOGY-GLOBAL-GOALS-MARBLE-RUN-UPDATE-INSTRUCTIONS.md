# Year 8 Design Technology Chapter 2 — Safe Update Instructions

## Scope

This package adds **Design Technology → Autumn → Chapter 2: Global Goals and Marble Run** to a project that already contains Chapter 1.

## Apply the update

1. Back up the project or create a Git branch.
2. Copy the package contents into the project root, preserving the included paths.
3. Merge the two files listed in `SHARED-FILES-CHANGELOG-DESIGN-TECHNOLOGY-GLOBAL-GOALS-MARBLE-RUN.md` into their newest local versions.
4. No SQL migration and no new npm dependency are required.

## Validate locally

From PowerShell in `E:\Projects\pw-learning-hub`:

```powershell
npm install
node scripts/generate-design-technology-global-goals-marble-run-coverage.mjs
node scripts/validate-design-technology-global-goals-marble-run.mjs
npx tsc --noEmit
npx eslint data/knowledgeOrganisers/year8DesignTechnologyGlobalGoalsMarbleRun.ts app/knowledge-organisers/year8/design-technology scripts/validate-design-technology-global-goals-marble-run.mjs scripts/generate-design-technology-global-goals-marble-run-coverage.mjs
npm run build
```

The production build uses the project's existing Supabase environment variables.

## Browser checks

- Open `/knowledge-organisers/year8/design-technology` and confirm that Chapters 1 and 2 are shown.
- Open `/knowledge-organisers/year8/design-technology/autumn/global-goals-and-marble-run`.
- Check Learn, Mind Map, Flashcards and Quiz.
- Confirm the 17 Global Goal names are included.
- Check Multiple Choice, Short Questions, Long Questions and all five interactive activities.
- Mark Chapter 1 and Chapter 2 sections as taught and confirm both chapters appear in the Cross-Chapter Quiz.
- Submit short and long answers and check subject-appropriate AI marking.

## Expected totals for Chapter 2

- 5 sections
- 66 KO knowledge points
- 66 flashcards
- 81 questions: 6 multiple choice, 66 standard short, 4 long and 5 interactive
- Knowledge coverage: 66/66 (100%)
- Teacher-question coverage: 0/0 (N/A; no teacher PDF supplied)
