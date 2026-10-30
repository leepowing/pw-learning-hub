/**
 * PW Learning Hub — Stage 3 Week 2. Original practice content.
 * Skill framework: Pearson Edexcel GCSE Chinese (1CN0), all four papers.
 * Not Pearson examination questions or an official mark scheme.
 */
export const WEEK_ID = 2;
export const COURSE_VERSION = "stage3-week2-v1";

export const vocabulary = [
  { id: "habit", traditional: "習慣", jyutping: "zaap6 gwaan3", english: "habit", sentence: "我有早睡早起的習慣。", translation: "I have a habit of going to bed and getting up early." },
  { id: "arrange", traditional: "安排", jyutping: "on1 paai4", english: "arrange / schedule", sentence: "我會安排時間做功課。", translation: "I arrange time to do my homework." },
  { id: "prepare", traditional: "準備", jyutping: "zeon2 bei6", english: "prepare", sentence: "每天晚上，我會準備第二天要用的書。", translation: "Every evening I prepare the books I need for the next day." },
  { id: "finish", traditional: "完成", jyutping: "jyun4 sing4", english: "finish / complete", sentence: "我吃晚飯前已經完成功課。", translation: "I finish my homework before dinner." },
  { id: "usually", traditional: "通常", jyutping: "tung1 soeng4", english: "usually", sentence: "我通常七點起床。", translation: "I usually get up at seven." },
  { id: "getup", traditional: "起床", jyutping: "hei2 cong4", english: "get up", sentence: "星期六我不用太早起床。", translation: "I do not need to get up too early on Saturday." },
  { id: "afterwards", traditional: "之後", jyutping: "zi1 hau6", english: "afterwards / after", sentence: "做完運動之後，我會洗澡。", translation: "After exercising, I take a shower." },
  { id: "important", traditional: "重要", jyutping: "zung6 jiu3", english: "important", sentence: "有充足睡眠對健康很重要。", translation: "Getting enough sleep is important for health." },
] as const;

export type ChoiceQuestion = {
  id: string;
  question: string;
  choices: readonly string[];
  correct: number;
  explanation: string;
};

export const readingText = `家明今年讀中二。平日他通常早上七點起床，吃完早餐才去學校。他習慣在前一晚準備好書包，因此很少忘記帶課本。放學後，他先做運動，之後才完成功課。上星期，他因為玩手機太久而遲睡，第二天上課感到很累。從那天開始，他決定每天安排時間休息，因為充足睡眠對學習很重要。`;

export const readingQuestions: ChoiceQuestion[] = [
 {id:"r1",question:"What time does Ka-ming usually get up?",choices:["Six o'clock","Seven o'clock","Eight o'clock"],correct:1,explanation:"「通常早上七點起床」表示他通常七點起床。"},
 {id:"r2",question:"Why does he rarely forget his textbooks?",choices:["His teacher reminds him","He prepares his bag the night before","He keeps every book at school"],correct:1,explanation:"「在前一晚準備好書包」是原因。"},
 {id:"r3",question:"What does he do before finishing homework?",choices:["Exercise","Watch television","Take a nap"],correct:0,explanation:"「先做運動，之後才完成功課」顯示先運動。"},
 {id:"r4",question:"What did he learn after feeling tired in class?",choices:["He should avoid all sports","He needs to organise rest time","He must stop going to school"],correct:1,explanation:"他決定每天安排休息時間，認為充足睡眠很重要。"},
];

export const listeningClips = [
 {id:"morning",title:"Clip A · Morning routine",topic:"早上習慣"},
 {id:"evening",title:"Clip B · Evening arrangements",topic:"晚上安排"},
 {id:"weekend",title:"Clip C · Weekend plans",topic:"週末計劃"},
] as const;

export const listeningQuestions: Array<ChoiceQuestion & {clipId:string}> = [
 {id:"l1",clipId:"morning",question:"When does the speaker usually get up on school days?",choices:["At seven","At half past seven","At eight"],correct:0,explanation:"音段說「平日我通常七點起身」。"},
 {id:"l2",clipId:"morning",question:"What do they prepare before leaving?",choices:["Lunch","Their school bag","Sports equipment"],correct:1,explanation:"音段說「準備好書包」。"},
 {id:"l3",clipId:"evening",question:"What does the speaker do first after dinner?",choices:["Go running","Finish homework","Call a friend"],correct:1,explanation:"音段提到「食完飯先做完功課」。"},
 {id:"l4",clipId:"evening",question:"Why is sleep important to the speaker?",choices:["It helps them concentrate","It makes them taller","It lets them miss school"],correct:0,explanation:"音段表示有足夠睡眠，上堂較容易專心。"},
 {id:"l5",clipId:"weekend",question:"What is planned for Saturday morning?",choices:["Going to the library","Visiting grandparents","Playing video games"],correct:1,explanation:"音段說「星期六朝早會去探公公婆婆」。"},
 {id:"l6",clipId:"weekend",question:"When will the speaker go swimming?",choices:["Before breakfast","After lunch","In the evening"],correct:1,explanation:"「食完午飯之後」表示午飯後。"},
];

export const translationTasks = [
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"I usually prepare my school bag before going to bed.",sample:"我通常睡覺前準備好書包。",note:"Accept natural equivalents using 通常 and 準備; the meaning of before bedtime must be retained."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"完成工作之後，我會安排時間休息。",sample:"After finishing my work, I arrange time to rest.",note:"Accept natural equivalents of 完成, 之後 and 安排."},
] as const;

export const speakingPrompts = [
 {id:"role",label:"Role play",english:"A teacher asks when you usually get up on school days and why. Answer in Cantonese.",sample:"我平日通常七點起身，因為要準備返學。"},
 {id:"picture",label:"Picture-based practice",english:"Look at the daily-routine illustration. Describe two things the student is doing and give one opinion in Cantonese.",sample:"我見到一個學生執書包同睇時鐘。我覺得早啲準備好好重要。"},
 {id:"conversation",label:"Conversation",english:"Describe how you arrange your homework and free time after school, and explain your choice.",sample:"放學之後我會先做功課，再做運動，因為咁樣比較容易安排時間。"},
] as const;

export const writingTask = {
 title:"My daily routine — short original writing task",
 instruction:"Write 3–4 complete sentences in Traditional Chinese about how you organise a school day.",
 requirements:["Describe when you usually get up and what you prepare.","Explain one activity you do after school.","Describe one improvement to your routine and explain why."],
 guidance:"Try to use at least three Week 2 words. Write independently by hand. This is GCSE preparation, not an official Higher Tier writing paper.",
} as const;

export const worksheetReferences = [
 "Pearson Edexcel GCSE Chinese (1CN0) specification: daily life, listening, speaking, reading and writing skills",
 "Original tasks designed with reference to 2019, 2022, 2023 and 2024 paper formats, not copied exam questions",
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
