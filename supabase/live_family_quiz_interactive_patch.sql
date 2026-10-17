-- Run once in Supabase SQL Editor before deploying the interactive-question patch.
alter table public.family_quiz_questions
add column if not exists interaction jsonb;
