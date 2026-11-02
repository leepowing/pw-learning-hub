/** Week 11 — Future Plans · Original GCSE-style practice; not official Pearson material. */
export const WEEK_ID=11;
export const COURSE_VERSION="stage3-week11-v1";
export const vocabulary=[
 {id:"future",traditional:"將來",jyutping:"zoeng1 loi4",english:"future",sentence:"我希望將來可以幫助更多人。",translation:"I hope I can help more people in the future."},
 {id:"career",traditional:"職業",jyutping:"zik1 jip6",english:"career / occupation",sentence:"今天學校介紹了不同的職業。",translation:"Today our school introduced different careers."},
 {id:"ideal",traditional:"理想",jyutping:"lei5 soeng2",english:"ambition / ideal",sentence:"她的理想是成為一名工程師。",translation:"Her ambition is to become an engineer."},
 {id:"plan",traditional:"計劃",jyutping:"gai3 waak6",english:"plan",sentence:"我正在制定明年的學習計劃。",translation:"I am making a study plan for next year."},
 {id:"opportunity",traditional:"機會",jyutping:"gei1 wui6",english:"opportunity / chance",sentence:"職業介紹日給學生認識工作的機會。",translation:"Careers Day gives students a chance to learn about jobs."},
 {id:"decide",traditional:"決定",jyutping:"kyut3 ding6",english:"decide / decision",sentence:"我會了解不同科目後才作決定。",translation:"I will learn about different subjects before deciding."},
 {id:"further-study",traditional:"升學",jyutping:"sing1 hok6",english:"continue education / further study",sentence:"學生可以向老師查詢升學的資料。",translation:"Students can ask teachers for information about further study."},
 {id:"university",traditional:"大學",jyutping:"daai6 hok6",english:"university",sentence:"我的姐姐希望將來入讀大學。",translation:"My older sister hopes to attend university in the future."},
 {id:"skills",traditional:"技能",jyutping:"gei6 nang4",english:"skills",sentence:"溝通和合作都是很重要的技能。",translation:"Communication and teamwork are important skills."},
 {id:"dream",traditional:"夢想",jyutping:"mung6 soeng2",english:"dream / aspiration",sentence:"每個人都可以努力追求自己的夢想。",translation:"Everyone can work towards their dreams."},
] as const;
export const reviewVocabulary=[
 {week:1,traditional:"科目",english:"school subject"},
 {week:2,traditional:"安排",english:"arrange / schedule"},
 {week:3,traditional:"興趣",english:"interest / hobby"},
 {week:4,traditional:"支持",english:"support"},
 {week:5,traditional:"選擇",english:"choose"},
 {week:9,traditional:"目標",english:"goal / target"},
] as const;
export type ChoiceQuestion={id:string;question:string;choices:readonly string[];correct:number;explanation:string};
export const readingText="上星期，嘉欣參加了學校的職業與升學介紹日。禮堂內有醫療、工程、教育和科技等不同展位。她先聽了一位工程師介紹工作，後來和朋友一起閱讀大學課程的資料。嘉欣對科技感興趣，但還未決定將來選甚麼職業。老師建議她先了解自己的興趣和技能，不必急於作決定。她計劃參加學校的科學活動，也想提高溝通能力。她認為有理想很重要，但一個好的未來計劃也應該保留改變方向的機會。";
export const readingQuestions:ChoiceQuestion[]=[
 {id:"r1",question:"Where did Ka-yan go last week?",choices:["A shopping centre","A school careers and further-study day","A railway station"],correct:1,explanation:"嘉欣參加了學校的職業與升學介紹日。"},
 {id:"r2",question:"Which professional did she listen to first?",choices:["An engineer","A chef","A pilot"],correct:0,explanation:"她先聽了一位工程師介紹工作。"},
 {id:"r3",question:"Why has she not chosen a career yet?",choices:["She dislikes every subject","She has already applied to university","She is still learning about options and her interests"],correct:2,explanation:"她仍在了解自己的興趣和不同職業。"},
 {id:"r4",question:"What is the main message?",choices:["Plans should never change","Explore options and develop skills before deciding","Only technology careers matter"],correct:1,explanation:"老師建議先了解興趣、技能，並保留調整方向的空間。"},
];
export const listeningClips=[
 {id:"careers",title:"Clip A · Careers Day",topic:"職業介紹日"},
 {id:"subjects",title:"Clip B · Choosing subjects",topic:"選科計劃"},
 {id:"skills",title:"Clip C · Future skills",topic:"未來技能"},
] as const;
export const listeningQuestions:Array<ChoiceQuestion&{clipId:string}>=[
 {id:"l1",clipId:"careers",question:"When is the careers event?",choices:["Friday afternoon","Monday morning","Sunday evening"],correct:0,explanation:"職業介紹日喺星期五下晝。"},
 {id:"l2",clipId:"careers",question:"Where is the event?",choices:["In the sports field","In the school hall","At a museum"],correct:1,explanation:"活動喺學校禮堂舉行。"},
 {id:"l3",clipId:"subjects",question:"Which subject is the student interested in?",choices:["Music","History","Science"],correct:2,explanation:"講者話對科學好有興趣。"},
 {id:"l4",clipId:"subjects",question:"Who will the student speak to before deciding?",choices:["A teacher","A shop assistant","A driver"],correct:0,explanation:"決定之前會問老師意見。"},
 {id:"l5",clipId:"skills",question:"Which two skills are mentioned?",choices:["Swimming and drawing","Communication and teamwork","Cooking and gardening"],correct:1,explanation:"講者提到溝通同合作技能。"},
 {id:"l6",clipId:"skills",question:"What does the speaker suggest?",choices:["Giving up all activities","Choosing a job immediately","Joining school activities to practise skills"],correct:2,explanation:"可以參加學校活動去練習。"},
];
export const translationTasks=[
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"I plan to learn new skills before deciding on my future career.",sample:"我計劃先學習新技能，然後才決定將來的職業。",note:"Accept equivalent Traditional Chinese for planning, learning skills, and deciding on a future career."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"參加學校的職業介紹日，可以讓我們認識不同的機會。",sample:"Attending the school's careers day can help us learn about different opportunities.",note:"Accept natural English preserving attending Careers Day and learning about different opportunities."},
] as const;
export const speakingPrompts=[
 {id:"role",label:"Role play",english:"At a school careers event, ask a teacher about ONE further-study opportunity and explain ONE subject you like. Answer in Cantonese.",sample:"老師，我想了解下將來有咩升學機會。我比較鍾意科學，想知道可以點樣準備。"},
 {id:"picture",label:"Picture-based practice",english:"Look at the Future Plans illustration. Describe TWO visible details and give ONE opinion about exploring different career options in Cantonese.",sample:"我見到學校禮堂有幾個介紹唔同職業嘅展位。前面有兩個學生，其中一個攞住未來計劃嘅資料冊。我覺得參觀唔同展位可以幫我哋了解將來嘅選擇。"},
 {id:"conversation",label:"Conversation",english:"Describe ONE career or further-study option that interests you, TWO steps you could take to prepare, and ONE reason for your choice. Answer in Cantonese.",sample:"我對工程有興趣。將來我可以努力學數學，同埋參加學校嘅科學活動。我想試下呢個方向，因為我鍾意解決問題。"},
] as const;
export const pictureVisibleFacts=[
 "A school-hall style exhibition has a banner reading Careers and Future Plans Day",
 "Several students in school uniforms are walking or talking near exhibition booths",
 "Four booth signs refer to healthcare, engineering, education and technology",
 "In the foreground a girl holds a Future Plans brochure while speaking with a boy",
 "At the healthcare booth an adult wearing a white coat holds an information sheet",
 "Display tables contain brochures and posters about different subjects and careers"
] as const;
export const pictureNotSupported=[
 "Do not assert what career either foreground student will eventually choose",
 "Do not infer exam results, family income, admission offers or private life details",
 "Do not claim that anyone has applied for a specific university or job",
 "Do not require reading tiny text within brochures or posters",
 "The illustration alone cannot establish students' personal feelings or ambitions"
] as const;
export const pictureGrading=`Week 11 Future Plans. VISIBLE FACTS: ${pictureVisibleFacts.join("; ")}. NOT SUPPORTED: ${pictureNotSupported.join("; ")}. Picture response requires TWO accurate visible observations and ONE personal opinion about exploring career options in Cantonese. Accept alternative correct details such as school uniforms, a brochure, teacher or professional advisers, different exhibition booths, signs for healthcare/engineering/education/technology, and multiple students discussing careers. Do not infer career outcomes or mind-read the characters; the personal opinion need not be depicted. Mark content 0–4, Cantonese language 0–4, clarity 0–2. Allow natural alternative wording and Azure recognition uncertainty; Daddy can review. This is educational feedback, not an official GCSE score.`;
export const writingTask={title:"Future Plans — handwriting task",instruction:"Write 4–6 sentences in Traditional Chinese about your future plans. You may invent a fictional plan rather than share personal details.",requirements:["Describe one career or further-study option that interests you.","Explain two practical steps you could take to prepare.","Give one reason for your choice and mention how your plan might change."],guidance:"Write independently on paper, then upload a clear photo for provisional AI feedback and Daddy's final review. Original GCSE-style practice, not an official examination question."} as const;
export const worksheetReferences=["Original GCSE Chinese 1CN0-style skill practice; no official questions reproduced.","Traditional Chinese writing and Cantonese listening/speaking about future education and careers."];
export const SECTIONS=["Vocabulary & Reading","Listening & Speaking","Recall & Translation","Handwriting & Feedback"] as const;
export type ProgressState={vocabSeen:string[];reading:Record<string,number>;listening:Record<string,number>;readingSubmitted:string[];listeningSubmitted:string[];dictation:Record<string,"correct"|"review">;translationChecked:string[];speakingPractised:string[];sessionsCompleted:number[]};
export const emptyProgress=():ProgressState=>({vocabSeen:[],reading:{},listening:{},readingSubmitted:[],listeningSubmitted:[],dictation:{},translationChecked:[],speakingPractised:[],sessionsCompleted:[]});
export const correctness=(answers:Record<string,number>,questions:readonly ChoiceQuestion[])=>questions.filter(q=>Object.prototype.hasOwnProperty.call(answers,q.id)&&answers[q.id]===q.correct).length;
