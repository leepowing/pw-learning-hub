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