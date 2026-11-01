-- Week 6 Shopping & Money: migration candidate; REVIEW LIVE RLS POLICIES before running.
-- Extends private speaking audio Storage INSERT path allowlist only; preserves Weeks 1–5.
BEGIN;
DO $$ BEGIN
 IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname='storage' AND tablename='objects' AND policyname='stage3_audio_storage_insert' AND cmd='INSERT') THEN
   RAISE EXCEPTION 'Expected stage3_audio_storage_insert policy missing. Inspect live policies.';
 END IF;
 IF to_regclass('public.chinese_stage3_speaking_recordings') IS NULL THEN
   RAISE EXCEPTION 'Recording table absent. Stop.';
 END IF;
END $$;
-- IMPORTANT: this is an example guarded replacement of the historic owner-only policy.
-- Confirm existing USING/WITH CHECK and upload task constraints in live production before applying.
DROP POLICY stage3_audio_storage_insert ON storage.objects;
CREATE POLICY stage3_audio_storage_insert ON storage.objects FOR INSERT TO authenticated
 WITH CHECK (
  bucket_id='chinese-speaking-private'
  AND (storage.foldername(name))[1]=auth.uid()::text
  AND (storage.foldername(name))[2] IN ('week-01','week-02','week-03','week-04','week-05','week-06')
 );
COMMIT;
