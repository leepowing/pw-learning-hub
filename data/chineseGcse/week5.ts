/**
 * PW Learning Hub — GCSE Chinese Stage 3, Week 5, Food & Health.
 * Original educational tasks; not official Pearson exam questions or marks.
 * Picture-based reference checked against week5-food-health.webp illustration.
 */
export const WEEK_ID=5;
export const COURSE_VERSION="stage3-week5-v1";
export const vocabulary=[
 {id:"breakfast",traditional:"早餐",jyutping:"zou2 caan1",english:"breakfast",sentence:"我通常在上學前吃早餐。",translation:"I usually eat breakfast before school."},
 {id:"vegetables",traditional:"蔬菜",jyutping:"so1 coi3",english:"vegetables",sentence:"我每天都會吃一些蔬菜。",translation:"I eat some vegetables every day."},
 {id:"fruit",traditional:"水果",jyutping:"seoi2 gwo2",english:"fruit",sentence:"蘋果和香蕉都是我喜歡的水果。",translation:"Apples and bananas are fruit I like."},
 {id:"diet",traditional:"飲食",jyutping:"jam2 sik6",english:"diet / eating habits",sentence:"良好的飲食習慣對健康很重要。",translation:"Good eating habits are important for health."},
 {id:"health",traditional:"健康",jyutping:"gin6 hong1",english:"health / healthy",sentence:"保持健康需要足夠睡眠。",translation:"Getting enough sleep helps us stay healthy."},
 {id:"balanced",traditional:"均衡",jyutping:"gwan1 hang4",english:"balanced",sentence:"我希望每天都有均衡的飲食。",translation:"I hope to have a balanced diet every day."},
 {id:"nutrition",traditional:"營養",jyutping:"jing4 joeng5",english:"nutrition / nutrients",sentence:"不同的食物可以提供不同的營養。",translation:"Different foods provide different nutrients."},
 {id:"choose",traditional:"選擇",jyutping:"syun2 zaak6",english:"choose / choice",sentence:"午餐時，我會選擇吃蔬菜和米飯。",translation:"At lunch, I choose to eat vegetables and rice."},
 {id:"maintain",traditional:"保持",jyutping:"bou2 ci4",english:"maintain / keep",sentence:"我每天喝水，並保持良好的生活習慣。",translation:"I drink water every day and maintain good habits."},
 {id:"drinks",traditional:"飲品",jyutping:"jam2 ban2",english:"drinks / beverages",sentence:"水是我最常選擇的飲品。",translation:"Water is the drink I choose most often."},
] as const;
export const reviewVocabulary=[
 {week:2,traditional:"習慣",english:"habit"},
 {week:2,traditional:"安排",english:"arrange"},
 {week:2,traditional:"準備",english:"prepare"},
 {week:2,traditional:"通常",english:"usually"},
 {week:2,traditional:"重要",english:"important"},
 {week:4,traditional:"一起",english:"together"},
] as const;
export type ChoiceQuestion={id:string;question:string;choices:readonly string[];correct:number;explanation:string};
export const readingText=`星期一早上，樂怡通常在家吃早餐。她有時吃多士、雞蛋和水果，也會喝一杯水。樂怡以前很少吃蔬菜，但現在會在午餐時選擇蔬菜和米飯。她認為均衡飲食很重要，因為不同食物可以提供不同的營養。她的弟弟喜歡甜飲品，樂怡則比較喜歡喝水。週末，他們一起準備午餐，還會在公園散步。樂怡覺得健康的生活不只是注意飲食，也包括適量活動和充足睡眠。`;
export const readingQuestions:ChoiceQuestion[]=[
 {id:"r1",question:"What does Lok-yee sometimes have for breakfast?",choices:["Toast, eggs and fruit","Only sweets","Rice and fish every day"],correct:0,explanation:"文章說她有時吃『多士、雞蛋和水果』。"},
 {id:"r2",question:"What change has Lok-yee made to her lunch?",choices:["She never eats rice","She now chooses vegetables with rice","She only drinks juice"],correct:1,explanation:"她『現在會在午餐時選擇蔬菜和米飯』。"},
 {id:"r3",question:"Why does she think a balanced diet matters?",choices:["Every food tastes the same","Different foods provide different nutrients","Her brother likes sweet drinks"],correct:1,explanation:"『不同食物可以提供不同的營養』是原因。"},
 {id:"r4",question:"Which statement best summarises her idea of a healthy lifestyle?",choices:["It depends only on avoiding drinks","It involves food, activity and sleep","It means doing sport every day"],correct:1,explanation:"最後一句提及飲食、適量活動及充足睡眠。"},
];
export const listeningClips=[
 {id:"breakfast",title:"Clip A · Breakfast before school",topic:"早餐"},
 {id:"lunch",title:"Clip B · A lunch choice",topic:"午餐與營養"},
 {id:"health",title:"Clip C · Healthy habits",topic:"健康習慣"},
] as const;
export const listeningQuestions:Array<ChoiceQuestion&{clipId:string}>=[
 {id:"l1",clipId:"breakfast",question:"At what time does the speaker usually eat breakfast?",choices:["7:30","8:30","9:30"],correct:0,explanation:"錄音提到『七點半食早餐』。"},
 {id:"l2",clipId:"breakfast",question:"What drink does the speaker have?",choices:["Milk","Tea","Orange juice"],correct:0,explanation:"『飲一杯牛奶』表示 milk。"},
 {id:"l3",clipId:"lunch",question:"What two foods were part of lunch?",choices:["Vegetables and rice","Bread and cheese","Cake and biscuits"],correct:0,explanation:"『午餐食咗蔬菜同米飯』。"},
 {id:"l4",clipId:"lunch",question:"What fruit did the speaker eat?",choices:["A banana","An apple","An orange"],correct:1,explanation:"錄音說『食咗一個蘋果』。"},
 {id:"l5",clipId:"health",question:"Who gives the advice?",choices:["A friend","A doctor","A coach"],correct:1,explanation:"『醫生話』。"},
 {id:"l6",clipId:"health",question:"Which advice is mentioned?",choices:["Skip meals","Eat a balanced diet, be active and sleep enough","Only drink fruit juice"],correct:1,explanation:"提及均衡飲食、運動及充足睡眠。"},
];
export const translationTasks=[
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"I usually choose fruit and water for breakfast.",sample:"我早餐通常會選擇水果和水。",note:"Accept natural Traditional Chinese conveying breakfast, usual habit, choosing fruit and water."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"均衡飲食和充足睡眠對保持健康很重要。",sample:"A balanced diet and enough sleep are important for staying healthy.",note:"Accept equivalent meaning with diet, sleep, importance and health."},
] as const;
export const speakingPrompts=[
 {id:"role",label:"Role play",english:"A friend asks what you normally eat for breakfast and which drink you choose. Answer both questions in Cantonese.",sample:"我通常早餐食多士同水果，飲品方面，我多數會揀水。"},
 {id:"picture",label:"Picture-based practice",english:"Look at the kitchen picture. In Cantonese, describe TWO things you can clearly see about the food or people's activities, then give ONE opinion about eating together or choosing food.",sample:"我見到枱上有水果同蔬菜，亦見到有人喺廚房準備食物。我覺得一家人一齊食飯幾開心，因為可以傾偈。"},
 {id:"conversation",label:"Conversation",english:"Explain one eating habit you have, one change you would like to make, and why. Answer in Cantonese.",sample:"我通常早餐會食麵包，但我想食多啲水果，因為我想有更多種類嘅食物。"},
] as const;
export const pictureVisibleFacts=[
 "The illustration shows a home kitchen or dining area with several people",
 "A person at the back is preparing vegetables at a kitchen counter",
 "A person on the left is eating from a bowl of vegetables",
 "A younger person near the centre is holding a red apple",
 "A person at the right is holding a glass or cup of drink",
 "A plate or basket of fruit, including bananas and apples, is visible in the foreground",
 "Vegetables, bread and cups are visible on the table",
] as const;
export const pictureNotSupported=[
 "Do not infer exact family relationships, names, identities, ages or medical conditions",
 "Do not claim the people are eating breakfast rather than lunch without evidence",
 "Do not assume that a pictured meal is nutritionally balanced solely from appearance",
 "There is no evidence of anyone going to a doctor, taking medicine or jogging in the picture",
 "Do not infer that a person likes or dislikes food from facial expression alone",
] as const;
export const pictureGrading=`Week 5 Food & Health. The picture is not sent to this text-only AI request. VERIFIED OBSERVATIONS: ${pictureVisibleFacts.join('; ')}. UNCERTAIN/UNSUPPORTED: ${pictureNotSupported.join('; ')}. The learner must describe TWO visible details about food/people's actions and ONE relevant personal opinion in Cantonese. Credit all accurate alternative descriptions, allow natural spoken Cantonese and personal opinions. Never require exact sample wording, infer identity or treat a student's opinion as false. An invented visible activity should not receive observation credit. Azure transcript may be inaccurate: flag uncertainty for parent review. Practice score: content 0–4, language 0–4, clarity 0–2. Not an official GCSE mark.`;
export const writingTask={title:"Food and health — original handwriting task",instruction:"Write 4–5 complete sentences in Traditional Chinese about what you eat and how you keep healthy.",requirements:["Describe one meal or food you enjoy.","Explain one food or drink choice.","Mention one habit you would like to keep or improve and give a reason."],guidance:"Try to use at least four Week 5 vocabulary words. Write by hand on paper, then upload a photo. This is a learning task, not an official GCSE examination."} as const;
export const worksheetReferences=["Original Food & Health exercises aligned with general GCSE Chinese 1CN0 communication skills; not official Pearson questions","Suggested GCSE preparation skills: reading for details/inference, Cantonese listening/speaking and Traditional Chinese writing"];
export const SECTIONS=["Vocabulary & Reading","Listening & Speaking","Recall & Translation","Handwriting & Feedback"] as const;
export type ProgressState={vocabSeen:string[];reading:Record<string,number>;listening:Record<string,number>;readingSubmitted:string[];listeningSubmitted:string[];dictation:Record<string,"correct"|"review">;translationChecked:string[];speakingPractised:string[];sessionsCompleted:number[]};
export const emptyProgress=():ProgressState=>({vocabSeen:[],reading:{},listening:{},readingSubmitted:[],listeningSubmitted:[],dictation:{},translationChecked:[],speakingPractised:[],sessionsCompleted:[]});
export const correctness=(answers:Record<string,number>,questions:readonly ChoiceQuestion[])=>questions.filter(q=>Object.prototype.hasOwnProperty.call(answers,q.id)&&answers[q.id]===q.correct).length;
