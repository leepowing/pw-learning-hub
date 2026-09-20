Chapter 11 Checkpoint 排版修正

修改作答計數為專屬 class，明確指定自動高度、正常行高和可見內容。
每題以 section / h2 顯示，標題放在卡片內；保留 role=group、aria-labelledby、鍵盤焦點和原有計分。
只更新 app（或 src/app）/maths/s2/chapter-11/checkpoint/page.tsx。
安裝前完整比對本次提供的 page.tsx；有差異即停止。備份以 .txt 放在 _pw-backups/checkpoint11-layout-*。

解壓至 E:\Projects\pw-learning-hub\PW-S2-Chapter11-Checkpoint-Layout-Fix
停止 dev server，PowerShell：
cd "E:\Projects\pw-learning-hub\PW-S2-Chapter11-Checkpoint-Layout-Fix"
node .\install.cjs.txt "E:\Projects\pw-learning-hub" --check

預檢成功後：
node .\install.cjs.txt "E:\Projects\pw-learning-hub"
cd "E:\Projects\pw-learning-hub"
npm run build

Build 成功後：
npm run dev -- --port 3100

開啟 http://localhost:3100/maths/s2/chapter-11/checkpoint
按 Ctrl+F5 重新載入（會清除正在作答的答案）。

已檢查 TSX 語法及安裝器預檢、備份、重複安裝和衝突保護。
未收到 globals.css，尚未核實全域樣式；本機完整 Build 和真實瀏覽器排版仍需確認。
本修正不代表已解決左下角 1 Issue；仍需該訊息的完整內容才能診斷。
