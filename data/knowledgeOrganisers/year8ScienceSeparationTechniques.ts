import type {
  KnowledgeFlashcard,
  KnowledgeOrganiser,
  KnowledgeQuestion,
  KnowledgeSection,
  MultipleChoiceQuestion,
  WrittenQuestion,
} from "./types";

const KO_SOURCE = "C2 Chapter 2: Separation techniques Knowledge Organiser (user-supplied image; registered on the site as Year 8 Science Chapter 4)";

const vocabularyDefinitions: Record<string, string> = {
  chromatography: "A method used to separate mixtures whose substances are soluble in the same solvent.",
  chromatogram: "The pattern produced when a solvent separates the different constituents of a mixture on chromatography paper.",
  compound: "A substance containing different elements or substances that are chemically bonded together.",
  condenser: "The part of a distillation apparatus that cools a gas so that it turns back into a liquid.",
  dissolve: "To mix into a solvent as particles break away and move among the solvent particles.",
  distillation: "A method that separates a solute and a solvent while keeping and collecting the solvent.",
  evaporation: "A method that separates a solute and a solvent while keeping the solute.",
  filtrate: "The liquid that passes through filter paper during filtration.",
  filtration: "A method used to separate an undissolved solid from a liquid.",
  "filter paper": "Paper with extremely small holes that allow liquid and small particles through but hold back larger solid particles.",
  "impure substance": "A mixture that melts over a range of temperatures rather than at one sharp melting point.",
  insoluble: "Unable to dissolve in a particular solvent.",
  mixture: "Different substances found together without being chemically bonded.",
  "pure substance": "A single substance with one sharp melting point.",
  residue: "The solid left behind in the filter paper during filtration.",
  saturated: "Describing a solution in which no more solute can dissolve in the solvent.",
  separate: "To divide the substances in a mixture from one another.",
  solvent: "The liquid that makes up most of a solution.",
  solute: "The substance added to a solvent that dissolves in it.",
  soluble: "Able to dissolve in a particular solvent.",
  solubility: "How much solute can dissolve in a certain volume of solvent.",
  solution: "A mixture made from a solvent and a dissolved solute.",
};

const sections: KnowledgeSection[] = [
  {
    id: "y8sci-separation-mixtures",
    title: "What Are Mixtures?",
    context: "Mixtures, compounds and melting-point evidence",
    summary: "A mixture contains substances that are not chemically bonded, so the substances keep their properties and can be separated.",
    colour: "#15803d",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: What are mixtures?`,
    keyFacts: [
      "A mixture contains different substances found together, but the substances are not chemically bonded.",
      "Because the substances in a mixture are not chemically bonded, they can be separated from each other.",
      "In a compound, different substances are chemically bonded together; in a mixture, they are not.",
      "The substances in a mixture keep their own properties and are easy to separate.",
      "The amounts of the different substances in a mixture can be changed.",
      "A pure substance has a single, sharp melting point.",
      "An impure substance is a mixture and melts over a range of temperatures.",
    ],
    keyTerms: ["mixture", "compound", "pure substance", "impure substance", "separate"],
  },
  {
    id: "y8sci-separation-solutions",
    title: "Solutions",
    context: "Solvents, solutes and dissolving",
    summary: "A solution is a mixture of a solvent and a dissolved solute.",
    colour: "#16a34a",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Solutions`,
    keyFacts: [
      "A solution is a type of mixture made from two parts: a solvent and a solute.",
      "The solvent is the liquid that makes up most of the solution.",
      "The solute is the substance added to the solvent that dissolves in it.",
      "The solute usually starts as a solid.",
      "When a solute dissolves, its particles break away from each other and move into the solvent.",
    ],
    keyTerms: ["solution", "solvent", "solute", "dissolve"],
  },
  {
    id: "y8sci-separation-solubility",
    title: "Solubility",
    context: "How much solute dissolves and what affects it",
    summary: "Solubility describes how much solute dissolves in a certain volume of solvent; it depends on both substances and often increases with temperature.",
    colour: "#166534",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Solubility`,
    keyFacts: [
      "The solubility of a solute is how much solute can dissolve in a certain volume of solvent.",
      "Different solutes have different solubilities in different solvents.",
      "Increasing the temperature often increases solubility.",
      "Soluble substances can dissolve; insoluble substances cannot dissolve.",
      "A mixture is saturated when so much solute has been added that no more can dissolve in the solvent.",
    ],
    keyTerms: ["solubility", "soluble", "insoluble", "saturated"],
  },
  {
    id: "y8sci-separation-filtration",
    title: "Filtration",
    context: "Separating an undissolved solid from a liquid",
    summary: "Filter paper lets the liquid and sufficiently small particles pass through while trapping larger undissolved solid particles.",
    colour: "#22c55e",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: How can we separate mixtures? — Filtration and apparatus diagram`,
    keyFacts: [
      "Filtration is used to separate a mixture of an undissolved solid and a liquid.",
      "Filter paper has extremely small holes in it.",
      "Particles in a liquid or solution are so tiny that they can fit through the holes in filter paper.",
      "Larger solid particles are too big to pass through the holes and are held back by the filter paper.",
      "The residue is the solid left behind in the filter paper.",
      "The filtrate is the liquid that passes through the filter paper.",
      "In the organiser diagram, sand is the residue retained in the filter paper.",
      "The filter paper sits inside a filter funnel.",
      "A clamp supports the filter funnel during filtration.",
      "A conical flask collects the filtrate; the organiser labels the filtrate as water.",
    ],
    keyTerms: ["filtration", "filter paper", "residue", "filtrate"],
  },
  {
    id: "y8sci-separation-distillation",
    title: "Distillation",
    context: "Separating a dissolved solute and solvent while keeping the solvent",
    summary: "The solvent is boiled into a gas, cooled in a condenser and collected again as a liquid.",
    colour: "#15803d",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: How can we separate mixtures? — Distillation and apparatus diagram`,
    keyFacts: [
      "Distillation separates a solute and a solvent while keeping the solvent.",
      "The solution is boiled so that the solvent turns into a gas.",
      "The gas is cooled in a condenser.",
      "Cooling changes the solvent gas back into a liquid that can be collected.",
      "In the organiser diagram, salty water is heated in a flask by a Bunsen burner.",
      "A thermometer measures the temperature near the top of the heated flask.",
      "Cooling water enters the lower end of the condenser and leaves from the upper end.",
      "The condenser slopes towards the receiving beaker.",
      "The organiser diagram shows pure water collected in the beaker.",
    ],
    keyTerms: ["distillation", "condenser"],
  },
  {
    id: "y8sci-separation-chromatography",
    title: "Chromatography",
    context: "Separating dissolved substances in the same solvent",
    summary: "As a solvent moves up chromatography paper, it separates the different constituents of a soluble mixture and produces a chromatogram.",
    colour: "#16a34a",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: How can we separate mixtures? — Chromatography and apparatus diagram`,
    keyFacts: [
      "Chromatography is used to separate mixtures that are soluble in the same solvent.",
      "A mixture such as ink is placed on chromatography paper.",
      "The chromatography paper is placed in a solvent.",
      "The solvent moves up the paper.",
      "The moving solvent separates the different constituents, or parts, of the ink.",
      "The separated pattern produced on the paper is called a chromatogram.",
      "In the organiser diagram, a pencil supports the chromatography paper across a beaker.",
      "The ink spot is above the water level so it is not submerged in the solvent.",
    ],
    keyTerms: ["chromatography", "chromatogram"],
  },
  {
    id: "y8sci-separation-evaporation",
    title: "Evaporation",
    context: "Separating a dissolved solute and solvent while keeping the solute",
    summary: "The solution is heated until the solvent evaporates, leaving the solute behind as a solid.",
    colour: "#166534",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: How can we separate mixtures? — Evaporation and apparatus diagram`,
    keyFacts: [
      "Evaporation separates a solute and a solvent while keeping the solute.",
      "The solution is heated and then left in an evaporating basin until all the solvent evaporates.",
      "The solute is left behind as a solid.",
      "The organiser diagram shows the mixture in an evaporating basin heated over a Bunsen burner.",
    ],
    keyTerms: ["evaporation"],
  },
];

const flashcardFactQuestions: Record<string, string[]> = {
  "y8sci-separation-mixtures": [
    "What is a mixture?",
    "Why can the substances in a mixture be separated?",
    "What is the bonding difference between a compound and a mixture?",
    "What happens to the properties of substances when they form a mixture?",
    "Can the amounts of substances in a mixture be changed?",
    "What melting-point result indicates a pure substance?",
    "How does an impure substance melt?",
  ],
  "y8sci-separation-solutions": [
    "Which two parts make up a solution?",
    "What is the solvent in a solution?",
    "What is the solute in a solution?",
    "What state does a solute usually start in?",
    "What happens to solute particles when the solute dissolves?",
  ],
  "y8sci-separation-solubility": [
    "What does solubility describe?",
    "Do all solutes have the same solubility in every solvent?",
    "What often happens to solubility when temperature increases?",
    "What is the difference between soluble and insoluble substances?",
    "When is a solution saturated?",
  ],
  "y8sci-separation-filtration": [
    "What type of mixture can filtration separate?",
    "What feature of filter paper allows filtration to work?",
    "Why can a liquid or solution pass through filter paper?",
    "Why are larger solid particles held back by filter paper?",
    "What is the residue in filtration?",
    "What is the filtrate in filtration?",
    "What is the residue in the organiser's sand-and-water example?",
    "Where is the filter paper placed during filtration?",
    "What supports the filter funnel during filtration?",
    "What collects the filtrate in the organiser's filtration apparatus?",
  ],
  "y8sci-separation-distillation": [
    "What does distillation separate, and which part is kept?",
    "What happens to the solvent when the solution is boiled?",
    "Where is the solvent gas cooled during distillation?",
    "What happens when the solvent gas is cooled?",
    "How is the salty water heated in the organiser's distillation apparatus?",
    "What does the thermometer measure during distillation?",
    "In which direction should cooling water flow through a condenser?",
    "Which way does the condenser slope in the organiser's apparatus?",
    "What liquid is collected in the organiser's receiving beaker?",
  ],
  "y8sci-separation-chromatography": [
    "What kind of mixture can chromatography separate?",
    "Where is a mixture such as ink placed for chromatography?",
    "Where is the chromatography paper placed?",
    "What happens to the solvent during paper chromatography?",
    "What does the moving solvent do to the different constituents of ink?",
    "What is the separated pattern on chromatography paper called?",
    "What supports the chromatography paper in the organiser's apparatus?",
    "Why must the ink spot be above the solvent level?",
  ],
  "y8sci-separation-evaporation": [
    "What does evaporation separate, and which part is kept?",
    "What happens to the solution during evaporation?",
    "What remains after all the solvent has evaporated?",
    "How is the mixture heated in the organiser's evaporation apparatus?",
  ],
};

const flashcards: KnowledgeFlashcard[] = sections.flatMap(section => [
  ...section.keyFacts.map((fact, index) => ({
    id: `${section.id}-fact-${index + 1}`,
    sectionId: section.id,
    front: flashcardFactQuestions[section.id][index],
    back: fact,
  })),
  ...section.keyTerms.map((term, index) => ({
    id: `${section.id}-term-${index + 1}`,
    sectionId: section.id,
    front: `What does “${term}” mean?`,
    back: vocabularyDefinitions[term],
  })),
]);

const generatedRef = (section: string) => `Generated supplement derived only from ${KO_SOURCE}: ${section}`;

function mcq(
  id: string,
  sectionId: string,
  prompt: string,
  options: string[],
  answer: string,
  explanation: string,
  sourceSection: string,
): MultipleChoiceQuestion {
  return {
    id,
    sectionIds: [sectionId],
    type: "multiple-choice",
    prompt,
    marks: 1,
    options,
    answer,
    explanation,
    sourceType: "generatedSupplement",
    sourceRef: generatedRef(sourceSection),
  };
}

function written(
  id: string,
  sectionIds: string[],
  type: "short-answer" | "long-answer",
  prompt: string,
  markingPoints: string[],
  guidance: string,
  sourceSection: string,
): WrittenQuestion {
  return {
    id,
    sectionIds,
    type,
    prompt,
    marks: markingPoints.length,
    markingPoints,
    guidance,
    sourceType: "generatedSupplement",
    sourceRef: generatedRef(sourceSection),
  };
}

const multipleChoiceQuestions: MultipleChoiceQuestion[] = [
  mcq("separation-q001", "y8sci-separation-mixtures", "Which statement correctly describes a mixture?", ["Its substances are together but not chemically bonded", "Its substances are always chemically bonded", "It contains only one substance", "Its amounts cannot change"], "Its substances are together but not chemically bonded", "Mixture components are not chemically bonded.", "What are mixtures?"),
  mcq("separation-q002", "y8sci-separation-mixtures", "Which melting-point result suggests a pure substance?", ["One sharp melting point", "A wide range of melting temperatures", "No melting at any temperature", "A different range every minute"], "One sharp melting point", "The organiser identifies a single, sharp melting point as evidence of purity.", "What are mixtures?"),
  mcq("separation-q003", "y8sci-separation-mixtures", "What is the key difference between a compound and a mixture?", ["A compound's parts are chemically bonded", "A mixture's parts are chemically bonded", "A compound must be a liquid", "A mixture has fixed amounts"], "A compound's parts are chemically bonded", "Different substances in a compound are chemically bonded; those in a mixture are not.", "What are mixtures?"),

  mcq("separation-q004", "y8sci-separation-solutions", "Which two parts make up a solution?", ["A solvent and a solute", "A residue and a filtrate", "A gas and a condenser", "A compound and a chromatogram"], "A solvent and a solute", "A solution contains a solvent and a dissolved solute.", "Solutions"),
  mcq("separation-q005", "y8sci-separation-solutions", "What is the solvent in a solution?", ["The liquid that makes up most of the solution", "The solid left in filter paper", "The gas in a condenser", "The pattern on chromatography paper"], "The liquid that makes up most of the solution", "The solvent is the liquid that makes up most of a solution.", "Solutions"),
  mcq("separation-q006", "y8sci-separation-solutions", "What happens to solute particles when the solute dissolves?", ["They break away and move into the solvent", "They become chemically bonded to filter paper", "They remain as one large solid", "They turn into residue"], "They break away and move into the solvent", "The organiser states that solute particles break away and move into the solvent.", "Solutions"),

  mcq("separation-q007", "y8sci-separation-solubility", "What does solubility measure?", ["How much solute dissolves in a certain volume of solvent", "How quickly a liquid filters", "The melting range of every compound", "The mass of a condenser"], "How much solute dissolves in a certain volume of solvent", "This is the organiser's definition of solubility.", "Solubility"),
  mcq("separation-q008", "y8sci-separation-solubility", "What often happens to solubility when temperature increases?", ["It increases", "It always becomes zero", "It always decreases", "It becomes a melting point"], "It increases", "Increasing temperature often increases solubility.", "Solubility"),
  mcq("separation-q009", "y8sci-separation-solubility", "When is a solution saturated?", ["When no more solute can dissolve", "When all solvent has passed through filter paper", "When no solute has been added", "When the solvent freezes"], "When no more solute can dissolve", "A saturated mixture contains as much dissolved solute as the solvent can take.", "Solubility"),

  mcq("separation-q010", "y8sci-separation-filtration", "Which mixture can be separated by filtration?", ["An undissolved solid and a liquid", "Two dissolved dyes", "A dissolved solute when the solvent must be collected", "Two gases"], "An undissolved solid and a liquid", "Filtration separates an undissolved solid from a liquid.", "Filtration"),
  mcq("separation-q011", "y8sci-separation-filtration", "What is the residue?", ["The solid left in the filter paper", "The liquid through the filter paper", "The solvent collected after distillation", "The pattern made by chromatography"], "The solid left in the filter paper", "Residue is the retained solid.", "Filtration"),
  mcq("separation-q012", "y8sci-separation-filtration", "Why does the liquid pass through filter paper while the undissolved solid does not?", ["Liquid particles fit through the tiny holes but larger solid particles do not", "The filter paper dissolves the solid", "The clamp attracts the liquid", "The conical flask chemically bonds to the solid"], "Liquid particles fit through the tiny holes but larger solid particles do not", "Separation depends on the tiny filter-paper holes and particle size.", "Filtration"),

  mcq("separation-q013", "y8sci-separation-distillation", "Which part cools solvent gas back into a liquid during distillation?", ["The condenser", "The filter paper", "The evaporating basin", "The chromatogram"], "The condenser", "The condenser cools the gas so it condenses to a liquid.", "Distillation"),
  mcq("separation-q014", "y8sci-separation-distillation", "What is kept and collected in distillation?", ["The solvent", "Only the residue", "Only the filter paper", "The pencil line"], "The solvent", "The organiser defines distillation as separating solute and solvent while keeping the solvent.", "Distillation"),
  mcq("separation-q015", "y8sci-separation-distillation", "How should cooling water move through the condenser shown?", ["In at the lower end and out at the upper end", "In and out at the same upper opening", "Only through the receiving beaker", "From the thermometer into the flask"], "In at the lower end and out at the upper end", "The source diagram labels water in at the lower end and water out at the upper end.", "Distillation"),

  mcq("separation-q016", "y8sci-separation-chromatography", "What kind of mixture is chromatography used to separate?", ["Substances soluble in the same solvent", "Only an undissolved solid and liquid", "Only a pure substance", "Only two gases"], "Substances soluble in the same solvent", "Chromatography separates mixture components soluble in the same solvent.", "Chromatography"),
  mcq("separation-q017", "y8sci-separation-chromatography", "What is a chromatogram?", ["The separated pattern produced on the paper", "The liquid collected in a conical flask", "The solid left after filtration", "The cooling tube in distillation"], "The separated pattern produced on the paper", "A chromatogram is the pattern produced by the separated constituents.", "Chromatography"),
  mcq("separation-q018", "y8sci-separation-chromatography", "Why must the ink spot begin above the solvent level?", ["So it is not submerged in the solvent", "So the paper can melt", "So the beaker becomes saturated", "So residue forms in a funnel"], "So it is not submerged in the solvent", "The source diagram places the ink above the water level while the solvent travels up the paper.", "Chromatography"),

  mcq("separation-q019", "y8sci-separation-evaporation", "Which substance is kept in evaporation?", ["The solute", "The solvent gas", "The filtrate only", "The chromatography paper"], "The solute", "Evaporation removes the solvent and leaves the solute.", "Evaporation"),
  mcq("separation-q020", "y8sci-separation-evaporation", "Where is the solution heated during the evaporation method shown?", ["In an evaporating basin", "Inside filter paper", "On chromatography paper", "Inside a condenser jacket"], "In an evaporating basin", "The source method heats the solution in an evaporating basin.", "Evaporation"),
  mcq("separation-q021", "y8sci-separation-evaporation", "What remains after all the solvent evaporates?", ["The solute as a solid", "A chromatogram", "The solvent as residue", "An empty filter funnel"], "The solute as a solid", "When the solvent has evaporated, the solute remains as a solid.", "Evaporation"),
];

const shortAnswerQuestions: WrittenQuestion[] = [
  written("separation-q022", ["y8sci-separation-mixtures"], "short-answer", "Define a mixture and explain why its substances can be separated.", ["A mixture contains different substances together.", "The substances are not chemically bonded.", "Because they are not chemically bonded, they can be separated and keep their own properties."], "Link the definition to separation.", "What are mixtures?"),
  written("separation-q023", ["y8sci-separation-mixtures"], "short-answer", "Compare a compound with a mixture.", ["Different substances in a compound are chemically bonded.", "Different substances in a mixture are not chemically bonded.", "Mixture components keep their own properties and their amounts can be changed."], "Make a direct comparison.", "What are mixtures?"),
  written("separation-q024", ["y8sci-separation-mixtures"], "short-answer", "State how melting behaviour can distinguish a pure substance from an impure substance.", ["A pure substance has a single, sharp melting point.", "An impure substance is a mixture and melts over a range of temperatures."], "State both observations.", "What are mixtures?"),

  written("separation-q025", ["y8sci-separation-solutions"], "short-answer", "Define solution, solvent and solute.", ["A solution is a mixture of a solvent and a dissolved solute.", "The solvent is the liquid that makes up most of the solution.", "The solute is the substance added to and dissolved in the solvent."], "Give all three definitions.", "Solutions"),
  written("separation-q026", ["y8sci-separation-solutions"], "short-answer", "Describe what happens to the particles of a solid solute when it dissolves.", ["The solute usually starts as a solid.", "Its particles break away from each other.", "The particles move into the solvent."], "Describe the particle movement only; no extra model is required.", "Solutions"),
  written("separation-q027", ["y8sci-separation-solutions"], "short-answer", "Name the two parts of a solution and state which normally makes up most of it.", ["The two parts are the solvent and solute.", "The solvent is the liquid that makes up most of the solution."], "Name both parts and identify the major part.", "Solutions"),

  written("separation-q028", ["y8sci-separation-solubility"], "short-answer", "Define solubility.", ["Solubility is how much solute can dissolve.", "It is measured for a certain volume of solvent."], "Include both amount of solute and a fixed solvent volume.", "Solubility"),
  written("separation-q029", ["y8sci-separation-solubility"], "short-answer", "Explain why solubility cannot be described as one value for every solute and solvent.", ["Different solutes have different solubilities.", "A solute can have different solubilities in different solvents."], "Refer to both the solute and solvent.", "Solubility"),
  written("separation-q030", ["y8sci-separation-solubility"], "short-answer", "Describe the usual effect of increasing temperature on solubility and define a saturated mixture.", ["Increasing temperature often increases solubility.", "A saturated mixture has so much solute that no more can dissolve in the solvent.", "A soluble substance can dissolve, whereas an insoluble substance cannot."], "Include the temperature trend and the relevant definitions.", "Solubility"),

  written("separation-q031", ["y8sci-separation-filtration"], "short-answer", "Explain how filter paper separates an undissolved solid from a liquid.", ["Filter paper contains extremely small holes.", "Liquid and sufficiently small particles pass through the holes.", "Larger undissolved solid particles cannot pass through and are held back."], "Explain the particle-size mechanism.", "Filtration"),
  written("separation-q032", ["y8sci-separation-filtration"], "short-answer", "Define residue and filtrate in filtration.", ["Residue is the solid left behind in the filter paper.", "Filtrate is the liquid that passes through the filter paper."], "Define both terms and keep solid and liquid distinct.", "Filtration"),
  written("separation-q033", ["y8sci-separation-filtration"], "short-answer", "Describe the filtration apparatus shown on the organiser and where each separated part is found.", ["Filter paper sits inside a filter funnel supported by a clamp.", "The sand residue remains in the filter paper.", "A conical flask collects the water filtrate."], "Name the apparatus and both separated parts.", "Filtration"),

  written("separation-q034", ["y8sci-separation-distillation"], "short-answer", "Describe how distillation separates a solution while keeping the solvent.", ["The solution is boiled so the solvent becomes a gas.", "The gas is cooled in the condenser.", "The solvent turns back into a liquid and is collected."], "Give the stages in order.", "Distillation"),
  written("separation-q035", ["y8sci-separation-distillation"], "short-answer", "State the purpose of the condenser and the direction of cooling-water flow.", ["The condenser cools solvent gas so it changes back into a liquid.", "Cooling water enters at the lower end.", "Cooling water leaves at the upper end."], "Include function and both flow points.", "Distillation"),
  written("separation-q036", ["y8sci-separation-distillation"], "short-answer", "Use the organiser diagram to describe the path from salty water to collected pure water.", ["A Bunsen burner heats salty water in the flask while a thermometer measures near the top.", "Solvent vapour travels into the sloping condenser.", "The condensed pure water runs into the receiving beaker."], "Follow the labelled apparatus from left to right.", "Distillation"),

  written("separation-q037", ["y8sci-separation-chromatography"], "short-answer", "Describe how paper chromatography separates the constituents of ink.", ["Ink is placed on chromatography paper, which is placed in a solvent.", "The solvent moves up the paper.", "The moving solvent separates the different constituents of the ink.", "The separated pattern is a chromatogram."], "Describe the complete source method.", "Chromatography"),
  written("separation-q038", ["y8sci-separation-chromatography"], "short-answer", "State two setup details shown in the chromatography diagram.", ["A pencil supports the chromatography paper across the beaker.", "The ink spot is above the water or solvent level."], "Use the diagram details, not a different chromatography setup.", "Chromatography"),
  written("separation-q039", ["y8sci-separation-chromatography"], "short-answer", "Define chromatography and chromatogram.", ["Chromatography separates mixtures whose substances are soluble in the same solvent.", "A chromatogram is the separated pattern produced on the paper."], "Define both terms.", "Chromatography"),

  written("separation-q040", ["y8sci-separation-evaporation"], "short-answer", "Describe the evaporation method shown on the organiser.", ["The solution is heated in an evaporating basin over a Bunsen burner.", "It is left until all the solvent evaporates.", "The solute remains as a solid."], "Give the apparatus, action and result.", "Evaporation"),
  written("separation-q041", ["y8sci-separation-evaporation"], "short-answer", "What does evaporation separate, and which part is kept?", ["It separates a solute and a solvent.", "The solute is kept."], "Name both mixture parts and the retained part.", "Evaporation"),
  written("separation-q042", ["y8sci-separation-evaporation"], "short-answer", "Explain why evaporation is not suitable when the aim is to collect the solvent.", ["The solvent is allowed to evaporate and is not collected.", "The method is designed to keep the solute as a solid."], "Link the method outcome to the aim.", "Evaporation"),
];

const longAnswerQuestions: WrittenQuestion[] = [
  written("separation-q043", ["y8sci-separation-mixtures"], "long-answer", "Compare mixtures, compounds, pure substances and impure substances using bonding, properties, composition and melting behaviour.", ["States that mixture components are together but not chemically bonded.", "States that compound components are chemically bonded.", "Explains that mixture components keep their own properties and can be separated.", "Explains that mixture amounts can vary.", "States that a pure substance has one sharp melting point.", "States that an impure substance is a mixture with a melting-temperature range."], "Make connected comparisons using every source distinction.", "Mixtures, compounds and purity"),
  written("separation-q044", ["y8sci-separation-solutions", "y8sci-separation-solubility"], "long-answer", "Explain solutions, dissolving, solubility and saturation using all the organiser's key ideas.", ["Defines a solution as a solvent plus a dissolved solute.", "Defines the solvent as the liquid making up most of the solution and the solute as the added substance.", "Explains that solid solute particles break away and move into the solvent.", "Defines solubility using amount of solute and a certain volume of solvent.", "Explains that solubility differs for different solutes and solvents and often increases with temperature.", "Defines soluble, insoluble and saturated accurately."], "Use the source vocabulary and link the ideas.", "Solutions and solubility"),
  written("separation-q045", ["y8sci-separation-filtration", "y8sci-separation-distillation", "y8sci-separation-evaporation"], "long-answer", "Compare filtration, distillation and evaporation. State the kind of mixture each separates and what is retained or collected.", ["Filtration separates an undissolved solid from a liquid.", "Explains residue and filtrate in filtration.", "Distillation separates a dissolved solute and solvent while collecting the solvent.", "Explains boiling, condensation and liquid collection in distillation.", "Evaporation separates solute and solvent while keeping the solute.", "Explains that the solvent evaporates and the solute remains as a solid."], "Compare purposes and outcomes, not only apparatus names.", "Separation method comparison"),
  written("separation-q046", ["y8sci-separation-filtration", "y8sci-separation-distillation", "y8sci-separation-evaporation"], "long-answer", "Describe the apparatus and sequence for filtration, distillation and evaporation as shown on the organiser.", ["Describes filter paper in a funnel supported by a clamp over a conical flask.", "Locates residue in the paper and filtrate in the flask.", "Describes salty water heated with thermometer and Bunsen burner for distillation.", "Describes the condenser, correct cooling-water direction and receiving beaker.", "Describes mixture in an evaporating basin heated over a Bunsen burner.", "Keeps the outcomes of the three methods scientifically distinct."], "Use all labelled source apparatus and correct order.", "Practical apparatus"),
  written("separation-q047", ["y8sci-separation-chromatography", "y8sci-separation-distillation"], "long-answer", "Compare chromatography and distillation as ways of separating soluble mixtures.", ["States that chromatography separates substances soluble in the same solvent.", "Describes ink on paper with the spot above the solvent level.", "Explains solvent movement and chromatogram formation.", "States that distillation separates solute and solvent while collecting the solvent.", "Explains boiling followed by cooling in a condenser.", "Identifies the different final evidence or product: a chromatogram versus collected pure solvent."], "Compare method, movement and final result.", "Chromatography and distillation"),
];

const interactiveQuestions: WrittenQuestion[] = [
  {
    ...written("separation-q048", ["y8sci-separation-mixtures", "y8sci-separation-solutions"], "short-answer", "Match each mixture or solution term to its definition.", ["Mixture — substances together but not chemically bonded", "Compound — substances chemically bonded", "Pure substance — one sharp melting point", "Impure substance — a mixture with a melting-temperature range", "Solution — solvent plus dissolved solute", "Solvent — liquid making up most of a solution", "Solute — substance added to and dissolved in the solvent"], "Match every term once.", "Mixture and solution vocabulary"),
    format: "matching",
    interaction: {
      kind: "matching",
      left: ["Mixture", "Compound", "Pure substance", "Impure substance", "Solution", "Solvent", "Solute"],
      right: ["Liquid making up most of a solution", "Substances chemically bonded", "Solvent plus dissolved solute", "One sharp melting point", "Substances together but not chemically bonded", "Mixture with a melting-temperature range", "Substance added to and dissolved in the solvent"],
      answers: [4, 1, 3, 5, 2, 0, 6],
    },
  },
  {
    ...written("separation-q049", ["y8sci-separation-filtration", "y8sci-separation-distillation", "y8sci-separation-chromatography", "y8sci-separation-evaporation"], "short-answer", "Match each separation method to its purpose.", ["Filtration — keep apart an undissolved solid and liquid", "Distillation — collect the solvent from a solution", "Chromatography — separate substances soluble in the same solvent", "Evaporation — keep the solute from a solution"], "Match every method once.", "Separation methods"),
    format: "matching",
    interaction: {
      kind: "matching",
      left: ["Filtration", "Distillation", "Chromatography", "Evaporation"],
      right: ["Separate substances soluble in the same solvent", "Keep the solute from a solution", "Collect the solvent from a solution", "Separate an undissolved solid and liquid"],
      answers: [3, 2, 0, 1],
    },
  },
  {
    ...written("separation-q050", ["y8sci-separation-filtration", "y8sci-separation-distillation", "y8sci-separation-chromatography", "y8sci-separation-evaporation"], "short-answer", "Match each apparatus item to its function or location.", ["Filter paper — traps larger solid particles", "Conical flask — collects filtrate", "Condenser — cools solvent gas to liquid", "Receiving beaker — collects pure solvent", "Chromatography paper — carries the mixture as solvent rises", "Evaporating basin — holds the heated solution"], "Match all six apparatus items.", "Separation apparatus"),
    format: "matching",
    interaction: {
      kind: "matching",
      left: ["Filter paper", "Conical flask", "Condenser", "Receiving beaker", "Chromatography paper", "Evaporating basin"],
      right: ["Collects pure solvent", "Holds a solution while its solvent evaporates", "Traps larger solid particles", "Carries the mixture as solvent rises", "Collects filtrate", "Cools solvent gas into liquid"],
      answers: [2, 4, 5, 0, 3, 1],
    },
  },
  {
    ...written("separation-q051", ["y8sci-separation-mixtures", "y8sci-separation-solutions"], "short-answer", "Complete the statements about mixtures and solutions.", ["chemically bonded", "separated", "solvent", "solute", "dissolves"], "Use the word bank.", "Mixtures and solutions"),
    format: "fill-in-the-blank",
    interaction: {
      kind: "fill-blanks",
      wordBank: ["chemically bonded", "separated", "solvent", "solute", "dissolves"],
      sentences: ["Substances in a mixture are not ______.", "This means the substances can be ______.", "The liquid making up most of a solution is the ______.", "The added substance is the ______.", "The solute ______ in the solvent."],
      answers: [["chemically bonded", "bonded chemically"], ["separated", "separate"], ["solvent"], ["solute"], ["dissolves", "dissolve"]],
    },
  },
  {
    ...written("separation-q052", ["y8sci-separation-solubility"], "short-answer", "Complete the solubility statements.", ["solubility", "soluble", "insoluble", "temperature", "saturated"], "Use the word bank.", "Solubility"),
    format: "fill-in-the-blank",
    interaction: {
      kind: "fill-blanks",
      wordBank: ["solubility", "soluble", "insoluble", "temperature", "saturated"],
      sentences: ["How much solute dissolves in a certain volume of solvent is its ______.", "A substance that can dissolve is ______.", "A substance that cannot dissolve is ______.", "Increasing ______ often increases solubility.", "A solution in which no more solute dissolves is ______."],
      answers: [["solubility"], ["soluble"], ["insoluble"], ["temperature"], ["saturated"]],
    },
  },
  {
    ...written("separation-q053", ["y8sci-separation-filtration", "y8sci-separation-distillation", "y8sci-separation-chromatography", "y8sci-separation-evaporation"], "short-answer", "Complete the separation-product statements.", ["residue", "filtrate", "condenser", "chromatogram", "solute"], "Use the word bank.", "Separation outputs"),
    format: "fill-in-the-blank",
    interaction: {
      kind: "fill-blanks",
      wordBank: ["residue", "filtrate", "condenser", "chromatogram", "solute"],
      sentences: ["The solid held back in filtration is the ______.", "The liquid through filter paper is the ______.", "Solvent gas cools in the ______.", "The separated chromatography pattern is a ______.", "Evaporation keeps the ______."],
      answers: [["residue"], ["filtrate"], ["condenser"], ["chromatogram"], ["solute"]],
    },
  },
  {
    ...written("separation-q054", ["y8sci-separation-filtration"], "short-answer", "Put the filtration stages in order.", ["Pour the undissolved solid–liquid mixture into filter paper in a funnel.", "Liquid and small particles pass through the filter paper.", "Residue remains in the paper while filtrate collects in the conical flask."], "Start with setting the mixture in the filter paper.", "Filtration sequence"),
    format: "ordering",
    interaction: { kind: "ordering", items: ["Residue remains in the paper while filtrate collects in the conical flask.", "Pour the undissolved solid–liquid mixture into filter paper in a funnel.", "Liquid and small particles pass through the filter paper."], answer: ["Pour the undissolved solid–liquid mixture into filter paper in a funnel.", "Liquid and small particles pass through the filter paper.", "Residue remains in the paper while filtrate collects in the conical flask."] },
  },
  {
    ...written("separation-q055", ["y8sci-separation-distillation"], "short-answer", "Put the distillation stages in order.", ["Boil the solution so the solvent becomes a gas.", "The solvent gas enters the condenser.", "Cooling changes the gas back into a liquid.", "Collect the liquid solvent in the receiving beaker."], "Follow the solvent from flask to beaker.", "Distillation sequence"),
    format: "ordering",
    interaction: { kind: "ordering", items: ["Collect the liquid solvent in the receiving beaker.", "The solvent gas enters the condenser.", "Boil the solution so the solvent becomes a gas.", "Cooling changes the gas back into a liquid."], answer: ["Boil the solution so the solvent becomes a gas.", "The solvent gas enters the condenser.", "Cooling changes the gas back into a liquid.", "Collect the liquid solvent in the receiving beaker."] },
  },
  {
    ...written("separation-q056", ["y8sci-separation-chromatography"], "short-answer", "Put the chromatography stages in order.", ["Place the ink spot on chromatography paper above the solvent.", "The solvent moves up the paper.", "The ink constituents separate and form a chromatogram."], "Begin with the ink spot and solvent setup.", "Chromatography sequence"),
    format: "ordering",
    interaction: { kind: "ordering", items: ["The ink constituents separate and form a chromatogram.", "The solvent moves up the paper.", "Place the ink spot on chromatography paper above the solvent."], answer: ["Place the ink spot on chromatography paper above the solvent.", "The solvent moves up the paper.", "The ink constituents separate and form a chromatogram."] },
  },
  {
    ...written("separation-q057", ["y8sci-separation-evaporation"], "short-answer", "Put the evaporation stages in order.", ["Heat the solution in an evaporating basin.", "Allow all the solvent to evaporate, leaving the solute as a solid."], "Begin with heating the solution.", "Evaporation sequence"),
    format: "ordering",
    interaction: { kind: "ordering", items: ["Allow all the solvent to evaporate, leaving the solute as a solid.", "Heat the solution in an evaporating basin."], answer: ["Heat the solution in an evaporating basin.", "Allow all the solvent to evaporate, leaving the solute as a solid."] },
  },
  {
    ...written("separation-q058", ["y8sci-separation-mixtures", "y8sci-separation-solutions", "y8sci-separation-solubility"], "short-answer", "Classify each description.", ["One sharp melting point — Pure substance", "Melts over a temperature range — Impure substance", "Components not chemically bonded — Mixture", "Solvent plus dissolved solute — Solution", "Can dissolve — Soluble", "Cannot dissolve — Insoluble", "No more solute can dissolve — Saturated solution"], "Use each scientific category accurately.", "Mixture and solubility classification"),
    format: "classification",
    interaction: { kind: "classification", rows: ["One sharp melting point", "Melts over a temperature range", "Components not chemically bonded", "Solvent plus dissolved solute", "Can dissolve", "Cannot dissolve", "No more solute can dissolve"], categories: ["Pure substance", "Impure substance", "Mixture", "Solution", "Soluble", "Insoluble", "Saturated solution"], answers: ["Pure substance", "Impure substance", "Mixture", "Solution", "Soluble", "Insoluble", "Saturated solution"] },
  },
  {
    ...written("separation-q059", ["y8sci-separation-filtration"], "short-answer", "Label the filtration apparatus.", ["1 — Mixture", "2 — Filter paper", "3 — Residue (sand)", "4 — Filter funnel", "5 — Conical flask", "6 — Filtrate (water)"], "Use the numbers beside the original black arrows; accepted answers may omit the examples in brackets.", "Filtration apparatus diagram"),
    format: "label-the-diagram",
    interaction: { kind: "diagram-labels", diagram: "separation-filtration", labels: ["1.", "2.", "3.", "4.", "5.", "6."], answers: [["mixture", "sand and water", "sand-water mixture"], ["filter paper"], ["residue", "sand", "residue (sand)"], ["filter funnel", "funnel"], ["conical flask", "flask"], ["filtrate", "water", "filtrate (water)"]] },
  },
  {
    ...written("separation-q060", ["y8sci-separation-distillation"], "short-answer", "Label the four parts indicated by the original arrows on the simple distillation diagram.", ["1 — Thermometer", "2 — Cooling water out", "3 — Condenser", "4 — Cooling water in"], "Use the numbers beside the diagram's original black, red and blue arrows.", "Distillation apparatus diagram"),
    format: "label-the-diagram",
    interaction: { kind: "diagram-labels", diagram: "separation-distillation", labels: ["1.", "2.", "3.", "4."], answers: [["thermometer"], ["water out", "cooling water out", "cooling-water outlet"], ["condenser", "liebig condenser"], ["water in", "cooling water in", "cooling-water inlet"]] },
  },
  {
    ...written("separation-q061", ["y8sci-separation-chromatography"], "short-answer", "Label the paper chromatography apparatus.", ["1 — Pencil", "2 — Chromatography paper", "3 — Ink spot", "4 — Beaker", "5 — Water (solvent)"], "Use the numbers beside the original black arrows.", "Chromatography apparatus diagram"),
    format: "label-the-diagram",
    interaction: { kind: "diagram-labels", diagram: "separation-chromatography", labels: ["1.", "2.", "3.", "4.", "5."], answers: [["pencil"], ["chromatography paper", "paper"], ["ink spot", "ink"], ["beaker"], ["water", "solvent", "water (solvent)"]] },
  },
  {
    ...written("separation-q062", ["y8sci-separation-evaporation"], "short-answer", "Label the evaporation apparatus.", ["1 — Evaporating basin", "2 — Solution", "3 — Bunsen burner"], "Use the numbers beside the original black arrows.", "Evaporation apparatus diagram"),
    format: "label-the-diagram",
    interaction: { kind: "diagram-labels", diagram: "separation-evaporation", labels: ["1.", "2.", "3."], answers: [["evaporating basin", "basin"], ["solution", "mixture"], ["bunsen burner", "burner"]] },
  },
];

const questions: KnowledgeQuestion[] = [
  ...multipleChoiceQuestions,
  ...shortAnswerQuestions,
  ...interactiveQuestions,
  ...longAnswerQuestions,
];

export const year8ScienceSeparationTechniques: KnowledgeOrganiser = {
  id: "year8-science-separation-techniques",
  year: 8,
  subject: "Science",
  term: "Autumn",
  chapter: 4,
  title: "Separation Techniques",
  introduction: "Explore mixtures, solutions and solubility, then learn how filtration, distillation, chromatography and evaporation separate different kinds of mixtures. This chapter is based on the supplied Knowledge Organiser; no teacher-question PDFs were provided.",
  sections,
  flashcards,
  questions,
};
