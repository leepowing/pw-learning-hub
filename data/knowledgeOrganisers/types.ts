export type KnowledgeSection = {
  id: string;
  title: string;
  period: string;
  summary: string;
  keyFacts: string[];
  keyTerms: string[];
  colour: string;
};

export type KnowledgeFlashcard = {
  id: string;
  sectionId: string;
  front: string;
  back: string;
};

type BaseQuestion = {
  id: string;
  sectionIds: string[];
  prompt: string;
  marks: number;
};

export type MultipleChoiceQuestion = BaseQuestion & {
  type: "multiple-choice";
  options: string[];
  answer: string;
  explanation: string;
};

export type WrittenQuestion = BaseQuestion & {
  type: "short-answer" | "long-answer";
  markingPoints: string[];
  guidance: string;
};

export type KnowledgeQuestion = MultipleChoiceQuestion | WrittenQuestion;

export type KnowledgeOrganiser = {
  id: string;
  year: number;
  subject: string;
  term: "Autumn" | "Spring" | "Summer";
  chapter: number;
  title: string;
  introduction: string;
  sections: KnowledgeSection[];
  flashcards: KnowledgeFlashcard[];
  questions: KnowledgeQuestion[];
};
