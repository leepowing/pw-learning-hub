-- GCSE Chinese official vocabulary flashcard progress
-- Safe to run more than once in Supabase SQL Editor.

create table if not exists public.chinese_gcse_vocabulary_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  card_id text not null,
  correct_count integer not null default 0 check (correct_count >= 0),
  incorrect_count integer not null default 0 check (incorrect_count >= 0),
  last_result boolean,
  last_seen_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, card_id)
);

create index if not exists chinese_gcse_vocabulary_progress_user_updated_idx
  on public.chinese_gcse_vocabulary_progress (user_id, updated_at desc);

alter table public.chinese_gcse_vocabulary_progress enable row level security;

drop policy if exists "Vocabulary progress select own" on public.chinese_gcse_vocabulary_progress;
create policy "Vocabulary progress select own"
  on public.chinese_gcse_vocabulary_progress
  for select
  to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Vocabulary progress insert own" on public.chinese_gcse_vocabulary_progress;
create policy "Vocabulary progress insert own"
  on public.chinese_gcse_vocabulary_progress
  for insert
  to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Vocabulary progress update own" on public.chinese_gcse_vocabulary_progress;
create policy "Vocabulary progress update own"
  on public.chinese_gcse_vocabulary_progress
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

revoke all on public.chinese_gcse_vocabulary_progress from anon;
grant select, insert, update on public.chinese_gcse_vocabulary_progress to authenticated;

select
  to_regclass('public.chinese_gcse_vocabulary_progress') as progress_table,
  count(*) as existing_rows
from public.chinese_gcse_vocabulary_progress;
