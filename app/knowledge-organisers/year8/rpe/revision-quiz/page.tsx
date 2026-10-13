import KnowledgeOrganiserRevisionQuiz from "@/components/knowledge-organisers/KnowledgeOrganiserRevisionQuiz";
import { getKnowledgeOrganisers } from "@/data/knowledgeOrganisers/registry";

export default function RpeRevisionQuizPage() {
  return <KnowledgeOrganiserRevisionQuiz organisers={getKnowledgeOrganisers(8, "RPE")} />;
}
