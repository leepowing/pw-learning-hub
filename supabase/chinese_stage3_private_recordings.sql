-- Stage 3 speaking recordings: 180-day private retention, one recording per student/week/task.
-- Run once with Supabase SQL Editor. Existing diagnostic records are untouched.
begin;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values ('chinese-speaking-private','chinese-speaking-private',false,6000000,ARRAY['audio/webm','audio/mp4','audio/ogg'])
on conflict (id) do nothing;
create table if not exists public.chinese_stage3_speaking_recordings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  week integer not null check (week between 1 and 52),
  task_id text not null,
  object_path text not null unique,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '180 days'),
  unique(user_id,week,task_id),
  check (length(task_id) between 1 and 100)
);
alter table public.chinese_stage3_speaking_recordings enable row level security;
create policy stage3_audio_select on public.chinese_stage3_speaking_recordings
 for select to authenticated using (user_id=auth.uid() or public.is_chinese_parent_of(user_id));
create policy stage3_audio_insert on public.chinese_stage3_speaking_recordings
 for insert to authenticated with check (user_id=auth.uid() and week=1
 and split_part(object_path,'/',1)=auth.uid()::text
 and split_part(object_path,'/',2)='week-01'
 and split_part(object_path,'/',3)=task_id
 and expires_at > now()
 and expires_at <= now()+interval '181 days'
 and exists(select 1 from public.chinese_stage3_skill_reviews r where r.user_id=auth.uid() and r.week=chinese_stage3_speaking_recordings.week and r.skill='speaking' and r.task_id=chinese_stage3_speaking_recordings.task_id));
-- Protect from modifying an already accepted recording.
create policy stage3_audio_storage_insert on storage.objects
 for insert to authenticated with check (bucket_id='chinese-speaking-private'
 and (storage.foldername(name))[1]=auth.uid()::text
 and (storage.foldername(name))[2]='week-01');
create policy stage3_audio_storage_select on storage.objects
 for select to authenticated using (bucket_id='chinese-speaking-private'
 and ((storage.foldername(name))[1]=auth.uid()::text or public.is_chinese_parent_of(
 case when (storage.foldername(name))[1] ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
 then ((storage.foldername(name))[1])::uuid else null end)));
commit;
