import type { CSSProperties } from "react";

type KnowledgeOrganiserTheme = CSSProperties & Record<`--ko-${string}`, string>;

const historyTheme: KnowledgeOrganiserTheme = {
  "--ko-primary": "#c2410c",
  "--ko-primary-dark": "#9a3412",
  "--ko-primary-deep": "#7c2d12",
  "--ko-primary-border": "#fdba74",
  "--ko-primary-border-strong": "#fb923c",
  "--ko-primary-soft": "#fff7ed",
  "--ko-primary-muted": "#ffedd5",
  "--ko-primary-ring": "#fed7aa",
  "--ko-primary-shadow": "rgba(194,65,12,.12)",
};

const scienceTheme: KnowledgeOrganiserTheme = {
  "--ko-primary": "#15803d",
  "--ko-primary-dark": "#166534",
  "--ko-primary-deep": "#14532d",
  "--ko-primary-border": "#86efac",
  "--ko-primary-border-strong": "#22c55e",
  "--ko-primary-soft": "#f0fdf4",
  "--ko-primary-muted": "#dcfce7",
  "--ko-primary-ring": "#bbf7d0",
  "--ko-primary-shadow": "rgba(21,128,61,.14)",
};

const englishTheme: KnowledgeOrganiserTheme = {
  "--ko-primary": "#9f1239",
  "--ko-primary-dark": "#881337",
  "--ko-primary-deep": "#4c0519",
  "--ko-primary-border": "#fda4af",
  "--ko-primary-border-strong": "#f43f5e",
  "--ko-primary-soft": "#fff1f2",
  "--ko-primary-muted": "#ffe4e6",
  "--ko-primary-ring": "#fecdd3",
  "--ko-primary-shadow": "rgba(159,18,57,.14)",
};

export function getKnowledgeOrganiserTheme(subject: string): KnowledgeOrganiserTheme {
  const normalisedSubject = subject.trim().toLowerCase();
  if (normalisedSubject === "science") return scienceTheme;
  if (normalisedSubject === "english") return englishTheme;
  return historyTheme;
}
