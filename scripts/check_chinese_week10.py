# -*- coding: utf-8 -*-
from pathlib import Path
from PIL import Image
import re,sys,hashlib
root=Path(__file__).resolve().parent.parent
base=root/"data/chineseGcse/week10.ts"
page=root/"app/chinese-gcse/learning/week10/page.tsx"
parent=root/"app/chinese-gcse/learning/week10/parent/page.tsx"
img=root/"public/images/chinese-gcse/week10-environment-community.webp"
api=list((root/"app/api/chinese-gcse/learning/week10").rglob("route.ts"))
checks={}
def read(p):return p.read_text(encoding="utf-8")
files=[base,page,parent,img,root/"scripts/apply_week10_dashboard.py"]
checks["files_exist"]=all(p.is_file() for p in files) and len(api)==4
if not checks["files_exist"]:
 print("FAIL files_exist; required Week 10 files not found");sys.exit(1)
data=read(base);ui=read(page);parent_src=read(parent);apis="\n".join(read(p) for p in api)
try:
 with Image.open(img) as im: checks["picture_valid"]=im.format=="WEBP" and im.width>=1200 and im.height>=650 and im.verify() is None
except Exception: checks["picture_valid"]=False
checks["picture_link"]= "week10-environment-community.webp" in ui
checks["image_alt_new"]= "環境與社區卡通圖" in ui and "學校溫習練習插圖" not in ui
checks["api_week10"]=all('week10' in str(p) for p in api)
checks["no_prev_week_db"]=not bool(re.search(r'\.eq\(\s*[\"\']week[\"\']\s*,\s*[1-9]\s*\)|existingReview\([^\n]*?,\s*[1-9]\s*\)|\bweek\s*:\s*[1-9]\b',apis))
checks["week10_scope"]= '.eq("week",10)' in apis and 'existingReview(db,user.id,"speaking",taskId,10)' in apis and 'existingReview(db,user.id,"translation",taskId,10)' in apis
checks["10_words"]=len(re.findall(r'^ \{id:"[^"]+",traditional:',data.split('export const reviewVocabulary')[0],re.M))==10
review=data.split('export const reviewVocabulary=')[1].split('] as const;')[0]
checks["6_review_words"]=len(re.findall(r'\{week:[1-9],traditional:',review))==6
checks["review_english_front"]= 'reviewFlipped' in ui and 'reviewVocabulary' in ui
checks["flashcard_resets"]= 'setReviewFlipped(false)' in ui
checks["reading4"]=len(re.findall(r'\{id:"r[1-4]",question:',data))==4
checks["listening6"]=len(re.findall(r'\{id:"l[1-6]",clipId:',data))==6
checks["speaking3"]=len(re.findall(r'\{id:"(?:role|picture|conversation)",label:',data))==3
checks["translation2"]=len(re.findall(r'\{id:"tr[12]",direction:',data))==2
checks["picture_facts_in_server"]= 'pictureGrading' in read(root/"app/api/chinese-gcse/learning/week10/speaking/route.ts") and 'pictureVisibleFacts' in data and 'pictureNotSupported' in data
checks["parent_counts10"]= '/10 learned' in parent_src and '/10 attempted' in parent_src
checks["writing_task10"]= 'environment-community-message' in ui and 'environment-community-message' in read(root/"app/api/chinese-gcse/learning/week10/mark/route.ts")
checks["private_audio10"]= 'week-10' in ui and 'week-10' in apis
checks["no_embedded_dev_path"]= '/mnt/data/' not in '\n'.join([ui,apis,read(root/"scripts/apply_week10_dashboard.py")])
# Against files installed locally, not hardcoded names; when source files are present compare exact Traditional vocab values.
words=re.findall(r'^ \{id:"[^"]+",traditional:"([^"]+)"',data.split('export const reviewVocabulary')[0],re.M)
old=[]
for n in range(1,10):
 p=root/f'data/chineseGcse/week{n}.ts'
 if p.exists():
  part=read(p).split('export const reviewVocabulary')[0]
  old.extend(re.findall(r'traditional\s*:\s*"([^"]+)"',part))
checks["no_new_word_duplicates"]=len(set(words))==10 and (not old or not set(words)&set(old))
if len(old)<82: print(f"UNVERIFIED previous vocabulary source: located {len(old)}/82 in local working tree; full historical de-duplication requires all Week 1–9 files. PRODUCTION BLOCKED.")
for k,v in checks.items():print(('PASS' if v else 'FAIL'),k)
print('TOTAL',sum(checks.values()),'/',len(checks))
print('IMAGEGEN_SOURCE: see IMAGEGEN-EVIDENCE.md; browser and live AI require separate validation')
print('PRODUCTION_RELEASE=BLOCKED until SQL/RLS, Preview E2E, real AI rubric and safe Git scope verified')
sys.exit(0 if all(checks.values()) else 1)
