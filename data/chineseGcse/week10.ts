/** Week 10 — Environment & Community · Original GCSE-style practice; not official Pearson material. */
export const WEEK_ID=10;
export const COURSE_VERSION="stage3-week10-v1";
export const vocabulary=[
 {id:"environment",traditional:"環境",jyutping:"waan4 ging2",english:"environment",sentence:"我們應該一起保護生活環境。",translation:"We should protect our living environment together."},
 {id:"community",traditional:"社區",jyutping:"se5 keoi1",english:"community",sentence:"這個社區有一個很大的公園。",translation:"This community has a large park."},
 {id:"pollution",traditional:"污染",jyutping:"wu1 jim5",english:"pollution / pollute",sentence:"我們要想辦法減少河流污染。",translation:"We need to find ways to reduce river pollution."},
 {id:"rubbish",traditional:"垃圾",jyutping:"laap6 saap3",english:"rubbish / litter",sentence:"請不要把垃圾丟在地上。",translation:"Please do not drop litter on the ground."},
 {id:"recycling",traditional:"回收",jyutping:"wui4 sau1",english:"recycle / recycling",sentence:"我們可以把紙張和塑膠分開回收。",translation:"We can recycle paper and plastic separately."},
 {id:"conserve",traditional:"節約",jyutping:"zit3 joek3",english:"save / conserve resources",sentence:"節約用水是每個人都能做到的事。",translation:"Saving water is something everyone can do."},
 {id:"protect",traditional:"保護",jyutping:"bou2 wu6",english:"protect",sentence:"學生參加活動來保護公園環境。",translation:"Students join an activity to protect the park environment."},
 {id:"resources",traditional:"資源",jyutping:"zi1 jyun4",english:"resources",sentence:"紙張和清水都是重要的資源。",translation:"Paper and clean water are important resources."},
 {id:"volunteer",traditional:"義工",jyutping:"ji6 gung1",english:"volunteer",sentence:"星期六有幾位義工清潔公園。",translation:"Several volunteers clean the park on Saturday."},
 {id:"reduce",traditional:"減少",jyutping:"gaam2 siu2",english:"reduce / decrease",sentence:"少用一次性膠樽可以減少垃圾。",translation:"Using fewer disposable plastic bottles can reduce rubbish."},
] as const;
export const reviewVocabulary=[
 {week:1,traditional:"參加",english:"take part / participate"},
 {week:4,traditional:"支持",english:"support"},
 {week:5,traditional:"保持",english:"maintain / keep"},
 {week:5,traditional:"選擇",english:"choose"},
 {week:7,traditional:"交通",english:"transport"},
 {week:8,traditional:"使用",english:"use"},
] as const;
export type ChoiceQuestion={id:string;question:string;choices:readonly string[];correct:number;explanation:string};
export const readingText="上星期六，明欣和幾位朋友參加了社區清潔活動。他們早上九時在河邊公園集合。義工老師先講解安全規則，再把手套和垃圾袋交給大家。有些學生撿起地上的膠樽和紙張，另一些人把可回收物品分類。明欣發現河邊的垃圾比預期多，所以提議學校每月舉辦一次活動。活動後，大家討論如何減少污染，例如節約用水、少用一次性膠樽和把紙張回收。雖然清潔一天不能解決所有環境問題，但她相信每個人的小行動都可以幫助社區。";
export const readingQuestions:ChoiceQuestion[]=[
 {id:"r1",question:"Where did Ming-yan and her friends meet?",choices:["At the airport","At a riverside park","In a shopping centre"],correct:1,explanation:"他們早上九時在河邊公園集合。"},
 {id:"r2",question:"What did the volunteer leader do before the cleanup?",choices:["Explained safety rules","Sold tickets","Prepared lunch"],correct:0,explanation:"義工老師先講解安全規則。"},
 {id:"r3",question:"Why did Ming-yan suggest a monthly activity?",choices:["She wanted a prize","The park was closed","She noticed more rubbish than expected"],correct:2,explanation:"她發現河邊垃圾比預期多。"},
 {id:"r4",question:"What is the writer's overall message?",choices:["Small community actions can help","Only governments can make changes","Recycling is unnecessary"],correct:0,explanation:"每個人的小行動都可以幫助社區。"},
];
export const listeningClips=[
 {id:"cleanup",title:"Clip A · Community cleanup",topic:"社區清潔"},
 {id:"recycling",title:"Clip B · Sorting rubbish",topic:"垃圾分類"},
 {id:"resources",title:"Clip C · Saving resources",topic:"節約資源"},
] as const;
export const listeningQuestions:Array<ChoiceQuestion&{clipId:string}>=[
 {id:"l1",clipId:"cleanup",question:"When will the cleanup take place?",choices:["Saturday morning","Sunday evening","Friday afternoon"],correct:0,explanation:"活動喺星期六朝早。"},
 {id:"l2",clipId:"cleanup",question:"Where should participants meet?",choices:["At the school library","At the park entrance","At the train station"],correct:1,explanation:"大家喺公園入口集合。"},
 {id:"l3",clipId:"recycling",question:"What two materials does the speaker mention?",choices:["Food and wood","Clothes and shoes","Paper and plastic bottles"],correct:2,explanation:"講者提到紙張同膠樽。"},
 {id:"l4",clipId:"recycling",question:"What should people do with the two materials?",choices:["Separate them for recycling","Throw them into the river","Keep them on the pavement"],correct:0,explanation:"要分類放入回收箱。"},
 {id:"l5",clipId:"resources",question:"How does the family save water?",choices:["By keeping taps running","By turning off the tap while brushing teeth","By buying more bottles"],correct:1,explanation:"刷牙嗰陣關水龍頭。"},
 {id:"l6",clipId:"resources",question:"What does the speaker suggest using less often?",choices:["Books","Public transport","Disposable plastic bottles"],correct:2,explanation:"建議少用一次性膠樽。"},
];
export const translationTasks=[
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"Our community volunteers recycle plastic bottles and paper to reduce pollution.",sample:"我們社區的義工回收膠樽和紙張，以減少污染。",note:"Accept equivalent traditional Chinese for volunteers, recycling bottles and paper, and the purpose of reducing pollution."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"為了保護環境，我們應該節約用水，並減少製造垃圾。",sample:"To protect the environment, we should save water and produce less rubbish.",note:"Accept natural English retaining protecting the environment, saving water and reducing waste."},
] as const;
export const speakingPrompts=[
 {id:"role",label:"Role play",english:"A friend wants to join a community cleanup. Ask when it starts and suggest ONE item they should bring. Answer in Cantonese.",sample:"清潔活動幾點開始呀？你可以帶手套同水樽去。"},
 {id:"picture",label:"Picture-based practice",english:"Look at the Environment & Community illustration. Describe TWO visible details and give ONE opinion about protecting your local environment in Cantonese.",sample:"我見到幾個人喺河邊執垃圾，佢哋着住反光背心，仲有幾個唔同顏色嘅回收箱。我覺得大家一齊清潔社區好有意義。"},
 {id:"conversation",label:"Conversation",english:"Explain ONE environmental problem in your community, TWO actions people can take, and why one action matters. Answer in Cantonese.",sample:"我覺得街上面有時有垃圾。我哋可以多啲回收，同埋少用膠樽。咁樣可以減少污染，令社區乾淨啲。"},
] as const;
export const pictureVisibleFacts=[
 "Several people outdoors near a riverside walkway are collecting litter into bags",
 "Two teenagers in bright reflective vests and gloves stand beside large bags of collected rubbish",
 "A boy holds a litter-picker and a transparent bag with discarded bottles",
 "A girl holds a plastic bottle next to a line of four recycling bins",
 "Four bins of different colours show paper, plastic, metal and glass recycling symbols",
 "Trees, a waterfront railing, green plants and a city skyline are visible"
] as const;
export const pictureNotSupported=[
 "Do not assert exact amounts or weights of waste collected",
 "Do not assume that every person is a student or that all participants know each other",
 "The illustration does not establish pollution sources, long-term effectiveness or official recycling rules",
 "Do not require reading small text on posters or bins; visible recycling symbols suffice",
 "Do not infer private addresses or exact location from the skyline"
] as const;
export const pictureGrading=`Week 10 Environment & Community. VISIBLE FACTS: ${pictureVisibleFacts.join("; ")}. NOT SUPPORTED: ${pictureNotSupported.join("; ")}. Picture response requires TWO accurate visible observations and ONE personal opinion about protecting the local environment in Cantonese. Accept alternative observations such as gloves, reflective vests, litter-pickers, bags, plastic bottles, colour-coded bins, trees, plants, or riverside walkway. Do not require exact sample wording; opinions need not be present in image. Do not invent activities or internal motives. Mark content 0–4, Cantonese language 0–4, clarity 0–2. Azure transcript may be inaccurate; permit Daddy review. Original educational feedback, not an official GCSE score.`;
export const writingTask={title:"Environment & Community — handwriting task",instruction:"Write 4–6 sentences in Traditional Chinese about an environmental problem in your community and what people can do.",requirements:["Describe one community environmental problem.","Explain two practical actions (such as recycling or saving water).","Give your opinion and one reason."],guidance:"Write independently on paper, then upload a clear photo for provisional AI feedback and Daddy's final review. Original GCSE-style task, not an official exam question."} as const;
export const worksheetReferences=["Original practice inspired by GCSE Chinese 1CN0 skills; not copied official examination items.","Traditional Chinese writing and Cantonese listening/speaking about recycling, pollution and community actions."];
export const SECTIONS=["Vocabulary & Reading","Listening & Speaking","Recall & Translation","Handwriting & Feedback"] as const;
export type ProgressState={vocabSeen:string[];reading:Record<string,number>;listening:Record<string,number>;readingSubmitted:string[];listeningSubmitted:string[];dictation:Record<string,"correct"|"review">;translationChecked:string[];speakingPractised:string[];sessionsCompleted:number[]};
export const emptyProgress=():ProgressState=>({vocabSeen:[],reading:{},listening:{},readingSubmitted:[],listeningSubmitted:[],dictation:{},translationChecked:[],speakingPractised:[],sessionsCompleted:[]});
export const correctness=(answers:Record<string,number>,questions:readonly ChoiceQuestion[])=>questions.filter(q=>Object.prototype.hasOwnProperty.call(answers,q.id)&&answers[q.id]===q.correct).length;
