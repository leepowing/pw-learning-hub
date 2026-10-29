-- GCSE Chinese Stage 3: make submitted Reading/Listening answers immutable.
-- Non-destructive. Works with the existing public.chinese_stage3_progress table.
-- It will not delete or reset any student data.
BEGIN;

CREATE OR REPLACE FUNCTION public.chinese_stage3_protect_submitted_answers()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = ''
AS $$
DECLARE
  section_name text;
  lock_key text;
  session_number integer;
  old_answers jsonb;
  new_answers jsonb;
  old_submitted jsonb;
  new_submitted jsonb;
  question_id text;
  old_completed jsonb;
  new_completed jsonb;
BEGIN
  -- Key fields are not editable through this progress row.
  IF NEW.user_id IS DISTINCT FROM OLD.user_id OR NEW.week IS DISTINCT FROM OLD.week THEN
    RAISE EXCEPTION 'Student and week cannot be changed' USING ERRCODE='23514';
  END IF;

  old_completed := CASE WHEN jsonb_typeof(OLD.answers -> 'sessionsCompleted')='array'
    THEN OLD.answers -> 'sessionsCompleted' ELSE '[]'::jsonb END;
  new_completed := CASE WHEN jsonb_typeof(NEW.answers -> 'sessionsCompleted')='array'
    THEN NEW.answers -> 'sessionsCompleted' ELSE '[]'::jsonb END;

  FOREACH section_name IN ARRAY ARRAY['reading', 'listening'] LOOP
    lock_key := section_name || 'Submitted';
    session_number := CASE WHEN section_name = 'reading' THEN 0 ELSE 1 END;
    old_answers := COALESCE(OLD.answers -> section_name, '{}'::jsonb);
    new_answers := COALESCE(NEW.answers -> section_name, '{}'::jsonb);

    -- Backward compatibility: a previously completed session is already final.
    IF old_completed @> jsonb_build_array(session_number) THEN
      IF NOT (new_completed @> jsonb_build_array(session_number)) THEN
        RAISE EXCEPTION 'Completed % session cannot be reopened', section_name
          USING ERRCODE='23514';
      END IF;
      IF old_answers IS DISTINCT FROM new_answers THEN
        RAISE EXCEPTION '% answers cannot be changed after session completion', section_name
          USING ERRCODE='23514';
      END IF;
    END IF;

    old_submitted := CASE WHEN jsonb_typeof(OLD.answers -> lock_key)='array'
      THEN OLD.answers -> lock_key ELSE '[]'::jsonb END;
    new_submitted := CASE WHEN jsonb_typeof(NEW.answers -> lock_key)='array'
      THEN NEW.answers -> lock_key ELSE '[]'::jsonb END;

    -- Each submitted question keeps its original answer and lock flag.
    FOR question_id IN SELECT jsonb_array_elements_text(old_submitted) LOOP
      IF NOT (new_submitted ? question_id) THEN
        RAISE EXCEPTION 'Submitted % question % cannot be unlocked', section_name, question_id
          USING ERRCODE='23514';
      END IF;
      IF old_answers -> question_id IS DISTINCT FROM new_answers -> question_id THEN
        RAISE EXCEPTION 'Submitted % question % cannot be changed', section_name, question_id
          USING ERRCODE='23514';
      END IF;
    END LOOP;
  END LOOP;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS chinese_stage3_submitted_answers_guard
  ON public.chinese_stage3_progress;

CREATE TRIGGER chinese_stage3_submitted_answers_guard
BEFORE UPDATE ON public.chinese_stage3_progress
FOR EACH ROW
EXECUTE FUNCTION public.chinese_stage3_protect_submitted_answers();

COMMIT;
