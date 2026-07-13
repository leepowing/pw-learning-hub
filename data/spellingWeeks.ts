export type SpellingWord = {
  word: string;
  meaning: string;
  chinese: string;
  sentence: string;
};

export type SpellingWeek = {
  week: number;
  title: string;
  words: SpellingWord[];
};

export const spellingWeeks: Record<number, SpellingWeek> = {
  1: {
    week: 1,
    title: "Week 1",
    words: [
      {
        word: "accommodate",
        meaning: "to provide space or meet someone's needs",
        chinese: "容納；提供空間；滿足需要",
        sentence: "The hotel can accommodate up to 200 guests.",
      },
      {
        word: "awkward",
        meaning: "difficult, uncomfortable or embarrassing",
        chinese: "尷尬的；不方便的；笨拙的",
        sentence: "There was an awkward silence in the classroom.",
      },
      {
        word: "conscience",
        meaning: "your inner sense of right and wrong",
        chinese: "良心；是非感",
        sentence: "His conscience told him to return the lost wallet.",
      },
      {
        word: "environment",
        meaning: "the natural world or surrounding conditions",
        chinese: "環境；自然環境",
        sentence: "We should protect the environment.",
      },
      {
        word: "government",
        meaning: "the group responsible for running a country",
        chinese: "政府",
        sentence: "The government introduced a new education policy.",
      },
      {
        word: "necessary",
        meaning: "needed or required",
        chinese: "必要的；必需的",
        sentence: "It is necessary to revise before the test.",
      },
      {
        word: "opportunity",
        meaning: "a good chance to do something",
        chinese: "機會",
        sentence: "She had the opportunity to join the school orchestra.",
      },
      {
        word: "privilege",
        meaning: "a special right or advantage",
        chinese: "特權；榮幸",
        sentence: "It is a privilege to represent the school.",
      },
      {
        word: "recommend",
        meaning: "to suggest something as suitable",
        chinese: "推薦；建議",
        sentence: "I recommend reading this book.",
      },
      {
        word: "separate",
        meaning: "to divide or keep apart",
        chinese: "分開；分隔",
        sentence: "Please separate the paper from the plastic.",
      },
    ],
  },

  2: {
    week: 2,
    title: "Week 2",
    words: [
      {
        word: "achieve",
        meaning: "to successfully complete or reach a goal",
        chinese: "達成；實現",
        sentence: "She worked hard to achieve her goal.",
      },
      {
        word: "ancient",
        meaning: "belonging to a very long time ago",
        chinese: "古代的；古老的",
        sentence: "They visited an ancient castle.",
      },
      {
        word: "available",
        meaning: "ready to be used or obtained",
        chinese: "可用的；可獲得的",
        sentence: "The book is available in the school library.",
      },
      {
        word: "community",
        meaning: "a group of people living or working together",
        chinese: "社區；群體",
        sentence: "The local community organised a charity event.",
      },
      {
        word: "competition",
        meaning: "an event in which people try to win",
        chinese: "比賽；競爭",
        sentence: "He entered the school writing competition.",
      },
      {
        word: "definite",
        meaning: "certain, clear or fixed",
        chinese: "確定的；明確的",
        sentence: "We need a definite answer by Friday.",
      },
      {
        word: "desperate",
        meaning: "feeling a very great need or lack of hope",
        chinese: "絕望的；極需要的",
        sentence: "The thirsty walkers were desperate for water.",
      },
      {
        word: "explanation",
        meaning: "a statement that makes something clear",
        chinese: "解釋；說明",
        sentence: "The teacher gave a clear explanation.",
      },
      {
        word: "familiar",
        meaning: "well known or easily recognised",
        chinese: "熟悉的",
        sentence: "The song sounded familiar to me.",
      },
      {
        word: "foreign",
        meaning: "from or connected with another country",
        chinese: "外國的；海外的",
        sentence: "She enjoys learning foreign languages.",
      },
    ],
  },
};


export function getSpellingWeek(
  weekNumber: number
): SpellingWeek | undefined {
  return spellingWeeks[weekNumber];
}

export function findWord(word: string) {
  for (const week of Object.values(spellingWeeks)) {
    const found = week.words.find(
      (item) => item.word === word
    );

    if (found) {
      return found;
    }
  }

  return null;
}