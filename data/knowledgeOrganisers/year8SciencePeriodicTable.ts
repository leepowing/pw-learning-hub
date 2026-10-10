import type {
  KnowledgeFlashcard,
  KnowledgeOrganiser,
  KnowledgeQuestion,
  KnowledgeSection,
  MultipleChoiceQuestion,
  WrittenQuestion,
} from "./types";

const KO_SOURCE = "C2 Chapter 1: The Periodic Table Knowledge Organiser (user-supplied image; registered on the site as Year 8 Science Chapter 3)";

type ElementState = "solid" | "liquid" | "gas";
type DisplayedElement = {
  symbol: string;
  name: string;
  state: ElementState;
  period: number;
};

const displayedElements: DisplayedElement[] = [
  { symbol: "H", name: "hydrogen", state: "gas", period: 1 },
  { symbol: "He", name: "helium", state: "gas", period: 1 },
  { symbol: "Li", name: "lithium", state: "solid", period: 2 },
  { symbol: "Be", name: "beryllium", state: "solid", period: 2 },
  { symbol: "B", name: "boron", state: "solid", period: 2 },
  { symbol: "C", name: "carbon", state: "solid", period: 2 },
  { symbol: "N", name: "nitrogen", state: "gas", period: 2 },
  { symbol: "O", name: "oxygen", state: "gas", period: 2 },
  { symbol: "F", name: "fluorine", state: "gas", period: 2 },
  { symbol: "Ne", name: "neon", state: "gas", period: 2 },
  { symbol: "Na", name: "sodium", state: "solid", period: 3 },
  { symbol: "Mg", name: "magnesium", state: "solid", period: 3 },
  { symbol: "Al", name: "aluminium", state: "solid", period: 3 },
  { symbol: "Si", name: "silicon", state: "solid", period: 3 },
  { symbol: "P", name: "phosphorus", state: "solid", period: 3 },
  { symbol: "S", name: "sulfur", state: "solid", period: 3 },
  { symbol: "Cl", name: "chlorine", state: "gas", period: 3 },
  { symbol: "Ar", name: "argon", state: "gas", period: 3 },
  { symbol: "K", name: "potassium", state: "solid", period: 4 },
  { symbol: "Ca", name: "calcium", state: "solid", period: 4 },
  { symbol: "Sc", name: "scandium", state: "solid", period: 4 },
  { symbol: "Ti", name: "titanium", state: "solid", period: 4 },
  { symbol: "V", name: "vanadium", state: "solid", period: 4 },
  { symbol: "Cr", name: "chromium", state: "solid", period: 4 },
  { symbol: "Mn", name: "manganese", state: "solid", period: 4 },
  { symbol: "Fe", name: "iron", state: "solid", period: 4 },
  { symbol: "Co", name: "cobalt", state: "solid", period: 4 },
  { symbol: "Ni", name: "nickel", state: "solid", period: 4 },
  { symbol: "Cu", name: "copper", state: "solid", period: 4 },
  { symbol: "Zn", name: "zinc", state: "solid", period: 4 },
  { symbol: "Ga", name: "gallium", state: "solid", period: 4 },
  { symbol: "Ge", name: "germanium", state: "solid", period: 4 },
  { symbol: "As", name: "arsenic", state: "solid", period: 4 },
  { symbol: "Se", name: "selenium", state: "solid", period: 4 },
  { symbol: "Br", name: "bromine", state: "liquid", period: 4 },
  { symbol: "Kr", name: "krypton", state: "gas", period: 4 },
  { symbol: "Rb", name: "rubidium", state: "solid", period: 5 },
  { symbol: "Sr", name: "strontium", state: "solid", period: 5 },
  { symbol: "Y", name: "yttrium", state: "solid", period: 5 },
  { symbol: "Zr", name: "zirconium", state: "solid", period: 5 },
  { symbol: "Nb", name: "niobium", state: "solid", period: 5 },
  { symbol: "Mo", name: "molybdenum", state: "solid", period: 5 },
  { symbol: "Tc", name: "technetium", state: "solid", period: 5 },
  { symbol: "Ru", name: "ruthenium", state: "solid", period: 5 },
  { symbol: "Rh", name: "rhodium", state: "solid", period: 5 },
  { symbol: "Pd", name: "palladium", state: "solid", period: 5 },
  { symbol: "Ag", name: "silver", state: "solid", period: 5 },
  { symbol: "Cd", name: "cadmium", state: "solid", period: 5 },
  { symbol: "In", name: "indium", state: "solid", period: 5 },
  { symbol: "Sn", name: "tin", state: "solid", period: 5 },
  { symbol: "Sb", name: "antimony", state: "solid", period: 5 },
  { symbol: "Te", name: "tellurium", state: "solid", period: 5 },
  { symbol: "I", name: "iodine", state: "solid", period: 5 },
  { symbol: "Xe", name: "xenon", state: "gas", period: 5 },
  { symbol: "Cs", name: "caesium", state: "solid", period: 6 },
  { symbol: "Ba", name: "barium", state: "solid", period: 6 },
  { symbol: "La", name: "lanthanum", state: "solid", period: 6 },
  { symbol: "Hf", name: "hafnium", state: "solid", period: 6 },
  { symbol: "Ta", name: "tantalum", state: "solid", period: 6 },
  { symbol: "W", name: "tungsten", state: "solid", period: 6 },
  { symbol: "Re", name: "rhenium", state: "solid", period: 6 },
  { symbol: "Os", name: "osmium", state: "solid", period: 6 },
  { symbol: "Ir", name: "iridium", state: "solid", period: 6 },
  { symbol: "Pt", name: "platinum", state: "solid", period: 6 },
  { symbol: "Au", name: "gold", state: "solid", period: 6 },
  { symbol: "Hg", name: "mercury", state: "liquid", period: 6 },
  { symbol: "Tl", name: "thallium", state: "solid", period: 6 },
  { symbol: "Pb", name: "lead", state: "solid", period: 6 },
  { symbol: "Bi", name: "bismuth", state: "solid", period: 6 },
  { symbol: "Po", name: "polonium", state: "solid", period: 6 },
  { symbol: "At", name: "astatine", state: "solid", period: 6 },
  { symbol: "Rn", name: "radon", state: "gas", period: 6 },
  { symbol: "Fr", name: "francium", state: "solid", period: 7 },
  { symbol: "Ra", name: "radium", state: "solid", period: 7 },
];

const coreElementSymbols = [
  "H", "He", "Li", "C", "N", "O", "F", "Ne", "Na", "Mg",
  "Al", "Cl", "Ar", "K", "Ca", "Fe", "Cu", "Br", "I", "Hg",
] as const;
const coreElements = coreElementSymbols.map(symbol => displayedElements.find(element => element.symbol === symbol)!);

const capitalise = (value: string) => `${value[0].toUpperCase()}${value.slice(1)}`;

const vocabularyDefinitions: Record<string, string> = {
  "alkali metal": "A very reactive metal in Group 1 of the Periodic Table.",
  brittle: "Likely to break or shatter rather than bend when a force is applied.",
  conductor: "A material that allows heat or electricity to pass through it.",
  "chemical property": "A property that describes how a substance behaves in chemical reactions.",
  dense: "Having a large amount of mass packed into a given volume.",
  "displacement reaction": "A reaction in which a more reactive element takes the place of a less reactive element in a compound.",
  element: "A substance represented by a name and a chemical symbol in the Periodic Table.",
  group: "A vertical column in the Periodic Table.",
  halogen: "A generally very reactive element in Group 7.",
  malleable: "Able to be hammered or pressed into shape without breaking.",
  metal: "An element on the left of the red dividing line in the supplied Periodic Table, usually with metallic properties.",
  "noble gas": "A very unreactive gas in Group 0.",
  "non-metal": "An element on the right of the red dividing line in the supplied Periodic Table, often with properties opposite to metals.",
  period: "A horizontal row in the Periodic Table.",
  "Periodic Table": "A table of element names and symbols organised by chemical and physical properties.",
  "physical property": "A property that describes how a substance behaves generally, without describing a chemical reaction.",
  sonorous: "Able to make a ringing sound when struck.",
  reactive: "Likely to take part in a chemical reaction.",
};

const sections: KnowledgeSection[] = [
  {
    id: "y8sci-periodic-structure",
    title: "Periodic Table Structure and Organisation",
    context: "How elements are arranged and how groups and periods are used",
    summary: "The Periodic Table organises element names and symbols so that patterns in physical and chemical properties can be recognised and predicted.",
    colour: "#15803d",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: overview, groups, periods, states and metal/non-metal dividing line`,
    keyFacts: [
      "The Periodic Table displays the names and symbols of the elements we have discovered.",
      "Elements are organised by their chemical properties and physical properties.",
      "Columns in the Periodic Table are called groups.",
      "Rows in the Periodic Table are called periods.",
      "Elements in a group normally have similar properties.",
      "Chemists can predict an element's properties from its group.",
      "Metals are shown to the left of the red dividing line on the supplied table.",
      "Non-metals are shown to the right of the red dividing line on the supplied table.",
      "The supplied key identifies elements that are solids at room temperature.",
      "The supplied key identifies elements that are liquids at room temperature.",
      "The supplied key identifies elements that are gases at room temperature.",
      "The supplied version of the Periodic Table does not include every discovered element.",
    ],
    keyTerms: ["element", "group", "period", "Periodic Table"],
  },
  {
    id: "y8sci-periodic-elements",
    title: "Element Names, Symbols and States",
    context: "Core Year 8 symbols plus using the full Periodic Table as a reference",
    summary: "Students recall a limited set of common symbols and use the supplied table and colour key to find other element names and room-temperature states.",
    colour: "#16a34a",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: displayed Periodic Table and room-temperature state key`,
    keyFacts: coreElements.map(element => `${capitalise(element.name)} has the symbol ${element.symbol} and is shown as a ${element.state} at room temperature.`),
    keyTerms: [],
  },
  {
    id: "y8sci-periodic-properties",
    title: "Physical and Chemical Properties",
    context: "Describing substances generally and in chemical reactions",
    summary: "Physical properties describe general behaviour, while chemical properties describe behaviour during chemical reactions.",
    colour: "#166534",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Physical properties and Chemical properties`,
    keyFacts: [
      "Physical properties describe how a substance behaves generally.",
      "Electrical conductivity is a physical property.",
      "Density is a physical property.",
      "Thermal conductivity is a physical property.",
      "Shininess is a physical property.",
      "Malleability is a physical property.",
      "Sonorousness is a physical property.",
      "Melting point is a physical property.",
      "Boiling point is a physical property.",
      "Chemical properties describe how a substance behaves in chemical reactions.",
      "Reactivity is a chemical property.",
      "The substances with which an element reacts are part of its chemical properties.",
      "The products an element forms in reactions are part of its chemical properties.",
    ],
    keyTerms: ["conductor", "chemical property", "dense", "malleable", "physical property", "sonorous", "reactive"],
  },
  {
    id: "y8sci-periodic-metals-nonmetals",
    title: "Metals and Non-metals",
    context: "Comparing the typical physical properties of metals and non-metals",
    summary: "Metals and non-metals tend to have contrasting physical properties, although the organiser describes general patterns rather than rules for every element.",
    colour: "#22c55e",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Metals and Non-metals`,
    keyFacts: [
      "Metals are normally good conductors of heat.",
      "Metals are normally good conductors of electricity.",
      "Metals are shiny when cut.",
      "Metals are malleable.",
      "Metals are dense.",
      "Metals are sonorous.",
      "Most metals have high melting points.",
      "Non-metals often have properties opposite to those of metals.",
      "Non-metals often have low boiling points.",
      "Their low boiling points mean that many non-metals are gases at room temperature.",
      "Non-metals are poor conductors of electricity.",
      "Non-metals are poor conductors of heat.",
      "Non-metals are dull in appearance.",
      "Non-metals have low density.",
      "Solid non-metals are brittle.",
      "Non-metals are not sonorous.",
    ],
    keyTerms: ["brittle", "metal", "non-metal"],
  },
  {
    id: "y8sci-periodic-group1",
    title: "Group 1 — Alkali Metals",
    context: "Properties, water reactions and trends down Group 1",
    summary: "Group 1 elements are very reactive alkali metals whose reactivity increases and melting points decrease down the group.",
    colour: "#15803d",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Group 1`,
    keyFacts: [
      "Group 1 elements are called the alkali metals.",
      "Group 1 elements are like other metals but are very reactive.",
      "Group 1 elements react vigorously with water.",
      "Group 1 elements become more reactive down the group.",
      "Group 1 elements have lower melting points than most other metals.",
      "The melting points of Group 1 elements decrease down the group.",
      "A Group 1 metal reacting with water produces a metal hydroxide and hydrogen gas.",
    ],
    keyTerms: ["alkali metal"],
  },
  {
    id: "y8sci-periodic-group7",
    title: "Group 7 — Halogens",
    context: "Reactivity, melting-point trends and displacement reactions",
    summary: "Group 7 halogens are generally very reactive non-metals; their melting points increase and their reactivity decreases down the group.",
    colour: "#16a34a",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Group 7`,
    keyFacts: [
      "Group 7 elements are called the halogens.",
      "Halogens are generally very reactive.",
      "The properties of Group 7 are generally opposite to those of Group 1.",
      "The melting points of Group 7 elements increase down the group.",
      "The reactivity of Group 7 elements decreases down the group.",
      "In a Group 7 displacement reaction, an element higher in the group takes the place of an element lower in the group in a compound.",
      "The organiser's example is potassium iodide + chlorine → potassium chloride + iodine.",
    ],
    keyTerms: ["halogen", "displacement reaction"],
  },
  {
    id: "y8sci-periodic-group0",
    title: "Group 0 — Noble Gases",
    context: "Unreactive gases and the boiling-point trend down Group 0",
    summary: "Group 0 elements are very unreactive noble gases with low boiling points that increase down the group.",
    colour: "#166534",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Group 0`,
    keyFacts: [
      "Group 0 elements are called the noble gases.",
      "Noble gases are very unreactive.",
      "Noble gases have low boiling points.",
      "Noble gases are gases at room temperature.",
      "The boiling points of Group 0 elements increase down the group.",
    ],
    keyTerms: ["noble gas"],
  },
];

const flashcardFactQuestions: Record<string, string[]> = {
  "y8sci-periodic-structure": [
    "What information does the Periodic Table display?",
    "Which two kinds of properties are used to organise elements in the Periodic Table?",
    "What are the vertical columns in the Periodic Table called?",
    "What are the horizontal rows in the Periodic Table called?",
    "What is normally similar about elements in the same group?",
    "How can an element's group help chemists?",
    "On which side of the red dividing line are metals shown?",
    "On which side of the red dividing line are non-metals shown?",
    "What does the solid colour in the supplied state key show?",
    "What does the liquid colour in the supplied state key show?",
    "What does the gas colour in the supplied state key show?",
    "Does the supplied Periodic Table include every discovered element?",
  ],
  "y8sci-periodic-properties": [
    "What does a physical property describe?",
    "What type of property is electrical conductivity?",
    "What type of property is density?",
    "What type of property is thermal conductivity?",
    "What type of property is shininess?",
    "What type of property is malleability?",
    "What type of property is sonorousness?",
    "What type of property is melting point?",
    "What type of property is boiling point?",
    "What does a chemical property describe?",
    "What type of property is reactivity?",
    "Why are the substances an element reacts with part of its chemical properties?",
    "Why are the products formed by an element part of its chemical properties?",
  ],
  "y8sci-periodic-metals-nonmetals": [
    "How well do metals normally conduct heat?",
    "How well do metals normally conduct electricity?",
    "What do metals usually look like when freshly cut?",
    "How do metals behave when hammered or pressed into shape?",
    "What is the typical density of metals?",
    "What sound property do metals usually have?",
    "What kind of melting points do most metals have?",
    "How do non-metal properties generally compare with metal properties?",
    "What kind of boiling points do non-metals often have?",
    "Why are many non-metals gases at room temperature?",
    "How well do non-metals conduct electricity?",
    "How well do non-metals conduct heat?",
    "What is the typical appearance of non-metals?",
    "What is the typical density of non-metals?",
    "How do solid non-metals behave when a force is applied?",
    "Are non-metals sonorous?",
  ],
  "y8sci-periodic-group1": [
    "What are Group 1 elements called?",
    "How reactive are Group 1 elements compared with most metals?",
    "How do Group 1 elements react with water?",
    "How does reactivity change down Group 1?",
    "How do Group 1 melting points compare with those of most metals?",
    "How do melting points change down Group 1?",
    "Which two products form when a Group 1 metal reacts with water?",
  ],
  "y8sci-periodic-group7": [
    "What are Group 7 elements called?",
    "How reactive are the halogens generally?",
    "How do Group 7 properties generally compare with Group 1 properties?",
    "How do melting points change down Group 7?",
    "How does reactivity change down Group 7?",
    "What happens in a Group 7 displacement reaction?",
    "What is the word equation for the organiser's Group 7 displacement example?",
  ],
  "y8sci-periodic-group0": [
    "What are Group 0 elements called?",
    "How reactive are noble gases?",
    "What kind of boiling points do noble gases have?",
    "What is the state of noble gases at room temperature?",
    "How do boiling points change down Group 0?",
  ],
};

const flashcards: KnowledgeFlashcard[] = sections.flatMap(section => [
  ...section.keyFacts.map((fact, index) => ({
    id: `${section.id}-fact-${index + 1}`,
    sectionId: section.id,
    front: section.id === "y8sci-periodic-elements"
      ? `What are the name and room-temperature state of ${coreElements[index].symbol}?`
      : flashcardFactQuestions[section.id][index],
    back: fact,
  })),
  ...section.keyTerms.map((term, index) => ({
    id: `${section.id}-term-${index + 1}`,
    sectionId: section.id,
    front: `What does “${term}” mean?`,
    back: vocabularyDefinitions[term],
  })),
]);

function generatedRef(section: string) {
  return `Generated supplement derived only from ${KO_SOURCE}: ${section}`;
}

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
  mcq("periodic-q001", "y8sci-periodic-structure", "What are the vertical columns of the Periodic Table called?", ["Groups", "Periods", "Products", "States"], "Groups", "Columns are called groups.", "Periodic Table structure"),
  mcq("periodic-q002", "y8sci-periodic-structure", "What are the horizontal rows of the Periodic Table called?", ["Periods", "Groups", "Compounds", "Reactions"], "Periods", "Rows are called periods.", "Periodic Table structure"),
  mcq("periodic-q003", "y8sci-periodic-structure", "Why can chemists use an element's group to predict its properties?", ["Elements in a group normally have similar properties", "Every group contains one element", "All elements in a group are gases", "Groups are arranged alphabetically"], "Elements in a group normally have similar properties", "Elements in the same group normally have similar properties.", "Periodic Table structure"),
  mcq("periodic-q004", "y8sci-periodic-structure", "Where are metals and non-metals shown relative to the red dividing line on the supplied table?", ["Metals left; non-metals right", "Metals right; non-metals left", "Both are only on the left", "Both are only on the right"], "Metals left; non-metals right", "The supplied organiser places metals to the left and non-metals to the right of the red line.", "Periodic Table structure"),

  mcq("periodic-q005", "y8sci-periodic-elements", "What state is hydrogen shown in at room temperature?", ["Gas", "Liquid", "Solid", "Not shown"], "Gas", "Hydrogen is coloured as a gas in the supplied table.", "Displayed elements"),
  mcq("periodic-q006", "y8sci-periodic-elements", "Which displayed element has the symbol Hg and is liquid at room temperature?", ["Mercury", "Magnesium", "Manganese", "Molybdenum"], "Mercury", "Hg is mercury, shown as a liquid.", "Displayed elements"),
  mcq("periodic-q007", "y8sci-periodic-elements", "Which displayed element has the symbol Br and is liquid at room temperature?", ["Bromine", "Boron", "Beryllium", "Barium"], "Bromine", "Br is bromine, shown as a liquid.", "Displayed elements"),
  mcq("periodic-q008", "y8sci-periodic-elements", "Which pair is shown as gases at room temperature?", ["Nitrogen and oxygen", "Sodium and magnesium", "Copper and zinc", "Bromine and mercury"], "Nitrogen and oxygen", "Both nitrogen and oxygen are coloured as gases.", "Displayed elements"),

  mcq("periodic-q009", "y8sci-periodic-properties", "What does a physical property describe?", ["How a substance behaves generally", "Only the products of a reaction", "Only an element's symbol", "The order of groups"], "How a substance behaves generally", "Physical properties describe general behaviour.", "Physical and chemical properties"),
  mcq("periodic-q010", "y8sci-periodic-properties", "What does a chemical property describe?", ["How a substance behaves in chemical reactions", "Only its colour", "Only its state at room temperature", "Its row number"], "How a substance behaves in chemical reactions", "Chemical properties concern chemical reactions.", "Physical and chemical properties"),
  mcq("periodic-q011", "y8sci-periodic-properties", "Which is a physical property?", ["Malleability", "Reactivity", "The substances it reacts with", "The products it forms"], "Malleability", "Malleability describes general physical behaviour.", "Physical and chemical properties"),
  mcq("periodic-q012", "y8sci-periodic-properties", "Which is a chemical property?", ["Reactivity", "Density", "Shininess", "Melting point"], "Reactivity", "Reactivity describes behaviour in chemical reactions.", "Physical and chemical properties"),

  mcq("periodic-q013", "y8sci-periodic-metals-nonmetals", "Which statement normally describes metals?", ["They conduct heat and electricity well", "They are poor conductors of heat and electricity", "They are always gases", "They are dull when cut"], "They conduct heat and electricity well", "Metals are normally good conductors of both heat and electricity.", "Metals and non-metals"),
  mcq("periodic-q014", "y8sci-periodic-metals-nonmetals", "What does malleable mean?", ["Can be hammered or pressed into shape", "Breaks rather than bends", "Has a low density", "Cannot conduct heat"], "Can be hammered or pressed into shape", "Malleable materials can be shaped without breaking.", "Metals and non-metals"),
  mcq("periodic-q015", "y8sci-periodic-metals-nonmetals", "Why are many non-metals gases at room temperature?", ["They have low boiling points", "They are very dense", "They are sonorous", "They have high melting points"], "They have low boiling points", "The organiser links low boiling points to being gases at room temperature.", "Metals and non-metals"),
  mcq("periodic-q016", "y8sci-periodic-metals-nonmetals", "Which pair describes solid non-metals?", ["Brittle and not sonorous", "Malleable and sonorous", "Dense and shiny", "Good conductors of heat and electricity"], "Brittle and not sonorous", "Solid non-metals are brittle and non-metals are not sonorous.", "Metals and non-metals"),

  mcq("periodic-q017", "y8sci-periodic-group1", "What are Group 1 elements called?", ["Alkali metals", "Halogens", "Noble gases", "Non-metals"], "Alkali metals", "Group 1 elements are called alkali metals.", "Group 1"),
  mcq("periodic-q018", "y8sci-periodic-group1", "What products form when a Group 1 metal reacts with water?", ["A metal hydroxide and hydrogen", "A metal chloride and oxygen", "A halogen and water", "A noble gas and carbon dioxide"], "A metal hydroxide and hydrogen", "The source states that metal hydroxide and hydrogen gas are produced.", "Group 1"),
  mcq("periodic-q019", "y8sci-periodic-group1", "How does Group 1 reactivity change down the group?", ["It increases", "It decreases", "It stays exactly the same", "It changes from gas to liquid only"], "It increases", "Group 1 elements become more reactive down the group.", "Group 1"),
  mcq("periodic-q020", "y8sci-periodic-group1", "How do Group 1 melting points change down the group?", ["They decrease", "They increase", "They stay exactly the same", "They become boiling points"], "They decrease", "The melting points decrease down Group 1.", "Group 1"),

  mcq("periodic-q021", "y8sci-periodic-group7", "What are Group 7 elements called?", ["Halogens", "Alkali metals", "Noble gases", "Transition periods"], "Halogens", "Group 7 elements are called halogens.", "Group 7"),
  mcq("periodic-q022", "y8sci-periodic-group7", "How does Group 7 reactivity change down the group?", ["It decreases", "It increases", "It stays exactly the same", "It becomes metallic"], "It decreases", "Halogen reactivity decreases down Group 7.", "Group 7"),
  mcq("periodic-q023", "y8sci-periodic-group7", "How do Group 7 melting points change down the group?", ["They increase", "They decrease", "They stay exactly the same", "They become reaction products"], "They increase", "The melting points increase down Group 7.", "Group 7"),
  mcq("periodic-q024", "y8sci-periodic-group7", "In potassium iodide + chlorine → potassium chloride + iodine, what does chlorine displace?", ["Iodine", "Potassium", "Chloride", "Hydrogen"], "Iodine", "Chlorine is higher in Group 7 and takes iodine's place in the compound.", "Group 7"),

  mcq("periodic-q025", "y8sci-periodic-group0", "What are Group 0 elements called?", ["Noble gases", "Halogens", "Alkali metals", "Liquid metals"], "Noble gases", "Group 0 elements are called noble gases.", "Group 0"),
  mcq("periodic-q026", "y8sci-periodic-group0", "How reactive are noble gases?", ["Very unreactive", "Very reactive", "More reactive down every period", "Only reactive with water"], "Very unreactive", "The organiser describes noble gases as very unreactive.", "Group 0"),
  mcq("periodic-q027", "y8sci-periodic-group0", "Why are Group 0 elements gases at room temperature?", ["They have low boiling points", "They are dense metals", "They are malleable", "They have high melting points"], "They have low boiling points", "Their low boiling points mean they are gases at room temperature.", "Group 0"),
  mcq("periodic-q028", "y8sci-periodic-group0", "How do Group 0 boiling points change down the group?", ["They increase", "They decrease", "They stay exactly the same", "They become melting points"], "They increase", "Boiling points increase down Group 0.", "Group 0"),
];

const shortAnswerQuestions: WrittenQuestion[] = [
  written("periodic-q029", ["y8sci-periodic-structure"], "short-answer", "What information does the Periodic Table display, and how are the elements organised?", ["It displays element names and symbols.", "Elements are organised by their chemical properties.", "Elements are organised by their physical properties."], "Include both what is displayed and both kinds of property.", "Periodic Table structure"),
  written("periodic-q030", ["y8sci-periodic-structure"], "short-answer", "State the difference between a group and a period in the Periodic Table.", ["A group is a vertical column.", "A period is a horizontal row."], "Define both terms using direction.", "Periodic Table structure"),
  written("periodic-q031", ["y8sci-periodic-structure"], "short-answer", "Why can an element's group help chemists predict its properties?", ["Elements in the same group normally have similar properties.", "Chemists use the shared group pattern to predict the element's properties."], "Link similar properties to prediction.", "Periodic Table structure"),

  written("periodic-q032", ["y8sci-periodic-elements"], "short-answer", "Give the chemical symbols for hydrogen, bromine and mercury.", ["Hydrogen is H.", "Bromine is Br.", "Mercury is Hg."], "Give all three symbols with correct capitalisation.", "Displayed elements"),
  written("periodic-q033", ["y8sci-periodic-elements"], "short-answer", "State the room-temperature states shown for hydrogen, bromine and mercury.", ["Hydrogen is a gas.", "Bromine is a liquid.", "Mercury is a liquid."], "State solid, liquid or gas for each element.", "Displayed elements"),

  written("periodic-q034", ["y8sci-periodic-properties"], "short-answer", "Define physical property and give three examples from the organiser.", ["A physical property describes how a substance behaves generally.", "One valid example: electrical conductivity, density, thermal conductivity, shininess, malleability, sonorousness, melting point or boiling point.", "A second valid example from the list.", "A third valid example from the list."], "Give the definition and three different examples.", "Physical and chemical properties"),
  written("periodic-q035", ["y8sci-periodic-properties"], "short-answer", "Define chemical property and give the three examples described on the organiser.", ["A chemical property describes how a substance behaves in chemical reactions.", "How reactive it is.", "What other substances it reacts with.", "What products it forms."], "Include the definition and all three examples.", "Physical and chemical properties"),
  written("periodic-q036", ["y8sci-periodic-properties"], "short-answer", "Classify melting point and reactivity as physical or chemical properties, and explain your choices.", ["Melting point is a physical property because it describes general behaviour without specifying a reaction.", "Reactivity is a chemical property because it describes behaviour in chemical reactions."], "Classify both and link each to the correct definition.", "Physical and chemical properties"),

  written("periodic-q037", ["y8sci-periodic-metals-nonmetals"], "short-answer", "Give three typical properties of metals.", ["They are normally good conductors of heat and electricity.", "They are shiny when cut.", "They are malleable."], "Give three different typical properties. Other valid properties from the organiser may also be credited by the marker.", "Metals and non-metals"),
  written("periodic-q038", ["y8sci-periodic-metals-nonmetals"], "short-answer", "Give three typical properties of non-metals.", ["They are normally poor conductors of heat and electricity.", "They are dull in appearance.", "Solid non-metals are brittle."], "Give three different typical properties. Other valid properties from the organiser may also be credited by the marker.", "Metals and non-metals"),
  written("periodic-q039", ["y8sci-periodic-metals-nonmetals"], "short-answer", "Compare the thermal and electrical conductivity of metals and non-metals.", ["Metals normally conduct heat well; non-metals conduct heat poorly.", "Metals normally conduct electricity well; non-metals conduct electricity poorly."], "Make two direct comparisons.", "Metals and non-metals"),
  written("periodic-q040", ["y8sci-periodic-metals-nonmetals"], "short-answer", "Compare the appearance and mechanical properties of metals and non-metals.", ["Metals are shiny when cut, whereas non-metals are dull.", "Metals are malleable, whereas solid non-metals are brittle.", "Metals are sonorous, whereas non-metals are not sonorous.", "Metals are dense, whereas non-metals have low density."], "Use direct comparison words and cover all four contrasts.", "Metals and non-metals"),

  written("periodic-q041", ["y8sci-periodic-group1"], "short-answer", "What are Group 1 elements called, and how reactive are they?", ["They are called the alkali metals.", "They are very reactive."], "Name the family and state its reactivity.", "Group 1"),
  written("periodic-q042", ["y8sci-periodic-group1"], "short-answer", "State what happens when a Group 1 metal reacts with water.", ["The reaction is vigorous.", "A metal hydroxide is produced.", "Hydrogen gas is produced."], "Describe the reaction and name both products.", "Group 1"),
  written("periodic-q043", ["y8sci-periodic-group1"], "short-answer", "Describe the reactivity and melting-point trends down Group 1.", ["Reactivity increases down the group.", "Melting points decrease down the group."], "State both trends and their directions.", "Group 1"),
  written("periodic-q044", ["y8sci-periodic-group1"], "short-answer", "Compare Group 1 elements with other metals using the organiser.", ["They have metallic properties like other metals.", "They are very reactive.", "They have lower melting points than most other metals."], "Give the similarity and both differences.", "Group 1"),

  written("periodic-q045", ["y8sci-periodic-group7"], "short-answer", "What are Group 7 elements called, and how reactive are they?", ["They are called the halogens.", "They are generally very reactive."], "Name the family and state its reactivity.", "Group 7"),
  written("periodic-q046", ["y8sci-periodic-group7"], "short-answer", "Describe the melting-point and reactivity trends down Group 7.", ["Melting points increase down the group.", "Reactivity decreases down the group."], "State both trends and their directions.", "Group 7"),
  written("periodic-q047", ["y8sci-periodic-group7"], "short-answer", "Define a Group 7 displacement reaction.", ["An element higher in Group 7 takes the place of an element lower in the group.", "The lower element is displaced from its compound."], "Include relative position and replacement in a compound.", "Group 7"),
  written("periodic-q048", ["y8sci-periodic-group7"], "short-answer", "Explain the displacement in potassium iodide + chlorine → potassium chloride + iodine.", ["Chlorine is higher than iodine in Group 7.", "Chlorine is more reactive than iodine.", "Chlorine takes iodine's place in potassium iodide, forming potassium chloride and iodine."], "Link group position, reactivity and products.", "Group 7"),

  written("periodic-q049", ["y8sci-periodic-group0"], "short-answer", "What are Group 0 elements called, and how reactive are they?", ["They are called the noble gases.", "They are very unreactive."], "Name the family and state its reactivity.", "Group 0"),
  written("periodic-q050", ["y8sci-periodic-group0"], "short-answer", "Why are Group 0 elements gases at room temperature?", ["They have low boiling points.", "Room temperature is above their low boiling points, so they are gases."], "Link low boiling point to physical state.", "Group 0"),
  written("periodic-q051", ["y8sci-periodic-group0"], "short-answer", "Describe the boiling-point trend down Group 0.", ["Boiling points increase down the group."], "State the property and direction.", "Group 0"),
  written("periodic-q052", ["y8sci-periodic-group0", "y8sci-periodic-group7"], "short-answer", "Compare Group 0 and Group 7 in terms of reactivity and boiling-point trends.", ["Group 0 is very unreactive, whereas Group 7 is generally very reactive.", "Boiling points increase down Group 0.", "The organiser states that, like Group 7, Group 0 boiling points increase down the group."], "Use direct comparison and include the stated trends.", "Groups 0 and 7"),
];

const longAnswerQuestions: WrittenQuestion[] = [
  written("periodic-q053", ["y8sci-periodic-properties"], "long-answer", "Compare physical and chemical properties. Use definitions and examples from the organiser.", ["Defines a physical property as how a substance behaves generally.", "Gives at least two valid physical-property examples.", "Defines a chemical property as how a substance behaves in chemical reactions.", "Explains reactivity as a chemical-property example.", "Explains that reaction partners and products are chemical properties."], "Organise the answer into a direct comparison with accurate examples.", "Physical and chemical properties"),
  written("periodic-q054", ["y8sci-periodic-metals-nonmetals"], "long-answer", "Compare the physical properties of metals and non-metals using all the main contrasts on the organiser.", ["Compares heat and electrical conductivity.", "Compares shiny and dull appearance.", "Compares malleability and brittleness.", "Compares density.", "Compares sonorous and not sonorous behaviour.", "Compares the general melting/boiling-point pattern described in the organiser."], "Use paired comparisons rather than two disconnected lists.", "Metals and non-metals"),
  written("periodic-q055", ["y8sci-periodic-group1"], "long-answer", "Explain the properties and trends of Group 1, including their reaction with water.", ["Identifies Group 1 as the alkali metals with metallic properties.", "States that they are very reactive and react vigorously with water.", "States that reactivity increases down the group.", "States that melting points are lower than most metals and decrease down the group.", "States that a metal hydroxide and hydrogen gas form in the water reaction."], "Give connected statements covering identity, trends and products.", "Group 1"),
  written("periodic-q056", ["y8sci-periodic-group7"], "long-answer", "Explain the properties and trends of Group 7 and use the potassium iodide and chlorine reaction as an example of displacement.", ["Identifies Group 7 elements as halogens that are generally very reactive.", "States that melting points increase down Group 7.", "States that reactivity decreases down Group 7.", "Explains that a higher Group 7 element displaces a lower one from a compound.", "Uses chlorine being above/more reactive than iodine to explain the displacement.", "Gives the products potassium chloride and iodine."], "Link position, reactivity and the supplied word equation.", "Group 7"),
  written("periodic-q057", ["y8sci-periodic-group1", "y8sci-periodic-group7", "y8sci-periodic-group0"], "long-answer", "Compare the properties and trends of Groups 1, 7 and 0.", ["Identifies Group 1 as alkali metals, Group 7 as halogens and Group 0 as noble gases.", "Compares Group 1 increasing reactivity with Group 7 decreasing reactivity down the group.", "States that Group 0 is very unreactive.", "Compares Group 1 decreasing melting points with Group 7 increasing melting points.", "States that Group 0 has low boiling points which increase down the group.", "Uses the correct room-temperature or reaction behaviour for each group."], "Compare the groups directly and keep melting-point and boiling-point trends distinct.", "Groups 1, 7 and 0"),
];

const coreSymbolSets = [
  ["H", "C", "N", "O", "Na", "Mg", "Al"],
  ["He", "Ne", "Ar", "Cl", "K", "Ca", "Fe"],
  ["Li", "F", "Cu", "Br", "I", "Hg"],
].map(symbols => symbols.map(symbol => coreElements.find(element => element.symbol === symbol)!));

const symbolMatchingQuestions: WrittenQuestion[] = coreSymbolSets.map((elements, index) => {
  const right = [...elements].reverse().map(element => capitalise(element.name));
  return {
    ...written(
      `periodic-q${String(58 + index).padStart(3, "0")}`,
      ["y8sci-periodic-elements"],
      "short-answer",
      `Match each displayed element symbol to its name — set ${index + 1}.`,
      elements.map(element => `${element.symbol} — ${capitalise(element.name)}`),
      "Match every symbol once.",
      "Displayed element names and symbols",
    ),
    format: "matching" as const,
    interaction: {
      kind: "matching" as const,
      left: elements.map(element => element.symbol),
      right,
      answers: elements.map(element => right.indexOf(capitalise(element.name))),
    },
  };
});

const periodicTableReference = {
  src: "/knowledge-organisers/science/periodic-table-reference.jpeg",
  alt: "Periodic Table of the Elements showing atomic numbers, symbols, names, masses, groups and periods",
  caption: "Use this Periodic Table to locate symbols, groups and periods. You are not expected to recall every element from memory.",
};

const stateClassificationQuestions: WrittenQuestion[] = [
  {
    ...written("periodic-q061", ["y8sci-periodic-structure", "y8sci-periodic-elements"], "short-answer", "Using the supplied Periodic Table, classify each element by its period.", ["Hydrogen — Period 1", "Carbon — Period 2", "Sodium — Period 3", "Chlorine — Period 3", "Potassium — Period 4", "Bromine — Period 4", "Mercury — Period 6"], "Read the period numbers from the left side of the table.", "Using Periodic Table periods"),
    format: "classification",
    referenceImage: periodicTableReference,
    interaction: { kind: "classification", rows: ["Hydrogen (H)", "Carbon (C)", "Sodium (Na)", "Chlorine (Cl)", "Potassium (K)", "Bromine (Br)", "Mercury (Hg)"], categories: ["Period 1", "Period 2", "Period 3", "Period 4", "Period 5", "Period 6"], answers: ["Period 1", "Period 2", "Period 3", "Period 3", "Period 4", "Period 4", "Period 6"] },
  },
  {
    ...written("periodic-q062", ["y8sci-periodic-structure", "y8sci-periodic-elements", "y8sci-periodic-group1", "y8sci-periodic-group7", "y8sci-periodic-group0"], "short-answer", "Using the group numbers on the supplied Periodic Table, classify each element into Group 1, Group 7 or Group 0.", ["Lithium — Group 1", "Sodium — Group 1", "Potassium — Group 1", "Fluorine — Group 7", "Chlorine — Group 7", "Bromine — Group 7", "Helium — Group 0", "Neon — Group 0", "Argon — Group 0"], "Use the column labels; Group 0 is shown as Group 18 on this modern table.", "Using Periodic Table group positions"),
    format: "classification",
    referenceImage: periodicTableReference,
    interaction: { kind: "classification", rows: ["Lithium (Li)", "Sodium (Na)", "Potassium (K)", "Fluorine (F)", "Chlorine (Cl)", "Bromine (Br)", "Helium (He)", "Neon (Ne)", "Argon (Ar)"], categories: ["Group 1", "Group 7", "Group 0"], answers: ["Group 1", "Group 1", "Group 1", "Group 7", "Group 7", "Group 7", "Group 0", "Group 0", "Group 0"] },
  },
];

const interactiveQuestions: WrittenQuestion[] = [
  ...symbolMatchingQuestions,
  ...stateClassificationQuestions,
  {
    ...written("periodic-q073", ["y8sci-periodic-structure", "y8sci-periodic-group1", "y8sci-periodic-group7", "y8sci-periodic-group0"], "short-answer", "Match each Periodic Table label to its meaning.", ["Group — vertical column", "Period — horizontal row", "Group 1 — alkali metals", "Group 7 — halogens", "Group 0 — noble gases"], "Match each label once.", "Groups, periods and group names"),
    format: "matching",
    interaction: { kind: "matching", left: ["Group", "Period", "Group 1", "Group 7", "Group 0"], right: ["Noble gases", "Horizontal row", "Alkali metals", "Vertical column", "Halogens"], answers: [3, 1, 2, 4, 0] },
  },
  {
    ...written("periodic-q074", ["y8sci-periodic-metals-nonmetals", "y8sci-periodic-properties"], "short-answer", "Match each physical-property term to its definition.", ["Malleable — can be pressed into shape", "Sonorous — makes a ringing sound when struck", "Brittle — breaks rather than bends", "Conductor — lets heat or electricity pass", "Dense — much mass in a given volume"], "Match all five terms.", "Physical-property vocabulary"),
    format: "matching",
    interaction: { kind: "matching", left: ["Malleable", "Sonorous", "Brittle", "Conductor", "Dense"], right: ["Breaks rather than bends", "Allows heat or electricity to pass", "Can be hammered or pressed into shape", "Has much mass packed into a given volume", "Makes a ringing sound when struck"], answers: [2, 4, 0, 1, 3] },
  },
  {
    ...written("periodic-q075", ["y8sci-periodic-structure"], "short-answer", "Complete the statements about Periodic Table organisation.", ["groups", "periods", "similar", "left", "right"], "Use the word bank.", "Periodic Table structure"),
    format: "fill-in-the-blank",
    interaction: { kind: "fill-blanks", wordBank: ["groups", "periods", "similar", "left", "right"], sentences: ["Vertical columns are called ______.", "Horizontal rows are called ______.", "Elements in a group normally have ______ properties.", "Metals are to the ______ of the red line.", "Non-metals are to the ______ of the red line."], answers: [["groups", "group"], ["periods", "period"], ["similar"], ["left"], ["right"]] },
  },
  {
    ...written("periodic-q076", ["y8sci-periodic-properties"], "short-answer", "Complete the definitions of physical and chemical properties.", ["generally", "reactions", "reactive", "substances", "products"], "Use the word bank.", "Physical and chemical properties"),
    format: "fill-in-the-blank",
    interaction: { kind: "fill-blanks", wordBank: ["generally", "reactions", "reactive", "substances", "products"], sentences: ["Physical properties describe how a substance behaves ______.", "Chemical properties describe behaviour in chemical ______.", "A chemical property includes how ______ an element is.", "It also includes which other ______ it reacts with.", "It includes the ______ formed in reactions."], answers: [["generally", "in general"], ["reactions", "reaction"], ["reactive"], ["substances", "substance"], ["products", "product"]] },
  },
  {
    ...written("periodic-q077", ["y8sci-periodic-group1"], "short-answer", "Using the supplied Periodic Table, put lithium, sodium and potassium in order from top to bottom of Group 1.", ["Lithium", "Sodium", "Potassium"], "Read the three positions from the table; the learning goal is the direction down the group.", "Group 1 order"),
    format: "ordering",
    referenceImage: periodicTableReference,
    interaction: { kind: "ordering", items: ["Potassium", "Lithium", "Sodium"], answer: ["Lithium", "Sodium", "Potassium"] },
  },
  {
    ...written("periodic-q078", ["y8sci-periodic-group7"], "short-answer", "Using the supplied Periodic Table, put fluorine, chlorine, bromine and iodine in order from top to bottom of Group 7.", ["Fluorine", "Chlorine", "Bromine", "Iodine"], "Read the positions from the table before applying Group 7 trends.", "Group 7 order"),
    format: "ordering",
    referenceImage: periodicTableReference,
    interaction: { kind: "ordering", items: ["Iodine", "Fluorine", "Chlorine", "Bromine"], answer: ["Fluorine", "Chlorine", "Bromine", "Iodine"] },
  },
  {
    ...written("periodic-q079", ["y8sci-periodic-group0"], "short-answer", "Using the supplied Periodic Table, put helium, neon and argon in order from top to bottom of Group 0.", ["Helium", "Neon", "Argon"], "Read the three positions from the table; the learning goal is the direction down the group.", "Group 0 order"),
    format: "ordering",
    referenceImage: periodicTableReference,
    interaction: { kind: "ordering", items: ["Argon", "Helium", "Neon"], answer: ["Helium", "Neon", "Argon"] },
  },
  {
    ...written("periodic-q080", ["y8sci-periodic-group7"], "short-answer", "Complete the Group 7 displacement equation: potassium iodide + ______ → potassium chloride + ______.", ["The missing reactant is chlorine.", "The missing product is iodine."], "Keep reactants on the left and products on the right.", "Group 7 displacement equation"),
    format: "equation-completion",
    interaction: { kind: "fill-blanks", wordBank: ["chlorine", "iodine"], sentences: ["Reactant: potassium iodide + ______", "Products: potassium chloride + ______"], answers: [["chlorine"], ["iodine"]] },
  },
  {
    ...written("periodic-q081", ["y8sci-periodic-properties"], "short-answer", "Classify each example as a physical property or chemical property.", ["Conducts electricity — Physical property", "Dense — Physical property", "Conducts heat — Physical property", "Shiny — Physical property", "Malleable — Physical property", "Sonorous — Physical property", "Melting point — Physical property", "Boiling point — Physical property", "Reactivity — Chemical property", "Substances it reacts with — Chemical property", "Products formed in reactions — Chemical property"], "Use the definitions on the organiser.", "Physical and chemical properties"),
    format: "classification",
    interaction: { kind: "classification", rows: ["Conducts electricity", "Dense", "Conducts heat", "Shiny", "Malleable", "Sonorous", "Melting point", "Boiling point", "Reactivity", "Substances it reacts with", "Products formed in reactions"], categories: ["Physical property", "Chemical property"], answers: ["Physical property", "Physical property", "Physical property", "Physical property", "Physical property", "Physical property", "Physical property", "Physical property", "Chemical property", "Chemical property", "Chemical property"] },
  },
  {
    ...written("periodic-q082", ["y8sci-periodic-metals-nonmetals"], "short-answer", "Classify each property as typical of metals or non-metals.", ["Good conductor of heat — Metal", "Good conductor of electricity — Metal", "Shiny when cut — Metal", "Malleable — Metal", "Dense — Metal", "Sonorous — Metal", "Most have high melting points — Metal", "Poor conductor of heat — Non-metal", "Poor conductor of electricity — Non-metal", "Dull — Non-metal", "Low density — Non-metal", "Brittle — Non-metal", "Not sonorous — Non-metal"], "Use the organiser's general property lists.", "Metals and non-metals"),
    format: "classification",
    interaction: { kind: "classification", rows: ["Good conductor of heat", "Good conductor of electricity", "Shiny when cut", "Malleable", "Dense", "Sonorous", "Most have high melting points", "Poor conductor of heat", "Poor conductor of electricity", "Dull", "Low density", "Brittle", "Not sonorous"], categories: ["Metal", "Non-metal"], answers: ["Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Non-metal", "Non-metal", "Non-metal", "Non-metal", "Non-metal", "Non-metal"] },
  },
];

const questions: KnowledgeQuestion[] = [
  ...multipleChoiceQuestions,
  ...shortAnswerQuestions,
  ...interactiveQuestions,
  ...longAnswerQuestions,
];

export const year8SciencePeriodicTable: KnowledgeOrganiser = {
  id: "year8-science-the-periodic-table",
  year: 8,
  subject: "Science",
  term: "Autumn",
  chapter: 3,
  title: "The Periodic Table",
  introduction: "Explore how the Periodic Table is organised, compare physical and chemical properties, and study the patterns in metals, non-metals and Groups 1, 7 and 0. This chapter is based on the supplied Knowledge Organiser; no teacher-question PDFs were provided.",
  sections,
  flashcards,
  questions,
};
