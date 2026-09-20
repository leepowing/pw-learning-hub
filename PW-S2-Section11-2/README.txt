S2 Section 11.2 — Pythagoras’ Theorem and its Applications

先安裝 Chapter 11 首頁及 Section 11.1。
ZIP 解壓至 E:\Projects\pw-learning-hub\PW-S2-Section11-2
確認該資料夾直接包含 install.cjs.txt 和 payload。

PowerShell：
cd "E:\Projects\pw-learning-hub\PW-S2-Section11-2"
node .\install.cjs.txt "E:\Projects\pw-learning-hub" --check

只有顯示 Preflight passed 才執行：
node .\install.cjs.txt "E:\Projects\pw-learning-hub"
cd "E:\Projects\pw-learning-hub"
npm run build

Build 成功後：
npm run dev
開啟 http://localhost:3000/maths/s2/chapter-11/pythagoras-theorem-and-applications

遇到 STOP 或錯誤，停止並貼上訊息，不強行覆蓋。
首頁或 11.1 頁面若有自訂內容，請提供最新檔案再整合。

變更：
- 首頁：更新可用狀態及啟用 11.2 入口。
- 11.1：啟用下一節連結。
- 新增 11.2 頁面及共用 S2Chapter11Pythagoras 元件。
- 不覆蓋任何現有繪圖元件。
- 不改 Supabase、Flashcards、Smart Review、XP 或舊進度。

所有程式碼在包內以 .txt 結尾。安裝器寫入正式 .tsx 路徑。
預檢核對完整已知版本（允許換行/BOM 差異）；任何衝突都在寫入前停止。
備份在 _pw-backups/section11-2-時間-識別碼，原始碼備份以 .txt 結尾。
manifest.json 記錄目標及前後雜湊。重複安裝相同版本不重寫。
還原前先停止開發伺服器，並確認沒有後續修改；從備份還原兩個頁面。
新增的頁面及元件只在确认没有後續修改時移除。有疑問先詢問。

內容：原創講解、4 組主要應用例題、12 題練習。
SVG：座標/向量定位、自動外置邊長標籤、幾何計算直角記號、正方形外向構建。
本節不用角度圓弧或平行標记；沒有必要的地方不加入裝飾符號。
Pyth. theorem 依提供的 Chapter Summary。其他 Reference 是解題說明，並非冒稱課本縮寫。
三正方形面積圖是定理示意，不是證明。本次未加入課本證明；需提供 11.2 證明頁才能按課本的 Reference 編寫。

手動測試：
1. 首頁 11.2、11.1 下一節、11.2 返回連結。
2. 旋轉三角形；AB 始終為斜邊，C 始終直角。
3. 兩個 slider 由 2 至 6 切換；三正方形面積和標籤。
4. 練習從 0 題開始，答題後顯示解釋、不可重複計分；Restart 清空答案。
5. 手機寬度下閱讀圖解、表格及按鈕。

練習只儲存於 React 頁面狀態。重新載入後清空，不寫入資料庫。
本機 build、Vercel、登入與實際 Supabase 儲存未經本次確認。
