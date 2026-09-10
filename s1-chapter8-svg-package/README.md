# S1 Chapter 8 SVG update

把 s1-chapter8-svg-package 整個資料夾放入 pw-learning-hub 專案，與 package.json 同一層。在專案根目錄 Terminal 執行：

```sh
node s1-chapter8-svg-package/install.cjs --dry-run
node s1-chapter8-svg-package/install.cjs
npm run build
```

更新首頁及 Sections 1–4 的圖解，新增 components/maths/Chapter8Geometry.tsx 共用元件。共 17 種圖解。兩軸均為每單位 28 SVG 單位，點、線、多邊形採統一座標投影；旋轉弧以原點為圓心，以點到原點距離為半徑，使用 SVG A 圓弧及切線方向箭頭。座標圖保留負數範圍及原點，符合本章四象限教學。課本風格及清晰標籤，分割圖補回 (2, 1) 轉角座標。此章現有圖解沒有需要印出平行符號的標註。

已檢查原版 Checkpoint 和 Flashcards：兩者沒有獨立 SVG 圖，故此次更新集中於現有課文圖解。保留現有題目、導航及 Supabase 進度功能。

安裝程式先核對所有目標區塊，再自動備份至 chapter8-svg-backup-時間戳記。若版本不符會停止，不作部分安裝。preview 內含圖像及整合後參考原始碼，請使用安裝程式而非直接覆蓋整頁。程式 payload 使用 .txt 避免 TypeScript 編譯未安裝套件。

驗證：17 種 SVG 圖像人工檢查、點座標與像素投影、多邊形面積、旋轉弧；隔離測試的嚴格 TypeScript；安裝及重複安裝。未在你的完整專案執行 Next.js production build，請安裝後執行 npm run build。

回復：備份內的 .bak 按相同路徑複製回專案並移除 .bak 副檔名，移除本次新增 Chapter8Geometry.tsx。
