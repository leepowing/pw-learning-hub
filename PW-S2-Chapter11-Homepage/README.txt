S2 Chapter 11 — Chapter Homepage

安裝：將 ZIP 解壓到專案外，例如 Downloads\PW-S2-Chapter11-Homepage。
在該資料夾開啟 PowerShell，執行：
node .\install.cjs.txt "E:\Projects\pw-learning-hub" --check
確認 Preflight passed 後：
node .\install.cjs.txt "E:\Projects\pw-learning-hub"
cd E:\Projects\pw-learning-hub
npm run build
npm run dev

瀏覽 http://localhost:3000/maths/s2/chapter-11
測試三組三角形、小測選項、手機版和返回 S2。

內容：新增 Chapter 11 首頁和共用 SVG 元件；只替換 S2 列表的可用章節陣列與提示文字，其餘自訂內容保留。
所有原始碼以 .txt 包裝。安裝器使用現有 Node.js，不需額外套件。
偵測 app 或 src/app；若兩者都有目標列表，停止。
新增檔案已存在而內容不同、或列表指定位置不符合預期，停止，不覆蓋。
備份存放專案 _pw-backups/chapter11-時間/，程式碼備份亦以 .txt 結尾。
還原：停止開發伺服器，按備份 manifest.json 找到修改清單。將備份 page.tsx.txt 複製回原列表 page.tsx。新增檔案只有在確認未經後續修改時才移除。

本次沒有修改 Flashcards、Supabase、Smart Review 或任何學習進度。
Lessons、Checkpoint 和 Flashcards 顯示 Coming soon；沒有連到不存在的頁面。
Reference 的兩個定理縮寫來自提供的 Chapter Summary；其他計算步驟標示是解釋文字。

驗證：安裝器於臨時專案通過 preflight、新增、備份、重複安裝與自訂內容衝突測試。
三組 SVG 已按相同座標及圓弧公式另行渲染並目視檢查（見 geometry-review.png）。
本環境未完成 React/Next.js 編譯及整頁瀏覽器測試；需執行本機 npm run build。
Vercel 部署、登入流程及實際 Supabase 儲存尚未驗證。
