# Shared Files Changelog — Enslavement

## data/knowledgeOrganisers/registry.ts

- Preserved the existing Migration, Industrial Revolution and Jack the Ripper imports and ordering.
- Added the Enslavement import and one registry array entry.
- Did not change lookup, filtering or sorting logic.

## app/knowledge-organisers/year8/history/page.tsx

- Preserved the Cross-Chapter Quiz entry and all Chapter 1–3 navigation.
- Added one Autumn Term Chapter 4 card and route.
- Did not change styles or other terms.

## Deliberately unchanged shared files

- AI marking route
- Chapter, quiz, mind-map, flashcard and revision-quiz components
- types and student storage helpers

This prevents an older shared implementation from overwriting semantic marking, trusted scoring, randomisation, responsive layout or cross-chapter behaviour.
