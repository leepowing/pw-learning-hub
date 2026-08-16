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

  const { data: existing, error: readError } = await supabase
    .from("mistakes")
    .select("id, wrong_count")
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
        wrong_count: existing.wrong_count + 1,
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
    console.error("Could not get logged in user:", userError);
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
    console.error("Could not get logged in user:", userError);
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
      .select(
        "id, wrong_count, correct_count"
      )
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

  const { error: updateError } = await supabase
    .from("mistakes")
    .update({
      correct_count:
        (existing.correct_count ?? 0) +
        (passed ? 1 : 0),

      wrong_count:
        (existing.wrong_count ?? 0) +
        (passed ? 0 : 1),

      mastered: passed,

      ...(passed
        ? {}
        : {
            last_wrong_at:
              new Date().toISOString(),
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

export async function mergeLegacySpellingProgress(
  student: string,
  course: string,
  week: number,
  legacyLearnedWords: string[],
  legacyBestScore: number,
  legacyMastered: boolean
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

  const { data: existing, error: readError } =
    await supabase
      .from("spelling_progress")
      .select(
        "learned_words, best_score, mastered"
      )
      .eq("user_id", user.id)
      .eq("student", student)
      .eq("course", course)
      .eq("week", week)
      .maybeSingle();

  if (readError) {
    console.error(
      "Could not load existing progress:",
      readError
    );
    return false;
  }

  const existingWords = Array.isArray(
    existing?.learned_words
  )
    ? existing.learned_words
    : [];

  const mergedWords = [
    ...new Set([
      ...existingWords,
      ...legacyLearnedWords,
    ]),
  ];

  const mergedBestScore = Math.max(
    existing?.best_score ?? 0,
    legacyBestScore
  );

  const mergedMastered =
    (existing?.mastered ?? false) ||
    legacyMastered;

  const { error: saveError } = await supabase
    .from("spelling_progress")
    .upsert(
      {
        user_id: user.id,
        student,
        course,
        week,
        learned_words: mergedWords,
        best_score: mergedBestScore,
        mastered: mergedMastered,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict:
          "user_id,student,course,week",
      }
    );

  if (saveError) {
    console.error(
      "Could not merge legacy progress:",
      saveError
    );
    return false;
  }

  return true;
}

export async function migrateLegacyXP(
  student: string,
  legacyTotalXP: number,
  course = "year7-spelling"
) {
  if (
    !Number.isFinite(legacyTotalXP) ||
    legacyTotalXP <= 0
  ) {
    return true;
  }

  const currentXP = await getStudentXP(
    student,
    course
  );

  const missingXP = Math.max(
    legacyTotalXP - currentXP,
    0
  );

  if (missingXP === 0) {
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
      xp: missingXP,
    });

  if (error) {
    console.error(
      "Could not migrate legacy XP:",
      error
    );
    return false;
  }

  return true;
}

type LegacyMistake = {
  word: string;
  week: number;
  wrongCount: number;
};

export async function migrateLegacyMistakes(
  student: string,
  legacyMistakes: LegacyMistake[],
  course = "year7-spelling"
) {
  if (legacyMistakes.length === 0) {
    return true;
  }

  const { data: existing, error: readError } =
    await supabase
      .from("mistakes")
      .select("word")
      .eq("student", student)
      .eq("course", course);

  if (readError) {
    console.error(
      "Could not load existing mistakes:",
      readError
    );
    return false;
  }

  const existingWords = new Set(
    (existing ?? []).map((row) =>
      String(row.word).trim().toLowerCase()
    )
  );

  const missingMistakes = new Map<
    string,
    LegacyMistake
  >();

  legacyMistakes.forEach((item) => {
    const normalisedWord =
      item.word.trim().toLowerCase();

    if (
      !normalisedWord ||
      existingWords.has(normalisedWord)
    ) {
      return;
    }

    const previous =
      missingMistakes.get(normalisedWord);

    if (
      !previous ||
      item.wrongCount > previous.wrongCount
    ) {
      missingMistakes.set(normalisedWord, {
        word: normalisedWord,
        week: item.week,
        wrongCount: Math.max(
          item.wrongCount,
          1
        ),
      });
    }
  });

  const rowsToInsert = [
    ...missingMistakes.values(),
  ].map((item) => ({
    student,
    course,
    week: item.week,
    word: item.word,
    wrong_count: item.wrongCount,
    correct_count: 0,
    mastered: false,
    last_wrong_at: new Date().toISOString(),
  }));

  if (rowsToInsert.length === 0) {
    return true;
  }

  const { error: insertError } = await supabase
    .from("mistakes")
    .insert(rowsToInsert);

  if (insertError) {
    console.error(
      "Could not migrate legacy mistakes:",
      insertError
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
) {
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
