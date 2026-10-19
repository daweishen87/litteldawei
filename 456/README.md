# DW 官方網站

DW Founder Edition｜黑化護腕的 Next.js 15（App Router）單頁品牌網站，另有護腕選購工具與繁體中文選購指南。訂單與付款由 7-ELEVEN 賣貨便處理，網站不保存訂單或會員資料。

## 開發

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build && npm start
```

需要 Node.js 18.18 以上。

## 頁面

- `/`：品牌首頁、產品照片與規格、購買連結、保養及常見問題。
- `/wrist-wrap-finder`：四題式、依訓練／經驗／佩戴偏好／預算整理選購提醒；不一定推薦 DW，答案只在瀏覽器頁面記憶體中使用。
- `/guides/how-to-choose-wrist-wraps`：重訓護腕繁體中文選購指南。
- `/sitemap.xml`、`/robots.txt`：Next.js 產生的搜尋索引基礎檔案。

## 更新商品資訊

價格、規格、賣貨便網址、官方 LINE 網址（`LINE_OFFICIAL_URL`）、保養指南與 FAQ 位於 `src/config/site.ts`。出貨及退換貨尚待確認，因此頁面不以猜測補寫。圖片放在 `public/images/`；首屏商品照、實際配戴照及 OG 分享圖分別用於首頁與分享摘要。重複的 `hero.jpg` 已移除。

## Vercel 與搜尋索引

程式庫推到 Vercel 綁定分支後會由原有設定部署。正式 URL 在 `src/config/site.ts` 的 `site.url`。`robots.txt` 會宣告 `sitemap.xml`，頁面包含繁體中文 title、description、canonical 及 Open Graph metadata。

在 Google Search Console 新增「網址前置字元」資源 `https://litteldawei.vercel.app/`，複製 Google 提供的驗證碼，在 Vercel 專案的 Environment Variables 新增 `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`，套用 Production 並重新部署；驗證通過後，在 Search Console 提交 `https://litteldawei.vercel.app/sitemap.xml`。

## GA4（選擇性，預設關閉）

沒有 Measurement ID 時網站不會載入 Google Analytics。建立 GA4 資源後，在 Vercel 專案設定 `NEXT_PUBLIC_GA_ID`（格式 `G-XXXXXXXXXX`）並重新部署即可啟用。目前準備的事件：`purchase_link_click`（只代表點到賣貨便，**不代表完成訂單**）、`finder_start`、`finder_complete`。不會送出 Finder 個別答案或個人資料。啟用分析前，請先補充網站隱私告知並確認目標地區適用的同意規則。
