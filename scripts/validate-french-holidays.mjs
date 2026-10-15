import fs from "node:fs";

const read=file=>fs.readFileSync(file,"utf8");
const data=read("data/knowledgeOrganisers/year8FrenchHolidaysAndUniversals.ts");
const types=read("data/knowledgeOrganisers/types.ts");
const registry=read("data/knowledgeOrganisers/registry.ts");
const yearPage=read("app/knowledge-organisers/year8/page.tsx");
const tokenRoute=read("app/api/french/pronunciation-token/route.ts");
const component=read("components/knowledge-organisers/FrenchPronunciationPractice.tsx");
const failures=[];
const check=(condition,message)=>{if(!condition)failures.push(message);};
check([...data.matchAll(/\bp2\(\d+,/g)].length===48,"Page 2 must contain 48 source occurrences.");
check([...data.matchAll(/\bp3\("/g)].length===66,"Page 3 must contain 66 source occurrences.");
check(data.includes('p3("Top 10 opinions",8,"universal-opinions","c’est","I would like"'),"Printed c’est / I would like source occurrence must be retained.");
check(data.includes('p3("Top 10 connectives",9,"connectives-time","où","then"'),"Printed où / then source occurrence must be retained.");
check(data.includes('p3("Top 10 être/avoir",10,"core-verbs","je serai","I will have"'),"Printed je serai / I will have source occurrence must be retained.");
check(data.includes("Possible source mismatch"),"Source mismatch audit notes are missing.");
check(data.includes("pronunciationItems:"),"Trusted pronunciation mapping is missing.");
check(types.includes('"es-ES" | "fr-FR"'),"Pronunciation locale type must include fr-FR without removing es-ES.");
check(registry.includes("year8FrenchHolidaysAndUniversals"),"French organiser is missing from the registry.");
check(yearPage.includes('name: "French"')&&yearPage.includes('available: true'),"French Year 8 entry is missing or unavailable.");
check(tokenRoute.includes("AZURE_SPEECH_KEY")&&tokenRoute.includes("AZURE_SPEECH_REGION"),"Server Speech credentials are missing.");
check(!component.includes("AZURE_SPEECH_KEY"),"Speech key must not appear in client code.");
check(component.includes('speechRecognitionLanguage="fr-FR"'),"Client recognition locale must be fr-FR.");
check(component.includes("Audio is sent to Azure")&&component.includes("is not saved"),"Audio privacy notice is missing.");
check(!data.toLowerCase().includes("prosody")&&!component.toLowerCase().includes("prosody"),"Unsupported scores must not be exposed without locale verification.");
for(const file of ["app/knowledge-organisers/year8/french/page.tsx","app/knowledge-organisers/year8/french/autumn/holidays-and-french-universals/page.tsx","app/knowledge-organisers/year8/french/revision-quiz/page.tsx"]) check(fs.existsSync(file),`Missing route: ${file}`);
if(failures.length){console.error(failures.map(item=>`FAIL: ${item}`).join("\n"));process.exit(1);}
console.log("French validation passed: 114/114 source occurrences; routes, audit, security and fr-FR checks passed.");
