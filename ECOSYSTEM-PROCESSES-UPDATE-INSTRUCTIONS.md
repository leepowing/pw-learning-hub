# Year 8 Science Chapter 2 — Safe Update Instructions

## Before copying

Run from the project root:

```powershell
git status --short
git diff -- data/knowledgeOrganisers/year8ScienceEcosystemProcesses.ts data/knowledgeOrganisers/types.ts components/knowledge-organisers/KnowledgeOrganiserChapter.tsx components/knowledge-organisers/KnowledgeOrganiserInteractiveQuestion.tsx scripts/validate-ecosystem-processes.mjs public/knowledge-organisers/science
```

If these shared files contain newer uncommitted work, merge the small additions rather than replacing the files blindly. Otherwise copy the ZIP contents into the project root and choose **Replace the files in the destination**.

## Validate

Use a `cmd` terminal if PowerShell blocks `npx` scripts:

```cmd
node scripts\validate-ecosystem-processes.mjs
npx tsc --noEmit
npx eslint data\knowledgeOrganisers\year8ScienceEcosystemProcesses.ts data\knowledgeOrganisers\types.ts components\knowledge-organisers\KnowledgeOrganiserChapter.tsx components\knowledge-organisers\KnowledgeOrganiserInteractiveQuestion.tsx
npm run build
npm run dev
```

Open:

```text
http://localhost:3000/knowledge-organisers/year8/science
http://localhost:3000/knowledge-organisers/year8/science/autumn/ecosystem-processes
http://localhost:3000/knowledge-organisers/year8/science/revision-quiz
```

Test Greta and Mathis separately. The chapter should show **124 questions** when all 8 sections are taught. In Quiz, specifically test both original teacher diagrams, matching, fill-in-the-blank, ordering and classification; these use deterministic marking. Then test short/long AI marking, question quantity selection and the existing History chapters.

The full 18-file audit and deduplication rule are in `ECOSYSTEM-PROCESSES-18-PDF-QUIZ-MANIFEST.md`.

Do not commit or push until these local checks are complete.
