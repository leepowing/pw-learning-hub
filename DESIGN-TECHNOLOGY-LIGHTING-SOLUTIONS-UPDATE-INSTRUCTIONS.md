# Year 8 Design Technology Chapter 1 — Safe Update Instructions

## Scope

This package adds **Design Technology → Autumn → Chapter 1: Lighting Solutions**. It does not add Chapter 2 and does not contain teacher-PDF questions.

## Apply the update

1. Back up the current project or create a Git branch.
2. Copy the package contents into the project root, preserving the included paths.
3. For files listed in `SHARED-FILES-CHANGELOG-DESIGN-TECHNOLOGY-LIGHTING-SOLUTIONS.md`, merge the additions into the newest local version if your project has changed since this package was prepared.
4. No SQL migration and no new npm dependency are required.

## Validate locally

From PowerShell in the project root:

```powershell
npm install
node scripts/generate-design-technology-lighting-solutions-coverage.mjs
node scripts/validate-design-technology-lighting-solutions.mjs
npx tsc --noEmit
npx eslint data/knowledgeOrganisers/year8DesignTechnologyLightingSolutions.ts app/knowledge-organisers/year8/design-technology components/knowledge-organisers/KnowledgeOrganiserChapter.tsx components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz.tsx components/knowledge-organisers/knowledgeOrganiserTheme.ts app/api/knowledge-organisers/mark/route.ts
npm run build
```

The production build uses the project's existing Supabase environment variables. Do not add placeholder values to a deployed environment.

## Browser checks

- Open `/knowledge-organisers/year8` and confirm that Design Technology is available.
- Open `/knowledge-organisers/year8/design-technology` and confirm that Lighting Solutions is listed.
- Check Learn, Mind Map, Flashcards and Quiz.
- Mark sections as taught and confirm that the Design Technology Cross-Chapter Quiz includes only taught content.
- Check Multiple Choice, Short Questions, Long Questions and the five Chapter 1 interactive activities.
- Submit short and long answers to confirm that AI marking uses Design Technology criteria.

## Expected validation totals

- 5 sections
- 68 KO knowledge points
- 68 flashcards
- 83 questions: 6 multiple choice, 68 standard short, 4 long and 5 interactive
- Knowledge coverage: 68/68 (100%)
- Teacher-question coverage: 0/0 (N/A)
