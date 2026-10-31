/**
 * PW Learning Hub — Stage 3 Week 3. Original practice content.
 * Skill framework: Pearson Edexcel GCSE Chinese (1CN0), all four papers.
 * Not Pearson examination questions or an official mark scheme.
 */
export const WEEK_ID = 3;
export const COURSE_VERSION = "stage3-week3-v1";

export const vocabulary = [
  {id:"interest",traditional:"興趣",jyutping:"hing3 ceoi3",english:"interest / hobby",sentence:"我的興趣是打籃球和聽音樂。",translation:"My hobbies are playing basketball and listening to music."},
  {id:"exercise",traditional:"運動",jyutping:"wan6 dung6",english:"sport / exercise",sentence:"每星期我都會做運動。",translation:"I exercise every week."},
  {id:"basketball",traditional:"籃球",jyutping:"laam4 kau4",english:"basketball",sentence:"我和同學在學校打籃球。",translation:"I play basketball with classmates at school."},
  {id:"swim",traditional:"游泳",jyutping:"jau4 wing6",english:"swim / swimming",sentence:"星期六我通常去游泳。",translation:"I usually go swimming on Saturdays."},
  {id:"run",traditional:"跑步",jyutping:"paau2 bou6",english:"run / jogging",sentence:"爸爸喜歡早上跑步。",translation:"Dad likes to go running in the morning."},
  {id:"music",traditional:"音樂",jyutping:"jam1 ngok6",english:"music",sentence:"我做完功課之後喜歡聽音樂。",translation:"I like listening to music after finishing homework."},
  {id:"movie",traditional:"電影",jyutping:"din6 jing2",english:"film / movie",sentence:"我和家人週末看了一齣電影。",translation:"My family and I watched a movie at the weekend."},
  {id:"hiking",traditional:"行山",jyutping:"haang4 saan1",english:"hiking",sentence:"天氣好的時候，我們喜歡一起行山。",translation:"We enjoy hiking together when the weather is good."},
] as const;

export type ChoiceQuestion = {
  id: string;
  question: string;
  choices: readonly string[];
  correct: number;
  explanation: string;
};

export const readingText = `嘉欣今年讀中二，平日喜歡打籃球和聽音樂。她每星期三放學後都會跟朋友在學校運動。雖然她以前不喜歡跑步，但現在開始每天跑十分鐘，覺得身體比以前健康。上星期六她和家人一起去行山，下午回家看了一齣電影。下個月她打算參加學校的籃球活動，因為她想認識更多朋友。`;

export const readingQuestions: ChoiceQuestion[] = [
 {id:"r1",question:"Which sport does Ka-yan play with friends after school?",choices:["Basketball","Swimming","Tennis"],correct:0,explanation:"文章說她每星期三放學後跟朋友運動，前文說她喜歡打籃球。"},
 {id:"r2",question:"How long does she run every day now?",choices:["Five minutes","Ten minutes","Thirty minutes"],correct:1,explanation:"「每天跑十分鐘」即 ten minutes。"},
 {id:"r3",question:"What did her family do last Saturday?",choices:["Went hiking","Watched a football match","Went shopping"],correct:0,explanation:"「上星期六她和家人一起去行山」。"},
 {id:"r4",question:"Why does she want to join the school basketball activity?",choices:["To win money","To meet more friends","To avoid homework"],correct:1,explanation:"「因為她想認識更多朋友」說明原因。"},
];

export const listeningClips = [
 {id:"sports",title:"Clip A · After-school sport",topic:"課後運動"},
 {id:"weekend",title:"Clip B · Weekend hobbies",topic:"週末興趣"},
 {id:"plans",title:"Clip C · New club",topic:"新活動"},
] as const;

export const listeningQuestions: Array<ChoiceQuestion & {clipId:string}> = [
 {id:"l1",clipId:"sports",question:"Which sport does the speaker play after school?",choices:["Basketball","Swimming","Badminton"],correct:0,explanation:"錄音提到「放學後同朋友打籃球」。"},
 {id:"l2",clipId:"sports",question:"Why does the speaker enjoy it?",choices:["It is free","It is fun and healthy","It is compulsory"],correct:1,explanation:"錄音提到運動「好玩又健康」。"},
 {id:"l3",clipId:"weekend",question:"What does the speaker usually do on Saturday mornings?",choices:["Go running","Watch films","Play computer games"],correct:0,explanation:"錄音說「星期六朝早通常去跑步」。"},
 {id:"l4",clipId:"weekend",question:"What do they do after lunch?",choices:["Listen to music","Go to school","Play football"],correct:0,explanation:"錄音說「食完午飯就聽音樂」。"},
 {id:"l5",clipId:"plans",question:"Which club does the student plan to join?",choices:["Art club","Basketball club","Drama club"],correct:1,explanation:"錄音說「想參加學校嘅籃球學會」。"},
 {id:"l6",clipId:"plans",question:"What is the student's main reason?",choices:["To make friends","To miss lessons","To earn money"],correct:0,explanation:"「可以識多啲朋友」表示認識朋友。"},
];

export const translationTasks = [
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"I like swimming because it is fun and keeps me healthy.",sample:"我喜歡游泳，因為游泳很有趣，而且有助我保持健康。",note:"Accept natural equivalents; preserve swimming, enjoyment and health benefits."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"完成學校功課之後，我通常和朋友一起打籃球。",sample:"After finishing my school homework, I usually play basketball with my friends.",note:"Accept accurate paraphrases retaining the order and the usual basketball activity with friends."},
] as const;

export const speakingPrompts = [
 {id:"role",label:"Role play",english:"A new classmate asks what you enjoy doing in your free time and why. Answer in Cantonese.",sample:"我鍾意打籃球，因為好好玩，仲可以做運動。"},
 {id:"picture",label:"Picture-based practice",english:"Look at the picture. Describe two things you can clearly see and give one opinion about hobbies or sports in Cantonese.",sample:"我見到一個男仔攞住籃球，旁邊有個女仔戴住耳機。我覺得做運動同聽音樂都係好好嘅興趣。"},
 {id:"conversation",label:"Conversation",english:"Tell your teacher about a hobby you do regularly and one hobby you want to try in the future. Explain your reasons in Cantonese.",sample:"我平時鍾意游水，因為可以保持健康。將來我想試吓行山，因為我想親近大自然。"},
] as const;

export const pictureVisibleFacts = [
 "A boy holding a basketball outdoors near a sports court",
 "A girl wearing headphones beside him",
 "Another student reading or looking at a book nearby",
 "Trees and a sports area are visible",
] as const;
export const pictureGrading = `The sample is illustrative, not a required transcript. Accept any two accurate visible observations and one relevant opinion in natural Cantonese. Verified facts: ${pictureVisibleFacts.join('; ')}. Do not assert actions not visible. Do not penalise equivalent descriptions. Azure transcription may be mistaken: flag uncertainty for parent review. Do not claim you viewed the image.`;

export const writingTask = {
 title:"My hobbies — short original writing task",
 instruction:"Write 3–4 complete sentences in Traditional Chinese about your hobbies and sports.",
 requirements:["Describe one activity you like and how often you do it.","Explain why you enjoy it.","Describe one new activity you would like to try in the future."],
 guidance:"Use at least three Week 3 words. Write independently on paper, then upload a photo. This is an original GCSE-style bridge task, not an official paper.",
} as const;

export const worksheetReferences = [
 "Pearson Edexcel GCSE Chinese (1CN0): leisure, interests and sports; all four assessed skills",
 "Original questions informed by 2019, 2022, 2023 and 2024 paper formats; not reproduced exam material",
];

export const SECTIONS = ["Vocabulary & Reading", "Listening & Speaking", "Recall & Translation", "Handwriting & Feedback"] as const;

export type ProgressState = {
  vocabSeen: string[];
  reading: Record<string, number>;
  listening: Record<string, number>;
  readingSubmitted: string[];
  listeningSubmitted: string[];
  dictation: Record<string, "correct" | "review">;
  translationChecked: string[];
  speakingPractised: string[];
  sessionsCompleted: number[];
};

export const emptyProgress = (): ProgressState => ({
  vocabSeen: [], reading: {}, listening: {}, readingSubmitted: [], listeningSubmitted: [], dictation: {},
  translationChecked: [], speakingPractised: [], sessionsCompleted: [],
});

export const correctness = (answers: Record<string, number>, questions: readonly ChoiceQuestion[]) =>
  questions.filter(q => Object.prototype.hasOwnProperty.call(answers, q.id) && answers[q.id] === q.correct).length;
