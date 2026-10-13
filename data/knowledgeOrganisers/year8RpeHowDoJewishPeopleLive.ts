import type {
  KnowledgeFlashcard,
  KnowledgeOrganiser,
  KnowledgeQuestion,
  KnowledgeSection,
  MultipleChoiceQuestion,
  WrittenQuestion,
} from "./types";

const KO_SOURCE = "Year 8 RPE KO, Half Term 2: How do Jewish people live?";

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
    id: "y8rpe-jewish-life-law",
    title: "The Law (Mitzvot)",
    context: "613 commandments · Shabbat · Kashrut · kosher food",
    summary: "The Mitzvot guide Jewish life. The KO focuses on Shabbat and Kashrut, including the features, examples and preparation rules used to identify kosher food.",
    colour: "#7e22ce",
    sourceRef: `${KO_SOURCE}, image 2: The Law and kosher infographic`,
    facts: [
      { question: "How many commandments does the term Mitzvot refer to in the KO?", answer: "Mitzvot refers to 613 commandments." },
      { question: "As part of what covenant did God reveal the Mitzvot?", answer: "God revealed the Mitzvot as part of the Mosaic Covenant." },
      { question: "Which famous commandments are included in the Mitzvot?", answer: "The Mitzvot include the Ten Commandments." },
      { question: "What part of everyday community life is governed by some Mitzvot?", answer: "Some Mitzvot are rules about social life." },
      { question: "What moral area is governed by some Mitzvot?", answer: "Some Mitzvot are rules about justice." },
      { question: "What health-related area is governed by some Mitzvot?", answer: "Some Mitzvot are rules about hygiene." },
      { question: "What does the Shabbat commandment require?", answer: "It requires one day of the week to be kept separate for the worship of God." },
      { question: "On which day is Shabbat?", answer: "Shabbat is on Saturday." },
      { question: "What do many Jewish people avoid doing on Shabbat?", answer: "Many Jewish people do not work on Shabbat." },
      { question: "Where may Jewish people go during Shabbat?", answer: "They may attend a synagogue." },
      { question: "What family activity may Jewish people share on Shabbat?", answer: "They may share a meal with their family." },
      { question: "What personal act of worship may Jewish people practise on Shabbat?", answer: "They may pray." },
      { question: "What is Kashrut?", answer: "Kashrut is the food laws of the Mitzvot." },
      { question: "What do the laws of Kashrut explain?", answer: "They explain which foods Jewish people can and cannot eat." },
      { question: "What is food suitable for Jewish consumption called?", answer: "Food suitable for consumption is called kosher." },
      { question: "What two features make the land animals shown in the diagram kosher?", answer: "They chew the cud and have split hooves." },
      { question: "Which kosher land animals are named in the diagram?", answer: "Cows, sheep, goats and deer." },
      { question: "What type of birds does the diagram identify as kosher?", answer: "Domesticated bird species." },
      { question: "Which kosher birds are named in the diagram?", answer: "Chicken, duck and turkey." },
      { question: "What two features make the fish shown in the diagram kosher?", answer: "They have both fins and scales." },
      { question: "Which kosher fish are named in the diagram?", answer: "Trout, tuna and salmon." },
      { question: "Why are the land animals on the non-kosher side unsuitable?", answer: "They do not chew the cud and/or do not have split hooves." },
      { question: "Which non-kosher land animals are named in the diagram?", answer: "Pigs, rabbits and kangaroo." },
      { question: "What types of birds does the diagram identify as not kosher?", answer: "Scavenger and predatory birds." },
      { question: "Which non-kosher birds are named in the diagram?", answer: "Vulture, eagle and owl." },
      { question: "Why are the sea animals on the non-kosher side unsuitable?", answer: "They do not have both fins and scales." },
      { question: "Which non-kosher sea-animal groups are named in the diagram?", answer: "Crustaceans, mollusks and water mammals." },
      { question: "Which cuts of meat are listed as kosher?", answer: "Chuck, rib, shoulder and plate." },
      { question: "Which cuts of meat are listed as not kosher?", answer: "Loin, sirloin, rump, flank and heel." },
      { question: "What qualification does the diagram give about meat cuts?", answer: "When prepared properly, some cuts listed on the non-kosher side may be kosher." },
      { question: "What food combination does the diagram identify as not kosher?", answer: "Meat and dairy together." },
    ],
    terms: [],
  },
  {
    id: "y8rpe-jewish-life-passover",
    title: "Passover (Pesach)",
    context: "The Exodus · chametz · matzah · Seder · symbolic foods",
    summary: "Pesach commemorates the Exodus. Families remove chametz, eat matzah and share a Seder meal whose five foods recall parts of the story.",
    colour: "#6b21a8",
    sourceRef: `${KO_SOURCE}, image 2: Passover (Pesach)`,
    facts: [
      { question: "What story does Pesach commemorate and remember?", answer: "Pesach commemorates and remembers the Exodus story." },
      { question: "What do Jewish families remove before Pesach begins?", answer: "They remove all leavened bread from their homes." },
      { question: "What is leavened bread called in the Pesach section?", answer: "It is called chametz." },
      { question: "Why is chametz removed before Pesach?", answer: "It remembers that the Israelites had to leave Egypt before their bread had time to rise." },
      { question: "What type of bread do Jewish families eat during Pesach?", answer: "They eat only unleavened bread." },
      { question: "What is the unleavened bread eaten during Pesach called?", answer: "It is called matzah." },
      { question: "What is the special Pesach meal called?", answer: "It is called the Seder." },
      { question: "How many symbolic foods are on the Seder plate in the KO?", answer: "The Seder plate has five symbolic foods." },
      { question: "What is maror?", answer: "Maror is bitter herbs and vegetables such as horseradish and chard." },
      { question: "What is charoset?", answer: "Charoset is a paste made of apples, nuts and wine." },
      { question: "What is karpas?", answer: "Karpas is green leaves such as parsley dipped in salt water." },
      { question: "What is zeroa?", answer: "Zeroa is a roasted lamb shank bone." },
      { question: "What is beitzah?", answer: "Beitzah is a boiled egg." },
    ],
    terms: [],
  },
  {
    id: "y8rpe-jewish-life-bar-bat-mitzvah",
    title: "Bar/Bat Mitzvah",
    context: "Coming of age · Torah reading · responsibility · community · twinning",
    summary: "Bar and Bat Mitzvah ceremonies mark coming of age. Young people prepare a Torah reading and speech, then accept responsibility for living according to the Mitzvot.",
    colour: "#9333ea",
    sourceRef: `${KO_SOURCE}, image 2: Bar/Bat Mitzvah`,
    facts: [
      { question: "For whom is a Bar Mitzvah held?", answer: "A Bar Mitzvah is held for boys." },
      { question: "For whom is a Bat Mitzvah held?", answer: "A Bat Mitzvah is held for girls." },
      { question: "What kind of ceremonies are Bar and Bat Mitzvah?", answer: "They are coming-of-age ceremonies." },
      { question: "At what age do the ceremonies described in the KO take place?", answer: "They take place when Jewish children are aged 12 to 13." },
      { question: "What religious text does the young person choose a section from?", answer: "The young person chooses a section of the Torah." },
      { question: "In which language does the young person learn to read the Torah section?", answer: "They learn to read it in Hebrew." },
      { question: "What else does the young person prepare?", answer: "They prepare a speech on a topic of their choice." },
      { question: "What does the young person read during the ceremony?", answer: "They read their chosen Torah section." },
      { question: "Where is the Torah reading delivered?", answer: "It is delivered in the synagogue." },
      { question: "To whom does the young person deliver their speech?", answer: "They deliver their speech to the community." },
      { question: "What way of life does the Bar/Bat Mitzvah commit the young person to?", answer: "It is a commitment to live according to the Mitzvot." },
      { question: "What community status does the young person gain?", answer: "They become a member of the Jewish community." },
      { question: "What responsibility is the young person considered ready to take?", answer: "They are considered ready to take responsibility for living according to the Mitzvot." },
      { question: "How does the community regard the young person after the ceremony?", answer: "In the eyes of the community, they are ready to become an adult." },
      { question: "What does it mean to 'twin' a Bar/Bat Mitzvah?", answer: "It means linking the ceremony with a child who died before being able to celebrate their own coming of age." },
    ],
    terms: [],
  },
  {
    id: "y8rpe-jewish-life-key-terms",
    title: "Key Terms 2",
    context: "Judaism · attributes of God · Islam",
    summary: "These definitions connect the chapter to the Mosaic Covenant, Jewish law and wider Abrahamic religious vocabulary.",
    colour: "#581c87",
    sourceRef: `${KO_SOURCE}, image 3: Key Terms 2`,
    facts: [],
    terms: [
      { term: "Ten Commandments (Decalogue)", definition: "Two tablets of stone given to Moses by God on the top of Mount Sinai. Ten things were written on them that humans must do if they are to become God's chosen people." },
      { term: "Promised Land", definition: "The land given to Abraham and his descendants according to the promise God made." },
      { term: "Ten Plagues", definition: "Sent by God to help persuade Pharaoh to let the Israelites free from slavery." },
      { term: "Mitzvot", definition: "613 rules found in the Torah." },
      { term: "Temple", definition: "The place where the Israelites put the Ark of the Covenant." },
      { term: "Prophet", definition: "A messenger from God to humans." },
      { term: "Omnipotence", definition: "All-powerful; one of God's traits." },
      { term: "Omnibenevolence", definition: "All-loving; one of God's traits." },
      { term: "Omniscience", definition: "All-knowing; one of God's traits." },
      { term: "Omnipresence", definition: "All-present; one of God's traits." },
      { term: "Kaaba", definition: "The shrine in Mecca, rededicated by Muhammad, that is Islam's holiest site." },
      { term: "Caliph", definition: "A 'successor' who led the Muslim community after Muhammad." },
      { term: "People of the Book", definition: "The Islamic term for Jews and Christians, fellow worshippers of the God of Abraham." },
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
    id: `y8rpe-jewish-life-s${sectionIndex + 1}-fact-${factIndex + 1}`,
    sectionId: section.id,
    front: fact.question,
    back: fact.answer,
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: section.sourceRef,
  })),
  ...section.terms.map((term, termIndex) => ({
    id: `y8rpe-jewish-life-s${sectionIndex + 1}-term-${termIndex + 1}`,
    sectionId: section.id,
    front: `Define ${term.term}.`,
    back: term.definition,
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: section.sourceRef,
  })),
]);

const synthesisFlashcards: KnowledgeFlashcard[] = [
  {
    id: "y8rpe-jewish-life-synthesis-kosher", sectionId: "y8rpe-jewish-life-law",
    front: "Summarise the animal features used in the KO's kosher diagram.",
    back: "Kosher land animals chew the cud and have split hooves; kosher birds are domesticated species; kosher fish have both fins and scales. Scavenger and predatory birds and sea animals without both fins and scales are not kosher.",
    sourceType: "generatedSupplement", sourceRef: `${KO_SOURCE}, kosher infographic`,
  },
  {
    id: "y8rpe-jewish-life-synthesis-pesach", sectionId: "y8rpe-jewish-life-passover",
    front: "Summarise how bread is used to remember the Exodus at Pesach.",
    back: "Families remove chametz and eat matzah to remember that the Israelites left Egypt before their bread had time to rise.",
    sourceType: "generatedSupplement", sourceRef: `${KO_SOURCE}, Passover`,
  },
  {
    id: "y8rpe-jewish-life-synthesis-seder", sectionId: "y8rpe-jewish-life-passover",
    front: "Name the five symbolic foods on the KO's Seder plate.",
    back: "Maror, charoset, karpas, zeroa and beitzah.",
    sourceType: "generatedSupplement", sourceRef: `${KO_SOURCE}, Passover`,
  },
  {
    id: "y8rpe-jewish-life-synthesis-bar-bat", sectionId: "y8rpe-jewish-life-bar-bat-mitzvah",
    front: "Summarise the preparation and purpose of a Bar or Bat Mitzvah.",
    back: "A young person prepares a Torah reading in Hebrew and a speech. The ceremony marks coming of age and responsibility for living according to the Mitzvot as a member of the Jewish community.",
    sourceType: "generatedSupplement", sourceRef: `${KO_SOURCE}, Bar/Bat Mitzvah`,
  },
];

const flashcards: KnowledgeFlashcard[] = [...sourceFlashcards, ...synthesisFlashcards];

const sourceCoverageQuestions: WrittenQuestion[] = sourceSections.flatMap((section, sectionIndex) => [
  ...section.facts.map((fact, factIndex) => ({
    id: `y8rpe-jewish-life-s${sectionIndex + 1}-short-${factIndex + 1}`,
    sectionIds: [section.id], type: "short-answer" as const, prompt: fact.question, marks: 1,
    markingPoints: [fact.answer],
    guidance: "Give the precise knowledge taught in the organiser. Equivalent wording is acceptable when the meaning is unchanged.",
    sourceType: "generatedSupplement" as const, sourceRef: section.sourceRef,
  })),
  ...section.terms.map((term, termIndex) => ({
    id: `y8rpe-jewish-life-s${sectionIndex + 1}-term-question-${termIndex + 1}`,
    sectionIds: [section.id], type: "short-answer" as const, prompt: `Define ${term.term}.`, marks: 1,
    markingPoints: [term.definition], guidance: "Give the complete meaning taught in Key Terms 2.",
    sourceType: "generatedSupplement" as const, sourceRef: section.sourceRef,
  })),
]);

const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  { id: "y8rpe-jewish-life-mcq-1", sectionIds: ["y8rpe-jewish-life-law"], type: "multiple-choice", marks: 1, prompt: "How many commandments are included in the Mitzvot?", options: ["613", "10", "12", "40"], answer: "613", explanation: "The KO states that Mitzvot refers to 613 commandments." },
  { id: "y8rpe-jewish-life-mcq-2", sectionIds: ["y8rpe-jewish-life-law"], type: "multiple-choice", marks: 1, prompt: "On which day is Shabbat?", options: ["Saturday", "Sunday", "Friday morning", "Monday"], answer: "Saturday", explanation: "The KO identifies Saturday as Shabbat." },
  { id: "y8rpe-jewish-life-mcq-3", sectionIds: ["y8rpe-jewish-life-law"], type: "multiple-choice", marks: 1, prompt: "What is food suitable for Jewish consumption called?", options: ["Kosher", "Chametz", "Matzah", "Seder"], answer: "Kosher", explanation: "Food suitable for consumption is called kosher." },
  { id: "y8rpe-jewish-life-mcq-4", sectionIds: ["y8rpe-jewish-life-law"], type: "multiple-choice", marks: 1, prompt: "Which feature is required for a fish to be kosher in the diagram?", options: ["Both fins and scales", "A shell", "Living in fresh water only", "Being a water mammal"], answer: "Both fins and scales", explanation: "The diagram says kosher fish have both fins and scales." },
  { id: "y8rpe-jewish-life-mcq-5", sectionIds: ["y8rpe-jewish-life-passover"], type: "multiple-choice", marks: 1, prompt: "What does Pesach commemorate?", options: ["The Exodus", "The creation of the world", "The building of the Temple", "The birth of Abraham"], answer: "The Exodus", explanation: "Pesach commemorates and remembers the Exodus story." },
  { id: "y8rpe-jewish-life-mcq-6", sectionIds: ["y8rpe-jewish-life-passover"], type: "multiple-choice", marks: 1, prompt: "What is chametz?", options: ["Leavened bread", "Unleavened bread", "A boiled egg", "Bitter herbs"], answer: "Leavened bread", explanation: "Chametz is leavened bread." },
  { id: "y8rpe-jewish-life-mcq-7", sectionIds: ["y8rpe-jewish-life-passover"], type: "multiple-choice", marks: 1, prompt: "Which Seder food is a paste of apples, nuts and wine?", options: ["Charoset", "Maror", "Karpas", "Beitzah"], answer: "Charoset", explanation: "Charoset is the paste made from apples, nuts and wine." },
  { id: "y8rpe-jewish-life-mcq-8", sectionIds: ["y8rpe-jewish-life-passover"], type: "multiple-choice", marks: 1, prompt: "Which Seder food is a roasted lamb shank bone?", options: ["Zeroa", "Matzah", "Maror", "Karpas"], answer: "Zeroa", explanation: "Zeroa is a roasted lamb shank bone." },
  { id: "y8rpe-jewish-life-mcq-9", sectionIds: ["y8rpe-jewish-life-bar-bat-mitzvah"], type: "multiple-choice", marks: 1, prompt: "What type of ceremony is a Bar or Bat Mitzvah?", options: ["A coming-of-age ceremony", "A weekly meal", "A food-law ceremony", "A pilgrimage"], answer: "A coming-of-age ceremony", explanation: "Bar and Bat Mitzvah are coming-of-age ceremonies." },
  { id: "y8rpe-jewish-life-mcq-10", sectionIds: ["y8rpe-jewish-life-bar-bat-mitzvah"], type: "multiple-choice", marks: 1, prompt: "In which language is the chosen Torah section learned?", options: ["Hebrew", "Latin", "Greek", "Arabic"], answer: "Hebrew", explanation: "The young person learns to read the section in Hebrew." },
  { id: "y8rpe-jewish-life-mcq-11", sectionIds: ["y8rpe-jewish-life-bar-bat-mitzvah"], type: "multiple-choice", marks: 1, prompt: "What responsibility follows the ceremony?", options: ["Living according to the Mitzvot", "Avoiding the Torah", "Leaving the community", "Becoming a prophet"], answer: "Living according to the Mitzvot", explanation: "The young person is considered ready to take responsibility for living according to the Mitzvot." },
  { id: "y8rpe-jewish-life-mcq-12", sectionIds: ["y8rpe-jewish-life-bar-bat-mitzvah"], type: "multiple-choice", marks: 1, prompt: "What does twinning a Bar/Bat Mitzvah remember?", options: ["A child who died before celebrating their own coming of age", "A pair of twins in the same family", "Moses and Aaron", "Two sections of the Torah"], answer: "A child who died before celebrating their own coming of age", explanation: "The KO explains that some young people twin their ceremony with such a child." },
  { id: "y8rpe-jewish-life-mcq-13", sectionIds: ["y8rpe-jewish-life-key-terms"], type: "multiple-choice", marks: 1, prompt: "Which term means all-powerful?", options: ["Omnipotence", "Omniscience", "Omnipresence", "Omnibenevolence"], answer: "Omnipotence", explanation: "Omnipotence means all-powerful." },
  { id: "y8rpe-jewish-life-mcq-14", sectionIds: ["y8rpe-jewish-life-key-terms"], type: "multiple-choice", marks: 1, prompt: "Which term means all-loving?", options: ["Omnibenevolence", "Omnipresence", "Omniscience", "Omnipotence"], answer: "Omnibenevolence", explanation: "Omnibenevolence means all-loving." },
  { id: "y8rpe-jewish-life-mcq-15", sectionIds: ["y8rpe-jewish-life-key-terms"], type: "multiple-choice", marks: 1, prompt: "What is a prophet?", options: ["A messenger from God to humans", "A Jewish food law", "A place in Mecca", "A successor after Muhammad"], answer: "A messenger from God to humans", explanation: "The KO defines a prophet as a messenger from God to humans." },
  { id: "y8rpe-jewish-life-mcq-16", sectionIds: ["y8rpe-jewish-life-key-terms"], type: "multiple-choice", marks: 1, prompt: "Who are called People of the Book in the definition?", options: ["Jews and Christians", "Only prophets", "Only caliphs", "Greeks and Romans"], answer: "Jews and Christians", explanation: "People of the Book is the Islamic term for Jews and Christians." },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as MultipleChoiceQuestion[];

const interactiveQuestions: WrittenQuestion[] = [
  {
    id: "y8rpe-jewish-life-interactive-law", sectionIds: ["y8rpe-jewish-life-law"], type: "short-answer", format: "matching", marks: 4,
    prompt: "Match each term or practice to its meaning.", markingPoints: ["All four items matched correctly"], guidance: "Use the definitions and practices from The Law.",
    interaction: { kind: "matching", left: ["Mitzvot", "Shabbat", "Kashrut", "Kosher"], right: ["613 commandments", "A day kept separate for worship", "Jewish food laws", "Food suitable for consumption"], answers: [0, 1, 2, 3] },
  },
  {
    id: "y8rpe-jewish-life-interactive-kosher", sectionIds: ["y8rpe-jewish-life-law"], type: "short-answer", format: "classification", marks: 8,
    prompt: "Classify each item using the kosher diagram.", markingPoints: ["All eight items classified correctly"], guidance: "Use only the classifications shown in the KO diagram.",
    interaction: { kind: "classification", rows: ["Cow", "Rabbit", "Chicken", "Eagle", "Salmon", "Crustaceans", "Chuck", "Meat and dairy together"], categories: ["Kosher", "Not kosher"], answers: ["Kosher", "Not kosher", "Kosher", "Not kosher", "Kosher", "Not kosher", "Kosher", "Not kosher"] },
  },
  {
    id: "y8rpe-jewish-life-interactive-pesach-order", sectionIds: ["y8rpe-jewish-life-passover"], type: "short-answer", format: "ordering", marks: 4,
    prompt: "Put these Pesach ideas into a logical sequence from preparation to the meal.", markingPoints: ["All four steps ordered correctly"], guidance: "Begin before the festival and finish with the symbolic foods.",
    interaction: { kind: "ordering", items: ["Eat the five symbolic Seder foods", "Remember the Exodus", "Remove chametz from the home", "Eat matzah during Pesach"], answer: ["Remember the Exodus", "Remove chametz from the home", "Eat matzah during Pesach", "Eat the five symbolic Seder foods"] },
  },
  {
    id: "y8rpe-jewish-life-interactive-seder", sectionIds: ["y8rpe-jewish-life-passover"], type: "short-answer", format: "matching", marks: 5,
    prompt: "Match each Seder food to its description.", markingPoints: ["All five foods matched correctly"], guidance: "Use the five foods named in the KO.",
    interaction: { kind: "matching", left: ["Maror", "Charoset", "Karpas", "Zeroa", "Beitzah"], right: ["Bitter herbs and vegetables", "Apple, nut and wine paste", "Green leaves dipped in salt water", "Roasted lamb shank bone", "Boiled egg"], answers: [0, 1, 2, 3, 4] },
  },
  {
    id: "y8rpe-jewish-life-interactive-bar-bat", sectionIds: ["y8rpe-jewish-life-bar-bat-mitzvah"], type: "short-answer", format: "ordering", marks: 5,
    prompt: "Order the preparation, ceremony and responsibility described in the KO.", markingPoints: ["All five stages ordered correctly"], guidance: "Preparation comes before the synagogue ceremony and its new responsibilities.",
    interaction: { kind: "ordering", items: ["Become responsible for living according to the Mitzvot", "Choose a Torah section", "Deliver the speech to the community", "Learn to read the section in Hebrew", "Read the Torah section in the synagogue"], answer: ["Choose a Torah section", "Learn to read the section in Hebrew", "Read the Torah section in the synagogue", "Deliver the speech to the community", "Become responsible for living according to the Mitzvot"] },
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as WrittenQuestion[];

const longQuestions: WrittenQuestion[] = [
  {
    id: "y8rpe-jewish-life-long-1", sectionIds: ["y8rpe-jewish-life-law"], type: "long-answer", marks: 6,
    prompt: "Explain how the Mitzvot, Shabbat and Kashrut can guide Jewish life.",
    markingPoints: ["Explains that Mitzvot refers to 613 commandments revealed as part of the Mosaic Covenant.", "Explains that the Mitzvot include religious and everyday rules.", "Explains that Shabbat is Saturday and is kept separate for worship.", "Gives relevant Shabbat practices.", "Explains that Kashrut determines what may and may not be eaten.", "Uses at least one accurate kosher example or criterion."],
    guidance: "Organise the answer by Mitzvot, Shabbat and Kashrut and use accurate KO examples.",
  },
  {
    id: "y8rpe-jewish-life-long-2", sectionIds: ["y8rpe-jewish-life-passover"], type: "long-answer", marks: 6,
    prompt: "Explain how Pesach practices remember the Exodus story.",
    markingPoints: ["States that Pesach commemorates the Exodus.", "Explains the removal of chametz.", "Links chametz to the Israelites leaving before bread rose.", "Explains that matzah is unleavened bread eaten during Pesach.", "Identifies the Seder as the special meal.", "Accurately explains at least two foods on the Seder plate."],
    guidance: "Make clear links between each practice and what is being remembered.",
  },
  {
    id: "y8rpe-jewish-life-long-3", sectionIds: ["y8rpe-jewish-life-bar-bat-mitzvah"], type: "long-answer", marks: 6,
    prompt: "Explain how a Bar or Bat Mitzvah is prepared for and why it is important.",
    markingPoints: ["Identifies it as a coming-of-age ceremony for young Jewish people aged 12 to 13.", "Explains choosing a Torah section.", "Explains learning to read it in Hebrew.", "Explains preparing and delivering a speech.", "Explains commitment and responsibility for living according to the Mitzvot.", "Explains becoming an adult member of the Jewish community."],
    guidance: "Cover both preparation and the meaning of the ceremony.",
  },
  {
    id: "y8rpe-jewish-life-long-4", sectionIds: ["y8rpe-jewish-life-key-terms"], type: "long-answer", marks: 6,
    prompt: "Explain how six Key Terms 2 ideas connect with Abrahamic religions.",
    markingPoints: ["Accurately explains one Jewish law or covenant term.", "Accurately explains a second Jewish law or covenant term.", "Accurately explains one attribute of God.", "Accurately explains a second attribute of God.", "Accurately explains one Islamic term.", "Makes accurate connections between the chosen terms and Judaism, Christianity or Islam."],
    guidance: "Choose six relevant terms and keep every definition faithful to the KO.",
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as WrittenQuestion[];

const questions: KnowledgeQuestion[] = [
  ...multipleChoiceQuestions,
  ...sourceCoverageQuestions,
  ...interactiveQuestions,
  ...longQuestions,
];

export const year8RpeHowDoJewishPeopleLive: KnowledgeOrganiser = {
  id: "year8-rpe-how-do-jewish-people-live",
  year: 8,
  subject: "RPE",
  term: "Autumn",
  chapter: 2,
  title: "How do Jewish people live?",
  introduction: "Explore how the Mitzvot, Shabbat, Kashrut, Pesach and Bar/Bat Mitzvah shape Jewish belief, practice and community life.",
  sections,
  flashcards,
  questions,
};
