// 商品價格、規格、連結與待確認資訊集中管理；未核實項目不自行補值。
export const site = {
  name: "DW",
  url: "https://litteldawei.vercel.app",
  tagline: "DON’T STOP UNTIL YOU WIN.",
  title: "DW Founder Edition｜日常重訓黑化護腕",
  description: "DW Founder Edition 黑化護腕：全黑織紋、霧面 TPU Logo，為日常健身與重量訓練設計。查看實際產品細節、選購指南與目前預購資訊。",
  product: {
    name: "DW Founder Edition｜黑化護腕",
    color: "黑色",
    size: "約 50 × 8 cm",
    logoMaterial: "霧面 TPU",
    batch: "100 雙",
    card: "Founder Card 手寫編號卡",
    price: 399, // 網站目前列示首批預購價，以賣貨便商品頁為準
    listPrice: 590, // 網站原列價格；未在首頁作為比較價強調
  },
  links: {
    buy: "https://myship.7-11.com.tw/general/detail/GM2610097707229",
    line: "https://line.me/ti/g2/cvZvThSsmLELF7o0xjNH097-wzKJ3wBFxyeDaA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
  },
} as const;

export const buyLabel = `前往賣貨便｜NT$${site.product.price}`;

export const careGuide = [
  { title: "配戴時", text: "拇指環盡量不要黏到魔鬼氈，拔下時可能損壞拇指環。" },
  { title: "訓練後", text: "鬆開護腕，讓它透氣。" },
  { title: "保持乾燥", text: "放在通風處自然陰乾。" },
  { title: "日常清潔", text: "先以濕布局部輕柔清潔。" },
  { title: "避免高溫", text: "不要高溫烘乾或直接熨燙。" },
  { title: "收納", text: "確認乾燥後再收起。" },
];

export type FaqItem = { q: string; a: string; pending?: boolean; link?: { href: string; text: string } };

export const faq: FaqItem[] = [
  { q: "DW 護腕適合哪些訓練動作？", a: "適合臥推、肩推等需要手腕支撐的重量訓練動作，也可依個人需求考慮用於其他讓手腕承受負荷的動作。不同動作的手腕角度、負荷與支撐需求不同，請依訓練情境調整配戴方式。不保證提升重量或避免受傷。" },
  { q: "護腕的作用是什麼？", a: "護腕透過纏繞與壓迫，為手腕周圍提供支撐與一定程度的活動限制。護腕不能取代正確動作、適當負重與訓練控制，不能保證預防受傷，也不是治療用品。出現麻木、疼痛、異常壓迫感或其他不適時，請立即鬆開或停止使用。" },
  { q: "DW 是比賽用或高固定感護腕嗎？", a: "DW Founder Edition 目前定位為日常健身與重量訓練，拇指環較輕薄，固定感可能不如較緊的設計。尚未提供可證明適用於力量舉比賽或極高負重的測試資料；請先確認硬度、長度與比賽規則。" },
  { q: "第一次使用護腕的人適合嗎？", a: "護腕不是每個動作都必須使用的裝備。請先熟悉動作與自己的手腕負荷，再依需要選擇；手腕沒有特別負擔的動作可以不戴。" },
  { q: "拇指環的設計有什麼取捨？", a: "創辦人希望降低傳統拇指環過緊帶來的束縛感，因此選擇較輕薄、佩戴存在感較低的設計。相較較緊的設計，固定感可能沒有那麼牢靠；手型、綁法與感受因人而異。" },
  { q: "護腕可以水洗或機洗嗎？", a: "目前尚未確認可整體水洗或機洗，也未指定清潔劑。建議先以濕布局部輕柔清潔，再依上方保養指南處理。" },
  { q: "尺寸是多少？", a: "網站目前列示約 50 × 8 cm；實際尺寸與配戴感受請以確認後的商品資訊為準。" },
  { q: "目前價格與庫存是多少？", a: "網站目前列示首批預購價 NT$399。價格、庫存、供應狀態與活動以 7-ELEVEN 賣貨便商品頁面為準。", link: { href: "https://myship.7-11.com.tw/general/detail/GM2610097707229", text: "查看賣貨便商品頁" } },
  { q: "下單後何時出貨？", a: "出貨安排尚待確認，請以商品頁公告與賣場實際資訊為準。", pending: true },
  { q: "退換貨如何辦理？", a: "退換貨政策尚待確認，請在下單前查看賣場公布的規則。", pending: true },
  { q: "如何加入 DW LINE 社群？", a: "可以加入「DW 100 雙護腕」LINE 社群，關注品牌與產品相關資訊。", link: { href: "https://line.me/ti/g2/cvZvThSsmLELF7o0xjNH097-wzKJ3wBFxyeDaA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default", text: "加入 LINE 社群" } },
];
