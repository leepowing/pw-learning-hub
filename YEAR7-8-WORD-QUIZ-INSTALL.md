# Year 7 Spelling — 8-word quiz sets

This update changes each 24-word Year 7 spelling week into three non-repeating sets of eight words.

## Install

1. Extract the ZIP.
2. Copy the `app` and `lib` folders into `E:\Projects\pw-learning-hub`.
3. Choose **Replace the files in the destination** when Windows asks.
4. No new Supabase SQL is required because the quiz-set columns were added by the Year 8 update.
5. Run `npm run build` before committing.

## Files included

- `app/spelling/page.tsx`
- `app/spelling/[week]/page.tsx`
- `app/spelling/[week]/quiz/page.tsx`
- `lib/supabase.ts`
- `lib/year7QuizSets.ts`

## Expected behaviour

- Each week has Set 1, Set 2 and Set 3.
- Each set contains eight words.
- The three sets cover all 24 words without overlap.
- Progress is saved for each student and week.
- Completing all three sets shows 24/24 coverage.
- Starting a new cycle reshuffles the sets while keeping learned words and the best full-week score.
