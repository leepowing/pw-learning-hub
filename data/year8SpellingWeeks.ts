import type { SpellingWeek, SpellingWord } from "./spellingWeeks";
import { year8WordDetails } from "./year8WordDetails";

const makeSpellingWord = (word: string): SpellingWord => {
  const detail = year8WordDetails[word];

  return {
    word,
    meaning: detail?.meaning ?? "Definition coming soon.",
    chinese: detail?.chinese ?? "",
    sentence: detail?.sentence ?? "",
  };
};

const weekWordLists: Record<number, string[]> = {
1: [
  "issue", "partial", "murmur", "exonerate", "malt",
  "levitate", "field", "intrepid", "beret", "restoration",
  "stroking", "successful", "yielding", "laziness", "echo",
  "pitiful", "pincer", "gregarious", "interesting", "marriage",
  "sensation", "diary", "searched", "cellar", "initial",
  "heavier", "gently", "technicality", "question", "marries",
],

2: [
  "benefit", "profession", "entertained", "motherhood", "conservation",
  "separately", "sequence", "woeful", "persuasive", "deficit",
  "equilateral", "achieving", "choir", "court", "insolent",
  "physicist", "horrific", "demolished", "exemplify", "eager",
  "accidents", "indecently", "invincible", "elite", "reason",
  "minerals", "atomic", "principle", "squadron", "baulk",
],

3: [
  "orchid", "goodnight", "cinema", "constitute", "stationary",
  "project", "society", "surprising", "fibrous", "familiar",
  "deaf", "championship", "quarter", "biology", "concentration",
  "honour", "temperamental", "heaviness", "extremely", "complained",
  "copious", "cynical", "directions", "vessel", "subsidiary",
  "contraptions", "conductor", "earnest", "employable", "wasp",
],

4: [
  "levelling", "warfare", "holiday", "relevant", "fellowship",
  "incorrectly", "goblet", "gigantic", "continued", "explaining",
  "nutrient", "vengeance", "homicide", "married", "receiving",
  "hesitate", "ancient", "unachievable", "kingdom", "military",
  "escaping", "finicky", "subsided", "knuckle", "umbrella",
  "flavour", "grumbly", "ordinary", "draught", "movement",
],

5: [
  "misadventure", "patch", "inexcusable", "quaint", "joking",
  "recede", "telephone", "mucus", "recruitment", "novel",
  "principal", "residual", "litigious", "sorrowful", "razor",
  "rhinoceros", "thankfully", "pedestrian", "moult", "colossal",
  "haemoglobin", "unattainable", "believing", "praise", "disposable",
  "shoulder", "wad", "enjoyment", "contemplative", "agreeable",
],

6: [
  "notice", "replaceable", "slapped", "opticians", "gypsy",
  "swimming", "moreover", "survive", "financier", "compel",
  "voila", "formation", "pedigree", "insincerely", "hypocrite",
  "zany", "measure", "harry", "finance", "unexpectedly",
  "pertinent", "sufficient", "exaggerate", "policy", "cell",
  "sludge", "extrovert", "conceit", "dictionary", "exhume",
],

7: [
  "definitely", "colloquial", "cried", "disinfectant", "desperation",
  "expression", "squabble", "prescription", "loathe", "advance",
  "breathless", "physically", "words", "unappealing", "shackle",
  "people", "hopper", "access", "lullaby", "category",
  "further", "revolutionary", "wastage", "acquire", "coupon",
  "consequently", "abundance", "clumsily", "effective", "miniature",
],

8: [
  "social", "silhouette", "temporary", "competence", "architect",
  "relied", "improbable", "chariot", "circumspect", "column",
  "impeach", "angel", "favour", "winning", "epidemic",
  "claustrophobia", "easily", "trotting", "scene", "hurriedly",
  "patted", "level", "encapsulate", "trying", "abide",
  "tangible", "chemistry", "financial", "gnarled", "inarticulate",
],

9: [
  "neighbourhood", "carried", "agility", "hibiscus", "investigations",
  "theory", "misconstrue", "fraught", "commit", "dye",
  "breath", "happier", "tortoise", "climatic", "trace",
  "quiescent", "friends", "generic", "wriggled", "sketch",
  "avoid", "conduct", "dwell", "zodiac", "emboss",
  "hungrily", "shrieked", "opaque", "clockwise", "magical",
],

10: [
  "geography", "features", "scavenger", "whilst", "punnet",
  "attractive", "surrender", "wholehearted", "utter", "elves",
  "immobile", "sparkly", "intrigue", "telephoning", "investigation",
  "breeches", "vegetation", "identification", "emblem", "merino",
  "pageant", "horrible", "endangered", "phobia", "devoid",
  "expensive", "judicious", "skulduggery", "quiche", "cycling",
],

11: [
  "wrought", "wearisome", "planning", "photographing", "scarce",
  "decide", "fluent", "prestige", "pattern", "community",
  "damaging", "whisker", "curtain", "luckiest", "armour",
  "comical", "height", "hugged", "jovial", "smoking",
  "vapour", "surrounded", "capture", "ubiquitous", "enemies",
  "precious", "items", "badger", "psychology", "face",
],

12: [
  "wilful", "disembark", "anxiously", "ominous", "luxury",
  "inefficient", "separate", "pursuit", "varied", "signed",
  "temperature", "autonomous", "cease", "vulnerable", "design",
  "delicious", "egotism", "improvement", "yearn", "hallucinate",
  "ornamental", "carriage", "baggage", "accordance", "graph",
  "glamour", "perceptible", "generate", "critically", "vibration",
],

13: [
  "rein", "terrace", "graphics", "various", "haunt",
  "victorious", "strengthen", "know", "stepped", "treasure",
  "feather", "bent", "co-incidence", "championships", "surreal",
  "diamond", "taffeta", "ignorant", "terrestrial", "ombudsman",
  "inaccuracies", "tidiness", "monotony", "couscous", "inquired",
  "appreciated", "hostel", "responsible", "colour", "saviour",
],

14: [
  "accidently", "immoral", "fabulous", "cemetery", "necessarily",
  "massacre", "helicopter", "coincide", "pitch", "botany",
  "imperturbable", "catch", "reminiscent", "ulcer", "decorate",
  "uncoordinated", "besotted", "bouncing", "multiplication", "carpentry",
  "reflector", "oppression", "impatience", "hurrying", "impression",
  "hideous", "procure", "occasionally", "imperial", "obsessed",
],

15: [
  "mystery", "beautiful", "inconsequential", "shrewd", "thief",
  "brutally", "thoughtfully", "musician", "rodent", "ridiculous",
  "exciting", "admirable", "special", "chopped", "bomb",
  "defiant", "naming", "thwart", "noisiest", "storm",
  "unsociable", "obnoxious", "crazier", "invite", "rhubarb",
  "complete", "swarm", "conduit", "diaries", "psychiatrist",
],

16: [
  "marvelled", "emancipate", "wealth", "wraith", "knowing",
  "loneliest", "unbelievable", "lieutenant", "majestic", "original",
  "language", "personally", "cuddly", "kiosk", "investigating",
  "quote", "fashionable", "matador", "disadvantage", "wrestle",
  "estuary", "braise", "wary", "anxious", "proposition",
  "experience", "disinterested", "facility", "congenial", "horrified",
],

17: [
  "montage", "launch", "pinned", "vivacious", "spinning",
  "hurries", "patiently", "merriest", "certified", "molten",
  "unearth", "boundary", "thesis", "dropping", "cries",
  "competition", "athlete", "occasion", "information", "funnier",
  "explore", "palace", "betrothed", "rancid", "journalist",
  "ungrateful", "leaves", "wonderful", "slipping", "carrying",
],

18: [
  "sanctimonious", "incorporate", "curb", "fault", "caffeine",
  "bypass", "example", "meanwhile", "salary", "punctual",
  "terribly", "llama", "quarrel", "emphasis", "witch",
  "decision", "regional", "advertisement", "spitefully", "journal",
  "calculator", "brevity", "stomach", "cajole", "heir",
  "whine", "overwhelm", "nuisance", "immortals", "dissatisfied",
],

19: [
  "earn", "legible", "including", "muscular", "globalism",
  "devotion", "stitch", "sucrose", "busier", "justify",
  "exploded", "annoyance", "marrying", "exclusion", "dissatisfy",
  "technique", "chrome", "spied", "commercial", "skill",
  "debris", "toucan", "exploding", "when", "percussion",
  "cheques", "meadow", "accelerating", "memorandum", "opulently",
],

20: [
  "rhythm", "outside", "celebration", "beginning", "implicate",
  "disbelieve", "relies", "tablecloth", "was", "occupation",
  "radial", "popcorn", "sauce", "professors", "onyx",
  "prognosis", "continuity", "missionary", "goanna", "embarrassed",
  "definite", "planner", "surprise", "recite", "inexpensive",
  "thinner", "impermanent", "confident", "stock", "terrible",
],

21: [
  "exuberant", "influence", "property", "acceptance", "creation",
  "anagram", "succession", "oblige", "queen", "realistic",
  "drought", "practically", "delinquent", "scale", "fragrant",
  "pictures", "gratefully", "procession", "prankster", "zinc",
  "lazier", "driving", "minions", "budget", "chatted",
  "magistrate", "guidance", "expire", "exert", "vertebrates",
],

22: [
  "appeal", "appointment", "violence", "alias", "forty",
  "impolite", "significant", "shopping", "fried", "redemption",
  "quarrelled", "requiring", "peaceful", "outback", "slipped",
  "confusion", "actually", "suitably", "inertia", "dead",
  "changeable", "tsunami", "exterior", "whisper", "irresponsible",
  "intimate", "enjoy", "brilliance", "rubella", "inaudible",
],

23: [
  "gnomes", "respectable", "painfully", "resplendent", "magically",
  "rubber", "noise", "appoint", "persist", "revision",
  "ogre", "counties", "carcasses", "amusements", "tomorrow",
  "questionnaire", "gnawed", "dictator", "chamber", "poetic",
  "anniversary", "salutation", "edifice", "capacity", "strategy",
  "thoughtless", "mathematician", "reflected", "tide", "territorial",
],

24: [
  "facilities", "dustier", "inventor", "scenario", "relying",
  "uncertain", "heroic", "plentiful", "prediction", "affair",
  "signalling", "normal", "addition", "climb", "plait",
  "concentrating", "global", "paintbrush", "suppression", "gynaecology",
  "possible", "surface", "guarantee", "weapon", "audible",
  "actor", "majority", "emptiness", "probably", "instant",
],

25: [
  "vain", "engineer", "chance", "contradictory", "disqualify",
  "evaluation", "hesitance", "frivolous", "fraction", "chrysalis",
  "knock", "nature", "configuration", "external", "digested",
  "bisque", "dangerous", "pleasant", "logically", "lavender",
  "clutch", "zenith", "wrap", "poisonous", "noticeable",
  "unbreakable", "remember", "dugong", "pier", "skilful",
],

26: [
  "passion", "clapping", "politician", "denied", "cockatiel",
  "mechanics", "reluctant", "dollop", "percolator", "unheard",
  "buoy", "tunnelling", "incomplete", "wreath", "invitation",
  "operator", "visibility", "bankruptcy", "electorate", "thermonuclear",
  "saving", "generous", "deprived", "musical", "suction",
  "scrounge", "instantaneous", "wallet", "inedible", "supplied",
],

27: [
  "excelling", "racial", "protein", "getting", "criticism",
  "misinterpret", "intend", "dishearten", "creature", "saucer",
  "parallel", "reassure", "rebelled", "expel", "leisure",
  "solicitous", "scimitar", "futile", "fuchsia", "phoneys",
  "pictured", "turnip", "avocado", "trapeze", "improper",
  "exquisite", "lives", "incidentally", "distant", "slaughter",
],

28: [
  "qualifier", "require", "tactile", "phantom", "irresistible",
  "inclined", "linguist", "persuading", "phosphorescent", "respectful",
  "spectacular", "official", "challenge", "witchery", "athletic",
  "useless", "jeopardy", "simply", "criminal", "approach",
  "colourless", "impatient", "grandfather", "jealous", "ancestor",
  "unearthing", "avail", "omit", "serious", "atmosphere",
],

29: [
  "February", "obligatory", "undisturbed", "attempt", "condition",
  "lies", "exam", "pleasure", "vinyl", "exhibitions",
  "smiling", "coronation", "recognisable", "rebelling", "commentary",
  "easiest", "performance", "reflections", "concept", "examine",
  "transplant", "whole", "inspector", "censorship", "incorrect",
  "nefarious", "wand", "annuity", "marathon", "inattentive",
],

30: [
  "relation", "silliness", "pessimistic", "ready", "luminescent",
  "responsibility", "prevalence", "chilliest", "exclaiming", "hugging",
  "psychic", "carries", "specimen", "ache", "Wednesday",
  "stretch", "waive", "wander", "pamphlet", "goalkeeper",
  "scheme", "gnash", "untimely", "attitude", "genuine",
  "illiterate", "maintenance", "inconsiderately", "minute", "composing",
],

31: [
  "caught", "promotion", "idyllic", "damaged", "letting",
  "semblance", "affect", "jettison", "humour", "remarkable",
  "skipped", "imprecise", "library", "apprentice", "volunteer",
  "insignificantly", "predictions", "knocked", "healthiest", "thesaurus",
  "pausing", "nastiest", "youth", "genteel", "convention",
  "siege", "sacrifice", "tarantula", "impassable", "knew",
],

32: [
  "plasticine", "agencies", "render", "desiccate", "precaution",
  "neighbour", "patients", "lamb", "race", "contract",
  "stride", "skipper", "myriad", "aggression", "manoeuvre",
  "corsage", "angelic", "fallacy", "informal", "reversible",
  "evidential", "humorous", "fluorescent", "furniture", "busiest",
  "maintain", "nudge", "simplistic", "instance", "lazily",
],

33: [
  "straight", "negotiable", "khaki", "practice", "decomposed",
  "cities", "lonelier", "process", "beautifully", "prescribing",
  "distinction", "constant", "uncomfortable", "ointment", "excelled",
  "fibre", "defence", "analysis", "beneath", "naughty",
  "skilfully", "running", "kitchen", "television", "pronounce",
  "clapped", "refrain", "babies", "gauge", "cylinder",
],

34: [
  "dishonest", "mechanically", "hopefully", "macadamia", "neighbours",
  "pray", "boulder", "glacier", "succulent", "keen",
  "physiotherapy", "unmistakable", "trance", "impractical", "temper",
  "incompetent", "unity", "what", "healthy", "beware",
  "oxygen", "galaxy", "sovereign", "centuries", "posterior",
  "molecule", "delineate", "assistant", "interest", "yacht",
],

35: [
  "burglar", "nostalgia", "celebrations", "outrageous", "population",
  "tries", "knit", "finally", "quarrelling", "venture",
  "wetting", "occurrence", "accident", "plead", "insane",
  "calcium", "guaranteed", "tentacles", "morphine", "abacus",
  "mediaeval", "hotter", "scenery", "chemotherapy", "receptor",
  "wheat", "distance", "business", "glandular", "harbour",
],

36: [
  "scientific", "fatal", "disembowel", "haphazard", "dice",
  "annihilate", "toilet", "kidnapped", "rationale", "inclusion",
  "accept", "invisible", "mystic", "excess", "oscillate",
  "vanilla", "demonstrate", "miscalculate", "division", "victory",
  "playground", "episode", "critical", "season", "fiction",
  "liberal", "resilient", "handbag", "Saturday", "debate",
],

37: [
  "instead", "composition", "cemented", "furious", "thread",
  "repulsion", "significance", "labelled", "patrolling", "station",
  "mandible", "sombre", "flexible", "several", "magicians",
  "pearl", "adrenaline", "indispensable", "certain", "labour",
  "submarine", "unaware", "hammock", "deference", "amusement",
  "itch", "fragile", "mode", "paragraph", "notoriety",
],

38: [
  "relationships", "separating", "mirror", "wharf", "automatically",
  "impossible", "cheerfully", "generation", "austere", "circumnavigate",
  "hoarse", "furnace", "final", "gumption", "logistics",
  "commission", "consciousness", "adhesion", "aromatic", "sympathy",
  "whistled", "essential", "vacancy", "flavoured", "disjointed",
  "fiend", "dispensable", "voice", "fascinating", "crouton",
],

39: [
  "reprisal", "satisfied", "survey", "protagonist", "choice",
  "capsicum", "familiarity", "chocolate", "musically", "perennial",
  "character", "invaded", "traditional", "committee", "absence",
  "gazelle", "wriggle", "indecipherable", "ecology", "autograph",
  "centimetres", "angrily", "longevity", "infinite", "sewerage",
  "unashamedly", "exchange", "formidable", "identifiable", "schematic",
],

40: [
  "naturally", "pugilist", "lied", "metallic", "chatting",
  "compliance", "escalator", "cocoa", "shopper", "insensitive",
  "healthier", "success", "ricochet", "evaporating", "successes",
  "concerned", "android", "dynasty", "collide", "notion",
  "cutting", "armies", "magician", "phoenix", "wrung",
  "cosier", "centurion", "politicians", "gymnast", "spoil",
],

41: [
  "quiet", "sufficiently", "journey", "lining", "exhilarating",
  "beseech", "evocative", "malaria", "nephew", "examination",
  "misinform", "consider", "famous", "ourselves", "natural",
  "centigrade", "incite", "deficient", "solicitor", "paisley",
  "insensitively", "authoritarian", "vacant", "angrier", "delicate",
  "meticulous", "ambiguous", "coherent", "inevitable", "hypothesis",
],
  
  
};

const weekTitles: Record<number, string> = {
  1: "Week 1",
};

export const year8SpellingWeeks = Object.fromEntries(
  Object.entries(weekWordLists).map(([week, words]) => [
    Number(week),
    {
      week: Number(week),
      title: weekTitles[Number(week)] ?? `Week ${week}`,
      words: words.map(makeSpellingWord),
    },
  ])
) as Record<number, SpellingWeek>;

export function getSpellingWeek(
  weekNumber: number
): SpellingWeek | undefined {
  return year8SpellingWeeks[weekNumber];
}

export function findWord(
  word: string
): SpellingWord | undefined {
  const normalisedWord = word.trim().toLowerCase();

  for (const week of Object.values(year8SpellingWeeks)) {
    const match = week.words.find(
      (item) => item.word.toLowerCase() === normalisedWord
    );

    if (match) {
      return match;
    }
  }

  return undefined;
}

