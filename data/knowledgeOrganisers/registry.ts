import type { KnowledgeOrganiser } from "./types";
import { year8HistoryMigration } from "./year8HistoryMigration";

const knowledgeOrganisers: KnowledgeOrganiser[] = [year8HistoryMigration];

export function getKnowledgeOrganiserById(id: string) {
  return knowledgeOrganisers.find(organiser => organiser.id === id);
}
