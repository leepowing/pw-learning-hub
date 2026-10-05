import KnowledgeOrganiserChapter from "@/components/knowledge-organisers/KnowledgeOrganiserChapter";
import { year8ScienceHealthAndLifestyle } from "@/data/knowledgeOrganisers/year8ScienceHealthAndLifestyle";

export default function HealthAndLifestylePage() {
  return <KnowledgeOrganiserChapter organiser={year8ScienceHealthAndLifestyle} />;
}
