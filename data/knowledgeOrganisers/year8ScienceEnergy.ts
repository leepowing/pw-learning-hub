import type {
  KnowledgeFlashcard,
  KnowledgeOrganiser,
  KnowledgeQuestion,
  KnowledgeSection,
  MultipleChoiceQuestion,
  WrittenQuestion,
} from "./types";

const KO_SOURCE =
  "P2 Chapter 2: Energy Knowledge organiser (user-supplied image IMG_8855.jpeg; registered on the site as Year 8 Science Chapter 6)";

const vocabularyDefinitions: Record<string, string> = {
  absorb: "To take in radiation rather than reflect it.",
  "chemical store": "The energy store associated with food and fuel.",
  conduction: "The transfer of thermal energy as vibrating particles collide with other particles; it occurs in solids.",
  convection: "The transfer of thermal energy in liquids or gases as hotter, less dense parts rise and cooler, denser parts fall.",
  "convection current": "The continuing cycle in which hotter parts rise and cooler, denser parts fall in a liquid or gas.",
  equilibrium: "According to the organiser, equilibrium is when objects have the same thermal energy.",
  "fossil fuel": "Coal, oil or gas formed from fossilised remains millions of years ago.",
  gear: "A simple machine that can make work easier without providing more energy than is put in.",
  "greenhouse gas": "A gas such as carbon dioxide that is produced when fossil fuels are burned.",
  "infrared radiation": "A wave that transfers energy without particles.",
  insulator: "A material that reduces the transfer of thermal energy.",
  joule: "The unit used to measure energy, with the symbol J.",
  kilowatt: "A unit of power; one kilowatt is written kW.",
  "kinetic energy": "The energy of moving particles; heated particles gain more kinetic energy and move or vibrate faster.",
  "law of conservation of energy": "Energy cannot be created or destroyed, only transferred.",
  lever: "A simple machine that can make work easier without providing more energy than is put in.",
  "non-renewable": "A resource that cannot be reused and will eventually run out.",
  "power station": "A place where energy from fuel is transferred to generate electrical current.",
  radiation: "A way of transferring energy by waves; it can be absorbed or reflected.",
  renewable: "A resource that will not run out.",
  reflect: "To send radiation away from a surface rather than absorb it.",
  "thermal energy": "The total energy of the particles in an object.",
  thermometer: "An instrument that measures temperature in degrees Celsius (°C).",
  work: "Energy transferred when a force moves an object through a distance.",
};

const sections: KnowledgeSection[] = [
  {
    id: "y8sci-energy-conservation",
    title: "Energy Conservation and Transfer",
    context: "Energy stores and ways energy is transferred",
    summary:
      "Energy cannot be created or destroyed; the total energy before a transfer equals the total energy after it.",
    colour: "#15803d",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Energy adds up`,
    keyFacts: [
      "The law of conservation of energy states that energy cannot be created or destroyed, only transferred.",
      "Total energy before = total energy after.",
      "Light, sound, and electricity are ways of transferring energy between different stores.",
    ],
    keyTerms: ["law of conservation of energy"],
  },
  {
    id: "y8sci-energy-temperature",
    title: "Energy and Temperature",
    context: "Temperature, thermal energy, particle motion and equilibrium",
    summary:
      "Temperature measures average energy, while thermal energy measures total energy; heating changes particle kinetic energy.",
    colour: "#16a34a",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Energy and temperature`,
    keyFacts: [
      "Thermometers measure temperature in degrees Celsius (°C).",
      "Temperature measures the average energy.",
      "Thermal energy measures the total energy.",
      "A warm bath has more thermal energy than a heated kettle, even though the kettle has a higher temperature.",
      "As we heat things the particles gain more kinetic energy, and vibrate more or faster.",
      "The energy needed to heat an object depends on the mass, material and temperature rise.",
      "Equilibrium is when objects have the same thermal energy.",
    ],
    keyTerms: ["thermometer", "thermal energy", "kinetic energy", "equilibrium"],
  },
  {
    id: "y8sci-energy-conduction",
    title: "Conduction",
    context: "Thermal energy transfer through solids",
    summary:
      "In conduction, vibrating particles collide with other particles and transfer thermal energy through a solid.",
    colour: "#166534",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Particles — Conduction`,
    keyFacts: [
      "Thermal energy can be transferred by conduction, convection or radiation.",
      "Particles collide into others when they vibrate.",
      "Conduction occurs in solids.",
      "The conduction diagram shows energy moving from a thermal store at a high temperature to a thermal store at a low temperature.",
    ],
    keyTerms: ["conduction", "insulator"],
  },
  {
    id: "y8sci-energy-convection",
    title: "Convection",
    context: "Thermal energy transfer in liquids and gases",
    summary:
      "Heating makes part of a liquid or gas less dense so it rises, while cooler, denser material falls and forms a convection current.",
    colour: "#22c55e",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Particles — Convection`,
    keyFacts: [
      "Convection occurs in liquids or gases.",
      "The part in contact with the heat source gets hotter. The particles move faster, causing them to become further apart, and a decrease in density.",
      "The hot part then rises, and cooler, denser parts fall and take its place at the bottom.",
      "They now heat, so the cycle continues. We call this a convection current.",
      "The convection diagram shows warmer material rising and cooler material falling in a continuous cycle above a heat source.",
    ],
    keyTerms: ["convection", "convection current"],
  },
  {
    id: "y8sci-energy-radiation",
    title: "Infrared Radiation",
    context: "Energy transfer by waves without particles",
    summary:
      "Infrared radiation transfers energy without particles, and surfaces can absorb or reflect it.",
    colour: "#15803d",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Radiation`,
    keyFacts: [
      "Infrared radiation transfers energy without particles — it is a wave.",
      "All objects emit radiation.",
      "The amount depends on their temperature and the surface (colour and rough/smooth).",
      "Radiation can be absorbed or reflected.",
    ],
    keyTerms: ["infrared radiation", "radiation", "absorb", "reflect"],
  },
  {
    id: "y8sci-energy-power-work",
    title: "Power, Energy Bills, Work and Machines",
    context: "Rates of energy transfer, household energy use and mechanical work",
    summary:
      "Power describes how quickly energy is transferred, while work links force and distance; machines can make work easier but do not create energy.",
    colour: "#16a34a",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Energy and power; Work energy and machines`,
    keyFacts: [
      "Power is the rate of energy transfer — how much energy is transferred each second.",
      "Energy bills are measured in 1 kilowatt per hour (kWh).",
      "For example, a 2 kW device uses 4 kWh.",
      "A bill covers the cost of the fuel used at the power station, the power station, staff, and infrastructure.",
      "To convert kWh into joules: convert the time to seconds.",
      "Use fewer appliances or more efficient ones.",
      "Insulated houses lose less thermal energy so don't need to use as much power.",
      "For example, 2000 J/s × 7200 s = 14,400,000 J.",
      "Work done (J) = force (N) × distance (m).",
      "Simple machines like levers and gears can make it easier to do work, but you still get the energy out that you put in.",
    ],
    keyTerms: ["kilowatt", "joule", "work", "lever", "gear"],
  },
  {
    id: "y8sci-energy-resources",
    title: "Energy Resources and Thermal Power Stations",
    context: "Renewable and non-renewable resources and electricity generation",
    summary:
      "Renewable resources will not run out, while fossil fuels are non-renewable and are burned in thermal power stations.",
    colour: "#166534",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Energy and power; Non-renewable resources`,
    keyFacts: [
      "Renewable resources produce greenhouse gases when built, not when used, and will not run out.",
      "Renewable resources will not run out.",
      "For example, wind, tidal, wave, hydroelectric, geothermal, biomass, and solar powers.",
      "Non-renewable resources include the fossil fuels coal, oil, and gas.",
      "These were formed millions of years ago from fossilised remains.",
      "These are non-renewable because you cannot reuse them, and they will eventually run out.",
      "Coal, oil, or gas are used to run thermal power stations.",
      "The current created is sent to our offices, factories, and homes down long cables.",
      "These fossil fuels produce greenhouse gases, such as carbon dioxide.",
      "Fossil fuels are burned to heat water, which produces steam. The steam turns a turbine, which spins a generator. The current created is sent to our offices, factories, and homes down long cables.",
    ],
    keyTerms: ["renewable", "non-renewable", "fossil fuel", "power station", "greenhouse gas"],
  },
  {
    id: "y8sci-energy-food-fuels",
    title: "Chemical Energy in Food and Fuels",
    context: "Chemical energy stores, food values and energy use in activities",
    summary:
      "Food and fuels have chemical energy stores measured in joules, and different foods and activities involve different amounts of energy.",
    colour: "#22c55e",
    sourceType: "knowledgeOrganiser",
    sourceRef: `${KO_SOURCE}: Food and fuels`,
    keyFacts: [
      "There is energy in the chemical stores associated with food and fuel.",
      "Energy is measured in joules (J).",
      "You need different amounts of energy for different activities.",
      "The energy in food varies.",
      "An apple contains 200 kJ per 100 g.",
      "Chips contain 1000 kJ per 100 g.",
      "The energy used when we do things varies.",
      "Sitting uses 6 kJ per minute.",
      "Running uses 60 kJ per minute.",
    ],
    keyTerms: ["chemical store"],
  },
];

const flashcardFactQuestions: Record<string, string[]> = {
  "y8sci-energy-conservation": [
    "What does the law of conservation of energy state?",
    "What equation compares total energy before and after an energy transfer?",
    "Which three ways of transferring energy between stores are listed on the organiser?",
  ],
  "y8sci-energy-temperature": [
    "What do thermometers measure, and which temperature unit is used?",
    "What does temperature measure according to the organiser?",
    "What does thermal energy measure according to the organiser?",
    "Why can a warm bath have more thermal energy than a hotter kettle?",
    "How does heating affect the kinetic energy and movement of particles?",
    "Which three factors determine the energy needed to heat an object?",
    "How does the organiser define equilibrium?",
  ],
  "y8sci-energy-conduction": [
    "Which three processes can transfer thermal energy?",
    "How do particles transfer energy during conduction?",
    "In which state of matter does conduction occur?",
    "In the conduction diagram, which way does energy move between the two thermal stores?",
  ],
  "y8sci-energy-convection": [
    "In which states of matter does convection occur?",
    "What happens to particles and density in the part of a fluid touching a heat source?",
    "Why does hot material rise while cooler material falls during convection?",
    "What is the continuing heating-and-moving cycle in a fluid called?",
    "What movement is shown in the organiser's convection diagram?",
  ],
  "y8sci-energy-radiation": [
    "How does infrared radiation transfer energy without particles?",
    "Which objects emit radiation?",
    "Which temperature and surface features affect the amount of radiation emitted?",
    "What two things can happen to radiation at a surface?",
  ],
  "y8sci-energy-power-work": [
    "What does power measure?",
    "In which unit does the organiser state that energy bills are measured?",
    "How much energy does the organiser state that a 2 kW device uses?",
    "Which four costs does an energy bill cover according to the organiser?",
    "What time conversion does the organiser require when converting kWh into joules?",
    "What two appliance choices can reduce energy bills?",
    "Why do insulated houses need to use less power?",
    "What complete joule-conversion example is shown on the organiser?",
    "What equation links work done, force and distance?",
    "How do levers and gears affect work and energy input or output?",
  ],
  "y8sci-energy-resources": [
    "When does the organiser state that renewable resources produce greenhouse gases?",
    "What does the organiser say about renewable resources running out?",
    "Which seven renewable resources are listed on the organiser?",
    "Which three fossil fuels are listed as non-renewable resources?",
    "How and when were fossil fuels formed?",
    "Why are fossil fuels described as non-renewable?",
    "Which fuels are used to run thermal power stations?",
    "Where is the current created by a power station sent?",
    "Which greenhouse gas example is produced by fossil fuels?",
    "What sequence is shown in the organiser's thermal power-station diagram?",
  ],
  "y8sci-energy-food-fuels": [
    "Where is energy stored in food and fuel?",
    "Which unit and symbol are used to measure energy?",
    "How does the amount of energy needed vary between activities?",
    "What does the organiser state about energy values in different foods?",
    "How much energy is listed for 100 g of apple?",
    "How much energy is listed for 100 g of chips?",
    "What does the organiser state about energy use in different activities?",
    "How much energy does sitting use each minute?",
    "How much energy does running use each minute?",
  ],
};

const vocabularyFronts: Record<string, string> = {
  insulator: "Define insulator in thermal energy transfer.",
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
    front: vocabularyFronts[term] ?? `Define ${term}.`,
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
  mcq("energy-q001", "y8sci-energy-conservation", "Which statement is the law of conservation of energy?", ["Energy cannot be created or destroyed, only transferred", "Energy is created whenever an object moves", "Energy disappears after every transfer", "Energy can only be stored, never transferred"], "Energy cannot be created or destroyed, only transferred", "The organiser states that energy cannot be created or destroyed, only transferred.", "Energy adds up"),
  mcq("energy-q002", "y8sci-energy-conservation", "Which expression shows that energy is conserved?", ["Total energy before = total energy after", "Total energy before > total energy after", "Total energy after = zero", "Total energy before = power × current"], "Total energy before = total energy after", "The total energy before a transfer equals the total energy after it.", "Energy adds up"),
  mcq("energy-q003", "y8sci-energy-conservation", "Which list contains only ways of transferring energy named on the organiser?", ["Light, sound and electricity", "Mass, volume and density", "Force, distance and time", "Coal, oil and gas"], "Light, sound and electricity", "Light, sound and electricity transfer energy between stores.", "Transferring energy"),

  mcq("energy-q004", "y8sci-energy-temperature", "What does temperature measure according to the organiser?", ["Average energy", "Total energy", "Mass only", "Power each second"], "Average energy", "The organiser says temperature measures average energy.", "Energy and temperature"),
  mcq("energy-q005", "y8sci-energy-temperature", "What does thermal energy measure according to the organiser?", ["Total energy", "Average energy", "Distance moved", "Current in a wire"], "Total energy", "The organiser says thermal energy measures total energy.", "Energy and temperature"),
  mcq("energy-q006", "y8sci-energy-temperature", "Which object can have more thermal energy even though it has a lower temperature?", ["A warm bath compared with a heated kettle", "A heated kettle compared with a warm bath", "A thermometer compared with a bath", "A lever compared with a gear"], "A warm bath compared with a heated kettle", "The organiser states that a warm bath has more thermal energy even though the kettle is hotter.", "Energy and temperature"),
  mcq("energy-q007", "y8sci-energy-temperature", "Which set of factors affects the energy needed to heat an object?", ["Mass, material and temperature rise", "Colour, roughness and distance", "Force, voltage and current", "Speed, time and power station"], "Mass, material and temperature rise", "The energy needed depends on mass, material and temperature rise.", "Heating solids, liquids and gases"),

  mcq("energy-q008", "y8sci-energy-conduction", "In which state of matter does conduction occur according to the organiser?", ["Solids", "Liquids only", "Gases only", "A vacuum only"], "Solids", "The organiser states that conduction occurs in solids.", "Conduction"),
  mcq("energy-q009", "y8sci-energy-conduction", "What happens between particles during conduction?", ["Vibrating particles collide into other particles", "Particles disappear", "Particles stop moving permanently", "Particles turn into radiation"], "Vibrating particles collide into other particles", "Conduction transfers energy as vibrating particles collide with others.", "Conduction"),
  mcq("energy-q010", "y8sci-energy-conduction", "In the organiser's conduction diagram, which way does energy move?", ["From the high-temperature thermal store to the low-temperature thermal store", "From the low-temperature thermal store to the high-temperature thermal store", "From a gas into a vacuum only", "From distance into force"], "From the high-temperature thermal store to the low-temperature thermal store", "The diagram's arrow runs from the high-temperature store towards the low-temperature store.", "Conduction diagram"),

  mcq("energy-q011", "y8sci-energy-convection", "Where does convection occur?", ["In liquids or gases", "Only in solids", "Only in a vacuum", "Only inside wires"], "In liquids or gases", "The organiser states that convection occurs in liquids or gases.", "Convection"),
  mcq("energy-q012", "y8sci-energy-convection", "Why does a hotter part of a fluid rise?", ["Its particles spread further apart and its density decreases", "Its particles stop moving and its density increases", "It gains more mass", "It becomes a solid"], "Its particles spread further apart and its density decreases", "Heating makes particles move faster and further apart, decreasing density.", "Convection"),
  mcq("energy-q013", "y8sci-energy-convection", "What is the continuous rise of hot material and fall of cooler material called?", ["A convection current", "An electric field", "A chemical store", "A power bill"], "A convection current", "This repeating movement is called a convection current.", "Convection"),

  mcq("energy-q014", "y8sci-energy-radiation", "How does infrared radiation transfer energy?", ["As a wave without particles", "Only by particle collisions in solids", "Only by moving liquids", "Only through an electrical circuit"], "As a wave without particles", "Infrared radiation transfers energy without particles because it is a wave.", "Radiation"),
  mcq("energy-q015", "y8sci-energy-radiation", "Which objects emit radiation according to the organiser?", ["All objects", "Only very hot objects", "Only rough objects", "Only shiny objects"], "All objects", "The organiser states that all objects emit radiation.", "Radiation"),
  mcq("energy-q016", "y8sci-energy-radiation", "Which pair of outcomes can happen to radiation at a surface?", ["Absorption or reflection", "Conduction or convection", "Creation or destruction", "Force or distance"], "Absorption or reflection", "Radiation can be absorbed or reflected.", "Radiation"),

  mcq("energy-q017", "y8sci-energy-power-work", "What is power?", ["The rate of energy transfer", "The total mass of an object", "The temperature rise only", "A type of fossil fuel"], "The rate of energy transfer", "Power is how much energy is transferred each second.", "Energy and power"),
  mcq("energy-q018", "y8sci-energy-power-work", "Which work equation is shown on the organiser?", ["Work done = force × distance", "Work done = force ÷ distance", "Work done = power × current", "Work done = mass + temperature"], "Work done = force × distance", "The organiser gives work done (J) = force (N) × distance (m).", "Work energy and machines"),
  mcq("energy-q019", "y8sci-energy-power-work", "Why do insulated houses need less power?", ["They lose less thermal energy", "They create extra energy", "They have no temperature", "They always use more appliances"], "They lose less thermal energy", "Insulation reduces thermal energy loss, so less power is needed.", "Reducing bills"),
  mcq("energy-q020", "y8sci-energy-power-work", "What is the organiser's result for 2000 J/s × 7200 s?", ["14,400,000 J", "14,400 J", "4,000 J", "7,200 J"], "14,400,000 J", "The displayed conversion example equals 14,400,000 J.", "Energy bills"),

  mcq("energy-q021", "y8sci-energy-resources", "Which resource is renewable?", ["Wind", "Coal", "Oil", "Gas"], "Wind", "Wind is one of the seven renewable examples on the organiser.", "Renewable resources"),
  mcq("energy-q022", "y8sci-energy-resources", "Why are fossil fuels non-renewable?", ["They cannot be reused and will eventually run out", "They are made every day", "They never run out", "They are waves without particles"], "They cannot be reused and will eventually run out", "The organiser gives both reasons for classifying fossil fuels as non-renewable.", "Non-renewable resources"),
  mcq("energy-q023", "y8sci-energy-resources", "What turns a generator in the thermal power-station sequence?", ["A turbine", "A thermometer", "An insulator", "A lever only"], "A turbine", "Steam turns a turbine, which spins a generator.", "Thermal power stations"),
  mcq("energy-q024", "y8sci-energy-resources", "Which greenhouse gas example is produced by fossil fuels?", ["Carbon dioxide", "Oxygen", "Nitrogen", "Steam only"], "Carbon dioxide", "The organiser gives carbon dioxide as an example of a greenhouse gas from fossil fuels.", "Non-renewable resources"),

  mcq("energy-q025", "y8sci-energy-food-fuels", "Which food contains more energy per 100 g according to the organiser?", ["Chips", "Apple", "They contain the same", "The organiser gives no values"], "Chips", "Chips are listed as 1000 kJ per 100 g, compared with 200 kJ per 100 g for apple.", "Food and fuels"),
  mcq("energy-q026", "y8sci-energy-food-fuels", "Which activity uses more energy per minute according to the organiser?", ["Running", "Sitting", "They use the same", "Neither uses energy"], "Running", "Running is listed as 60 kJ per minute and sitting as 6 kJ per minute.", "Food and fuels"),
];

const shortAnswerQuestions: WrittenQuestion[] = [
  written("energy-q027", ["y8sci-energy-conservation"], "short-answer", "State the law of conservation of energy and its before-and-after equation.", ["Energy cannot be created or destroyed, only transferred.", "Total energy before = total energy after."], "Give the exact law and equation from the organiser.", "Energy adds up"),
  written("energy-q028", ["y8sci-energy-conservation"], "short-answer", "Name all three ways of transferring energy between stores listed on the organiser.", ["Light.", "Sound.", "Electricity."], "Give all three source examples.", "Transferring energy"),

  written("energy-q029", ["y8sci-energy-temperature"], "short-answer", "Compare temperature and thermal energy using the organiser's definitions.", ["Temperature measures average energy.", "Thermal energy measures total energy."], "Give both definitions as a direct comparison.", "Energy and temperature"),
  written("energy-q030", ["y8sci-energy-temperature"], "short-answer", "Explain how a warm bath can have more thermal energy than a heated kettle even though the kettle is hotter.", ["The warm bath has more thermal energy.", "The heated kettle has a higher temperature.", "Thermal energy is total energy, whereas temperature measures average energy."], "Use both organiser definitions to explain the comparison.", "Energy and temperature"),
  written("energy-q031", ["y8sci-energy-temperature"], "short-answer", "Describe what heating does to particles and name all three factors that affect the energy needed to heat an object.", ["Particles gain more kinetic energy and vibrate more or faster.", "Mass affects the energy needed.", "Material affects the energy needed.", "Temperature rise affects the energy needed."], "Include the particle change and all three factors.", "Heating solids, liquids and gases"),
  written("energy-q032", ["y8sci-energy-temperature"], "short-answer", "How does the organiser define equilibrium?", ["Equilibrium is when objects have the same thermal energy."], "Use the organiser's approved original wording.", "Equilibrium"),

  written("energy-q033", ["y8sci-energy-conduction"], "short-answer", "Describe conduction using particles and state where it occurs.", ["Vibrating particles collide into other particles.", "Conduction occurs in solids."], "Include the particle process and state of matter.", "Conduction"),
  written("energy-q034", ["y8sci-energy-conduction"], "short-answer", "Name all three processes that can transfer thermal energy and state the direction shown in the conduction diagram.", ["Conduction.", "Convection.", "Radiation.", "Energy moves from the high-temperature thermal store to the low-temperature thermal store."], "Give every process and the diagram direction.", "Particles — Conduction"),

  written("energy-q035", ["y8sci-energy-convection"], "short-answer", "Explain what happens to the particles and density of the part of a liquid or gas touching a heat source.", ["The part touching the heat source gets hotter.", "Its particles move faster and become further apart.", "Its density decreases."], "Link heating, particle movement and density.", "Convection"),
  written("energy-q036", ["y8sci-energy-convection"], "short-answer", "Explain how a convection current forms.", ["The hot, less dense part rises.", "Cooler, denser parts fall and take its place at the bottom.", "The cooler part heats and the cycle continues.", "This continuing cycle is called a convection current."], "Follow the cycle in order.", "Convection"),
  written("energy-q037", ["y8sci-energy-convection"], "short-answer", "State where convection occurs and what the organiser's convection diagram shows.", ["Convection occurs in liquids or gases.", "Warmer material rises.", "Cooler material falls in a continuous cycle above the heat source."], "Give the states and the two directions of movement.", "Convection diagram"),

  written("energy-q038", ["y8sci-energy-radiation"], "short-answer", "Describe infrared radiation and state which objects emit radiation.", ["Infrared radiation transfers energy without particles.", "It is a wave.", "All objects emit radiation."], "Include transfer, wave and emitter details.", "Radiation"),
  written("energy-q039", ["y8sci-energy-radiation"], "short-answer", "Give all the factors on the organiser that affect the amount of radiation emitted.", ["The object's temperature.", "The colour of its surface.", "Whether its surface is rough or smooth."], "Give temperature and both surface features.", "Radiation"),
  written("energy-q040", ["y8sci-energy-radiation"], "short-answer", "State the two things that can happen to radiation at a surface.", ["Radiation can be absorbed.", "Radiation can be reflected."], "Give both outcomes.", "Radiation"),

  written("energy-q041", ["y8sci-energy-power-work"], "short-answer", "Define power and state how the organiser says energy bills are measured.", ["Power is the rate of energy transfer, or how much energy is transferred each second.", "The organiser states that energy bills are measured in 1 kilowatt per hour (kWh)."], "Use the organiser's approved wording for both statements.", "Energy and power"),
  written("energy-q042", ["y8sci-energy-power-work"], "short-answer", "State the organiser's 2 kW device example and its complete conversion example in joules.", ["A 2 kW device uses 4 kWh.", "2000 J/s × 7200 s = 14,400,000 J."], "Give both approved source examples exactly.", "Energy bills"),
  written("energy-q043", ["y8sci-energy-power-work"], "short-answer", "Give all four costs covered by an energy bill according to the organiser.", ["The fuel used at the power station.", "The power station.", "Staff.", "Infrastructure."], "Give all four source items.", "Energy bills"),
  written("energy-q044", ["y8sci-energy-power-work"], "short-answer", "Give the two bill-reduction ideas on the organiser and explain why insulation helps.", ["Use fewer appliances or more efficient appliances.", "Insulated houses lose less thermal energy.", "Because less thermal energy is lost, they do not need to use as much power."], "Include appliance choice and the insulation cause-and-effect link.", "Reducing bills"),
  written("energy-q045", ["y8sci-energy-power-work"], "short-answer", "Give the equation for work done, including all units.", ["Work done (J) = force (N) × distance (m)."], "Include all three quantities and units.", "Work energy and machines"),
  written("energy-q046", ["y8sci-energy-power-work"], "short-answer", "What do levers and gears do, and what happens to energy input and output?", ["Levers and gears can make it easier to do work.", "You still get the energy out that you put in."], "State both the advantage and energy statement.", "Work energy and machines"),

  written("energy-q047", ["y8sci-energy-resources"], "short-answer", "According to the organiser, when do renewable resources produce greenhouse gases, and will they run out?", ["They produce greenhouse gases when built, not when used.", "They will not run out."], "Use the approved organiser wording.", "Renewable resources"),
  written("energy-q048", ["y8sci-energy-resources"], "short-answer", "Name all seven renewable resources listed on the organiser.", ["Wind.", "Tidal.", "Wave.", "Hydroelectric.", "Geothermal.", "Biomass.", "Solar powers."], "Give all seven source examples.", "Renewable resources"),
  written("energy-q049", ["y8sci-energy-resources"], "short-answer", "Name the three fossil fuels and explain why they are non-renewable.", ["Coal, oil and gas are fossil fuels.", "They formed millions of years ago from fossilised remains.", "They cannot be reused.", "They will eventually run out."], "Give all fuels and both non-renewable reasons.", "Non-renewable resources"),
  written("energy-q050", ["y8sci-energy-resources"], "short-answer", "Describe the thermal power-station sequence from fossil fuel to current reaching users.", ["Fossil fuels are burned to heat water, producing steam.", "Steam turns a turbine.", "The turbine spins a generator.", "The generated current is sent to offices, factories and homes down long cables."], "Follow the diagram sequence in order.", "Thermal power stations"),
  written("energy-q051", ["y8sci-energy-resources"], "short-answer", "Which greenhouse gas example do fossil fuels produce, and where are coal, oil and gas used?", ["Fossil fuels produce greenhouse gases such as carbon dioxide.", "Coal, oil or gas are used to run thermal power stations."], "Name the gas example and use.", "Non-renewable resources"),

  written("energy-q052", ["y8sci-energy-food-fuels"], "short-answer", "Compare the food-energy values and activity-energy values listed on the organiser.", ["Apple contains 200 kJ per 100 g.", "Chips contain 1000 kJ per 100 g.", "Sitting uses 6 kJ per minute.", "Running uses 60 kJ per minute."], "Give all four values with units.", "Food and fuels"),
];

const longAnswerQuestions: WrittenQuestion[] = [
  written("energy-q053", ["y8sci-energy-conservation", "y8sci-energy-temperature"], "long-answer", "Explain energy conservation, transfer and the difference between temperature and thermal energy using the organiser's examples.", ["States that energy cannot be created or destroyed, only transferred.", "Gives total energy before = total energy after.", "Names light, sound and electricity as transfer pathways.", "States that temperature measures average energy.", "States that thermal energy measures total energy.", "Uses the warm bath and heated kettle comparison accurately."], "Connect the conservation law, transfer pathways and both energy measures.", "Energy conservation and temperature"),
  written("energy-q054", ["y8sci-energy-conduction", "y8sci-energy-convection", "y8sci-energy-radiation"], "long-answer", "Compare conduction, convection and infrared radiation as ways of transferring thermal energy.", ["Explains conduction by vibrating particle collisions in solids.", "Explains that convection occurs in liquids or gases.", "Explains that hot, less dense material rises while cooler, denser material falls.", "Names the continuing cycle as a convection current.", "Explains that infrared radiation is a wave and transfers energy without particles.", "States that radiation can be absorbed or reflected."], "Organise the answer by method and compare whether particles are involved.", "Particles and radiation"),
  written("energy-q055", ["y8sci-energy-power-work"], "long-answer", "Explain power, household energy bills and the organiser's methods for reducing bills.", ["Defines power as the rate of energy transfer or energy transferred each second.", "States that the organiser measures bills in 1 kilowatt per hour (kWh).", "Gives the organiser's 2 kW device uses 4 kWh example.", "Identifies fuel, power station, staff and infrastructure as bill costs.", "States that converting kWh to joules requires converting time to seconds.", "Explains using fewer or more efficient appliances and insulation to reduce power use."], "Use the organiser's approved original statements and explain the insulation link.", "Energy and power"),
  written("energy-q056", ["y8sci-energy-power-work"], "long-answer", "Explain work and simple machines using the equation, units and the energy input-output rule.", ["Gives work done (J) = force (N) × distance (m).", "Identifies the joule as the unit of work or energy.", "Explains that levers can make work easier.", "Explains that gears can make work easier.", "States that energy output remains equal to the energy put in."], "Include the full equation and connect both machines to the energy rule.", "Work energy and machines"),
  written("energy-q057", ["y8sci-energy-resources"], "long-answer", "Compare renewable and non-renewable resources and explain how a fossil-fuel thermal power station works.", ["States that renewable resources will not run out and gives the organiser's greenhouse-gas statement.", "Names all seven renewable examples from the organiser.", "Identifies coal, oil and gas as fossil fuels formed millions of years ago from fossilised remains.", "Explains that fossil fuels cannot be reused and will eventually run out.", "Explains burning fuel to heat water and produce steam.", "Explains that steam turns a turbine, which spins a generator, and current travels down long cables.", "Identifies carbon dioxide as a greenhouse-gas example from fossil fuels."], "Compare the resource groups before following the power-station sequence.", "Energy resources and thermal power stations"),
  written("energy-q058", ["y8sci-energy-food-fuels"], "long-answer", "Describe chemical energy in food and fuels and compare all the food and activity values on the organiser.", ["States that food and fuels have associated chemical energy stores.", "States that energy is measured in joules (J).", "Explains that different activities need different amounts of energy.", "Gives apple as 200 kJ per 100 g.", "Gives chips as 1000 kJ per 100 g.", "Gives sitting as 6 kJ per minute.", "Gives running as 60 kJ per minute."], "Use every value with its correct unit and make direct comparisons.", "Food and fuels"),
];

const interactiveQuestions: WrittenQuestion[] = [
  {
    ...written("energy-q059", ["y8sci-energy-temperature", "y8sci-energy-food-fuels"], "short-answer", "Match each energy or temperature term to its organiser-based meaning.", ["Thermometer — measures temperature in °C", "Temperature — average energy", "Thermal energy — total energy", "Chemical store — energy associated with food and fuel", "Joule — unit of energy"], "Match all five terms.", "Energy vocabulary"),
    format: "matching",
    interaction: {
      kind: "matching",
      left: ["Thermometer", "Temperature", "Thermal energy", "Chemical store", "Joule"],
      right: ["Total energy", "Unit of energy", "Average energy", "Measures temperature in °C", "Energy associated with food and fuel"],
      answers: [3, 2, 0, 4, 1],
    },
  },
  {
    ...written("energy-q060", ["y8sci-energy-conduction", "y8sci-energy-convection", "y8sci-energy-radiation"], "short-answer", "Match each thermal-transfer term to its description.", ["Conduction — vibrating particle collisions in solids", "Convection — transfer in liquids or gases", "Convection current — repeated rise and fall", "Infrared radiation — wave transfer without particles", "Insulator — reduces thermal energy transfer"], "Match all five terms.", "Thermal transfer vocabulary"),
    format: "matching",
    interaction: {
      kind: "matching",
      left: ["Conduction", "Convection", "Convection current", "Infrared radiation", "Insulator"],
      right: ["Repeated rise and fall in a fluid", "Reduces thermal energy transfer", "Wave transfer without particles", "Vibrating particle collisions in solids", "Transfer in liquids or gases"],
      answers: [3, 4, 0, 2, 1],
    },
  },
  {
    ...written("energy-q061", ["y8sci-energy-power-work", "y8sci-energy-resources"], "short-answer", "Match each power, machine or resource term to its meaning.", ["Kilowatt — unit of power", "Lever — simple machine", "Gear — simple machine", "Renewable — will not run out", "Non-renewable — cannot be reused and will run out", "Power station — generates current from transferred energy"], "Match all six terms.", "Power, machines and resources vocabulary"),
    format: "matching",
    interaction: {
      kind: "matching",
      left: ["Kilowatt", "Lever", "Gear", "Renewable", "Non-renewable", "Power station"],
      right: ["A simple machine using toothed wheels", "Will not run out", "Unit of power", "Generates current from transferred energy", "Cannot be reused and will run out", "A simple machine that can pivot"],
      answers: [2, 5, 0, 1, 4, 3],
    },
  },
  {
    ...written("energy-q062", ["y8sci-energy-temperature", "y8sci-energy-radiation"], "short-answer", "Complete the statements about heating and radiation.", ["kinetic", "mass", "material", "temperature rise", "absorbed", "reflected"], "Use the word bank to complete every statement.", "Heating and radiation"),
    format: "fill-in-the-blank",
    interaction: {
      kind: "fill-blanks",
      wordBank: ["kinetic", "mass", "material", "temperature rise", "absorbed", "reflected"],
      sentences: ["Heated particles gain more ______ energy.", "The energy needed to heat an object depends on its ______.", "It also depends on the ______ it is made from.", "The third factor is the ______.", "Radiation can be taken in: ______.", "Radiation can be sent away from a surface: ______."],
      answers: [["kinetic"], ["mass"], ["material"], ["temperature rise"], ["absorbed", "absorb"], ["reflected", "reflect"]],
    },
  },
  {
    ...written("energy-q063", ["y8sci-energy-resources", "y8sci-energy-food-fuels"], "short-answer", "Complete the resource, food and activity values.", ["coal", "oil", "gas", "200", "1000", "6", "60"], "Use the source values and fuel names.", "Resources, food and activities"),
    format: "fill-in-the-blank",
    interaction: {
      kind: "fill-blanks",
      wordBank: ["coal", "oil", "gas", "200", "1000", "6", "60"],
      sentences: ["The first fossil fuel listed is ______.", "The second fossil fuel listed is ______.", "The third fossil fuel listed is ______.", "Apple contains ______ kJ per 100 g.", "Chips contain ______ kJ per 100 g.", "Sitting uses ______ kJ per minute.", "Running uses ______ kJ per minute."],
      answers: [["coal"], ["oil"], ["gas"], ["200"], ["1000", "1,000"], ["6"], ["60"]],
    },
  },
  {
    ...written("energy-q064", ["y8sci-energy-convection"], "short-answer", "Put the stages of a convection current in order.", ["The part touching the heat source gets hotter.", "Its particles move faster and spread further apart, decreasing density.", "The hot part rises.", "Cooler, denser material falls to replace it.", "The cooler material heats and the cycle continues."], "Begin with heating at the source.", "Convection"),
    format: "ordering",
    interaction: {
      kind: "ordering",
      items: ["Cooler, denser material falls to replace it.", "The hot part rises.", "The cooler material heats and the cycle continues.", "The part touching the heat source gets hotter.", "Its particles move faster and spread further apart, decreasing density."],
      answer: ["The part touching the heat source gets hotter.", "Its particles move faster and spread further apart, decreasing density.", "The hot part rises.", "Cooler, denser material falls to replace it.", "The cooler material heats and the cycle continues."],
    },
  },
  {
    ...written("energy-q065", ["y8sci-energy-resources"], "short-answer", "Put the thermal power-station stages in order.", ["Burn fossil fuel to heat water.", "The water produces steam.", "Steam turns a turbine.", "The turbine spins a generator.", "Current travels to offices, factories and homes down long cables."], "Begin with the fuel and finish with users.", "Thermal power stations"),
    format: "ordering",
    interaction: {
      kind: "ordering",
      items: ["The turbine spins a generator.", "Current travels to offices, factories and homes down long cables.", "The water produces steam.", "Burn fossil fuel to heat water.", "Steam turns a turbine."],
      answer: ["Burn fossil fuel to heat water.", "The water produces steam.", "Steam turns a turbine.", "The turbine spins a generator.", "Current travels to offices, factories and homes down long cables."],
    },
  },
  {
    ...written("energy-q066", ["y8sci-energy-resources"], "short-answer", "Classify each resource as renewable or non-renewable.", ["Wind — Renewable", "Tidal — Renewable", "Wave — Renewable", "Hydroelectric — Renewable", "Geothermal — Renewable", "Biomass — Renewable", "Solar — Renewable", "Coal — Non-renewable", "Oil — Non-renewable", "Gas — Non-renewable"], "Classify every listed resource.", "Energy resources"),
    format: "classification",
    interaction: {
      kind: "classification",
      rows: ["Wind", "Tidal", "Wave", "Hydroelectric", "Geothermal", "Biomass", "Solar", "Coal", "Oil", "Gas"],
      categories: ["Renewable", "Non-renewable"],
      answers: ["Renewable", "Renewable", "Renewable", "Renewable", "Renewable", "Renewable", "Renewable", "Non-renewable", "Non-renewable", "Non-renewable"],
    },
  },
  {
    ...written("energy-q067", ["y8sci-energy-conduction", "y8sci-energy-convection", "y8sci-energy-radiation"], "short-answer", "Classify each statement as conduction, convection or radiation.", ["Occurs in solids — Conduction", "Vibrating particles collide — Conduction", "Occurs in liquids or gases — Convection", "Hot material rises and cooler material falls — Convection", "Transfers energy without particles — Radiation", "Can be absorbed or reflected — Radiation"], "Use each process twice.", "Thermal energy transfer"),
    format: "classification",
    interaction: {
      kind: "classification",
      rows: ["Occurs in solids", "Vibrating particles collide", "Occurs in liquids or gases", "Hot material rises and cooler material falls", "Transfers energy without particles", "Can be absorbed or reflected"],
      categories: ["Conduction", "Convection", "Radiation"],
      answers: ["Conduction", "Conduction", "Convection", "Convection", "Radiation", "Radiation"],
    },
  },
  {
    ...written("energy-q068", ["y8sci-energy-power-work"], "short-answer", "Complete the work-done equation and its units.", ["work done", "J", "force", "N", "distance", "m"], "Complete all quantities and units.", "Work equation"),
    format: "equation-completion",
    interaction: {
      kind: "fill-blanks",
      wordBank: ["work done", "J", "force", "N", "distance", "m"],
      sentences: ["The left-hand quantity is ______.", "Its unit symbol is ______.", "The first quantity on the right is ______.", "Its unit symbol is ______.", "The second quantity on the right is ______.", "Its unit symbol is ______."],
      answers: [["work done", "work"], ["J", "joules", "joule"], ["force"], ["N", "newtons", "newton"], ["distance"], ["m", "metres", "metre", "meters", "meter"]],
    },
  },
  {
    ...written("energy-q069", ["y8sci-energy-conservation", "y8sci-energy-power-work"], "short-answer", "Complete the two energy equations from the organiser.", ["total energy before", "total energy after", "2000", "7200", "14,400,000"], "Complete both equations using the source values.", "Energy equations"),
    format: "equation-completion",
    interaction: {
      kind: "fill-blanks",
      wordBank: ["total energy before", "total energy after", "2000", "7200", "14,400,000"],
      sentences: ["The left side of the conservation equation is ______.", "The right side of the conservation equation is ______.", "The conversion example begins with ______ J/s.", "The time in the conversion example is ______ s.", "The result of the conversion example is ______ J."],
      answers: [["total energy before"], ["total energy after"], ["2000", "2,000"], ["7200", "7,200"], ["14400000", "14,400,000"]],
    },
  },
];

const questions: KnowledgeQuestion[] = [
  ...multipleChoiceQuestions,
  ...shortAnswerQuestions,
  ...interactiveQuestions,
  ...longAnswerQuestions,
];

export const year8ScienceEnergy: KnowledgeOrganiser = {
  id: "year8-science-energy",
  year: 8,
  subject: "Science",
  term: "Autumn",
  chapter: 6,
  title: "Energy",
  introduction:
    "Explore energy conservation and transfer, temperature and particles, conduction, convection, radiation, power, work, energy resources, power stations, food and fuels. This chapter is based on the supplied Knowledge Organiser; no teacher-question PDFs were provided.",
  sections,
  flashcards,
  questions,
};
