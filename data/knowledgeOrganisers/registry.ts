import type { KnowledgeOrganiser } from "./types";
import { year8HistoryIndustrialRevolution } from "./year8HistoryIndustrialRevolution";
import { year8HistoryJackTheRipper } from "./year8HistoryJackTheRipper";
import { year8HistoryEnslavement } from "./year8HistoryEnslavement";
import { year8HistoryMigration } from "./year8HistoryMigration";
import { year8ScienceHealthAndLifestyle } from "./year8ScienceHealthAndLifestyle";
import { year8ScienceEcosystemProcesses } from "./year8ScienceEcosystemProcesses";
import { year8SciencePeriodicTable } from "./year8SciencePeriodicTable";
import { year8ScienceSeparationTechniques } from "./year8ScienceSeparationTechniques";
import { year8ScienceElectricityAndMagnetism } from "./year8ScienceElectricityAndMagnetism";
import { year8ScienceEnergy } from "./year8ScienceEnergy";
import { year8EnglishCrime } from "./year8EnglishCrime";
import { year8GeographyBrazil } from "./year8GeographyBrazil";
import { year8DesignTechnologyLightingSolutions } from "./year8DesignTechnologyLightingSolutions";
import { year8DesignTechnologyGlobalGoalsMarbleRun } from "./year8DesignTechnologyGlobalGoalsMarbleRun";
import { year8RpeWhatHappenedToMoses } from "./year8RpeWhatHappenedToMoses";
import { year8RpeHowDoJewishPeopleLive } from "./year8RpeHowDoJewishPeopleLive";
import { year8SpanishFoodAndUniversals } from "./year8SpanishFoodAndUniversals";
import { year8FrenchHolidaysAndUniversals } from "./year8FrenchHolidaysAndUniversals";

const knowledgeOrganisers: KnowledgeOrganiser[] = [
  year8HistoryMigration,
  year8HistoryIndustrialRevolution,
  year8HistoryJackTheRipper,
  year8HistoryEnslavement,
  year8ScienceHealthAndLifestyle,
  year8ScienceEcosystemProcesses,
  year8SciencePeriodicTable,
  year8ScienceSeparationTechniques,
  year8ScienceElectricityAndMagnetism,
  year8ScienceEnergy,
  year8EnglishCrime,
  year8GeographyBrazil,
  year8DesignTechnologyLightingSolutions,
  year8DesignTechnologyGlobalGoalsMarbleRun,
  year8RpeWhatHappenedToMoses,
  year8RpeHowDoJewishPeopleLive,
  year8SpanishFoodAndUniversals,
  year8FrenchHolidaysAndUniversals,
];

export function getKnowledgeOrganiserById(id: string) {
  return knowledgeOrganisers.find(organiser => organiser.id === id);
}

export function getKnowledgeOrganisers(year: number, subject: string) {
  return knowledgeOrganisers
    .filter(organiser => organiser.year === year && organiser.subject.toLowerCase() === subject.toLowerCase())
    .sort((first, second) => first.chapter - second.chapter);
}
