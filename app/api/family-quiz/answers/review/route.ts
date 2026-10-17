import { NextResponse } from "next/server";
import { getFamilyQuizAdmin, getFamilyQuizUser } from "@/lib/familyQuizServer";

type Body = { answerId?: unknown; awardedMarks?: unknown; parentComment?: unknown };

export async function POST(request: Request) {
  const user = await getFamilyQuizUser(request);
  const admin = getFamilyQuizAdmin();
  if (!user) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  if (!admin) return NextResponse.json({ error: "Quiz review is not configured." }, { status: 503 });

  let body: Body;
  try { body = await request.json() as Body; } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const answerId = typeof body.answerId === "string" ? body.answerId : "";
  const awardedMarks = typeof body.awardedMarks === "number" ? body.awardedMarks : Number.NaN;
  const parentComment = typeof body.parentComment === "string" ? body.parentComment.trim().slice(0, 1000) : "";
  if (!answerId || !Number.isInteger(awardedMarks)) {
    return NextResponse.json({ error: "Enter a whole-number mark." }, { status: 400 });
  }

  const { data: answer } = await admin.from("family_quiz_answers").select("*").eq("id", answerId).single();
  if (!answer) return NextResponse.json({ error: "This answer is unavailable." }, { status: 404 });
  const { data: session } = await admin.from("family_quiz_sessions").select("host_id").eq("id", answer.session_id).single();
  if (!session || session.host_id !== user.id) {
    return NextResponse.json({ error: "Only the quiz host can review this answer." }, { status: 403 });
  }
  if (awardedMarks < 0 || awardedMarks > answer.max_marks) {
    return NextResponse.json({ error: `Enter a mark from 0 to ${answer.max_marks}.` }, { status: 400 });
  }

  const existingFeedback = answer.feedback && typeof answer.feedback === "object" && !Array.isArray(answer.feedback)
    ? answer.feedback as Record<string, unknown>
    : {};
  const reviewSummary = awardedMarks === answer.max_marks
    ? "Full marks awarded after host review."
    : awardedMarks === 0
      ? "The host reviewed this answer and awarded 0 marks."
      : `The host reviewed this answer and awarded ${awardedMarks} of ${answer.max_marks} marks.`;
  const feedback = {
    ...existingFeedback,
    summary: reviewSummary,
    automaticSummary: existingFeedback.automaticSummary ?? existingFeedback.summary,
    parentComment,
    reviewedByHost: true,
    reviewedAt: new Date().toISOString(),
    automaticAwardedMarks: existingFeedback.automaticAwardedMarks ?? answer.awarded_marks,
  };
  const { data, error } = await admin.from("family_quiz_answers").update({
    awarded_marks: awardedMarks,
    status: "marked",
    feedback,
  }).eq("id", answerId).select("*").single();
  if (error || !data) return NextResponse.json({ error: error?.message || "Could not save the review." }, { status: 500 });
  return NextResponse.json({ ok: true, answer: data });
}
