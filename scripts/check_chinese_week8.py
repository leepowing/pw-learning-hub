# -*- coding: utf-8 -*-
"""Week 8 source checks; static checks cannot replace browser, image-provenance or RLS verification."""
from pathlib import Path
import re, sys
from PIL import Image
r=Path(__file__).resolve().parent.parent
base=r/'app/api/chinese-gcse/learning/week8'
files=[r/'data/chineseGcse/week8.ts',r/'app/chinese-gcse/learning/week8/page.tsx',r/'app/chinese-gcse/learning/week8/parent/page.tsx']+list(base.glob('*/route.ts'))
checks={}
checks['files_exist']=len(files)==7 and all(p.is_file() for p in files)
if not checks['files_exist']:print('FAIL missing Week 8 files');sys.exit(2)
source='\n'.join(p.read_text(encoding='utf-8') for p in files)
data=files[0].read_text(encoding='utf-8')
page=files[1].read_text(encoding='utf-8')
img=r/'public/images/chinese-gcse/week8-technology-communication.webp'
checks['picture_exists']=img.is_file()
try:
 with Image.open(img) as x:checks['picture_valid']=x.format=='WEBP' and x.width>=1200 and x.height>=600
except Exception:checks['picture_valid']=False
checks['picture_link']='/images/chinese-gcse/week8-technology-communication.webp' in page
checks['no_stale_previous_week_route']=not any(x in source for x in ('/week7/','@/data/chineseGcse/week7','week-07','travel-message','week7-travel-transport.webp'))
api='\n'.join(p.read_text(encoding='utf-8') for p in base.rglob('*.ts'))
checks['no_cross_week_db']=not re.search(r'(?:\.eq\(\s*["\']week["\']\s*,\s*[1-7]\s*\)|existingReview\([^\n]*?,\s*[1-7]\s*\)|\bweek\s*:\s*[1-7]\b)',api)
checks['8_in_api']=all(f'existingReview(db,user.id,"{skill}",taskId,8)' in (base/skill/'route.ts').read_text(encoding='utf-8') for skill in ('speaking','translation'))
checks['10_new_words']=len(re.findall(r'\{id:"[^"]+",traditional:',data.split('export const vocabulary=')[1].split('] as const;')[0]))==10
checks['6_review_words']=len(re.findall(r'\{week:[1-7],traditional:',data.split('export const reviewVocabulary=')[1].split('] as const;')[0]))==6
checks['english_first_review']='reviewFlipped?reviewVocabulary[reviewIndex].traditional:reviewVocabulary[reviewIndex].english' in page
checks['flashcard_resets']='setReviewIndex(i=>i+1);setReviewFlipped(false)' in page and 'setReviewIndex(i=>i-1);setReviewFlipped(false)' in page
checks['reading4']=len(re.findall(r'\{id:"r[1-4]",question:',data))==4
checks['listening6']=len(re.findall(r'\{id:"l[1-6]",clipId:',data))==6
checks['speaking3']=all(f'id:"{x}"' in data for x in ('role','picture','conversation'))
checks['translations2']=all(f'id:"{x}"' in data for x in ('tr1','tr2'))
checks['picture_facts_to_api']='pictureGrading' in (base/'speaking/route.ts').read_text(encoding='utf-8')
checks['parent_counts10']='/10 learned' in files[2].read_text(encoding='utf-8') and '/10 attempted' in files[2].read_text(encoding='utf-8')
checks['header_week8']='STAGE 3 · WEEK 8' in page
checks['writing_task8']='technology-message' in (base/'mark/route.ts').read_text(encoding='utf-8')
checks['image_alt_no_train']='火車' not in page and '月台' not in page
for name,ok in checks.items():print(('PASS ' if ok else 'FAIL ')+name)
print(f'TOTAL {sum(checks.values())}/{len(checks)}')
print('UNVERIFIED picture_imagegen_provenance: temporary original illustration supplied; replace using ChatGPT ImageGen per v2.9 before Verified Release')
print('UNVERIFIED browser / Azure / OpenAI / Supabase RLS / Vercel')
sys.exit(0 if all(checks.values()) else 1)
