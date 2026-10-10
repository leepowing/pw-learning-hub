import KnowledgeOrganiserRevisionQuiz from "@/components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz";
import { getKnowledgeOrganisers } from "@/data/knowledgeOrganisers/registry";

export default function EnglishRevisionQuizPage() {
  return <KnowledgeOrganiserRevisionQuiz organisers={getKnowledgeOrganisers(8, "English")} />;
}
