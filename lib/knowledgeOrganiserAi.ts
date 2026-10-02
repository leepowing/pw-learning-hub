export type AiCriterionResult = {
  markingPoint: string;
  status: "met" | "partly_met" | "not_met";
  comment: string;
};

export type AiMarkingResult = {
  awardedMarks: number;
  maxMarks: number;
  summary: string;
  criteria: AiCriterionResult[];
  strengths: string[];
  missedPoints: string[];
  inaccuracies: string[];
  improvements: string[];
  modelAnswer: string;
  disclaimer: string;
};

export type AiMarkingResponse =
  | { ok: true; result: AiMarkingResult }
  | { ok: false; error: string };
