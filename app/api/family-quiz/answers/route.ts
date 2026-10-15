import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { extractOpenAIText, getFamilyQuizAdmin, getFamilyQuizUser } from "@/lib/familyQuizServer";

type Body = { sessionId?: unknown; questionId?: unknown; answer?: unknown };

export async function POST(request: Request) {
  const user = await getFamilyQuizUser(request);
  const admin = getFamilyQuizAdmin();
  if (!user) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  if (!admin) return NextResponse.json({ error: "Quiz marking is not configured." }, { status: 503 });
  const body = await request.json() as Body;
  const sessionId = typeof body.sessionId === "string" ? body.sessionId : "";
  const questionId = typeof body.questionId === "string" ? body.questionId : "";
  const answer = typeof body.answer === "string" ? body.answer.trim().slice(0, 8000) : "";
  if (!sessionId || !questionId || !answer) return NextResponse.json({ error: "Write an answer before submitting." }, { status: 400 });

  const [{ data: session }, { data: question }, { data: key }, { data: participant }] = await Promise.all([
    admin.from("family_quiz_sessions").select("*").eq("id", sessionId).single(),
    admin.from("family_quiz_questions").select("*").eq("id", questionId).eq("session_id", sessionId).single(),
    admin.from("family_quiz_answer_keys").select("*").eq("question_id", questionId).single(),
    admin.from("family_quiz_participants").select("*").eq("session_id", sessionId).eq("user_id", user.id).single(),
  ]);
  if (!session || !question || !key || !participant) return NextResponse.json({ error: "This quiz question is unavailable." }, { status: 404 });
  if (session.status !== "question" || session.current_question_id !== questionId) return NextResponse.json({ error: "This question is not accepting answers." }, { status: 409 });

  let awardedMarks: number | null = null;
  let status = "marked";
  let feedback: Record<string, unknown> = {};
  if (question.type === "multiple-choice") {
    const correct = answer.trim().toLocaleLowerCase() === String(key.answer).trim().toLocaleLowerCase();
    awardedMarks = correct ? question.marks : 0;
    feedback = { summary: correct ? "Correct." : "Not quite.", modelAnswer: key.answer };
  } else {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      status = "needs_review";
      feedback = { summary: "Submitted. A parent can review this answer because AI marking is unavailable." };
    } else {
      try {
        const points = Array.isArray(key.marking_points) ? key.marking_points as string[] : [];
        const schema = { type: "object", additionalProperties: false, properties: {
          awardedMarks: { type: "integer", minimum: 0, maximum: question.marks }, summary: { type: "string" },
          strengths: { type: "array", items: { type: "string" } }, improvements: { type: "array", items: { type: "string" } }, modelAnswer: { type: "string" },
        }, required: ["awardedMarks", "summary", "strengths", "improvements", "modelAnswer"] };
        const response = await fetch("https://api.openai.com/v1/responses", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({
          model: process.env.OPENAI_GRADING_MODEL || "gpt-6-luna", store: false, reasoning: { effort: "low" }, max_output_tokens: 1200,
          safety_identifier: createHash("sha256").update(user.id).digest("hex").slice(0, 32),
          input: [{ role: "system", content: "Mark this Year 8 answer only against the supplied marking points. Accept equivalent wording and minor language errors. Award integer marks. Give concise, encouraging feedback. The model answer must cover every marking point." }, { role: "user", content: JSON.stringify({ question: question.prompt, maximumMarks: question.marks, markingPoints: points, guidance: key.guidance, studentAnswer: answer }) }],
          text: { format: { type: "json_schema", name: "family_quiz_mark", strict: true, schema } },
        }) });
        if (!response.ok) throw new Error(`OpenAI status ${response.status}`);
        feedback = JSON.parse(extractOpenAIText(await response.json() as unknown)) as Record<string, unknown>;
        awardedMarks = Math.max(0, Math.min(question.marks, Number(feedback.awardedMarks) || 0));
      } catch (error) {
        console.error("Family quiz marking error", error);
        status = "needs_review";
        feedback = { summary: "Submitted. AI marking did not finish, so a parent can review this answer." };
      }
    }
  }

  const { data, error } = await admin.from("family_quiz_answers").upsert({
    session_id: sessionId, question_id: questionId, user_id: user.id, display_name: participant.display_name,
    answer, awarded_marks: awardedMarks, max_marks: question.marks, status, feedback, submitted_at: new Date().toISOString(),
  }, { onConflict: "question_id,user_id" }).select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true, answer: data });
}
