# Shared Files Changelog — Separation Techniques

| Shared file | Change | Preserved behaviour | Safe to replace? |
|---|---|---|---|
| `data/knowledgeOrganisers/registry.ts` | Import and register `year8ScienceSeparationTechniques` after Chapter 3. | All History organisers and Science Chapters 1–3 remain registered; numeric chapter sorting is unchanged. | Only if the local file still matches the supplied baseline; otherwise merge the import and array entry. |
| `data/knowledgeOrganisers/types.ts` | Add four Chapter 4 values to the existing `diagram-labels.diagram` union. | All existing question and interaction shapes are unchanged. | Only if the local file still matches; otherwise add the four string literals to the union. |
| `components/knowledge-organisers/KnowledgeOrganiserInteractiveQuestion.tsx` | Add an accessible image-backed SVG renderer for the four user-supplied Chapter 4 diagrams, with green numbered leader lines and precise target dots. | Existing photosynthesis, leaf and digestive-system diagrams plus all deterministic marking flows remain unchanged. | Only if the local file still matches; otherwise merge `DiagramKind`, `NumberMarker`, `ImageBackedDiagram` and the four renderer branches. |

No changes were made to the shared AI route, storage logic, chapter shell, Cross-Chapter page, theme implementation, History data or existing Science chapter data.

The four new files under `public/knowledge-organisers/science/` are Chapter 4 assets rather than shared code. Their original attribution/watermarks have been retained; no source watermark was removed.

The supplied working package contains no `.git` metadata, so a repository `HEAD` comparison could not be performed here. Run the pre-copy `git diff` commands in the update instructions before replacing shared files.
