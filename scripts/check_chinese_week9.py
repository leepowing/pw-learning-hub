# -*- coding: utf-8 -*-
"""Week 9 source-only checks. Never equate static PASS with production readiness."""
from pathlib import Path
import re, sys,hashlib
from PIL import Image
r=Path(__file__).resolve().parent.parent
api=r/'app/api/chinese-gcse/learning/week9'
paths=[r/'data/chineseGcse/week9.ts',r/'app/chinese-gcse/learning/week9/page.tsx',r/'app/chinese-gcse/learning/week9/parent/page.tsx']+list(api.glob('*/route.ts'))
checks={}
checks['source_files_exist']=len(paths)==7 and all(p.is_file() for p in paths)
if not checks['source_files_exist']:
 print('FAIL source_files_exist');raise SystemExit(2)
data=paths[0].read_text(encoding='utf-8');page=paths[1].read_text(encoding='utf-8')
all_source='\n'.join(p.read_text(encoding='utf-8') for p in paths)
source='\n'.join(p.read_text(encoding='utf-8') for p in api.rglob('*.ts'))
img=r/'public/images/chinese-gcse/week9-school-pressure.webp'
checks['image_exists']=img.is_file()
try:
 with Image.open(img) as im:checks['image_valid']=im.format=='WEBP' and im.width>=1200 and im.height>=600
except:checks['image_valid']=False
checks['image_link']='/images/chinese-gcse/week9-school-pressure.webp' in page
checks['no_old_route']=not any(x in all_source for x in ('/week8/','@/data/chineseGcse/week8','week-08','week8-technology-communication.webp','technology-message'))
checks['no_old_week_db']=not re.search(r'\.eq\(\s*["\']week["\']\s*,\s*[1-8]\s*\)|existingReview\([^\n]*?,\s*[1-8]\s*\)|\bweek\s*:\s*[1-8]\b',source)
checks['cache_9']=all(f'existingReview(db,user.id,"{skill}",taskId,9)' in (api/skill/'route.ts').read_text(encoding='utf-8') for skill in ('speaking','translation'))
checks['10_new_words']=len(re.findall(r'\{id:"[^"]+",traditional:',data.split('export const vocabulary=')[1].split('] as const;')[0]))==10
checks['6_review_words']=len(re.findall(r'\{week:[1-8],traditional:',data.split('export const reviewVocabulary=')[1].split('] as const;')[0]))==6
checks['english_first_flashcards']='reviewFlipped?reviewVocabulary[reviewIndex].traditional:reviewVocabulary[reviewIndex].english' in page
checks['flashcard_resets']='setReviewIndex(i=>i+1);setReviewFlipped(false)' in page and 'setReviewIndex(i=>i-1);setReviewFlipped(false)' in page
checks['reading4']=len(re.findall(r'\{id:"r[1-4]",question:',data))==4
checks['listening6']=len(re.findall(r'\{id:"l[1-6]",clipId:',data))==6
checks['speaking3']=all(f'id:"{x}"' in data for x in ('role','picture','conversation'))
checks['translation2']=all(f'id:"{x}"' in data for x in ('tr1','tr2'))
checks['picture_facts_in_server']='pictureGrading' in (api/'speaking/route.ts').read_text(encoding='utf-8')
checks['parent_week9']=all(x in paths[2].read_text(encoding='utf-8') for x in ('Week 9','.eq("week",9)'))
checks['writing_week9']='school-pressure-message' in (api/'mark/route.ts').read_text(encoding='utf-8')
checks['listening_clip_alignment']=all(f' {x}:"' in (api/'listening/route.ts').read_text(encoding='utf-8') for x in ('schedule','advice','balance'))
for name,ok in checks.items():print(('PASS' if ok else 'FAIL'),name)
print(f'TOTAL {sum(checks.values())}/{len(checks)}')
print('IMAGEGEN_SOURCE: see IMAGEGEN-EVIDENCE.md (source tool generated); visual/browsers require separate validation')
print('PRODUCTION_RELEASE=BLOCKED until SQL_RLS, preview-browser E2E, safe git scope and picture AI tests verified')
sys.exit(0 if all(checks.values()) else 1)
