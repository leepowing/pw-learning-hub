# Year 8 Knowledge Organisers - first release

This release adds the first Year 8 History Knowledge Organiser:

- History / Autumn Term / Migration and Britain
- per-student taught-section selection
- responsive learning notes
- automatically filtered mind map
- section-filtered flashcards
- MCQ, short-answer and long-answer quizzes
- local progress fallback and optional Supabase sync

## One-time Supabase setup

1. Open the Supabase project.
2. Open SQL Editor and create a new query.
3. Copy all SQL from `supabase/knowledge_organisers.sql`.
4. Run the query once.

The table uses Row Level Security. Each signed-in account can only read and
update its own Knowledge Organiser progress.

The pages still work before the SQL is installed. Taught-section choices and
best quiz results are stored locally on the device; after the table is
installed, the same functions also sync with Supabase.

## New route

`/knowledge-organisers/year8/history/autumn/migration-and-britain`

The main `/subjects` page now includes a Knowledge Organisers card.

## AI long-answer marking

The long-answer interface currently shows marking points for self-assessment.
The component clearly identifies the place where server-side AI marking will
replace self-marking after an API key and server route are configured. No API
key should ever be stored in client-side code or committed to the repository.
