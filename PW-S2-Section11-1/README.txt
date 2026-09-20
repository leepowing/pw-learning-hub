S2 Chapter 11 · Section 11.1 — Concept of nth Roots

先安裝上一個 Chapter 11 首頁包，再安裝本節。
將本 ZIP 解壓至 E:\Projects\pw-learning-hub\PW-S2-Section11-1
確認該資料夾內直接有 install.cjs.txt 和 payload。

PowerShell：
cd "E:\Projects\pw-learning-hub\PW-S2-Section11-1"
node .\install.cjs.txt "E:\Projects\pw-learning-hub" --check

只有顯示 Preflight passed 才執行：
node .\install.cjs.txt "E:\Projects\pw-learning-hub"
cd "E:\Projects\pw-learning-hub"
npm run build

Build 成功後：
npm run dev
瀏覽 http://localhost:3000/maths/s2/chapter-11/concept-of-nth-roots

STOP 或錯誤時停止，不強行覆蓋，貼上訊息供檢查。
首頁若與之前交付版本不同（換行/BOM 除外），安裝器不修改任何檔案。
請提供最新首頁檔案以整合自訂內容。

變更範圍：
1. 更新 Chapter 11 首頁狀態文字及 11.1 入口。
2. 新增 concept-of-nth-roots/page.tsx。
3. 新增 components/maths/S2Chapter11Roots.tsx。
不修改 S2 列表、舊 SVG 元件、Flashcards、Supabase、Smart Review、XP 或進度。
12 題練習每題每輪只接受一次作答；重新開始會清空本頁答案。重新載入亦會清空。

備份：_pw-backups/section11-1-時間-識別碼。
修改前的首頁備份以 .txt 結尾，避免 Next.js 編譯備份。
manifest.json 列出新增和修改檔案及雜湊值。
還原：先停止開發伺服器，確認檔案沒有後續自訂修改，再把備份首頁複製回原路徑。
新增檔案只在確認沒有後續修改時移除；有疑問請先詢問。

教學使用原創說明與例題，依提供目錄及 Summary 的主題範圍編寫，並非課本逐頁轉錄。
例題 Reference 為本節解題理由，不冒稱課本的 Reference 縮寫。
本節圖解不涉及角度或平行線，所以不加入無意義的圓弧或平行標記。

安裝器可獨立測試，但不能代替本機完整 Next.js build、登入、瀏覽器測試。
Vercel 部署及實際 Supabase 儲存未經本次確認。
