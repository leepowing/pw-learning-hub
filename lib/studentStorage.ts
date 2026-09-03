import {
  getMathsFlashcardProgressFromSupabase,
  recordMathsFlashcardAnswerAtomically,
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

type PendingMathsFlashcardEvent = {
  eventId: string;
  student: string;
  cardId: string;
  result: MathsFlashcardResult;
  practisedAt: string;
};

const MAX_SAVE_ATTEMPTS = 3;
const RETRY_DELAYS_MS = [400, 1000];

// Saves for the same student and card stay in answer order.
const mathsFlashcardSaveQueues = new Map<
  string,
  Promise<boolean>
>();

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

function getPendingEventStorageKey(
  student: string
): string {
  return `mathsFlashcardPendingEvents:${student}`;
}

function getPendingEvents(
  student: string
): PendingMathsFlashcardEvent[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const saved = window.localStorage.getItem(
      getPendingEventStorageKey(student)
    );

    return saved
      ? (JSON.parse(saved) as PendingMathsFlashcardEvent[])
      : [];
  } catch {
    return [];
  }
}

function savePendingEvents(
  student: string,
  events: PendingMathsFlashcardEvent[]
): void {
  if (events.length === 0) {
    window.localStorage.removeItem(
      getPendingEventStorageKey(student)
    );
    return;
  }

  window.localStorage.setItem(
    getPendingEventStorageKey(student),
    JSON.stringify(events)
  );
}

function removePendingEvent(
  student: string,
  eventId: string
): void {
  const remainingEvents = getPendingEvents(student)
    .filter((event) => event.eventId !== eventId);

  savePendingEvents(student, remainingEvents);
}

function wait(delayMs: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, delayMs);
  });
}

function timestampsMatch(
  first: string,
  second: string
): boolean {
  const firstTime = new Date(first).getTime();
  const secondTime = new Date(second).getTime();

  if (
    Number.isNaN(firstTime) ||
    Number.isNaN(secondTime)
  ) {
    return first === second;
  }

  return firstTime === secondTime;
}

async function saveEventWithRetry(
  event: PendingMathsFlashcardEvent
): Promise<boolean> {
  for (
    let attemptNumber = 1;
    attemptNumber <= MAX_SAVE_ATTEMPTS;
    attemptNumber += 1
  ) {
    try {
      const saved =
        await recordMathsFlashcardAnswerAtomically(
          event.student,
          event.cardId,
          event.result,
          event.eventId,
          event.practisedAt
        );

      if (saved) {
        removePendingEvent(
          event.student,
          event.eventId
        );
        return true;
      }
    } catch (error) {
      console.error(
        `Maths flashcard save attempt ${attemptNumber} failed:`,
        error
      );
    }

    if (attemptNumber < MAX_SAVE_ATTEMPTS) {
      await wait(RETRY_DELAYS_MS[attemptNumber - 1]);
    }
  }

  return false;
}

function queuePendingEventSave(
  event: PendingMathsFlashcardEvent
): Promise<boolean> {
  const queueKey = `${event.student}:${event.cardId}`;
  const previousSave =
    mathsFlashcardSaveQueues.get(queueKey) ??
    Promise.resolve(true);

  const queuedSave = previousSave
    .catch(() => false)
    .then(() => saveEventWithRetry(event));

  mathsFlashcardSaveQueues.set(queueKey, queuedSave);

  void queuedSave.finally(() => {
    if (
      mathsFlashcardSaveQueues.get(queueKey) ===
      queuedSave
    ) {
      mathsFlashcardSaveQueues.delete(queueKey);
    }
  });

  return queuedSave;
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
): Promise<boolean> {
  if (typeof window === "undefined") {
    return Promise.resolve(false);
  }

  const student = getCurrentStudent();

  if (student === "guest") {
    return Promise.resolve(false);
  }

  const progress = getMathsFlashcardProgress();
  const practisedAt = new Date().toISOString();

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
    lastPractisedAt: practisedAt,
  };

  const event: PendingMathsFlashcardEvent = {
    eventId: window.crypto.randomUUID(),
    student,
    cardId,
    result,
    practisedAt,
  };

  try {
    // Store the retryable event first. If the next local write is interrupted,
    // the answer can still be recovered and sent during the next sync.
    savePendingEvents(student, [
      ...getPendingEvents(student),
      event,
    ]);

    window.localStorage.setItem(
      getMathsFlashcardStorageKey(student),
      JSON.stringify({
        ...progress,
        [cardId]: updated,
      })
    );
  } catch (error) {
    console.error(
      "Could not save maths flashcard progress locally:",
      error
    );
    return Promise.resolve(false);
  }

  return queuePendingEventSave(event);
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
  window.localStorage.removeItem(
    getPendingEventStorageKey(student)
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

  // Retry events left behind by an interrupted or failed earlier save.
  const pendingEvents = getPendingEvents(student);
  const pendingResults = await Promise.all(
    pendingEvents.map((event) =>
      queuePendingEventSave(event)
    )
  );

  if (pendingResults.some((saved) => !saved)) {
    console.error(
      "Some maths flashcard answers remain stored locally and will be retried during the next sync."
    );
  }

  const cloudRows =
    await getMathsFlashcardProgressFromSupabase(student);

  const mergedProgress: MathsFlashcardProgressMap = {
    ...localProgress,
  };

  for (const row of cloudRows) {
    const cloudItem: MathsFlashcardProgress = {
      cardId: row.card_id,
      attempts: row.attempts,
      correct: row.correct,
      practice: row.practice,
      lastResult: row.last_result,
      lastPractisedAt: row.last_practised_at,
    };

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
        cloudTime > localTime &&
        !timestampsMatch(
          cloudItem.lastPractisedAt,
          localItem.lastPractisedAt
        ));

    if (shouldUseCloud) {
      mergedProgress[cloudItem.cardId] = cloudItem;
    }
  }

  window.localStorage.setItem(
    getMathsFlashcardStorageKey(student),
    JSON.stringify(mergedProgress)
  );

  return mergedProgress;
}
