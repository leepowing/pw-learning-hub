import {vocabulary as w1} from './week1';
import {vocabulary as w2} from './week2';
import {vocabulary as w3} from './week3';
import {vocabulary as w4} from './week4';
export const targetWords=[...w1,...w2,...w3,...w4];
export const readingText=`小雅和哥哥住在英國。平日放學後，他們通常先完成學校的功課。星期三小雅參加籃球訓練，哥哥則喜歡游泳。上星期，小雅因為中文寫作不太好而感到煩惱，她的朋友鼓勵她每天努力練習。週末他們計劃和家人一起去公園，然後看電影。`;
export const reading=[
 {id:'r1',q:'What do the children normally do after school?',options:['Go swimming','Finish homework','Watch a film']},
 {id:'r2',q:'When does Siu-nga practise basketball?',options:['Wednesday','Saturday','Monday']},
 {id:'r3',q:'Why did Siu-nga feel worried last week?',options:['She missed a train','Her Chinese writing was not very good','Her friend moved away']},
 {id:'r4',q:'What are they planning to do at the weekend?',options:['Go to the park and watch a film','Visit a library only','Go to school']},
];
export const listeningScripts=[
 {id:'a',questions:[{id:'l1',q:'When does the speaker get up?',options:['Six','Seven','Eight']},{id:'l2',q:'What does the speaker do after homework?',options:['Go running','Play basketball','Watch films']}]},
 {id:'b',questions:[{id:'l3',q:'Who goes to the park with the speaker?',options:['Teachers','Parents','Classmates only']},{id:'l4',q:'Which activity does the speaker do with a friend?',options:['Swimming','Watching a film','Basketball']}]},
 {id:'c',questions:[{id:'l5',q:'How many words does the speaker practise daily?',options:['Eight','Ten','Twelve']},{id:'l6',q:'What does the friend encourage?',options:['Giving up','Working hard','Changing school']}]},
];
export const speaking=[
 {id:'role',title:'Role play',q:'A classmate asks about your favourite school subject and your hobby. Answer in Cantonese.',points:['Name a school subject','Name a hobby','Give one reason']},
 {id:'conversation',title:'Conversation',q:'Talk about your daily routine and something you do with family or friends. Answer in Cantonese.',points:['Daily routine','Shared activity','Opinion or reason']},
];
export const translations=[
 {id:'t1',direction:'English → Chinese',q:'I usually do my homework before playing basketball.',example:'我通常先做功課，然後才打籃球。'},
 {id:'t2',direction:'Chinese → English',q:'我的朋友支持我努力改善中文成績。',example:'My friend supports me in working hard to improve my Chinese results.'},
];
export const writing={q:'Write 4–5 sentences in Traditional Chinese about your school, hobbies and family or friends.',points:['Mention a favourite subject','Describe a sport or hobby','Say something about family or friends','Give at least one reason']};
