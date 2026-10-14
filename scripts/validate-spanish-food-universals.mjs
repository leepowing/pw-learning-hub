import fs from "node:fs";

const read=file=>fs.readFileSync(file,"utf8");
const data=read("data/knowledgeOrganisers/year8SpanishFoodAndUniversals.ts");
const types=read("data/knowledgeOrganisers/types.ts");
const tokenRoute=read("app/api/spanish/pronunciation-token/route.ts");
const component=read("components/knowledge-organisers/SpanishPronunciationPractice.tsx");
const failures=[];
const check=(condition,message)=>{if(!condition)failures.push(message);};
check([...data.matchAll(/\bp2\(\d+,/g)].length===50,"Page 2 must contain 50 source occurrences.");
check([...data.matchAll(/\bp3\("/g)].length===66,"Page 3 must contain 66 source occurrences.");
check(data.includes("ceno a la nueve"),"Printed KO form ceno a la nueve must be retained.");
check(data.includes("Printed exactly as the KO"),"Printed-form audit note is missing.");
check(data.includes("pronunciationItems:"),"Trusted pronunciation mapping is missing.");
check(types.includes('locale: "es-ES"'),"Pronunciation locale type must be es-ES.");
check(tokenRoute.includes("AZURE_SPEECH_KEY")&&tokenRoute.includes("AZURE_SPEECH_REGION"),"Server Speech credentials are missing.");
check(!component.includes("AZURE_SPEECH_KEY"),"Speech key must not appear in client code.");
check(component.includes('speechRecognitionLanguage="es-ES"'),"Client recognition locale must be es-ES.");
check(component.includes("Audio is sent to Azure")&&component.includes("is not saved"),"Audio privacy notice is missing.");
check(!data.includes("prosody")&&!component.toLowerCase().includes("prosody"),"Unsupported Spanish prosody must not be exposed.");
for(const file of ["app/knowledge-organisers/year8/spanish/page.tsx","app/knowledge-organisers/year8/spanish/autumn/food-and-spanish-universals/page.tsx","app/knowledge-organisers/year8/spanish/revision-quiz/page.tsx"]) check(fs.existsSync(file),`Missing route: ${file}`);
if(failures.length){console.error(failures.map(item=>`FAIL: ${item}`).join("\n"));process.exit(1);}
console.log("Spanish validation passed: 116/116 source occurrences; routes, security and es-ES checks passed.");
