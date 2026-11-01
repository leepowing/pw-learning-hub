/** Week 8 — Technology & Communication · Original practice; not official Pearson examination material. */
export const WEEK_ID=8;
export const COURSE_VERSION="stage3-week8-v1";
export const vocabulary=[
 {id:"technology",traditional:"科技",jyutping:"fo1 gei6",english:"technology",sentence:"科技改變了我們的生活。",translation:"Technology has changed our lives."},
 {id:"mobile",traditional:"手機",jyutping:"sau2 gei1",english:"mobile phone",sentence:"我每天用手機跟朋友聯絡。",translation:"I use my mobile phone to contact friends every day."},
 {id:"internet",traditional:"網絡",jyutping:"mong5 lok3",english:"internet / network",sentence:"在家上網需要穩定的網絡。",translation:"A stable internet connection is needed at home."},
 {id:"message",traditional:"訊息",jyutping:"seon3 sik1",english:"message",sentence:"我收到媽媽發來的訊息。",translation:"I received a message from my mother."},
 {id:"contact",traditional:"聯絡",jyutping:"lyun4 lok3",english:"contact / get in touch",sentence:"有問題可以用電話聯絡老師。",translation:"You can contact the teacher by telephone if you have questions."},
 {id:"information",traditional:"資料",jyutping:"zi1 liu6",english:"information / data",sentence:"上網查資料之前要想想來源是否可靠。",translation:"Think about whether a source is reliable before searching online for information."},
 {id:"convenient",traditional:"方便",jyutping:"fong1 bin6",english:"convenient",sentence:"網上學習很方便。",translation:"Online learning is very convenient."},
 {id:"safe",traditional:"安全",jyutping:"on1 cyun4",english:"safe / safety",sentence:"在網上分享私人資料並不一定安全。",translation:"Sharing personal details online is not always safe."},
 {id:"influence",traditional:"影響",jyutping:"jing2 hoeng2",english:"influence / affect",sentence:"使用手機太久可能影響睡眠。",translation:"Using a phone for too long may affect sleep."},
 {id:"use",traditional:"使用",jyutping:"si2 jung6",english:"use",sentence:"我們應該合理使用電子產品。",translation:"We should use electronic devices responsibly."},
] as const;
export const reviewVocabulary=[
 {week:1,traditional:"參加",english:"take part in"},
 {week:2,traditional:"重要",english:"important"},
 {week:3,traditional:"音樂",english:"music"},
 {week:4,traditional:"朋友",english:"friend"},
 {week:5,traditional:"飲品",english:"drink"},
 {week:7,traditional:"車票",english:"ticket"},
] as const;
export type ChoiceQuestion={id:string;question:string;choices:readonly string[];correct:number;explanation:string};
export const readingText="星期六下午，嘉欣在家用電腦查資料，準備下星期的科學報告。她先看學校的網頁，再比較不同網站提供的資料。朋友明明發訊息給她，建議一起完成報告，但嘉欣認為每個人都應該自己思考，不能直接複製網上的答案。後來，他們用視像通話討論難題。嘉欣的弟弟想在網上公開自己的電話號碼，嘉欣提醒他不要隨便分享私人資料。她覺得科技讓學習和聯絡朋友更加方便，但使用網絡也要注意安全。晚上，她關掉手機，準備早點睡覺，因為明天還要參加運動活動。";
export const readingQuestions:ChoiceQuestion[]=[
 {id:"r1",question:"What is Ka-yan preparing?",choices:["A science report", "A shopping list", "A travel diary"],correct:0,explanation:"她正在準備下星期的科學報告。"},
 {id:"r2",question:"What did she do before using other websites?",choices:["Called her friend", "Checked the school website", "Bought a book"],correct:1,explanation:"她先看學校網頁。"},
 {id:"r3",question:"How did the friends discuss difficult questions?",choices:["By video call", "By sending a letter", "At the train station"],correct:0,explanation:"他們使用視像通話。"},
 {id:"r4",question:"What safety advice did Ka-yan give her brother?",choices:["Post his phone number", "Avoid sharing private details", "Turn off the Wi-Fi forever"],correct:1,explanation:"不要隨便分享私人資料。"},
];
export const listeningClips=[
 {id:"homework",title:"Clip A · Homework online",topic:"網上做功課"},
 {id:"message",title:"Clip B · Contacting a friend",topic:"聯絡朋友"},
 {id:"safe",title:"Clip C · Staying safe online",topic:"網絡安全"},
] as const;
export const listeningQuestions:Array<ChoiceQuestion&{clipId:string}>=[
 {id:"l1",clipId:"homework",question:"What is the student using to do homework?",choices:["A tablet", "A television", "A radio"],correct:0,explanation:"講者表示使用平板電腦。"},
 {id:"l2",clipId:"homework",question:"Why is it useful?",choices:["It is convenient to find information", "It is cheaper than a notebook", "It lets them sleep later"],correct:0,explanation:"原因是查資料很方便。"},
 {id:"l3",clipId:"message",question:"How did the speaker contact their friend?",choices:["By email", "By a phone message", "By post"],correct:1,explanation:"講者用手機發訊息。"},
 {id:"l4",clipId:"message",question:"When will the friends speak again?",choices:["Tonight", "Tomorrow morning", "Next week"],correct:0,explanation:"提到今晚再傾。"},
 {id:"l5",clipId:"safe",question:"What should people avoid sharing online?",choices:["Their favourite book", "Private information", "A school subject"],correct:1,explanation:"提醒避免分享私人資料。"},
 {id:"l6",clipId:"safe",question:"What does the speaker suggest doing with unknown messages?",choices:["Open every link", "Forward them immediately", "Ask an adult before opening links"],correct:2,explanation:"遇到不明連結應先問大人。"},
];
export const translationTasks=[
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"I use my mobile phone to contact friends, but I do not share private information online.",sample:"我用手機聯絡朋友，但不會在網上分享私人資料。",note:"Accept equivalent written Chinese retaining the phone, contacting friends and not sharing private information."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"科技讓我們查資料更方便，但是使用網絡時必須注意安全。",sample:"Technology makes it easier for us to find information, but we must pay attention to safety when using the internet.",note:"Accept natural English retaining convenience, searching for information and online safety."},
] as const;
export const speakingPrompts=[
 {id:"role",label:"Role play",english:"Your friend cannot open a school website. In Cantonese, ask what device they are using and suggest one helpful step.",sample:"你而家用緊手機定電腦呀？不如試下重新連接網絡。"},
 {id:"picture",label:"Picture-based practice",english:"Look at the Technology & Communication illustration. Describe TWO visible things and give ONE opinion about using technology. Answer in Cantonese.",sample:"我見到兩個學生坐喺枱前面，一個用手提電腦，另外有一部手機放喺旁邊。我覺得科技幫我哋聯絡朋友好方便。"},
 {id:"conversation",label:"Conversation",english:"Explain how you use technology to learn or contact friends, give one benefit and one safety precaution in Cantonese.",sample:"我平時會用電腦查資料，又會用手機同朋友聯絡。咁樣好方便，但係我唔會隨便公開私人資料。"},
] as const;
export const pictureVisibleFacts=[
 "Two students are seated at a table with a laptop and a smartphone",
 "A laptop screen is visible",
 "A smartphone is upright next to the laptop",
 "The setting is a bright indoor study area"
] as const;
export const pictureNotSupported=[
 "The image cannot prove the content of any message or website",
 "Do not assert that the students are video calling without visible evidence",
 "Do not infer their identities or relationship",
 "Do not infer if any website or device is secure from appearance alone"
] as const;
export const pictureGrading=`Week 8 Technology & Communication. VISIBLE FACTS (MUST BE VISUALLY REVERIFIED ON THE FINAL IMAGE): ${pictureVisibleFacts.join("; ")}. NOT SUPPORTED: ${pictureNotSupported.join("; ")}. Describe TWO observed details and give ONE Cantonese opinion about technology. Accept all accurate alternative descriptions. Do not require sample wording. Assess content 0–4, language 0–4, clarity 0–2; not an official GCSE grade. Azure transcription is uncertain and requires parent review.`;
export const writingTask={title:"Technology & Communication — original handwriting task",instruction:"Write 4–6 sentences in Traditional Chinese about how you use technology and communicate with others.",requirements:["Describe a device you use and what you do with it.","Explain one benefit of technology with a reason.","Mention one problem or safety precaution."],guidance:"Write by hand using some Week 8 vocabulary and upload a clear photo; this is original GCSE-style practice, not an official exam question."} as const;
export const worksheetReferences=["Original Technology & Communication tasks inspired by GCSE Chinese 1CN0 skill coverage; not official Pearson questions","Traditional Chinese reading/writing and Cantonese listening/speaking about digital communication and safety"];
export const SECTIONS=["Vocabulary & Reading","Listening & Speaking","Recall & Translation","Handwriting & Feedback"] as const;
export type ProgressState={vocabSeen:string[];reading:Record<string,number>;listening:Record<string,number>;readingSubmitted:string[];listeningSubmitted:string[];dictation:Record<string,"correct"|"review">;translationChecked:string[];speakingPractised:string[];sessionsCompleted:number[]};
export const emptyProgress=():ProgressState=>({vocabSeen:[],reading:{},listening:{},readingSubmitted:[],listeningSubmitted:[],dictation:{},translationChecked:[],speakingPractised:[],sessionsCompleted:[]});
export const correctness=(answers:Record<string,number>,questions:readonly ChoiceQuestion[])=>questions.filter(q=>Object.prototype.hasOwnProperty.call(answers,q.id)&&answers[q.id]===q.correct).length;
