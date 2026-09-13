# S2 Chapter 8 Flashcards

36 cards: Rates 10, Ratios 10, Proportions 16. Four SVG diagram variants.

Extract this folder beside package.json. Requires the previously installed S2 Chapter 7 flashcards integration and atomic flashcard storage.

```
node s2-chapter8-flashcards-package/install.cjs --dry-run
node s2-chapter8-flashcards-package/install.cjs
npm run build
```

Open /maths/s2/chapter-8/flashcards. Choose studied sections and start. Reveal each answer before grading.

The installer adds the deck, diagrams and page, patches the S2 registry and shared visual component, and enables the homepage link. Backups are made before writing. Unknown layouts or differing existing payload files stop installation before changes. Do not rename the .txt payloads inside this folder.

Existing studentStorage and Supabase code are preserved. No new SQL is needed. Cards use the existing atomic answer flow and appear in the global selector and Smart Review.

Validated in an isolated fixture: strict TypeScript, installer preflight and repeat installation, section selection, global registry, reveal-before-grade, ordinary retry and Smart Review, failed-save queue and retry using a mocked remote RPC. All four SVG variants were rendered and inspected. This is not a live Supabase test or full Next production build. After building locally, grade one card while signed in and verify its saved progress.
