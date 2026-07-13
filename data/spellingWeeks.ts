import { wordDetails } from "./wordDetails";

export type SpellingWord = {
  word: string;
  meaning: string;
  chinese: string;
  sentence: string;
};

export type SpellingWeek = {
  week: number;
  title: string;
  words: SpellingWord[];
};

// Generated from year-7-spellings.pdf.
// The PDF contains spelling words only, so meaning and Chinese fields use
// temporary labels. They can be replaced gradually with richer content.
const makeSpellingWord = (word: string): SpellingWord => {
    const detail = wordDetails[word];

    return {
        word,
        meaning: detail?.meaning ?? "Definition coming soon.",
        chinese: detail?.chinese ?? "",
        sentence: detail?.sentence ?? "",
    };
};

const weekWordLists: Record<number, string[]> = {
  1: [
    "trespass", "masonry", "knickers", "suspicious",
    "tempura", "scaffolding", "badge", "reign",
    "awry", "knight", "exceptional", "weary",
    "occur", "Britain", "normally", "applying",
    "intelligent", "fiery", "reticent", "knee",
    "torch", "aisle", "calculators", "illusion",
  ],
  2: [
    "exit", "statement", "wrong", "addiction",
    "violet", "fluoride", "quay", "knighthood",
    "fierce", "pioneer", "ditch", "texture",
    "latch", "whale", "helmet", "portable",
    "guess", "territory", "adjusted", "replies",
    "afraid", "mission", "relief", "hatch",
  ],
  3: [
    "hesitated", "entirely", "repaired", "crevice",
    "accidentally", "delightful", "gesture", "bough",
    "obedience", "prefabricate", "mousse", "merrier",
    "reinforce", "picture", "hangar", "quietly",
    "advisable", "predictor", "corrosion", "monotonous",
    "adjustment", "profiteer", "participation", "inconvenient",
  ],
  4: [
    "lunacy", "swab", "tedious", "predators",
    "embarrass", "dripped", "obtain", "range",
    "complementary", "impenetrable", "merrily", "quit",
    "destructible", "anchor", "interpreter", "smudge",
    "cutter", "perceive", "youthful", "optician",
    "immediately", "quantity", "barrage", "horribly",
  ],
  5: [
    "electric", "women", "truthfully", "explosion",
    "arrangement", "grimace", "dessert", "reliance",
    "musicians", "laundry", "quibble", "extend",
    "exhibit", "general", "ridge", "trauma",
    "petticoat", "undeniable", "preliminary", "tried",
    "drying", "sincerely", "pedestal", "sabotage",
  ],
  6: [
    "considerate", "stammered", "kneel", "improvise",
    "unannounced", "sign", "prey", "applied",
    "equivocate", "radiator", "banksia", "labelling",
    "unpleasant", "digest", "equally", "clumsiest",
    "antibiotic", "commissioner", "remained", "answered",
    "brilliant", "accessible", "exhibition", "want",
  ],
  7: [
    "rummage", "lunar", "talons", "remorse",
    "wrestling", "verdict", "industrial", "suitable",
    "humanitarian", "amuse", "craftsmanship", "voyage",
    "circular", "rejoice", "predicted", "unqualified",
    "vibrant", "unlimited", "caution", "cinnamon",
    "escaped", "auction", "cloakroom", "burnish",
  ],
  8: [
    "citizen", "explain", "doctor", "decreased",
    "signature", "brethren", "attachment", "rustier",
    "relativity", "humble", "brusque", "plateau",
    "resistant", "optimist", "Christmas", "insist",
    "camouflage", "shrugging", "chopper", "occasions",
    "negligent", "crystal", "assessment", "medieval",
  ],
  9: [
    "apology", "culpable", "euphoric", "thatch",
    "quick", "gin", "implausible", "resentful",
    "prodigy", "practised", "previous", "winner",
    "lovelier", "indecent", "co-writer", "adventurous",
    "grief", "alienate", "fortuitous", "discourage",
    "honest", "blackbird", "danger", "drummer",
  ],
  10: [
    "sledge", "precise", "taught", "searching",
    "cigarette", "irrelevant", "hedge", "erosion",
    "except", "besiege", "magnificent", "grumble",
    "chemical", "advantage", "shriek", "pylon",
    "explanatory", "tambourine", "felony", "archery",
    "progression", "translucent", "practical", "inaccurate",
  ],
  11: [
    "totally", "souvenir", "electrical", "edible",
    "hutch", "endeavoured", "bedroom", "certificate",
    "beetroot", "football", "delicatessen", "unique",
    "dumb", "circulation", "celebrated", "enhancement",
    "appetite", "vocabulary", "martial", "co-starring",
    "lodger", "enjoyable", "judicial", "intention",
  ],
  12: [
    "versatile", "chillier", "circle", "learning",
    "insincere", "taunt", "manageable", "fudge",
    "misjudge", "arachnophobia", "quotation", "happened",
    "apprehend", "loveliest", "depot", "heirloom",
    "tongue", "supersonic", "glorious", "doubt",
    "strangely", "urgency", "conscious", "litany",
  ],
  13: [
    "confetti", "education", "illogical", "imaginary",
    "arranging", "imagination", "gnat", "cashmere",
    "waiter", "argument", "grabbing", "resource",
    "dirtier", "imperfect", "insidious", "answer",
    "eerie", "brought", "immortal", "worried",
    "campaign", "dais", "applauded", "wholly",
  ],
  14: [
    "complain", "genius", "vehicle", "papyrus",
    "aquarium", "ensure", "recoup", "increased",
    "recipient", "elephant", "geometry", "awkwardly",
    "effervescent", "childhood", "ghosts", "widespread",
    "hybrid", "mistletoe", "whether", "purist",
    "insignificant", "presence", "separation", "necessitate",
  ],
  15: [
    "merit", "fractures", "government", "annual",
    "conclusion", "jarrah", "apprenticeships", "researched",
    "excite", "indigestion", "corduroy", "serviette",
    "remedy", "beige", "listening", "raspberry",
    "residential", "circumference", "furiously", "tuition",
    "chloroform", "celebrate", "derelict", "tyrant",
  ],
  16: [
    "imbalance", "accurately", "author", "appearance",
    "reliable", "idea", "area", "sarcasm",
    "chivalry", "remain", "bread", "knowledge",
    "system", "fetch", "imperceptible", "reflection",
    "rectangular", "atypical", "influential", "squall",
    "scurried", "denies", "fete", "disconnect",
  ],
  17: [
    "ventilation", "pumpkin", "mentally", "engine",
    "rhyme", "admission", "imagine", "reliving",
    "counterfeit", "university", "occasional", "benefitted",
    "irregular", "discharge", "tension", "cologne",
    "shredder", "recipe", "reference", "necessary",
    "fastidious", "sword", "bizarre", "punctured",
  ],
  18: [
    "gladiator", "horrendous", "barrister", "niece",
    "unfortunately", "judge", "nastier", "curious",
    "trapping", "furthermore", "cohesion", "abandoned",
    "disqualified", "photographs", "legislation", "alien",
    "gracious", "where", "chalet", "entrance",
    "abseil", "daughter", "humming", "inadequate",
  ],
  19: [
    "explanation", "guillotine", "queue", "individual",
    "January", "indestructible", "passage", "volatile",
    "admonish", "fountain", "replenish", "susceptible",
    "entertain", "export", "innocent", "celebrities",
    "trampoline", "furnish", "garbage", "city",
    "directing", "commitment", "beginner", "incandescent",
  ],
  20: [
    "practising", "urban", "supplies", "breathe",
    "exploring", "tentacle", "telephoned", "difference",
    "bridge", "porpoise", "youngster", "bounced",
    "usefully", "equestrian", "reflect", "dragging",
    "damage", "nervous", "stampede", "abolition",
    "dungeon", "lyrebird", "illegible", "conversation",
  ],
  21: [
    "museum", "realistically", "engagement", "ambition",
    "head", "planned", "tenant", "query",
    "incapable", "imaginable", "knob", "destroy",
    "barely", "excursions", "exploit", "wondrous",
    "broccoli", "halves", "soldier", "probable",
    "remittance", "spoilt", "typography", "laziest",
  ],
  22: [
    "ravine", "secondary", "confidence", "direction",
    "craziest", "canoe", "hilarious", "national",
    "fatter", "lonely", "controlling", "frightened",
    "rustiest", "aviator", "acquainted", "antiseptic",
    "calm", "wistful", "enquire", "coordinator",
    "pontoon", "nastiness", "ravenous", "celebrating",
  ],
  23: [
    "laboratory", "spinner", "audience", "laboured",
    "impervious", "persimmon", "assess", "stopping",
    "runner", "marvellous", "matted", "against",
    "calves", "exhale", "household", "figurine",
    "excursion", "secretary", "weighed", "bonfire",
    "zoology", "grant", "vigorous", "medically",
  ],
  24: [
    "sculptor", "scapula", "mysterious", "unavoidable",
    "deserving", "earthquakes", "vigilant", "litigation",
    "raisin", "emergency", "exile", "luckily",
    "indefinite", "adamant", "disappear", "break",
    "historic", "totalling", "though", "nonchalant",
    "impermeable", "detective", "raise", "equivalent",
  ],
  25: [
    "received", "death", "spiteful", "rigmarole",
    "avoidable", "concert", "confidential", "safety",
    "iridescent", "suspiciously", "permission", "disapprove",
    "sliding", "yeast", "bigger", "match",
    "fitter", "enamel", "persuasion", "stepping",
    "foreground", "joint", "enormous", "noticing",
  ],
  26: [
    "quality", "important", "typhoon", "helium",
    "splodge", "imagined", "energetic", "bauble",
    "opposition", "circumstances", "oddity", "yield",
    "photograph", "parenthesis", "physical", "refused",
    "powerfully", "programme", "hygiene", "hopped",
    "condensation", "vicious", "earth", "affection",
  ],
  27: [
    "coast", "successfully", "gazebo", "circuit",
    "accelerate", "gentle", "traditionally", "generosity",
    "happiest", "collector", "efficient", "accumulate",
    "calf", "angriest", "island", "million",
    "distinguished", "embroidery", "session", "frequency",
    "description", "disintegrate", "mountain", "edge",
  ],
  28: [
    "circumstance", "receive", "thumb", "romance",
    "masseur", "formal", "disassemble", "material",
    "rigorous", "extension", "fatally", "disfigure",
    "exceptionally", "manifest", "remnant", "trudge",
    "director", "heard", "robber", "parcel",
    "unnecessary", "fulfil", "scraping", "chromosomes",
  ],
  29: [
    "deceiving", "carefully", "misogyny", "missive",
    "selves", "heaviest", "personalities", "awesome",
    "stationery", "gnaw", "phoney", "frying",
    "niche", "disbelief", "weigh", "irreversible",
    "noisier", "transcend", "mischief", "personal",
    "mechanic", "misfortune", "parliamentarian", "lovely",
  ],
  30: [
    "grabbed", "decided", "scintillate", "glutinous",
    "specific", "skipping", "suite", "point",
    "logical", "sought", "frenzied", "organic",
    "switch", "feature", "chaos", "ice",
    "bought", "receipt", "gymnasium", "exceeded",
    "kayaking", "reception", "non-conformist",
  ],
  31: [
    "marjoram", "breakable", "inactive", "applicator",
    "giant", "debt", "figure", "accord",
    "modern", "intrusion", "auditorium", "development",
    "brief", "insanity", "agoraphobia", "spatula",
    "antibiotics", "concern", "quickly", "making",
    "desperate", "protection", "confer",
  ],
  32: [
    "euphemism", "onslaught", "disappoint", "lacerate",
    "sewage", "samurai", "favourite", "informative",
    "obvious", "plaintiff", "gratitude", "happily",
    "travelling", "normality", "luxuriant", "mixture",
    "sandwich", "apparent", "paranoia", "quench",
    "happiness", "topographic", "disease",
  ],
  33: [
    "medicine", "variety", "although", "dominant",
    "proceed", "guard", "conscience", "deceive",
    "exercising", "macaw", "thoroughly", "satisfies",
    "dragged", "jurisdiction", "mangrove", "mayor",
    "collision", "adventures", "xenophobia", "luckier",
    "duress", "permanent", "chemist",
  ],
  34: [
    "strength", "satellite", "space", "undisputed",
    "knot", "coax", "adorable", "archaeology",
    "insurance", "technology", "rogue", "vanquish",
    "infectious", "syllable", "schnitzel", "flapping",
    "vultures", "myth", "obscure", "cumbersome",
    "detriment", "anoint", "exhumed",
  ],
  35: [
    "belligerence", "herd", "safari", "recognise",
    "drawer", "mandatory", "esteem", "archives",
    "evidence", "watch", "tangerine", "scissors",
    "funnel", "action", "catalogue", "clumsier",
    "phenomenon", "sequin", "inverted", "exploited",
    "miserable", "livelihood", "guilty",
  ],
  36: [
    "villages", "manufacture", "apprenticeship", "vacancies",
    "prioritise", "liqueur", "transitory", "complaining",
    "skeleton", "alcohol", "enviable", "unnatural",
    "patient", "resurrect", "celebrity", "rejuvenate",
    "recommend", "acknowledge", "obsessive", "imaginative",
    "health", "believe", "vindicate",
  ],
  37: [
    "half", "annually", "manufacturing", "trowel",
    "travelled", "miraculous", "proviso", "telekinesis",
    "ghoul", "assert", "autumn", "loaves",
    "proportion", "benevolent", "popped", "dropped",
    "supervision", "inconsiderable", "characters", "liking",
    "obviously", "navigator", "preparation",
  ],
  38: [
    "tidied", "fumigate", "incognito", "transfusion",
    "memories", "knives", "decorum", "gymkhana",
    "which", "boycott", "discomfort", "employment",
    "elocution", "attention", "flag", "option",
    "sceptical", "contempt", "persuade", "upholsterer",
    "grandeur", "odour", "rehearsing",
  ],
  39: [
    "place", "consternation", "appear", "engage",
    "exclaimed", "perilous", "rebellious", "analyse",
    "nice", "decrease", "thieve", "complimentary",
    "miscellaneous", "directory", "unconscious", "involuntary",
    "modicum", "appropriate", "accusation", "history",
    "oregano", "cancelling", "luscious",
  ],
  40: [
    "tournament", "friend", "leather", "intuition",
    "feasible", "professor", "crying", "buried",
    "observe", "denying", "behaviours", "misguided",
    "eccentric", "dictionaries", "educational", "independent",
    "incredible", "triumph", "unattractive", "chronic",
    "hopping", "future", "pure",
  ],
  41: [
    "berries", "slimming", "electricity", "literacy",
    "jittery", "calculated", "barbarian", "verdant",
    "poking", "weird", "friendly", "allergic",
    "liaise", "possibly", "suicide", "dictatorship",
    "discretion", "hallucination", "factories", "pierce",
    "laughing", "irrational", "heavily",
  ],
  42: [
    "discontinue", "signal", "research", "forgetfully",
    "treason", "vinegar", "unison", "sphere",
    "bouquet", "observation", "puncture", "metropolis",
    "increase", "decomposing", "perimeter", "medical",
    "shovelling", "dependency", "leopard", "delirious",
    "inconsolable", "depression", "permitted",
  ],
  43: [
    "wrapper", "accommodation", "beautician", "possession",
    "bargain", "sensational", "countries", "funniest",
    "cellophane", "thoughtful", "barrel", "realm",
    "mercury", "chord", "racquet", "early",
    "avoidance", "comfortably", "league", "emperor",
    "unaccompanied", "valuable", "emerged",
  ],
  44: [
    "unofficial", "applicable", "tour", "effect",
    "accidental", "fitted", "haul", "employ",
    "corpses", "glance", "privileged", "president",
    "patrolled", "comfortable", "wrist", "deserts",
    "attire", "sausage", "scarves", "peculiar",
    "immature", "obtained", "recent",
  ],
  45: [
    "unpopular", "disallow", "tempestuous", "absolutely",
    "wreck", "disobedient", "doubtful", "resuscitate",
    "disembarking", "discover", "numb", "write",
    "summoned", "energy", "juror", "giraffe",
    "designed", "co-education", "bullion", "ballast",
    "chorus", "horror", "circumstantial",
  ],
  46: [
    "sociable", "naivety", "fancy", "closing",
    "surely", "interrogate", "regatta", "correspond",
    "hessian", "credible", "replied", "crew",
    "learn", "cosiest", "discussion", "lucrative",
    "inexpert", "saxophone", "joystick", "wretched",
    "capable", "college", "rancour",
  ],
  47: [
    "suburb", "illegal", "exclaim", "explode",
    "appalling", "seize", "swollen", "vegetable",
    "liaison", "ledge", "orphan", "bludgeon",
    "cement", "liquefy", "photocopy", "twinge",
    "exhibited", "attribute", "repair", "alphabet",
    "inspire", "threshold", "database",
  ],
  48: [
    "poultry", "undertake", "slouch", "nutrition",
    "consequence", "artificial", "matriarch", "danced",
    "unbeaten", "numbed", "muscle", "polite",
    "discolour", "ceiling", "conceited", "civilian",
    "bamboozle", "loneliness", "optical", "courageous",
    "organise", "secretively", "origami",
  ],
  49: [
    "bilby", "establish", "written", "literature",
    "foreigner", "annoy", "arrogant", "evident",
    "lightning", "frigate", "purest", "search",
    "resources", "continuous", "especially", "hoping",
    "cupboard", "vigilance", "dirtiest", "observant",
    "ignite", "manufactured", "haste",
  ],
  50: [
    "digging", "orchestra", "fought", "insight",
    "regiment", "beacon", "wholesome", "miserably",
    "disappointed", "wash", "cancellation", "white",
    "shaking", "wrapped", "weight", "read",
    "unbridled", "illuminate", "visibly", "brake",
    "abbreviation", "behaviour", "kaleidoscope",
  ],
  51: [
    "intriguing", "measured", "reaction", "therapeutic",
    "hurried", "intravenous", "interrupt", "scrupulous",
    "potential", "convince", "discontent", "rumour",
    "rubbed", "thorough", "dustiest", "opportunity",
    "inconsiderate", "sailor", "mischievous", "endeavour",
    "embezzlement", "applicant", "swimmer",
  ],
  52: [
    "unite", "skulk", "institute", "wrinkle",
    "alpaca", "facilitate", "environment", "unattached",
    "fatherhood", "originally", "while", "document",
    "inaccessible", "coloured", "membership", "treasured",
    "tolerant", "despair", "plough", "dancing",
    "precarious", "spread", "ginger",
  ],
};

export const spellingWeeks: Record<number, SpellingWeek> =
  Object.fromEntries(
    Object.entries(weekWordLists).map(([week, words]) => {
      const weekNumber = Number(week);

      return [
        weekNumber,
        {
          week: weekNumber,
          title: `Week ${weekNumber}`,
          words: words.map(makeSpellingWord),
        },
      ];
    })
  ) as Record<number, SpellingWeek>;

export function getSpellingWeek(
  weekNumber: number
): SpellingWeek | undefined {
  return spellingWeeks[weekNumber];
}

export function findWord(word: string): SpellingWord | undefined {
  const normalisedWord = word.trim().toLowerCase();

  for (const week of Object.values(spellingWeeks)) {
    const match = week.words.find(
      (item) => item.word.toLowerCase() === normalisedWord
    );

    if (match) {
      return match;
    }
  }

  return undefined;
}
