# DW 官方網站

DW Founder Edition｜黑化護腕 的單頁官網。Next.js 15（App Router）+ TypeScript，無後端、無資料庫、無環境變數。
訂單、付款與物流由 7-ELEVEN 賣貨便處理，網站只負責介紹與導流。

## 安裝與開發
```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build && npm start
```
需要 Node.js 18.18 以上。

## 修改內容
- 價格、規格、賣貨便網址、LINE 網址、保養指南、FAQ：全部在 `src/config/site.ts`。
- FAQ 中 `pending: true` 的項目會顯示黃底「【待確認】」，補上答案後刪除 `pending` 即可。
- 頁面版面：`src/app/page.tsx`；樣式：`src/app/globals.css`。
- 圖片：`public/images/`（同檔名替換即可）。Logo 為 `public/images/dw-logo.png`（透明底 PNG），在深色區塊以 CSS 反白顯示。
- favicon：`src/app/icon.png`。

## 部署到 Vercel
1. 將專案推上 GitHub。
2. 在 Vercel 選 Add New → Project，匯入該 Repository。
3. Framework Preset 會自動辨識為 Next.js，Build Command 用預設 `next build`，無需環境變數。
4. Deploy。若有自訂網域，再於 Vercel 的 Domains 設定。
