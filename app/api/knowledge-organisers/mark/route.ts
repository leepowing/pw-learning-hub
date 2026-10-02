import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getKnowledgeOrganiserById } from "@/data/knowledgeOrganisers/registry";
import type { AiMarkingResult } from "@/lib/knowledgeOrganiserAi";

export const runtime = "nodejs";

const MAX_ANSWER_CHARACTERS = 8000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_REQUESTS = 30;
const recentRequests = new Map<string, number[]>();

type MarkingRequest = {
  organiserId?: unknown;
  questionId?: unknown;
  answer?: unknown;
  student?: unknown;
};

function errorResponse(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

function extractOutputText(response: unknown) {
  if (!response || typeof response !== "object" || !("output" in response) || !Array.isArray(response.output)) {
    return "";
  }

  for (const item of response.output) {
    if (!item || typeof item !== "object" || !("content" in item) || !Array.isArray(item.content)) continue;
    for (const content of item.content) {
      if (content && typeof content === "object" && "type" in content && content.type === "output_text" && "text" in content && typeof content.text === "string") {
        return content.text;
      }
    }
  }

  return "";
}

async function validateUser(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.startsWith("Bearer ") ? authHeader.slice(7) : "";
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!token || !supabaseUrl || !supabaseKey) return null;

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  const { data: { user }, error } = await supabase.auth.getUser(token);
  return error ? null : user;
}

function isRateLimited(userId: string) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;
  const requests = (recentRequests.get(userId) ?? []).filter(timestamp => timestamp > windowStart);
  if (requests.length >= RATE_LIMIT_REQUESTS) {
    recentRequests.set(userId, requests);
    return true;
  }
  requests.push(now);
  recentRequests.set(userId, requests);
  return false;
}

async function isFlagged(answer: string, apiKey: string) {
  const response = await fetch("https://api.openai.com/v1/moderations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model: "omni-moderation-latest", input: answer }),
  });

  if (!response.ok) throw new Error(`Moderation request failed with status ${response.status}`);
  const data = await response.json() as { results?: Array<{ flagged?: boolean }> };
  return Boolean(data.results?.[0]?.flagged);
}

export async function POST(request: Request) {
  const user = await validateUser(request);
  if (!user) return errorResponse("Please sign in again before requesting AI marking.", 401);
  if (isRateLimited(user.id)) return errorResponse("Too many marking requests. Please wait a few minutes and try again.", 429);

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return errorResponse("AI marking has not been configured on the server yet.", 503);

  let body: MarkingRequest;
  try {
    body = await request.json() as MarkingRequest;
  } catch {
    return errorResponse("The marking request was not valid JSON.", 400);
  }

  const organiserId = typeof body.organiserId === "string" ? body.organiserId : "";
  const questionId = typeof body.questionId === "string" ? body.questionId : "";
  const answer = typeof body.answer === "string" ? body.answer.trim() : "";
  const student = typeof body.student === "string" ? body.student.slice(0, 40) : "student";

  if (!organiserId || !questionId || answer.length < 3) {
    return errorResponse("Please write an answer before requesting AI marking.", 400);
  }
  if (answer.length > MAX_ANSWER_CHARACTERS) {
    return errorResponse(`Please shorten the answer to ${MAX_ANSWER_CHARACTERS} characters or fewer.`, 400);
  }

  const organiser = getKnowledgeOrganiserById(organiserId);
  const question = organiser?.questions.find(item => item.id === questionId);
  if (!organiser || !question || question.type === "multiple-choice") {
    return errorResponse("This question is not available for AI marking.", 404);
  }

  try {
    if (await isFlagged(answer, apiKey)) {
      return errorResponse("This answer cannot be marked automatically. Please ask a parent or teacher to review it.", 400);
    }

    const schema = {
      type: "object",
      additionalProperties: false,
      properties: {
        awardedMarks: { type: "integer", minimum: 0, maximum: question.marks },
        maxMarks: { type: "integer", enum: [question.marks] },
        summary: { type: "string" },
        criteria: {
          type: "array",
          minItems: question.markingPoints.length,
          maxItems: question.markingPoints.length,
          items: {
            type: "object",
            additionalProperties: false,
            properties: {
              markingPoint: { type: "string" },
              status: { type: "string", enum: ["met", "partly_met", "not_met"] },
              comment: { type: "string" },
            },
            required: ["markingPoint", "status", "comment"],
          },
        },
        strengths: { type: "array", items: { type: "string" } },
        missedPoints: { type: "array", items: { type: "string" } },
        inaccuracies: { type: "array", items: { type: "string" } },
        improvements: { type: "array", items: { type: "string" } },
        modelAnswer: { type: "string" },
        disclaimer: { type: "string" },
      },
      required: ["awardedMarks", "maxMarks", "summary", "criteria", "strengths", "missedPoints", "inaccuracies", "improvements", "modelAnswer", "disclaimer"],
    };

    const safetyIdentifier = createHash("sha256").update(user.id).digest("hex").slice(0, 32);
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENAI_GRADING_MODEL || "gpt-6-luna",
        store: false,
        reasoning: { effort: "low" },
        max_output_tokens: 1800,
        safety_identifier: safetyIdentifier,
        input: [
          {
            role: "system",
            content: `You are a careful, encouraging Year 8 school examiner. Mark only against the supplied question, marking points and guidance. Accept correct meaning expressed in different words. Do not award the same marking point twice. Award integer marks only and never exceed the stated maximum. Treat each marking point as one available mark unless the wording clearly requires a developed explanation. Return the supplied marking points in the criteria array in exactly the same order. A criterion marked "met" earns its mark; "partly_met" and "not_met" do not earn that mark, so awardedMarks must equal the number of "met" criteria. For long answers, reward accurate explanation, comparison and supported judgement only where the supplied marking points require them. Do not introduce outside facts when deciding the score. Give concise, age-appropriate feedback. The modelAnswer must be a complete full-mark response that clearly covers every supplied marking point. If a long-answer marking point requires a comparison or supported judgement, the modelAnswer must make an explicit comparative judgement, select which contribution, change or factor was most significant or wide-ranging, and support that judgement using only evidence from the supplied marking points. A general summary is not a supported judgement. The disclaimer must say that AI marking is advisory and a parent or teacher can review it.`,
          },
          {
            role: "user",
            content: JSON.stringify({
              year: organiser.year,
              subject: organiser.subject,
              topic: organiser.title,
              student,
              questionType: question.type,
              question: question.prompt,
              maximumMarks: question.marks,
              markingPoints: question.markingPoints,
              guidance: question.guidance,
              studentAnswer: answer,
            }),
          },
        ],
        text: {
          format: {
            type: "json_schema",
            name: "knowledge_organiser_marking",
            strict: true,
            schema,
          },
        },
      }),
    });

    if (!response.ok) {
      const requestId = response.headers.get("x-request-id");
      console.error("OpenAI marking request failed", response.status, requestId);
      return errorResponse("AI marking is temporarily unavailable. Please try again later.", 502);
    }

    const responseData = await response.json() as unknown;
    const outputText = extractOutputText(responseData);
    if (!outputText) return errorResponse("AI marking returned an incomplete result. Please try again.", 502);

    const result = JSON.parse(outputText) as AiMarkingResult;
    if (!Number.isInteger(result.awardedMarks) || result.maxMarks !== question.marks || !Array.isArray(result.criteria) || result.criteria.length !== question.markingPoints.length) {
      return errorResponse("AI marking returned an invalid score. Please try again.", 502);
    }

    const criteria = result.criteria.map((criterion, index) => ({
      ...criterion,
      markingPoint: question.markingPoints[index],
    }));
    const awardedMarks = criteria.filter(criterion => criterion.status === "met").length;
    if (awardedMarks > question.marks) {
      return errorResponse("AI marking returned an invalid score. Please try again.", 502);
    }

    return NextResponse.json({
      ok: true,
      result: { ...result, awardedMarks, maxMarks: question.marks, criteria },
    });
  } catch (error) {
    console.error("AI marking error", error);
    return errorResponse("AI marking is temporarily unavailable. Please try again later.", 502);
  }
}
