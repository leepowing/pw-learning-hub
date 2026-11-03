# -*- coding: utf-8 -*-
from pathlib import Path
root=Path(__file__).resolve().parent.parent
p=root/'app/chinese-gcse/page.tsx'
if not p.exists(): raise SystemExit('ERROR: Missing app/chinese-gcse/page.tsx')
s=p.read_text(encoding='utf-8')
if '/chinese-gcse/learning/week12' in s:
 print('ALREADY_APPLIED: Week 12 entrance present');raise SystemExit(0)
if '/chinese-gcse/learning/week11' not in s:
 raise SystemExit('ERROR: Week 11 entrance missing; do not overwrite latest homepage')
marker='        <section className="hub-section" aria-label="歷史診斷評估">'
if s.count(marker)!=1:raise SystemExit('ERROR: Diagnostic anchor missing or duplicated; perform manual diff')
card='''          <section className="hub-card" style={{marginTop:16}}>
            <span className="hub-icon">11</span>
            <h2>Week 12 — GCSE Integrated Practice（GCSE 綜合應用）</h2>
            <p>10 個新詞 + 6 張舊詞翻卡 · Reading / Cantonese Listening &amp; Speaking / Translation / Handwriting</p>
            <Link className="hub-action" href={page.data.role === "parent" ? "/chinese-gcse/learning/week12/parent" : "/chinese-gcse/learning/week12"}>
              <span>{page.data.role === "parent" ? "查看 Week 12 家長進度" : "進入 Week 12 課程"}</span><span aria-hidden="true">→</span>
            </Link>
          </section>

'''
p.write_text(s.replace(marker,card+marker),encoding='utf-8')
print('CHANGED: Week 12 dashboard card inserted; previous weeks preserved')
