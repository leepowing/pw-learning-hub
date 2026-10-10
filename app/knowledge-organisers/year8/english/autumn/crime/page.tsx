import KnowledgeOrganiserChapter from "@/components/knowledge-organisers/KnowledgeOrganiserChapter";
import { year8EnglishCrime } from "@/data/knowledgeOrganisers/year8EnglishCrime";

export default function CrimePage() {
  return <KnowledgeOrganiserChapter organiser={year8EnglishCrime} />;
}
