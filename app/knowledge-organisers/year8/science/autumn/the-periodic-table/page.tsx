import KnowledgeOrganiserChapter from "@/components/knowledge-organisers/KnowledgeOrganiserChapter";
import { year8SciencePeriodicTable } from "@/data/knowledgeOrganisers/year8SciencePeriodicTable";

export default function ThePeriodicTablePage() {
  return <KnowledgeOrganiserChapter organiser={year8SciencePeriodicTable} />;
}

