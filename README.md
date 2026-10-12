# Year 8 Science Chapters 3–4 fixes

This update contains the four requested corrections:

1. Chapter 3 Periodic Table flashcards now use explicit question prompts. Generic `Recall point` fronts are blocked by validation.
2. Chapter 3 quiz questions that require a Periodic Table use the supplied clean Periodic Table image rather than the full Knowledge Organiser image.
3. Chapter 4 diagram questions use the original arrows in the four supplied diagrams. Only numbered markers are added; no extra green leader lines or target dots are drawn.
4. All 70 Chapter 4 Separation Techniques flashcards now use specific retrieval questions. Generic `Recall point` fronts are blocked by validation.

The corrected diagram renderer is provided as `KnowledgeOrganiserInteractiveQuestionV2.tsx`, and both the chapter quiz and Cross-Chapter Quiz import that file explicitly. This prevents an older synced copy of the original shared component from restoring the previous green-line overlay.

## Apply

Copy the contents of this package into the root of `pw-learning-hub`, preserving the folder structure and replacing the matching files.

## Validate

```powershell
node scripts/validate-periodic-table.mjs
node scripts/validate-separation-techniques.mjs
npx tsc --noEmit
npm run build
```

The production build requires the same environment variables used by the main project.

## Verified results

- Chapter 3: 98 explicit-question flashcards and 72 quiz questions.
- Chapter 4: 70 explicit-question flashcards and 62 quiz questions.
- Cross-chapter pool: 333 questions.
- TypeScript, ESLint, both chapter validators and the production build pass.
