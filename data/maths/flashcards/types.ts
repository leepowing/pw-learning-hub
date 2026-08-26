export type MathsLevel =
  | "s1"
  | "s2"
  | "s3"
  | "s4"
  | "s5"
  | "s6";

export type FlashcardType =
  | "formula"
  | "rule"
  | "definition";

export type FlashcardResult =
  | "correct"
  | "practice";

export type MathsFlashcard = {
  id: string;

  level: MathsLevel;
  chapter: number;
  chapterTitle: string;

  section: string;
  type: FlashcardType;

  prompt: string;

  formula?: string;
  answer?: string;
  explanation?: string;
};

export type FlashcardSelection = {
  level: MathsLevel;
  chapters: number[];
};

export type FlashcardSessionStats = {
  total: number;
  remaining: number;
  correct: number;
  practice: number;
};