import { NextResponse } from "next/server";
import { getKnowledgeOrganiserById } from "@/data/knowledgeOrganisers/registry";
import type { KnowledgeQuestion } from "@/data/knowledgeOrganisers/types";
import type { FamilyQuizPublicInteraction, GeneratedFamilyQuizQuestion } from "@/lib/familyQuiz";
import { getFamilyQuizAdmin, getFamilyQuizUser } from "@/lib/familyQuizServer";

type Selection = { organiserId?: unknown; questionId?: unknown };
type Body = { title?: unknown; selections?: unknown; generatedQuestions?: unknown };
type PreparedQuestion = GeneratedFamilyQuizQuestion & { interaction?: FamilyQuizPublicInteraction | null };

function prepareInteraction(question: KnowledgeQuestion): PreparedQuestion | null {
  const interaction = question.interaction;
  if (!interaction || interaction.kind === "table") return null;
  const base = {
    type: question.type,
    prompt: question.prompt,
    options: [] as string[],
    marks: question.marks,
    guidance: question.type === "multiple-choice" ? question.explanation : question.guidance,
  };
  if (interaction.kind === "fill-blanks") return {
    ...base, interaction: { kind: interaction.kind, sentences: interaction.sentences, wordBank: interaction.wordBank },
    answer: JSON.stringify(interaction.answers), markingPoints: interaction.answers.map(item => item[0]),
  };
  if (interaction.kind === "diagram-labels") return {
    ...base, interaction: { kind: interaction.kind, diagram: interaction.diagram, labels: interaction.labels },
    answer: JSON.stringify(interaction.answers), markingPoints: interaction.answers.map((item, index) => `${interaction.labels[index]}: ${item[0]}`),
  };
  if (interaction.kind === "matching") return {
    ...base, interaction: { kind: interaction.kind, left: interaction.left, right: interaction.right },
    answer: JSON.stringify(interaction.answers), markingPoints: interaction.left.map((item, index) => `${item}: ${interaction.right[interaction.answers[index]]}`),
  };
  if (interaction.kind === "ordering") return {
    ...base, interaction: { kind: interaction.kind, items: interaction.items, count: interaction.answer.length },
    answer: JSON.stringify(interaction.answer), markingPoints: interaction.answer.map((item, index) => `${index + 1}. ${item}`),
  };
  return {
    ...base, interaction: { kind: interaction.kind, rows: interaction.rows, categories: interaction.categories },
    answer: JSON.stringify(interaction.answers), markingPoints: interaction.rows.map((item, index) => `${item}: ${interaction.answers[index]}`),
  };
}

function validGeneratedQuestion(value: unknown): value is GeneratedFamilyQuizQuestion {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<GeneratedFamilyQuizQuestion>;
  return ["multiple-choice", "short-answer", "long-answer"].includes(item.type ?? "")
    && typeof item.prompt === "string" && item.prompt.trim().length >= 5
    && Array.isArray(item.options) && item.options.every(option => typeof option === "string")
    && typeof item.answer === "string"
    && Array.isArray(item.markingPoints) && item.markingPoints.every(point => typeof point === "string")
    && typeof item.guidance === "string"
    && (item.organiserId === undefined || typeof item.organiserId === "string")
    && Number.isInteger(item.marks) && Number(item.marks) >= 1 && Number(item.marks) <= 20;
}

async function createUniqueCode(admin: NonNullable<ReturnType<typeof getFamilyQuizAdmin>>) {
  for (let attempt = 0; attempt < 12; attempt += 1) {
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const { data } = await admin.from("family_quiz_sessions").select("id").eq("code", code).maybeSingle();
    if (!data) return code;
  }
  throw new Error("Could not create a unique room code.");
}

export async function POST(request: Request) {
  const user = await getFamilyQuizUser(request);
  const admin = getFamilyQuizAdmin();
  if (!user) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  if (!admin) return NextResponse.json({ error: "SUPABASE_SERVICE_ROLE_KEY is not configured on the server." }, { status: 503 });

  let body: Body;
  try { body = await request.json() as Body; } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const selections = Array.isArray(body.selections) ? body.selections as Selection[] : [];
  const generated = Array.isArray(body.generatedQuestions) ? body.generatedQuestions.filter(validGeneratedQuestion) : [];
  if (selections.length + generated.length < 1 || selections.length + generated.length > 20) {
    return NextResponse.json({ error: "Choose between 1 and 20 questions." }, { status: 400 });
  }

  const prepared: PreparedQuestion[] = [];
  const sourceRefs: Array<{ organiserId: string | null; questionId: string | null }> = [];
  for (const selection of selections) {
    const organiserId = typeof selection.organiserId === "string" ? selection.organiserId : "";
    const questionId = typeof selection.questionId === "string" ? selection.questionId : "";
    const organiser = getKnowledgeOrganiserById(organiserId);
    const question = organiser?.questions.find(item => item.id === questionId && item.interaction?.kind !== "table");
    if (!organiser || !question) return NextResponse.json({ error: "One selected question is no longer available." }, { status: 400 });
    const interactiveQuestion = prepareInteraction(question);
    prepared.push(interactiveQuestion ?? (question.type === "multiple-choice" ? {
      type: question.type, prompt: question.prompt, options: question.options, answer: question.answer,
      markingPoints: [question.answer], guidance: question.explanation, marks: question.marks, interaction: null,
    } : {
      type: question.type, prompt: question.prompt, options: [], answer: "",
      markingPoints: question.markingPoints, guidance: question.guidance, marks: question.marks, interaction: null,
    }));
    sourceRefs.push({ organiserId, questionId });
  }
  generated.forEach(question => sourceRefs.push({ organiserId: question.organiserId || null, questionId: null }));
  prepared.push(...generated.map(question => ({ ...question, interaction: null })));

  const code = await createUniqueCode(admin);
  const title = typeof body.title === "string" && body.title.trim() ? body.title.trim().slice(0, 100) : "Family Quiz";
  const { data: session, error: sessionError } = await admin.from("family_quiz_sessions")
    .insert({ code, host_id: user.id, title }).select("*").single();
  if (sessionError || !session) return NextResponse.json({ error: sessionError?.message || "Could not create the room." }, { status: 500 });

  const questionRows = prepared.map((question, index) => ({
    session_id: session.id, position: index, organiser_id: sourceRefs[index].organiserId,
    source_question_id: sourceRefs[index].questionId, type: question.type, prompt: question.prompt,
    options: question.options, interaction: question.interaction ?? null, marks: question.marks,
  }));
  const { data: insertedQuestions, error: questionError } = await admin.from("family_quiz_questions")
    .insert(questionRows).select("*").order("position");
  if (questionError || !insertedQuestions) {
    await admin.from("family_quiz_sessions").delete().eq("id", session.id);
    return NextResponse.json({ error: questionError?.message || "Could not save the questions." }, { status: 500 });
  }

  const keyRows = insertedQuestions.map((question, index) => ({
    question_id: question.id, session_id: session.id, answer: prepared[index].answer,
    marking_points: prepared[index].markingPoints, guidance: prepared[index].guidance,
  }));
  const { error: keyError } = await admin.from("family_quiz_answer_keys").insert(keyRows);
  if (keyError) {
    await admin.from("family_quiz_sessions").delete().eq("id", session.id);
    return NextResponse.json({ error: keyError.message }, { status: 500 });
  }

  const { data: profile } = await admin.from("profiles").select("student").eq("id", user.id).maybeSingle();
  const displayName = String(profile?.student || user.email?.split("@")[0] || "Host").slice(0, 40);
  await admin.from("family_quiz_participants").upsert({ session_id: session.id, user_id: user.id, display_name: displayName });
  return NextResponse.json({ ok: true, session });
}
