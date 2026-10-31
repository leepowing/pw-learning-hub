from pathlib import Path
import re,sys
from PIL import Image
r=Path(__file__).resolve().parents[1]
p=r/'app/chinese-gcse/learning/week5/page.tsx'
data=(r/'data/chineseGcse/week5.ts').read_text()
page=p.read_text()
api=r/'app/api/chinese-gcse/learning/week5'
checks={
 'picture_exists': (r/'public/images/chinese-gcse/week5-food-health.webp').exists(),
 'picture_valid': Image.open(r/'public/images/chinese-gcse/week5-food-health.webp').format=='WEBP',
 'picture_link_correct': 'src="/images/chinese-gcse/week5-food-health.webp"' in page,
 'no_old_hero': all(w not in page for w in ['School Life <','家庭與朋友插圖','week5-family.webp']),
 'week5_progress_only': 'eq("week",5)' in page and 'week:5' in page,
 '10_new_words':len(re.findall(r'\{id:"[^"]+",traditional:',data.split('export const vocabulary=')[1].split('] as const;')[0]))==10,
 '6_review_words':len(re.findall(r'\{week:\d+,traditional:',data.split('export const reviewVocabulary=')[1].split('] as const;')[0]))==6,
 'reading_4':len(re.findall(r'\{id:"r\d",question:',data))==4,
 'listening_6':len(re.findall(r'\{id:"l\d",clipId:',data))==6,
 'speaking_3':len(re.findall(r'\{id:"(role|picture|conversation)",label:',data))==3,
 'translation_2':len(re.findall(r'\{id:"tr\d",direction:',data))==2,
 'dictation_10_gate':'Object.keys(progress.dictation).length===10' in page,
 'new_words_completion_10':'progress.vocabSeen.length===10' in page,
 'review_visible':'reviewVocabulary.map' in page,
 'ai_picture_facts':'pictureGrading' in (api/'speaking/route.ts').read_text() and 'pictureVisibleFacts' in data,
 'ai_cache_scoped_5':all('taskId,5)' in (api/x/'route.ts').read_text() and 'taskId,3)' not in (api/x/'route.ts').read_text() for x in ['speaking','translation']),
 'writing_scoped_5':'eq("week",5)' in (api/'mark/route.ts').read_text(),
 'all_api_routes':all((api/x/'route.ts').exists() for x in ['listening','speaking','translation','mark']),
 'parent_isolated':'eq("week",5)' in (r/'app/chinese-gcse/learning/week5/parent/page.tsx').read_text(),
 'week5_on_dashboard':'/chinese-gcse/learning/week5' in (r/'app/chinese-gcse/page.tsx').read_text(),
 'audio_migration_week5':"'week-05'" in (r/'supabase/chinese_stage3_week5_migration.sql').read_text(),
}
for k,v in checks.items(): print(('PASS' if v else 'FAIL')+'  '+k)
print(f"TOTAL {sum(checks.values())}/{len(checks)}")
sys.exit(0 if all(checks.values()) else 1)
