from pathlib import Path
import re, sys
ROOT=Path(__file__).resolve().parents[1]
CHANGES={
 'data/chineseGcse/week1.ts':(
  r'\{id:"picture",\s*label:"Picture-based practice",\s*english:"[^"]+",\s*sample:"[^"]+"\}',
  '{id:"picture", label:"Picture-based practice", english:"Look at the classroom picture. Describe two things you can clearly see and give one opinion about the classroom in Cantonese.", sample:"我見到一位老師同兩個學生，老師正喺度講解，旁邊有書架。我覺得呢個課室好適合學習。"}'
 ),
 'data/chineseGcse/week2.ts':(
  r'\{id:"picture",\s*label:"Picture-based practice",\s*english:"[^"]+",\s*sample:"[^"]+"\}',
  '{id:"picture",label:"Picture-based practice",english:"Look at the daily-life picture. Describe two things you can see and give one opinion about preparing for study. Answer in Cantonese.",sample:"我見到一個學生坐喺書枱前面寫字，枱上面有打開咗嘅書。我覺得做功課之前準備好書同文具好重要。"}'
 )
}
API_HINTS={
 'app/api/chinese-gcse/learning/speaking/route.ts': 'For the PICTURE task, the image shows a TEACHER talking with TWO students, a bookshelf, clock, and window; students may describe any visible facts. Do not require the reference sample or invent unseen actions. Give content credit for any accurate details and a relevant opinion.',
 'app/api/chinese-gcse/learning/week2/speaking/route.ts': 'For the PICTURE task, the image shows ONE student seated at a desk WRITING in an open book, with other books, stationery, a wall clock and bulletin board. No schoolbag is visible; the student is not visibly looking at the clock. Give content credit for any accurate visual details plus an opinion; never require unseen actions or exact sample wording.'
}

def main():
 changes=[]
 for rel,(pat,replacement) in CHANGES.items():
  f=ROOT/rel
  if not f.is_file(): sys.exit(f'MISSING: {f}')
  s=f.read_text(encoding='utf-8')
  s2,num=re.subn(pat,lambda _:replacement,s,count=1)
  if num!=1: sys.exit(f'Pattern not unique for {rel}; no files written')
  changes.append((f,s2,rel))
 for rel,hint in API_HINTS.items():
  f=ROOT/rel
  if not f.is_file(): sys.exit(f'MISSING: {f}')
  s=f.read_text(encoding='utf-8')
  anchor='Azure zh-HK speech-to-text transcript'
  if anchor not in s: sys.exit(f'Cannot find grading prompt in {rel}; no files written')
  if 'For the PICTURE task, the image shows' in s:
   print('Skipping previously patched API:',rel);continue
  # Only add visual rubric to existing AI prompt; applies to picture task, not role/conversation.
  s2=s.replace(' Assess ONLY communicated content,',f' ${{taskId === "picture" ? {hint!r} : ""}} Assess ONLY communicated content,',1)
  changes.append((f,s2,rel))
 for f,text,rel in changes:
  f.write_text(text,encoding='utf-8')
  print('Updated:',rel)
 print('Done. Verify with npm run build.')
if __name__=='__main__':main()
