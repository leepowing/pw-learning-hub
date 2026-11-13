-- PW Learning Hub - Stage 3 Checkpoint 1 production incremental repair
-- Preserves the existing chinese_stage3_checkpoints table and all existing rows.

BEGIN;

DO $$
BEGIN
  IF to_regclass('public.chinese_stage3_progress') IS NULL
     OR to_regprocedure('public.is_chinese_parent_of(uuid)') IS NULL THEN
    RAISE EXCEPTION 'Expected Stage 3 progress or family authorisation helper missing';
  END IF;

  IF to_regclass('public.chinese_stage3_checkpoints') IS NULL THEN
    RAISE EXCEPTION 'Existing checkpoint table is missing';
  END IF;
END
$$;

CREATE OR REPLACE FUNCTION public.ch3_cp1_eligible(p_uid uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
  SELECT p_uid = auth.uid()
    AND EXISTS (
      SELECT 1
      FROM public.profiles pf
      WHERE pf.id = p_uid
        AND pf.role <> 'parent'
    )
    AND (
      SELECT count(*)
      FROM public.chinese_stage3_progress p
      WHERE p.user_id = p_uid
        AND p.week BETWEEN 1 AND 4
        AND p.answers->'sessionsCompleted' @> '[0,1,2,3]'::jsonb
    ) = 4;
$$;

REVOKE ALL ON FUNCTION public.ch3_cp1_eligible(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.ch3_cp1_eligible(uuid) TO authenticated;

ALTER TABLE public.chinese_stage3_checkpoints ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.chinese_stage3_checkpoints FROM PUBLIC, anon;
GRANT SELECT, INSERT, UPDATE ON public.chinese_stage3_checkpoints TO authenticated;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'chinese_stage3_checkpoints'
      AND policyname = 'cp1_read'
  ) THEN
    CREATE POLICY cp1_read
      ON public.chinese_stage3_checkpoints
      FOR SELECT TO authenticated
      USING (user_id = auth.uid() OR public.is_chinese_parent_of(user_id));
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'chinese_stage3_checkpoints'
      AND policyname = 'cp1_insert'
  ) THEN
    CREATE POLICY cp1_insert
      ON public.chinese_stage3_checkpoints
      FOR INSERT TO authenticated
      WITH CHECK (
        user_id = auth.uid()
        AND public.ch3_cp1_eligible(user_id)
        AND submitted_at IS NULL
        AND submitted_result IS NULL
        AND parent_score IS NULL
        AND reviewed_at IS NULL
        AND reviewed_by IS NULL
      );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'chinese_stage3_checkpoints'
      AND policyname = 'cp1_update'
  ) THEN
    CREATE POLICY cp1_update
      ON public.chinese_stage3_checkpoints
      FOR UPDATE TO authenticated
      USING (
        user_id = auth.uid()
        AND submitted_at IS NULL
        AND reviewed_at IS NULL
        AND public.ch3_cp1_eligible(user_id)
      )
      WITH CHECK (
        user_id = auth.uid()
        AND parent_score IS NULL
        AND reviewed_by IS NULL
        AND reviewed_at IS NULL
        AND public.ch3_cp1_eligible(user_id)
      );
  END IF;
END
$$;

INSERT INTO storage.buckets (
  id, name, public, file_size_limit, allowed_mime_types
)
VALUES (
  'chinese-checkpoint-private',
  'chinese-checkpoint-private',
  false,
  8388608,
  ARRAY[
    'image/jpeg', 'image/png', 'image/webp',
    'audio/webm', 'audio/mp4', 'audio/wav'
  ]
)
ON CONFLICT (id) DO UPDATE
SET public = EXCLUDED.public,
    file_size_limit = EXCLUDED.file_size_limit,
    allowed_mime_types = EXCLUDED.allowed_mime_types;

CREATE TABLE IF NOT EXISTS public.chinese_stage3_checkpoint_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  checkpoint_id text NOT NULL CHECK (checkpoint_id = 'weeks1-4'),
  kind text NOT NULL CHECK (
    kind IN ('speaking', 'writing', 'dictation', 'translation')
  ),
  task_id text NOT NULL,
  object_path text NOT NULL UNIQUE,
  mime_type text NOT NULL,
  ai_feedback jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, checkpoint_id, kind, task_id),
  CHECK (
    (
      kind = 'speaking'
      AND task_id IN ('role', 'conversation')
      AND mime_type IN ('audio/webm', 'audio/mp4', 'audio/wav')
    )
    OR
    (
      kind IN ('writing', 'dictation', 'translation')
      AND (
        (kind = 'writing' AND task_id = 'essay')
        OR (kind = 'dictation' AND task_id = 'words')
        OR (kind = 'translation' AND task_id = 'translations')
      )
      AND mime_type IN ('image/jpeg', 'image/png', 'image/webp')
    )
  ),
  CHECK (
    split_part(object_path, '/', 1) = user_id::text
    AND split_part(object_path, '/', 2) = 'checkpoint1'
  )
);

ALTER TABLE public.chinese_stage3_checkpoint_media ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.chinese_stage3_checkpoint_media FROM PUBLIC, anon;
GRANT SELECT, INSERT, UPDATE
  ON public.chinese_stage3_checkpoint_media TO authenticated;
GRANT USAGE ON SCHEMA public TO service_role;
GRANT SELECT, UPDATE
  ON public.chinese_stage3_checkpoint_media TO service_role;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'chinese_stage3_checkpoint_media'
      AND policyname = 'cp1_media_select'
  ) THEN
    CREATE POLICY cp1_media_select
      ON public.chinese_stage3_checkpoint_media
      FOR SELECT TO authenticated
      USING (user_id = auth.uid() OR public.is_chinese_parent_of(user_id));
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'chinese_stage3_checkpoint_media'
      AND policyname = 'cp1_media_insert'
  ) THEN
    CREATE POLICY cp1_media_insert
      ON public.chinese_stage3_checkpoint_media
      FOR INSERT TO authenticated
      WITH CHECK (
        user_id = auth.uid()
        AND public.ch3_cp1_eligible(user_id)
        AND NOT EXISTS (
          SELECT 1
          FROM public.chinese_stage3_checkpoints c
          WHERE c.user_id = auth.uid()
            AND c.checkpoint_id = 'weeks1-4'
            AND c.submitted_at IS NOT NULL
        )
      );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'public'
      AND tablename = 'chinese_stage3_checkpoint_media'
      AND policyname = 'cp1_media_update'
  ) THEN
    CREATE POLICY cp1_media_update
      ON public.chinese_stage3_checkpoint_media
      FOR UPDATE TO authenticated
      USING (
        user_id = auth.uid()
        AND public.ch3_cp1_eligible(user_id)
        AND NOT EXISTS (
          SELECT 1
          FROM public.chinese_stage3_checkpoints c
          WHERE c.user_id = auth.uid()
            AND c.checkpoint_id = 'weeks1-4'
            AND c.submitted_at IS NOT NULL
        )
      )
      WITH CHECK (
        user_id = auth.uid()
        AND public.ch3_cp1_eligible(user_id)
      );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'cp1_storage_insert'
  ) THEN
    CREATE POLICY cp1_storage_insert
      ON storage.objects
      FOR INSERT TO authenticated
      WITH CHECK (
        bucket_id = 'chinese-checkpoint-private'
        AND (storage.foldername(name))[1] = auth.uid()::text
        AND (storage.foldername(name))[2] = 'checkpoint1'
        AND public.ch3_cp1_eligible(auth.uid())
      );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'cp1_storage_orphan_delete'
  ) THEN
    CREATE POLICY cp1_storage_orphan_delete
      ON storage.objects
      FOR DELETE TO authenticated
      USING (
        bucket_id = 'chinese-checkpoint-private'
        AND (storage.foldername(name))[1] = auth.uid()::text
        AND (storage.foldername(name))[2] = 'checkpoint1'
        AND public.ch3_cp1_eligible(auth.uid())
        AND NOT EXISTS (
          SELECT 1
          FROM public.chinese_stage3_checkpoint_media m
          WHERE m.object_path = name
        )
      );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'storage'
      AND tablename = 'objects'
      AND policyname = 'cp1_storage_read'
  ) THEN
    CREATE POLICY cp1_storage_read
      ON storage.objects
      FOR SELECT TO authenticated
      USING (
        bucket_id = 'chinese-checkpoint-private'
        AND (
          (storage.foldername(name))[1] = auth.uid()::text
          OR CASE
            WHEN (storage.foldername(name))[1]
              ~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$'
            THEN public.is_chinese_parent_of(
              ((storage.foldername(name))[1])::uuid
            )
            ELSE false
          END
        )
      );
  END IF;
END
$$;

-- Students can create a media row only for an upload they own.
-- Only the server service role may write the first AI feedback object.
CREATE OR REPLACE FUNCTION public.ch3_cp1_media_guard()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO public, storage, pg_temp
AS $function$
BEGIN
  IF tg_op = 'UPDATE' AND auth.role() = 'service_role' THEN
    IF (to_jsonb(new) - 'ai_feedback')
         IS DISTINCT FROM
       (to_jsonb(old) - 'ai_feedback')
      OR old.ai_feedback IS NOT NULL
      OR new.ai_feedback IS NULL
      OR jsonb_typeof(new.ai_feedback) IS DISTINCT FROM 'object'
    THEN
      RAISE EXCEPTION 'AI feedback update not permitted';
    END IF;
    RETURN new;
  END IF;

  IF tg_op <> 'INSERT'
    OR auth.uid() IS NULL
    OR new.user_id IS DISTINCT FROM auth.uid()
    OR new.ai_feedback IS NOT NULL
    OR NOT public.ch3_cp1_eligible(new.user_id)
    OR split_part(new.object_path, '/', 3) IS DISTINCT FROM new.kind
    OR split_part(new.object_path, '/', 4) IS DISTINCT FROM new.task_id
    OR NOT EXISTS (
      SELECT 1
      FROM storage.objects o
      WHERE o.bucket_id = 'chinese-checkpoint-private'
        AND o.name = new.object_path
        AND o.owner_id = new.user_id::text
    )
  THEN
    RAISE EXCEPTION
      'Checkpoint evidence must refer to your existing private upload';
  END IF;

  RETURN new;
END
$function$;

DROP TRIGGER IF EXISTS cp1_media_guard
  ON public.chinese_stage3_checkpoint_media;
CREATE TRIGGER cp1_media_guard
  BEFORE INSERT OR UPDATE
  ON public.chinese_stage3_checkpoint_media
  FOR EACH ROW
  EXECUTE FUNCTION public.ch3_cp1_media_guard();

-- Reinstall the database-calculated objective score guard now that the
-- missing media table exists.
CREATE OR REPLACE FUNCTION public.ch3_cp1_guard()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
DECLARE
  i int;
  r jsonb;
  l jsonb;
  score int := 0;
BEGIN
  IF tg_op = 'INSERT' THEN
    IF NOT public.ch3_cp1_eligible(new.user_id)
       OR new.submitted_at IS NOT NULL
       OR new.submitted_result IS NOT NULL
       OR new.parent_score IS NOT NULL
       OR new.reviewed_at IS NOT NULL THEN
      RAISE EXCEPTION 'Checkpoint insert not permitted';
    END IF;
    RETURN new;
  END IF;

  IF current_setting('ch3.cp1_review', true) = 'internal-review' THEN
    IF NOT public.is_chinese_parent_of(old.user_id)
       OR old.submitted_at IS NULL
       OR old.reviewed_at IS NOT NULL
       OR new.user_id <> old.user_id
       OR new.checkpoint_id <> old.checkpoint_id
       OR new.answers IS DISTINCT FROM old.answers
       OR new.submitted_result IS DISTINCT FROM old.submitted_result
       OR new.submitted_at IS DISTINCT FROM old.submitted_at THEN
      RAISE EXCEPTION 'Review not permitted';
    END IF;
    RETURN new;
  END IF;

  IF old.submitted_at IS NOT NULL
     OR old.reviewed_at IS NOT NULL
     OR new.user_id <> old.user_id
     OR new.checkpoint_id <> old.checkpoint_id
     OR new.parent_score IS NOT NULL
     OR new.reviewed_by IS NOT NULL
     OR new.reviewed_at IS NOT NULL
     OR NOT public.ch3_cp1_eligible(old.user_id) THEN
    RAISE EXCEPTION 'Checkpoint locked or unauthorised';
  END IF;

  IF new.submitted_at IS NOT NULL THEN
    r := new.answers->'reading';
    l := new.answers->'listening';

    IF jsonb_typeof(r) IS DISTINCT FROM 'object'
       OR jsonb_typeof(l) IS DISTINCT FROM 'object'
       OR (
         SELECT count(*)
         FROM jsonb_object_keys(
           coalesce(new.answers->'dictation', '{}'::jsonb)
         )
       ) <> 32
       OR NOT (r ?& ARRAY['r1','r2','r3','r4'])
       OR NOT (l ?& ARRAY['l1','l2','l3','l4','l5','l6']) THEN
      RAISE EXCEPTION 'Checkpoint answers incomplete';
    END IF;

    IF (r->>'r1') = '1' THEN score := score + 1; END IF;
    IF (r->>'r2') = '0' THEN score := score + 1; END IF;
    IF (r->>'r3') = '1' THEN score := score + 1; END IF;
    IF (r->>'r4') = '0' THEN score := score + 1; END IF;
    IF (l->>'l1') = '1' THEN score := score + 1; END IF;
    IF (l->>'l2') = '0' THEN score := score + 1; END IF;
    IF (l->>'l3') = '1' THEN score := score + 1; END IF;
    IF (l->>'l4') = '2' THEN score := score + 1; END IF;
    IF (l->>'l5') = '0' THEN score := score + 1; END IF;
    IF (l->>'l6') = '1' THEN score := score + 1; END IF;

    SELECT count(*)
    INTO i
    FROM public.chinese_stage3_checkpoint_media m
    WHERE m.user_id = new.user_id
      AND m.checkpoint_id = 'weeks1-4'
      AND (
        (m.kind = 'speaking' AND m.task_id IN ('role', 'conversation'))
        OR (m.kind = 'writing' AND m.task_id = 'essay')
        OR (m.kind = 'dictation' AND m.task_id = 'words')
        OR (m.kind = 'translation' AND m.task_id = 'translations')
      );

    IF i < 5 THEN
      RAISE EXCEPTION
        'Two speaking recordings and three handwritten manuscripts required';
    END IF;

    IF coalesce(new.answers->>'writingAcknowledged', 'false') <> 'true' THEN
      RAISE EXCEPTION 'Please confirm handwriting completion';
    END IF;

    IF length(trim(coalesce(new.answers->'translation'->>'t1', ''))) = 0
       OR length(trim(coalesce(new.answers->'translation'->>'t2', ''))) = 0 THEN
      RAISE EXCEPTION 'Both translations required';
    END IF;

    new.submitted_result := jsonb_build_object(
      'readingCorrect',
        (CASE WHEN r->>'r1' = '1' THEN 1 ELSE 0 END)
        + (CASE WHEN r->>'r2' = '0' THEN 1 ELSE 0 END)
        + (CASE WHEN r->>'r3' = '1' THEN 1 ELSE 0 END)
        + (CASE WHEN r->>'r4' = '0' THEN 1 ELSE 0 END),
      'listeningCorrect',
        score - (
          (CASE WHEN r->>'r1' = '1' THEN 1 ELSE 0 END)
          + (CASE WHEN r->>'r2' = '0' THEN 1 ELSE 0 END)
          + (CASE WHEN r->>'r3' = '1' THEN 1 ELSE 0 END)
          + (CASE WHEN r->>'r4' = '0' THEN 1 ELSE 0 END)
        ),
      'objectiveCorrect', score,
      'objectiveTotal', 10
    );
  ELSE
    IF new.submitted_result IS NOT NULL THEN
      RAISE EXCEPTION 'Objective score is server calculated';
    END IF;
  END IF;

  new.updated_at := now();
  RETURN new;
END
$$;

DROP TRIGGER IF EXISTS cp1_guard
  ON public.chinese_stage3_checkpoints;
CREATE TRIGGER cp1_guard
  BEFORE INSERT OR UPDATE
  ON public.chinese_stage3_checkpoints
  FOR EACH ROW
  EXECUTE FUNCTION public.ch3_cp1_guard();

CREATE OR REPLACE FUNCTION public.ch3_confirm_checkpoint(
  p_student_id uuid,
  p_score int,
  p_notes text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  IF auth.uid() IS NULL
     OR NOT public.is_chinese_parent_of(p_student_id)
     OR p_score IS NULL
     OR p_score NOT BETWEEN 0 AND 100 THEN
    RAISE EXCEPTION 'Not authorised or invalid score';
  END IF;

  PERFORM set_config('ch3.cp1_review', 'internal-review', true);

  UPDATE public.chinese_stage3_checkpoints
  SET parent_score = p_score,
      parent_notes = left(coalesce(p_notes, ''), 3000),
      reviewed_by = auth.uid(),
      reviewed_at = now()
  WHERE user_id = p_student_id
    AND checkpoint_id = 'weeks1-4'
    AND submitted_at IS NOT NULL
    AND reviewed_at IS NULL;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'No pending checkpoint';
  END IF;
END
$$;

REVOKE ALL ON FUNCTION public.ch3_confirm_checkpoint(uuid, int, text)
  FROM PUBLIC;
GRANT EXECUTE
  ON FUNCTION public.ch3_confirm_checkpoint(uuid, int, text)
  TO authenticated;

COMMIT;

-- Verification (read-only)
SELECT
  to_regclass('public.chinese_stage3_checkpoints') AS checkpoints_table,
  to_regclass('public.chinese_stage3_checkpoint_media') AS media_table,
  to_regprocedure('public.ch3_cp1_media_guard()') AS media_guard_function;
