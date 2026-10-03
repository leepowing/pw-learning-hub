import type { KnowledgeOrganiser } from "./types";
import { year8HistoryIndustrialRevolution } from "./year8HistoryIndustrialRevolution";
import { year8HistoryMigration } from "./year8HistoryMigration";

const knowledgeOrganisers: KnowledgeOrganiser[] = [
  year8HistoryMigration,
  year8HistoryIndustrialRevolution,
];

export function getKnowledgeOrganiserById(id: string) {
  return knowledgeOrganisers.find(organiser => organiser.id === id);
}
