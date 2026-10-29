-- Stage 3 Week 1 Speaking + Translation AI grading.
-- Run AFTER chinese_stage3_week1.sql; does not touch Diagnostic v3.
BEGIN;
CREATE TABLE IF NOT EXISTS public.chinese_stage3_skill_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  week smallint NOT NULL CHECK (week BETWEEN 1 AND 12),
  skill text NOT NULL CHECK (skill IN ('speaking','translation')),
  task_id text NOT NULL,
  input_kind text NOT NULL CHECK (input_kind IN ('audio','text','image')),
  input_text text NOT NULL DEFAULT '' CHECK (length(input_text) <= 5000),
  object_path text,
  feedback jsonb NOT NULL,
  final_score integer CHECK (final_score BETWEEN 0 AND 10),
  corrected_text text CHECK (length(corrected_text) <= 6000),
  reviewed_by uuid REFERENCES auth.users(id),
  reviewed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT ch3_skill_one_attempt UNIQUE(user_id,week,skill,task_id),
  CONSTRAINT ch3_skill_task_valid CHECK (
    (week <> 1) OR
    (skill='speaking' AND task_id IN ('role','picture','conversation') AND input_kind='audio') OR
    (skill='translation' AND task_id IN ('tr1','tr2') AND input_kind IN ('text','image'))
  ),
  CONSTRAINT ch3_skill_path_check CHECK (object_path IS NULL OR split_part(object_path,'/',1)=user_id::text),
  CONSTRAINT ch3_skill_confirm_fields CHECK ((reviewed_at IS NULL AND reviewed_by IS NULL AND final_score IS NULL) OR
    (reviewed_at IS NOT NULL AND reviewed_by IS NOT NULL AND final_score IS NOT NULL AND corrected_text IS NOT NULL))
);
ALTER TABLE public.chinese_stage3_skill_reviews ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS ch3_skill_select ON public.chinese_stage3_skill_reviews;
CREATE POLICY ch3_skill_select ON public.chinese_stage3_skill_reviews FOR SELECT TO authenticated
  USING ((SELECT auth.uid())=user_id OR public.is_chinese_parent_of(user_id));
DROP POLICY IF EXISTS ch3_skill_student_insert ON public.chinese_stage3_skill_reviews;
CREATE POLICY ch3_skill_student_insert ON public.chinese_stage3_skill_reviews FOR INSERT TO authenticated
  WITH CHECK ((SELECT auth.uid())=user_id AND reviewed_at IS NULL AND reviewed_by IS NULL AND final_score IS NULL);
-- No UPDATE or DELETE policy. Confirmations are only through audited parent RPC.
CREATE OR REPLACE FUNCTION public.confirm_chinese_stage3_skill_review(
  p_review_id uuid, p_corrected_text text, p_final_score integer
) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE v_student uuid; v_old timestamp with time zone;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Authentication required'; END IF;
  IF p_final_score IS NULL OR p_final_score NOT BETWEEN 0 AND 10 THEN
    RAISE EXCEPTION 'Final score must be 0-10';
  END IF;
  IF p_corrected_text IS NULL OR length(trim(p_corrected_text)) NOT BETWEEN 1 AND 6000 THEN
    RAISE EXCEPTION 'Corrected text required';
  END IF;
  SELECT user_id,reviewed_at INTO v_student,v_old
  FROM public.chinese_stage3_skill_reviews WHERE id=p_review_id FOR UPDATE;
  IF v_student IS NULL OR NOT public.is_chinese_parent_of(v_student) THEN
    RAISE EXCEPTION 'Not authorised for this review';
  END IF;
  IF v_old IS NOT NULL THEN RAISE EXCEPTION 'Already confirmed'; END IF;
  UPDATE public.chinese_stage3_skill_reviews
     SET corrected_text=p_corrected_text, final_score=p_final_score,
         reviewed_by=auth.uid(), reviewed_at=now()
   WHERE id=p_review_id;
END $$;
REVOKE ALL ON FUNCTION public.confirm_chinese_stage3_skill_review(uuid,text,integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.confirm_chinese_stage3_skill_review(uuid,text,integer) TO authenticated;
COMMIT;
