import { NextResponse } from "next/server";
import { getFamilyQuizAdmin, getFamilyQuizUser } from "@/lib/familyQuizServer";

type SessionRow = { id: string; code: string; host_id: string; title: string; status: string; created_at: string; updated_at: string };
type QuestionRow = { id: string; session_id: string; position: number; prompt: string; type: string; marks: number; organiser_id: string | null };
type ParticipantRow = { session_id: string; user_id: string; display_name: string; joined_at: string };
type AnswerRow = { id: string; session_id: string; question_id: string; user_id: string; display_name: string; answer: string; awarded_marks: number | null; max_marks: number; status: string; feedback: unknown; submitted_at: string };

export async function GET(request: Request) {
  const user = await getFamilyQuizUser(request);
  const admin = getFamilyQuizAdmin();
  if (!user) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  if (!admin) return NextResponse.json({ error: "Quiz history is not configured." }, { status: 503 });

  const searchParams = new URL(request.url).searchParams;
  const sessionId = searchParams.get("sessionId");
  if (sessionId) {
    const { data: session, error: sessionError } = await admin.from("family_quiz_sessions").select("*").eq("id", sessionId).eq("host_id", user.id).single();
    if (sessionError || !session) return NextResponse.json({ error: "This quiz history is unavailable." }, { status: 404 });
    const [{ data: questions, error: questionError }, { data: participants, error: participantError }, { data: answers, error: answerError }] = await Promise.all([
      admin.from("family_quiz_questions").select("id,session_id,position,prompt,type,marks,organiser_id").eq("session_id", sessionId).order("position"),
      admin.from("family_quiz_participants").select("session_id,user_id,display_name,joined_at").eq("session_id", sessionId).order("joined_at"),
      admin.from("family_quiz_answers").select("id,session_id,question_id,user_id,display_name,answer,awarded_marks,max_marks,status,feedback,submitted_at").eq("session_id", sessionId).order("submitted_at"),
    ]);
    if (questionError || participantError || answerError) return NextResponse.json({ error: questionError?.message || participantError?.message || answerError?.message || "Could not load quiz history." }, { status: 500 });
    return NextResponse.json({
      session,
      questions: (questions ?? []) as QuestionRow[],
      participants: ((participants ?? []) as ParticipantRow[]).filter(participant => participant.user_id !== user.id),
      answers: (answers ?? []) as AnswerRow[],
    });
  }

  const pageSize = 20;
  const requestedPage = Number.parseInt(searchParams.get("page") ?? "1", 10);
  const page = Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  const { data: sessions, error: sessionError, count } = await admin
    .from("family_quiz_sessions")
    .select("id,code,host_id,title,status,created_at,updated_at", { count: "exact" })
    .eq("host_id", user.id)
    .order("created_at", { ascending: false })
    .range(from, to);
  if (sessionError) return NextResponse.json({ error: sessionError.message }, { status: 500 });
  const total = count ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  if (!sessions?.length) return NextResponse.json({ sessions: [], pagination: { page, pageSize, total, totalPages } });

  const sessionRows = sessions as SessionRow[];
  const ids = sessionRows.map(session => session.id);
  const [{ data: questions, error: questionError }, { data: participants, error: participantError }, { data: answers, error: answerError }] = await Promise.all([
    admin.from("family_quiz_questions").select("id,session_id,marks").in("session_id", ids),
    admin.from("family_quiz_participants").select("session_id,user_id,display_name,joined_at").in("session_id", ids),
    admin.from("family_quiz_answers").select("session_id,user_id,awarded_marks,max_marks,status").in("session_id", ids),
  ]);
  if (questionError || participantError || answerError) return NextResponse.json({ error: questionError?.message || participantError?.message || answerError?.message || "Could not load quiz history." }, { status: 500 });

  const summaries = sessionRows.map(session => {
    const sessionQuestions = (questions ?? []).filter((question: { session_id: string }) => question.session_id === session.id);
    const totalMarks = sessionQuestions.reduce((sum: number, question: { marks: number }) => sum + question.marks, 0);
    const players = ((participants ?? []) as ParticipantRow[]).filter(participant => participant.session_id === session.id && participant.user_id !== user.id);
    const sessionAnswers = (answers ?? []).filter((answer: { session_id: string }) => answer.session_id === session.id) as Array<Pick<AnswerRow, "user_id" | "awarded_marks" | "status">>;
    return {
      id: session.id,
      code: session.code,
      title: session.title,
      status: session.status,
      createdAt: session.created_at,
      updatedAt: session.updated_at,
      questionCount: sessionQuestions.length,
      totalMarks,
      reviewNeeded: sessionAnswers.filter(answer => answer.status === "needs_review").length,
      players: players.map(player => {
        const playerAnswers = sessionAnswers.filter(answer => answer.user_id === player.user_id);
        return {
          userId: player.user_id,
          displayName: player.display_name,
          score: playerAnswers.reduce((sum, answer) => sum + (answer.awarded_marks ?? 0), 0),
          totalMarks,
          answeredCount: playerAnswers.length,
        };
      }),
    };
  });
  return NextResponse.json({ sessions: summaries, pagination: { page, pageSize, total, totalPages } });
}
