# S2 Chapter 9 Flashcards

36 cards, 9 per section, with 7 SVG diagram variants and textbook-style proof references.
Requires the installed Chapter 8 flashcard integration, Chapter 9 shared geometry component and existing atomic flashcard storage.

Extract this folder beside package.json and run:

```
node s2-chapter9-flashcards-package/install.cjs --dry-run
node s2-chapter9-flashcards-package/install.cjs
npm run build
```

Open /maths/s2/chapter-9/flashcards. Select the sections studied, then start. Reveal the answer before grading.

The installer adds the deck, diagram renderer and page, patches the shared flashcard component and S2 registry, and enables the homepage link. It backs up existing files and stops on unrecognised integration points before writing. Keep payloads as .txt within this package.

Existing studentStorage and Supabase code are preserved. No new SQL is required. Uses existing atomic answer events, cross-chapter selection and Smart Review.

Validated in an isolated fixture: strict TypeScript, preflight and repeat installation, section selection, unique IDs and global registry, reveal-before-grade, Smart Review completion, failed-save queue and retry with mocked RPC. Seven SVG variants rendered and visually inspected. This is not a live Supabase test or full Next production build. Build locally, sign in and grade a card to verify actual saved progress.
