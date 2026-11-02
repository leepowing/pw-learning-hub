# -*- coding: utf-8 -*-
from pathlib import Path
root=Path(__file__).resolve().parent.parent
p=root/'app/chinese-gcse/page.tsx'
if not p.exists(): raise SystemExit('ERROR: Missing app/chinese-gcse/page.tsx')
s=p.read_text(encoding='utf-8')
if '/chinese-gcse/learning/week10' in s:
 print('ALREADY_APPLIED: Week 10 entrance present');raise SystemExit(0)
if '/chinese-gcse/learning/week9' not in s:
 raise SystemExit('ERROR: Week 9 entrance missing; do not overwrite latest homepage')
marker='        <section className="hub-section" aria-label="歷史診斷評估">'
if s.count(marker)!=1:raise SystemExit('ERROR: Diagnostic anchor missing or duplicated; perform manual diff')
card='''          <section className="hub-card" style={{marginTop:16}}>
            <span className="hub-icon">10</span>
            <h2>Week 10 — Environment & Community（環境與社區）</h2>
            <p>10 個新詞 + 6 張舊詞翻卡 · Reading / Cantonese Listening &amp; Speaking / Translation / Handwriting</p>
            <Link className="hub-action" href={page.data.role === "parent" ? "/chinese-gcse/learning/week10/parent" : "/chinese-gcse/learning/week10"}>
              <span>{page.data.role === "parent" ? "查看 Week 10 家長進度" : "進入 Week 10 課程"}</span><span aria-hidden="true">→</span>
            </Link>
          </section>

'''
p.write_text(s.replace(marker,card+marker),encoding='utf-8')
print('CHANGED: Week 10 dashboard card inserted; previous weeks preserved')
