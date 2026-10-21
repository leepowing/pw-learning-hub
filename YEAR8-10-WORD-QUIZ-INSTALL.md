# Year 8 Spelling — 10-Word Quiz Sets

This update changes each 30-word Year 8 week into three non-repeating sets of
10 words. Year 7 Spelling is unchanged.

## Install

1. Copy the folders and files in this ZIP into the root of `pw-learning-hub`.
2. In Supabase, open **SQL Editor**.
3. Run the complete contents of:
   `supabase/year8_spelling_ten_word_sets.sql`.
4. In the VS Code terminal, run:

   ```bash
   npm run build
   ```

5. Test Year 8 Week 1 with a test student before deploying.

## Expected behaviour

- The Week page opens on **Current Set (10)** and also offers **All Words (30)**.
- Set 1, Set 2 and Set 3 contain 10 different words each.
- A set advances only after all 10 questions have been completed.
- Quiz-set progress is saved separately for every student and week.
- After Set 3, the page shows **30 / 30 words covered**.
- **Retry This Week** starts a reshuffled cycle while keeping learned words,
  best score and mastery.
- Existing Smart Review, mistakes, XP and Year 7 features remain available.
