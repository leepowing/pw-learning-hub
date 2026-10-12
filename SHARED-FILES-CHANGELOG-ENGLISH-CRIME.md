# Shared Files Changelog — English Crime

| Shared file | Minimal change | Preserved behaviour |
|---|---|---|
| `data/knowledgeOrganisers/types.ts` | Added optional flashcard source metadata | Existing card objects remain valid |
| `data/knowledgeOrganisers/registry.ts` | Registered English Crime | Existing History and Science registration and sorting retained |
| `knowledgeOrganiserTheme.ts` | Added English rose tokens and subject branch | History orange and Science green unchanged |
| `KnowledgeOrganiserChapter.tsx` | English sees MC, Short, Long and Mixed only | Interactive modes remain available to existing subjects |
| `KnowledgeOrganiserRevisionQuiz.tsx` | Same English-only mode filtering in Cross-Chapter Quiz | Existing cross-chapter interaction support retained |
| AI mark route | Added an English-specific interpretation-aware prompt branch | Science and History branches retained |
| Year 8 subject page | Added an English card | Existing subject cards retained |

All changes are additive or subject-aware. No Science diagram renderer, History content, storage helper, security check or existing question schema was removed.
