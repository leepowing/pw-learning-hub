# RPE Chapter 2 Changes

## New

- Chapter 2 data: `year8RpeHowDoJewishPeopleLive.ts`
- Chapter route: `/knowledge-organisers/year8/rpe/autumn/how-do-jewish-people-live`
- Coverage generator and validator
- Chapter 2 source, coverage, AI-marking and validation documents

## Shared files changed

- `data/knowledgeOrganisers/registry.ts`: registers RPE Chapters 1 and 2.
- `app/knowledge-organisers/year8/page.tsx`: adds the RPE subject card.
- `app/knowledge-organisers/year8/rpe/page.tsx`: maps Chapter 2 while retaining Spring and Summer Coming soon cards.
- `app/api/knowledge-organisers/mark/route.ts`: adds RPE-specific AI marking guidance.
- `tsconfig.json`: excludes generated delivery packages from TypeScript checking.

No database migration and no new npm dependency are required.
