import type {
  KnowledgeFlashcard,
  KnowledgeOrganiser,
  KnowledgeQuestion,
  KnowledgeSection,
  MultipleChoiceQuestion,
  WrittenQuestion,
} from "./types";

const KO_SOURCE =
  "P2 Chapter 1: Electricity and magnetism Knowledge organiser (user-supplied image; registered on the site as Year 8 Science Chapter 5)";

const vocabularyDefinitions: Record<string, string> = {
  ammeter: "A device used to measure current; it is connected in series.",
  attract: "To pull towards another object or pole.",
  conductor: "A material or component with low resistance, so current can pass through it easily.",
  current: "The amount of charge flowing per second.",
  electron: "A negatively charged particle that can be transferred when insulators are rubbed together.",
  "electric field": "The region around a charged object in which another charge experiences a force.",
  electromagnet: "A magnet made by passing current through a coil of wire; it is magnetic only while current flows.",
  insulator: "A material with high resistance through which current does not pass easily.",
  repel: "To push away from another object or pole.",
  magnet: "An object with a magnetic field and north and south poles.",
  "magnetic field line": "A line used to represent a magnetic field; closer lines show a stronger field.",
  motor: "A device driven by the force between an electromagnetic coil and a nearby permanent magnet.",
  "north pole": "One end of a magnet; it attracts a south pole and repels another north pole.",
  ohm: "The unit of resistance, with the symbol Ω.",
  parallel: "A circuit arrangement with multiple branches.",
  "potential difference": "The amount of energy transferred by charges in a circuit.",
  resistance: "A measure of how easy it is for current to pass through a component.",
  series: "A circuit arrangement in which all components are connected in one loop.",
  "static electricity": "A build-up of charge caused when electrons are transferred as insulators are rubbed together.",
  "south pole": "One end of a magnet; it attracts a north pole and repels another south pole.",
  volt: "The unit of potential difference, with the symbol V.",
  voltmeter: "A device used to measure potential difference; it is connected in parallel.",
};

const sections: KnowledgeSection[] = [
  {
    id: "y8sci-electricity-charging",
    title: "Charging Up",
    context: "Static electricity, electron transfer and electric fields",
    summary:
      "Rubbing insulators transfers electrons, creating charged objects that attract or repel and have electric fields around them.",
    colour: "#15803d",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Charging up`,
    keyFacts: [
      "Static electricity is produced when insulators are rubbed together and electrons are transferred.",
      "The organiser states that transferred electrons give the objects magnetic charges; this wording is retained with the user's explicit approval.",
      "Like charges repel, while opposite charges attract.",
      "Charged objects have electric fields around them, and field lines show how a positive charge will act.",
    ],
    keyTerms: ["static electricity", "electron", "electric field", "attract", "repel", "insulator"],
  },
  {
    id: "y8sci-electricity-current",
    title: "Circuits and Current",
    context: "Charge flow, ammeters and the amp",
    summary:
      "Current measures how much charge flows each second and is measured in amps by an ammeter connected in series.",
    colour: "#16a34a",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Circuits and currents`,
    keyFacts: [
      "Current is the amount of charge flowing per second.",
      "Current is measured with an ammeter connected in series.",
      "The unit for current is the amp, with the symbol A.",
    ],
    keyTerms: ["current", "ammeter"],
  },
  {
    id: "y8sci-electricity-pd-resistance",
    title: "Potential Difference and Resistance",
    context: "Energy transfer, measuring instruments, units and the resistance equation",
    summary:
      "Potential difference describes energy transferred by charges, while resistance describes how easily current passes through a component.",
    colour: "#166534",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Potential difference and Resistance`,
    keyFacts: [
      "Potential difference is the amount of energy transferred by the charges in a circuit.",
      "Potential difference is measured with a voltmeter connected in parallel.",
      "The unit for potential difference is the volt, with the symbol V.",
      "Resistance is a measure of how easy it is for current to pass through a component.",
      "Conductors have low resistance.",
      "Insulators have high resistance.",
      "Resistance is calculated by measuring potential difference and current.",
      "Resistance in ohms equals potential difference in volts divided by current in amps: R = V ÷ I.",
      "The unit for resistance is the ohm, with the symbol Ω.",
    ],
    keyTerms: ["potential difference", "voltmeter", "volt", "resistance", "ohm", "conductor"],
  },
  {
    id: "y8sci-electricity-series-parallel",
    title: "Series and Parallel Circuits",
    context: "Comparing loops, branches, current and potential difference",
    summary:
      "Series circuits have one loop, while parallel circuits have branches; current and potential difference behave differently in each arrangement.",
    colour: "#22c55e",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Series and parallel circuits`,
    keyFacts: [
      "In a series circuit, all components are connected in one loop.",
      "If one component or wire breaks in a series circuit, current stops flowing everywhere.",
      "A series circuit contains only one loop.",
      "Current is the same everywhere in a series circuit.",
      "The potential differences across components in series add up to the potential difference across the battery.",
      "A parallel circuit contains multiple branches.",
      "The currents in all parallel branches add up to make the total current.",
      "The potential difference across each parallel component is the same as the potential difference across the battery.",
    ],
    keyTerms: ["series", "parallel"],
  },
  {
    id: "y8sci-electricity-magnets",
    title: "Magnets and Magnetic Fields",
    context: "Poles, attraction and repulsion, field strength and the Earth's field",
    summary:
      "Magnets have north and south poles and fields whose strength is represented by the spacing of magnetic field lines.",
    colour: "#15803d",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Magnets and Magnetic fields`,
    keyFacts: [
      "Magnets have north and south poles.",
      "Opposite magnetic poles attract, while the same magnetic poles repel.",
      "A magnet has a magnetic field around it.",
      "The magnetic field around a bar magnet can be seen using a small compass or iron filings.",
      "When magnetic field lines are closer together, the magnetic field is stronger.",
      "The Earth has a magnetic field and acts like a big bar magnet, with the south pole at the top of the planet.",
    ],
    keyTerms: ["magnet", "magnetic field line", "north pole", "south pole"],
  },
  {
    id: "y8sci-electricity-electromagnets",
    title: "Electromagnets",
    context: "Current in a coil, iron cores and changing electromagnet strength",
    summary:
      "An electromagnet is a current-carrying coil that can be switched off and made stronger with an iron core, more turns or more current.",
    colour: "#16a34a",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Electromagnets`,
    keyFacts: [
      "Electromagnets are magnetic only when current flows, so they can be turned off.",
      "An electromagnet is made by running a current through a coil of wire.",
      "An iron core in the middle of the coil makes an electromagnet stronger.",
      "Adding more turns of wire to the coil makes an electromagnet stronger.",
      "Using more current makes an electromagnet stronger.",
    ],
    keyTerms: ["electromagnet"],
  },
  {
    id: "y8sci-electricity-uses-motors",
    title: "Uses of Electromagnets and Motors",
    context: "Applications of electromagnets and the force that drives a motor",
    summary:
      "Electromagnets move and sort metal, work in motors and speakers, and help levitating trains; motors use a force between a coil and a permanent magnet.",
    colour: "#166534",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Uses of electromagnets and How motors work`,
    keyFacts: [
      "Electromagnets can be used for moving cars or other metal objects.",
      "Electromagnets can sort iron and steel from aluminium.",
      "Electromagnets are used to make motors and speakers.",
      "Electromagnets are used to make levitating trains, which travel much faster because there is no friction.",
      "Applying a current to a coil of wire makes it electromagnetic.",
      "A force between the coil of wire and a nearby permanent magnet drives a motor.",
    ],
    keyTerms: ["motor"],
  },
];

const flashcardFactQuestions: Record<string, string[]> = {
  "y8sci-electricity-charging": [
    "How is static electricity produced when two insulators are rubbed together?",
    "According to the organiser, what kind of charges are given to objects when electrons transfer?",
    "How do like charges and opposite charges behave?",
    "What surrounds a charged object, and what do its field lines show?",
  ],
  "y8sci-electricity-current": [
    "What does electric current measure?",
    "Which instrument measures current, and how is it connected?",
    "What is the unit and symbol for current?",
  ],
  "y8sci-electricity-pd-resistance": [
    "What does potential difference describe in a circuit?",
    "Which instrument measures potential difference, and how is it connected?",
    "What is the unit and symbol for potential difference?",
    "What does electrical resistance measure?",
    "What level of resistance do conductors have?",
    "What level of resistance do insulators have?",
    "Which two quantities must be measured to calculate resistance?",
    "What equation links resistance, potential difference and current?",
    "What is the unit and symbol for resistance?",
  ],
  "y8sci-electricity-series-parallel": [
    "How are components connected in a series circuit?",
    "What happens to current if one component or wire breaks in a series circuit?",
    "How many loops does a series circuit contain?",
    "How does current vary around a series circuit?",
    "How do component potential differences relate to the battery potential difference in series?",
    "What structural feature does a parallel circuit have?",
    "How are the currents in parallel branches related to total current?",
    "How does the potential difference across a parallel component compare with the battery?",
  ],
  "y8sci-electricity-magnets": [
    "Which two poles does every magnet have?",
    "How do opposite magnetic poles and the same magnetic poles behave?",
    "What surrounds a magnet?",
    "How can the magnetic field around a bar magnet be made visible?",
    "What does closer spacing between magnetic field lines show?",
    "How does the organiser describe the Earth's magnetic field and its pole at the top of the planet?",
  ],
  "y8sci-electricity-electromagnets": [
    "When is an electromagnet magnetic, and why can it be turned off?",
    "How is an electromagnet made from a coil of wire?",
    "How does an iron core affect an electromagnet?",
    "How does adding more turns of wire affect an electromagnet?",
    "How does increasing current affect an electromagnet?",
  ],
  "y8sci-electricity-uses-motors": [
    "How can electromagnets be used to move metal objects?",
    "How can electromagnets separate iron and steel from aluminium?",
    "Which two devices can be made using electromagnets?",
    "Why can electromagnet-based levitating trains travel much faster?",
    "What happens to a coil of wire when a current is applied?",
    "What force interaction drives a motor?",
  ],
};

const flashcards: KnowledgeFlashcard[] = sections.flatMap(section => [
  ...section.keyFacts.map((fact, index) => ({
    id: `${section.id}-fact-${index + 1}`,
    sectionId: section.id,
    front: flashcardFactQuestions[section.id][index],
    back: fact,
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: `${section.sourceRef}: fact ${index + 1}`,
  })),
  ...section.keyTerms.map((term, index) => ({
    id: `${section.id}-term-${index + 1}`,
    sectionId: section.id,
    front: `Define ${term}.`,
    back: vocabularyDefinitions[term],
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: `${KO_SOURCE}: Key terms — ${term}`,
  })),
]);

const generatedRef = (section: string) =>
  `Generated supplement derived only from ${KO_SOURCE}: ${section}`;

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
  mcq("electricity-magnetism-q001", "y8sci-electricity-charging", "What is transferred when two insulators are rubbed together?", ["Electrons", "North poles", "Ohms", "Ammeters"], "Electrons", "The organiser states that rubbing insulators transfers electrons.", "Charging up"),
  mcq("electricity-magnetism-q002", "y8sci-electricity-charging", "How do like charges behave?", ["They repel", "They attract", "They become current", "They lose all fields"], "They repel", "Like charges repel, while opposite charges attract.", "Charging up"),
  mcq("electricity-magnetism-q003", "y8sci-electricity-charging", "What do electric field lines around a charged object show?", ["How a positive charge will act", "The object's resistance", "The current in amps", "The object's magnetic poles"], "How a positive charge will act", "The organiser uses field lines to show how a positive charge will act.", "Charging up"),

  mcq("electricity-magnetism-q004", "y8sci-electricity-current", "What is electric current?", ["The amount of charge flowing per second", "The energy stored by a magnet", "The resistance of a component", "The number of circuit branches"], "The amount of charge flowing per second", "Current is the amount of charge flowing per second.", "Circuits and currents"),
  mcq("electricity-magnetism-q005", "y8sci-electricity-current", "How is an ammeter connected?", ["In series", "In parallel", "Across a magnet", "Outside the circuit"], "In series", "An ammeter is connected in series to measure current.", "Circuits and currents"),
  mcq("electricity-magnetism-q006", "y8sci-electricity-current", "Which symbol is used for the unit of current?", ["A", "V", "Ω", "N"], "A", "Current is measured in amps, symbol A.", "Circuits and currents"),

  mcq("electricity-magnetism-q007", "y8sci-electricity-pd-resistance", "What does potential difference measure?", ["Energy transferred by charges", "Charge flowing per second", "Magnetic field strength", "Number of wire turns"], "Energy transferred by charges", "Potential difference is the amount of energy transferred by charges in the circuit.", "Potential difference"),
  mcq("electricity-magnetism-q008", "y8sci-electricity-pd-resistance", "How is a voltmeter connected?", ["In parallel", "In series", "Inside an iron core", "Around a compass"], "In parallel", "A voltmeter is connected in parallel.", "Potential difference"),
  mcq("electricity-magnetism-q009", "y8sci-electricity-pd-resistance", "Which equation calculates resistance?", ["R = V ÷ I", "R = V × I", "R = I ÷ V", "R = V + I"], "R = V ÷ I", "Resistance equals potential difference divided by current.", "Resistance"),
  mcq("electricity-magnetism-q010", "y8sci-electricity-pd-resistance", "Which statement compares conductors and insulators correctly?", ["Conductors have low resistance; insulators have high resistance", "Conductors have high resistance; insulators have low resistance", "Both always have zero resistance", "Both always have the same resistance"], "Conductors have low resistance; insulators have high resistance", "The organiser contrasts low-resistance conductors with high-resistance insulators.", "Resistance"),

  mcq("electricity-magnetism-q011", "y8sci-electricity-series-parallel", "What happens if one component breaks in a series circuit?", ["Current stops everywhere", "Only parallel branches stop", "Current doubles everywhere", "Potential difference becomes zero only in the battery"], "Current stops everywhere", "A series circuit has one loop, so a break stops current throughout it.", "Series circuits"),
  mcq("electricity-magnetism-q012", "y8sci-electricity-series-parallel", "How does current behave in a series circuit?", ["It is the same everywhere", "It splits into branches", "It is measured in volts", "It is greatest at the battery only"], "It is the same everywhere", "Current is the same everywhere in a series circuit.", "Series circuits"),
  mcq("electricity-magnetism-q013", "y8sci-electricity-series-parallel", "How do currents in parallel branches relate to total current?", ["They add up to the total current", "Each equals zero", "They add up to potential difference", "They are measured in ohms"], "They add up to the total current", "The branch currents add up to make the total current.", "Parallel circuits"),
  mcq("electricity-magnetism-q014", "y8sci-electricity-series-parallel", "How does potential difference across each parallel component compare with the battery?", ["It is the same", "It is always double", "It is always zero", "It is measured in amps"], "It is the same", "Each parallel component has the same potential difference as the battery.", "Parallel circuits"),

  mcq("electricity-magnetism-q015", "y8sci-electricity-magnets", "Which magnetic poles attract?", ["Opposite poles", "Two north poles", "Two south poles", "All identical poles"], "Opposite poles", "Opposite magnetic poles attract; the same poles repel.", "Magnets"),
  mcq("electricity-magnetism-q016", "y8sci-electricity-magnets", "What does close spacing between magnetic field lines show?", ["A stronger field", "A weaker field", "A higher resistance", "A lower current"], "A stronger field", "Closer field lines represent a stronger magnetic field.", "Magnetic fields"),
  mcq("electricity-magnetism-q017", "y8sci-electricity-magnets", "How can the field around a bar magnet be observed?", ["With a small compass or iron filings", "With only a voltmeter", "With an ammeter in parallel", "By measuring resistance only"], "With a small compass or iron filings", "A small compass or iron filings can show the field around a bar magnet.", "Magnetic fields"),

  mcq("electricity-magnetism-q018", "y8sci-electricity-electromagnets", "When is an electromagnet magnetic?", ["Only while current flows", "Only when current stops", "Only without a coil", "Permanently"], "Only while current flows", "Electromagnets are magnetic only while current flows, so they can be switched off.", "Electromagnets"),
  mcq("electricity-magnetism-q019", "y8sci-electricity-electromagnets", "Which change makes an electromagnet stronger?", ["Adding an iron core", "Removing every turn of wire", "Reducing current to zero", "Breaking the circuit"], "Adding an iron core", "An iron core in the coil makes the electromagnet stronger.", "Electromagnets"),
  mcq("electricity-magnetism-q020", "y8sci-electricity-electromagnets", "Which pair of changes both strengthens an electromagnet?", ["More coil turns and more current", "Fewer coil turns and no current", "Less current and no iron core", "A broken wire and fewer turns"], "More coil turns and more current", "More turns and more current both strengthen an electromagnet.", "Electromagnets"),

  mcq("electricity-magnetism-q021", "y8sci-electricity-uses-motors", "Which material can be separated from iron and steel using an electromagnet?", ["Aluminium", "More iron", "More steel", "A permanent magnet"], "Aluminium", "The organiser lists sorting iron and steel from aluminium as an electromagnet use.", "Uses of electromagnets"),
  mcq("electricity-magnetism-q022", "y8sci-electricity-uses-motors", "Why can levitating trains travel much faster?", ["There is no friction", "Their resistance is always high", "Their current stops everywhere", "They contain only one loop"], "There is no friction", "The organiser links their higher speed to the absence of friction.", "Uses of electromagnets"),
  mcq("electricity-magnetism-q023", "y8sci-electricity-uses-motors", "What drives a motor in the organiser's explanation?", ["A force between the coil and a nearby permanent magnet", "A voltmeter connected in parallel", "A break in a series circuit", "Two identical magnetic poles attracting"], "A force between the coil and a nearby permanent magnet", "The motor is driven by the force between an electromagnetic coil and a nearby permanent magnet.", "How motors work"),
];

const shortAnswerQuestions: WrittenQuestion[] = [
  written("electricity-magnetism-q024", ["y8sci-electricity-charging"], "short-answer", "Describe how rubbing two insulators produces static electricity.", ["Rubbing the insulators transfers electrons.", "The organiser states that this gives the objects magnetic charges."], "State what is transferred and use the organiser's approved original wording for the result.", "Charging up"),
  written("electricity-magnetism-q025", ["y8sci-electricity-charging"], "short-answer", "State how like charges and opposite charges behave.", ["Like charges repel.", "Opposite charges attract."], "Give both rules.", "Charging up"),
  written("electricity-magnetism-q026", ["y8sci-electricity-charging"], "short-answer", "What is an electric field, and what do the organiser's field lines show?", ["A charged object has an electric field around it.", "The field lines show how a positive charge will act."], "Include both the field and the meaning of its lines.", "Charging up"),

  written("electricity-magnetism-q027", ["y8sci-electricity-current"], "short-answer", "Define current and give its unit and symbol.", ["Current is the amount of charge flowing per second.", "Its unit is the amp, symbol A."], "Give the definition and unit.", "Circuits and currents"),
  written("electricity-magnetism-q028", ["y8sci-electricity-current"], "short-answer", "Which instrument measures current, and how must it be connected?", ["An ammeter measures current.", "It is connected in series."], "Name the instrument and connection.", "Circuits and currents"),
  written("electricity-magnetism-q029", ["y8sci-electricity-current"], "short-answer", "State the meaning of an ammeter reading of 2 A.", ["It is a measurement of current.", "The current is two amps, representing charge flowing per second."], "Connect the reading to the organiser's current definition.", "Circuits and currents"),

  written("electricity-magnetism-q030", ["y8sci-electricity-pd-resistance"], "short-answer", "Define potential difference and state its unit.", ["Potential difference is the amount of energy transferred by charges in a circuit.", "Its unit is the volt, symbol V."], "Give the definition and unit.", "Potential difference"),
  written("electricity-magnetism-q031", ["y8sci-electricity-pd-resistance"], "short-answer", "Which instrument measures potential difference, and how must it be connected?", ["A voltmeter measures potential difference.", "It is connected in parallel."], "Name the instrument and connection.", "Potential difference"),
  written("electricity-magnetism-q032", ["y8sci-electricity-pd-resistance"], "short-answer", "Compare the resistance of conductors and insulators.", ["Conductors have low resistance.", "Insulators have high resistance."], "Make a direct comparison.", "Resistance"),
  written("electricity-magnetism-q033", ["y8sci-electricity-pd-resistance"], "short-answer", "Give the resistance equation, including the quantity and unit represented by each part.", ["Resistance in ohms equals potential difference in volts divided by current in amps.", "The equation is R = V ÷ I."], "Include words, units and symbols.", "Resistance"),

  written("electricity-magnetism-q034", ["y8sci-electricity-series-parallel"], "short-answer", "Describe a series circuit and what happens if one wire or component breaks.", ["All components are connected in one loop.", "A break stops current flowing everywhere."], "Include structure and consequence.", "Series circuits"),
  written("electricity-magnetism-q035", ["y8sci-electricity-series-parallel"], "short-answer", "State the current and potential-difference rules for a series circuit.", ["Current is the same everywhere.", "Component potential differences add up to the potential difference across the battery."], "Give both rules.", "Series circuits"),
  written("electricity-magnetism-q036", ["y8sci-electricity-series-parallel"], "short-answer", "State the current and potential-difference rules for a parallel circuit.", ["Branch currents add up to make the total current.", "Potential difference across each component is the same as across the battery."], "Give both rules.", "Parallel circuits"),

  written("electricity-magnetism-q037", ["y8sci-electricity-magnets"], "short-answer", "State the attraction and repulsion rules for magnetic poles.", ["Opposite magnetic poles attract.", "The same magnetic poles repel."], "Give both rules.", "Magnets"),
  written("electricity-magnetism-q038", ["y8sci-electricity-magnets"], "short-answer", "How can a magnetic field be observed, and what indicates a stronger field?", ["A small compass or iron filings can show the field around a bar magnet.", "Closer field lines indicate a stronger field."], "Give a method and the strength clue.", "Magnetic fields"),
  written("electricity-magnetism-q039", ["y8sci-electricity-magnets"], "short-answer", "How does the organiser describe the Earth's magnetic field?", ["The Earth has a magnetic field and acts like a big bar magnet.", "Its south pole is at the top of the planet."], "Include both statements from the organiser.", "Magnetic fields"),

  written("electricity-magnetism-q040", ["y8sci-electricity-electromagnets"], "short-answer", "Explain why an electromagnet can be switched off.", ["It is magnetic only while current flows.", "Stopping the current switches off its magnetism."], "Link the current to magnetism.", "Electromagnets"),
  written("electricity-magnetism-q041", ["y8sci-electricity-electromagnets"], "short-answer", "Describe how an electromagnet is made and how an iron core affects it.", ["Current is passed through a coil of wire.", "An iron core in the coil makes the electromagnet stronger."], "Include coil, current and core.", "Electromagnets"),
  written("electricity-magnetism-q042", ["y8sci-electricity-electromagnets"], "short-answer", "Give two ways to make an electromagnet stronger.", ["Add more turns of wire to the coil.", "Use more current."], "Give both methods from the organiser.", "Electromagnets"),

  written("electricity-magnetism-q043", ["y8sci-electricity-uses-motors"], "short-answer", "Give all four uses of electromagnets listed on the organiser.", ["Moving cars or other metal objects.", "Sorting iron and steel from aluminium.", "Making motors and speakers.", "Making levitating trains."], "Give all four source examples.", "Uses of electromagnets"),
  written("electricity-magnetism-q044", ["y8sci-electricity-uses-motors"], "short-answer", "Explain the two stages in the organiser's description of how a motor works.", ["Applying current to a coil makes it electromagnetic.", "A force between the coil and a nearby permanent magnet drives the motor."], "Follow the two boxes in order.", "How motors work"),
  written("electricity-magnetism-q045", ["y8sci-electricity-uses-motors"], "short-answer", "Why can a levitating train travel much faster according to the organiser?", ["The train levitates.", "There is no friction, allowing it to travel much faster."], "Link levitation to reduced friction and speed.", "Uses of electromagnets"),
];

const longAnswerQuestions: WrittenQuestion[] = [
  written("electricity-magnetism-q046", ["y8sci-electricity-charging"], "long-answer", "Explain charging by friction and the behaviour of charged objects using all the organiser's key ideas.", ["Rubbing insulators transfers electrons.", "States the organiser's approved wording that the objects gain magnetic charges.", "Explains that like charges repel.", "Explains that opposite charges attract.", "States that charged objects have electric fields around them.", "Explains that the field lines show how a positive charge will act."], "Build a connected explanation from electron transfer to forces and fields.", "Charging up"),
  written("electricity-magnetism-q047", ["y8sci-electricity-current", "y8sci-electricity-pd-resistance"], "long-answer", "Compare current, potential difference and resistance, including definitions, instruments, connections, units and the resistance equation.", ["Defines current as charge flowing per second.", "States that an ammeter is connected in series and current is measured in amps (A).", "Defines potential difference as energy transferred by charges.", "States that a voltmeter is connected in parallel and potential difference is measured in volts (V).", "Defines resistance as how easily current passes through a component.", "Gives R = V ÷ I and the unit ohm (Ω)."], "Organise the answer by quantity and make each measurement detail clear.", "Circuit quantities"),
  written("electricity-magnetism-q048", ["y8sci-electricity-series-parallel"], "long-answer", "Compare series and parallel circuits using loops or branches, breaks, current and potential difference.", ["States that a series circuit has one loop.", "Explains that a break stops current everywhere in series.", "States that current is the same everywhere in series.", "States that series component potential differences add to the battery potential difference.", "States that a parallel circuit has multiple branches.", "States that parallel branch currents add to total current.", "States that each parallel component has the same potential difference as the battery."], "Make direct comparisons using all four features.", "Series and parallel circuits"),
  written("electricity-magnetism-q049", ["y8sci-electricity-magnets"], "long-answer", "Describe magnets and magnetic fields, including poles, observing a field, field strength and the Earth's field.", ["Identifies north and south poles.", "States that opposite poles attract and the same poles repel.", "States that a magnet has a magnetic field around it.", "States that a small compass or iron filings can show a bar magnet's field.", "Explains that closer field lines mean a stronger field.", "Describes the Earth as having a magnetic field like a big bar magnet, with the south pole at the top."], "Use every magnetic-field idea from the organiser.", "Magnets and magnetic fields"),
  written("electricity-magnetism-q050", ["y8sci-electricity-electromagnets"], "long-answer", "Explain how an electromagnet works and how its strength can be increased.", ["Current through a coil of wire makes an electromagnet.", "It is magnetic only while current flows, so it can be turned off.", "An iron core makes it stronger.", "More turns of wire make it stronger.", "More current makes it stronger."], "Link the current, coil, switching and three strength ideas.", "Electromagnets"),
  written("electricity-magnetism-q051", ["y8sci-electricity-electromagnets", "y8sci-electricity-uses-motors"], "long-answer", "Explain the organiser's uses of electromagnets and how an electric motor is driven.", ["Identifies moving cars or other metal objects.", "Identifies sorting iron and steel from aluminium.", "Identifies motors and speakers.", "Identifies levitating trains and links their speed to no friction.", "Explains that current makes the coil electromagnetic.", "Explains that a force between the coil and nearby permanent magnet drives the motor."], "Include every listed use and both motor stages.", "Uses of electromagnets and motors"),
];

const interactiveQuestions: WrittenQuestion[] = [
  {
    ...written("electricity-magnetism-q052", ["y8sci-electricity-current", "y8sci-electricity-pd-resistance"], "short-answer", "Match each electrical quantity to its measuring instrument or unit.", ["Current — ammeter", "Current — amp (A)", "Potential difference — voltmeter", "Potential difference — volt (V)", "Resistance — ohm (Ω)"], "Match all five rows.", "Electrical quantities, instruments and units"),
    format: "matching",
    interaction: {
      kind: "matching",
      left: ["Current — instrument", "Current — unit", "Potential difference — instrument", "Potential difference — unit", "Resistance — unit"],
      right: ["Volt (V)", "Ammeter", "Ohm (Ω)", "Voltmeter", "Amp (A)"],
      answers: [1, 4, 3, 0, 2],
    },
  },
  {
    ...written("electricity-magnetism-q053", ["y8sci-electricity-charging", "y8sci-electricity-magnets"], "short-answer", "Match each attraction, repulsion or field term to its meaning.", ["Attract — pull towards", "Repel — push away", "Electric field — region around a charged object", "Magnetic field line — represents a magnetic field", "Magnet — object with north and south poles"], "Match every term once.", "Fields and forces vocabulary"),
    format: "matching",
    interaction: {
      kind: "matching",
      left: ["Attract", "Repel", "Electric field", "Magnetic field line", "Magnet"],
      right: ["Object with north and south poles", "Region around a charged object", "Pull towards", "Represents a magnetic field", "Push away"],
      answers: [2, 4, 1, 3, 0],
    },
  },
  {
    ...written("electricity-magnetism-q054", ["y8sci-electricity-electromagnets", "y8sci-electricity-uses-motors"], "short-answer", "Match each electromagnet or motor feature to its effect or use.", ["Iron core — stronger electromagnet", "More coil turns — stronger electromagnet", "More current — stronger electromagnet", "Current in a coil — makes it electromagnetic", "Coil and permanent magnet force — drives a motor"], "Match all five features.", "Electromagnets and motors"),
    format: "matching",
    interaction: {
      kind: "matching",
      left: ["Iron core", "More coil turns", "More current", "Current in a coil", "Force between coil and permanent magnet"],
      right: ["Drives a motor", "Makes the coil electromagnetic", "Makes the electromagnet stronger by increasing current", "Makes the electromagnet stronger through its core", "Makes the electromagnet stronger through extra turns"],
      answers: [3, 4, 2, 1, 0],
    },
  },
  {
    ...written("electricity-magnetism-q055", ["y8sci-electricity-current", "y8sci-electricity-pd-resistance"], "short-answer", "Complete the electrical quantity statements.", ["charge", "series", "energy", "parallel", "ohm"], "Use the word bank.", "Current, potential difference and resistance"),
    format: "fill-in-the-blank",
    interaction: {
      kind: "fill-blanks",
      wordBank: ["charge", "series", "energy", "parallel", "ohm"],
      sentences: ["Current is the amount of ______ flowing per second.", "An ammeter is connected in ______.", "Potential difference is the amount of ______ transferred by charges.", "A voltmeter is connected in ______.", "The unit of resistance is the ______."],
      answers: [["charge"], ["series"], ["energy"], ["parallel"], ["ohm", "Ω"]],
    },
  },
  {
    ...written("electricity-magnetism-q056", ["y8sci-electricity-pd-resistance"], "short-answer", "Complete the resistance equation and unit labels.", ["resistance", "potential difference", "current", "ohms", "volts", "amps"], "Use every word once.", "Resistance equation"),
    format: "fill-in-the-blank",
    interaction: {
      kind: "fill-blanks",
      wordBank: ["resistance", "potential difference", "current", "ohms", "volts", "amps"],
      sentences: [
        "The quantity on the left of the equation is ______.",
        "Resistance is measured in ______.",
        "The numerator is ______.",
        "Potential difference is measured in ______.",
        "The denominator is ______.",
        "Current is measured in ______.",
      ],
      answers: [["resistance"], ["ohms", "ohm", "Ω"], ["potential difference", "voltage"], ["volts", "volt", "V"], ["current"], ["amps", "amp", "amperes", "ampere", "A"]],
    },
  },
  {
    ...written("electricity-magnetism-q057", ["y8sci-electricity-uses-motors"], "short-answer", "Put the motor mechanism in order.", ["Apply a current to a coil of wire.", "The coil becomes electromagnetic.", "A force acts between the coil and the nearby permanent magnet.", "The force drives the motor."], "Begin with applying the current.", "How motors work"),
    format: "ordering",
    interaction: {
      kind: "ordering",
      items: ["The force drives the motor.", "The coil becomes electromagnetic.", "Apply a current to a coil of wire.", "A force acts between the coil and the nearby permanent magnet."],
      answer: ["Apply a current to a coil of wire.", "The coil becomes electromagnetic.", "A force acts between the coil and the nearby permanent magnet.", "The force drives the motor."],
    },
  },
  {
    ...written("electricity-magnetism-q058", ["y8sci-electricity-series-parallel"], "short-answer", "Classify each circuit statement as series or parallel.", ["One loop — Series", "Multiple branches — Parallel", "Current is the same everywhere — Series", "Branch currents add to total current — Parallel", "Component potential differences add to the battery — Series", "Each component has the battery potential difference — Parallel"], "Use the circuit rules from the organiser.", "Series and parallel circuits"),
    format: "classification",
    interaction: {
      kind: "classification",
      rows: ["One loop", "Multiple branches", "Current is the same everywhere", "Branch currents add to total current", "Component potential differences add to the battery", "Each component has the battery potential difference"],
      categories: ["Series", "Parallel"],
      answers: ["Series", "Parallel", "Series", "Parallel", "Series", "Parallel"],
    },
  },
  {
    ...written("electricity-magnetism-q059", ["y8sci-electricity-pd-resistance", "y8sci-electricity-electromagnets"], "short-answer", "Classify each description as conductor, insulator or electromagnet.", ["Low resistance — Conductor", "High resistance — Insulator", "Magnetic only while current flows — Electromagnet", "Made from a current-carrying coil — Electromagnet", "Allows current to pass easily — Conductor", "Does not allow current to pass easily — Insulator"], "Classify every description.", "Conductors, insulators and electromagnets"),
    format: "classification",
    interaction: {
      kind: "classification",
      rows: ["Low resistance", "High resistance", "Magnetic only while current flows", "Made from a current-carrying coil", "Allows current to pass easily", "Does not allow current to pass easily"],
      categories: ["Conductor", "Insulator", "Electromagnet"],
      answers: ["Conductor", "Insulator", "Electromagnet", "Electromagnet", "Conductor", "Insulator"],
    },
  },
];

const questions: KnowledgeQuestion[] = [
  ...multipleChoiceQuestions,
  ...shortAnswerQuestions,
  ...interactiveQuestions,
  ...longAnswerQuestions,
];

export const year8ScienceElectricityAndMagnetism: KnowledgeOrganiser = {
  id: "year8-science-electricity-and-magnetism",
  year: 8,
  subject: "Science",
  term: "Autumn",
  chapter: 5,
  title: "Electricity and Magnetism",
  introduction:
    "Explore static electricity, current, potential difference, resistance, series and parallel circuits, magnets, electromagnets and motors. This chapter is based on the supplied Knowledge Organiser; no teacher-question PDFs were provided.",
  sections,
  flashcards,
  questions,
};
