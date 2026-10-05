# Year 8 Science Chapter 1 — Safe Update Instructions

This package was prepared from the latest uploaded project and adds **Autumn Chapter 1: Health and Lifestyle** above the existing Chapter 2.

## Before copying

From `E:\Projects\pw-learning-hub`, save or commit your current work. Then run:

```cmd
git status --short
git diff -- data\knowledgeOrganisers\registry.ts data\knowledgeOrganisers\types.ts components\knowledge-organisers\KnowledgeOrganiserInteractiveQuestion.tsx
```

If any of those three shared files changed after the project ZIP was supplied, stop and merge the small changes described in `SHARED-FILES-CHANGELOG.md` instead of replacing the files blindly.

## Copy into the project root

Copy these new Chapter 1 files and folders while preserving their paths:

- `data\knowledgeOrganisers\year8ScienceHealthAndLifestyle.ts`
- `data\knowledgeOrganisers\year8ScienceHealthAndLifestyle*.md`
- `data\knowledgeOrganisers\year8ScienceHealthAndLifestyle*.csv`
- `app\knowledge-organisers\year8\science\autumn\health-and-lifestyle\page.tsx`
- `public\knowledge-organisers\science\health-and-lifestyle-ko.png`
- `public\knowledge-organisers\science\digestive-system-label-diagram.jpg`
- `scripts\validate-health-and-lifestyle.mjs`
- the root-level test, theme and changelog documents in this package

The following are shared files. Replace them only after the diff check above confirms they still match the supplied project version:

- `data\knowledgeOrganisers\registry.ts`
- `data\knowledgeOrganisers\types.ts`
- `components\knowledge-organisers\KnowledgeOrganiserInteractiveQuestion.tsx`

Do not delete or replace any other project file. In particular, do not replace the shared AI route, Chapter component, Revision Quiz component, theme, storage code, History organisers or Ecosystem Processes data.

## Validate in a CMD terminal

```cmd
node scripts\validate-health-and-lifestyle.mjs
rmdir /s /q .next
npx tsc --noEmit
npx eslint data\knowledgeOrganisers\year8ScienceHealthAndLifestyle.ts data\knowledgeOrganisers\registry.ts data\knowledgeOrganisers\types.ts components\knowledge-organisers\KnowledgeOrganiserInteractiveQuestion.tsx app\knowledge-organisers\year8\science\autumn\health-and-lifestyle\page.tsx
npm run build
npm run dev
```

If `rmdir` says `.next` does not exist, continue. Do not run PowerShell syntax inside the CMD terminal.

## Local browser checklist

1. Open `/knowledge-organisers/year8/science`.
2. Confirm **Health and Lifestyle — Open Chapter 1** appears above **Ecosystem Processes — Open Chapter 2**.
3. Confirm Science branding is green on the subject index, Chapter 1 and Science Cross-Chapter Quiz.
4. Open Chapter 1 and select all nine taught sections, then save.
5. Check Learn and Mind Map contain all nine sections.
6. Confirm 131 flashcards are available when all sections are taught.
7. Open every Quiz type: MCQ, Short, Long, Matching, Fill in the Blanks, Label the Diagram, Ordering, Classification and Mixed.
8. In the digestive-system diagram, confirm numbers 1–10, all green leader lines and their green endpoint dots are visible. Each endpoint must sit on the organ being asked about.
9. Submit one deterministic question and confirm the green `Check answer` button, marking and Next question flow work.
10. Test one Short and one Long Question while signed in; confirm existing AI marking and safe retry/self-mark behaviour.
11. Open `/knowledge-organisers/year8/science/revision-quiz`; confirm Chapters 1 and 2 appear according to taught sections and all interactive types are available.
12. Check at a narrow/mobile width that cards, forms and diagram inputs stack without horizontal loss.
13. Regression-check one History chapter and Science Chapter 2.

Do not commit, push or deploy until these localhost checks pass.
