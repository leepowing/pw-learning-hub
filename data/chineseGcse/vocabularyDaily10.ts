import { EDEXCEL_VOCABULARY_CARDS } from "./edexcelVocabulary";

export type Daily10State = {
  session_id: string | null;
  server_date: string;
  study_date: string | null;
  round_number: number;
  card_ids: string[];
  answers: Record<string, boolean>;
  completed: boolean;
  total_count: number;
  reviewed_count: number;
  carry_over: boolean;
};

const cardById = new Map(EDEXCEL_VOCABULARY_CARDS.map(card => [card.id, card]));

export function daily10SessionView(state: Daily10State) {
  const cards = state.card_ids.map(id => {
    const card = cardById.get(id);
    if (!card) throw new Error("詞彙資料版本不一致，請重新整理網頁或更新安裝 SQL。");
    return card;
  });
  const results = state.card_ids.filter(id => typeof state.answers[id] === "boolean");
  return {
    cards,
    answered: results.length,
    correct: results.filter(id => state.answers[id]).length,
    incorrect: results.filter(id => !state.answers[id]).length,
  };
}

export function londonStudyDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(date).reduce<Record<string, string>>((parts, part) => {
    parts[part.type] = part.value;
    return parts;
  }, {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

export function isNewLondonDay(serverDate: string) {
  return serverDate !== londonStudyDate();
}
