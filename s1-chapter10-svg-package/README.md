# S1 Chapter 10 — SVG geometry update

涵蓋首頁、Section 1–4、Checkpoint、17 種 Flashcard 圖解。
共用 Chapter10Geometry.tsx 提供幾何定位、真正 SVG 圓弧、垂直等邊刻痕、
沿邊外側定位的數值、外移頂點標籤及按比例計算的相似三角形。
課本風格：深色細線、淺色背景、斜體頂點、紫色角標、綠色等邊/平行標記。
文字平行符號統一為 //；線上的箭頭仍代表已知平行線。

## 安裝
1. 儲存 VS Code 所有檔案。
2. 把整個 s1-chapter10-svg-package 放在 pw-learning-hub 根目錄，與 package.json 同層。
3. 在根目錄 Terminal 執行：

   node s1-chapter10-svg-package/install.cjs
   npm run build

安裝程式先檢查所有接駁位置，再備份及修改。
原檔在 chapter10-svg-backup-時間戳 內（.bak）。
重複執行不會重複安裝，支援 Windows CRLF。
可先加 --dry-run 只檢查。

如顯示 Current diagram differs 或 Missing，請提供提示及相關檔案，讓修改配合你的版本。
不要用 preview 檔案整份覆蓋目前頁面。preview 僅供對照。
所有 .txt 請保留副檔名，避免未安裝的 TypeScript 被專案編譯。

## 修改範圍
- 新增 components/maths/Chapter10Geometry.tsx
- 更新 components/maths/Chapter10FlashcardDiagram.tsx
- 更新 app/maths/s1/chapter-10/page.tsx
- 更新該章四節及 checkpoint/page.tsx 中的繪圖函數
- 保留頁面文字、導航、Checkpoint 題目/計分、卡片 ID、FormulaFlashcards、
  studentStorage.ts 及 supabase.ts；無需執行 SQL。

## 圖像修正
- 相似三角形由同一組座標縮放，比例與數字一致。
- 3:9 的示例確實放大 3 倍；3-4-5 / 6-8-10 圖符合邊長。
- 40° 示例使用 sin/cos 計算。
- DE 的端點由 AB、AC 上相同比例插值，確保 DE // BC。
- ASA、AAS、SAS 只標出相應已知條件。
- 小螢幕可水平捲動，保持標籤可讀。

## 已檢查
安裝、重複安裝、strict TypeScript、20 種共用圖例 SVG 渲染、圓弧及相似比。
已目視檢查圖像；preview/geometry-gallery.png 是圖例總覽。
未在你的完整 Next.js 專案執行 production build；安裝後請執行 npm run build，
並打開首頁、四節、Checkpoint 及 Flashcards 檢查。
