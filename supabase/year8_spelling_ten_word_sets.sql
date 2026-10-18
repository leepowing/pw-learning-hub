begin;

alter table public.spelling_progress
  add column if not exists quiz_cycle integer not null default 1;

alter table public.spelling_progress
  add column if not exists quiz_completed_sets integer[] not null default '{}'::integer[];

alter table public.spelling_progress
  add column if not exists quiz_set_scores integer[] not null default '{}'::integer[];

alter table public.spelling_progress
  add column if not exists quiz_last_completed_at timestamptz;

comment on column public.spelling_progress.quiz_cycle is
  'Current three-set Year 8 spelling quiz cycle.';

comment on column public.spelling_progress.quiz_completed_sets is
  'Completed ten-word set numbers in the current cycle.';

comment on column public.spelling_progress.quiz_set_scores is
  'Scores for Sets 1, 2 and 3 in the current cycle.';

comment on column public.spelling_progress.quiz_last_completed_at is
  'Time when the most recent full three-set cycle was completed.';

commit;
