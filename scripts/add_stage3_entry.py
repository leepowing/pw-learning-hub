"""Safely add a Stage 3 link to existing GCSE Chinese homepage without replacing it.
Run from the root of pw-learning-hub: python scripts/add_stage3_entry.py
"""
from pathlib import Path
from datetime import datetime
p=Path("app/chinese-gcse/page.tsx")
if not p.is_file():
    raise SystemExit("ERROR: run this script from the pw-learning-hub project root")
text=p.read_text(encoding="utf-8")
if 'href="/chinese-gcse/learning"' in text:
    print("Stage 3 entry already exists; no changes made.")
    raise SystemExit(0)
if 'import Link from "next/link"' not in text and "import Link from 'next/link'" not in text:
    raise SystemExit("ERROR: homepage does not import Link. No changes made.")
needle='<div className="chinese-tabs" role="tablist"'
if text.count(needle)!=1:
    raise SystemExit("ERROR: homepage layout changed. No changes made; add link manually.")
new='''  <section style={{background:"#eaf7f2",border:"1px solid #b9ded2",borderRadius:17,padding:"17px 21px",margin:"22px 0"}}>
    <div style={{fontWeight:800,fontSize:19,marginBottom:5}}>Stage 3 · GCSE Chinese Learning</div>
    <p style={{color:"#47685f",fontSize:14,margin:"0 0 12px"}}>Week 1 — School Life · 四份考卷技能訓練 · Greta / Mathis 相同課程</p>
    <Link href="/chinese-gcse/learning" style={{display:"inline-block",background:"#176b5c",color:"white",borderRadius:10,padding:"11px 16px",fontWeight:700,textDecoration:"none"}}>前往 Stage 3 Week 1 →</Link>
  </section>
'''
backup=p.with_name("page.tsx.before-stage3-"+datetime.now().strftime("%Y%m%d-%H%M%S")+".bak")
backup.write_text(text,encoding="utf-8")
p.write_text(text.replace(needle,new+needle,1),encoding="utf-8")
print("Stage 3 entry inserted. Backup:",backup)
