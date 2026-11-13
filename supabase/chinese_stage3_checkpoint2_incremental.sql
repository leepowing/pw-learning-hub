-- PW Learning Hub - Stage 3 Checkpoint 2 (Weeks 5-8)
-- Incremental migration: preserves Checkpoint 1 rows, scores and private media.
BEGIN;

DO $$
BEGIN
  IF to_regclass('public.chinese_stage3_checkpoints') IS NULL
     OR to_regclass('public.chinese_stage3_checkpoint_media') IS NULL
     OR to_regprocedure('public.ch3_cp1_eligible(uuid)') IS NULL
     OR to_regprocedure('public.is_chinese_parent_of(uuid)') IS NULL THEN
    RAISE EXCEPTION 'Checkpoint 1 production schema is required first';
  END IF;
END
$$;

-- Expand the two existing checkpoint_id checks without replacing either table.
DO $$
DECLARE c record;
BEGIN
  FOR c IN
    SELECT conname FROM pg_constraint
    WHERE conrelid='public.chinese_stage3_checkpoints'::regclass
      AND contype='c'
      AND pg_get_constraintdef(oid) ILIKE '%checkpoint_id%'
  LOOP
    EXECUTE format('ALTER TABLE public.chinese_stage3_checkpoints DROP CONSTRAINT %I',c.conname);
  END LOOP;
  ALTER TABLE public.chinese_stage3_checkpoints
    ADD CONSTRAINT chinese_stage3_checkpoints_checkpoint_id_allowed
    CHECK (checkpoint_id IN ('weeks1-4','weeks5-8'));

  FOR c IN
    SELECT conname FROM pg_constraint
    WHERE conrelid='public.chinese_stage3_checkpoint_media'::regclass
      AND contype='c'
      AND (
        pg_get_constraintdef(oid) ILIKE '%checkpoint_id%'
        OR pg_get_constraintdef(oid) ILIKE '%split_part(object_path%'
      )
  LOOP
    EXECUTE format('ALTER TABLE public.chinese_stage3_checkpoint_media DROP CONSTRAINT %I',c.conname);
  END LOOP;
  ALTER TABLE public.chinese_stage3_checkpoint_media
    ADD CONSTRAINT chinese_stage3_checkpoint_media_checkpoint_id_allowed
    CHECK (checkpoint_id IN ('weeks1-4','weeks5-8')),
    ADD CONSTRAINT chinese_stage3_checkpoint_media_path_matches
    CHECK (
      split_part(object_path,'/',1)=user_id::text
      AND split_part(object_path,'/',2)=CASE checkpoint_id
        WHEN 'weeks1-4' THEN 'checkpoint1'
        WHEN 'weeks5-8' THEN 'checkpoint2'
      END
    );
END
$$;

CREATE OR REPLACE FUNCTION public.ch3_cp2_eligible(p_uid uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path=public,pg_temp
AS $$
  SELECT p_uid=auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles pf
      WHERE pf.id=p_uid AND pf.role<>'parent'
    )
    AND (
      SELECT count(*) FROM public.chinese_stage3_progress p
      WHERE p.user_id=p_uid
        AND p.week BETWEEN 5 AND 8
        AND p.answers->'sessionsCompleted' @> '[0,1,2,3]'::jsonb
    )=4;
$$;
REVOKE ALL ON FUNCTION public.ch3_cp2_eligible(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.ch3_cp2_eligible(uuid) TO authenticated;

-- Scope the old permissive policies to Checkpoint 1, then add Checkpoint 2.
DROP POLICY IF EXISTS ch3_cp_insert ON public.chinese_stage3_checkpoints;
DROP POLICY IF EXISTS ch3_cp_update ON public.chinese_stage3_checkpoints;
DROP POLICY IF EXISTS cp1_insert ON public.chinese_stage3_checkpoints;
DROP POLICY IF EXISTS cp1_update ON public.chinese_stage3_checkpoints;
CREATE POLICY cp1_insert ON public.chinese_stage3_checkpoints
 FOR INSERT TO authenticated WITH CHECK (
  checkpoint_id='weeks1-4' AND user_id=auth.uid()
  AND public.ch3_cp1_eligible(user_id)
  AND submitted_at IS NULL AND submitted_result IS NULL
  AND parent_score IS NULL AND reviewed_at IS NULL AND reviewed_by IS NULL
 );
CREATE POLICY cp1_update ON public.chinese_stage3_checkpoints
 FOR UPDATE TO authenticated
 USING (
  checkpoint_id='weeks1-4' AND user_id=auth.uid()
  AND submitted_at IS NULL AND reviewed_at IS NULL
  AND public.ch3_cp1_eligible(user_id)
 )
 WITH CHECK (
  checkpoint_id='weeks1-4' AND user_id=auth.uid()
  AND parent_score IS NULL AND reviewed_by IS NULL AND reviewed_at IS NULL
  AND public.ch3_cp1_eligible(user_id)
 );
DROP POLICY IF EXISTS cp2_insert ON public.chinese_stage3_checkpoints;
DROP POLICY IF EXISTS cp2_update ON public.chinese_stage3_checkpoints;
CREATE POLICY cp2_insert ON public.chinese_stage3_checkpoints
 FOR INSERT TO authenticated WITH CHECK (
  checkpoint_id='weeks5-8' AND user_id=auth.uid()
  AND public.ch3_cp2_eligible(user_id)
  AND submitted_at IS NULL AND submitted_result IS NULL
  AND parent_score IS NULL AND reviewed_at IS NULL AND reviewed_by IS NULL
 );
CREATE POLICY cp2_update ON public.chinese_stage3_checkpoints
 FOR UPDATE TO authenticated
 USING (
  checkpoint_id='weeks5-8' AND user_id=auth.uid()
  AND submitted_at IS NULL AND reviewed_at IS NULL
  AND public.ch3_cp2_eligible(user_id)
 )
 WITH CHECK (
  checkpoint_id='weeks5-8' AND user_id=auth.uid()
  AND parent_score IS NULL AND reviewed_by IS NULL AND reviewed_at IS NULL
  AND public.ch3_cp2_eligible(user_id)
 );

DROP POLICY IF EXISTS cp1_media_insert ON public.chinese_stage3_checkpoint_media;
DROP POLICY IF EXISTS cp1_media_update ON public.chinese_stage3_checkpoint_media;
CREATE POLICY cp1_media_insert ON public.chinese_stage3_checkpoint_media
 FOR INSERT TO authenticated WITH CHECK (
  checkpoint_id='weeks1-4' AND user_id=auth.uid()
  AND public.ch3_cp1_eligible(user_id)
  AND NOT EXISTS (
    SELECT 1 FROM public.chinese_stage3_checkpoints c
    WHERE c.user_id=auth.uid() AND c.checkpoint_id='weeks1-4'
      AND c.submitted_at IS NOT NULL
  )
 );
CREATE POLICY cp1_media_update ON public.chinese_stage3_checkpoint_media
 FOR UPDATE TO authenticated
 USING (
  checkpoint_id='weeks1-4' AND user_id=auth.uid()
  AND public.ch3_cp1_eligible(user_id)
  AND NOT EXISTS (
    SELECT 1 FROM public.chinese_stage3_checkpoints c
    WHERE c.user_id=auth.uid() AND c.checkpoint_id='weeks1-4'
      AND c.submitted_at IS NOT NULL
  )
 )
 WITH CHECK (
  checkpoint_id='weeks1-4' AND user_id=auth.uid()
  AND public.ch3_cp1_eligible(user_id)
 );
DROP POLICY IF EXISTS cp2_media_insert ON public.chinese_stage3_checkpoint_media;
DROP POLICY IF EXISTS cp2_media_update ON public.chinese_stage3_checkpoint_media;
CREATE POLICY cp2_media_insert ON public.chinese_stage3_checkpoint_media
 FOR INSERT TO authenticated WITH CHECK (
  checkpoint_id='weeks5-8' AND user_id=auth.uid()
  AND public.ch3_cp2_eligible(user_id)
  AND NOT EXISTS (
    SELECT 1 FROM public.chinese_stage3_checkpoints c
    WHERE c.user_id=auth.uid() AND c.checkpoint_id='weeks5-8'
      AND c.submitted_at IS NOT NULL
  )
 );
CREATE POLICY cp2_media_update ON public.chinese_stage3_checkpoint_media
 FOR UPDATE TO authenticated
 USING (
  checkpoint_id='weeks5-8' AND user_id=auth.uid()
  AND public.ch3_cp2_eligible(user_id)
  AND NOT EXISTS (
    SELECT 1 FROM public.chinese_stage3_checkpoints c
    WHERE c.user_id=auth.uid() AND c.checkpoint_id='weeks5-8'
      AND c.submitted_at IS NOT NULL
  )
 )
 WITH CHECK (
  checkpoint_id='weeks5-8' AND user_id=auth.uid()
  AND public.ch3_cp2_eligible(user_id)
 );

DROP POLICY IF EXISTS cp2_storage_insert ON storage.objects;
CREATE POLICY cp2_storage_insert ON storage.objects
 FOR INSERT TO authenticated WITH CHECK (
  bucket_id='chinese-checkpoint-private'
  AND (storage.foldername(name))[1]=auth.uid()::text
  AND (storage.foldername(name))[2]='checkpoint2'
  AND public.ch3_cp2_eligible(auth.uid())
 );
DROP POLICY IF EXISTS cp2_storage_orphan_delete ON storage.objects;
CREATE POLICY cp2_storage_orphan_delete ON storage.objects
 FOR DELETE TO authenticated USING (
  bucket_id='chinese-checkpoint-private'
  AND (storage.foldername(name))[1]=auth.uid()::text
  AND (storage.foldername(name))[2]='checkpoint2'
  AND public.ch3_cp2_eligible(auth.uid())
  AND NOT EXISTS (
    SELECT 1 FROM public.chinese_stage3_checkpoint_media m
    WHERE m.object_path=name
  )
 );

-- The existing Checkpoint 1 trigger must ignore Checkpoint 2 rows.
CREATE OR REPLACE FUNCTION public.ch3_cp1_guard()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER
SET search_path=public,pg_temp AS $$
DECLARE i int; r jsonb; l jsonb; score int:=0;
BEGIN
  IF new.checkpoint_id<>'weeks1-4' THEN RETURN new; END IF;
  IF tg_op='INSERT' THEN
    IF NOT public.ch3_cp1_eligible(new.user_id)
       OR new.submitted_at IS NOT NULL OR new.submitted_result IS NOT NULL
       OR new.parent_score IS NOT NULL OR new.reviewed_at IS NOT NULL
    THEN RAISE EXCEPTION 'Checkpoint 1 insert not permitted'; END IF;
    RETURN new;
  END IF;
  IF current_setting('ch3.cp1_review',true)='internal-review' THEN
    IF NOT public.is_chinese_parent_of(old.user_id)
       OR old.submitted_at IS NULL OR old.reviewed_at IS NOT NULL
       OR new.user_id<>old.user_id OR new.checkpoint_id<>old.checkpoint_id
       OR new.answers IS DISTINCT FROM old.answers
       OR new.submitted_result IS DISTINCT FROM old.submitted_result
       OR new.submitted_at IS DISTINCT FROM old.submitted_at
    THEN RAISE EXCEPTION 'Checkpoint 1 review not permitted'; END IF;
    RETURN new;
  END IF;
  IF old.submitted_at IS NOT NULL OR old.reviewed_at IS NOT NULL
     OR new.user_id<>old.user_id OR new.checkpoint_id<>old.checkpoint_id
     OR new.parent_score IS NOT NULL OR new.reviewed_by IS NOT NULL
     OR new.reviewed_at IS NOT NULL OR NOT public.ch3_cp1_eligible(old.user_id)
  THEN RAISE EXCEPTION 'Checkpoint 1 locked or unauthorised'; END IF;
  IF new.submitted_at IS NOT NULL THEN
    r:=new.answers->'reading'; l:=new.answers->'listening';
    IF jsonb_typeof(r) IS DISTINCT FROM 'object'
       OR jsonb_typeof(l) IS DISTINCT FROM 'object'
       OR (SELECT count(*) FROM jsonb_object_keys(coalesce(new.answers->'dictation','{}'::jsonb)))<>32
       OR NOT (r ?& ARRAY['r1','r2','r3','r4'])
       OR NOT (l ?& ARRAY['l1','l2','l3','l4','l5','l6'])
    THEN RAISE EXCEPTION 'Checkpoint 1 answers incomplete'; END IF;
    IF r->>'r1'='1' THEN score:=score+1; END IF;
    IF r->>'r2'='0' THEN score:=score+1; END IF;
    IF r->>'r3'='1' THEN score:=score+1; END IF;
    IF r->>'r4'='0' THEN score:=score+1; END IF;
    IF l->>'l1'='1' THEN score:=score+1; END IF;
    IF l->>'l2'='0' THEN score:=score+1; END IF;
    IF l->>'l3'='1' THEN score:=score+1; END IF;
    IF l->>'l4'='2' THEN score:=score+1; END IF;
    IF l->>'l5'='0' THEN score:=score+1; END IF;
    IF l->>'l6'='1' THEN score:=score+1; END IF;
    SELECT count(*) INTO i FROM public.chinese_stage3_checkpoint_media m
    WHERE m.user_id=new.user_id AND m.checkpoint_id='weeks1-4';
    IF i<5 THEN RAISE EXCEPTION 'Checkpoint 1 evidence incomplete'; END IF;
    IF coalesce(new.answers->>'writingAcknowledged','false')<>'true'
       OR length(trim(coalesce(new.answers->'translation'->>'t1','')))=0
       OR length(trim(coalesce(new.answers->'translation'->>'t2','')))=0
    THEN RAISE EXCEPTION 'Checkpoint 1 written work incomplete'; END IF;
    new.submitted_result:=jsonb_build_object(
      'readingCorrect',(CASE WHEN r->>'r1'='1' THEN 1 ELSE 0 END)+(CASE WHEN r->>'r2'='0' THEN 1 ELSE 0 END)+(CASE WHEN r->>'r3'='1' THEN 1 ELSE 0 END)+(CASE WHEN r->>'r4'='0' THEN 1 ELSE 0 END),
      'listeningCorrect',score-((CASE WHEN r->>'r1'='1' THEN 1 ELSE 0 END)+(CASE WHEN r->>'r2'='0' THEN 1 ELSE 0 END)+(CASE WHEN r->>'r3'='1' THEN 1 ELSE 0 END)+(CASE WHEN r->>'r4'='0' THEN 1 ELSE 0 END)),
      'objectiveCorrect',score,'objectiveTotal',10);
  ELSIF new.submitted_result IS NOT NULL THEN
    RAISE EXCEPTION 'Objective score is server calculated';
  END IF;
  new.updated_at:=now(); RETURN new;
END $$;

CREATE OR REPLACE FUNCTION public.ch3_cp2_guard()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER
SET search_path=public,pg_temp AS $$
DECLARE i int; r jsonb; l jsonb; reading_score int:=0; listening_score int:=0;
BEGIN
  IF new.checkpoint_id<>'weeks5-8' THEN RETURN new; END IF;
  IF tg_op='INSERT' THEN
    IF NOT public.ch3_cp2_eligible(new.user_id)
       OR new.submitted_at IS NOT NULL OR new.submitted_result IS NOT NULL
       OR new.parent_score IS NOT NULL OR new.reviewed_at IS NOT NULL
    THEN RAISE EXCEPTION 'Checkpoint 2 insert not permitted'; END IF;
    RETURN new;
  END IF;
  IF current_setting('ch3.cp2_review',true)='internal-review' THEN
    IF NOT public.is_chinese_parent_of(old.user_id)
       OR old.submitted_at IS NULL OR old.reviewed_at IS NOT NULL
       OR new.user_id<>old.user_id OR new.checkpoint_id<>old.checkpoint_id
       OR new.answers IS DISTINCT FROM old.answers
       OR new.submitted_result IS DISTINCT FROM old.submitted_result
       OR new.submitted_at IS DISTINCT FROM old.submitted_at
    THEN RAISE EXCEPTION 'Checkpoint 2 review not permitted'; END IF;
    RETURN new;
  END IF;
  IF old.submitted_at IS NOT NULL OR old.reviewed_at IS NOT NULL
     OR new.user_id<>old.user_id OR new.checkpoint_id<>old.checkpoint_id
     OR new.parent_score IS NOT NULL OR new.reviewed_by IS NOT NULL
     OR new.reviewed_at IS NOT NULL OR NOT public.ch3_cp2_eligible(old.user_id)
  THEN RAISE EXCEPTION 'Checkpoint 2 locked or unauthorised'; END IF;
  IF new.submitted_at IS NOT NULL THEN
    r:=new.answers->'reading'; l:=new.answers->'listening';
    IF jsonb_typeof(r) IS DISTINCT FROM 'object'
       OR jsonb_typeof(l) IS DISTINCT FROM 'object'
       OR (SELECT count(*) FROM jsonb_object_keys(coalesce(new.answers->'dictation','{}'::jsonb)))<>40
       OR NOT (r ?& ARRAY['r1','r2','r3','r4'])
       OR NOT (l ?& ARRAY['l1','l2','l3','l4','l5','l6'])
    THEN RAISE EXCEPTION 'Checkpoint 2 answers incomplete'; END IF;
    reading_score:=(CASE WHEN r->>'r1'='0' THEN 1 ELSE 0 END)+(CASE WHEN r->>'r2'='1' THEN 1 ELSE 0 END)+(CASE WHEN r->>'r3'='1' THEN 1 ELSE 0 END)+(CASE WHEN r->>'r4'='1' THEN 1 ELSE 0 END);
    listening_score:=(CASE WHEN l->>'l1'='1' THEN 1 ELSE 0 END)+(CASE WHEN l->>'l2'='1' THEN 1 ELSE 0 END)+(CASE WHEN l->>'l3'='1' THEN 1 ELSE 0 END)+(CASE WHEN l->>'l4'='1' THEN 1 ELSE 0 END)+(CASE WHEN l->>'l5'='1' THEN 1 ELSE 0 END)+(CASE WHEN l->>'l6'='0' THEN 1 ELSE 0 END);
    SELECT count(*) INTO i FROM public.chinese_stage3_checkpoint_media m
    WHERE m.user_id=new.user_id AND m.checkpoint_id='weeks5-8'
      AND ((m.kind='speaking' AND m.task_id IN ('role','conversation'))
        OR (m.kind='writing' AND m.task_id='essay')
        OR (m.kind='dictation' AND m.task_id='words')
        OR (m.kind='translation' AND m.task_id='translations'));
    IF i<5 THEN RAISE EXCEPTION 'Two recordings and three manuscripts required'; END IF;
    IF coalesce(new.answers->>'writingAcknowledged','false')<>'true'
       OR length(trim(coalesce(new.answers->'translation'->>'t1','')))=0
       OR length(trim(coalesce(new.answers->'translation'->>'t2','')))=0
    THEN RAISE EXCEPTION 'Checkpoint 2 written work incomplete'; END IF;
    new.submitted_result:=jsonb_build_object(
      'readingCorrect',reading_score,'listeningCorrect',listening_score,
      'objectiveCorrect',reading_score+listening_score,'objectiveTotal',10);
  ELSIF new.submitted_result IS NOT NULL THEN
    RAISE EXCEPTION 'Objective score is server calculated';
  END IF;
  new.updated_at:=now(); RETURN new;
END $$;
DROP TRIGGER IF EXISTS cp2_guard ON public.chinese_stage3_checkpoints;
CREATE TRIGGER cp2_guard BEFORE INSERT OR UPDATE
 ON public.chinese_stage3_checkpoints FOR EACH ROW
 EXECUTE FUNCTION public.ch3_cp2_guard();

-- Make the old media trigger ignore CP2, then validate CP2 uploads separately.
CREATE OR REPLACE FUNCTION public.ch3_cp1_media_guard()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER
SET search_path=public,storage,pg_temp AS $$
BEGIN
  IF new.checkpoint_id<>'weeks1-4' THEN RETURN new; END IF;
  IF tg_op='UPDATE' AND auth.role()='service_role' THEN
    IF (to_jsonb(new)-'ai_feedback') IS DISTINCT FROM (to_jsonb(old)-'ai_feedback')
       OR old.ai_feedback IS NOT NULL OR new.ai_feedback IS NULL
       OR jsonb_typeof(new.ai_feedback) IS DISTINCT FROM 'object'
    THEN RAISE EXCEPTION 'AI feedback update not permitted'; END IF;
    RETURN new;
  END IF;
  IF tg_op<>'INSERT' OR auth.uid() IS NULL OR new.user_id IS DISTINCT FROM auth.uid()
     OR new.ai_feedback IS NOT NULL OR NOT public.ch3_cp1_eligible(new.user_id)
     OR split_part(new.object_path,'/',3) IS DISTINCT FROM new.kind
     OR split_part(new.object_path,'/',4) IS DISTINCT FROM new.task_id
     OR NOT EXISTS (SELECT 1 FROM storage.objects o
       WHERE o.bucket_id='chinese-checkpoint-private' AND o.name=new.object_path
         AND o.owner_id=new.user_id::text)
  THEN RAISE EXCEPTION 'Checkpoint 1 evidence is invalid'; END IF;
  RETURN new;
END $$;

CREATE OR REPLACE FUNCTION public.ch3_cp2_media_guard()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER
SET search_path=public,storage,pg_temp AS $$
BEGIN
  IF new.checkpoint_id<>'weeks5-8' THEN RETURN new; END IF;
  IF tg_op='UPDATE' AND auth.role()='service_role' THEN
    IF (to_jsonb(new)-'ai_feedback') IS DISTINCT FROM (to_jsonb(old)-'ai_feedback')
       OR old.ai_feedback IS NOT NULL OR new.ai_feedback IS NULL
       OR jsonb_typeof(new.ai_feedback) IS DISTINCT FROM 'object'
    THEN RAISE EXCEPTION 'AI feedback update not permitted'; END IF;
    RETURN new;
  END IF;
  IF tg_op<>'INSERT' OR auth.uid() IS NULL OR new.user_id IS DISTINCT FROM auth.uid()
     OR new.ai_feedback IS NOT NULL OR NOT public.ch3_cp2_eligible(new.user_id)
     OR split_part(new.object_path,'/',3) IS DISTINCT FROM new.kind
     OR split_part(new.object_path,'/',4) IS DISTINCT FROM new.task_id
     OR NOT EXISTS (SELECT 1 FROM storage.objects o
       WHERE o.bucket_id='chinese-checkpoint-private' AND o.name=new.object_path
         AND o.owner_id=new.user_id::text)
  THEN RAISE EXCEPTION 'Checkpoint 2 evidence is invalid'; END IF;
  RETURN new;
END $$;
DROP TRIGGER IF EXISTS cp2_media_guard ON public.chinese_stage3_checkpoint_media;
CREATE TRIGGER cp2_media_guard BEFORE INSERT OR UPDATE
 ON public.chinese_stage3_checkpoint_media FOR EACH ROW
 EXECUTE FUNCTION public.ch3_cp2_media_guard();

CREATE OR REPLACE FUNCTION public.ch3_confirm_checkpoint2(
 p_student_id uuid,p_score int,p_notes text)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER
SET search_path=public,pg_temp AS $$
BEGIN
  IF auth.uid() IS NULL OR NOT public.is_chinese_parent_of(p_student_id)
     OR p_score IS NULL OR p_score NOT BETWEEN 0 AND 100
  THEN RAISE EXCEPTION 'Not authorised or invalid score'; END IF;
  PERFORM set_config('ch3.cp2_review','internal-review',true);
  UPDATE public.chinese_stage3_checkpoints
  SET parent_score=p_score,parent_notes=left(coalesce(p_notes,''),3000),
      reviewed_by=auth.uid(),reviewed_at=now()
  WHERE user_id=p_student_id AND checkpoint_id='weeks5-8'
    AND submitted_at IS NOT NULL AND reviewed_at IS NULL;
  IF NOT FOUND THEN RAISE EXCEPTION 'No pending Checkpoint 2'; END IF;
END $$;
REVOKE ALL ON FUNCTION public.ch3_confirm_checkpoint2(uuid,int,text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.ch3_confirm_checkpoint2(uuid,int,text) TO authenticated;

COMMIT;

-- Read-only verification: both checkpoint generations must remain available.
SELECT
 to_regclass('public.chinese_stage3_checkpoints') AS checkpoints_table,
 to_regclass('public.chinese_stage3_checkpoint_media') AS media_table,
 to_regprocedure('public.ch3_cp1_eligible(uuid)') AS checkpoint1_gate,
 to_regprocedure('public.ch3_cp2_eligible(uuid)') AS checkpoint2_gate,
 to_regprocedure('public.ch3_confirm_checkpoint2(uuid,integer,text)') AS checkpoint2_review;
