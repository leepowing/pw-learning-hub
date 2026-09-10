# S1 Chapter 9 SVG update

把整個 s1-chapter9-svg-package 資料夾放在 pw-learning-hub 專案內，與 package.json 同一層。
在專案根目錄 Terminal 執行：

```sh
node s1-chapter9-svg-package/install.cjs --dry-run
node s1-chapter9-svg-package/install.cjs
npm run build
```

安裝前會檢查所有目標檔案，並自動備份至 chapter9-svg-backup-時間戳記。若現有圖解與支援版本不同，會停止而不修改檔案；請提供錯誤指明的檔案以便整合。請勿直接覆蓋整個 lib 或 data 資料夾。

更新首頁圖解、Sections 1–3、Checkpoint 及 10 種 Flashcard 圖解，新增共用 components/maths/Chapter9Geometry.tsx。使用座標及三角計算、SVG A 圓弧、清晰標籤和 // 平行文字。逆定理圖不預先標記平行。

保留現有題目、評分、卡片 ID 及 Supabase 儲存流程。安裝內容以 .txt 保存，避免未安裝套件被 TypeScript 當成專案程式。preview 內為參考原始碼及圖像；使用安裝程式整合。

驗證：29 種 SVG 配置、數值角度與 Checkpoint x 答案、周角總和、逆定理標記；逐圖視覺檢查；隔離測試專案的嚴格 TypeScript 檢查；首次及重複安裝、Windows CRLF、版本不符停止檢查。尚未在你的完整專案執行 Next.js production build，請安裝後執行上方 npm run build。

回復：備份內每個 .bak 對應原專案路徑，移除 .bak 後複製回原位置，並移除本次新增的 Chapter9Geometry.tsx。
