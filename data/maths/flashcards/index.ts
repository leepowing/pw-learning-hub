import { s3Chapter13Flashcards } from "./s3chapter13";
import { s3Chapter12Flashcards } from "./s3chapter12";
import { s3Chapter11Flashcards } from "./s3chapter11";
import { s3Chapter10Flashcards } from "./s3chapter10";
import { s3Chapter9Flashcards } from "./s3chapter9";
import { s3Chapter8Flashcards } from "./s3chapter8";
import { s3Chapter7Flashcards } from "./s3chapter7";
import { s3Chapter6Flashcards } from "./s3chapter6";
import { s3Chapter5Flashcards } from "./s3chapter5";
import { s3Chapter4Flashcards } from "./s3chapter4";
import { s3Chapter3Flashcards } from "./s3chapter3";
import { s3Chapter2Flashcards } from "./s3chapter2";
import { s3Chapter1Flashcards } from "./s3chapter1";
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

// Every S1 source must be included here so that the selection page can show
// Chapters 1–12 from one combined registry.
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
  s3: [...s3Chapter13Flashcards, ...s3Chapter12Flashcards, ...s3Chapter11Flashcards, ...s3Chapter10Flashcards, ...s3Chapter9Flashcards, ...s3Chapter8Flashcards, ...s3Chapter7Flashcards, ...s3Chapter6Flashcards, ...s3Chapter5Flashcards, ...s3Chapter4Flashcards, ...s3Chapter1Flashcards, ...s3Chapter2Flashcards, ...s3Chapter3Flashcards],
  s4: [],
  s5: [],
  s6: [],
};

// Used by the Smart Review page.
export const allMathsFlashcards: MathsFlashcard[] = [
  ...mathsFlashcardsByLevel.s1,
  ...mathsFlashcardsByLevel.s2,
  ...mathsFlashcardsByLevel.s3,
  ...mathsFlashcardsByLevel.s4,
  ...mathsFlashcardsByLevel.s5,
  ...mathsFlashcardsByLevel.s6,
];

// Used by individual chapter routes, including the older Chapter 5 page.
export function getFlashcardsForChapter(
  level: MathsLevel,
  chapter: number
): MathsFlashcard[] {
  const cards = mathsFlashcardsByLevel[level] ?? [];
  return cards.filter((card) => card.chapter === chapter);
}

// Used by the main chapter-selection page.
export function getFlashcardsForSelection(
  selection: FlashcardSelection
): MathsFlashcard[] {
  const cards = mathsFlashcardsByLevel[selection.level] ?? [];
  return cards.filter((card) =>
    selection.chapters.includes(card.chapter)
  );
}

// Used for cross-level revision sessions.
export function getFlashcardsForSelections(
  selections: FlashcardSelection[]
): MathsFlashcard[] {
  return selections.flatMap(getFlashcardsForSelection);
}

// Preserve the newer helper name as an alias.
export function getMathsFlashcards(
  selection: FlashcardSelection
): MathsFlashcard[] {
  return getFlashcardsForSelection(selection);
}

export function getMathsFlashcardChapters(level: MathsLevel) {
  const cards = mathsFlashcardsByLevel[level] ?? [];

  return Array.from(new Set(cards.map((card) => card.chapter)))
    .sort((a, b) => a - b)
    .map((chapter) => {
      const chapterCards = cards.filter(
        (card) => card.chapter === chapter
      );

      return {
        chapter,
        title:
          chapterCards[0]?.chapterTitle ?? `Chapter ${chapter}`,
        count: chapterCards.length,
      };
    });
}
