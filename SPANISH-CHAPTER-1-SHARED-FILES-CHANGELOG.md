# Spanish Chapter 1 — Shared Files Changelog

- `types.ts`: added optional flashcard audio and trusted pronunciation item metadata.
- `registry.ts`: registered Spanish Chapter 1 without altering existing organisers.
- `knowledgeOrganiserTheme.ts`: added an isolated violet Spanish theme.
- `KnowledgeOrganiserChapter.tsx`: added Spanish pronunciation practice, five-category mode filtering and Spanish character insertion.
- `KnowledgeOrganiserFlashcards.tsx`: added optional `es-ES` answer audio; non-Spanish cards are unchanged.
- `KnowledgeOrganiserRevisionQuiz.tsx`: added Spanish five-category filtering and Spanish character insertion.
- `year8/page.tsx`: added the Spanish subject entry.
- AI marking route: added Spanish-only marking guidance while retaining the existing trusted server-side question lookup.
- package files: added Microsoft Cognitive Services Speech SDK.

The package does not replace whole shared subsystems and contains no changes intended to remove History, Science, English, Geography, Design Technology, RPE, Maths or Spelling behaviour.
