# Year 8 Science Chapter 2 — Validation Report

## Automated checks

- `node scripts/validate-ecosystem-processes.mjs`: **PASS**
  - 8 unique sections
  - 124 unique questions
  - flashcards generated from every key fact plus defined vocabulary
  - 8/8 format labels represented
  - genuine deterministic renderers connected for fill blanks, matching, ordering, classification and diagram labels
  - 14/14 critical-content spot checks passed
  - 12/12 question-bearing teacher PDFs referenced in the question data
  - 6/6 previously missing prompt checks passed
  - 4/4 standalone calculation/data-context checks passed
  - both original teacher diagram assets connected
- `tsc --noEmit`: **PASS**
- Targeted ESLint: **0 errors**
- `next build`: application compilation and TypeScript stages **PASS**
  - full prerender could not finish in the isolated package because Supabase environment variables are not present
  - failure occurred on an unrelated existing Maths route when its Supabase client was initialised

## Regression and safety

- No History section IDs, History content or stored progress keys were changed.
- Existing History organisers still compile with `period`.
- Science uses `context`; shared views use the documented fallback.
- Science AI instructions are selected only when `organiser.subject` is Science.
- Taught-section filtering remains shared across Learn, Mind Map, Flashcards and Quiz.
- Revision-quiz links and result keys now derive from the organiser subject, allowing History and Science to remain separate.

## Manual checks required on the user's machine

- Sign-in and live Supabase persistence for Greta, Mathis and test account.
- Live OpenAI marking requests (requires the user's environment variables).
- Touch interaction and responsive appearance on the user's iPad/phone.
- Final teacher/parent review of the scientific wording and expected answers.
- Diagram labels, matching, fill blanks, ordering and classification score each entry locally without AI.

## PDF audit rule

- All 18 supplied PDFs are recorded in `ECOSYSTEM-PROCESSES-18-PDF-QUIZ-MANIFEST.md`.
- Six answer PDFs verify answers/mark schemes and do not duplicate their worksheet questions.
- Repeated presentation answer-reveal slides are deduplicated.
- Teacher wording is retained for source questions; any older synthesis is marked `generatedSupplement`.
