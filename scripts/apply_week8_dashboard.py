# -*- coding: utf-8 -*-
"""Safe, non-destructive dashboard insert for Week 8; verify resulting diff before deployment."""
from pathlib import Path
root=Path(__file__).resolve().parent.parent
p=root/'app/chinese-gcse/page.tsx'
if not p.is_file():raise SystemExit('ERROR: Cannot find app/chinese-gcse/page.tsx')
s=p.read_text(encoding='utf-8')
if '/chinese-gcse/learning/week8' in s:
 print('ALREADY_APPLIED: Week 8 entrance exists');raise SystemExit(0)
if '/chinese-gcse/learning/week7' not in s:
 raise SystemExit('ERROR: Week 7 entrance missing from latest homepage; do not overwrite')
marker='        <section className="hub-section" aria-label="歷史診斷評估">'
if s.count(marker)!=1:raise SystemExit('ERROR: Historical diagnostic section anchor missing or ambiguous; merge manually')
card='''          <section className="hub-card" style={{marginTop:16}}>
            <span className="hub-icon">8</span>
            <h2>Week 8 — Technology &amp; Communication（科技與通訊）</h2>
            <p>10 個新詞 + 6 張舊詞翻卡 · Reading / Cantonese Listening &amp; Speaking / Translation / Handwriting</p>
            <Link className="hub-action" href={page.data.role === "parent" ? "/chinese-gcse/learning/week8/parent" : "/chinese-gcse/learning/week8"}>
              <span>{page.data.role === "parent" ? "查看 Week 8 家長進度" : "進入 Week 8 課程"}</span><span aria-hidden="true">→</span>
            </Link>
          </section>

'''
p.write_text(s.replace(marker,card+marker),encoding='utf-8')
print('CHANGED: inserted Week 8 card before diagnostic section; preserved existing Weeks 1–7 and student records')
