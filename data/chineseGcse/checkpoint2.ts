import {vocabulary as w5} from './week5';
import {vocabulary as w6} from './week6';
import {vocabulary as w7} from './week7';
import {vocabulary as w8} from './week8';

export const targetWords=[...w5,...w6,...w7,...w8];

export const readingText=`暑假前，家晴和哥哥計劃坐火車到另一個城市探望朋友。他們先在網上查車票資料，發現早上九點出發的班次比較便宜。家晴只有六十英鎊預算，所以買票前仔細比較價錢，並把電子收據保存在手機內。出發當天，他們提早到達車站，但顯示板通知火車會遲十五分鐘。哥哥趁等車時買了甜飲品和蛋糕，家晴則選擇水果和水，因為她希望保持均衡飲食。旅途中，他們用手機聯絡朋友，但沒有在公共網絡分享私人資料。家晴認為科技令旅行更方便，不過使用手機時仍要注意安全。`;

export const reading=[
 {id:'r1',q:'Why did Ka-ching compare prices before buying the tickets?',options:['She had a limited budget','She wanted to travel by plane','She had lost her receipt']},
 {id:'r2',q:'What happened at the station?',options:['They missed the train','The train was delayed by fifteen minutes','The platform was closed all day']},
 {id:'r3',q:'What did Ka-ching choose while waiting?',options:['Cake and a sweet drink','Fruit and water','Vegetables and rice']},
 {id:'r4',q:'What online safety precaution did they take?',options:['They turned off every device','They avoided sharing private information on public Wi-Fi','They posted their phone numbers online']},
];

export const listeningScripts=[
 {id:'a',questions:[{id:'l1',q:'What does the speaker want to buy?',options:['A school bag','A train ticket','A mobile phone']},{id:'l2',q:'What is the speaker\'s budget?',options:['Twenty pounds','Thirty pounds','Forty pounds']}]},
 {id:'b',questions:[{id:'l3',q:'Which platform should the passenger use?',options:['Platform two','Platform three','Platform four']},{id:'l4',q:'When will the train depart?',options:['Nine fifteen','Nine thirty','Nine forty-five']}]},
 {id:'c',questions:[{id:'l5',q:'What does the speaker use the phone for?',options:['Ordering unhealthy food','Contacting family and checking travel information','Sharing private information']},{id:'l6',q:'Which healthy choice does the speaker mention?',options:['Drinking water','Skipping breakfast','Eating only cake']}]},
];

export const speaking=[
 {id:'role',title:'Role play',q:'You are planning a day trip. Ask about the ticket price and departure time, then say how you would pay. Answer in Cantonese.',points:['Ask the price','Ask the departure time','Explain a payment choice']},
 {id:'conversation',title:'Conversation',q:'Talk about one healthy choice and one way technology helps you in daily life or travel. Give a reason and one online safety precaution. Answer in Cantonese.',points:['Healthy choice','Useful technology','Reason','Online safety']},
];

export const translations=[
 {id:'t1',direction:'English → Chinese',q:'Before buying the train ticket, I compared prices and checked my budget on my mobile phone.',example:'買火車票之前，我用手機比較價錢，並查看自己的預算。'},
 {id:'t2',direction:'Chinese → English',q:'科技令旅程更加方便，但是我們不應該在網上分享私人資料。',example:'Technology makes journeys more convenient, but we should not share private information online.'},
];

export const writing={
 q:'Write 5–6 sentences in Traditional Chinese about a planned day out or journey. Include food, money and technology.',
 points:['Say where and how you will travel','Mention a price or budget','Describe one food or drink choice','Explain how you will use technology safely','Give at least one reason'],
};
