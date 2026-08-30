import type {
  FlashcardSelection,
  MathsFlashcard,
  MathsLevel,
} from "./types";

import { s1Flashcards } from "./s1";
import { s2Flashcards } from "./s2";

export * from "./types";

export {
  s1Flashcards,
  s2Flashcards,
};

export const mathsFlashcardsByLevel: Record<
  MathsLevel,
  MathsFlashcard[]
> = {
  s1: s1Flashcards,
  s2: s2Flashcards,
  s3: [],
  s4: [],
  s5: [],
  s6: [],
};

export const allMathsFlashcards: MathsFlashcard[] =
  Object.values(mathsFlashcardsByLevel).flat();

export function getFlashcardsForChapter(
  level: MathsLevel,
  chapter: number
): MathsFlashcard[] {
  return mathsFlashcardsByLevel[level].filter(
    (card) => card.chapter === chapter
  );
}

export function getFlashcardsForSelections(
  selections: FlashcardSelection[]
): MathsFlashcard[] {
  return selections.flatMap((selection) =>
    mathsFlashcardsByLevel[selection.level].filter(
      (card) =>
        selection.chapters.includes(card.chapter)
    )
  );
}