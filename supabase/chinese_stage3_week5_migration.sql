-- Stage 3 Week 5 — Food & Health (REVIEW AGAINST LIVE DATABASE BEFORE RUNNING)
-- Non-destructive: allows ONLY week-05 private speaking audio for existing authenticated owner.
-- Requires Week 4 migration successfully applied. Existing student records are retained.
BEGIN;
DO $$ BEGIN
  IF to_regclass('public.chinese_stage3_speaking_recordings') IS NULL THEN
    RAISE EXCEPTION 'Speaking recording table missing; stop and inspect schema';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='storage' AND tablename='objects' AND policyname='stage3_audio_storage_insert') THEN
    RAISE EXCEPTION 'Expected audio INSERT policy missing; stop and inspect live policies';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conrelid='public.chinese_stage3_uploads'::regclass AND conname='chinese_stage3_uploads_task_id_check') THEN
    RAISE EXCEPTION 'Expected task constraint missing; stop and inspect schema';
  END IF;
END $$;
-- Under the provided Week 4 migration, week 5 is already accepted by both task CHECKs.
-- This migration changes only the private bucket INSERT policy to add week-05.
DROP POLICY stage3_audio_storage_insert ON storage.objects;
CREATE POLICY stage3_audio_storage_insert ON storage.objects FOR INSERT TO authenticated
 WITH CHECK (
   bucket_id='chinese-speaking-private'
   AND (storage.foldername(name))[1]=auth.uid()::text
   AND (storage.foldername(name))[2] IN ('week-01','week-02','week-03','week-04','week-05')
 );
COMMIT;
