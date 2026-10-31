-- Stage 3 Week 3 — cautious non-destructive migration. Review against live production schema.
BEGIN;
DO $$ BEGIN
  IF to_regclass('public.chinese_stage3_uploads') IS NULL OR to_regclass('public.chinese_stage3_skill_reviews') IS NULL OR to_regclass('public.chinese_stage3_speaking_recordings') IS NULL THEN
    RAISE EXCEPTION 'Stage 3 tables missing; do not run without reviewing schema';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conrelid='public.chinese_stage3_uploads'::regclass AND conname='chinese_stage3_uploads_task_id_check') THEN
    RAISE EXCEPTION 'Expected uploads task constraint not found: stop and inspect live schema';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conrelid='public.chinese_stage3_skill_reviews'::regclass AND conname='ch3_skill_task_valid') THEN
    RAISE EXCEPTION 'Expected skills task constraint not found: stop and inspect live schema';
  END IF;
END $$;
ALTER TABLE public.chinese_stage3_uploads DROP CONSTRAINT chinese_stage3_uploads_task_id_check;
ALTER TABLE public.chinese_stage3_uploads ADD CONSTRAINT chinese_stage3_uploads_task_id_check
 CHECK ((week=1 AND task_id='school-message') OR (week=2 AND task_id='daily-routine') OR (week=3 AND task_id='hobbies-message') OR week BETWEEN 4 AND 12);
ALTER TABLE public.chinese_stage3_skill_reviews DROP CONSTRAINT ch3_skill_task_valid;
ALTER TABLE public.chinese_stage3_skill_reviews ADD CONSTRAINT ch3_skill_task_valid CHECK (
 (week BETWEEN 1 AND 3 AND skill='speaking' AND task_id IN ('role','picture','conversation') AND input_kind='audio')
 OR (week BETWEEN 1 AND 3 AND skill='translation' AND task_id IN ('tr1','tr2') AND input_kind IN ('text','image'))
 OR week BETWEEN 4 AND 12
);
-- Only expand the EXISTING audio storage INSERT policy; do not open other buckets.
DO $$ BEGIN
 IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='storage' AND tablename='objects' AND policyname='stage3_audio_storage_insert') THEN
   RAISE EXCEPTION 'Existing private recording storage policy missing; inspect live RLS before changes';
 END IF;
END $$;
DROP POLICY stage3_audio_storage_insert ON storage.objects;
CREATE POLICY stage3_audio_storage_insert ON storage.objects FOR INSERT TO authenticated
 WITH CHECK (bucket_id='chinese-speaking-private'
 AND (storage.foldername(name))[1]=auth.uid()::text
 AND (storage.foldername(name))[2] IN ('week-01','week-02','week-03'));
COMMIT;
