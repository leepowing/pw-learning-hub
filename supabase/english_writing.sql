-- PW Learning Hub: English Writing v1. Additive and safe to rerun.
begin;
create extension if not exists pgcrypto;

create table if not exists public.english_writing_guardians (
  guardian_user_id uuid not null references auth.users(id) on delete cascade,
  learner_user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (guardian_user_id, learner_user_id),
  check (guardian_user_id <> learner_user_id)
);
create table if not exists public.english_writing_work (
  user_id uuid not null references auth.users(id) on delete cascade,
  task_id text not null check (char_length(task_id) between 1 and 80),
  draft text not null default '' check (char_length(draft) <= 16000),
  plan text not null default '' check (char_length(plan) <= 3000),
  elapsed_seconds integer not null default 0 check (elapsed_seconds between 0 and 86400),
  version integer not null default 1 check (version > 0),
  updated_at timestamptz not null default now(),
  primary key (user_id, task_id)
);
create table if not exists public.english_writing_lessons (
  user_id uuid not null references auth.users(id) on delete cascade,
  week integer not null check (week between 1 and 4),
  answers jsonb not null,
  micro_answer text not null check (char_length(micro_answer) between 20 and 2000),
  completed_at timestamptz not null default now(),
  primary key (user_id, week)
);
create table if not exists public.english_writing_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  task_id text not null,
  parent_id uuid references public.english_writing_submissions(id),
  answer text not null check (char_length(answer) between 20 and 16000),
  reflection text not null default '' check (char_length(reflection) <= 1500),
  status text not null default 'pending' check (status in ('pending','complete','failed')),
  request_hash text not null,
  rubric_version text not null,
  model text not null,
  feedback jsonb,
  total integer check (total between 0 and 40),
  attempts integer not null default 1,
  lease_token uuid not null default gen_random_uuid(),
  usage jsonb,
  failure_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, request_hash),
  check (status <> 'complete' or feedback is not null)
);
create index if not exists english_writing_submissions_user_date on public.english_writing_submissions(user_id, created_at desc);
create index if not exists english_writing_submissions_user_task on public.english_writing_submissions(user_id, task_id);

alter table public.english_writing_guardians enable row level security;
alter table public.english_writing_work enable row level security;
alter table public.english_writing_lessons enable row level security;
alter table public.english_writing_submissions enable row level security;
-- Student browsers cannot write feedback or grant themselves access to others.
revoke all on public.english_writing_guardians, public.english_writing_work,
 public.english_writing_lessons, public.english_writing_submissions from anon, authenticated;
grant select on public.english_writing_guardians, public.english_writing_work,
 public.english_writing_lessons, public.english_writing_submissions to authenticated;
grant all on public.english_writing_guardians, public.english_writing_work,
 public.english_writing_lessons, public.english_writing_submissions to service_role;

drop policy if exists "writing guardian sees own links" on public.english_writing_guardians;
create policy "writing guardian sees own links" on public.english_writing_guardians for select to authenticated
 using (guardian_user_id = auth.uid());
drop policy if exists "writing owner reads drafts" on public.english_writing_work;
create policy "writing owner reads drafts" on public.english_writing_work for select to authenticated
 using (user_id = auth.uid());
drop policy if exists "writing owner or guardian reads lessons" on public.english_writing_lessons;
create policy "writing owner or guardian reads lessons" on public.english_writing_lessons for select to authenticated
 using (user_id = auth.uid() or exists (select 1 from public.english_writing_guardians g
   where g.guardian_user_id = auth.uid() and g.learner_user_id = user_id));
drop policy if exists "writing owner or guardian reads submissions" on public.english_writing_submissions;
create policy "writing owner or guardian reads submissions" on public.english_writing_submissions for select to authenticated
 using (user_id = auth.uid() or exists (select 1 from public.english_writing_guardians g
   where g.guardian_user_id = auth.uid() and g.learner_user_id = user_id));

-- Service-only reservation serialises each learner's requests across server instances.
create or replace function public.claim_english_writing_submission(
 p_user_id uuid, p_task_id text, p_answer text, p_parent_id uuid,
 p_reflection text, p_model text, p_hash text, p_rubric text
) returns jsonb language plpgsql security definer set search_path = public, pg_temp as $$
declare
 r public.english_writing_submissions%rowtype;
 last_id uuid;
 count_today integer;
begin
 perform pg_advisory_xact_lock(hashtextextended(p_user_id::text, 0));
 select * into r from public.english_writing_submissions where user_id = p_user_id and request_hash = p_hash;
 if found and r.status = 'complete' then return jsonb_build_object('state','cached','row',to_jsonb(r)); end if;
 if found and r.status = 'pending' and r.updated_at > now() - interval '120 seconds' then
   return jsonb_build_object('state','busy');
 end if;
 -- A retry limit also applies to failed or stale jobs.
 select coalesce(sum(attempts),0) into count_today from public.english_writing_submissions
  where user_id = p_user_id and updated_at > now() - interval '24 hours';
 if count_today >= 12 then return jsonb_build_object('state','limited'); end if;
 if exists (select 1 from public.english_writing_submissions where user_id = p_user_id and status = 'pending'
   and updated_at > now() - interval '120 seconds') then return jsonb_build_object('state','busy'); end if;
 select id into last_id from public.english_writing_submissions where user_id = p_user_id and task_id = p_task_id
   and status = 'complete' order by created_at desc, id desc limit 1;
 if last_id is distinct from p_parent_id then return jsonb_build_object('state','conflict'); end if;
 if p_parent_id is not null and not exists (select 1 from public.english_writing_submissions
   where id = p_parent_id and user_id = p_user_id and task_id = p_task_id and status = 'complete') then
   return jsonb_build_object('state','conflict');
 end if;
 if r.id is not null then
   update public.english_writing_submissions set status='pending', updated_at=now(), attempts=attempts+1,
    lease_token=gen_random_uuid(), failure_code=null where id=r.id returning * into r;
 else
   insert into public.english_writing_submissions(user_id,task_id,answer,parent_id,reflection,model,request_hash,rubric_version)
   values(p_user_id,p_task_id,p_answer,p_parent_id,p_reflection,p_model,p_hash,p_rubric) returning * into r;
 end if;
 return jsonb_build_object('state','claimed','row',to_jsonb(r));
end $$;
revoke all on function public.claim_english_writing_submission(uuid,text,text,uuid,text,text,text,text) from public, anon, authenticated;
grant execute on function public.claim_english_writing_submission(uuid,text,text,uuid,text,text,text,text) to service_role;
commit;
