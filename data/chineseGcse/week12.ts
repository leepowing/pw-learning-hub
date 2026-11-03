/** Week 12 — GCSE Integrated Practice. Original educational material, not an official Pearson examination. */
export const WEEK_ID=12;
export const COURSE_VERSION="stage3-week12-v1";
export const vocabulary=[
 {id:"experience",traditional:"經驗",jyutping:"ging1 jim6",english:"experience",sentence:"上次參加義工活動是一次難忘的經驗。",translation:"Taking part in the volunteering activity last time was a memorable experience."},
 {id:"reason",traditional:"原因",jyutping:"jyun4 jan1",english:"reason",sentence:"我想知道她改變計劃的原因。",translation:"I want to know the reason she changed her plan."},
 {id:"for-example",traditional:"例如",jyutping:"lai6 jyu4",english:"for example",sentence:"我喜歡不同運動，例如游泳和籃球。",translation:"I like different sports, for example swimming and basketball."},
 {id:"firstly",traditional:"首先",jyutping:"sau2 sin1",english:"firstly / first",sentence:"首先，我們要安排溫習的時間。",translation:"First, we need to schedule revision time."},
 {id:"finally",traditional:"最後",jyutping:"zeoi3 hau6",english:"finally / at the end",sentence:"最後，我們一起檢查是否帶齊行李。",translation:"Finally, we check together that we have packed all our luggage."},
 {id:"compare",traditional:"比較",jyutping:"bei2 gaau3",english:"compare / relatively",sentence:"我想比較火車和巴士的價錢。",translation:"I want to compare train and bus prices."},
 {id:"at-same-time",traditional:"同時",jyutping:"tung4 si4",english:"at the same time / meanwhile",sentence:"我們要努力學習，同時也要好好休息。",translation:"We should study hard while also getting enough rest."},
 {id:"therefore",traditional:"因此",jyutping:"jan1 ci2",english:"therefore / as a result",sentence:"昨天火車停駛，因此我們改乘巴士。",translation:"The train was not running yesterday, so we took a bus instead."},
 {id:"result",traditional:"結果",jyutping:"git3 gwo2",english:"result / outcome",sentence:"這次考試的結果比上次好。",translation:"The result of this exam was better than last time."},
 {id:"change",traditional:"改變",jyutping:"goi2 bin3",english:"change",sentence:"我們可以改變生活習慣來減少浪費。",translation:"We can change our daily habits to reduce waste."},
] as const;
export const reviewVocabulary=[
 {week:1,traditional:"功課",english:"homework"},
 {week:3,traditional:"興趣",english:"interest / hobby"},
 {week:5,traditional:"健康",english:"health"},
 {week:7,traditional:"旅程",english:"journey / trip"},
 {week:10,traditional:"回收",english:"recycling"},
 {week:11,traditional:"機會",english:"opportunity"},
] as const;
export type ChoiceQuestion={id:string;question:string;choices:readonly string[];correct:number;explanation:string};
export const readingText="去年夏天，美玲和家人乘火車到另一個城市旅行。她以前通常坐汽車，但這次想比較不同交通工具的價錢和方便程度。到達後，他們先參觀博物館，然後參加社區舉辦的環保活動。美玲認識了幾位新朋友，亦學會分類回收。她覺得這次旅程非常有意思，因為她既可以放鬆，也可以學習新技能。回家後，她決定改變一些生活習慣，例如減少使用即棄塑膠。將來她希望參加更多義工活動，同時也會安排時間溫習，為考試做好準備。";
export const readingQuestions:ChoiceQuestion[]=[
 {id:"r1",question:"How did Mei-ling travel to another city last summer?",choices:["By plane","By train","By bicycle"],correct:1,explanation:"美玲和家人乘火車到另一個城市旅行。"},
 {id:"r2",question:"What did they do after visiting the museum?",choices:["Joined an environmental community activity","Went to university","Bought a new phone"],correct:0,explanation:"先參觀博物館，然後參加社區環保活動。"},
 {id:"r3",question:"Why did she find the journey meaningful?",choices:["She received an exam prize","She avoided meeting people","She relaxed and learnt new skills"],correct:2,explanation:"既可以放鬆，也可以學習新技能。"},
 {id:"r4",question:"What is her plan for the future?",choices:["Stop revising","Volunteer more while managing revision time","Travel every weekend"],correct:1,explanation:"她希望參加更多義工活動，同時安排時間溫習。"},
];
export const listeningClips=[
 {id:"school",title:"Clip A · School and hobbies",topic:"學校與興趣"},
 {id:"travel",title:"Clip B · Travel and shopping",topic:"旅行與購物"},
 {id:"community",title:"Clip C · Community and future",topic:"社區與未來"},
] as const;
export const listeningQuestions:Array<ChoiceQuestion&{clipId:string}>=[
 {id:"l1",clipId:"school",question:"Which subject does the speaker enjoy most?",choices:["History","Science","Music"],correct:1,explanation:"我最鍾意科學。"},
 {id:"l2",clipId:"school",question:"When does the speaker go swimming?",choices:["After school on Friday","Sunday morning","Saturday evening"],correct:0,explanation:"星期五放學之後會去游水。"},
 {id:"l3",clipId:"travel",question:"How will the family travel?",choices:["By plane","By car","By train"],correct:2,explanation:"我哋會搭火車去。"},
 {id:"l4",clipId:"travel",question:"Why did they choose this ticket?",choices:["It is cheaper","It is more expensive","It includes a meal"],correct:0,explanation:"呢張車票平啲。"},
 {id:"l5",clipId:"community",question:"What community activity is planned?",choices:["A concert","A park litter-pick","A sports competition"],correct:1,explanation:"星期六會喺公園執垃圾。"},
 {id:"l6",clipId:"community",question:"Why does the speaker want to join?",choices:["To buy a phone","To miss school","To protect the environment and gain experience"],correct:2,explanation:"想保護環境，同時學多啲經驗。"},
];
export const translationTasks=[
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"Last year I travelled by train, but next year I plan to volunteer in my community.",sample:"去年我乘火車旅行，但明年我計劃在社區做義工。",note:"Accept natural Traditional Chinese for a past journey and a future volunteering plan, preserving the contrast."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"首先，我們比較不同交通工具的價錢，因此最後決定乘火車。",sample:"First, we compared the prices of different forms of transport, so in the end we decided to take the train.",note:"Accept equivalently accurate tense, logical sequence and cause-and-effect."},
] as const;
export const speakingPrompts=[
 {id:"role",label:"Role play",english:"You are asking about a local school-and-community event. Ask ONE question about the activities and explain ONE reason you want to attend. Answer in Cantonese.",sample:"請問呢個社區活動有咩可以參加？我想嚟，因為可以識到新朋友，同埋學多啲嘢。"},
 {id:"picture",label:"Picture-based practice",english:"Look at the Integrated Practice illustration. Describe TWO clearly visible details, then give ONE opinion on joining school or community activities. Answer in Cantonese.",sample:"我見到兩個著校服嘅學生喺枱前面睇交流計劃嘅資料冊，旁邊仲有地球儀同書。另外，有個中國文化攤位掛住紅燈籠。我覺得參加呢類活動好有意思，因為可以認識唔同文化。"},
 {id:"conversation",label:"Conversation",english:"Describe ONE past experience, ONE activity you do now, and ONE thing you plan to do in the future. Give ONE reason. Answer in Cantonese.",sample:"上年我同屋企人去過旅行。依家我每個星期會做運動，將來我想參加義工活動，因為可以幫人同保護環境。"},
] as const;
// Picture evidence: ChatGPT ImageGen original generated on 2026-11-04; review file IMAGEGEN-EVIDENCE.md.
export const pictureVisibleFacts=[
  "An indoor international culture fair has a large International Culture Fair banner.",
  "Two students in school uniforms hold and look at an open exchange-programme brochure at a table.",
  "A globe, a stack of travel/culture books, and several brochures are on the table.",
  "A United Kingdom booth includes a London landmark display and students reading leaflets.",
  "A China booth has a red lantern and an attendant presenting food to a student.",
  "Other students are walking around or speaking with attendants at the event."
] as const;
export const pictureNotSupported=[
  "Do not assume the students' identities, relationships, nationality, exam results or future travel plans.",
  "Do not infer spoken words or personal feelings solely from facial expressions.",
  "Do not require reading small print on brochures or inferring that a purchase or booking occurred."
] as const;
export const pictureGrading=`Week 12 original picture practice, not a Pearson official score. Use only these confirmed picture facts: ${pictureVisibleFacts.join("; ")}. Unsupported assumptions: ${pictureNotSupported.join("; ")}. Award content credit for TWO accurate visible details (e.g. UK/China stalls, brochure, globe, food stall, lantern, school uniforms) and ONE clearly expressed personal opinion about joining school or community activities, ideally with a reason. Accept accurate different Cantonese wording and different combinations of visible details. Do not require verbatim sample or exact wording on small signs. Distinguish observed picture facts from plausible opinions. Correctly flag invented image actions but do not penalize harmless creative opinions. Evaluate Cantonese language at learner level. Avoid claims about pronunciation based on transcript alone.`;
export const writingTask={title:"Integrated Practice — handwriting task",instruction:"Write 4–6 sentences in Traditional Chinese about a fictional past experience, your life now, and one future plan.",requirements:["Describe a past experience and its result.","Compare two choices or explain one reason using a suitable connector.","Explain a future plan and one change you would like to make."],guidance:"Use pen and paper, then upload a photo for provisional AI feedback and Daddy's final review. This is original integrated practice, not an official GCSE mock examination."} as const;
export const worksheetReferences=["Original GCSE Chinese 1CN0-style integrated practice; no official past-paper questions reproduced.","Traditional Chinese writing and Cantonese listening/speaking with past, present and future time frames."];
export const SECTIONS=["Vocabulary & Reading","Listening & Speaking","Recall & Translation","Handwriting & Feedback"] as const;
export type ProgressState={vocabSeen:string[];reading:Record<string,number>;listening:Record<string,number>;readingSubmitted:string[];listeningSubmitted:string[];dictation:Record<string,"correct"|"review">;translationChecked:string[];speakingPractised:string[];sessionsCompleted:number[]};
export const emptyProgress=():ProgressState=>({vocabSeen:[],reading:{},listening:{},readingSubmitted:[],listeningSubmitted:[],dictation:{},translationChecked:[],speakingPractised:[],sessionsCompleted:[]});
export const correctness=(answers:Record<string,number>,questions:readonly ChoiceQuestion[])=>questions.filter(q=>Object.prototype.hasOwnProperty.call(answers,q.id)&&answers[q.id]===q.correct).length;
