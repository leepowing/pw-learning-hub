import type {
  KnowledgeFlashcard,
  KnowledgeOrganiser,
  KnowledgeQuestion,
  KnowledgeSection,
  MultipleChoiceQuestion,
  WrittenQuestion,
} from "./types";

const KO_SOURCE = "Year 8 Design Technology KO, Global Goals and Marble Run pages";

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
    id: "y8dt-marble-global-goals-problem-solving",
    title: "Global Goals and Problem Solving",
    context: "The 17 United Nations Global Goals, sustainability and investigating a design problem",
    summary: "Designers investigate a problem in detail and balance the needs of people, the planet and financial viability before choosing a solution.",
    colour: "#65a30d",
    sourceRef: `${KO_SOURCE}, page 1: Global Goals and Problem Solving`,
    facts: [
      { question: "What are the 17 Global Goals?", answer: "They are aims agreed by the United Nations that every country needs to improve to help ensure a sustainable planet." },
      { question: "What are the names of the 17 Global Goals shown on the organiser?", answer: "No Poverty; Zero Hunger; Good Health and Well-being; Quality Education; Gender Equality; Clean Water and Sanitation; Affordable and Clean Energy; Decent Work and Economic Growth; Industry, Innovation and Infrastructure; Reduced Inequalities; Sustainable Cities and Communities; Responsible Consumption and Production; Climate Action; Life Below Water; Life on Land; Peace, Justice and Strong Institutions; and Partnerships for the Goals." },
      { question: "Which three areas should a sustainable design solution consider?", answer: "It should consider the people it affects, how it affects the planet and whether it is financially viable: People, Planet and Profit." },
      { question: "Why should designers investigate a problem in more detail?", answer: "Investigating a problem in more detail helps designers think of suitable solutions instead of accepting a first answer that may not be right for the people involved." },
      { question: "What should designers ask about the people affected by a problem?", answer: "They should identify which people are affected and why they are affected." },
      { question: "What should designers ask about the required function?", answer: "They should identify what the product or solution needs to do." },
      { question: "What should designers ask about resources?", answer: "They should identify which resources are available." },
      { question: "What should designers ask about technology?", answer: "They should identify what technology is available to help solve the problem." },
      { question: "What should designers ask about money?", answer: "They should establish whether there is a budget." },
      { question: "What should designers ask about environmental impact?", answer: "They should consider how the product or solution will affect the environment." },
      { question: "What should designers ask about appearance?", answer: "They should consider what the product needs to look like." },
      { question: "What should designers ask about location?", answer: "They should identify where the product is needed." },
      { question: "What should designers ask about size?", answer: "They should identify the space available and the size the product needs to be." },
      { question: "What should designers ask about safety?", answer: "They should consider the safety of the product." },
      { question: "What should designers ask about interaction?", answer: "They should consider how humans will interact with the product." },
    ],
    terms: [
      { term: "Global Goals", definition: "A set of issues to improve sustainability across the world." },
      { term: "design thinking", definition: "Trying to solve problems by using the way designers look at a problem." },
    ],
  },
  {
    id: "y8dt-marble-anthropometrics-ergonomics",
    title: "Anthropometrics and Ergonomics",
    context: "Using human measurements and interaction needs to make products safe, comfortable and easy to use",
    summary: "Anthropometric data determines suitable sizes, while ergonomics considers how people understand, handle and use a product.",
    colour: "#4d7c0f",
    sourceRef: `${KO_SOURCE}, pages 1–2: Anthropometrics and Ergonomics`,
    facts: [
      { question: "Why do designers use anthropometric data?", answer: "Designers use anthropometric data to choose a suitable size for a product." },
      { question: "How is anthropometric data collected?", answer: "Human measurements are collected over time from people of different ages and in different countries because populations change." },
      { question: "Which percentile range is commonly used for product design?", answer: "Designers commonly use measurements from the 5th percentile to the 95th percentile." },
      { question: "What proportion of the population lies between the 5th and 95th percentiles?", answer: "The range covers about 90% of the population." },
      { question: "Why might a doorway be designed using a 95th-percentile measurement?", answer: "A 95th-percentile measurement allows most people, including larger users, to walk through the doorway." },
      { question: "Why might the bottom of a window use a 5th-percentile measurement?", answer: "A 5th-percentile measurement allows most people, including smaller users, to see through the window." },
      { question: "How does anthropometric data improve a product?", answer: "It helps make the product's size safe and comfortable for most people to use." },
      { question: "Why is ergonomics about more than a product's shape?", answer: "Ergonomics also makes a product easier and safer to use by considering the full interaction between the user and product." },
      { question: "How can colour improve ergonomics?", answer: "Colour can indicate which part of a product should or should not be held." },
      { question: "How can light improve ergonomics?", answer: "A light can tell the user whether a product is on or off." },
      { question: "How can sound improve ergonomics?", answer: "A sound can alert the user, such as the beep from a car parking sensor." },
      { question: "How can clear text improve ergonomics?", answer: "A clear font makes information easy to read, such as when filling a kettle to the correct level." },
      { question: "How do size and body fit improve ergonomics?", answer: "The right size and a shape that fits the body make a product comfortable and safe to use for longer periods." },
    ],
    terms: [
      { term: "anthropometrics", definition: "The measurements of humans, using many different measurements taken from people around the world." },
      { term: "ergonomics", definition: "How people interact with products, making them easier, more comfortable and safer to use." },
    ],
  },
  {
    id: "y8dt-marble-levers-motion",
    title: "Levers and Types of Motion",
    context: "Mechanical advantage, fulcrum–load–effort positions and four types of motion",
    summary: "Levers increase mechanical advantage, and mechanisms can produce linear, reciprocating, rotary or oscillating motion.",
    colour: "#3f6212",
    sourceRef: `${KO_SOURCE}, page 2: Levers and Types of Motion in mechanisms`,
    facts: [
      { question: "Why are levers used?", answer: "Levers increase mechanical advantage, allowing less effort to produce a greater output." },
      { question: "Which jobs can levers help people perform?", answer: "Levers can help people lift, move, grasp and squash objects." },
      { question: "Which three parts are identified in a lever?", answer: "The three parts are the fulcrum or pivot, the effort and the load." },
      { question: "How can FLE 123 identify the three classes of lever?", answer: "In a class 1 lever the fulcrum is in the middle, in class 2 the load is in the middle, and in class 3 the effort is in the middle." },
      { question: "What is linear motion?", answer: "Linear motion is motion in a straight line, such as a train moving on a track." },
      { question: "What is reciprocating motion?", answer: "Reciprocating motion is linear motion that goes back and forth, such as a piston in an internal-combustion engine." },
      { question: "What is rotary motion?", answer: "Rotary motion is circular motion, such as the hands of a clock or a wheel on an axle." },
      { question: "What is oscillating motion?", answer: "Oscillating motion is circular or arc motion that moves back and forth, such as a swing or pendulum." },
    ],
    terms: [
      { term: "fulcrum", definition: "The pivot on which a lever is balanced." },
      { term: "lever", definition: "A way of increasing mechanical advantage." },
      { term: "motion", definition: "A movement in a mechanism." },
      { term: "mechanical advantage", definition: "The increase in output force provided by a mechanism compared with the effort applied." },
    ],
  },
  {
    id: "y8dt-marble-future-technologies",
    title: "Future Technologies and Control",
    context: "Digital change, future design opportunities and input–processor–output systems",
    summary: "Designers consider how digital technology, AI, new materials and manufacturing methods may solve future problems.",
    colour: "#65a30d",
    sourceRef: `${KO_SOURCE}, pages 1 and 3: keyword definitions and Future technologies`,
    facts: [
      { question: "How has the digital revolution changed life over the last 50 years?", answer: "It has transformed how people live, work and relax." },
      { question: "What further change does the organiser predict?", answer: "Artificial intelligence is expected to create even more changes during the students' lifetime." },
      { question: "What is changing alongside digital technology?", answer: "New materials and new ways of manufacturing are also changing." },
      { question: "Why should designers think about future technology?", answer: "They should consider how it may change the world and help solve design problems." },
      { question: "What does an input do in a control system?", answer: "An input, such as a switch, keyboard or tablet, adds information to the system." },
      { question: "What does a processor do in a control system?", answer: "The processor receives information from the input, processes it and sends instructions or information to the output." },
      { question: "What is an output in a control system?", answer: "An output is the system's outcome, such as light, sound or movement." },
    ],
    terms: [
      { term: "future technologies", definition: "Technology that is being explored or is not yet available but may become possible." },
      { term: "input", definition: "A way to add information to a system, such as a switch, keyboard or tablet." },
      { term: "processor", definition: "The brain of a computer system that processes information from the input and sends it to the output." },
      { term: "output", definition: "The outcome from a system, such as light, sound or movement." },
    ],
  },
  {
    id: "y8dt-marble-smart-modern-materials",
    title: "Smart and Modern Materials",
    context: "Materials that respond to stimuli and examples developed within the last 100 years",
    summary: "Smart materials react to their environment, while modern materials are developed with properties that solve new design problems.",
    colour: "#4d7c0f",
    sourceRef: `${KO_SOURCE}, page 3: Smart and Modern Materials table`,
    facts: [
      { question: "How do smart materials behave?", answer: "Smart materials respond to their environment and can change when heat, light, pressure or water is applied or added." },
      { question: "What are modern materials?", answer: "Modern materials are new materials made within the last 100 years and created with different properties to work for people." },
      { question: "How does polymorph respond to hot water?", answer: "Polymorph becomes pliable in hot water, can be modelled and shaped, and solidifies again when it cools." },
      { question: "How does thermochromic pigment respond to heat?", answer: "Thermochromic pigment changes colour in response to heat and can be used in colour-changing mugs and baby-feeding spoons." },
      { question: "How does photochromic pigment respond to light?", answer: "Photochromic pigment changes opacity in response to light and can be used in sunglasses or windows that change in sunlight." },
      { question: "How does nitinol respond to hot water?", answer: "Nitinol can return to its original form in hot water and can be used for dental braces, greenhouse window openers and surgical stents." },
      { question: "What are interactive textiles?", answer: "Interactive textiles contain integrated or embedded electronic devices that interact or communicate with the wearer, for example in heart-rate or diabetes monitoring." },
      { question: "How does microencapsulation work?", answer: "When microcapsules are broken, they can release smells, oils, moisturisers or antiseptics; uses include antibacterial socks, perfume samples and scratch-and-sniff products." },
    ],
    terms: [
      { term: "smart material", definition: "A material that responds to a stimulus and returns to its earlier state after the stimulus is removed." },
      { term: "modern material", definition: "A material made within the last 100 years." },
      { term: "stimulus", definition: "A change in the environment that causes a smart material to respond." },
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
    id: `y8dt-marble-s${sectionIndex + 1}-fact-${factIndex + 1}`,
    sectionId: section.id,
    front: fact.question,
    back: fact.answer,
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: section.sourceRef,
  })),
  ...section.terms.map((term, termIndex) => ({
    id: `y8dt-marble-s${sectionIndex + 1}-term-${termIndex + 1}`,
    sectionId: section.id,
    front: `Define ${term.term}.`,
    back: term.definition,
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: section.sourceRef,
  })),
]);

const sourceCoverageQuestions: WrittenQuestion[] = sourceSections.flatMap((section, sectionIndex) => [
  ...section.facts.map((fact, factIndex) => ({
    id: `y8dt-marble-s${sectionIndex + 1}-short-${factIndex + 1}`,
    sectionIds: [section.id],
    type: "short-answer" as const,
    prompt: fact.question,
    marks: 1,
    markingPoints: [fact.answer],
    guidance: "State the precise Design Technology point from the knowledge organiser.",
    sourceType: "generatedSupplement" as const,
    sourceRef: section.sourceRef,
  })),
  ...section.terms.map((term, termIndex) => ({
    id: `y8dt-marble-s${sectionIndex + 1}-term-question-${termIndex + 1}`,
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
    id: "y8dt-marble-mcq-1", sectionIds: ["y8dt-marble-global-goals-problem-solving"], type: "multiple-choice", marks: 1,
    prompt: "Which three ideas help a designer remember the main sustainability considerations?",
    options: ["People, Planet and Profit", "Price, Product and Promotion", "Purpose, Process and Packaging", "Plan, Produce and Present"], answer: "People, Planet and Profit",
    explanation: "The organiser uses People, Planet and Profit to balance social, environmental and financial needs.",
  },
  {
    id: "y8dt-marble-mcq-2", sectionIds: ["y8dt-marble-anthropometrics-ergonomics"], type: "multiple-choice", marks: 1,
    prompt: "Which percentile range is commonly used to make a product suitable for most people?",
    options: ["5th to 95th", "0th to 50th", "25th to 75th", "50th to 100th"], answer: "5th to 95th",
    explanation: "The 5th-to-95th-percentile range includes about 90% of the population.",
  },
  {
    id: "y8dt-marble-mcq-3", sectionIds: ["y8dt-marble-levers-motion"], type: "multiple-choice", marks: 1,
    prompt: "In which class of lever is the load in the middle?",
    options: ["Class 2", "Class 1", "Class 3", "All three classes"], answer: "Class 2",
    explanation: "FLE 123 means fulcrum in class 1, load in class 2 and effort in class 3 is in the middle.",
  },
  {
    id: "y8dt-marble-mcq-4", sectionIds: ["y8dt-marble-levers-motion"], type: "multiple-choice", marks: 1,
    prompt: "Which type of motion describes a piston moving backwards and forwards?",
    options: ["Reciprocating", "Rotary", "Linear only", "Oscillating"], answer: "Reciprocating",
    explanation: "Reciprocating motion is back-and-forth linear motion.",
  },
  {
    id: "y8dt-marble-mcq-5", sectionIds: ["y8dt-marble-future-technologies"], type: "multiple-choice", marks: 1,
    prompt: "Which part of a control system processes information from the input?",
    options: ["Processor", "Output", "Fulcrum", "Load"], answer: "Processor",
    explanation: "The processor acts as the brain of the system and sends information to the output.",
  },
  {
    id: "y8dt-marble-mcq-6", sectionIds: ["y8dt-marble-smart-modern-materials"], type: "multiple-choice", marks: 1,
    prompt: "Which material changes colour in response to heat?",
    options: ["Thermochromic pigment", "Photochromic pigment", "Nitinol", "Polymorph"], answer: "Thermochromic pigment",
    explanation: "Thermochromic pigment changes colour when its temperature changes.",
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as MultipleChoiceQuestion[];

const interactiveQuestions: WrittenQuestion[] = [
  {
    id: "y8dt-marble-interactive-sustainability", sectionIds: ["y8dt-marble-global-goals-problem-solving"], type: "short-answer", format: "classification", marks: 6,
    prompt: "Classify each design consideration as People, Planet or Profit.",
    markingPoints: ["All six considerations classified correctly"], guidance: "Think about social, environmental and financial effects.",
    interaction: { kind: "classification", rows: ["User safety", "Comfort", "Recycled materials", "Environmental impact", "Budget", "Financial viability"], categories: ["People", "Planet", "Profit"], answers: ["People", "People", "Planet", "Planet", "Profit", "Profit"] },
  },
  {
    id: "y8dt-marble-interactive-lever-classes", sectionIds: ["y8dt-marble-levers-motion"], type: "short-answer", format: "matching", marks: 3,
    prompt: "Match each lever class to the part positioned in the middle.",
    markingPoints: ["All three lever classes matched correctly"], guidance: "Use the memory aid FLE 123.",
    interaction: { kind: "matching", left: ["Class 1", "Class 2", "Class 3"], right: ["Fulcrum", "Load", "Effort"], answers: [0, 1, 2] },
  },
  {
    id: "y8dt-marble-interactive-motion", sectionIds: ["y8dt-marble-levers-motion"], type: "short-answer", format: "matching", marks: 4,
    prompt: "Match each movement example to its type of motion.",
    markingPoints: ["All four motion types matched correctly"], guidance: "Identify the path and whether the movement reverses.",
    interaction: { kind: "matching", left: ["Train on a straight track", "Piston moving backwards and forwards", "Wheel turning on an axle", "Pendulum swinging through an arc"], right: ["Linear", "Reciprocating", "Rotary", "Oscillating"], answers: [0, 1, 2, 3] },
  },
  {
    id: "y8dt-marble-interactive-control", sectionIds: ["y8dt-marble-future-technologies"], type: "short-answer", format: "ordering", marks: 3,
    prompt: "Put the stages of a simple control system into the correct order.",
    markingPoints: ["Input, processor and output placed in order"], guidance: "Information enters, is processed and produces an outcome.",
    interaction: { kind: "ordering", items: ["Output", "Input", "Processor"], answer: ["Input", "Processor", "Output"] },
  },
  {
    id: "y8dt-marble-interactive-smart-materials", sectionIds: ["y8dt-marble-smart-modern-materials"], type: "short-answer", format: "matching", marks: 6,
    prompt: "Match each smart material to its response or application.",
    markingPoints: ["All six smart materials matched correctly"], guidance: "Use the stimulus and example application as clues.",
    interaction: { kind: "matching", left: ["Polymorph", "Thermochromic pigment", "Photochromic pigment", "Nitinol", "Interactive textiles", "Microencapsulation"], right: ["Becomes pliable in hot water", "Changes colour with heat", "Changes opacity with light", "Returns to its original form", "Embedded electronics communicate with the wearer", "Releases a substance when capsules break"], answers: [0, 1, 2, 3, 4, 5] },
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as WrittenQuestion[];

const longQuestions: WrittenQuestion[] = [
  {
    id: "y8dt-marble-long-1", sectionIds: ["y8dt-marble-global-goals-problem-solving"], type: "long-answer", marks: 6,
    prompt: "Explain how a designer could investigate a marble-run problem and develop a sustainable solution.",
    markingPoints: [
      "Identifies the people affected and their needs.",
      "Explains what the product must do and where it will be used.",
      "Considers available resources or technology.",
      "Considers size, appearance, interaction or safety.",
      "Explains an environmental or Planet consideration.",
      "Explains a budget, cost or Profit consideration.",
    ],
    guidance: "Use People, Planet and Profit, then link each design decision to the problem.",
  },
  {
    id: "y8dt-marble-long-2", sectionIds: ["y8dt-marble-anthropometrics-ergonomics"], type: "long-answer", marks: 6,
    prompt: "Explain how anthropometrics and ergonomics could make a product suitable for most users.",
    markingPoints: [
      "Explains that anthropometrics uses human measurements.",
      "Uses the 5th-to-95th-percentile range or explains that it covers about 90% of people.",
      "Selects a suitable percentile for a particular product dimension.",
      "Explains how size or shape can improve comfort and safety.",
      "Explains how colour, light, sound or clear text can communicate with the user.",
      "Links at least one ergonomic decision to easier or safer use.",
    ],
    guidance: "Make direct links between evidence about users and specific design decisions.",
  },
  {
    id: "y8dt-marble-long-3", sectionIds: ["y8dt-marble-levers-motion"], type: "long-answer", marks: 5,
    prompt: "Explain how a lever and a suitable type of motion could be used in a marble-run mechanism.",
    markingPoints: [
      "Explains that a lever can increase mechanical advantage.",
      "Identifies the fulcrum, effort and load.",
      "Correctly identifies a lever class from the middle component.",
      "Selects linear, reciprocating, rotary or oscillating motion.",
      "Explains how the selected motion would operate in the mechanism.",
    ],
    guidance: "Describe the parts and movement, then explain why they suit the intended action.",
  },
  {
    id: "y8dt-marble-long-4", sectionIds: ["y8dt-marble-future-technologies", "y8dt-marble-smart-modern-materials"], type: "long-answer", marks: 6,
    prompt: "Evaluate how a future technology and a smart material could improve a product.",
    markingPoints: [
      "Identifies a relevant future technology or digital development.",
      "Explains how it could help solve a design problem.",
      "Identifies a suitable smart or modern material.",
      "States the stimulus to which the selected material responds.",
      "Explains the material's response or changed property.",
      "Links the technology and material to a useful, safe or comfortable product outcome.",
    ],
    guidance: "Use one named material from the organiser and justify its application.",
  },
].map(question => ({ ...question, sourceType: "generatedSupplement" as const, sourceRef: KO_SOURCE })) as WrittenQuestion[];

const questions: KnowledgeQuestion[] = [
  ...multipleChoiceQuestions,
  ...sourceCoverageQuestions,
  ...interactiveQuestions,
  ...longQuestions,
];

export const year8DesignTechnologyGlobalGoalsMarbleRun: KnowledgeOrganiser = {
  id: "year8-design-technology-global-goals-marble-run",
  year: 8,
  subject: "Design Technology",
  term: "Autumn",
  chapter: 2,
  title: "Global Goals and Marble Run",
  introduction: "Use sustainable design thinking, anthropometrics, ergonomics, levers, motion and smart materials to develop thoughtful mechanisms and future-facing products.",
  sections,
  flashcards,
  questions,
};
