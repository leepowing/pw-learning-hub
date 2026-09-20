S2 Section 11.3 — Converse of Pythagoras’ Theorem and its Applications

先安裝 Chapter 11 首頁、11.1 和 11.2。
解壓 ZIP 到 E:\Projects\pw-learning-hub\PW-S2-Section11-3
確認此資料夾直接有 install.cjs.txt 及 payload。

停止本專案正在執行的 npm run dev（在相應 Terminal 按 Ctrl+C）。
執行：
cd "E:\Projects\pw-learning-hub\PW-S2-Section11-3"
node .\install.cjs.txt "E:\Projects\pw-learning-hub" --check

只有顯示 Preflight passed 後才執行：
node .\install.cjs.txt "E:\Projects\pw-learning-hub"
cd "E:\Projects\pw-learning-hub"
npm run build

Build 成功後執行：
npm run dev -- --port 3100

保持 Terminal 開啟，瀏覽：
http://localhost:3100/maths/s2/chapter-11/converse-of-pythagoras-theorem

任何 STOP、Build 失敗或 Another next dev server is already running，請停止並貼上訊息。
本安裝包不自動解決前次 .next/dev/types/routes.d.ts 或重複開發伺服器問題。

本次新增：11.3 頁面、S2Chapter11Converse.tsx 共用圖解元件。
本次修改：Chapter 11 首頁啟用 11.3；11.2 啟用下一節連結。
完整比對之前交付版本（容許 BOM／換行差異）。自訂內容衝突時，不寫入任何檔案；請提供最新檔案。
寫入前備份到 _pw-backups/section11-3-時間-識別碼；備份原始碼以 .txt 結尾。
manifest.json 記錄新增、修改檔案及前後雜湊值。
還原前停止開發伺服器並確認沒有後續修改，再還原備份兩個頁面；新增檔案只在確認未經後續修改時移除。

內容為原創教學及例題；converse of Pyth. theorem 採用所提供 Chapter Summary 的縮寫。
其他 Reference 是本節解題理由，不冒稱課本用語。未加入課本逐步證明逆定理本身的內容。
5 組例題、12 題即時練習、4 組互動三角形。
SVG 使用三邊長計算座標、向量標籤定位和真正圓弧；直角記號只有檢查成功後顯示。
無需平行標記的圖不添加平行符號。
練習只在本頁暫存；重新載入會清空。Supabase、XP、Flashcards、Smart Review 和舊卡進度不變。

手動驗證：
- 首頁 11.3 及 11.2 下一節連結。
- 選擇四組數字，按 Check the squares；切換時清除前一結果。
- 正例才顯示直角；反例不顯示直角。
- 每題每輪只答一次，Restart 後清零。
- 手機版表格、圖解、按鈕。

Next.js 完整 Build、實際瀏覽器操作、Vercel 及 Supabase 儲存未經本次確認。
