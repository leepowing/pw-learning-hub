# RPE Chapter 1 validation report

## Content counts

- Chapters: 1
- Sections: 4
- Source knowledge points / terms: 59
- Flashcards: 63 (59 direct source cards + 4 synthesis cards)
- Questions: 84
  - Multiple choice: 16
  - Short answer: 59
  - Long answer: 4
  - Interactive / structured: 5

## Knowledge coverage

- Denominator: 59
- Learn: 59 / 59
- Mind Map: 59 / 59
- Flashcards: 59 / 59
- Complete quiz bank: 59 / 59
- Covered: 59
- Partially covered: 0
- Missing: 0
- Knowledge Coverage: **100%**
- Teacher Question Coverage: **N/A — no teacher questions supplied**

The item-by-item mappings are in `RPE-CHAPTER1-KNOWLEDGE-COVERAGE.csv`.

## Automated data checks

Command: `node scripts/validate-rpe-moses.mjs`

- Duplicate section IDs: 0
- Duplicate card IDs: 0
- Duplicate question IDs: 0
- Duplicate flashcard fronts: 0
- Generic flashcard fronts: 0
- Empty flashcard fronts / backs: 0
- Invalid card section IDs: 0
- Invalid question section IDs: 0
- Missing card source mappings: 0
- Missing question source mappings: 0
- MCQ answers missing from options: 0

## Technical checks

- `npx tsc --noEmit`: passed
- Modified-file ESLint: passed
- Next.js production build: passed using non-secret placeholder public Supabase build variables because the uploaded ZIP did not include `.env.local`
- Static route generation: passed, including:
  - `/knowledge-organisers/year8/rpe`
  - `/knowledge-organisers/year8/rpe/autumn/what-happened-to-moses`
  - `/knowledge-organisers/year8/rpe/revision-quiz`
- Existing History, Science, English, Geography and Design Technology routes compiled and generated in the same build.

## Environment note

The uploaded ZIP omitted `lib/`, `eslint.config.mjs` and `.env.local`. For validation only, `lib/` and the ESLint configuration were taken from the matching project snapshot with the same package lock, and non-secret placeholder public Supabase variables were supplied to the build. None of those validation-only support files is included as an RPE change.

