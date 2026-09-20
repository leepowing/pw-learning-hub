PW Learning Hub — S2 Chapter 11 Checkpoint

內容：20 題（11.1–11.5 每節 4 題）、四幅共用 SVG 幾何圖、每題 Working / Reference 解析、總分和各節成績、課程重溫連結、重新作答。
全部教學內容為英文。題目為原創，按已提供的 Chapter Summary 範圍編寫。
書本 Reference 使用 Pyth. theorem 及 converse of Pyth. theorem；其餘項目是解題說明，不冒稱書本縮寫。
幾何位置由邊長計算；逆定理題沒有預先標直角。本次沒有需要圓弧或平行符號的題目。
答案只在頁面暫存，重新載入即清空；不連接 Supabase、不計 XP、不改 Flashcards 或舊進度。

安裝前：先完成已交付的 Section 11.5 安裝。停止本專案所有 dev server（各 Terminal 按 Ctrl+C）。
解壓至 E:\Projects\pw-learning-hub\PW-S2-Chapter11-Checkpoint
此資料夾應直接包含 install.cjs.txt 及 payload。

PowerShell 預檢：
cd "E:\Projects\pw-learning-hub\PW-S2-Chapter11-Checkpoint"
node .\install.cjs.txt "E:\Projects\pw-learning-hub" --check

看到 TypeScript syntax check passed 和 Preflight passed 後才安裝：
node .\install.cjs.txt "E:\Projects\pw-learning-hub"
cd "E:\Projects\pw-learning-hub"
npm run build

Build 成功後：
npm run dev -- --port 3100

保持此 Terminal 運行，開啟：
http://localhost:3100/maths/s2/chapter-11/checkpoint

安裝器修改兩個已知版本檔案：Chapter 11 首頁、Section 11.5 頁面（加入 Checkpoint 入口）。
新增 checkpoint/page.tsx、checkpoint/checkpoint-data.ts、checkpoint/CheckpointTriangle.tsx。
支援 app 及 src/app。所有安裝包程式碼以 .txt 結尾，只有正式安裝位置使用 .ts/.tsx。
安裝前比對已交付 Section 11.5 的完整基準版本（容許 BOM 和換行差異）。
若發現自訂內容、未知版本或不同的既有 Checkpoint，停止且不覆蓋。請提供 STOP 指定檔案的最新內容，以便整合。
安裝器用專案本機 TypeScript 解析所有候選檔案，語法不通過則不寫入。這不代替完整 Build。

備份：專案內 _pw-backups/checkpoint11-時間-識別碼。
原始檔備份以 .txt 結尾，manifest.json 記錄新建/修改檔案和雜湊。
還原：先停止 dev server，確認沒有後續修改；將備份中的兩個 page.tsx.txt 複製回 manifest 指定位置並改回 page.tsx。僅在確定沒有後續自訂內容時，移除本次新增的三個 checkpoint 檔案。

安裝後檢查：
1. 從 Chapter 11 首頁和 Section 11.5 進入 Checkpoint。
2. 新一輪顯示 Answered 0 of 20；未完成提交時提示並跳到未作答題。
3. 提交前可以修改選项；提交後顯示分數和 20 個答案解析。
4. Start a new attempt 清除所有答案和舊分數。
5. 檢查手機/平板排版、鍵盤操作及各節重溫連結。

測試範圍及限制見 TEST-RESULTS.txt。你本機 Build、Vercel、Supabase 尚未確認。
