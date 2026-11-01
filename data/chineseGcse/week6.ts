/**
 * Week 6 — Shopping & Money | Original GCSE-style practice.
 * Image facts reviewed against the actual cropped supermarket illustration.
 * NOT official Pearson questions/marks.
 */
export const WEEK_ID=6;
export const COURSE_VERSION="stage3-week6-v1";
export const vocabulary=[
 {id:"shopping",traditional:"購物",jyutping:"kau3 mat6",english:"shopping",sentence:"星期六我會和朋友一起去購物。",translation:"On Saturday I go shopping with friends."},
 {id:"shop",traditional:"商店",jyutping:"soeng1 dim3",english:"shop / store",sentence:"這間商店有很多不同的商品。",translation:"This shop has many different products."},
 {id:"price",traditional:"價錢",jyutping:"gaa3 cin2",english:"price",sentence:"我買東西之前會先看價錢。",translation:"I check the price before buying things."},
 {id:"cheap",traditional:"便宜",jyutping:"pin4 ji4",english:"cheap / inexpensive",sentence:"這件衣服比那件便宜。",translation:"This piece of clothing is cheaper than that one."},
 {id:"expensive",traditional:"昂貴",jyutping:"ngong4 gwai3",english:"expensive",sentence:"有些名牌鞋子十分昂貴。",translation:"Some branded shoes are very expensive."},
 {id:"discount",traditional:"折扣",jyutping:"zit3 kau3",english:"discount",sentence:"這間商店今天有九折優惠。",translation:"This shop offers a ten percent discount today."},
 {id:"pay",traditional:"付款",jyutping:"fu6 fun2",english:"to pay / payment",sentence:"我打算用現金付款。",translation:"I plan to pay in cash."},
 {id:"cash",traditional:"現金",jyutping:"jin6 gam1",english:"cash",sentence:"我帶了二十英鎊現金。",translation:"I brought twenty pounds in cash."},
 {id:"receipt",traditional:"收據",jyutping:"sau1 geoi3",english:"receipt",sentence:"買完東西後，請保留收據。",translation:"Please keep the receipt after shopping."},
 {id:"budget",traditional:"預算",jyutping:"jyu6 syun3",english:"budget",sentence:"我為這次購物定了三十英鎊預算。",translation:"I set a budget of thirty pounds for this shopping trip."},
] as const;
export const reviewVocabulary=[
 {week:1,traditional:"參加",english:"take part in"},
 {week:2,traditional:"準備",english:"prepare"},
 {week:2,traditional:"重要",english:"important"},
 {week:4,traditional:"朋友",english:"friend"},
 {week:5,traditional:"選擇",english:"choose"},
 {week:5,traditional:"飲品",english:"drink / beverage"},
] as const;
export type ChoiceQuestion={id:string;question:string;choices:readonly string[];correct:number;explanation:string};
export const readingText=`星期六下午，小朗和朋友到市中心購物。他想買一件外套，但只有三十英鎊的預算。第一間商店的藍色外套售價四十五英鎊，太昂貴了。第二間商店有折扣，同樣的外套只需二十八英鎊。小朗先比較品質和價錢，然後選擇第二間商店。他用現金付款，店員給了他一張收據。朋友本來想買一雙鞋，但發現超出預算，所以決定等下次再買。小朗認為購物前應該做好計劃，不要因為有折扣就買不需要的東西。`;
export const readingQuestions:ChoiceQuestion[]=[
 {id:"r1",question:"How much money can Siu-long spend on his coat?",choices:["£30","£45","£28"],correct:0,explanation:"他的預算是三十英鎊。"},
 {id:"r2",question:"Why does he reject the coat in the first shop?",choices:["The colour is wrong","It is over his budget","It is too small"],correct:1,explanation:"第一間商店的外套售價四十五英鎊，比預算高。"},
 {id:"r3",question:"How does he pay for the coat?",choices:["In cash","By credit card","Using a voucher"],correct:0,explanation:"文章指出『他用現金付款』。"},
 {id:"r4",question:"What is the main shopping advice in the text?",choices:["Buy everything on sale","Compare prices and avoid unnecessary purchases","Never shop with friends"],correct:1,explanation:"他先比較價錢，並認為不應因折扣而購買不需要的東西。"},
];
export const listeningClips=[
 {id:"price",title:"Clip A · Asking about a price",topic:"詢問價錢"},
 {id:"discount",title:"Clip B · A special offer",topic:"商店折扣"},
 {id:"payment",title:"Clip C · Paying at the checkout",topic:"付款與收據"},
] as const;
export const listeningQuestions:Array<ChoiceQuestion&{clipId:string}>=[
 {id:"l1",clipId:"price",question:"What item does the customer ask about?",choices:["A jacket","A bag","A book"],correct:1,explanation:"顧客問『呢個書包幾錢？』。"},
 {id:"l2",clipId:"price",question:"How much does the bag cost?",choices:["£15","£25","£35"],correct:1,explanation:"店員說『二十五英鎊』。"},
 {id:"l3",clipId:"discount",question:"What is on sale?",choices:["Shoes","School bags","Coats"],correct:0,explanation:"店員提到『運動鞋今日有折扣』。"},
 {id:"l4",clipId:"discount",question:"What is the discounted price?",choices:["£18","£20","£24"],correct:1,explanation:"減價後只需要二十英鎊。"},
 {id:"l5",clipId:"payment",question:"How will the customer pay?",choices:["By cash","By card","By phone"],correct:0,explanation:"顧客說『我用現金付款』。"},
 {id:"l6",clipId:"payment",question:"What does the customer ask for?",choices:["A bag","A receipt","A refund"],correct:1,explanation:"顧客問『可唔可以畀張收據我？』。"},
];
export const translationTasks=[
 {id:"tr1",direction:"English → Traditional Chinese",prompt:"I have a budget of thirty pounds and want to compare prices before buying a jacket.",sample:"我的預算是三十英鎊，買外套之前我想先比較價錢。",note:"Accept equivalent written Traditional Chinese expressing budget, amount, comparison and planned purchase."},
 {id:"tr2",direction:"Traditional Chinese → English",prompt:"這間商店的鞋子有折扣，但我還是需要考慮價錢。",sample:"The shoes in this shop are discounted, but I still need to consider the price.",note:"Allow natural English preserving discount, consideration and price."},
] as const;
export const speakingPrompts=[
 {id:"role",label:"Role play",english:"You are in a shop. Ask the shop assistant the price of a bag, then explain how you would like to pay. Answer in Cantonese.",sample:"唔該，請問呢個袋幾錢？如果價錢啱，我想用現金付款。"},
 {id:"picture",label:"Picture-based practice",english:"Look at the shopping illustration. In Cantonese describe TWO things you can clearly see, then give ONE opinion about shopping or spending money.",sample:"我見到一個女仔喺商店攞住一張紙，旁邊有一個男仔攞住購物袋。我覺得買嘢之前比較價錢好重要。"},
 {id:"conversation",label:"Conversation",english:"Say where you usually shop, how you decide whether something is too expensive, and one way to manage your budget. Answer in Cantonese.",sample:"我通常會去市中心購物。買嘢之前我會比較價錢，如果太貴就唔買，仲會定一個預算。"},
] as const;
export const pictureVisibleFacts=[
 "A drawing shows a clothing shop with racks of clothing",
 "Two young people are facing one another in the shop",
 "A girl on the left is holding a small printed list or leaflet",
 "A boy on the right is holding shopping bags",
 "Clothes and displays are visible in the background",
 "A shop assistant stands behind a counter in the background",
] as const;
export const pictureNotSupported=[
 "The picture does not prove that a purchase or payment has taken place",
 "Do not invent exact item prices, discounts, names, family relationships or budget",
 "Do not claim the students are paying with cash or receiving a receipt",
 "Do not infer that an item is affordable merely because of a sale sign",
] as const;
export const pictureGrading=`Week 6 Shopping & Money. The AI receives this verified fact list, not the image itself. VISIBLE: ${pictureVisibleFacts.join('; ')}. UNSUPPORTED: ${pictureNotSupported.join('; ')}. Student describes TWO visible facts and expresses ONE shopping-related opinion in Cantonese. Credit any truthful alternatives; do not insist on sample wording. If Azure transcription is uncertain, invite parent review. Score content 0–4, language 0–4, clarity 0–2; practice-only, not official GCSE marks.`;
export const writingTask={title:"Shopping & Money — original handwriting task",instruction:"Write 4–5 complete sentences in Traditional Chinese about a shopping trip or purchase.",requirements:["Say where you went shopping and what you wanted to buy.","Mention a price or budget and explain your choice.","Give one opinion about spending money wisely."],guidance:"Try to use at least four Week 6 words. Write by hand and upload a clear photograph; this is not an official GCSE examination."} as const;
export const worksheetReferences=["Original Shopping & Money tasks developing GCSE Chinese 1CN0 communication skills; not official Pearson examination questions","Practise Traditional Chinese reading/writing, Cantonese listening/speaking, and price comparison or budgeting in everyday situations"];
export const SECTIONS=["Vocabulary & Reading","Listening & Speaking","Recall & Translation","Handwriting & Feedback"] as const;
export type ProgressState={vocabSeen:string[];reading:Record<string,number>;listening:Record<string,number>;readingSubmitted:string[];listeningSubmitted:string[];dictation:Record<string,"correct"|"review">;translationChecked:string[];speakingPractised:string[];sessionsCompleted:number[]};
export const emptyProgress=():ProgressState=>({vocabSeen:[],reading:{},listening:{},readingSubmitted:[],listeningSubmitted:[],dictation:{},translationChecked:[],speakingPractised:[],sessionsCompleted:[]});
export const correctness=(answers:Record<string,number>,questions:readonly ChoiceQuestion[])=>questions.filter(q=>Object.prototype.hasOwnProperty.call(answers,q.id)&&answers[q.id]===q.correct).length;
