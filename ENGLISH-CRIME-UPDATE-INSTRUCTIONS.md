# Year 8 English Chapter 1 — Update Instructions

## Target

Copy or merge this update into `E:\Projects\pw-learning-hub`. The update adds the Year 8 English subject, Chapter 1 `Crime`, its audit files and its validator.

## Chapter-specific additions

- `data/knowledgeOrganisers/year8EnglishCrime.ts`
- `app/knowledge-organisers/year8/english/page.tsx`
- `app/knowledge-organisers/year8/english/autumn/crime/page.tsx`
- `app/knowledge-organisers/year8/english/revision-quiz/page.tsx`
- `data/knowledgeOrganisers/year8EnglishCrime*`
- `scripts/validate-year8-english-crime.mjs`

## Shared files — merge, do not blindly replace

- `data/knowledgeOrganisers/types.ts`
- `data/knowledgeOrganisers/registry.ts`
- `components/knowledge-organisers/knowledgeOrganiserTheme.ts`
- `components/knowledge-organisers/KnowledgeOrganiserChapter.tsx`
- `components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz.tsx`
- `app/api/knowledge-organisers/mark/route.ts`
- `app/knowledge-organisers/year8/page.tsx`

No SQL migration or new npm dependency is required.

## Local verification

```powershell
cd E:\Projects\pw-learning-hub
npm install
npx tsc --noEmit
npm run lint
node scripts/validate-year8-english-crime.mjs
npm run build
npm run dev
```

Then open:

- `http://localhost:3000/knowledge-organisers/year8`
- `http://localhost:3000/knowledge-organisers/year8/english`
- `http://localhost:3000/knowledge-organisers/year8/english/autumn/crime`
- `http://localhost:3000/knowledge-organisers/year8/english/revision-quiz`

Use Ctrl+F5 if the browser still shows cached content. Mark sections as taught before testing Learn, Mind Map, Flashcards and Quiz.

Do not run `git add`, commit, push or deploy until the localhost checks are complete and approved.
