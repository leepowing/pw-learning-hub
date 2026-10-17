import { NextResponse } from "next/server";
import { getKnowledgeOrganisers } from "@/data/knowledgeOrganisers/registry";
import { getFamilyQuizUser } from "@/lib/familyQuizServer";

const subjects = ["History", "Science", "English", "Geography", "Design Technology", "RPE", "Spanish", "French"];

export async function GET(request: Request) {
  const user = await getFamilyQuizUser(request);
  if (!user) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });

  const organisers = subjects.flatMap(subject => getKnowledgeOrganisers(8, subject));
  return NextResponse.json({
    organisers: organisers.map(organiser => ({
      id: organiser.id,
      subject: organiser.subject,
      chapter: organiser.chapter,
      title: organiser.title,
      questions: organiser.questions
        .filter(question => question.interaction?.kind !== "table")
        .map(question => ({
          organiserId: organiser.id,
          questionId: question.id,
          subject: organiser.subject,
          chapter: organiser.chapter,
          chapterTitle: organiser.title,
          type: question.type,
          prompt: question.prompt,
          marks: question.marks,
          interactive: Boolean(question.interaction),
          interactionKind: question.interaction?.kind,
        })),
    })),
  });
}
