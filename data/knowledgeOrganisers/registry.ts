import type { KnowledgeOrganiser } from "./types";
import { year8HistoryIndustrialRevolution } from "./year8HistoryIndustrialRevolution";
import { year8HistoryJackTheRipper } from "./year8HistoryJackTheRipper";
import { year8HistoryEnslavement } from "./year8HistoryEnslavement";
import { year8HistoryMigration } from "./year8HistoryMigration";
import { year8ScienceEcosystemProcesses } from "./year8ScienceEcosystemProcesses";

const knowledgeOrganisers: KnowledgeOrganiser[] = [
  year8HistoryMigration,
  year8HistoryIndustrialRevolution,
  year8HistoryJackTheRipper,
  year8HistoryEnslavement,
  year8ScienceEcosystemProcesses,
];

export function getKnowledgeOrganiserById(id: string) {
  return knowledgeOrganisers.find(organiser => organiser.id === id);
}

export function getKnowledgeOrganisers(year: number, subject: string) {
  return knowledgeOrganisers
    .filter(organiser => organiser.year === year && organiser.subject.toLowerCase() === subject.toLowerCase())
    .sort((first, second) => first.chapter - second.chapter);
}
