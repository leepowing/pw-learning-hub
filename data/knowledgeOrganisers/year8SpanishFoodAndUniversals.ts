import type { KnowledgeOrganiser, KnowledgeQuestion } from "./types";

export type SpanishSourceItem = {
  id: string;
  page: 2 | 3;
  group: string;
  number: number;
  sectionId: string;
  spanish: string;
  english: string;
  grammar?: string;
};

const p2 = (number: number, sectionId: string, spanish: string, english: string, grammar?: string): SpanishSourceItem => ({
  id: `y8-sp-aut-p2-${String(number).padStart(2, "0")}`, page: 2, group: "Food, meals and health", number, sectionId, spanish, english, grammar,
});
const p3 = (group: string, number: number, sectionId: string, spanish: string, english: string, grammar?: string): SpanishSourceItem => ({
  id: `y8-sp-aut-p3-${group.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}-${String(number).padStart(2, "0")}`,
  page: 3, group, number, sectionId, spanish, english, grammar,
});

export const year8SpanishFoodAndUniversalsSourceItems: SpanishSourceItem[] = [
  p2(1,"opinions","me gusta(n) mucho...","I really like..."), p2(2,"opinions","me encanta(n)...","I love..."),
  p2(3,"opinions","no me gusta(n) nada...","I don't like... at all"), p2(4,"opinions","odio...","I hate..."), p2(5,"opinions","prefiero...","I prefer..."),
  p2(6,"food-drink","el agua","the water"), p2(7,"food-drink","el arroz","rice"), p2(8,"food-drink","los caramelos","sweets"),
  p2(9,"food-drink","la carne","meat"), p2(10,"food-drink","la fruta","fruit"), p2(11,"food-drink","los huevos","eggs"),
  p2(12,"food-drink","la leche","milk"), p2(13,"food-drink","el marisco","seafood"), p2(14,"food-drink","el pescado","fish"), p2(15,"food-drink","el queso","cheese"),
  p2(16,"meals-routines","desayuno","for breakfast I have"), p2(17,"meals-routines","cereales","cereal"), p2(18,"meals-routines","tostadas","toast"),
  p2(19,"meals-routines","zumo de naranja","orange juice"), p2(20,"meals-routines","no desayuno nada","I don't have anything for breakfast"),
  p2(21,"meals-routines","como...","I have for lunch"), p2(22,"meals-routines","un bocadillo","a sandwich"), p2(23,"meals-routines","ceno...","I have for dinner"),
  p2(24,"meals-routines","pollo con ensalada","chicken with salad"), p2(25,"meals-routines","cenamos...","We have for dinner"),
  p2(26,"meals-routines","las hamburguesas","hamburgers"), p2(27,"meals-routines","desayuno a las siete","I have breakfast at 7"),
  p2(28,"meals-routines","como a las dos","I have lunch at 2"), p2(29,"meals-routines","ceno a la nueve","I have dinner at 9","Printed exactly as the KO. Standard Spanish normally uses ‘a las nueve’."),
  p2(30,"restaurant","fui a un restaurante","I went to a restaurant","preterite, first-person singular"),
  p2(31,"restaurant","mi familia y yo fuimos a un restaurante","my family and I went to a restaurant","preterite, first-person plural"),
  p2(32,"restaurant","comí","I ate","preterite, first-person singular"), p2(33,"restaurant","comimos","we ate","preterite, first-person plural"),
  p2(34,"restaurant","bebí","I drank","preterite, first-person singular"), p2(35,"restaurant","bebimos","we drank","preterite, first-person plural"),
  p2(36,"restaurant","voy a ir a un restaurante","I am going to go to a restaurant","near future"), p2(37,"restaurant","voy a comer","I am going to eat","near future"),
  p2(38,"restaurant","vamos a comer","we are going to eat","near future"), p2(39,"health-description","tengo hambre","I'm hungry"), p2(40,"health-description","tengo sed","I'm thirsty"),
  p2(41,"health-description","soy sano/a","I am healthy","gender agreement"), p2(42,"health-description","es malsano/a","he/she is unhealthy","gender agreement"),
  p2(43,"meals-routines","suelo comer","I usually eat"), p2(44,"meals-routines","solemos comer","We usually eat"),
  p2(45,"connectives","porque","because"), p2(46,"health-description","es sano/a","it's healthy","gender agreement"),
  p2(47,"health-description","es malsano/a","it's unhealthy","gender agreement"), p2(48,"health-description","es delicioso/a","it's delicious","gender agreement"),
  p2(49,"health-description","es asqueroso/a","it's disgusting","gender agreement"), p2(50,"health-description","es dulce","it's sweet"),

  p3("Top 10 opinions",1,"opinions","me gusta","I like"), p3("Top 10 opinions",2,"opinions","no me gusta","I don't like"),
  p3("Top 10 opinions",3,"opinions","odio","I hate"), p3("Top 10 opinions",4,"opinions","prefiero","I prefer"),
  p3("Top 10 opinions",5,"opinions","me chifla","I really like"), p3("Top 10 opinions",6,"opinions","me aburre","It bores me"),
  p3("Top 10 opinions",7,"opinions","me encanta","I love"), p3("Top 10 opinions",8,"opinions","es","(it) is"),
  p3("Top 10 opinions",9,"opinions","fue","(it) was","preterite"), p3("Top 10 opinions",10,"opinions","será","(it) will be","future"),
  p3("Top 10 connectives",1,"connectives","y","and"), p3("Top 10 connectives",2,"connectives","pero","but"),
  p3("Top 10 connectives",3,"connectives","también","also"), p3("Top 10 connectives",4,"connectives","porque/dado que","because"),
  p3("Top 10 connectives",5,"connectives","sin embargo","however"), p3("Top 10 connectives",6,"connectives","si","if"),
  p3("Top 10 connectives",7,"connectives","mientras","whereas"), p3("Top 10 connectives",8,"connectives","aunque","although"),
  p3("Top 10 connectives",9,"connectives","donde","where"), p3("Top 10 connectives",10,"connectives","no obstante","nevertheless"),
  p3("Top 10 time phrases",1,"time-future","ayer","yesterday"), p3("Top 10 time phrases",2,"time-future","el año pasado","last year"),
  p3("Top 10 time phrases",3,"time-future","la semana pasada","last week"), p3("Top 10 time phrases",4,"time-future","de vez en cuando","from time to time"),
  p3("Top 10 time phrases",5,"time-future","a veces","sometimes"), p3("Top 10 time phrases",6,"time-future","normalmente","normally"),
  p3("Top 10 time phrases",7,"time-future","dos veces a la semana","twice a week"), p3("Top 10 time phrases",8,"time-future","todos los días","every day"),
  p3("Top 10 time phrases",9,"time-future","la semana que viene","next week"), p3("Top 10 time phrases",10,"time-future","cuando sea mayor","when I am older"),
  p3("Top 10 ir/hacer",1,"core-verbs","voy","I go"), p3("Top 10 ir/hacer",2,"core-verbs","vamos","we go"),
  p3("Top 10 ir/hacer",3,"core-verbs","fui","I went"), p3("Top 10 ir/hacer",4,"core-verbs","fuimos","we went"),
  p3("Top 10 ir/hacer",5,"core-verbs","voy a ir","I am going to go"), p3("Top 10 ir/hacer",6,"core-verbs","hago","I do"),
  p3("Top 10 ir/hacer",7,"core-verbs","hace","he/she/it does"), p3("Top 10 ir/hacer",8,"core-verbs","hice","I did"),
  p3("Top 10 ir/hacer",9,"core-verbs","hizo","he/she/it did"), p3("Top 10 ir/hacer",10,"core-verbs","hicimos","we did"),
  p3("Top 10 preterite tense",1,"core-verbs","comí","I ate","preterite"), p3("Top 10 preterite tense",2,"core-verbs","comimos","we ate","preterite"),
  p3("Top 10 preterite tense",3,"core-verbs","bebí","I drank","preterite"), p3("Top 10 preterite tense",4,"core-verbs","fue","It was","preterite"),
  p3("Top 10 preterite tense",5,"core-verbs","visité","I visited","preterite"), p3("Top 10 preterite tense",6,"core-verbs","vi","I saw","preterite"),
  p3("Top 10 preterite tense",7,"core-verbs","descansé","I relaxed","preterite"), p3("Top 10 preterite tense",8,"core-verbs","escuché","I listened","preterite"),
  p3("Top 10 preterite tense",9,"core-verbs","saqué","I took","preterite"), p3("Top 10 preterite tense",10,"core-verbs","fue","It was","preterite; repeated source occurrence retained"),
  p3("Top ten adjectives",1,"health-description","interesante.s","interesting","source shorthand: interesante/interesantes"),
  p3("Top ten adjectives",2,"health-description","bonito.a.os.as","pretty","source shorthand: bonito/bonita/bonitos/bonitas"),
  p3("Top ten adjectives",3,"health-description","grande.es","big","source shorthand: grande/grandes"),
  p3("Top ten adjectives",4,"health-description","pequeño.a.os.as","small","source shorthand: pequeño/pequeña/pequeños/pequeñas"),
  p3("Top ten adjectives",5,"health-description","delicioso.a.os.as","delicious","source shorthand: delicioso/deliciosa/deliciosos/deliciosas"),
  p3("Top ten adjectives",6,"health-description","relajante.s","relaxing","source shorthand: relajante/relajantes"),
  p3("Top ten adjectives",7,"health-description","educativo.a.os.as","educational","source shorthand: educativo/educativa/educativos/educativas"),
  p3("Top ten adjectives",8,"health-description","entretenido.a.os.as","entertaining","source shorthand: entretenido/entretenida/entretenidos/entretenidas"),
  p3("Top ten adjectives",9,"health-description","sano.a.os.as","healthy","source shorthand: sano/sana/sanos/sanas"),
  p3("Top ten adjectives",10,"health-description","malsano.a.os.as","unhealthy","source shorthand: malsano/malsana/malsanos/malsanas"),
  p3("Top 3 future",1,"time-future","voy a ir","I am going to go","near future"), p3("Top 3 future",2,"time-future","voy a ver","I am going to see","near future"),
  p3("Top 3 future",3,"time-future","va a ser","it is going to be","near future"),
  p3("Top 3 high level phrases",1,"connectives","es importante que sea","It is important that it is"),
  p3("Top 3 high level phrases",2,"connectives","no pienso que sea","I don't think that it is"),
  p3("Top 3 high level phrases",3,"connectives","me gustaría","I would like"),
];

const sectionMeta = [
  ["opinions","Opinions and Food Preferences","Expressing likes, dislikes and preferences","#7c3aed"],
  ["food-drink","Food and Drink","Core food vocabulary with articles","#8b5cf6"],
  ["meals-routines","Meals and Daily Eating Routines","Breakfast, lunch, dinner and times","#a855f7"],
  ["restaurant","Eating Out and Restaurant Visits","Past and future restaurant language","#c026d3"],
  ["health-description","Healthy Eating and Describing Food","Health, taste and adjective agreement","#db2777"],
  ["connectives","Connectives and High-Level Phrases","Linking and extending ideas","#f59e0b"],
  ["time-future","Time, Frequency and Future Plans","Placing events in time","#2563eb"],
  ["core-verbs","Core Verbs and the Preterite","Ir, hacer and useful past forms","#0891b2"],
] as const;

function sourceRef(item: SpanishSourceItem) {
  return `Year 8 Spanish KO(1).pdf p.${item.page} · ${item.group} · item ${item.number}`;
}

function pronunciationText(item: SpanishSourceItem) {
  return item.spanish
    .replaceAll("...", "")
    .replace(/\.a\.os\.as$|\.es$|\.s$/, "")
    .replace("porque/dado que", "porque")
    .replace("sano/a", "sano")
    .replace("malsano/a", "malsano")
    .replace("delicioso/a", "delicioso")
    .replace("asqueroso/a", "asqueroso")
    .trim();
}

const sections = sectionMeta.map(([id,title,context,colour]) => {
  const items = year8SpanishFoodAndUniversalsSourceItems.filter(item => item.sectionId === id);
  return {
    id, title, context, colour,
    summary: `Learn ${items.length} Spanish forms from the school Knowledge Organiser. Spanish and printed English meanings are retained exactly.`,
    keyFacts: items.map(item => `${item.spanish} — ${item.english}${item.grammar ? ` (${item.grammar})` : ""}`),
    keyTerms: items.map(item => item.spanish),
    sourceType: "knowledgeOrganiser" as const,
    sourceRef: items.map(sourceRef).join("; "),
  };
});

const flashcards = year8SpanishFoodAndUniversalsSourceItems.map(item => ({
  id: `${item.id}-fc`, sectionId: item.sectionId,
  front: `${item.group} item ${item.number}: How do you say “${item.english}” in Spanish?`,
  back: `${item.spanish} — ${item.english}${item.grammar ? ` · ${item.grammar}` : ""}`,
  audioText: pronunciationText(item),
  sourceType: "knowledgeOrganiser" as const, sourceRef: sourceRef(item),
}));

function distractors(item: SpanishSourceItem) {
  const pool = year8SpanishFoodAndUniversalsSourceItems
    .filter(candidate => candidate.sectionId === item.sectionId && candidate.spanish !== item.spanish)
    .map(candidate => candidate.spanish);
  return [item.spanish, ...Array.from(new Set(pool)).slice(0, 3)];
}

const coverageQuestions: KnowledgeQuestion[] = year8SpanishFoodAndUniversalsSourceItems.map(item => ({
  id: `${item.id}-mcq`, type: "multiple-choice", sectionIds: [item.sectionId], marks: 1,
  prompt: `${item.group} item ${item.number}: Which Spanish form matches “${item.english}”?`,
  options: distractors(item), answer: item.spanish,
  explanation: `${item.spanish} means “${item.english}”.${item.grammar ? ` ${item.grammar}` : ""}`,
  sourceType: "knowledgeOrganiser", sourceRef: sourceRef(item),
}));

const extendedQuestions: KnowledgeQuestion[] = [
  { id:"sp-int-match-food",type:"short-answer",format:"matching",sectionIds:["food-drink"],prompt:"Match each Spanish food to its English meaning.",marks:4,markingPoints:["el agua = water","la carne = meat","el pescado = fish","el queso = cheese"],guidance:"Match all four accurately.",interaction:{kind:"matching",left:["el agua","la carne","el pescado","el queso"],right:["water","meat","fish","cheese"],answers:[0,1,2,3]},sourceType:"knowledgeOrganiser",sourceRef:"Year 8 Spanish KO(1).pdf p.2 items 6, 9, 14, 15"},
  { id:"sp-int-fill-meals",type:"short-answer",format:"fill-in-the-blank",sectionIds:["meals-routines"],prompt:"Complete the meal routine phrases.",marks:3,markingPoints:["desayuno a las siete","como a las dos","ceno a la nueve (printed KO form)"],guidance:"Use the exact forms printed in the KO.",interaction:{kind:"fill-blanks",sentences:["_____ a las siete","_____ a las dos","_____ a la nueve"],answers:[["desayuno"],["como"],["ceno"]],wordBank:["desayuno","como","ceno"]},sourceType:"knowledgeOrganiser",sourceRef:"Year 8 Spanish KO(1).pdf p.2 items 27-29"},
  { id:"sp-int-order-restaurant",type:"short-answer",format:"ordering",sectionIds:["restaurant"],prompt:"Put the chunks in order to say ‘My family and I went to a restaurant’.",marks:1,markingPoints:["mi familia y yo fuimos a un restaurante"],guidance:"Keep the Spanish word order.",interaction:{kind:"ordering",items:["a un restaurante","fuimos","mi familia y yo"],answer:["mi familia y yo","fuimos","a un restaurante"]},sourceType:"knowledgeOrganiser",sourceRef:"Year 8 Spanish KO(1).pdf p.2 item 31"},
  { id:"sp-int-class-time",type:"short-answer",format:"classification",sectionIds:["time-future","core-verbs"],prompt:"Classify each phrase as past, present or future.",marks:6,markingPoints:["ayer: past","normalmente: present","la semana que viene: future","fui: past","hago: present","voy a ir: future"],guidance:"Use the time or verb form.",interaction:{kind:"classification",rows:["ayer","normalmente","la semana que viene","fui","hago","voy a ir"],categories:["past","present","future"],answers:["past","present","future","past","present","future"]},sourceType:"knowledgeOrganiser",sourceRef:"Year 8 Spanish KO(1).pdf p.3 time phrases and ir/hacer"},
  { id:"sp-long-food-opinion",type:"long-answer",sectionIds:["opinions","food-drink","connectives","health-description"],prompt:"Write a short Spanish paragraph about food preferences. Include two foods, an opinion, a reason and a health or taste description.",marks:5,markingPoints:["Names at least two KO foods accurately.","Uses a KO opinion phrase accurately.","Uses porque or dado que to give a reason.","Uses an appropriate health or taste description.","Spanish meaning is clear with suitable agreement."],guidance:"Use only language from the taught KO sections." ,sourceType:"generatedSupplement",sourceRef:"Generated practice mapped to p.2 and p.3 taught content"},
  { id:"sp-long-restaurant",type:"long-answer",sectionIds:["restaurant","time-future","connectives"],prompt:"Write a short Spanish paragraph about a past restaurant visit and a future eating plan. Include a past time phrase, two preterite forms, a connective and one near-future form.",marks:5,markingPoints:["Uses a KO past time phrase.","Uses two appropriate KO preterite forms.","Uses a KO connective accurately.","Uses one KO near-future form.","The past and future meanings are clear."],guidance:"Check verb person, tense and accents.",sourceType:"generatedSupplement",sourceRef:"Generated practice mapped to p.2 restaurant and p.3 universal language"},
];

export const year8SpanishFoodAndUniversals: KnowledgeOrganiser = {
  id:"year8-spanish-food-and-universals", year:8, subject:"Spanish", term:"Autumn", chapter:1,
  title:"Food, Healthy Eating and Spanish Universals",
  introduction:"Build confident Spanish for food, meals, restaurant visits, opinions, past events and future plans using the complete Autumn 2026 Knowledge Organiser.",
  sections, flashcards, questions:[...coverageQuestions,...extendedQuestions],
  pronunciationItems: year8SpanishFoodAndUniversalsSourceItems.map(item => ({id:item.id,sectionId:item.sectionId,text:pronunciationText(item),english:item.english,locale:"es-ES",sourceRef:sourceRef(item)})),
};

export function getSpanishPronunciationTarget(id: string) {
  return year8SpanishFoodAndUniversals.pronunciationItems?.find(item => item.id === id);
}
