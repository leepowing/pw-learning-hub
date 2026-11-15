import {vocabulary as w9} from './week9';
import {vocabulary as w10} from './week10';
import {vocabulary as w11} from './week11';
import {vocabulary as w12} from './week12';

export const targetWords=[...w9,...w10,...w11,...w12];

export const readingText=`下個月，明欣的學校會舉辦「社區與未來」活動。她和同學一方面要準備考試，另一方面也要設計一個環保攤位。起初，明欣因為功課和活動太多而感到緊張。老師建議她先列出最重要的工作，每天溫習半小時，然後安排短時間休息。到了活動當天，學生把紙張、膠樽和其他垃圾分類回收，並向參觀者介紹節約資源的方法。明欣亦和一位工程師談話，了解環境科技方面的工作。她還未決定將來的職業，但計劃繼續學習科學、改善溝通能力和參加義工活動。她認為只要平衡學習和休息，每個人都可以逐步實現理想，同時幫助社區。`;

export const reading=[
 {id:'r1',q:'Why did Ming-yan initially feel nervous?',options:['She had schoolwork, exams and an activity to prepare','She had lost her train ticket','She did not want to meet an engineer']},
 {id:'r2',q:'What revision advice did the teacher give?',options:['Revise all night without stopping','Prioritise tasks, revise for thirty minutes and take a short break','Stop doing homework until after the event']},
 {id:'r3',q:'What did the students do during the event?',options:['Sold mobile phones','Prepared unhealthy drinks','Sorted rubbish for recycling and explained how to save resources']},
 {id:'r4',q:'What does Ming-yan plan to do for her future?',options:['Choose a career immediately','Continue science, communication skills and volunteering','Avoid all community activities']},
];

export const listeningScripts=[
 {id:'a',questions:[{id:'l1',q:'What is the speaker preparing for?',options:['A Chinese exam','A train journey','A shopping trip']},{id:'l2',q:'How long will the speaker revise each evening?',options:['Ten minutes','Thirty minutes','Two hours']}]},
 {id:'b',questions:[{id:'l3',q:'When will the community clean-up take place?',options:['Saturday morning','Sunday evening','Friday afternoon']},{id:'l4',q:'Where should volunteers meet?',options:['At the railway station','At the park entrance','In the school library']}]},
 {id:'c',questions:[{id:'l5',q:'Which future area interests the speaker?',options:['Cooking','Engineering','Professional sport']},{id:'l6',q:'Which skill does the speaker want to improve?',options:['Driving','Swimming','Communication']}]},
];

export const speaking=[
 {id:'role',title:'Role play',q:'Your friend is worried about school exams. Ask which subject is difficult, then give one practical revision suggestion and explain why rest is useful. Answer in Cantonese.',points:['Ask which subject is difficult','Give a practical revision suggestion','Explain why taking a break can help']},
 {id:'picture',title:'Picture-based task',q:'Look at the school-community environmental action picture. Describe at least three clearly visible details and give your opinion about helping the community. Answer in Cantonese.',points:['Describe three visible details accurately','Mention recycling, volunteering or protecting the environment','Give and explain one personal opinion'],image:'/chinese-gcse/checkpoints/checkpoint3-community.png'},
 {id:'conversation',title:'Conversation',q:'Talk about one future career or study option that interests you. Explain two steps you could take to prepare and give one reason for your choice. Answer in Cantonese.',points:['Name one career or further-study option','Explain two preparation steps','Give a clear reason']},
];

export const translations=[
 {id:'t1',direction:'English → Chinese',q:'Although I feel nervous before exams, I make a revision plan and take regular breaks so that I can improve.',example:'雖然考試前我會感到緊張，但是我會制定溫習計劃，並定時休息，讓自己可以進步。'},
 {id:'t2',direction:'Chinese → English',q:'參加社區環保活動不但可以減少污染，而且可以讓我們得到寶貴的經驗。',example:'Taking part in community environmental activities can not only reduce pollution, but also give us valuable experience.'},
];

export const writing={
 q:'Write 6–8 sentences in Traditional Chinese about a future plan and how you will prepare for it. Include study pressure and one action that could help your school, community or the environment.',
 points:['Describe one future career, course or personal goal','Explain two practical preparation steps','Mention how you manage study pressure or balance revision and rest','Describe one community or environmental action','Use at least two suitable connectors and give clear reasons'],
};
