/**
 * Week 7 — Travel & Transport | Original GCSE-style practice.
 * Image facts reviewed against the actual cropped supermarket illustration.
 * NOT official Pearson questions/marks.
 */
export const WEEK_ID=7;
export const COURSE_VERSION="stage3-week7-v1";
export const vocabulary=[
 {id:"station",traditional:"車站",jyutping:"ce1 zaam6",english:"station",sentence:"我們約好在車站入口見面。",translation:"We agreed to meet at the station entrance."},
 {id:"train",traditional:"火車",jyutping:"fo2 ce1",english:"train",sentence:"我們坐火車去倫敦。",translation:"We take a train to London."},
 {id:"ticket",traditional:"車票",jyutping:"ce1 piu3",english:"ticket",sentence:"我已經買好來回車票。",translation:"I have already bought a return ticket."},
 {id:"platform",traditional:"月台",jyutping:"jyut6 toi4",english:"platform",sentence:"乘客在三號月台等車。",translation:"Passengers are waiting on platform three."},
 {id:"depart",traditional:"出發",jyutping:"ceot1 faat3",english:"to set off / depart",sentence:"火車上午九點出發。",translation:"The train departs at nine in the morning."},
 {id:"arrive",traditional:"到達",jyutping:"dou3 daat6",english:"to arrive",sentence:"我們十點半到達目的地。",translation:"We arrive at the destination at half past ten."},
 {id:"transport",traditional:"交通",jyutping:"gaau1 tung1",english:"transport / traffic",sentence:"這個城市的公共交通很方便。",translation:"Public transport in this city is convenient."},
 {id:"airport",traditional:"機場",jyutping:"gei1 coeng4",english:"airport",sentence:"我們提早兩小時到機場。",translation:"We arrive at the airport two hours early."},
 {id:"journey",traditional:"旅程",jyutping:"leoi5 cing4",english:"journey",sentence:"這段旅程大約需要兩個小時。",translation:"The journey takes about two hours."},
 {id:"luggage",traditional:"行李",jyutping:"hang4 lei5",english:"luggage",sentence:"上火車之前要看好自己的行李。",translation:"Look after your luggage before boarding the train."},
] as const;
export const reviewVocabulary=[
 {week:1,traditional:"參加",english:"take part in"},
 {week:2,traditional:"安排",english:"arrange"},
 {week:3,traditional:"行山",english:"hiking"},
 {week:4,traditional:"朋友",english:"friend"},
 {week:2,traditional:"準備",english:"prepare"},
 {week:6,traditional:"預算",english:"budget"},
] as const;
export type ChoiceQuestion={id:string;question:string;choices:readonly string[];correct:number;explanation:string};
export const readingText=`上星期六，小敏和朋友坐火車去另一個城市旅行。他們在網上買了來回車票，早上八點半到達車站。原定九點出發的火車因為天氣不好而遲了十五分鐘。小敏先在電子顯示板查看月台，然後到三號月台等車。她帶了一個小背包，但朋友有一件很重的行李。他們在車上談旅行計劃，打算到達後先參觀博物館，再去公園散步。雖然旅程有一點延誤，小敏仍然覺得坐火車比開車方便，而且可以欣賞窗外風景。`;
export const readingQuestions:ChoiceQuestion[]=[
 {id:"r1",question:"How did Siu-man and her friend travel?",choices:["By train","By plane","By car"],correct:0,explanation:"文章指出他們坐火車去旅行。"},
 {id:"r2",question:"When was their train originally due to depart?",choices:["8:30 a.m.","9:00 a.m.","9:15 a.m."],correct:1,explanation:"原定九點出發，後來遲了十五分鐘。"},
 {id:"r3",question:"Which platform did they wait on?",choices:["Platform 1","Platform 2","Platform 3"],correct:2,explanation:"小敏到三號月台等車。"},
 {id:"r4",question:"Why did Siu-man still like travelling by train?",choices:["It was never delayed","It was convenient and offered views","It was cheaper than walking"],correct:1,explanation:"小敏認為坐火車方便，而且可以欣賞風景。"},
];
export const listeningClips=[
 {id:"ticket",title:"Clip A · Buying a ticket",topic:"買車票"},
 {id:"platform",title:"Clip B · Platform information",topic:"月台與出發時間"},
 {id:"airport",title:"Clip C · Going to the airport",topic:"機場與行李"},
] as const;
export const listeningQuestions:Array<ChoiceQuestion&{clipId:string}>=[
 {id:"l1",clipId:"ticket",question:"What type of ticket does the customer want?",choices:["A single ticket","A return ticket","A bus pass"],correct:1,explanation:"乘客問來回車票。"},
 {id:"l2",clipId:"ticket",question:"Where is the customer travelling to?",choices:["London","Norwich","Cambridge"],correct:2,explanation:"乘客要去劍橋。"},
 {id:"l3",clipId:"platform",question:"Which platform should passengers use?",choices:["Platform 2","Platform 3","Platform 4"],correct:1,explanation:"廣播說三號月台。"},
 {id:"l4",clipId:"platform",question:"When does the train depart?",choices:["9:15","9:30","9:45"],correct:1,explanation:"列車九點半出發。"},
 {id:"l5",clipId:"airport",question:"How will they get to the airport?",choices:["By bus","By taxi","By train"],correct:0,explanation:"他們決定坐巴士。"},
 {id:"l6",clipId:"airport",question:"What must they remember?",choices:["A coat","Their luggage","A bicycle"],correct:1,explanation:"提醒帶齊行李。"},
];
export const translationTasks=[
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"We will take the train tomorrow and arrive at the station before nine o’clock.",sample:"我們明天會坐火車，並且在九點之前到達車站。",note:"Accept equivalent written Traditional Chinese conveying tomorrow, train, arrival at station and before nine."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"我們買了車票，但火車因為天氣不好而遲了十五分鐘。",sample:"We bought tickets, but the train was fifteen minutes late because of bad weather.",note:"Accept naturally worded English retaining purchased tickets, 15-minute delay and reason."},
] as const;
export const speakingPrompts=[
 {id:"role",label:"Role play",english:"You are at a railway station. Ask which platform the train leaves from and what time it departs. Reply in Cantonese.",sample:"唔該，請問去劍橋嘅火車喺邊個月台上車？幾點出發呀？"},
 {id:"picture",label:"Picture-based practice",english:"Look at the station illustration. In Cantonese describe TWO things you can see and give ONE opinion about travelling by train.",sample:"我見到一架火車停喺月台，旁邊有幾個人攞住行李等車。我覺得坐火車去旅行好方便。"},
 {id:"conversation",label:"Conversation",english:"Explain where you would like to travel, what transport you would use, and one reason for your choice. Answer in Cantonese.",sample:"我想去倫敦玩。我會坐火車，因為唔使自己揸車，又可以一路欣賞風景。"},
] as const;
export const pictureVisibleFacts=[
 "A passenger train is stopped beside a station platform",
 "Several passengers are standing on the platform",
 "Some travellers are carrying bags or luggage",
 "There is an overhead electronic information sign at the station",
 "A roofed railway station platform and tracks are visible"
] as const;
export const pictureNotSupported=[
 "The image does not prove where any train is heading or its exact departure time",
 "Do not invent a ticket price or assert any passenger has purchased a ticket",
 "Do not infer a family relationship between the travellers",
 "Do not claim an arrival or departure occurred; the train is shown stationary"
] as const;
export const pictureGrading=`Week 7 Travel & Transport. VERIFIED VISIBLE: ${pictureVisibleFacts.join('; ')}. UNSUPPORTED: ${pictureNotSupported.join('; ')}. Student must describe TWO visible details and give ONE Cantonese opinion about train travel. Accept valid alternative accurate descriptions. Do not require sample wording. Score content 0–4, language 0–4, clarity 0–2 as practice, not official GCSE marking. Transcript errors require parent review.`;
export const writingTask={title:"Travel & Transport — original handwriting task",instruction:"Write 4–5 sentences in Traditional Chinese about a journey or a trip you are planning.",requirements:["Say where you will travel and which transport you will use.","Mention a departure or arrival time and something you will bring.","Give one opinion and explain your reason."],guidance:"Try to use at least four Week 7 words. Write by hand and upload a clear photograph; this is not an official GCSE question."} as const;
export const worksheetReferences=["Original Travel & Transport tasks developing GCSE Chinese 1CN0 communication skills; not official Pearson examination questions","Practise Traditional Chinese reading/writing, Cantonese listening/speaking, and journeys, stations and travel planning"];
export const SECTIONS=["Vocabulary & Reading","Listening & Speaking","Recall & Translation","Handwriting & Feedback"] as const;
export type ProgressState={vocabSeen:string[];reading:Record<string,number>;listening:Record<string,number>;readingSubmitted:string[];listeningSubmitted:string[];dictation:Record<string,"correct"|"review">;translationChecked:string[];speakingPractised:string[];sessionsCompleted:number[]};
export const emptyProgress=():ProgressState=>({vocabSeen:[],reading:{},listening:{},readingSubmitted:[],listeningSubmitted:[],dictation:{},translationChecked:[],speakingPractised:[],sessionsCompleted:[]});
export const correctness=(answers:Record<string,number>,questions:readonly ChoiceQuestion[])=>questions.filter(q=>Object.prototype.hasOwnProperty.call(answers,q.id)&&answers[q.id]===q.correct).length;
