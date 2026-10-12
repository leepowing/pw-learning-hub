# Shared Files Changelog — The Periodic Table

The Chapter 3 optimisation changes three shared code files in addition to the existing registry integration.

| Shared file | Change | Preserved behaviour | Safe to replace? |
|---|---|---|---|
| `data/knowledgeOrganisers/registry.ts` | Import and register `year8SciencePeriodicTable` after Ecosystem Processes. | All History organisers and Science Chapters 1–2 remain registered; numeric chapter sorting remains unchanged. | Yes, only when the local file still matches the supplied latest project. Check `git diff` first. |
| `data/knowledgeOrganisers/types.ts` | Add optional `referenceImage` metadata to quiz questions. | Existing questions need no change because the field is optional. | Merge the optional field if the local shared type has moved on. |
| `components/knowledge-organisers/KnowledgeOrganiserChapter.tsx` | Render a readable reference image and caption before the answer control when supplied. | Existing chapter questions render exactly as before when no image is supplied. | Merge the import and conditional figure if the local component has moved on. |
| `components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz.tsx` | Render the same question reference in Cross-Chapter Quiz. | Existing cross-chapter selection, marking and result behaviour is unchanged. | Merge the import and conditional figure if the local component has moved on. |

No changes were made to the interactive renderer, theme, AI route, storage code, History data, Health and Lifestyle data, Ecosystem Processes data or Separation Techniques data.

Because the supplied working package contained no `.git` metadata, a repository `HEAD` comparison could not be performed in this workspace. The receiving repository must therefore perform the pre-copy `git diff` check in `PERIODIC-TABLE-UPDATE-INSTRUCTIONS.md`.
