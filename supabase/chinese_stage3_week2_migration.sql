-- Stage 3 Week 2 Daily Life — non-destructive migration.
-- Inspect existing constraints/policies before running. Preserve Week 1 and Diagnostic.
BEGIN;
DO $$ BEGIN
 IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conrelid='public.chinese_stage3_uploads'::regclass AND conname='chinese_stage3_uploads_task_id_check') THEN
  RAISE EXCEPTION 'Expected Week 1 upload task constraint missing; inspect schema';
 END IF;
END $$;
ALTER TABLE public.chinese_stage3_uploads DROP CONSTRAINT chinese_stage3_uploads_task_id_check;
ALTER TABLE public.chinese_stage3_uploads ADD CONSTRAINT chinese_stage3_uploads_task_id_check
 CHECK ((week=1 AND task_id='school-message') OR (week=2 AND task_id='daily-routine') OR week BETWEEN 3 AND 12);
ALTER TABLE public.chinese_stage3_skill_reviews DROP CONSTRAINT IF EXISTS ch3_skill_task_valid;
ALTER TABLE public.chinese_stage3_skill_reviews ADD CONSTRAINT ch3_skill_task_valid CHECK (
 (week IN (1,2) AND skill='speaking' AND task_id IN ('role','picture','conversation') AND input_kind='audio')
 OR (week IN (1,2) AND skill='translation' AND task_id IN ('tr1','tr2') AND input_kind IN ('text','image'))
 OR week BETWEEN 3 AND 12
);
DROP POLICY IF EXISTS stage3_audio_insert ON public.chinese_stage3_speaking_recordings;
CREATE POLICY stage3_audio_insert ON public.chinese_stage3_speaking_recordings
 FOR INSERT TO authenticated WITH CHECK (
 user_id=auth.uid() AND week BETWEEN 1 AND 12
 AND split_part(object_path,'/',1)=auth.uid()::text
 AND split_part(object_path,'/',2)=('week-'||lpad(week::text,2,'0'))
 AND split_part(object_path,'/',3)=task_id
 AND expires_at>now() AND expires_at<=now()+interval '181 days'
 AND EXISTS (SELECT 1 FROM public.chinese_stage3_skill_reviews r WHERE r.user_id=auth.uid()
 AND r.week=chinese_stage3_speaking_recordings.week AND r.skill='speaking'
 AND r.task_id=chinese_stage3_speaking_recordings.task_id)
 );
DROP POLICY IF EXISTS stage3_audio_storage_insert ON storage.objects;
CREATE POLICY stage3_audio_storage_insert ON storage.objects FOR INSERT TO authenticated
 WITH CHECK (bucket_id='chinese-speaking-private' AND (storage.foldername(name))[1]=auth.uid()::text
 AND (storage.foldername(name))[2] IN ('week-01','week-02'));
COMMIT;
