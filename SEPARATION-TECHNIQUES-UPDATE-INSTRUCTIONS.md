# Year 8 Science Chapter 4 — Safe Update Instructions

This package adds **Autumn Chapter 4: Separation Techniques** after The Periodic Table. It was prepared from the latest project package supplied in this conversation.

## Before copying

From `E:\Projects\pw-learning-hub`, save or commit current work, then run:

```cmd
git status --short
git diff -- data\knowledgeOrganisers\registry.ts data\knowledgeOrganisers\types.ts components\knowledge-organisers\KnowledgeOrganiserInteractiveQuestion.tsx
```

If any shared file changed after the supplied project package was created, merge only the changes listed in `SHARED-FILES-CHANGELOG-SEPARATION-TECHNIQUES.md`; do not overwrite newer work blindly.

## Copy into the project root

Copy these Chapter 4 paths into `E:\Projects\pw-learning-hub`, preserving folders:

- `data\knowledgeOrganisers\year8ScienceSeparationTechniques.ts`
- `data\knowledgeOrganisers\year8ScienceSeparationTechniques*.md`
- `data\knowledgeOrganisers\year8ScienceSeparationTechniques*.csv`
- `app\knowledge-organisers\year8\science\autumn\separation-techniques\page.tsx`
- `public\knowledge-organisers\science\separation-techniques-ko.png`
- `public\knowledge-organisers\science\separation-filtration-diagram.png`
- `public\knowledge-organisers\science\separation-distillation-diagram.png`
- `public\knowledge-organisers\science\separation-chromatography-diagram.png`
- `public\knowledge-organisers\science\separation-evaporation-diagram.png`
- `scripts\generate-separation-techniques-coverage.mjs`
- `scripts\validate-separation-techniques.mjs`
- the root-level Separation Techniques validation, theme, test and changelog documents

Shared files included in this package:

- `data\knowledgeOrganisers\registry.ts`
- `data\knowledgeOrganisers\types.ts`
- `components\knowledge-organisers\KnowledgeOrganiserInteractiveQuestion.tsx`

Choose **Replace files** only if the three shared files still match the supplied baseline apart from the Chapter 4 changes. Otherwise merge the precise additions in the changelog. No `npm install`, SQL or Supabase migration is required.

## Validate in a CMD terminal

```cmd
node scripts\generate-separation-techniques-coverage.mjs
node scripts\validate-separation-techniques.mjs
rmdir /s /q .next
npx tsc --noEmit
npx eslint data\knowledgeOrganisers\year8ScienceSeparationTechniques.ts data\knowledgeOrganisers\registry.ts data\knowledgeOrganisers\types.ts components\knowledge-organisers\KnowledgeOrganiserInteractiveQuestion.tsx app\knowledge-organisers\year8\science\autumn\separation-techniques\page.tsx scripts\generate-separation-techniques-coverage.mjs scripts\validate-separation-techniques.mjs
npm run build
npm run dev
```

If `rmdir` says `.next` does not exist, continue. Open the site and use `Ctrl+F5` to bypass stale browser assets.

## Local browser checklist

1. Open `/knowledge-organisers/year8/science`; confirm Chapter 4 appears after Chapter 3 and every Science element is green.
2. Open `/knowledge-organisers/year8/science/autumn/separation-techniques`.
3. Mark all seven sections taught and save; reload and confirm persistence.
4. Check Learn, Mind Map and all 70 flashcards for the seven source sections. Every flashcard front must be a specific, complete question ending in `?`; no card may display `Recall point`.
5. Open every Chapter 4 quiz type and Mixed Quiz; confirm 62 total available with all sections taught.
6. Test Matching, Fill in the Blanks, Ordering and Classification, including disabled/enabled Check answer and Next question states.
7. Test all four diagram questions. Confirm each supplied image is loaded, its original arrows remain visible, there are no added green leader lines or target dots, and each number is placed beside the relevant original arrow. The inputs use these exact primary answers:
   - Filtration: mixture; filter paper; residue; filter funnel; conical flask; filtrate.
   - Distillation: thermometer; cooling water out; condenser; cooling water in.
   - Chromatography: pencil; chromatography paper; ink spot; beaker; water/solvent.
   - Evaporation: evaporating basin; solution; Bunsen burner.
8. Test one standard Short and one Long Question while signed in; confirm existing AI marking and retry/self-mark fallback.
9. Open `/knowledge-organisers/year8/science/revision-quiz`; confirm Chapters 1–4 and the totals in `CROSS-CHAPTER-QUIZ-TESTS-SEPARATION-TECHNIQUES.md`.
10. Test desktop, laptop, iPad and mobile widths; check the four source images retain their aspect ratio, number circles remain readable beside the original arrows, and no diagram or selector loses content.
11. Regression-check one History chapter and Science Chapters 1–3.

Do not commit, push or deploy until these localhost checks pass.
