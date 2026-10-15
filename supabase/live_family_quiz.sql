create extension if not exists pgcrypto;

create table if not exists public.family_quiz_sessions (
  id uuid primary key default gen_random_uuid(),
  code text not null unique check (code ~ '^[0-9]{6}$'),
  host_id uuid not null references auth.users(id) on delete cascade,
  title text not null default 'Family Quiz',
  status text not null default 'waiting' check (status in ('waiting','question','revealed','finished')),
  current_question_id uuid,
  current_index integer not null default -1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.family_quiz_questions (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.family_quiz_sessions(id) on delete cascade,
  position integer not null,
  organiser_id text,
  source_question_id text,
  type text not null check (type in ('multiple-choice','short-answer','long-answer')),
  prompt text not null,
  options jsonb not null default '[]'::jsonb,
  marks integer not null check (marks between 1 and 20),
  unique (session_id, position)
);

create table if not exists public.family_quiz_answer_keys (
  question_id uuid primary key references public.family_quiz_questions(id) on delete cascade,
  session_id uuid not null references public.family_quiz_sessions(id) on delete cascade,
  answer text not null default '',
  marking_points jsonb not null default '[]'::jsonb,
  guidance text not null default ''
);

create table if not exists public.family_quiz_participants (
  session_id uuid not null references public.family_quiz_sessions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 40),
  joined_at timestamptz not null default now(),
  primary key (session_id, user_id)
);

create table if not exists public.family_quiz_answers (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.family_quiz_sessions(id) on delete cascade,
  question_id uuid not null references public.family_quiz_questions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  display_name text not null,
  answer text not null,
  awarded_marks integer,
  max_marks integer not null,
  status text not null default 'submitted' check (status in ('submitted','marked','needs_review')),
  feedback jsonb,
  submitted_at timestamptz not null default now(),
  unique (question_id, user_id)
);

create or replace function public.set_family_quiz_updated_at()
returns trigger language plpgsql as $$ begin new.updated_at = now(); return new; end $$;
drop trigger if exists family_quiz_sessions_updated_at on public.family_quiz_sessions;
create trigger family_quiz_sessions_updated_at before update on public.family_quiz_sessions
for each row execute function public.set_family_quiz_updated_at();

alter table public.family_quiz_sessions enable row level security;
alter table public.family_quiz_questions enable row level security;
alter table public.family_quiz_answer_keys enable row level security;
alter table public.family_quiz_participants enable row level security;
alter table public.family_quiz_answers enable row level security;

drop policy if exists "family quiz sessions readable" on public.family_quiz_sessions;
create policy "family quiz sessions readable" on public.family_quiz_sessions for select to authenticated using (true);
drop policy if exists "host updates family quiz session" on public.family_quiz_sessions;
create policy "host updates family quiz session" on public.family_quiz_sessions for update to authenticated using (host_id = auth.uid()) with check (host_id = auth.uid());

drop policy if exists "family quiz questions readable" on public.family_quiz_questions;
create policy "family quiz questions readable" on public.family_quiz_questions for select to authenticated using (true);

drop policy if exists "host reads answer keys" on public.family_quiz_answer_keys;
create policy "host reads answer keys" on public.family_quiz_answer_keys for select to authenticated using (
  exists (select 1 from public.family_quiz_sessions s where s.id = session_id and s.host_id = auth.uid())
);

drop policy if exists "participants readable" on public.family_quiz_participants;
create policy "participants readable" on public.family_quiz_participants for select to authenticated using (true);
drop policy if exists "participant joins as self" on public.family_quiz_participants;
create policy "participant joins as self" on public.family_quiz_participants for insert to authenticated with check (user_id = auth.uid());

drop policy if exists "answers visible to owner or host" on public.family_quiz_answers;
create policy "answers visible to owner or host" on public.family_quiz_answers for select to authenticated using (
  user_id = auth.uid() or exists (select 1 from public.family_quiz_sessions s where s.id = session_id and s.host_id = auth.uid())
);

do $$
begin
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'family_quiz_sessions') then alter publication supabase_realtime add table public.family_quiz_sessions; end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'family_quiz_questions') then alter publication supabase_realtime add table public.family_quiz_questions; end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'family_quiz_participants') then alter publication supabase_realtime add table public.family_quiz_participants; end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'family_quiz_answers') then alter publication supabase_realtime add table public.family_quiz_answers; end if;
end $$;

create index if not exists family_quiz_sessions_code_idx on public.family_quiz_sessions(code);
create index if not exists family_quiz_questions_session_idx on public.family_quiz_questions(session_id, position);
create index if not exists family_quiz_answers_session_idx on public.family_quiz_answers(session_id, question_id);
