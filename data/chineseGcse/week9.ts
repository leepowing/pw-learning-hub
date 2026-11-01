/** Week 9 — School Pressure · Original practice; not official Pearson examination material. */
export const WEEK_ID=9;
export const COURSE_VERSION="stage3-week9-v1";
export const vocabulary=[
 {id:"exam",traditional:"考試",jyutping:"haau2 si3",english:"exam / test",sentence:"下星期有一個中文考試。",translation:"There is a Chinese exam next week."},
 {id:"pressure",traditional:"壓力",jyutping:"aat3 lik6",english:"pressure / stress",sentence:"功課太多時，我有時會感到壓力。",translation:"I sometimes feel pressure when I have too much homework."},
 {id:"revise",traditional:"溫習",jyutping:"wan1 zaap6",english:"revise / revision",sentence:"我每天花半小時溫習。",translation:"I revise for half an hour every day."},
 {id:"nervous",traditional:"緊張",jyutping:"gan2 zoeng1",english:"nervous / tense",sentence:"考試前感到緊張是正常的。",translation:"It is normal to feel nervous before an exam."},
 {id:"difficulty",traditional:"困難",jyutping:"kwan3 naan4",english:"difficulty / difficult",sentence:"遇到學習困難時，我會請教老師。",translation:"I ask my teacher when I have difficulty learning."},
 {id:"solve",traditional:"解決",jyutping:"gaai2 kyut3",english:"solve / resolve",sentence:"老師教我們一步一步解決問題。",translation:"The teacher teaches us to solve problems step by step."},
 {id:"rest",traditional:"休息",jyutping:"jau1 sik1",english:"rest / take a break",sentence:"溫習一段時間後應該休息。",translation:"We should take a break after revising for a while."},
 {id:"balance",traditional:"平衡",jyutping:"ping4 hang4",english:"balance",sentence:"我們要平衡學習和休息的時間。",translation:"We need to balance study time and rest."},
 {id:"advice",traditional:"建議",jyutping:"gin3 ji5",english:"advice / suggest",sentence:"朋友給了我一個實用的建議。",translation:"My friend gave me a useful suggestion."},
 {id:"improve",traditional:"進步",jyutping:"zeon3 bou6",english:"make progress / improvement",sentence:"只要持續練習，就有機會進步。",translation:"With regular practice, we can make progress."},
] as const;
export const reviewVocabulary=[
 {week:1,traditional:"功課",english:"homework"},
 {week:2,traditional:"安排",english:"arrange / schedule"},
 {week:3,traditional:"興趣",english:"interest / hobby"},
 {week:4,traditional:"支持",english:"support"},
 {week:5,traditional:"健康",english:"health / healthy"},
 {week:8,traditional:"使用",english:"use"},
] as const;
export type ChoiceQuestion={id:string;question:string;choices:readonly string[];correct:number;explanation:string};
export const readingText="這個星期，明欣有兩個考試，還要完成一份報告。她覺得時間不夠，開始有點緊張。她的朋友建議她先把最重要的功課列出來，再每天安排一段時間溫習。明欣決定放學後先溫習中文半小時，然後做數學功課。遇到困難時，她會向老師提問，而不是一直猜答案。晚上，她也會休息和聽音樂。到了星期五，雖然還有一點壓力，她卻覺得自己的安排更清楚了。她明白學習需要努力，也要平衡休息和活動。";
export const readingQuestions:ChoiceQuestion[]=[
 {id:"r1",question:"Why does Ming-yan feel nervous?",choices:["She has exams and a report to finish","She missed a train","She lost her phone"],correct:0,explanation:"本星期有兩個考試和一份報告。"},
 {id:"r2",question:"What does her friend suggest doing first?",choices:["Stop studying altogether","List the most important homework","Buy another textbook"],correct:1,explanation:"朋友建議先列出重要功課。"},
 {id:"r3",question:"What does she do when she finds something difficult?",choices:["Ask the teacher","Copy an answer","Ignore the subject"],correct:0,explanation:"遇到困難時向老師提問。"},
 {id:"r4",question:"What lesson does she learn?",choices:["Rest is never useful","Only exam scores matter","Study and rest need balancing"],correct:2,explanation:"她明白要平衡學習、休息和活動。"},
];
export const listeningClips=[
 {id:"schedule",title:"Clip A · Revision schedule",topic:"溫習安排"},
 {id:"advice",title:"Clip B · Asking for advice",topic:"請教與建議"},
 {id:"balance",title:"Clip C · Study and rest",topic:"學習與休息"},
] as const;
export const listeningQuestions:Array<ChoiceQuestion&{clipId:string}>=[
 {id:"l1",clipId:"schedule",question:"What is the speaker preparing for?",choices:["A Chinese exam","A football match","A holiday"],correct:0,explanation:"講者準備下星期的中文考試。"},
 {id:"l2",clipId:"schedule",question:"How long does the speaker revise each evening?",choices:["Ten minutes","Thirty minutes","Two hours"],correct:1,explanation:"每日晚上溫習半小時。"},
 {id:"l3",clipId:"advice",question:"What difficulty does the student mention?",choices:["They cannot find the school","They have too much homework","They have lost a ticket"],correct:1,explanation:"講者說功課太多。"},
 {id:"l4",clipId:"advice",question:"What advice is given?",choices:["Organise tasks and ask the teacher","Stay awake all night","Never take breaks"],correct:0,explanation:"先安排功課，再請教老師。"},
 {id:"l5",clipId:"balance",question:"What does the speaker do after revising?",choices:["Go shopping","Take a short break","Start another exam"],correct:1,explanation:"溫習後休息一陣。"},
 {id:"l6",clipId:"balance",question:"Why is rest important according to the speaker?",choices:["It helps them concentrate","It replaces all revision","It guarantees full marks"],correct:0,explanation:"休息之後更容易集中精神。"},
];
export const translationTasks=[
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"I feel nervous before exams, so I make a revision plan and take regular breaks.",sample:"考試前我會感到緊張，所以我會制定溫習計劃，也會定時休息。",note:"Accept equivalent Traditional Chinese covering nervous before exams, revision plan and regular breaks."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"遇到困難時，我會向老師請教，並嘗試平衡學習和休息。",sample:"When I have difficulties, I ask my teacher for help and try to balance studying and resting.",note:"Accept natural English retaining asking the teacher and balancing study and rest."},
] as const;
export const speakingPrompts=[
 {id:"role",label:"Role play",english:"Your friend is worried about upcoming exams. In Cantonese, ask what subject is difficult and give one practical study suggestion.",sample:"你覺得邊一科比較難呀？不如每日安排半個鐘溫習，有唔明就問老師。"},
 {id:"picture",label:"Picture-based practice",english:"Look at the School Pressure illustration. Describe TWO visible details and give ONE opinion about balancing revision and rest in Cantonese.",sample:"我見到一個男學生坐喺書枱前面寫筆記，旁邊有部手提電腦。另外，一個女學生攞住張紙，望住旁邊嘅同學。我覺得溫習同休息都好重要。"},
 {id:"conversation",label:"Conversation",english:"Explain one difficulty you sometimes face at school, one way you organise revision and why taking breaks can help. Answer in Cantonese.",sample:"有時功課比較多，我會先做重要嗰啲，再安排時間溫習。我覺得休息一陣可以令自己容易集中精神。"},
] as const;
export const pictureVisibleFacts=[
 "Two teenagers are seated near a desk in a bright room",
 "A boy in a blue hoodie is writing in an open notebook",
 "A laptop, open textbooks and several notebooks are on the desk",
 "A girl in pink is holding a sheet of paper and looking toward the boy",
 "A weekly study schedule and study materials are visible in the room"
] as const;
export const pictureNotSupported=[
 "A facial expression does not prove the student is anxious or has a diagnosis",
 "No specific test result or grades are established by the image",
 "Do not insist on reading small print or schedule text in the image",
 "Do not infer their relationship or the exact content of their conversation"
] as const;
export const pictureGrading=`Week 9 School Pressure. VISIBLE FACTS: ${pictureVisibleFacts.join("; ")}. NOT SUPPORTED: ${pictureNotSupported.join("; ")}. Ask for TWO visible details and ONE personal opinion about balancing revision and rest in Cantonese. Accept accurate alternative observations such as stationery, books, open notebook, laptop, study planner, indoor room or headphones on desk. Do not require exact sample wording; do not infer anxiety from the drawing. Mark content 0–4, Cantonese language 0–4, clarity 0–2. Azure transcription is uncertain; parent review remains essential. Not an official GCSE mark.`;
export const writingTask={title:"School Pressure — original handwriting task",instruction:"Write 4–6 sentences in Traditional Chinese about preparing for school tests and managing your time.",requirements:["Mention a school subject or upcoming exam and how you feel.","Explain how you revise or solve a study difficulty.","Give one suggestion for balancing revision with rest."],guidance:"Write by hand on paper; upload a clear photo for AI feedback and Daddy review. This is original GCSE-style practice, not an official exam question."} as const;
export const worksheetReferences=["Original School Pressure questions reflect GCSE Chinese 1CN0 skill areas; not official Pearson exam questions.","Traditional Chinese writing and Cantonese listening/speaking on revision, time planning, study difficulties and rest."];
export const SECTIONS=["Vocabulary & Reading","Listening & Speaking","Recall & Translation","Handwriting & Feedback"] as const;
export type ProgressState={vocabSeen:string[];reading:Record<string,number>;listening:Record<string,number>;readingSubmitted:string[];listeningSubmitted:string[];dictation:Record<string,"correct"|"review">;translationChecked:string[];speakingPractised:string[];sessionsCompleted:number[]};
export const emptyProgress=():ProgressState=>({vocabSeen:[],reading:{},listening:{},readingSubmitted:[],listeningSubmitted:[],dictation:{},translationChecked:[],speakingPractised:[],sessionsCompleted:[]});
export const correctness=(answers:Record<string,number>,questions:readonly ChoiceQuestion[])=>questions.filter(q=>Object.prototype.hasOwnProperty.call(answers,q.id)&&answers[q.id]===q.correct).length;
