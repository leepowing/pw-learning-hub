import type {
  FlashcardSelection,
  MathsFlashcard,
  MathsLevel,
} from "./types";

import { s1Flashcards as s1BaseFlashcards } from "./s1";
import { s2Flashcards } from "./s2";
import { s1Chapter10Flashcards } from "./chapter10";
import { s1Chapter11Flashcards } from "./chapter11";
import { s1Chapter12Flashcards } from "./chapter12";

export * from "./types";
export {
  s2Flashcards,
  s1Chapter10Flashcards,
  s1Chapter11Flashcards,
  s1Chapter12Flashcards,
};

// Keep every S1 source in one exported array. The chapter-selection page and
// the level registry must both use this combined array, otherwise Chapters 10
// and 11 will not appear even though their data files exist.
export const s1Flashcards: MathsFlashcard[] = [
  ...s1BaseFlashcards,
  ...s1Chapter10Flashcards,
  ...s1Chapter11Flashcards,
  ...s1Chapter12Flashcards,
];

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

export function getFlashcardsForSelection(
  selection: FlashcardSelection
): MathsFlashcard[] {
  const cards = mathsFlashcardsByLevel[selection.level] ?? [];
  return cards.filter((card) => selection.chapters.includes(card.chapter));
}

export function getFlashcardsForSelections(
  selections: FlashcardSelection[]
): MathsFlashcard[] {
  return selections.flatMap(getFlashcardsForSelection);
}
