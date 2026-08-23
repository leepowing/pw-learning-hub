import type { SpellingWeek, SpellingWord } from "./spellingWeeks";
import { year8WordDetails } from "./year8WordDetails";

const makeSpellingWord = (word: string): SpellingWord => {
  const detail = year8WordDetails[word];

  return {
    word,
    meaning: detail?.meaning ?? "Definition coming soon.",
    chinese: detail?.chinese ?? "",
    sentence: detail?.sentence ?? "",
  };
};

const weekWordLists: Record<number, string[]> = {
  1: [
    "constitute",
    "principle",
    "sequence",
    "relevant",
    "sufficient",
    "exemplify",
    "technicality",
    "persuasive",
    "conservation",
    "concentration",
    "subsidiary",
    "conductor",
    "restoration",
    "profession",
    "physicist",
    "biology",
    "finance",
    "society",
    "familiar",
    "ordinary",
    "residual",
    "pertinent",
    "category",
    "competence",
    "architect",
    "theory",
    "climatic",
    "generic",
    "investigation",
    "responsibility",
  ],
};

const weekTitles: Record<number, string> = {
  1: "Academic Vocabulary",
};

export const year8SpellingWeeks = Object.fromEntries(
  Object.entries(weekWordLists).map(([week, words]) => [
    Number(week),
    {
      week: Number(week),
      title: weekTitles[Number(week)] ?? `Week ${week}`,
      words: words.map(makeSpellingWord),
    },
  ])
) as Record<number, SpellingWeek>;

export function getSpellingWeek(
  weekNumber: number
): SpellingWeek | undefined {
  return year8SpellingWeeks[weekNumber];
}

export function findWord(
  word: string
): SpellingWord | undefined {
  const normalisedWord = word.trim().toLowerCase();

  for (const week of Object.values(year8SpellingWeeks)) {
    const match = week.words.find(
      (item) => item.word.toLowerCase() === normalisedWord
    );

    if (match) {
      return match;
    }
  }

  return undefined;
}

