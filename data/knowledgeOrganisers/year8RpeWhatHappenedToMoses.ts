import type {
  KnowledgeFlashcard,
  KnowledgeOrganiser,
  KnowledgeQuestion,
  KnowledgeSection,
  MultipleChoiceQuestion,
  WrittenQuestion,
} from "./types";

const KO_SOURCE = "Year 8 RPE KO, Half Term 1: What happened to Moses?";

type SourceFact = { question: string; answer: string };
type SourceTerm = { term: string; definition: string };
type SourceSection = {
  id: string;
  title: string;
  context: string;
  summary: string;
  colour: string;
  sourceRef: string;
  facts: SourceFact[];
  terms: SourceTerm[];
};

const sourceSections: SourceSection[] = [
  {
    id: "y8rpe-moses-covenants",
    title: "Covenants",
    context: "Abrahamic Covenant · Mosaic Covenant · promises and responsibilities",
    summary: "The KO presents a covenant as a sacred agreement: God makes promises, while people are given responsibilities and may fail to meet them.",
    colour: "#7e22ce",
    sourceRef: `${KO_SOURCE}, image 1: Covenants`,
    facts: [
      { question: "According to the KO, what is a covenant?", answer: "A covenant is a sacred agreement between God and humans." },
      { question: "Who are the two parties in the first covenant described by the KO?", answer: "The first covenant described is between God and Abraham." },
      { question: "What is the covenant between God and Abraham called?", answer: "It is called the Abrahamic Covenant." },
      { question: "How many descendants does God promise Abraham?", answer: "God promises Abraham as many descendants as the stars in the sky." },
      { question: "What land does God promise Abraham's descendants?", answer: "God promises to grant them a Promised Land of their own." },
      { question: "What does the Covenant between Moses and God renew?", answer: "It renews God's commitment to the Israelites." },
      { question: "How does the KO describe the Israelites in the Mosaic Covenant?", answer: "The KO describes the Israelites as God's chosen people and Abraham's descendants." },
      { question: "What do the Israelites agree to do in the Mosaic Covenant?", answer: "They agree to follow the rules God sets out for them." },
      { question: "What does God promise the Israelites in exchange for following the rules?", answer: "God promises to protect them." },
      { question: "How will God use the Israelites to affect the wider world?", answer: "God will use them to spread his power through the world." },
      { question: "What do the Israelites become through the Mosaic Covenant?", answer: "They become a 'nation of priests'." },
      { question: "What human failure is a key covenant theme in Judaism, Christianity and Islam?", answer: "Humans cannot live up to God's expectations." },
      { question: "What does the KO say God does even when humans fail?", answer: "God always keeps his promises." },
      { question: "According to the KO, what is Jesus' role in Christianity's understanding of covenant?", answer: "In Christianity, God sends Jesus to renew and remake the old covenants." },
      { question: "According to the KO, what is Muhammad's role in Islam's understanding of God's expectations?", answer: "In Islam, Muhammad is a final prophet who makes God's expectations to humans clear at last." },
    ],
    terms: [],
  },
  {
    id: "y8rpe-moses-exodus",
    title: "The Exodus",
    context: "The Torah · Moses · liberation from slavery · Passover · Sinai",
    summary: "According to the KO's account of Exodus, Moses survives Pharaoh's order, is called by God and leads the enslaved Israelites out of Egypt towards Sinai.",
    colour: "#6b21a8",
    sourceRef: `${KO_SOURCE}, image 1: The Exodus`,
    facts: [
      { question: "Which book of the Torah is Exodus?", answer: "Exodus is the second book of the Torah." },
      { question: "How does the KO describe the Torah?", answer: "The KO describes the Torah as the Hebrew Bible." },
      { question: "What does the word 'Exodus' mean?", answer: "It means 'exit'." },
      { question: "Whom does Moses lead out of Egypt in the Exodus story?", answer: "Moses leads the enslaved Israelites, described in the KO as Jewish people, out of Egypt." },
      { question: "What change does leaving Egypt bring for the Israelites?", answer: "They move from slavery into freedom." },
      { question: "How does the KO describe Pharaoh?", answer: "The KO describes Pharaoh as the Egyptian god-king." },
      { question: "What order does Pharaoh give about Jewish boys?", answer: "Pharaoh orders that all Jewish boys be killed." },
      { question: "Why does Pharaoh order the Jewish boys to be killed?", answer: "His sorcerers warn him that a Jewish man will one day threaten his rule." },
      { question: "Who is Yocheved?", answer: "Yocheved is Moses' mother." },
      { question: "Where does Yocheved place the baby Moses?", answer: "She places him in a basket in the river." },
      { question: "Whom does Yocheved trust to protect Moses?", answer: "Yocheved trusts that God will protect him." },
      { question: "Who discovers the baby Moses?", answer: "Batya, Pharaoh's daughter, discovers him." },
      { question: "How is Moses raised after Batya discovers him?", answer: "Moses is raised as a member of Batya's own family." },
      { question: "Where is Moses when he sees the Burning Bush?", answer: "Moses is exiled in the desert when he sees the Burning Bush." },
      { question: "Through what does God speak to Moses in the desert?", answer: "God speaks to Moses through the Burning Bush." },
      { question: "What does God command Moses to do?", answer: "God commands Moses to liberate the Israelites from slavery." },
      { question: "How does Pharaoh respond when Moses asks for the Israelites' freedom?", answer: "Pharaoh refuses to let the Israelites go." },
      { question: "What does God send after Pharaoh refuses to let the Israelites go?", answer: "God sends ten terrible plagues to punish the Egyptians." },
      { question: "What is the final plague?", answer: "The final plague is the death of the firstborn." },
      { question: "Whose death is included in the KO's description of the final plague?", answer: "The Egyptian children are killed, including Pharaoh's own son." },
      { question: "What are the Israelites told to put on their doors?", answer: "They are told to paint the blood of a lamb on their doors." },
      { question: "Why are the Israelites' homes described as being 'passed over'?", answer: "Their homes are spared when the plague passes over them." },
      { question: "Where does Moses lead his people after they leave Egypt?", answer: "Moses leads his people into the desert." },
      { question: "What does Moses part during the escape from Egypt?", answer: "Moses parts the Red Sea." },
      { question: "Where do Moses and his people cross into after the Red Sea?", answer: "They cross into Sinai." },
    ],
    terms: [],
  },
  {
    id: "y8rpe-moses-religious-experiences",
    title: "Religious Experiences",
    context: "William James's features · religious, physical and psychological explanations",
    summary: "William James identifies four features of religious experience, while the KO outlines religious, physical and psychological explanations.",
    colour: "#9333ea",
    sourceRef: `${KO_SOURCE}, image 1: Religious Experiences`,
    facts: [
      { question: "What does William James mean by an ineffable religious experience?", answer: "It is hard to talk about or put into words." },
      { question: "What does William James mean by a noetic religious experience?", answer: "It involves gaining knowledge." },
      { question: "What does William James mean by a passive religious experience?", answer: "It happens to a person rather than being controlled by them." },
      { question: "What does William James mean by a transient religious experience?", answer: "It does not last long, although its effects might continue." },
      { question: "How does the KO explain a religious experience as real?", answer: "A religious experience may be evidence for something that cannot otherwise be explained." },
      { question: "What physical explanation can be given for a religious experience?", answer: "It can be explained by something happening in the brain." },
      { question: "What psychological explanation can be given for a religious experience?", answer: "It can be explained through emotions, expectations or other psychological processes." },
    ],
    terms: [],
  },
  {
    id: "y8rpe-moses-key-terms",
    title: "Key Terms and Concepts",
    context: "Religious experience · testimony · Swinburne · Otto · alternative explanations",
    summary: "These terms help students describe religious experiences and assess claims about what people report experiencing.",
    colour: "#581c87",
    sourceRef: `${KO_SOURCE}, image 3: Key Terms 1`,
    facts: [],
    terms: [
      { term: "religious experience", definition: "An experience understood by the person having it as an encounter with God, God's power, or God's agents such as angels." },
      { term: "testimony", definition: "A form of evidence: someone's description of what they experienced." },
      { term: "Principle of Credulity", definition: "Swinburne's idea that we should generally trust what people report unless we have good reason not to." },
      { term: "defeater", definition: "A good reason to doubt someone's testimony, such as a reputation for lying or being in an abnormal state." },
      { term: "ineffable", definition: "Impossible, or almost impossible, to put into words; one of William James's four marks." },
      { term: "noetic", definition: "Feeling like real knowledge, not just a feeling; one of William James's four marks." },
      { term: "numinous", definition: "Rudolf Otto's word for the feeling of standing before something holy and wholly beyond us." },
      { term: "mysterium tremendum et fascinans", definition: "Otto's phrase for the numinous: at once terrifying and irresistibly fascinating." },
      { term: "veridical", definition: "Genuinely true or real; a veridical experience is a true perception of something that is really there." },
      { term: "temporal lobe", definition: "The part of the brain linked, in some studies, to intense religious feelings." },
      { term: "near-death experience", definition: "A vivid experience reported by some people who came close to death, often during cardiac arrest." },
      { term: "hallucination", definition: "An experience of something that feels real but is not physically present." },
    ],
  },
];

const sections: KnowledgeSection[] = sourceSections.map(section => ({
  id: section.id,
  title: section.title,
  context: section.context,
  summary: section.summary,
  colour: section.colour,
  keyFacts: section.facts.map(fact => fact.answer),
  keyTerms: section.terms.map(term => `${term.term}: ${term.definition}`),
  sourceType: "knowledgeOrganiser",
  sourceRef: section.sourceRef,
}));

const sourceFlashcards: KnowledgeFlashcard[] = sourceSections.flatMap((section, sectionIndex) => [
  ...section.facts.map((fact, factIndex) => ({
    id: `y8rpe-moses-s${sectionIndex + 1}-fact-${factIndex + 1}`,
    sectionId: section.id,
    front: fact.question,
    back: fact.answer,
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: section.sourceRef,
  })),
  ...section.terms.map((term, termIndex) => ({
    id: `y8rpe-moses-s${sectionIndex + 1}-term-${termIndex + 1}`,
    sectionId: section.id,
    front: `Define ${term.term}.`,
    back: term.definition,
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: section.sourceRef,
  })),
]);

const synthesisFlashcards: KnowledgeFlashcard[] = [
  {
    id: "y8rpe-moses-synthesis-covenants",
    sectionId: "y8rpe-moses-covenants",
    front: "How do the Abrahamic and Mosaic covenants differ in the KO?",
    back: "The Abrahamic Covenant promises Abraham descendants and a Promised Land. The Mosaic Covenant renews God's commitment to the Israelites, who agree to follow God's rules and become a nation of priests.",
    sourceType: "generatedSupplement",
    sourceRef: `${KO_SOURCE}, image 1: Covenants`,
  },
  {
    id: "y8rpe-moses-synthesis-exodus-sequence",
    sectionId: "y8rpe-moses-exodus",
    front: "What is the main sequence from the Burning Bush to Sinai?",
    back: "God commands Moses to free the Israelites; Pharaoh refuses; ten plagues follow; the Israelites' homes are passed over; Moses leads them through the desert, parts the Red Sea and crosses into Sinai.",
    sourceType: "generatedSupplement",
    sourceRef: `${KO_SOURCE}, image 1: The Exodus`,
  },
  {
    id: "y8rpe-moses-synthesis-james",
    sectionId: "y8rpe-moses-religious-experiences",
    front: "What are William James's four features of religious experience?",
    back: "Ineffable, noetic, passive and transient.",
    sourceType: "generatedSupplement",
    sourceRef: `${KO_SOURCE}, image 1: Religious Experiences`,
  },
  {
    id: "y8rpe-moses-synthesis-explanations",
    sectionId: "y8rpe-moses-religious-experiences",
    front: "How do religious, physical and psychological explanations of religious experience differ?",
    back: "A religious explanation treats the experience as evidence for something beyond ordinary explanation; a physical explanation looks to the brain; a psychological explanation looks to emotions and expectations.",
    sourceType: "generatedSupplement",
    sourceRef: `${KO_SOURCE}, image 1: Religious Experiences`,
  },
];

const flashcards: KnowledgeFlashcard[] = [...sourceFlashcards, ...synthesisFlashcards];

const sourceCoverageQuestions: WrittenQuestion[] = sourceSections.flatMap((section, sectionIndex) => [
  ...section.facts.map((fact, factIndex) => ({
    id: `y8rpe-moses-s${sectionIndex + 1}-short-${factIndex + 1}`,
    sectionIds: [section.id],
    type: "short-answer" as const,
    prompt: fact.question,
    marks: 1,
    markingPoints: [fact.answer],
    guidance: "Give the precise RPE knowledge from the organiser. Use appropriate attribution where the question asks what the KO or a religion teaches.",
    sourceType: "generatedSupplement" as const,
    sourceRef: section.sourceRef,
  })),
  ...section.terms.map((term, termIndex) => ({
    id: `y8rpe-moses-s${sectionIndex + 1}-term-question-${termIndex + 1}`,
    sectionIds: [section.id],
    type: "short-answer" as const,
    prompt: `Define ${term.term}.`,
    marks: 1,
    markingPoints: [term.definition],
    guidance: "Give the meaning taught in the knowledge organiser.",
    sourceType: "generatedSupplement" as const,
    sourceRef: section.sourceRef,
  })),
]);

const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: "y8rpe-moses-mcq-1", sectionIds: ["y8rpe-moses-covenants"], type: "multiple-choice", marks: 1,
    prompt: "According to the KO, what is a covenant?",
    options: ["A sacred agreement between God and humans", "A building used for worship", "A religious festival meal", "A private vision with no promises"],
    answer: "A sacred agreement between God and humans", explanation: "The KO defines a covenant as a sacred agreement between God and humans.",
  },
  {
    id: "y8rpe-moses-mcq-2", sectionIds: ["y8rpe-moses-covenants"], type: "multiple-choice", marks: 1,
    prompt: "Which promise belongs to the Abrahamic Covenant?",
    options: ["Many descendants and a Promised Land", "Ten plagues and the Red Sea", "A kingdom in Egypt", "Freedom from every rule"],
    answer: "Many descendants and a Promised Land", explanation: "God promises Abraham many descendants and a Promised Land.",
  },
  {
    id: "y8rpe-moses-mcq-3", sectionIds: ["y8rpe-moses-covenants"], type: "multiple-choice", marks: 1,
    prompt: "What do the Israelites agree to do in the Mosaic Covenant?",
    options: ["Follow God's rules", "Return to Egypt", "Reject Abraham", "Build the pyramids"],
    answer: "Follow God's rules", explanation: "The Israelites agree to follow the rules God sets out for them.",
  },
  {
    id: "y8rpe-moses-mcq-4", sectionIds: ["y8rpe-moses-covenants"], type: "multiple-choice", marks: 1,
    prompt: "What covenant theme does the KO connect with Judaism, Christianity and Islam?",
    options: ["God keeps his promises even when humans fail", "Humans never fail", "Covenants apply only to rulers", "Promises have no responsibilities"],
    answer: "God keeps his promises even when humans fail", explanation: "The KO says humans cannot live up to God's expectations, but God always keeps his promises.",
  },
  {
    id: "y8rpe-moses-mcq-5", sectionIds: ["y8rpe-moses-exodus"], type: "multiple-choice", marks: 1,
    prompt: "What does 'Exodus' mean?",
    options: ["Exit", "Promise", "Vision", "Law"], answer: "Exit", explanation: "The KO states that Exodus means 'exit'.",
  },
  {
    id: "y8rpe-moses-mcq-6", sectionIds: ["y8rpe-moses-exodus"], type: "multiple-choice", marks: 1,
    prompt: "Who places Moses in a basket in the river?",
    options: ["Yocheved", "Batya", "Pharaoh", "Abraham"], answer: "Yocheved", explanation: "Yocheved, Moses' mother, places him in a basket in the river.",
  },
  {
    id: "y8rpe-moses-mcq-7", sectionIds: ["y8rpe-moses-exodus"], type: "multiple-choice", marks: 1,
    prompt: "Who discovers the baby Moses?",
    options: ["Batya", "Yocheved", "Muhammad", "Swinburne"], answer: "Batya", explanation: "Batya, Pharaoh's daughter, discovers Moses.",
  },
  {
    id: "y8rpe-moses-mcq-8", sectionIds: ["y8rpe-moses-exodus"], type: "multiple-choice", marks: 1,
    prompt: "Through what does God command Moses to free the Israelites?",
    options: ["The Burning Bush", "The Promised Land", "A dream in Egypt", "The temporal lobe"], answer: "The Burning Bush", explanation: "God commands Moses through the Burning Bush.",
  },
  {
    id: "y8rpe-moses-mcq-9", sectionIds: ["y8rpe-moses-exodus"], type: "multiple-choice", marks: 1,
    prompt: "What is the final plague in the KO?",
    options: ["The death of the firstborn", "The Burning Bush", "The parting of the Red Sea", "The exile of Moses"], answer: "The death of the firstborn", explanation: "The last plague is the death of the firstborn.",
  },
  {
    id: "y8rpe-moses-mcq-10", sectionIds: ["y8rpe-moses-exodus"], type: "multiple-choice", marks: 1,
    prompt: "What marks the Israelite doors before the plague passes over?",
    options: ["The blood of a lamb", "Water from the Red Sea", "A written covenant", "Burning wood"], answer: "The blood of a lamb", explanation: "The Israelites paint lamb's blood on their doors.",
  },
  {
    id: "y8rpe-moses-mcq-11", sectionIds: ["y8rpe-moses-religious-experiences"], type: "multiple-choice", marks: 1,
    prompt: "Which feature means that a religious experience is hard to put into words?",
    options: ["Ineffable", "Noetic", "Passive", "Transient"], answer: "Ineffable", explanation: "Ineffable means hard or almost impossible to express in words.",
  },
  {
    id: "y8rpe-moses-mcq-12", sectionIds: ["y8rpe-moses-religious-experiences"], type: "multiple-choice", marks: 1,
    prompt: "Which feature means that a religious experience involves gaining knowledge?",
    options: ["Noetic", "Transient", "Passive", "Ineffable"], answer: "Noetic", explanation: "Noetic experiences feel like real knowledge, not just a feeling.",
  },
  {
    id: "y8rpe-moses-mcq-13", sectionIds: ["y8rpe-moses-religious-experiences"], type: "multiple-choice", marks: 1,
    prompt: "Which explanation links religious experiences to something happening in the brain?",
    options: ["Physical explanation", "Religious explanation", "Covenant explanation", "Passover explanation"], answer: "Physical explanation", explanation: "A physical explanation links the experience to the brain.",
  },
  {
    id: "y8rpe-moses-mcq-14", sectionIds: ["y8rpe-moses-key-terms"], type: "multiple-choice", marks: 1,
    prompt: "Whose idea is the Principle of Credulity?",
    options: ["Swinburne", "William James", "Rudolf Otto", "Moses"], answer: "Swinburne", explanation: "The Principle of Credulity is Swinburne's idea.",
  },
  {
    id: "y8rpe-moses-mcq-15", sectionIds: ["y8rpe-moses-key-terms"], type: "multiple-choice", marks: 1,
    prompt: "Which term means a good reason to doubt someone's testimony?",
    options: ["Defeater", "Veridical", "Numinous", "Testimony"], answer: "Defeater", explanation: "A defeater is a good reason to doubt testimony.",
  },
  {
    id: "y8rpe-moses-mcq-16", sectionIds: ["y8rpe-moses-key-terms"], type: "multiple-choice", marks: 1,
    prompt: "Which term describes an experience that feels real but is not physically present?",
    options: ["Hallucination", "Veridical experience", "Testimony", "Covenant"], answer: "Hallucination", explanation: "The KO defines a hallucination as an experience that feels real but is not physically present.",
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as MultipleChoiceQuestion[];

const interactiveQuestions: WrittenQuestion[] = [
  {
    id: "y8rpe-moses-interactive-covenants", sectionIds: ["y8rpe-moses-covenants"], type: "short-answer", format: "matching", marks: 4,
    prompt: "Match each covenant statement to the correct idea.",
    markingPoints: ["All four covenant statements matched correctly"], guidance: "Use the people, promises and responsibilities as clues.",
    interaction: {
      kind: "matching",
      left: ["God and Abraham", "Many descendants and a Promised Land", "Israelites follow God's rules", "Nation of priests"],
      right: ["Parties in the Abrahamic Covenant", "Promises in the Abrahamic Covenant", "Responsibility in the Mosaic Covenant", "Role given to the Israelites"],
      answers: [0, 1, 2, 3],
    },
  },
  {
    id: "y8rpe-moses-interactive-exodus-order", sectionIds: ["y8rpe-moses-exodus"], type: "short-answer", format: "ordering", marks: 8,
    prompt: "Put these events from the Exodus story into the order taught by the KO.",
    markingPoints: ["All eight events placed in the correct order"], guidance: "Begin with Moses as a baby and finish at Sinai.",
    interaction: {
      kind: "ordering",
      items: ["Moses crosses into Sinai", "Pharaoh refuses to let the Israelites go", "Batya discovers Moses", "Moses sees the Burning Bush", "Yocheved places Moses in a basket", "The final plague passes over Israelite homes", "God sends ten plagues", "Moses parts the Red Sea"],
      answer: ["Yocheved places Moses in a basket", "Batya discovers Moses", "Moses sees the Burning Bush", "Pharaoh refuses to let the Israelites go", "God sends ten plagues", "The final plague passes over Israelite homes", "Moses parts the Red Sea", "Moses crosses into Sinai"],
    },
  },
  {
    id: "y8rpe-moses-interactive-james", sectionIds: ["y8rpe-moses-religious-experiences"], type: "short-answer", format: "matching", marks: 4,
    prompt: "Match William James's four features to their meanings.",
    markingPoints: ["All four features matched correctly"], guidance: "Distinguish knowledge, control, duration and description.",
    interaction: {
      kind: "matching",
      left: ["Ineffable", "Noetic", "Passive", "Transient"],
      right: ["Hard to put into words", "Involves gaining knowledge", "Happens to a person", "Does not last long"],
      answers: [0, 1, 2, 3],
    },
  },
  {
    id: "y8rpe-moses-interactive-explanations", sectionIds: ["y8rpe-moses-religious-experiences"], type: "short-answer", format: "classification", marks: 6,
    prompt: "Classify each statement as a religious, physical or psychological explanation.",
    markingPoints: ["All six statements classified correctly"], guidance: "Look for evidence beyond ordinary explanation, the brain, or emotions and expectations.",
    interaction: {
      kind: "classification",
      rows: ["Evidence for something we cannot otherwise explain", "God or God's agents are encountered", "Activity in the brain", "The temporal lobe is involved", "Emotions shape the experience", "Expectations influence what is experienced"],
      categories: ["Religious", "Physical", "Psychological"],
      answers: ["Religious", "Religious", "Physical", "Physical", "Psychological", "Psychological"],
    },
  },
  {
    id: "y8rpe-moses-interactive-key-terms", sectionIds: ["y8rpe-moses-key-terms"], type: "short-answer", format: "matching", marks: 6,
    prompt: "Match each key term to its meaning.",
    markingPoints: ["All six key terms matched correctly"], guidance: "Use the precise definitions from Key Terms 1.",
    interaction: {
      kind: "matching",
      left: ["Testimony", "Defeater", "Numinous", "Veridical", "Near-death experience", "Hallucination"],
      right: ["Someone's account of what they experienced", "A reason to doubt testimony", "A sense of something holy and beyond us", "Genuinely true or real", "A vivid experience close to death", "An experience that feels real but is not physically present"],
      answers: [0, 1, 2, 3, 4, 5],
    },
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as WrittenQuestion[];

const longQuestions: WrittenQuestion[] = [
  {
    id: "y8rpe-moses-long-1", sectionIds: ["y8rpe-moses-covenants"], type: "long-answer", marks: 6,
    prompt: "Explain the promises and responsibilities in the Abrahamic and Mosaic covenants.",
    markingPoints: [
      "Explains that a covenant is a sacred agreement between God and humans.",
      "Identifies the Abrahamic Covenant as the covenant between God and Abraham.",
      "Explains the promise of many descendants.",
      "Explains the promise of a Promised Land.",
      "Explains that the Israelites agree to follow God's rules in the Mosaic Covenant.",
      "Explains God's promises to protect the Israelites and use them as a nation of priests.",
    ],
    guidance: "Organise the answer by covenant, then link each promise or responsibility to the correct covenant.",
  },
  {
    id: "y8rpe-moses-long-2", sectionIds: ["y8rpe-moses-exodus"], type: "long-answer", marks: 6,
    prompt: "Explain how Moses leads the Israelites from slavery towards freedom, from the Burning Bush to Sinai.",
    markingPoints: [
      "Explains that God commands Moses through the Burning Bush to liberate the Israelites.",
      "Explains that Pharaoh refuses to let the Israelites go.",
      "Explains that God sends ten plagues.",
      "Explains the final plague and why Israelite homes are passed over.",
      "Explains that Moses leads the people into the desert and parts the Red Sea.",
      "States that they cross into Sinai.",
    ],
    guidance: "Write the events in sequence and make the cause-and-effect links clear.",
  },
  {
    id: "y8rpe-moses-long-3", sectionIds: ["y8rpe-moses-religious-experiences"], type: "long-answer", marks: 6,
    prompt: "Compare religious, physical and psychological explanations of religious experience.",
    markingPoints: [
      "Explains that a religious explanation treats the experience as evidence for something beyond ordinary explanation.",
      "Explains that a physical explanation links the experience to activity in the brain.",
      "Explains that a psychological explanation links the experience to emotions or expectations.",
      "Makes a direct comparison between the religious and physical explanations.",
      "Makes a direct comparison between the religious and psychological explanations.",
      "Uses at least one relevant KO term or example accurately.",
    ],
    guidance: "Explain each view, then use comparison words such as whereas, while or in contrast.",
  },
  {
    id: "y8rpe-moses-long-4", sectionIds: ["y8rpe-moses-key-terms"], type: "long-answer", marks: 6,
    prompt: "Discuss whether testimony about a religious experience should be trusted.",
    markingPoints: [
      "Accurately defines testimony.",
      "Explains the Principle of Credulity.",
      "Explains why a veridical experience would support testimony.",
      "Explains what a defeater is.",
      "Uses a relevant alternative explanation, such as hallucination, the temporal lobe or psychological influence.",
      "Gives a supported conclusion based on the reasons discussed.",
    ],
    guidance: "Present reasons to trust and reasons to doubt the testimony, then reach a justified conclusion. The conclusion may be religious, non-religious or undecided if it is supported.",
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as WrittenQuestion[];

const questions: KnowledgeQuestion[] = [
  ...multipleChoiceQuestions,
  ...sourceCoverageQuestions,
  ...interactiveQuestions,
  ...longQuestions,
];

export const year8RpeWhatHappenedToMoses: KnowledgeOrganiser = {
  id: "year8-rpe-what-happened-to-moses",
  year: 8,
  subject: "RPE",
  term: "Autumn",
  chapter: 1,
  title: "What happened to Moses?",
  introduction: "Explore covenants, the Exodus story and different ways of understanding religious experiences.",
  sections,
  flashcards,
  questions,
};
