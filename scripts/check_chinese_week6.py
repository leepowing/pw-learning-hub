# -*- coding: utf-8 -*-
from pathlib import Path
import re,sys
from PIL import Image
r=Path(__file__).resolve().parent.parent
files=[r/'data/chineseGcse/week6.ts',r/'app/chinese-gcse/learning/week6/page.tsx',r/'app/chinese-gcse/learning/week6/parent/page.tsx']
files += list((r/'app/api/chinese-gcse/learning/week6').glob('*/route.ts'))
checks={}
checks['source_files_exist']=len(files)==7 and all(p.is_file() for p in files)
if not checks['source_files_exist']:raise SystemExit('FAIL missing files: '+str(files))
source='\n'.join(p.read_text(encoding='utf-8') for p in files)
data=(r/'data/chineseGcse/week6.ts').read_text(encoding='utf-8')
page=(r/'app/chinese-gcse/learning/week6/page.tsx').read_text(encoding='utf-8')
img=r/'public/images/chinese-gcse/week6-shopping-money.webp'
checks['picture_exists']=img.is_file()
try:
 with Image.open(img) as x:checks['picture_valid']=x.format=='WEBP' and x.width>=600
except Exception:checks['picture_valid']=False
checks['picture_link']='/images/chinese-gcse/week6-shopping-money.webp' in page
checks['no_old_week_route']=not any(x in source for x in ('/week5/','@/data/chineseGcse/week5','week-05','food-health-message'))

api_dir = r / "app/api/chinese-gcse/learning/week6"

old_week_patterns = [
    r'\.eq\(\s*["\']week["\']\s*,\s*5\s*\)',
    r'existingReview\([^\n]*,\s*5\s*\)',
]

api_source = "\n".join(
    p.read_text(encoding="utf-8")
    for p in api_dir.rglob("*.ts")
)

checks["no_old_week_db"] = not any(
    re.search(pattern, api_source)
    for pattern in old_week_patterns
)

checks['10_new_words']=len(re.findall(r'\{id:"[^"]+",traditional:',data.split('export const vocabulary=')[1].split('] as const;')[0]))==10
checks['6_review_words']=len(re.findall(r'\{week:[1-5],traditional:',data.split('export const reviewVocabulary=')[1].split('] as const;')[0]))==6
checks['english_first_review']='reviewFlipped?reviewVocabulary[reviewIndex].traditional:reviewVocabulary[reviewIndex].english' in page
checks['flip_resets']='setReviewIndex(i=>i+1);setReviewFlipped(false)' in page and 'setReviewIndex(i=>i-1);setReviewFlipped(false)' in page
checks['reading4']=len(re.findall(r'\{id:"r[1-4]",question:',data))==4
checks['listening6']=len(re.findall(r'\{id:"l[1-6]",clipId:',data))==6
checks['speaking3']=all(f'id:"{x}"' in data for x in ('role','picture','conversation'))
checks['translations2']=all(f'id:"{x}"' in data for x in ('tr1','tr2'))
checks['picture_facts_to_api']='pictureGrading' in (r/'app/api/chinese-gcse/learning/week6/speaking/route.ts').read_text(encoding='utf-8')
for k,v in checks.items():print(('PASS ' if v else 'FAIL ')+k)
print('TOTAL',sum(checks.values()),'/',len(checks))
sys.exit(0 if all(checks.values()) else 1)
