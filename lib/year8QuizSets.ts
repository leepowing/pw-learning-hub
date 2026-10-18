export const YEAR8_QUIZ_SET_SIZE = 10;
export const YEAR8_QUIZ_SET_COUNT = 3;

function createSeed(value: string): number {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function createRandom(seed: number): () => number {
  let state = seed;

  return () => {
    state += 0x6d2b79f5;

    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

export function createYear8QuizSets(
  words: string[],
  student: string,
  week: number,
  cycle: number
): string[][] {
  const shuffledWords = [...words];
  const random = createRandom(
    createSeed(`year8-spelling:${student}:${week}:${cycle}`)
  );

  for (
    let index = shuffledWords.length - 1;
    index > 0;
    index -= 1
  ) {
    const replacementIndex = Math.floor(random() * (index + 1));

    [shuffledWords[index], shuffledWords[replacementIndex]] = [
      shuffledWords[replacementIndex],
      shuffledWords[index],
    ];
  }

  return Array.from(
    { length: YEAR8_QUIZ_SET_COUNT },
    (_, index) =>
      shuffledWords.slice(
        index * YEAR8_QUIZ_SET_SIZE,
        (index + 1) * YEAR8_QUIZ_SET_SIZE
      )
  );
}

export function normaliseCompletedSets(
  completedSets: number[] | null | undefined
): number[] {
  return [
    ...new Set(
      (completedSets ?? []).filter(
        (setNumber) =>
          Number.isInteger(setNumber) &&
          setNumber >= 1 &&
          setNumber <= YEAR8_QUIZ_SET_COUNT
      )
    ),
  ].sort((first, second) => first - second);
}

export function normaliseSetScores(
  scores: number[] | null | undefined
): number[] {
  return Array.from(
    { length: YEAR8_QUIZ_SET_COUNT },
    (_, index) => {
      const score = scores?.[index];

      return typeof score === "number" && Number.isFinite(score)
        ? Math.min(YEAR8_QUIZ_SET_SIZE, Math.max(0, Math.round(score)))
        : 0;
    }
  );
}

export function getNextQuizSetNumber(
  completedSets: number[]
): number | null {
  const completed = new Set(normaliseCompletedSets(completedSets));

  for (
    let setNumber = 1;
    setNumber <= YEAR8_QUIZ_SET_COUNT;
    setNumber += 1
  ) {
    if (!completed.has(setNumber)) {
      return setNumber;
    }
  }

  return null;
}
