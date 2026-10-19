import { NextResponse } from "next/server";
import { getKnowledgeOrganisers } from "@/data/knowledgeOrganisers/registry";
import { getFamilyQuizAdmin, getFamilyQuizUser } from "@/lib/familyQuizServer";

const subjects = ["History", "Science", "English", "Geography", "Design Technology", "RPE", "Spanish", "French"];

export async function GET(request: Request) {
  const user = await getFamilyQuizUser(request);
  if (!user) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });

  const admin = getFamilyQuizAdmin();
  const students = ["greta", "mathis"];
  const taughtSections: Record<string, Record<string, string[]>> = { greta: {}, mathis: {} };
  if (admin) {
    const { data: progress } = await admin
      .from("knowledge_organiser_progress")
      .select("student,chapter_id,taught_section_ids,updated_at")
      .in("student", ["greta", "Greta", "mathis", "Mathis"])
      .order("updated_at", { ascending: false });
    for (const row of progress ?? []) {
      const student = String(row.student).trim().toLowerCase();
      if (!students.includes(student) || taughtSections[student][row.chapter_id]) continue;
      taughtSections[student][row.chapter_id] = Array.isArray(row.taught_section_ids) ? row.taught_section_ids : [];
    }
  }

  const { data: profile } = admin
    ? await admin.from("profiles").select("student").eq("id", user.id).maybeSingle()
    : { data: null };
  const currentStudent = String(profile?.student ?? "").trim().toLowerCase();

  const organisers = subjects.flatMap(subject => getKnowledgeOrganisers(8, subject));
  return NextResponse.json({
    organisers: organisers.map(organiser => ({
      id: organiser.id,
      subject: organiser.subject,
      chapter: organiser.chapter,
      title: organiser.title,
      sections: organiser.sections.map(section => ({ id: section.id, title: section.title })),
      questions: organiser.questions
        .filter(question => question.interaction?.kind !== "table")
        .map(question => ({
          organiserId: organiser.id,
          questionId: question.id,
          subject: organiser.subject,
          chapter: organiser.chapter,
          chapterTitle: organiser.title,
          sectionIds: question.sectionIds,
          type: question.type,
          prompt: question.prompt,
          options: question.type === "multiple-choice" ? question.options : [],
          marks: question.marks,
          interactive: Boolean(question.interaction),
          interactionKind: question.interaction?.kind,
        })),
    })),
    students,
    currentStudent: students.includes(currentStudent) ? currentStudent : students[0],
    taughtSections,
  });
}
