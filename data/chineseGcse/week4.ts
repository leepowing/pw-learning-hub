/**
 * PW Learning Hub — GCSE Chinese Stage 3 Week 4, Family & Friends.
 * Original teaching tasks; not Pearson exam questions or official marks.
 */
export const WEEK_ID=4;
export const COURSE_VERSION="stage3-week4-v1";
export const vocabulary=[
 {id:"family",traditional:"家庭",jyutping:"gaa1 ting4",english:"family",sentence:"我的家庭有四個人。",translation:"There are four people in my family."},
 {id:"father",traditional:"父親",jyutping:"fu6 can1",english:"father",sentence:"我的父親喜歡和我們一起做運動。",translation:"My father enjoys doing sports with us."},
 {id:"mother",traditional:"母親",jyutping:"mou5 can1",english:"mother",sentence:"我的母親常常幫助我準備上學。",translation:"My mother often helps me get ready for school."},
 {id:"siblings",traditional:"兄弟",jyutping:"hing1 dai6",english:"brothers",sentence:"我的兩個兄弟喜歡打籃球。",translation:"My two brothers like playing basketball."},
 {id:"sisters",traditional:"姐妹",jyutping:"ze2 mui6",english:"sisters",sentence:"兩個姐妹星期日一起看電影。",translation:"The two sisters watch a film together on Sunday."},
 {id:"friend",traditional:"朋友",jyutping:"pang4 jau5",english:"friend",sentence:"我的朋友在學校幫助了我。",translation:"My friend helped me at school."},
 {id:"together",traditional:"一起",jyutping:"jat1 hei2",english:"together",sentence:"週末我們一家人一起吃晚飯。",translation:"We have dinner together as a family at weekends."},
 {id:"support",traditional:"支持",jyutping:"zi1 ci4",english:"support",sentence:"朋友會在我遇到困難時支持我。",translation:"Friends support me when I have difficulties."},
] as const;
export type ChoiceQuestion={id:string;question:string;choices:readonly string[];correct:number;explanation:string};
export const readingText=`子晴和家人住在英國。她的家庭有四個人，包括父親、母親、弟弟和她。平日她和弟弟在同一間學校上課，放學後有時一起做功課。星期六，子晴通常跟朋友參加運動活動。她最好的朋友叫美欣。上個月子晴準備中文考試時遇到困難，美欣每天抽空幫助她溫習。子晴很感謝朋友的支持。下星期日，他們兩家人打算一起去公園野餐。`;
export const readingQuestions:ChoiceQuestion[]=[
 {id:"r1",question:"How many people are there in Tsz-ching's family?",choices:["Three","Four","Five"],correct:1,explanation:"文章寫明『她的家庭有四個人』。"},
 {id:"r2",question:"What does Tsz-ching sometimes do with her younger brother after school?",choices:["Do homework","Go shopping","Watch films"],correct:0,explanation:"『放學後有時一起做功課』。"},
 {id:"r3",question:"How did Mei-yan help Tsz-ching last month?",choices:["She bought her a book","She helped her revise Chinese","She took her to a restaurant"],correct:1,explanation:"美欣『每天抽空幫助她溫習』中文考試。"},
 {id:"r4",question:"What are the two families planning for next Sunday?",choices:["A picnic in the park","A visit to a museum","A basketball match"],correct:0,explanation:"兩家人『打算一起去公園野餐』。"},
];
export const listeningClips=[
 {id:"family",title:"Clip A · Family evenings",topic:"家庭活動"},
 {id:"friends",title:"Clip B · A helpful friend",topic:"朋友互助"},
 {id:"weekend",title:"Clip C · Weekend plans",topic:"週末計劃"},
] as const;
export const listeningQuestions:Array<ChoiceQuestion&{clipId:string}>=[
 {id:"l1",clipId:"family",question:"When does the speaker spend time with family?",choices:["Every evening","Only on Saturdays","Before school"],correct:0,explanation:"『每日夜晚』對應 every evening。"},
 {id:"l2",clipId:"family",question:"What do they usually do together?",choices:["Eat dinner","Play football","Go swimming"],correct:0,explanation:"錄音提到『一齊食晚飯』。"},
 {id:"l3",clipId:"friends",question:"Who helped the speaker with homework?",choices:["A neighbour","A close friend","A teacher"],correct:1,explanation:"『我個好朋友幫我做功課』。"},
 {id:"l4",clipId:"friends",question:"Why is the speaker grateful?",choices:["For encouragement","For a new phone","For a ticket"],correct:0,explanation:"朋友鼓勵與支持，說話者表示感激。"},
 {id:"l5",clipId:"weekend",question:"Where will they meet on Sunday?",choices:["At the library","At the park","At the cinema"],correct:1,explanation:"錄音說『星期日喺公園見』。"},
 {id:"l6",clipId:"weekend",question:"What will they bring?",choices:["Food and drinks","Sports uniforms","School books"],correct:0,explanation:"『帶啲食物同飲品』。"},
];
export const translationTasks=[
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"My family supports me when I have problems.",sample:"當我遇到困難時，我的家人會支持我。",note:"Accept natural equivalents preserving support, family and difficulties."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"星期六我通常和朋友一起做運動。",sample:"On Saturdays, I usually exercise with my friends.",note:"Accept equivalent wording preserving day, frequency, friends and exercise."},
] as const;
export const speakingPrompts=[
 {id:"role",label:"Role play",english:"A new friend asks who is in your family and what you like doing together. Answer in Cantonese.",sample:"我屋企有爸爸、媽媽同我哋兩個小朋友。星期日我哋鍾意一齊去公園。"},
 {id:"picture",label:"Picture-based practice",english:"Look at the picture. Describe two things you can clearly see people doing or objects in the room. Give one opinion about spending time with family or friends in Cantonese.",sample:"我見到幾個人喺客廳一齊慶祝生日，枱上有生日蛋糕同禮物。另外，前面有兩個小朋友喺度玩電子遊戲。我覺得同屋企人同朋友一齊慶祝好開心。"},
 {id:"conversation",label:"Conversation",english:"Talk about a close friend, how they have helped you, and why friendship matters to you. Answer in Cantonese.",sample:"我有個好朋友，佢成日鼓勵我努力學習。上次我唔識做功課，佢耐心教我，所以我覺得朋友互相支持好重要。"},
] as const;
export const pictureVisibleFacts=["Several people of different ages are together in a living room", "A birthday cake with lit candles is visible on the table", "Gift boxes and snacks are visible on the table", "Two younger people at the front are holding game controllers", "Two people on the right appear to be talking", "Birthday decorations are visible on the wall"] as const;
export const pictureNotSupported=["Family relationships cannot be identified with certainty solely from appearance", "The picture does not prove whose birthday it is", "Do not claim someone is doing homework or playing basketball", "A character looking toward the screen does not prove what specific game is being played"] as const;
export const pictureGrading=`Week 4 Family & Friends picture — verified visible observations: ${pictureVisibleFacts.join("; ")}. Not supported / uncertain: ${pictureNotSupported.join("; ")}. The picture itself is not sent to this AI call; grade against these verified facts. Credit any TWO accurate picture observations plus ONE relevant opinion about family/friends or celebration. Accept other factually consistent Cantonese descriptions, including informal but natural Cantonese. Opinions are subjective and need not match the sample. Never require exact sample phrasing or infer specific family relationships. Do not give credit for fabricated visible details. Distinguish Azure transcription uncertainty from actual student errors; refer uncertain speech for parent review. Practice rubric remains 0-4 content, 0-4 language, 0-2 clarity; never claim official GCSE marks.`;
export const writingTask={title:"My family and friends — original writing task",instruction:"Write 3–4 complete sentences in Traditional Chinese about family and friendship.",requirements:["Mention someone in your family or a close friend.","Describe something you do together.","Explain why your family or friend is important to you."],guidance:"Use at least three Week 4 words. Write on paper without predictive Chinese input, then upload a photo. This is early-stage GCSE preparation, not an official Higher Tier paper."} as const;
export const worksheetReferences=["Pearson Edexcel GCSE Chinese (1CN0): family, friendships, relationships across four skills","Original tasks informed by 2019, 2022, 2023 and 2024 formats; no past-paper questions copied"];
export const SECTIONS=["Vocabulary & Reading","Listening & Speaking","Recall & Translation","Handwriting & Feedback"] as const;
export type ProgressState={vocabSeen:string[];reading:Record<string,number>;listening:Record<string,number>;readingSubmitted:string[];listeningSubmitted:string[];dictation:Record<string,"correct"|"review">;translationChecked:string[];speakingPractised:string[];sessionsCompleted:number[]};
export const emptyProgress=():ProgressState=>({vocabSeen:[],reading:{},listening:{},readingSubmitted:[],listeningSubmitted:[],dictation:{},translationChecked:[],speakingPractised:[],sessionsCompleted:[]});
export const correctness=(answers:Record<string,number>,questions:readonly ChoiceQuestion[])=>questions.filter(q=>Object.prototype.hasOwnProperty.call(answers,q.id)&&answers[q.id]===q.correct).length;
