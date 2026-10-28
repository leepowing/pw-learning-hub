-- PW Learning Hub GCSE Chinese Stage 3 Week 1. Run once in Supabase SQL Editor.
-- Non-destructive: does not alter Diagnostic v3, profiles, or existing reviews.
BEGIN;

CREATE TABLE IF NOT EXISTS public.chinese_stage3_progress (
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  week smallint NOT NULL CHECK (week BETWEEN 1 AND 12),
  answers jsonb NOT NULL DEFAULT '{}'::jsonb,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, week)
);
ALTER TABLE public.chinese_stage3_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS stage3_progress_select ON public.chinese_stage3_progress;
CREATE POLICY stage3_progress_select ON public.chinese_stage3_progress FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.is_chinese_parent_of(user_id));
DROP POLICY IF EXISTS stage3_progress_insert ON public.chinese_stage3_progress;
CREATE POLICY stage3_progress_insert ON public.chinese_stage3_progress FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS stage3_progress_update ON public.chinese_stage3_progress;
CREATE POLICY stage3_progress_update ON public.chinese_stage3_progress FOR UPDATE TO authenticated
  USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.chinese_stage3_uploads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  week smallint NOT NULL CHECK (week BETWEEN 1 AND 12),
  task_id text NOT NULL CHECK (task_id = 'school-message'),
  object_path text NOT NULL UNIQUE,
  file_name text NOT NULL,
  content_type text NOT NULL CHECK (content_type IN ('image/jpeg','image/png','image/webp')),
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT stage3_upload_own_path CHECK (split_part(object_path, '/', 1) = user_id::text)
);
ALTER TABLE public.chinese_stage3_uploads ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS stage3_upload_select ON public.chinese_stage3_uploads;
CREATE POLICY stage3_upload_select ON public.chinese_stage3_uploads FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.is_chinese_parent_of(user_id));
DROP POLICY IF EXISTS stage3_upload_insert ON public.chinese_stage3_uploads;
CREATE POLICY stage3_upload_insert ON public.chinese_stage3_uploads FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id AND split_part(object_path, '/', 1) = auth.uid()::text);

CREATE TABLE IF NOT EXISTS public.chinese_stage3_ai_reviews (
  upload_id uuid PRIMARY KEY REFERENCES public.chinese_stage3_uploads(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  feedback jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.chinese_stage3_ai_reviews ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS stage3_ai_select ON public.chinese_stage3_ai_reviews;
CREATE POLICY stage3_ai_select ON public.chinese_stage3_ai_reviews FOR SELECT TO authenticated
  USING (auth.uid() = user_id OR public.is_chinese_parent_of(user_id));
-- The API writes the initial, unconfirmed feedback as the signed-in student.
DROP POLICY IF EXISTS stage3_ai_insert ON public.chinese_stage3_ai_reviews;
CREATE POLICY stage3_ai_insert ON public.chinese_stage3_ai_reviews FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id AND EXISTS (
    SELECT 1 FROM public.chinese_stage3_uploads u WHERE u.id = upload_id AND u.user_id = auth.uid()
  ));

CREATE TABLE IF NOT EXISTS public.chinese_stage3_parent_reviews (
  upload_id uuid PRIMARY KEY REFERENCES public.chinese_stage3_uploads(id) ON DELETE CASCADE,
  student_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  reviewer_id uuid NOT NULL REFERENCES auth.users(id),
  corrected_transcription text NOT NULL CHECK (length(trim(corrected_transcription)) BETWEEN 1 AND 6000),
  final_score integer NOT NULL CHECK (final_score BETWEEN 0 AND 10),
  reviewed_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.chinese_stage3_parent_reviews ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS stage3_parent_reviews_select ON public.chinese_stage3_parent_reviews;
CREATE POLICY stage3_parent_reviews_select ON public.chinese_stage3_parent_reviews FOR SELECT TO authenticated
  USING (auth.uid() = student_id OR public.is_chinese_parent_of(student_id));

-- One-time, authorisation-checked parent confirmation. Students cannot call it successfully.
CREATE OR REPLACE FUNCTION public.confirm_chinese_stage3_review(
  p_upload_id uuid,
  p_corrected_transcription text,
  p_final_score integer
) RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE v_student uuid;
BEGIN
  IF auth.uid() IS NULL THEN RAISE EXCEPTION 'Authentication required'; END IF;
  IF p_final_score IS NULL OR p_final_score NOT BETWEEN 0 AND 10 THEN
    RAISE EXCEPTION 'Final score must be 0-10';
  END IF;
  IF p_corrected_transcription IS NULL OR length(trim(p_corrected_transcription)) NOT BETWEEN 1 AND 6000 THEN
    RAISE EXCEPTION 'Corrected transcription required';
  END IF;
  SELECT u.user_id INTO v_student FROM public.chinese_stage3_uploads u
    WHERE u.id = p_upload_id;
  IF v_student IS NULL OR NOT public.is_chinese_parent_of(v_student) THEN
    RAISE EXCEPTION 'Not authorised for this review';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM public.chinese_stage3_ai_reviews r WHERE r.upload_id = p_upload_id) THEN
    RAISE EXCEPTION 'AI review must exist before parent confirmation';
  END IF;
  INSERT INTO public.chinese_stage3_parent_reviews
    (upload_id, student_id, reviewer_id, corrected_transcription, final_score)
  VALUES (p_upload_id, v_student, auth.uid(), p_corrected_transcription, p_final_score);
  -- Unique upload_id prevents silently overwriting confirmed reviews.
END $$;
REVOKE ALL ON FUNCTION public.confirm_chinese_stage3_review(uuid,text,integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.confirm_chinese_stage3_review(uuid,text,integer) TO authenticated;
COMMIT;
