# Shared Files Changelog — Brazil

These are minimal shared-system changes. Merge them into the latest destination files if local changes overlap.

| File | Change | Existing behaviour preserved |
|---|---|---|
| `data/knowledgeOrganisers/types.ts` | Adds optional section `referenceImages` metadata. | All existing section fields remain compatible. |
| `data/knowledgeOrganisers/registry.ts` | Registers the Brazil organiser. | Existing History, Science and English registrations remain. |
| `app/knowledge-organisers/year8/page.tsx` | Enables the Geography subject card and route. | Existing subject cards remain. |
| `components/knowledge-organisers/knowledgeOrganiserTheme.ts` | Adds Geography teal theme tokens. | Existing subject themes remain unchanged. |
| `components/knowledge-organisers/KnowledgeOrganiserChapter.tsx` | Renders KO reference images and adds a Geography aggregate Interactive Questions category. | Science keeps individual interactive categories; English keeps MCQ/Short/Long/Mixed. |
| `components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz.tsx` | Adds the same Geography aggregate Interactive Questions category to Cross-Chapter Quiz. | Existing subjects retain their category rules. |
| `app/api/knowledge-organisers/mark/route.ts` | Adds Geography-specific AI marking guidance for evidence, units, spatial/process terms and common distinctions. | Existing History, Science and English prompts remain. |

No existing section IDs were changed. No SQL migration or dependency change is included.

