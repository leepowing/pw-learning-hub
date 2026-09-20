S2 Chapter 11 Flashcards — 45 cards, 9 per section

Stop the project dev server. Extract this folder, then run:
node .\install.cjs.txt "E:\Projects\pw-learning-hub" --check
After Preflight passed:
node .\install.cjs.txt "E:\Projects\pw-learning-hub"
cd "E:\Projects\pw-learning-hub"
npm run build
Then: npm run dev -- --port 3100
Open http://localhost:3100/maths/s2/chapter-11/flashcards

Changes: new 45-card data file, shared diagram component and chapter page;
adds Chapter 11 to s2.ts; adds rendering to FormulaFlashcards; enables homepage link.
All maths content is English. The existing shared registry feeds cross-year
selection and Smart Review. Existing studentStorage.ts, review and progress
pages are unchanged; no database migration, deletion or progress reset.
Existing card IDs and data are preserved. New IDs begin s2-c11-.

The installer checks all changes before writing, parses candidate TypeScript,
backs up existing files to _pw-backups, and stops on differing custom content.
It supports app/ and src/app/ with co-located data/ and components/.
Do not force-overwrite if STOP appears. Provide the reported latest file.
Original bytes and a manifest are saved in the backup directory.
To restore, stop the dev server, restore backed-up files to the paths in the
manifest (remove .txt suffix), then remove only new files marked created:true.

Validation: see VALIDATION.txt. Full project build and live Supabase behaviour
must be checked in the actual project. No live database access was used here.
