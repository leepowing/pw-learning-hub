export type Achievement = {
  id: string;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
};

type AchievementInput = {
  totalXP: number;
  masteredWeeks: number;
  learnedWords: number;
  quizAverage: number;
};

export function getAchievements({
  totalXP,
  masteredWeeks,
  learnedWords,
  quizAverage,
}: AchievementInput): Achievement[] {
  return [
    {
      id: "first-level",
      icon: "⭐",
      title: "XP Starter",
      description: "Earn 50 XP",
      unlocked: totalXP >= 50,
    },
    {
      id: "xp-200",
      icon: "🚀",
      title: "Rising Star",
      description: "Earn 200 XP",
      unlocked: totalXP >= 200,
    },
    {
      id: "first-mastered-week",
      icon: "🏆",
      title: "Week Master",
      description: "Master your first week",
      unlocked: masteredWeeks >= 1,
    },
    {
      id: "five-mastered-weeks",
      icon: "👑",
      title: "Spelling Champion",
      description: "Master 5 weeks",
      unlocked: masteredWeeks >= 5,
    },
    {
      id: "ten-words",
      icon: "📚",
      title: "Word Collector",
      description: "Learn 10 words",
      unlocked: learnedWords >= 10,
    },
    {
      id: "hundred-words",
      icon: "💎",
      title: "Word Expert",
      description: "Learn 100 words",
      unlocked: learnedWords >= 100,
    },
    {
      id: "quiz-80",
      icon: "🎯",
      title: "Sharp Speller",
      description: "Reach an 80% quiz average",
      unlocked: quizAverage >= 80,
    },
    {
      id: "quiz-95",
      icon: "🥇",
      title: "Elite Speller",
      description: "Reach a 95% quiz average",
      unlocked: quizAverage >= 95,
    },
  ];
}