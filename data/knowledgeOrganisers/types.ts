export type KnowledgeSection = {
  id: string;
  title: string;
  period?: string;
  context?: string;
  summary: string;
  keyFacts: string[];
  keyTerms: string[];
  colour: string;
  sourceType?: "knowledgeOrganiser" | "teacherSupplement" | "teacherQuestion" | "generatedSupplement";
  sourceRef?: string;
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
  format?: "standard" | "matching" | "fill-in-the-blank" | "label-the-diagram" | "ordering" | "classification" | "equation-completion" | "table-and-data" | "practical";
  sourceType?: "knowledgeOrganiser" | "teacherSupplement" | "teacherQuestion" | "generatedSupplement";
  sourceRef?: string;
  interaction?:
    | { kind: "fill-blanks"; sentences: string[]; answers: string[][]; wordBank?: string[] }
    | { kind: "matching"; left: string[]; right: string[]; answers: number[] }
    | { kind: "ordering"; items: string[]; answer: string[] }
    | { kind: "classification"; rows: string[]; categories: string[]; answers: string[] }
    | { kind: "table"; columns: string[]; rows: string[][] }
    | { kind: "diagram-labels"; diagram: "photosynthesis" | "leaf"; labels: string[]; answers: string[][] };
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
