# -*- coding: utf-8 -*-
from pathlib import Path
import sys,re
root=Path(__file__).resolve().parent.parent
paths=[root/'data/chineseGcse/week12.ts',root/'app/chinese-gcse/learning/week12/page.tsx',root/'app/chinese-gcse/learning/week12/parent/page.tsx']
paths += list((root/'app/api/chinese-gcse/learning/week12').glob('*/route.ts'))
checks={}
checks['files_exist']=len(paths)==7 and all(p.is_file() for p in paths)
if not checks['files_exist']:
 print('FAIL files_exist');sys.exit(1)
source={str(p):p.read_text(encoding='utf-8') for p in paths}
data=source[str(root/'data/chineseGcse/week12.ts')]
api='\n'.join(v for k,v in source.items() if '/api/' in k.replace('\\','/'))
checks['10_new_words']=len(re.findall(r'^ \{id:"[^"]+",traditional:',data.split('export const reviewVocabulary')[0],re.M))==10
checks['6_review_words']=len(re.findall(r'^ \{week:',data.split('export const reviewVocabulary=')[1].split('] as const;')[0],re.M))==6
checks['reading_4']=len(re.findall(r'\{id:"r[1-4]",question:',data))==4
checks['listening_6']=len(re.findall(r'\{id:"l[1-6]",clipId:',data))==6
checks['speaking_3']=len(re.findall(r'\{id:"(?:role|picture|conversation)",label:',data))==3
checks['translation_2']=len(re.findall(r'\{id:"tr[12]",direction:',data))==2
checks['week12_scope']='.eq("week",11)' not in '\n'.join(source.values()) and '.eq("week",12)' in api
checks['no_old_pic']= 'week12-future-plans.webp' not in '\n'.join(source.values())
checks['picture_api_ready']= 'if(taskId==="picture")return' not in api and 'pictureGrading' in api
checks['imagegen_artifact']= (root/'public/images/chinese-gcse/week12-gcse-integrated-practice.webp').is_file()
checks['picture_visible_facts']=len(re.findall(r'^  "',data.split('export const pictureVisibleFacts=')[1].split('] as const;')[0],re.M))>=4
checks['picture_webp_referenced']= 'week12-gcse-integrated-practice.webp' in source[str(root/'app/chinese-gcse/learning/week12/page.tsx')]
for k,v in checks.items():print(('PASS' if v else 'FAIL'),k)
print('TOTAL',sum(checks.values()),'/',len(checks))
print('IMAGE_GATE=REVIEW_REQUIRED: provenance and static alignment documented; live AI evaluation and browser display still unverified')
print('PRODUCTION_RELEASE=BLOCKED until ImageGen, visual and rubric alignment, Build, SQL/RLS, Preview E2E, safe Git scope verified')
sys.exit(0 if all(checks.values()) else 1)
