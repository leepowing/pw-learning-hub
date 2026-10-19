import { NextResponse } from "next/server";
import { feedbackEnabled, PUBLIC_SUBMISSION_COLUMNS, writingContext, writingError } from "@/lib/englishWriting/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export async function GET(request: Request) {
  try {
    const { db, userId, name } = await writingContext(request);
    const [work, submissions, lessons, links] = await Promise.all([
      db.from("english_writing_work").select("task_id,draft,plan,elapsed_seconds,version").eq("user_id", userId),
      db.from("english_writing_submissions").select(PUBLIC_SUBMISSION_COLUMNS).eq("user_id", userId).eq("status", "complete").order("created_at", { ascending: false }).limit(300),
      db.from("english_writing_lessons").select("week").eq("user_id", userId),
      db.from("english_writing_guardians").select("learner_user_id").eq("guardian_user_id", userId),
    ]);
    if (work.error || submissions.error || lessons.error || links.error) throw new Error();
    const family = await Promise.all((links.data ?? []).map(async link => {
      // Learners are selected exclusively from administrator-created guardian links.
      const id = link.learner_user_id;
      const [profile, entries, completed] = await Promise.all([
        db.from("profiles").select("student").eq("id", id).maybeSingle(),
        db.from("english_writing_submissions").select(PUBLIC_SUBMISSION_COLUMNS).eq("user_id", id).eq("status", "complete").order("created_at", { ascending: false }).limit(300),
        db.from("english_writing_lessons").select("week").eq("user_id", id),
      ]);
      if (profile.error || entries.error || completed.error) throw new Error();
      return { userId: id, name: profile.data?.student ?? "Learner", submissions: entries.data ?? [], lessons: (completed.data ?? []).map(row => row.week) };
    }));
    return NextResponse.json({ ok: true, name, userId, works: work.data ?? [], submissions: submissions.data ?? [], lessons: (lessons.data ?? []).map(row => row.week), family, feedbackEnabled: feedbackEnabled() }, { headers: { "Cache-Control": "private, no-store" } });
  } catch (error) { return writingError(error); }
}
