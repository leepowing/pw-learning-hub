import { NextResponse } from "next/server";
import { getKnowledgeOrganiserById } from "@/data/knowledgeOrganisers/registry";
import { extractOpenAIText, getFamilyQuizUser } from "@/lib/familyQuizServer";

type SectionSelection = { organiserId?: unknown; sectionIds?: unknown };
type Body = { organiserIds?: unknown; organiserId?: unknown; sectionSelections?: unknown; count?: unknown; questionType?: unknown };

export async function POST(request: Request) {
  const user = await getFamilyQuizUser(request);
  if (!user) return NextResponse.json({ error: "Please sign in again." }, { status: 401 });
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "OPENAI_API_KEY is not configured." }, { status: 503 });
  const body = await request.json() as Body;
  const organiserIds = Array.isArray(body.organiserIds)
    ? [...new Set(body.organiserIds.filter((value): value is string => typeof value === "string"))]
    : typeof body.organiserId === "string" ? [body.organiserId] : [];
  if (organiserIds.length > 12) return NextResponse.json({ error: "AI generation supports up to 12 selected chapters at a time." }, { status: 400 });
  const count = Math.max(1, Math.min(20, Number(body.count) || 5));
  const requestedType = typeof body.questionType === "string" ? body.questionType : "mixed";
  const organisers = organiserIds.map(getKnowledgeOrganiserById).filter((item): item is NonNullable<typeof item> => Boolean(item));
  if (!organisers.length || organisers.length !== organiserIds.length) return NextResponse.json({ error: "Choose one or more available chapters." }, { status: 404 });

  const sectionSelections = new Map<string, Set<string>>();
  if (Array.isArray(body.sectionSelections)) {
    for (const value of body.sectionSelections as SectionSelection[]) {
      if (!value || typeof value !== "object" || typeof value.organiserId !== "string" || !Array.isArray(value.sectionIds)) continue;
      sectionSelections.set(value.organiserId, new Set(value.sectionIds.filter((id): id is string => typeof id === "string")));
    }
  }

  const source = organisers.map(organiser => ({
    organiserId: organiser.id, subject: organiser.subject, chapter: organiser.chapter, title: organiser.title,
    sections: organiser.sections
      .filter(section => !sectionSelections.has(organiser.id) || sectionSelections.get(organiser.id)?.has(section.id))
      .map(section => ({ id: section.id, title: section.title, summary: section.summary, facts: section.keyFacts, terms: section.keyTerms })),
  }));
  if (source.some(chapter => chapter.sections.length === 0)) return NextResponse.json({ error: "Choose at least one section from every selected chapter." }, { status: 400 });
  const schema = {
    type: "object", additionalProperties: false,
    properties: { questions: { type: "array", minItems: count, maxItems: count, items: {
      type: "object", additionalProperties: false,
      properties: {
        organiserId: { type: "string", enum: organiserIds },
        type: { type: "string", enum: ["multiple-choice", "short-answer", "long-answer"] },
        prompt: { type: "string" }, options: { type: "array", items: { type: "string" }, maxItems: 4 },
        answer: { type: "string" }, markingPoints: { type: "array", items: { type: "string" }, minItems: 1, maxItems: 8 },
        guidance: { type: "string" }, marks: { type: "integer", minimum: 1, maximum: 8 },
      }, required: ["organiserId", "type", "prompt", "options", "answer", "markingPoints", "guidance", "marks"],
    } } }, required: ["questions"],
  };

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.OPENAI_GRADING_MODEL || "gpt-6-luna", store: false,
        reasoning: { effort: "low" }, max_output_tokens: 6500,
        input: [{ role: "system", content: `Create ${count} accurate Year 8 live family quiz questions using only the supplied selected sections. Requested mode: ${requestedType}. Do not use facts from any unlisted section. Spread questions as evenly as possible across all selected chapters and sections. Set organiserId to the exact organiserId belonging to the source chapter for each question. For multiple choice, supply exactly four unique options and put the exact correct option in answer. For written questions, options must be empty, answer may be empty, and each marking point is worth one mark. Keep prompts concise for an iPad.` }, { role: "user", content: JSON.stringify({ selectedChaptersAndSections: source }) }],
        text: { format: { type: "json_schema", name: "family_quiz_questions", strict: true, schema } },
      }),
    });
    if (!response.ok) return NextResponse.json({ error: "AI question generation is temporarily unavailable." }, { status: 502 });
    const text = extractOpenAIText(await response.json() as unknown);
    const parsed = JSON.parse(text) as { questions?: unknown[] };
    return NextResponse.json({ ok: true, questions: parsed.questions ?? [] });
  } catch (error) {
    console.error("Family quiz generation error", error);
    return NextResponse.json({ error: "AI question generation is temporarily unavailable." }, { status: 502 });
  }
}
