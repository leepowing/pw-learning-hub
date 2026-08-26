import {
  getMathsFlashcardProgressFromSupabase,
  saveMathsFlashcardProgressToSupabase,
} from "@/lib/supabase";

export type MathsFlashcardResult =
  | "correct"
  | "practice";

export type MathsFlashcardProgress = {
  cardId: string;
  attempts: number;
  correct: number;
  practice: number;
  lastResult: MathsFlashcardResult;
  lastPractisedAt: string;
};

export type MathsFlashcardProgressMap = Record<
  string,
  MathsFlashcardProgress
>;

export function getCurrentStudent(): string {
  if (typeof window === "undefined") {
    return "guest";
  }

  return (
    window.localStorage.getItem("currentStudent") ??
    "guest"
  );
}

function getMathsFlashcardStorageKey(
  student: string
): string {
  return `mathsFlashcardProgress:${student}`;
}

export function getMathsFlashcardProgress():
  MathsFlashcardProgressMap {
  if (typeof window === "undefined") {
    return {};
  }

  const student = getCurrentStudent();

  if (student === "guest") {
    return {};
  }

  try {
    const saved = window.localStorage.getItem(
      getMathsFlashcardStorageKey(student)
    );

    return saved
      ? (JSON.parse(saved) as MathsFlashcardProgressMap)
      : {};
  } catch {
    return {};
  }
}

export function recordMathsFlashcardAnswer(
  cardId: string,
  result: MathsFlashcardResult
): void {
  if (typeof window === "undefined") {
    return;
  }

  const student = getCurrentStudent();

  if (student === "guest") {
    return;
  }

  const progress = getMathsFlashcardProgress();

  const previous = progress[cardId] ?? {
    cardId,
    attempts: 0,
    correct: 0,
    practice: 0,
    lastResult: result,
    lastPractisedAt: "",
  };

  const updated: MathsFlashcardProgress = {
    ...previous,
    cardId,
    attempts: previous.attempts + 1,
    correct:
      previous.correct +
      (result === "correct" ? 1 : 0),
    practice:
      previous.practice +
      (result === "practice" ? 1 : 0),
    lastResult: result,
    lastPractisedAt: new Date().toISOString(),
  };

  const updatedProgress = {
    ...progress,
    [cardId]: updated,
  };

  window.localStorage.setItem(
    getMathsFlashcardStorageKey(student),
    JSON.stringify(updatedProgress)
  );

  void saveMathsFlashcardProgressToSupabase(
    student,
    updated.cardId,
    updated.attempts,
    updated.correct,
    updated.practice,
    updated.lastResult,
    updated.lastPractisedAt
  ).then((saved) => {
    if (!saved) {
      console.error(
        "Maths flashcard progress was saved locally but not to Supabase."
      );
    }
  });
}

export function clearCurrentStudentFlashcardProgress():
  void {
  if (typeof window === "undefined") {
    return;
  }

  const student = getCurrentStudent();

  if (student === "guest") {
    return;
  }

  window.localStorage.removeItem(
    getMathsFlashcardStorageKey(student)
  );
}

export async function syncMathsFlashcardProgress():
  Promise<MathsFlashcardProgressMap> {
  if (typeof window === "undefined") {
    return {};
  }

  const student = getCurrentStudent();
  const localProgress = getMathsFlashcardProgress();

  if (student === "guest") {
    return localProgress;
  }

  const cloudRows =
    await getMathsFlashcardProgressFromSupabase(student);

  const cloudProgress: MathsFlashcardProgressMap = {};

  for (const row of cloudRows) {
    cloudProgress[row.card_id] = {
      cardId: row.card_id,
      attempts: row.attempts,
      correct: row.correct,
      practice: row.practice,
      lastResult: row.last_result,
      lastPractisedAt: row.last_practised_at,
    };
  }

  const mergedProgress: MathsFlashcardProgressMap = {
    ...localProgress,
  };

  for (const cloudItem of Object.values(cloudProgress)) {
    const localItem = mergedProgress[cloudItem.cardId];

    const cloudTime = new Date(
      cloudItem.lastPractisedAt
    ).getTime();

    const localTime = localItem
      ? new Date(localItem.lastPractisedAt).getTime()
      : 0;

    const shouldUseCloud =
      !localItem ||
      cloudItem.attempts > localItem.attempts ||
      (cloudItem.attempts === localItem.attempts &&
        cloudTime > localTime);

    if (shouldUseCloud) {
      mergedProgress[cloudItem.cardId] = cloudItem;
    }
  }

  window.localStorage.setItem(
    getMathsFlashcardStorageKey(student),
    JSON.stringify(mergedProgress)
  );

  const recordsToUpload = Object.values(
    mergedProgress
  ).filter((item) => {
    const cloudItem = cloudProgress[item.cardId];

    return (
      !cloudItem ||
      cloudItem.attempts !== item.attempts ||
      cloudItem.correct !== item.correct ||
      cloudItem.practice !== item.practice ||
      cloudItem.lastResult !== item.lastResult ||
      cloudItem.lastPractisedAt !==
        item.lastPractisedAt
    );
  });

  await Promise.all(
    recordsToUpload.map((item) =>
      saveMathsFlashcardProgressToSupabase(
        student,
        item.cardId,
        item.attempts,
        item.correct,
        item.practice,
        item.lastResult,
        item.lastPractisedAt
      )
    )
  );

  return mergedProgress;
}
