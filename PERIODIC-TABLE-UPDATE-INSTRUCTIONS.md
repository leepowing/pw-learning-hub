# Year 8 Science Chapter 3 — Safe Update Instructions

This package adds **Autumn Chapter 3: The Periodic Table** after the existing Science Chapters 1 and 2. It was prepared from the latest project package supplied in this conversation.

## Before copying

From `E:\Projects\pw-learning-hub`, save or commit current work. Then run:

```cmd
git status --short
git diff -- data\knowledgeOrganisers\registry.ts
```

If `registry.ts` changed after the project package was supplied, merge the one import and one registration described in `SHARED-FILES-CHANGELOG-PERIODIC-TABLE.md` instead of replacing it blindly.

## Copy into the project root

Copy these new Chapter 3 files and folders while preserving their paths:

- `data\knowledgeOrganisers\year8SciencePeriodicTable.ts`
- `data\knowledgeOrganisers\year8SciencePeriodicTable*.md`
- `data\knowledgeOrganisers\year8SciencePeriodicTable*.csv`
- `app\knowledge-organisers\year8\science\autumn\the-periodic-table\page.tsx`
- `public\knowledge-organisers\science\periodic-table-ko.png`
- `public\knowledge-organisers\science\periodic-table-reference.jpeg`
- `scripts\generate-periodic-table-coverage.mjs`
- `scripts\validate-periodic-table.mjs`
- the root-level Periodic Table test, validation, theme and changelog documents in this package

Shared code files in this optimisation package are:

- `data\knowledgeOrganisers\registry.ts`
- `data\knowledgeOrganisers\types.ts`
- `components\knowledge-organisers\KnowledgeOrganiserChapter.tsx`
- `components\knowledge-organisers\KnowledgeOrganiserRevisionQuiz.tsx`

Do not delete or replace any other project file. The shared question type and both quiz screens are included solely to support the optional `referenceImage` shown with table-lookup questions. Do not replace the interactive renderer, AI route, storage code, theme, History organisers, Health and Lifestyle data, Ecosystem Processes data or Separation Techniques data.

## Validate in a CMD terminal

```cmd
node scripts\generate-periodic-table-coverage.mjs
node scripts\validate-periodic-table.mjs
rmdir /s /q .next
npx tsc --noEmit
npx eslint data\knowledgeOrganisers\year8SciencePeriodicTable.ts data\knowledgeOrganisers\types.ts data\knowledgeOrganisers\registry.ts components\knowledge-organisers\KnowledgeOrganiserChapter.tsx components\knowledge-organisers\KnowledgeOrganiserRevisionQuiz.tsx app\knowledge-organisers\year8\science\autumn\the-periodic-table\page.tsx
npm run build
npm run dev
```

If `rmdir` says `.next` does not exist, continue. Do not run PowerShell syntax inside a CMD terminal.

## Local browser checklist

1. Open `/knowledge-organisers/year8/science`.
2. Confirm the order is Health and Lifestyle — Chapter 1, Ecosystem Processes — Chapter 2, then The Periodic Table — Chapter 3.
3. Confirm all Science branding is green on the index, both Chapter 3 screens and Science Cross-Chapter Quiz.
4. Open Chapter 3 and mark all seven sections taught, then save.
5. Check Learn and Mind Map contain all seven sections, with 20 core element-symbol recall points and the complete table retained as the source image.
6. Confirm 98 flashcards are available with all seven sections taught; every card front must be a specific question and none may say `Recall point`.
7. Open every Chapter 3 quiz type: MCQ, Short, Long, Matching, Fill in the Blanks, Ordering, Classification and Mixed.
8. Check the Group 7 equation-completion question appears within Fill in the Blanks and marks chlorine/iodine deterministically.
9. Confirm `q061`, `q062` and `q077`–`q079` display the clean uploaded Periodic Table (not the Knowledge Organiser page), then submit one question of every deterministic format and confirm the green `Check answer` button, marking and Next question flow work.
10. Test one standard Short and one Long Question while signed in; confirm existing AI marking and retry/self-mark fallback.
11. Open `/knowledge-organisers/year8/science/revision-quiz`; confirm Chapters 1, 2 and 3 appear according to taught sections and the new question formats are included.
12. Confirm the all-taught Cross-Chapter Quiz totals match `CROSS-CHAPTER-QUIZ-TESTS-PERIODIC-TABLE.md`.
13. Check narrow/mobile width for cards, selectors, matching rows and classification rows without horizontal loss.
14. Regression-check one History chapter and Science Chapters 1 and 2.

Do not commit, push or deploy until these localhost checks pass.
