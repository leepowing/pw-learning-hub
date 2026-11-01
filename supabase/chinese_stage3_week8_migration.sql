-- CANDIDATE ONLY: Week 8 speaking private Storage INSERT. DO NOT RUN WITHOUT REVIEW.
-- If the current policy already permits week-08, do not execute this migration.
BEGIN;
DO $$
DECLARE expr text;
BEGIN
 SELECT pg_get_expr(polwithcheck,polrelid) INTO expr
 FROM pg_policy WHERE polname='stage3_audio_storage_insert' AND polrelid='storage.objects'::regclass;
 IF expr IS NULL THEN RAISE EXCEPTION 'Missing expected storage policy; stop'; END IF;
 IF expr NOT ILIKE '%chinese-speaking-private%' OR expr NOT ILIKE '%auth.uid()%' THEN
  RAISE EXCEPTION 'Unexpected bucket or owner restrictions; stop';
 END IF;
 IF expr NOT LIKE '%week-01%' OR expr NOT LIKE '%week-02%' OR expr NOT LIKE '%week-03%' OR expr NOT LIKE '%week-04%'
 OR expr NOT LIKE '%week-05%' OR expr NOT LIKE '%week-06%' OR expr NOT LIKE '%week-07%' THEN
  RAISE EXCEPTION 'Existing weeks are not all permitted; stop';
 END IF;
 IF expr LIKE '%week-08%' THEN RAISE EXCEPTION 'Week 8 already permitted: no change required'; END IF;
END $$;
DROP POLICY stage3_audio_storage_insert ON storage.objects;
CREATE POLICY stage3_audio_storage_insert ON storage.objects FOR INSERT TO authenticated WITH CHECK (
 bucket_id='chinese-speaking-private'
 AND (storage.foldername(name))[1]=auth.uid()::text
 AND (storage.foldername(name))[2] IN ('week-01','week-02','week-03','week-04','week-05','week-06','week-07','week-08')
);
COMMIT;
