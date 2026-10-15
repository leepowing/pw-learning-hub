export type FamilyQuizQuestionType = "multiple-choice" | "short-answer" | "long-answer";

export type FamilyQuizSession = {
  id: string;
  code: string;
  host_id: string;
  title: string;
  status: "waiting" | "question" | "revealed" | "finished";
  current_question_id: string | null;
  current_index: number;
  created_at: string;
  updated_at: string;
};

export type FamilyQuizQuestion = {
  id: string;
  session_id: string;
  position: number;
  organiser_id: string | null;
  source_question_id: string | null;
  type: FamilyQuizQuestionType;
  prompt: string;
  options: string[];
  marks: number;
};

export type FamilyQuizParticipant = {
  session_id: string;
  user_id: string;
  display_name: string;
  joined_at: string;
};

export type FamilyQuizAnswer = {
  id: string;
  session_id: string;
  question_id: string;
  user_id: string;
  display_name: string;
  answer: string;
  awarded_marks: number | null;
  max_marks: number;
  status: "submitted" | "marked" | "needs_review";
  feedback: { summary?: string; strengths?: string[]; improvements?: string[]; modelAnswer?: string } | null;
  submitted_at: string;
};

export type FamilyQuizCatalogQuestion = {
  organiserId: string;
  questionId: string;
  subject: string;
  chapter: number;
  chapterTitle: string;
  type: FamilyQuizQuestionType;
  prompt: string;
  marks: number;
};

export type GeneratedFamilyQuizQuestion = {
  organiserId?: string;
  type: FamilyQuizQuestionType;
  prompt: string;
  options: string[];
  answer: string;
  markingPoints: string[];
  guidance: string;
  marks: number;
};
