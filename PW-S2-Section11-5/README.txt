S2 Section 11.5 — Operations of Surds

先安裝 Chapter 11 首頁和 Sections 11.1–11.4。
解壓 ZIP 至 E:\Projects\pw-learning-hub\PW-S2-Section11-5
該資料夾直接包含 install.cjs.txt 及 payload。

停止本專案正在執行的 npm run dev（相應 Terminal 按 Ctrl+C）。
執行預檢：
cd "E:\Projects\pw-learning-hub\PW-S2-Section11-5"
node .\install.cjs.txt "E:\Projects\pw-learning-hub" --check

看到 TypeScript syntax check passed 及 Preflight passed 後：
node .\install.cjs.txt "E:\Projects\pw-learning-hub"
cd "E:\Projects\pw-learning-hub"
npm run build

Build 成功後：
npm run dev -- --port 3100

瀏覽 http://localhost:3100/maths/s2/chapter-11/operations-of-surds
保持 Terminal 運行。任何 STOP、Build 失敗或重複 dev server 訊息，請停止並貼上。

本次新增：11.5 頁面、S2Chapter11Surds.tsx。
本次修改：首頁狀態及 11.5 入口；11.4 下一節連結。
11.4 版本核對容許之前兩項已知修正（缺少 }、重複 key）的修正前／後版本。
若仍未套用那兩項修正，本次一併修正；若已修正，保留修正。
其他自訂內容不覆蓋，預檢會停止並要求最新檔案。

預檢使用專案 node_modules 中的 TypeScript 解析所有候選 TSX 檔案，語法有錯就停止，尚未寫入任何檔案。
這是 syntax check，不是完整 type check，也不代替 npm run build。
若缺少 TypeScript，請在專案根目錄 npm install 後再試，安裝器本身不下載依賴。

備份：_pw-backups/section11-5-時間-識別碼。
原始碼備份及安裝包內原始碼均以 .txt 結尾，避免 Next.js 編譯副本。
manifest.json 包含修改與新增檔案及前後雜湊。
重複安裝相同版本不重写。
還原前停止 dev server 並確認没有後續修改，再將備份兩頁還原；新增檔案只有確認没有後續修改時才移除。

內容：根式化簡、同類根式加減、乘除、展開括號、單一根式分母有理化及綜合例題。
6 組例題、16 題練習、10 個可切換正方形分割圖例。
題目使用獨立穩定 ID，答案及分數以 ID 管理。
Reference 為解題規則名稱，不冒稱未提供的課本縮寫或逐頁內容。
本節圖解不涉及角度或平行線，不加入不必要的圓弧或平行標記。

練習答案只在本頁暫存；Restart 或重新載入清空。
不改 Supabase、Flashcards、Smart Review、XP 或舊卡進度。
Checkpoint 和 Flashcards 尚待製作，因此本節只連回已存在的課程頁面。

手動驗證：首頁 11.5、11.4 下一節、10 個圖例、16 題計分與重設、手機版排版。
完整 Next.js Build、實際瀏覽器操作、Vercel 及 Supabase 儲存未在此環境確認。
