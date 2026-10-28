/**
 * PW Learning Hub — Stage 3 Week 1. Original practice content.
 * Skill framework: Pearson Edexcel GCSE Chinese (1CN0), all four papers.
 * Not Pearson examination questions or an official mark scheme.
 */
export const WEEK_ID = 1;
export const COURSE_VERSION = "stage3-week1-v1";

export const vocabulary = [
  { id: "school", traditional: "學校", jyutping: "hok6 haau6", english: "school", sentence: "我在英國的學校讀書。", translation: "I study at a school in the UK." },
  { id: "subject", traditional: "科目", jyutping: "fo1 muk6", english: "school subject", sentence: "我最喜歡的科目是科學。", translation: "My favourite subject is science." },
  { id: "homework", traditional: "功課", jyutping: "gung1 fo3", english: "homework", sentence: "放學後，我會先完成中文功課。", translation: "After school, I finish my Chinese homework first." },
  { id: "classroom", traditional: "課室", jyutping: "fo3 sat1", english: "classroom", sentence: "我們的課室有很多書。", translation: "There are many books in our classroom." },
  { id: "result", traditional: "成績", jyutping: "sing4 zik1", english: "grades / results", sentence: "我希望今年的成績有所進步。", translation: "I hope my results improve this year." },
  { id: "improve", traditional: "改善", jyutping: "gaai2 sin6", english: "to improve", sentence: "每天練習可以改善我的中文寫作。", translation: "Daily practice can improve my Chinese writing." },
  { id: "effort", traditional: "努力", jyutping: "nou5 lik6", english: "to work hard / effort", sentence: "雖然寫字不容易，但是我會努力。", translation: "Although writing is not easy, I will work hard." },
  { id: "join", traditional: "參加", jyutping: "caam1 gaa1", english: "to join / participate", sentence: "下個學期我想參加學校的音樂會。", translation: "Next term I want to take part in the school concert." },
] as const;

export type ChoiceQuestion = {
  id: string;
  question: string;
  choices: readonly string[];
  correct: number;
  explanation: string;
};

export const readingText = `欣怡今年讀中二。她最喜歡的科目是科學，因為老師經常讓學生做實驗。她以前覺得中文寫作很困難：看文章時，她通常明白意思，但真正寫字時卻常常想不起正確的詞語。最近，她每天花十分鐘練習寫八個詞語，希望改善自己的中文成績。下學期，她還計劃參加學校的閱讀活動。`;

export const readingQuestions: ChoiceQuestion[] = [
  { id: "r1", question: "What is Yan-yee's favourite subject?", choices: ["History", "Science", "Art"], correct: 1, explanation: "「她最喜歡的科目是科學」means her favourite subject is science." },
  { id: "r2", question: "Why does she find Chinese writing difficult?", choices: ["She forgets how to write the right words", "She does not understand spoken Chinese", "She dislikes her teacher"], correct: 0, explanation: "She understands texts but cannot always recall the correct written words." },
  { id: "r3", question: "How long does she practise each day?", choices: ["Eight minutes", "Ten minutes", "Thirty minutes"], correct: 1, explanation: "「每天花十分鐘」means ten minutes each day." },
  { id: "r4", question: "What does she plan to join next term?", choices: ["A sports competition", "A school concert", "A reading activity"], correct: 2, explanation: "「參加學校的閱讀活動」is to join a school reading activity." },
];

export const listeningClips = [
  { id: "science", title: "Clip A · Favourite subjects", topic: "學校科目" },
  { id: "homework", title: "Clip B · After school", topic: "放學活動" },
  { id: "practice", title: "Clip C · Improving writing", topic: "學習計劃" },
] as const;

export const listeningQuestions: Array<ChoiceQuestion & { clipId: string }> = [
  { id: "l1", clipId: "science", question: "Which subject does the speaker enjoy most?", choices: ["Science", "Maths", "English"], correct: 0, explanation: "The speaker says 「我最鍾意科學」." },
  { id: "l2", clipId: "science", question: "What does the speaker enjoy doing on Thursdays?", choices: ["Reading novels", "Doing experiments", "Playing basketball"], correct: 1, explanation: "The science lesson includes experiments on Thursdays." },
  { id: "l3", clipId: "homework", question: "Where will the speaker go after school?", choices: ["The library", "The sports hall", "The shopping centre"], correct: 0, explanation: "The speaker plans to stay in the library to do homework." },
  { id: "l4", clipId: "homework", question: "Which lesson comes second?", choices: ["English", "Chinese", "Maths"], correct: 2, explanation: "「第二堂係數學」means the second lesson is maths." },
  { id: "l5", clipId: "practice", question: "Why did the speaker find Chinese writing difficult?", choices: ["They forgot how to write characters", "They could not understand any words", "The lessons were too short"], correct: 0, explanation: "The speaker often forgot how to write Chinese characters." },
  { id: "l6", clipId: "practice", question: "How long will they practise every day?", choices: ["Five minutes", "Ten minutes", "An hour"], correct: 1, explanation: "「每日練習十分鐘」means ten minutes of practice every day." },
];

export const translationTasks = [
  {id:"tr1", direction:"English → Traditional Chinese", prompt:"I want to improve my Chinese results.", sample:"我想改善我的中文成績。", note:"Use 改善 (improve) and 成績 (results). Other accurate natural translations are acceptable."},
  {id:"tr2", direction:"Traditional Chinese → English", prompt:"雖然功課不容易，但是我會努力完成。", sample:"Although the homework is not easy, I will work hard to finish it.", note:"Translate the full meaning and contrast; exact English wording may vary."},
] as const;

export const speakingPrompts = [
  {id:"role", label:"Role play", english:"A teacher asks which subject you like and why. Give a full answer in Cantonese.", sample:"我最鍾意科學，因為可以做實驗。"},
  {id:"picture", label:"Picture-based practice", english:"Look at the original classroom illustration. Say two things you can see and give one opinion in Cantonese.", sample:"我見到兩個同學同好多書。我覺得個課室好整齊。"},
  {id:"conversation", label:"Conversation", english:"Describe one thing that you want to improve at school next term, and explain why.", sample:"下學期我想改善中文寫作，因為有時我唔記得啲字點寫。"},
] as const;

export const writingTask = {
  title: "My school morning — short original writing task",
  instruction: "Your school is collecting ideas about making the start of the school day better. Write 3–4 complete sentences in Traditional Chinese.",
  requirements: [
    "Say which school subject you enjoy.",
    "Describe what you usually do before or after lessons.",
    "Suggest one improvement and give a reason.",
  ],
  guidance: "Try to use at least three of the Week 1 words. Write by hand without Chinese input suggestions or a dictionary. This is early-stage preparation, not a full Higher Tier paper.",
} as const;

export const worksheetReferences = [
  "Pearson Edexcel GCSE Chinese (1CN0), specification, Listening/Speaking/Reading/Writing assessment objectives and themes",
  "Pearson Edexcel past papers 2019, 2022, 2023 and 2024: skills and task patterns only — all questions here are original",
];

export const SECTIONS = ["Vocabulary & Reading", "Listening & Speaking", "Recall & Translation", "Handwriting & Feedback"] as const;

export type ProgressState = {
  vocabSeen: string[];
  reading: Record<string, number>;
  listening: Record<string, number>;
  dictation: Record<string, "correct" | "review">;
  translationChecked: string[];
  speakingPractised: string[];
  sessionsCompleted: number[];
};

export const emptyProgress = (): ProgressState => ({
  vocabSeen: [], reading: {}, listening: {}, dictation: {},
  translationChecked: [], speakingPractised: [], sessionsCompleted: [],
});

export const correctness = (answers: Record<string, number>, questions: readonly ChoiceQuestion[]) =>
  questions.filter(q => Object.prototype.hasOwnProperty.call(answers, q.id) && answers[q.id] === q.correct).length;
