# English Theme and Subject Regression

## English tokens

Primary `#9f1239`; dark `#881337`; deep `#4c0519`; border `#fda4af`; strong border `#f43f5e`; soft `#fff1f2`; muted `#ffe4e6`; ring `#fecdd3`.

## Checks

- English subject, Chapter, tabs, cards, Mind Map, Flashcards, Quiz and Revision Quiz receive the rose theme through subject-aware tokens.
- History still resolves to primary `#c2410c`.
- Science still resolves to primary `#15803d`.
- Error, success and AI-feedback semantic colours remain semantic rather than subject branding.
- Long questions, definitions and feedback wrap without fixed-height clipping at the existing mobile breakpoint.
- Existing visible focus styles and semantic buttons remain in the shared components.

Automated token and branch checks are included in `scripts/validate-year8-english-crime.mjs`; final keyboard, contrast and responsive checks remain part of localhost visual QA.
