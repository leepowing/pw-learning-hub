import { NextResponse } from "next/server";
import { getKnowledgeOrganiserById } from "@/data/knowledgeOrganisers/registry";
import { getFamilyQuizAdmin, getFamilyQuizUser } from "@/lib/familyQuizServer";

type QuestionRow = {
  id: string;
  organiser_id: string | null;
  source_question_id: string | null;
};

type AnswerRow = {
  question_id: string;
  user_id: string;
  display_name: string;
  awarded_marks: number | null;
  max_marks: number;
  status: string;
  submitted_at: string;
};

type WeakQuestion = {
  organiserId: string;
  questionId: string;
  subject: string;
  chapter: number;
  chapterTitle: string;
  prompt: string;
  type: string;
  marks: number;
  interactive: boolean;
  attempts: number;
  mistakes: number;
  awarded: number;
  possible: number;
  lastMistakeAt: string;
};

export async function GET(request: Request) {
  const user = await getFamilyQuizUser(request);
  const admin = getFamilyQuizAdmin();
  if (!user) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  if (!admin) return NextResponse.json({ error: "Weak-topic revision is not configured." }, { status: 503 });

  const { data: sessions, error: sessionError } = await admin
    .from("family_quiz_sessions")
    .select("id")
    .eq("host_id", user.id)
    .order("created_at", { ascending: false })
    .limit(1000);
  if (sessionError) return NextResponse.json({ error: sessionError.message }, { status: 500 });
  const sessionIds = (sessions ?? []).map((session: { id: string }) => session.id);
  if (!sessionIds.length) return NextResponse.json({ players: [], analysedQuizCount: 0 });

  const [{ data: questions, error: questionError }, { data: answers, error: answerError }] = await Promise.all([
    admin.from("family_quiz_questions").select("id,organiser_id,source_question_id").in("session_id", sessionIds),
    admin.from("family_quiz_answers").select("question_id,user_id,display_name,awarded_marks,max_marks,status,submitted_at").in("session_id", sessionIds),
  ]);
  if (questionError || answerError) return NextResponse.json({ error: questionError?.message || answerError?.message || "Could not analyse past quizzes." }, { status: 500 });

  const questionById = new Map(((questions ?? []) as QuestionRow[]).map(question => [question.id, question]));
  const playerMap = new Map<string, { userId: string; displayName: string; questions: Map<string, WeakQuestion> }>();

  for (const answer of (answers ?? []) as AnswerRow[]) {
    if (answer.awarded_marks === null || answer.status === "needs_review" || answer.max_marks < 1) continue;
    const source = questionById.get(answer.question_id);
    if (!source?.organiser_id || !source.source_question_id) continue;
    const organiser = getKnowledgeOrganiserById(source.organiser_id);
    const knowledgeQuestion = organiser?.questions.find(question => question.id === source.source_question_id);
    if (!organiser || !knowledgeQuestion || knowledgeQuestion.interaction?.kind === "table") continue;

    let player = playerMap.get(answer.user_id);
    if (!player) {
      player = { userId: answer.user_id, displayName: answer.display_name, questions: new Map() };
      playerMap.set(answer.user_id, player);
    } else if (answer.display_name) player.displayName = answer.display_name;

    const key = `${organiser.id}::${knowledgeQuestion.id}`;
    let weakQuestion = player.questions.get(key);
    if (!weakQuestion) {
      weakQuestion = {
        organiserId: organiser.id,
        questionId: knowledgeQuestion.id,
        subject: organiser.subject,
        chapter: organiser.chapter,
        chapterTitle: organiser.title,
        prompt: knowledgeQuestion.prompt,
        type: knowledgeQuestion.type,
        marks: knowledgeQuestion.marks,
        interactive: Boolean(knowledgeQuestion.interaction),
        attempts: 0,
        mistakes: 0,
        awarded: 0,
        possible: 0,
        lastMistakeAt: "",
      };
      player.questions.set(key, weakQuestion);
    }
    weakQuestion.attempts += 1;
    weakQuestion.awarded += answer.awarded_marks;
    weakQuestion.possible += answer.max_marks;
    if (answer.awarded_marks < answer.max_marks) {
      weakQuestion.mistakes += 1;
      if (!weakQuestion.lastMistakeAt || answer.submitted_at > weakQuestion.lastMistakeAt) weakQuestion.lastMistakeAt = answer.submitted_at;
    }
  }

  const players = [...playerMap.values()].map(player => {
    const weakQuestions = [...player.questions.values()]
      .filter(question => question.mistakes > 0)
      .map(question => ({
        ...question,
        accuracy: question.possible ? Math.round((question.awarded / question.possible) * 100) : 0,
        priority: question.mistakes * 1000 + (question.possible ? Math.round((1 - question.awarded / question.possible) * 100) : 100),
      }))
      .sort((a, b) => b.priority - a.priority || b.lastMistakeAt.localeCompare(a.lastMistakeAt));
    return {
      userId: player.userId,
      displayName: player.displayName,
      weakQuestionCount: weakQuestions.length,
      totalMistakes: weakQuestions.reduce((sum, question) => sum + question.mistakes, 0),
      weakQuestions,
    };
  }).filter(player => player.weakQuestionCount > 0).sort((a, b) => a.displayName.localeCompare(b.displayName));

  return NextResponse.json({ players, analysedQuizCount: sessionIds.length });
}
