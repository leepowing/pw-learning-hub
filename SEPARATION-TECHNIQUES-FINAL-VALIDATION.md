# Separation Techniques — Final Validation

## Content and source accounting

- Expected/received/readable teaching sources: 1/1/1
- Knowledge Organiser images visually checked: 1/1
- Teacher PDFs: 0 (user confirmed)
- Teacher tasks/sub-parts: 0
- Wording mismatches, exclusions, blockers, missing context/assets/data: 0
- Printed source heading: `C2 Chapter 2`
- User-approved website placement: Year 8 Science Chapter 4

## Chapter output

- Sections: 7
- Knowledge points: 70 (48 facts + 22 vocabulary)
- Flashcards: 70, each with a complete retrieval question on the front (no generic `Recall point` cards)
- Multiple Choice: 21
- Standard Short Questions: 21
- Long Questions: 5
- Interactive/Structured: 15 (Matching 3; Fill in the Blanks 3; Ordering 4; Classification 1; Label the Diagram 4)
- Total questions: 62
- Knowledge Coverage: 70/70 (100%)
- Teacher Question Coverage: 0/0 (N/A)

## Automated validation status

- `node scripts/generate-separation-techniques-coverage.mjs`: PASS (70 rows)
- `node scripts/validate-separation-techniques.mjs`: PASS
- `npx tsc --noEmit`: PASS
- ESLint on all new/modified TypeScript, TSX and MJS files: PASS
- `npm run build`: PASS with non-secret placeholder environment values
- Static generation: PASS, including `/knowledge-organisers/year8/science/autumn/separation-techniques`
- Chapter 4 ID, section, flashcard, answer and interaction-shape checks: PASS
- Flashcard question-format and `Recall point` regression guards: PASS
- Four diagram subtype/target-count checks: PASS (6/4/5/3 labels)
- Four supplied high-resolution diagram assets: PASS (filtration 750×680; distillation 600×627; chromatography 600×627; evaporation 603×403)
- Diagram primary-answer/number mapping: PASS; distillation now asks only about the four parts indicated by arrows in the original image
- Accessible image-backed renderer, original arrows, number-only overlays and responsive SVG view boxes: PASS by source validation; final visual browser confirmation remains required on the receiving localhost project
- Cross-Chapter aggregation and global ID uniqueness: PASS (333 raw questions across Science Chapters 1–4)
- Cross-Chapter totals: 111 MCQ; 137 standard Short; 24 Long; 61 Interactive
- Science green and History orange source regression checks: PASS
- Source accounting: PASS; expected/received/readable 1/1/1, teacher questions 0/0
- `npm run dev` smoke launch: unavailable in this container because Node returned `uv_interface_addresses` before the server started; the production build completed successfully
- Live authenticated AI calls: not run because no authenticated Supabase session or production OpenAI key was supplied; the trusted shared AI route was not modified
- Git baseline comparison: unavailable because the supplied working package contains no `.git` metadata

Browser interaction, responsive layout and authenticated AI-marking checks in `SEPARATION-TECHNIQUES-UPDATE-INSTRUCTIONS.md` remain required in the receiving localhost project before commit, push or deployment.
