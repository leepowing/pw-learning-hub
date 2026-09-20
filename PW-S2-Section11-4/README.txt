S2 Section 11.4 — Rational Numbers and Irrational Numbers

先安裝 Chapter 11 首頁和 Sections 11.1–11.3。
解壓 ZIP 至 E:\Projects\pw-learning-hub\PW-S2-Section11-4
該資料夾應直接包含 install.cjs.txt 和 payload。

先在本專案執行 npm run dev 的 Terminal 按 Ctrl+C 停止伺服器。
執行預檢：
cd "E:\Projects\pw-learning-hub\PW-S2-Section11-4"
node .\install.cjs.txt "E:\Projects\pw-learning-hub" --check

只有顯示 Preflight passed 後才執行：
node .\install.cjs.txt "E:\Projects\pw-learning-hub"
cd "E:\Projects\pw-learning-hub"
npm run build

Build 成功後：
npm run dev -- --port 3100

保持 Terminal 運行，瀏覽：
http://localhost:3100/maths/s2/chapter-11/rational-and-irrational-numbers

遇到 STOP、Build 失敗或 Another next dev server is already running，請停止並貼上訊息。
本包不自動處理之前回報的 .next 型別檔案及重複 dev server 問題。

變更範圍：
新增 11.4 頁面、S2Chapter11RealNumbers.tsx 共用 SVG 元件。
修改 Chapter 11 首頁狀態及 11.4 入口；修改 11.3 下一節連結。
預檢核對兩個既有頁面的完整已知版本（容許 BOM／換行差異）。如有自訂內容，全部停止，請提供最新檔案整合。
備份位置：_pw-backups/section11-4-時間-識別碼；原始碼備份以 .txt 結尾。
manifest.json 記錄新增、修改檔案及前後雜湊。
重複安裝相同版本不重寫。
還原前停止 dev server 並確認未經後續修改，再將兩個備份頁面還原到原路徑；新增檔案只在確認未經後續修改時移除。

內容：有理數定義、整數／分數／小數、循環小數轉分數、無理數分類、根式及準確值／近似值。
8 個分類例子、15 題練習、2 款 SVG（數系分類、√2 數線圓弧構圖）。
內容為原創講解與例題，並非課本逐頁轉錄。
Pyth. theorem 採用提供的 Chapter Summary；其他 Reference 為解題理由，不冒稱課本縮寫。
未加入未提供課本頁面的 √2 無理數證明。
本節無平行線標記需求，不加入裝飾符號。

分類選擇切換會清除前一結果。每題每輪只接受一次作答。Restart 清空答案，重新載入亦清空。
不改 Supabase、XP、Flashcards、Smart Review 或舊進度。

手動測試：
1. 首頁 11.4、11.3 下一節、返回連結。
2. 8 個分類例子的 Reveal classification。
3. 15 題練習計數、解釋、Restart。
4. 手機／桌面圖解、表格及按鈕。

本機 Build、Vercel 部署、實際頁面操作及 Supabase 儲存仍需各自確認。
