import type {
  KnowledgeFlashcard,
  KnowledgeOrganiser,
  KnowledgeQuestion,
  KnowledgeSection,
  MultipleChoiceQuestion,
  WrittenQuestion,
} from "./types";

const KO_SOURCE = "Year 8 Design Technology KO, Lighting Solutions pages";

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
    id: "y8dt-lighting-design-context",
    title: "Design Context and Design Requirements",
    context: "Lighting solutions · identifying a problem and writing design criteria",
    summary: "Designers investigate a context, identify a problem and use clear criteria to make a safe, useful and suitable lighting product.",
    colour: "#65a30d",
    sourceRef: `${KO_SOURCE}, page 1: Looking for problems to solve in a context`,
    facts: [
      { question: "Why do designers use a context when looking for a problem to solve?", answer: "A context helps designers explore possible problems, identify who experiences them and understand why a product is needed." },
      { question: "What should a designer decide under the heading 'What'?", answer: "The designer should decide what sort of light could be made and list places where it could help, such as a desk or bedside table." },
      { question: "Which questions should be considered when deciding a product's aesthetics?", answer: "Consider the design inspiration, colour scheme, decoration and shape." },
      { question: "What should be considered about the target market?", answer: "Identify who the product is for and explain how the design will meet that user's needs." },
      { question: "Which safety questions should be considered for a lighting product?", answer: "Consider how the product will be safe for the user, where the electronics will be placed and how to work safely while making it." },
      { question: "Which environmental questions should be considered?", answer: "Consider the product's environmental impact, whether materials can be recycled or are recycled, and where the materials come from." },
      { question: "What should a designer consider when selecting a material?", answer: "The designer should identify the required material properties and explain why those properties are needed." },
      { question: "Which two questions should be considered about cost?", answer: "Consider how much the design will cost to make and how much the target market might pay." },
      { question: "What should be considered under manufacture?", answer: "Consider which tools and equipment will be needed to make the product." },
    ],
    terms: [
      { term: "context", definition: "A theme that places a problem in a particular situation." },
      { term: "target market", definition: "The group of people a product is designed and marketed for." },
      { term: "aesthetics", definition: "The appearance of a product, including its shape, colour, style and decoration." },
      { term: "design criteria", definition: "The requirements that a successful design should meet." },
    ],
  },
  {
    id: "y8dt-lighting-communicating-ideas",
    title: "Communicating Design Ideas",
    context: "Crating, isometric drawing, one-point perspective, two-point perspective and development modelling",
    summary: "Designers communicate three-dimensional ideas using recognised drawing and modelling methods.",
    colour: "#4d7c0f",
    sourceRef: `${KO_SOURCE}, page 1: Ways to communicate design ideas and keyword definitions`,
    facts: [
      { question: "How is crating used to create an isometric drawing?", answer: "Isometric cubes are drawn around the object and the object is drawn within the crates to keep everything in line." },
      { question: "How is one-point perspective used?", answer: "A simple shape is drawn with one vanishing point on the horizon, and receding lines go back to that point." },
      { question: "How is two-point perspective used?", answer: "Two vanishing points are placed on the horizon and the receding lines go back to those two points." },
      { question: "What is the purpose of development modelling?", answer: "Development modelling creates a model of a product so that the design can be tested." },
      { question: "Which angles are used in an isometric drawing?", answer: "An isometric drawing uses 30-degree angles to show three sides of an object at the correct dimensions." },
    ],
    terms: [
      { term: "isometric", definition: "A three-dimensional drawing method using 30-degree angles to show three sides of an object at the correct dimensions." },
      { term: "crating", definition: "Using cubes and cuboids to rough out a shape when drawing in isometric." },
      { term: "one-point perspective", definition: "A three-dimensional drawing technique that uses one vanishing point on the horizon." },
      { term: "two-point perspective", definition: "A three-dimensional drawing technique that uses two vanishing points on the horizon." },
      { term: "development modelling", definition: "Creating a model of a product so that it can be tested." },
      { term: "vanishing point", definition: "A point on the horizon towards which receding lines appear to converge in a perspective drawing." },
    ],
  },
  {
    id: "y8dt-lighting-polymers",
    title: "Polymers and Sustainability",
    context: "Oil, fractional distillation, polymerisation, polymer categories and recycling",
    summary: "Most polymers begin as crude oil, and their properties determine how they can be formed, reused and recycled.",
    colour: "#3f6212",
    sourceRef: `${KO_SOURCE}, page 2: How polymers are made and polymer categories`,
    facts: [
      { question: "What raw material are most polymers made from?", answer: "Most polymers are made from oil." },
      { question: "Why is crude oil described as a finite resource?", answer: "It is taken from the ground and will eventually run out." },
      { question: "Which process separates crude oil into useful fractions?", answer: "Fractional distillation separates crude oil into useful fractions." },
      { question: "Which crude-oil fraction is used to make many plastics?", answer: "Naphtha is used to make many plastics." },
      { question: "What is polymerisation?", answer: "Polymerisation is the process of turning the chemical feedstock from crude oil into polymers." },
      { question: "How do thermoforming polymers behave when heated?", answer: "They soften when heated and can be reshaped repeatedly." },
      { question: "Why are thermoforming polymers common in schools?", answer: "They can be heated and reshaped, making them practical for school projects, and they can be recycled." },
      { question: "How do thermosetting polymers behave after they have been set by heat?", answer: "They keep their shape and cannot be reheated and reshaped." },
      { question: "Which important properties do thermosetting polymers have?", answer: "They are extremely strong and durable." },
      { question: "What do plastic recycling codes help people identify?", answer: "They identify the type of polymer so it can be sorted and recycled correctly where facilities accept it." },
    ],
    terms: [
      { term: "finite resource", definition: "A resource that is used faster than it is replaced and will eventually run out." },
      { term: "fractional distillation", definition: "The process used to separate crude oil into useful fractions." },
      { term: "naphtha", definition: "A fraction of crude oil used as a feedstock for making many plastics." },
      { term: "polymerisation", definition: "The process that joins small chemical units to make polymer chains." },
      { term: "thermoforming polymer", definition: "A polymer that softens when heated and can be reshaped repeatedly." },
      { term: "thermosetting polymer", definition: "A polymer that is set by heat and cannot be reheated and reshaped." },
    ],
  },
  {
    id: "y8dt-lighting-joining-manufacturing",
    title: "Joining and Manufacturing",
    context: "Wood joints, mechanical fasteners, adhesives and soldering",
    summary: "The joining method must suit the materials, product and required permanence, and soldering must be completed safely and accurately.",
    colour: "#65a30d",
    sourceRef: `${KO_SOURCE}, page 2: Ways to join your lighting solution together and soldering`,
    facts: [
      { question: "What is a comb joint used for?", answer: "A comb joint uses equally spaced sections to join flat pieces, and it is used for carcass construction." },
      { question: "What is a dowel joint used for?", answer: "A dowel joint uses dowels to link two pieces of wood and is used in frames and carcasses." },
      { question: "How is a mitre joint formed?", answer: "The joint is cut at an angle; the pieces are usually cut at 45 degrees to make a right-angle frame joint." },
      { question: "What are plastic push rivets used for?", answer: "Plastic push rivets hold thin sheet material together." },
      { question: "What are screws used for?", answer: "Screws join materials together and can usually be removed later." },
      { question: "What is PVA glue used for?", answer: "PVA glue is used to make a permanent joint, especially between suitable porous materials such as wood." },
      { question: "What is soldering?", answer: "Soldering joins electrical components on a circuit board by melting solder." },
      { question: "What is the correct basic soldering sequence?", answer: "Heat the wire and connection, feed in solder so it melts, remove the solder, then remove the soldering iron." },
      { question: "What must be checked after soldering?", answer: "Check that the joint is secure and that solder has not joined separate connections and created a short circuit." },
    ],
    terms: [
      { term: "soldering", definition: "Joining electrical components on a circuit board by melting solder." },
      { term: "comb joint", definition: "A joint with equally spaced interlocking sections, commonly used to join flat pieces in carcass construction." },
      { term: "dowel joint", definition: "A joint that uses wooden dowels to connect two pieces of wood." },
      { term: "mitre joint", definition: "A joint made from angled edges, usually two 45-degree cuts forming a right angle." },
      { term: "PVA glue", definition: "An adhesive commonly used to make permanent joints in wood and other porous materials." },
      { term: "short circuit", definition: "An unintended low-resistance connection that allows current to bypass the intended components." },
    ],
  },
  {
    id: "y8dt-lighting-electrical-circuits",
    title: "Electrical Components and Circuit Diagrams",
    context: "Components, standard symbols, connections and current flow",
    summary: "Circuit diagrams use standard symbols and clear straight connections to communicate how electrical components are connected.",
    colour: "#4d7c0f",
    sourceRef: `${KO_SOURCE}, page 2: Electrical components and their symbols and circuit diagrams`,
    facts: [
      { question: "Which electrical components are shown on the organiser?", answer: "The organiser shows a wire, cell, battery, motor, bell, lamp, LED, switch off, switch on and resistor." },
      { question: "Why are standard symbols used in circuit diagrams?", answer: "Standard symbols make the components clear and allow circuit diagrams to be read consistently." },
      { question: "How should components be joined in a circuit diagram?", answer: "They should be joined with clear, straight lines." },
      { question: "What should a circuit diagram show in addition to the components?", answer: "It should show how electricity flows through the circuit." },
      { question: "In which direction does conventional current flow?", answer: "Conventional current flows from the positive terminal to the negative terminal." },
      { question: "In which direction do electrons flow?", answer: "Electrons flow from the negative terminal to the positive terminal, opposite to conventional current." },
      { question: "What is electrical current?", answer: "Electrical current is the flow of electric charge." },
      { question: "What is a circuit board?", answer: "A circuit board is made from insulating material such as epoxy resin and has copper tracks that allow components to be connected." },
      { question: "Which parts are identified in the organiser's soldering diagram?", answer: "The diagram identifies the soldering iron, soldering-iron tip, solder, circuit board, copper pad and LED." },
    ],
    terms: [
      { term: "electrical current", definition: "The flow of electric charge through a circuit." },
      { term: "circuit board", definition: "An insulating board with conductive copper tracks used to connect electrical components." },
      { term: "conventional current", definition: "The agreed current direction from the positive terminal to the negative terminal." },
      { term: "electron flow", definition: "The movement of electrons from the negative terminal to the positive terminal." },
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

const flashcards: KnowledgeFlashcard[] = sourceSections.flatMap((section, sectionIndex) => [
  ...section.facts.map((fact, factIndex) => ({
    id: `y8dt-lighting-s${sectionIndex + 1}-fact-${factIndex + 1}`,
    sectionId: section.id,
    front: fact.question,
    back: fact.answer,
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: section.sourceRef,
  })),
  ...section.terms.map((term, termIndex) => ({
    id: `y8dt-lighting-s${sectionIndex + 1}-term-${termIndex + 1}`,
    sectionId: section.id,
    front: `Define ${term.term}.`,
    back: term.definition,
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: section.sourceRef,
  })),
]);

const sourceCoverageQuestions: WrittenQuestion[] = sourceSections.flatMap((section, sectionIndex) => [
  ...section.facts.map((fact, factIndex) => ({
    id: `y8dt-lighting-s${sectionIndex + 1}-short-${factIndex + 1}`,
    sectionIds: [section.id],
    type: "short-answer" as const,
    prompt: fact.question,
    marks: 1,
    markingPoints: [fact.answer],
    guidance: "State the precise Design Technology fact from the knowledge organiser.",
    sourceType: "generatedSupplement" as const,
    sourceRef: section.sourceRef,
  })),
  ...section.terms.map((term, termIndex) => ({
    id: `y8dt-lighting-s${sectionIndex + 1}-term-question-${termIndex + 1}`,
    sectionIds: [section.id],
    type: "short-answer" as const,
    prompt: `Define ${term.term}.`,
    marks: 1,
    markingPoints: [term.definition],
    guidance: "Give the Design Technology meaning of the term.",
    sourceType: "generatedSupplement" as const,
    sourceRef: section.sourceRef,
  })),
]);

const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  {
    id: "y8dt-lighting-mcq-1", sectionIds: ["y8dt-lighting-design-context"], type: "multiple-choice", marks: 1,
    prompt: "Which design consideration identifies the group of people a product is intended for?",
    options: ["Target market", "Manufacture", "Cost", "Aesthetics"], answer: "Target market",
    explanation: "The target market is the group of people for whom the product is designed.",
  },
  {
    id: "y8dt-lighting-mcq-2", sectionIds: ["y8dt-lighting-communicating-ideas"], type: "multiple-choice", marks: 1,
    prompt: "Which drawing method uses 30-degree angles to show three sides of an object?",
    options: ["Isometric", "One-point perspective", "Two-point perspective", "Development modelling"], answer: "Isometric",
    explanation: "Isometric drawings use 30-degree angles to show three sides at the correct dimensions.",
  },
  {
    id: "y8dt-lighting-mcq-3", sectionIds: ["y8dt-lighting-polymers"], type: "multiple-choice", marks: 1,
    prompt: "Which crude-oil fraction is used as a feedstock for many plastics?",
    options: ["Naphtha", "Bitumen", "Diesel", "Lubricating oil"], answer: "Naphtha",
    explanation: "The organiser identifies naphtha as the fraction used to make many plastics.",
  },
  {
    id: "y8dt-lighting-mcq-4", sectionIds: ["y8dt-lighting-polymers"], type: "multiple-choice", marks: 1,
    prompt: "Which statement describes a thermoforming polymer?",
    options: ["It softens when heated and can be reshaped", "It cannot be reshaped after setting", "It is always made from wood", "It contains no polymer chains"],
    answer: "It softens when heated and can be reshaped",
    explanation: "Thermoforming polymers soften when heated and can be reshaped repeatedly.",
  },
  {
    id: "y8dt-lighting-mcq-5", sectionIds: ["y8dt-lighting-joining-manufacturing"], type: "multiple-choice", marks: 1,
    prompt: "Which joint commonly uses two 45-degree cuts to form a right angle?",
    options: ["Mitre joint", "Comb joint", "Dowel joint", "Rivet"], answer: "Mitre joint",
    explanation: "A mitre joint commonly uses two 45-degree cuts to form a 90-degree corner.",
  },
  {
    id: "y8dt-lighting-mcq-6", sectionIds: ["y8dt-lighting-electrical-circuits"], type: "multiple-choice", marks: 1,
    prompt: "In which direction does conventional current flow?",
    options: ["Positive to negative", "Negative to positive", "From the lamp to both terminals", "It has no agreed direction"], answer: "Positive to negative",
    explanation: "Conventional current is shown from the positive terminal to the negative terminal.",
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as MultipleChoiceQuestion[];

const interactiveQuestions: WrittenQuestion[] = [
  {
    id: "y8dt-lighting-interactive-design-criteria", sectionIds: ["y8dt-lighting-design-context"], type: "short-answer", format: "matching", marks: 4,
    prompt: "Match each design question to the correct design consideration.",
    markingPoints: ["Aesthetics", "Target market", "Environment", "Manufacture"], guidance: "Match all four questions.",
    interaction: { kind: "matching", left: ["What should the product look like?", "Who will use the product?", "Can recycled materials be used?", "Which tools and equipment are needed?"], right: ["Aesthetics", "Target market", "Environment", "Manufacture"], answers: [0, 1, 2, 3] },
  },
  {
    id: "y8dt-lighting-interactive-drawing", sectionIds: ["y8dt-lighting-communicating-ideas"], type: "short-answer", format: "matching", marks: 4,
    prompt: "Match each communication method to its defining feature.",
    markingPoints: ["Isometric", "Crating", "One-point perspective", "Two-point perspective"], guidance: "Use the defining drawing feature for each method.",
    interaction: { kind: "matching", left: ["Uses 30-degree angles", "Uses cubes and cuboids to rough out a shape", "Uses one vanishing point", "Uses two vanishing points"], right: ["Isometric", "Crating", "One-point perspective", "Two-point perspective"], answers: [0, 1, 2, 3] },
  },
  {
    id: "y8dt-lighting-interactive-polymers", sectionIds: ["y8dt-lighting-polymers"], type: "short-answer", format: "classification", marks: 4,
    prompt: "Classify each statement as thermoforming or thermosetting.",
    markingPoints: ["All four statements classified correctly"], guidance: "Think about how each polymer behaves after heating.",
    interaction: { kind: "classification", rows: ["Softens when heated", "Can be reshaped repeatedly", "Cannot be reshaped after setting", "Extremely strong and durable"], categories: ["Thermoforming", "Thermosetting"], answers: ["Thermoforming", "Thermoforming", "Thermosetting", "Thermosetting"] },
  },
  {
    id: "y8dt-lighting-interactive-joining", sectionIds: ["y8dt-lighting-joining-manufacturing"], type: "short-answer", format: "matching", marks: 6,
    prompt: "Match each joining method to its use.",
    markingPoints: ["All six joining methods matched correctly"], guidance: "Use the material and required joint as clues.",
    interaction: { kind: "matching", left: ["Comb joint", "Dowel joint", "Mitre joint", "Plastic push rivet", "Screw", "PVA glue"], right: ["Interlocking carcass joint", "Connects wood using dowels", "Angled frame joint", "Holds thin sheet material", "Removable mechanical fixing", "Permanent adhesive joint"], answers: [0, 1, 2, 3, 4, 5] },
  },
  {
    id: "y8dt-lighting-interactive-soldering", sectionIds: ["y8dt-lighting-joining-manufacturing"], type: "short-answer", format: "ordering", marks: 4,
    prompt: "Put the basic soldering steps into the correct order.",
    markingPoints: ["All four steps placed in the safe sequence"], guidance: "Heat the joint before feeding in solder, and remove the iron last.",
    interaction: { kind: "ordering", items: ["Remove the soldering iron", "Feed solder into the heated joint", "Heat the wire and connection", "Remove the solder"], answer: ["Heat the wire and connection", "Feed solder into the heated joint", "Remove the solder", "Remove the soldering iron"] },
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as WrittenQuestion[];

const longQuestions: WrittenQuestion[] = [
  {
    id: "y8dt-lighting-long-1", sectionIds: ["y8dt-lighting-design-context"], type: "long-answer", marks: 6,
    prompt: "Explain how a designer could use six different design considerations when developing a lighting product for a bedside table.",
    markingPoints: [
      "Identifies the target user and links the design to the user's needs.",
      "Explains suitable aesthetic choices such as shape, colour or decoration.",
      "Explains how the electrical parts and making process will be safe.",
      "Links a material property to the product's function.",
      "Considers environmental impact or recycled and recyclable materials.",
      "Considers cost and a suitable manufacturing method or tools.",
    ],
    guidance: "Use a clear choice-and-reason structure for each consideration.",
  },
  {
    id: "y8dt-lighting-long-2", sectionIds: ["y8dt-lighting-polymers"], type: "long-answer", marks: 6,
    prompt: "Explain how crude oil becomes a polymer product and compare thermoforming and thermosetting polymers.",
    markingPoints: [
      "States that most polymers begin with crude oil.",
      "Explains that crude oil is separated by fractional distillation.",
      "Identifies naphtha as a useful feedstock.",
      "Explains polymerisation.",
      "Explains that thermoforming polymers soften and can be reshaped when heated.",
      "Explains that thermosetting polymers cannot be reshaped after setting and are strong and durable.",
    ],
    guidance: "Write the production sequence first, then make a direct comparison.",
  },
  {
    id: "y8dt-lighting-long-3", sectionIds: ["y8dt-lighting-joining-manufacturing"], type: "long-answer", marks: 5,
    prompt: "Describe a safe and effective method for soldering an LED connection to a circuit board and explain the final checks.",
    markingPoints: [
      "Places the component securely and heats the wire and copper pad or connection.",
      "Feeds solder into the heated joint so that it melts around the connection.",
      "Removes the solder before removing the soldering iron.",
      "Works safely around the hot soldering iron and tip.",
      "Checks that the joint is secure and that no solder bridge creates a short circuit.",
    ],
    guidance: "Give the steps in order and include both heat safety and an electrical-quality check.",
  },
  {
    id: "y8dt-lighting-long-4", sectionIds: ["y8dt-lighting-electrical-circuits"], type: "long-answer", marks: 4,
    prompt: "Explain how a clear circuit diagram communicates a simple lighting circuit.",
    markingPoints: [
      "Uses the correct standard symbol for each component.",
      "Connects the components with clear straight lines.",
      "Shows a complete intended path through the components.",
      "Correctly distinguishes conventional current from electron flow when direction is discussed.",
    ],
    guidance: "Refer to symbols, connections and current direction.",
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as WrittenQuestion[];

const questions: KnowledgeQuestion[] = [
  ...multipleChoiceQuestions,
  ...sourceCoverageQuestions,
  ...interactiveQuestions,
  ...longQuestions,
];

export const year8DesignTechnologyLightingSolutions: KnowledgeOrganiser = {
  id: "year8-design-technology-lighting-solutions",
  year: 8,
  subject: "Design Technology",
  term: "Autumn",
  chapter: 1,
  title: "Lighting Solutions",
  introduction: "Develop lighting ideas by investigating a design context, communicating designs, selecting polymers and joining methods, and building clear electrical circuits.",
  sections,
  flashcards,
  questions,
};
