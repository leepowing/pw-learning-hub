import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export async function getStudentScores(
  student: string,
  course: string
) {
  const { data, error } = await supabase
    .from("scores")
    .select("*")
    .eq("student", student)
    .eq("course", course)
    .order("week", { ascending: true });

  if (error) {
    console.error("Could not load scores:", error);
    return [];
  }

  return data;
}

export async function getStudentXP(
  student: string,
  course?: string
) {
  let query = supabase
    .from("scores")
    .select("xp")
    .eq("student", student);

  if (course) {
    query = query.eq("course", course);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Could not load XP:", error);
    return 0;
  }

  return (data ?? []).reduce(
    (total, row) => total + (row.xp ?? 0),
    0
  );
}

export async function saveStudentMistake(
  student: string,
  week: number,
  word: string,
  course = "year7-spelling"
) {
  const normalisedWord = word.trim().toLowerCase();

  const { data: existing, error: readError } =
    await supabase
      .from("mistakes")
      .select("id, wrong_count, correct_count")
      .eq("student", student)
      .eq("course", course)
      .eq("word", normalisedWord)
      .maybeSingle();

  if (readError) {
    console.error("Could not check mistake:", readError);
    return false;
  }

  if (existing) {
    const { error: updateError } = await supabase
      .from("mistakes")
      .update({
        week,
        wrong_count: (existing.wrong_count ?? 0) + 1,
        correct_count: 0,
        mastered: false,
        last_wrong_at: new Date().toISOString(),
      })
      .eq("id", existing.id);

    if (updateError) {
      console.error("Could not update mistake:", updateError);
      return false;
    }

    return true;
  }

  const { error: insertError } = await supabase
    .from("mistakes")
    .insert({
      student,
      course,
      week,
      word: normalisedWord,
      wrong_count: 1,
      correct_count: 0,
      mastered: false,
      last_wrong_at: new Date().toISOString(),
    });

  if (insertError) {
    console.error("Could not save mistake:", insertError);
    return false;
  }

  return true;
}

export async function getStudentMistakes(
  student: string,
  course = "year7-spelling"
) {
  const { data, error } = await supabase
    .from("mistakes")
    .select("*")
    .eq("student", student)
    .eq("course", course)
    .eq("mastered", false)
    .order("week", { ascending: true })
    .order("wrong_count", { ascending: false });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}

export async function getSpellingProgress(
  student: string,
  course = "year7-spelling"
) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error(
      "Could not get logged in user:",
      userError
    );
    return [];
  }

  const { data, error } = await supabase
    .from("spelling_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("student", student)
    .eq("course", course)
    .order("week", { ascending: true });

  if (error) {
    console.error("Could not load spelling progress:", error);
    return [];
  }

  return data ?? [];
}

export async function saveSpellingProgress(
  student: string,
  course: string,
  week: number,
  learnedWords: string[],
  bestScore: number,
  mastered: boolean
) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error(
      "Could not get logged in user:",
      userError
    );
    return false;
  }

  const { error } = await supabase
    .from("spelling_progress")
    .upsert(
      {
        user_id: user.id,
        student,
        course,
        week,
        learned_words: learnedWords,
        best_score: bestScore,
        mastered,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id,student,course,week",
      }
    );

  if (error) {
    console.error("Could not save spelling progress:", error);
    return false;
  }

  return true;
}

export async function saveStudentReviewResult(
  student: string,
  word: string,
  passed: boolean,
  course = "year7-spelling"
) {
  const normalisedWord = word.trim().toLowerCase();

  const { data: existing, error: readError } =
    await supabase
      .from("mistakes")
      .select("id, wrong_count, correct_count")
      .eq("student", student)
      .eq("course", course)
      .eq("word", normalisedWord)
      .maybeSingle();

  if (readError) {
    console.error(
      "Could not load review word:",
      readError
    );
    return false;
  }

  if (!existing) {
    console.error(
      "Review word was not found:",
      normalisedWord
    );
    return false;
  }

  const nextCorrectCount =
    (existing.correct_count ?? 0) + (passed ? 1 : 0);
  const nextWrongCount =
    (existing.wrong_count ?? 0) + (passed ? 0 : 1);
  const mastered = nextCorrectCount >= 3;

  const { error: updateError } = await supabase
    .from("mistakes")
    .update({
      correct_count: nextCorrectCount,
      wrong_count: nextWrongCount,
      mastered,
      ...(passed
        ? {}
        : {
            last_wrong_at: new Date().toISOString(),
          }),
    })
    .eq("id", existing.id);

  if (updateError) {
    console.error(
      "Could not save review result:",
      updateError
    );
    return false;
  }

  return true;
}

export type FamilySpellingOverviewRow = {
  student: string;
  week: number | null;
  learned_count: number;
  best_score: number;
  total_xp: number;
  review_count: number;
};

export async function getFamilySpellingOverview(
  course = "year7-spelling"
): Promise<FamilySpellingOverviewRow[]> {
  const { data, error } = await supabase.rpc(
    "get_family_spelling_overview",
    {
      p_course: course,
    }
  );

  if (error) {
    console.error(
      "Could not load family spelling overview:",
      error
    );
    return [];
  }

  return (data ?? []) as FamilySpellingOverviewRow[];
}

export async function saveStudentReviewXP(
  student: string,
  gainedXP: number,
  course = "year7-spelling"
) {
  const safeXP = Math.max(0, Math.floor(gainedXP));

  if (safeXP === 0) {
    return true;
  }

  const { error } = await supabase
    .from("scores")
    .insert({
      student,
      course,
      week: 1,
      score: 0,
      best_score: 0,
      xp: safeXP,
    });

  if (error) {
    console.error("Could not save review XP:", error);
    return false;
  }

  return true;
}

export type MathsFlashcardSupabaseRow = {
  card_id: string;
  attempts: number;
  correct: number;
  practice: number;
  last_result: "correct" | "practice";
  last_practised_at: string;
};

export async function getMathsFlashcardProgressFromSupabase(
  student: string
): Promise<MathsFlashcardSupabaseRow[]> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error(
      "Could not get logged-in user:",
      userError
    );
    return [];
  }

  const { data, error } = await supabase
    .from("maths_flashcard_progress")
    .select(`
      card_id,
      attempts,
      correct,
      practice,
      last_result,
      last_practised_at
    `)
    .eq("user_id", user.id)
    .eq("student", student)
    .order("last_practised_at", {
      ascending: false,
    });

  if (error) {
    console.error(
      "Could not load maths flashcard progress:",
      error
    );
    return [];
  }

  return (data ?? []) as MathsFlashcardSupabaseRow[];
}

// Kept for compatibility with any older code paths. New flashcard answers use
// recordMathsFlashcardAnswerAtomically below.
export async function saveMathsFlashcardProgressToSupabase(
  student: string,
  cardId: string,
  attempts: number,
  correct: number,
  practice: number,
  lastResult: "correct" | "practice",
  lastPractisedAt: string
): Promise<boolean> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error(
      "Could not get logged-in user:",
      userError
    );
    return false;
  }

  const { error } = await supabase
    .from("maths_flashcard_progress")
    .upsert(
      {
        user_id: user.id,
        student,
        card_id: cardId,
        attempts,
        correct,
        practice,
        last_result: lastResult,
        last_practised_at: lastPractisedAt,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id,student,card_id",
      }
    );

  if (error) {
    console.error(
      "Could not save maths flashcard progress:",
      error
    );
    return false;
  }

  return true;
}

export type MathsFlashcardAtomicResult = {
  card_id: string;
  attempts: number;
  correct: number;
  practice: number;
  last_result: "correct" | "practice";
  last_practised_at: string;
};

export async function recordMathsFlashcardAnswerAtomically(
  student: string,
  cardId: string,
  result: "correct" | "practice",
  eventId: string,
  practisedAt: string
): Promise<MathsFlashcardAtomicResult | null> {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error(
      "Could not get logged-in user:",
      userError
    );
    return null;
  }

  const { data, error } = await supabase.rpc(
    "record_maths_flashcard_answer",
    {
      p_event_id: eventId,
      p_student: student,
      p_card_id: cardId,
      p_result: result,
      p_practised_at: practisedAt,
    }
  );

  if (error) {
    console.error(
      "Could not record maths flashcard answer:",
      error
    );
    return null;
  }

  return data as MathsFlashcardAtomicResult;
}

