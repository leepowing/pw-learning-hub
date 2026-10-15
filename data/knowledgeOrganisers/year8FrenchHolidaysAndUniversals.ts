import type { KnowledgeOrganiser, KnowledgeQuestion } from "./types";

export type FrenchSourceItem = {
  id: string;
  page: 2 | 3;
  group: string;
  number: number;
  sectionId: string;
  french: string;
  english: string;
  grammar?: string;
  auditNote?: string;
};

const p2 = (number: number, sectionId: string, french: string, english: string, grammar?: string, auditNote?: string): FrenchSourceItem => ({
  id: `y8-fr-aut-p2-${String(number).padStart(2, "0")}`,
  page: 2,
  group: "Holidays",
  number,
  sectionId,
  french,
  english,
  grammar,
  auditNote,
});

const p3 = (group: string, number: number, sectionId: string, french: string, english: string, grammar?: string, auditNote?: string): FrenchSourceItem => ({
  id: `y8-fr-aut-p3-${group.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}-${String(number).padStart(2, "0")}`,
  page: 3,
  group,
  number,
  sectionId,
  french,
  english,
  grammar,
  auditNote,
});

export const year8FrenchHolidaysAndUniversalsSourceItems: FrenchSourceItem[] = [
  p2(1,"starting-points","j’habite en Angleterre","I live in England"),
  p2(2,"starting-points","on habite à Wymondham","we live in Wymondham"),
  p2(3,"starting-points","j’ai une semaine de vacances","I have a week of holidays"),
  p2(4,"starting-points","on a trois semaines de vacances","we have three weeks of holidays"),
  p2(5,"starting-points","à Noël","at Christmas"),
  p2(6,"starting-points","à Pâques","at Easter"),
  p2(7,"destinations","je suis en vacances...","I am on holiday"),
  p2(8,"destinations","nous sommes en vacances...","we are on holiday"),
  p2(9,"destinations","au bord de la mer","next to the sea"),
  p2(10,"destinations","à la montagne","in the mountains"),
  p2(11,"destinations","à la campagne","in the countryside"),
  p2(12,"destinations","en colo","at a holiday camp"),
  p2(13,"destinations","chez mes grands-parents","at my grandparents’ house"),
  p2(14,"destinations","je reste dans le Norfolk","I stay in Norfolk"),
  p2(15,"activities","je fais du camping","I do camping"),
  p2(16,"opinions-weather","c’est nul","it’s rubbish"),
  p2(17,"opinions-weather","c’est sympa","it’s nice"),
  p2(18,"opinions-weather","c’est marrant","it’s funny"),
  p2(19,"opinions-weather","c’est ennuyeux","it’s boring"),
  p2(20,"opinions-weather","c’est triste","it’s sad"),
  p2(21,"opinions-weather","ça me plaît","it pleases me"),
  p2(22,"travel-past","je suis allé.e en vacances","I went on holiday","perfect tense with être; printed gender shorthand"),
  p2(23,"travel-past","on est allé en Espagne","we went to Spain","perfect tense; on takes a singular verb"),
  p2(24,"travel-past","j’ai pris l’avion","I took the plane","perfect tense with avoir"),
  p2(25,"travel-past","on a voyagé en voiture","we travelled by car","perfect tense with avoir"),
  p2(26,"travel-past","nous avons voyagé en train","we travelled by train","perfect tense with avoir"),
  p2(27,"activities","j’ai joué au tennis","I played tennis","perfect tense"),
  p2(28,"activities","j’ai mangé des glaces","I ate ice creams","perfect tense"),
  p2(29,"activities","j’ai retrouvé mes amis","I met my friends","perfect tense","Printed meaning retained; ‘met up with/saw my friends again’ may be more precise."),
  p2(30,"activities","j’ai acheté des baskets","I bought trainers","perfect tense"),
  p2(31,"activities","j’ai écouté de la musique","I listened to music","perfect tense"),
  p2(32,"activities","j’ai nagé dans la mer","I swam in the sea","perfect tense"),
  p2(33,"activities","j’ai visité un parc d’attraction","I visited a theme park","perfect tense"),
  p2(34,"activities","j’ai regardé des clips vidéos","I watched video clips","perfect tense"),
  p2(35,"activities","j’ai bu un coca au café","I drank a Coke in the cafe","perfect tense"),
  p2(36,"activities","j’ai pris beaucoup de photos","I took a lot of photos","perfect tense"),
  p2(37,"activities","j’ai vu un spectacle","I saw a show","perfect tense"),
  p2(38,"activities","j’ai fait une balade en bateau","I did a boat trip","perfect tense"),
  p2(39,"activities","j’ai traîné à la maison","I hung out at home","perfect tense"),
  p2(40,"opinions-weather","il faisait beau","it was good weather","imperfect tense"),
  p2(41,"opinions-weather","il faisait chaud","it was hot","imperfect tense"),
  p2(42,"opinions-weather","il faisait froid","it was cold","imperfect tense"),
  p2(43,"opinions-weather","il faisait mauvais","it was bad weather","imperfect tense"),
  p2(44,"opinions-weather","c’était intéressant","it was interesting","imperfect tense"),
  p2(45,"opinions-weather","c’était génial","it was great","imperfect tense"),
  p2(46,"opinions-weather","c’était fantastique","it was fantastic","imperfect tense"),
  p2(47,"opinions-weather","ce n’était pas mal","it was not bad","imperfect tense; negative"),
  p2(48,"opinions-weather","quel désastre !","what a disaster!"),

  p3("Top 10 opinions",1,"universal-opinions","j’aime (beaucoup)","I like (a lot)"),
  p3("Top 10 opinions",2,"universal-opinions","je n’aime pas","I don’t like"),
  p3("Top 10 opinions",3,"universal-opinions","je déteste","I hate"),
  p3("Top 10 opinions",4,"universal-opinions","je préfère","I prefer"),
  p3("Top 10 opinions",5,"universal-opinions","ça m’ennuie de","I get bored by"),
  p3("Top 10 opinions",6,"universal-opinions","j’ai horreur de","I loathe/despise"),
  p3("Top 10 opinions",7,"universal-opinions","ça me plaît","it pleases me"),
  p3("Top 10 opinions",8,"universal-opinions","c’est","I would like",undefined,"Possible source mismatch: ‘I would like’ is normally ‘j’aimerais’. Printed form retained pending approval."),
  p3("Top 10 opinions",9,"universal-opinions","c’était","I think that",undefined,"Possible source mismatch: ‘I think that’ is normally ‘je pense que’. Printed form retained pending approval."),
  p3("Top 10 opinions",10,"universal-opinions","ce sera","In my opinion",undefined,"Possible source mismatch: ‘In my opinion’ is normally ‘à mon avis’. Printed form retained pending approval."),
  p3("Top 10 connectives",1,"connectives-time","et","and"),
  p3("Top 10 connectives",2,"connectives-time","mais","but"),
  p3("Top 10 connectives",3,"connectives-time","tandis que","whereas"),
  p3("Top 10 connectives",4,"connectives-time","car / parce que","because"),
  p3("Top 10 connectives",5,"connectives-time","cependant","however"),
  p3("Top 10 connectives",6,"connectives-time","si","if"),
  p3("Top 10 connectives",7,"connectives-time","quand","when"),
  p3("Top 10 connectives",8,"connectives-time","bien que / même si","although/even if"),
  p3("Top 10 connectives",9,"connectives-time","où","then",undefined,"Possible source mismatch: où normally means ‘where’. Printed meaning retained pending approval."),
  p3("Top 10 connectives",10,"connectives-time","néanmoins","nevertheless"),
  p3("Top 10 time phrases",1,"connectives-time","hier","yesterday"),
  p3("Top 10 time phrases",2,"connectives-time","l’année dernière","last year"),
  p3("Top 10 time phrases",3,"connectives-time","la semaine dernière","last week"),
  p3("Top 10 time phrases",4,"connectives-time","quand j’étais petit.e","when I was little(f)","printed gender shorthand"),
  p3("Top 10 time phrases",5,"connectives-time","quelquefois","sometimes"),
  p3("Top 10 time phrases",6,"connectives-time","d’habitude","usually"),
  p3("Top 10 time phrases",7,"connectives-time","demain","tomorrow"),
  p3("Top 10 time phrases",8,"connectives-time","l’année prochaine","next year"),
  p3("Top 10 time phrases",9,"connectives-time","la semaine prochaine","next week"),
  p3("Top 10 time phrases",10,"connectives-time","quand je serai grand.e","when I’m bigger(f)","printed gender shorthand","Likely means ‘when I am older/grown up’. Printed meaning retained pending approval."),
  p3("Top 10 être/avoir",1,"core-verbs","j’ai","I have"),
  p3("Top 10 être/avoir",2,"core-verbs","je n’ai pas (de)","I don’t have (any)"),
  p3("Top 10 être/avoir",3,"core-verbs","nous (n’) avons (pas de)","We (don’t) have (any)"),
  p3("Top 10 être/avoir",4,"core-verbs","je suis","I am"),
  p3("Top 10 être/avoir",5,"core-verbs","je ne suis pas","I am not"),
  p3("Top 10 être/avoir",6,"core-verbs","nous (ne) sommes (pas)","We are (not)"),
  p3("Top 10 être/avoir",7,"core-verbs","j’avais / j’ai eu","I had / I have had"),
  p3("Top 10 être/avoir",8,"core-verbs","j’aurai","I will have"),
  p3("Top 10 être/avoir",9,"core-verbs","j’étais / j’ai été","I was / I have been"),
  p3("Top 10 être/avoir",10,"core-verbs","je serai","I will have",undefined,"Possible source mismatch: je serai normally means ‘I will be’. Printed meaning retained pending approval."),
  p3("Top 10 perfect tense",1,"core-verbs","j’ai regardé","I(’ve) watched","perfect tense"),
  p3("Top 10 perfect tense",2,"core-verbs","je n’ai pas mangé","I did not eat","perfect tense; negative"),
  p3("Top 10 perfect tense",3,"core-verbs","j’ai perdu","I(’ve) lost","perfect tense"),
  p3("Top 10 perfect tense",4,"core-verbs","j’ai fini","I(’ve) finished","perfect tense"),
  p3("Top 10 perfect tense",5,"core-verbs","j’ai vu","I(’ve) saw(seen)","perfect tense","Printed English mixes simple past and past participle."),
  p3("Top 10 perfect tense",6,"core-verbs","j’ai bu","I(’ve) drank (drunk)","perfect tense","Printed English mixes simple past and past participle."),
  p3("Top 10 perfect tense",7,"core-verbs","j’ai fait","I(’ve) did(done)","perfect tense","Printed English mixes simple past and past participle."),
  p3("Top 10 perfect tense",8,"core-verbs","j’ai pris","I(’ve) took (taken)","perfect tense","Printed English mixes simple past and past participle."),
  p3("Top 10 perfect tense",9,"core-verbs","nous avons regardé","we(’ve) watched","perfect tense"),
  p3("Top 10 perfect tense",10,"core-verbs","nous n’avons pas regardé","we haven’t watched","perfect tense; negative"),
  p3("Top ten adjectives",1,"adjectives","intéressant.e","interesting (m.f)","source shorthand: intéressant/intéressante"),
  p3("Top ten adjectives",2,"adjectives","ennuyeux(-euse) / barbant.e","boring (m[f])","source shorthand: ennuyeux/ennuyeuse and barbant/barbante"),
  p3("Top ten adjectives",3,"adjectives","amusant.e.s / drôle.s","fun (m.pl / f.pl)","source shorthand; expand all intended forms"),
  p3("Top ten adjectives",4,"adjectives","marrant.e.s / rigolo.te.s","funny (m.pl / f.pl)","source shorthand; expand all intended forms"),
  p3("Top ten adjectives",5,"adjectives","affreux / affreuse","horrendous","masculine/feminine"),
  p3("Top ten adjectives",6,"adjectives","épouvantable","terrible"),
  p3("Top ten adjectives",7,"adjectives","sympa","nice/kind"),
  p3("Top ten adjectives",8,"adjectives","facile / difficile","easy / difficult"),
  p3("Top ten adjectives",9,"adjectives","nouveau.x / nouvelle.s","new (m.pl / f.pl)","source shorthand: nouveau/nouveaux/nouvelle/nouvelles"),
  p3("Top ten adjectives",10,"adjectives","vieux / vieille.s","old (m+pl / f.pl)","source shorthand; expand intended masculine and feminine forms"),
  p3("Top 3 future tense",1,"core-verbs","je vais aller","I am going to go","near future"),
  p3("Top 3 future tense",2,"core-verbs","on va aller","we are going to go","near future; on takes a singular verb"),
  p3("Top 3 future tense",3,"core-verbs","ça va être","it will be","near future"),
  p3("Top 3 past tense",1,"core-verbs","je suis allé.e","I went","perfect tense with être; printed gender shorthand"),
  p3("Top 3 past tense",2,"core-verbs","on est allé","we went","perfect tense; on takes a singular verb"),
  p3("Top 3 past tense",3,"core-verbs","c’était","it was","imperfect tense"),
];

const sectionMeta = [
  ["starting-points","Starting Points, Home and Holidays","Where you live, holiday duration and festivals","#2563eb"],
  ["destinations","Holiday Destinations and Accommodation","Where people stay during holidays","#0284c7"],
  ["activities","Holiday Activities","Activities completed during a holiday","#0891b2"],
  ["travel-past","Travel and Past Holiday Actions","Transport and perfect-tense travel phrases","#0d9488"],
  ["opinions-weather","Holiday Opinions, Weather and Evaluation","Descriptions, weather and reactions","#7c3aed"],
  ["connectives-time","Connectives and Time Phrases","Linking ideas and placing them in time","#9333ea"],
  ["core-verbs","French Universals: Core Verbs and Tenses","Être, avoir, perfect, past and future forms","#c026d3"],
  ["universal-opinions","French Universals: Opinions","Reusable opinion phrases","#db2777"],
  ["adjectives","French Universals: Adjectives","Gender and number forms","#ea580c"],
] as const;

function sourceRef(item: FrenchSourceItem) {
  return `Year French KO.pdf p.${item.page} · ${item.group} · item ${item.number}`;
}

function pronunciationText(item: FrenchSourceItem) {
  const replacements: Record<string,string> = {
    "je suis allé.e en vacances":"je suis allé en vacances",
    "quand j’étais petit.e":"quand j’étais petit",
    "quand je serai grand.e":"quand je serai grand",
    "intéressant.e":"intéressant",
    "ennuyeux(-euse) / barbant.e":"ennuyeux",
    "amusant.e.s / drôle.s":"amusant",
    "marrant.e.s / rigolo.te.s":"marrant",
    "nouveau.x / nouvelle.s":"nouveau",
    "vieux / vieille.s":"vieux",
    "je suis allé.e":"je suis allé",
    "car / parce que":"parce que",
    "bien que / même si":"même si",
    "j’avais / j’ai eu":"j’ai eu",
    "j’étais / j’ai été":"j’ai été",
    "facile / difficile":"facile",
    "nous (n’) avons (pas de)":"nous avons",
    "nous (ne) sommes (pas)":"nous sommes",
    "je n’ai pas (de)":"je n’ai pas",
  };
  return (replacements[item.french] ?? item.french).replaceAll("...", "").replaceAll("(beaucoup)", "beaucoup").trim();
}

const sections = sectionMeta.map(([id,title,context,colour]) => {
  const items = year8FrenchHolidaysAndUniversalsSourceItems.filter(item => item.sectionId === id);
  return {
    id,title,context,colour,
    summary:`Learn ${items.length} French forms from the school Knowledge Organiser. Printed French and English are retained, with suspected source issues clearly audited.`,
    keyFacts:items.map(item => `${item.french} — ${item.english}${item.grammar ? ` (${item.grammar})` : ""}`),
    keyTerms:items.map(item => item.french),
    sourceType:"knowledgeOrganiser" as const,
    sourceRef:items.map(sourceRef).join("; "),
  };
});

const flashcards = year8FrenchHolidaysAndUniversalsSourceItems.map(item => ({
  id:`${item.id}-fc`,sectionId:item.sectionId,
  front:`${item.group} item ${item.number}: How do you say “${item.english}” in French?`,
  back:`${item.french} — ${item.english}${item.grammar ? ` · ${item.grammar}` : ""}`,
  audioText:pronunciationText(item),sourceType:"knowledgeOrganiser" as const,sourceRef:sourceRef(item),
}));

function distractors(item: FrenchSourceItem) {
  const pool = year8FrenchHolidaysAndUniversalsSourceItems
    .filter(candidate => candidate.sectionId === item.sectionId && candidate.french !== item.french)
    .map(candidate => candidate.french);
  const result = [item.french,...Array.from(new Set(pool)).slice(0,3)];
  if (result.length < 4) {
    result.push(...year8FrenchHolidaysAndUniversalsSourceItems.filter(candidate => candidate.french !== item.french && !result.includes(candidate.french)).map(candidate => candidate.french).slice(0,4-result.length));
  }
  return result;
}

const coverageQuestions: KnowledgeQuestion[] = year8FrenchHolidaysAndUniversalsSourceItems.map(item => ({
  id:`${item.id}-mcq`,type:"multiple-choice",sectionIds:[item.sectionId],marks:1,
  prompt:`${item.group} item ${item.number}: Which French form matches “${item.english}”?`,
  options:distractors(item),answer:item.french,
  explanation:`${item.french} means “${item.english}”.${item.grammar ? ` ${item.grammar}.` : ""}`,
  sourceType:"knowledgeOrganiser",sourceRef:sourceRef(item),
}));

const extendedQuestions: KnowledgeQuestion[] = [
  {id:"fr-int-match-destinations",type:"short-answer",format:"matching",sectionIds:["destinations"],prompt:"Match each French holiday destination to its English meaning.",marks:4,markingPoints:["au bord de la mer = next to the sea","à la montagne = in the mountains","à la campagne = in the countryside","en colo = at a holiday camp"],guidance:"Match all four accurately.",interaction:{kind:"matching",left:["au bord de la mer","à la montagne","à la campagne","en colo"],right:["next to the sea","in the mountains","in the countryside","at a holiday camp"],answers:[0,1,2,3]},sourceType:"knowledgeOrganiser",sourceRef:"Year French KO.pdf p.2 items 9-12"},
  {id:"fr-int-fill-travel",type:"short-answer",format:"fill-in-the-blank",sectionIds:["travel-past"],prompt:"Complete the perfect-tense travel phrases.",marks:3,markingPoints:["j’ai pris l’avion","on a voyagé en voiture","nous avons voyagé en train"],guidance:"Use the exact auxiliary and past participle.",interaction:{kind:"fill-blanks",sentences:["j’ai _____ l’avion","on a _____ en voiture","nous avons _____ en train"],answers:[["pris"],["voyagé"],["voyagé"]],wordBank:["pris","voyagé"]},sourceType:"knowledgeOrganiser",sourceRef:"Year French KO.pdf p.2 items 24-26"},
  {id:"fr-int-order-holiday",type:"short-answer",format:"ordering",sectionIds:["travel-past"],prompt:"Put the chunks in order to say ‘We travelled by train’.",marks:1,markingPoints:["nous avons voyagé en train"],guidance:"Keep the French perfect-tense word order.",interaction:{kind:"ordering",items:["en train","voyagé","nous avons"],answer:["nous avons","voyagé","en train"]},sourceType:"knowledgeOrganiser",sourceRef:"Year French KO.pdf p.2 item 26"},
  {id:"fr-int-class-time",type:"short-answer",format:"classification",sectionIds:["connectives-time","core-verbs"],prompt:"Classify each phrase as past, present or future.",marks:6,markingPoints:["hier: past","d’habitude: present","demain: future","j’ai regardé: past","je suis: present","je vais aller: future"],guidance:"Use the time marker or verb form.",interaction:{kind:"classification",rows:["hier","d’habitude","demain","j’ai regardé","je suis","je vais aller"],categories:["past","present","future"],answers:["past","present","future","past","present","future"]},sourceType:"knowledgeOrganiser",sourceRef:"Year French KO.pdf p.3 time phrases, être/avoir and tense forms"},
  {id:"fr-long-past-holiday",type:"long-answer",sectionIds:["destinations","activities","travel-past","opinions-weather","connectives-time"],prompt:"Write a short French paragraph about a past holiday. Include a destination, transport, two activities, weather, an opinion and a connective.",marks:6,markingPoints:["Uses a KO holiday destination.","Uses a KO transport phrase.","Uses two accurate past activity phrases.","Uses a KO weather phrase.","Uses a KO opinion/evaluation.","Uses a KO connective accurately."],guidance:"Use only language from the taught KO sections and check auxiliaries, accents and agreement.",sourceType:"generatedSupplement",sourceRef:"Generated practice mapped to Year French KO.pdf p.2 and p.3 taught content"},
  {id:"fr-long-time-frames",type:"long-answer",sectionIds:["core-verbs","connectives-time","universal-opinions"],prompt:"Write a short French paragraph using a past time phrase, a present opinion and a future plan.",marks:5,markingPoints:["Uses a KO past time phrase.","Uses an accurate past-tense form.","Uses a KO present opinion phrase.","Uses an accurate future form.","Links ideas clearly with a KO connective."],guidance:"Make all three time frames clear.",sourceType:"generatedSupplement",sourceRef:"Generated practice mapped to Year French KO.pdf p.3 French Universals"},
];

export const year8FrenchHolidaysAndUniversals: KnowledgeOrganiser = {
  id:"year8-french-holidays-and-universals",year:8,subject:"French",term:"Autumn",chapter:1,
  title:"Holidays and French Universals",
  introduction:"Build confident French for holidays, travel, past activities, weather, opinions and future plans using the complete Autumn 2026 Knowledge Organiser.",
  sections,flashcards,questions:[...coverageQuestions,...extendedQuestions],
  pronunciationItems:year8FrenchHolidaysAndUniversalsSourceItems.map(item => ({id:item.id,sectionId:item.sectionId,text:pronunciationText(item),english:item.english,locale:"fr-FR",sourceRef:sourceRef(item)})),
};

export function getFrenchPronunciationTarget(id: string) {
  return year8FrenchHolidaysAndUniversals.pronunciationItems?.find(item => item.id === id);
}
