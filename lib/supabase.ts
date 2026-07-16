import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

export async function getStudentScores(student: string) {
  const { data, error } = await supabase
    .from("scores")
    .select("*")
    .eq("student", student)
    .order("week", { ascending: true });

  if (error) {
    console.error(error);
    return [];
  }

  return data;
}