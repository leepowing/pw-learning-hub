import type { KnowledgeOrganiser } from "./types";
import { year8HistoryIndustrialRevolution } from "./year8HistoryIndustrialRevolution";
import { year8HistoryJackTheRipper } from "./year8HistoryJackTheRipper";
import { year8HistoryMigration } from "./year8HistoryMigration";

const knowledgeOrganisers: KnowledgeOrganiser[] = [
  year8HistoryMigration,
  year8HistoryIndustrialRevolution,
  year8HistoryJackTheRipper,
];

export function getKnowledgeOrganiserById(id: string) {
  return knowledgeOrganisers.find(organiser => organiser.id === id);
}

export function getKnowledgeOrganisers(year: number, subject: string) {
  return knowledgeOrganisers
    .filter(organiser => organiser.year === year && organiser.subject.toLowerCase() === subject.toLowerCase())
    .sort((first, second) => first.chapter - second.chapter);
}
