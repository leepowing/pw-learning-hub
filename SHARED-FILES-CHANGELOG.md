# Shared Files Changelog

All shared files were edited as a minimal merge against the user's latest uploaded project.

| Shared file | Change | Preserved behaviour | Safe to replace? |
|---|---|---|---|
| `data/knowledgeOrganisers/registry.ts` | Import and register Chapter 1 before Chapter 2. | All History organisers and Science Chapter 2 remain registered; sorting remains unchanged. | Yes, only when the local file still matches the supplied latest project. Check `git diff` first. |
| `data/knowledgeOrganisers/types.ts` | Add `digestive-system` to the existing diagram-label union. | All existing types and diagram kinds remain unchanged. | Same condition as above. |
| `components/knowledge-organisers/KnowledgeOrganiserInteractiveQuestion.tsx` | Render the Chapter 1 digestive-system diagram using the clean user-supplied image, ten numbered leader lines and visible endpoint dots. | Existing photosynthesis, leaf, matching, fill, ordering and classification renderers remain intact. | Same condition as above. |

The shared AI route, revision-quiz component, chapter component, theme file, storage code and History files were not modified.
