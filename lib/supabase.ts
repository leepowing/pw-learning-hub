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