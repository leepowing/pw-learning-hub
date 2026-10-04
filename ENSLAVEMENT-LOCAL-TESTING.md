# Enslavement Local Testing Checklist

1. Run `npm run dev` from `E:\Projects\pw-learning-hub`.
2. Open `/knowledge-organisers/year8/history` and confirm Chapter 4 appears.
3. Open `/knowledge-organisers/year8/history/autumn/enslavement`.
4. Test Select all, Clear all and Save taught sections separately for Greta, Mathis and the test account.
5. Confirm Learn, Mind Map, Flashcards and Quiz reveal only taught sections.
6. Test Mind Map branch reveal/hide/focus and narrow-screen layout.
7. Test flashcard flip, remembered/need-practice animations and statistics.
8. Confirm counts with all sections taught: 18 MCQ, 15 short, 3 long, 36 mixed.
9. Confirm each quiz type offers only valid session sizes; retry must reshuffle questions and MCQ options.
10. Test ens-q23 at 0, partial and full marks; test ens-q34 at low, middle and full marks.
11. Open `/knowledge-organisers/year8/history/revision-quiz`; confirm Chapter 4 counts appear only when its sections are taught.
12. Run `node scripts/validate-enslavement.mjs`, `npx tsc --noEmit`, ESLint and `npm run build`.
13. Use Ctrl+F5 after replacing files.

No npm install, SQL or Supabase migration is required.
