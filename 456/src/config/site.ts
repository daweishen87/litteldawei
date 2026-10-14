// 所有可變資訊集中在這裡：價格、連結、規格、文案資料。
export const site = {
  name: "DW",
  tagline: "DON’T STOP UNTIL YOU WIN.",
  title: "DW | Founder Edition 黑化護腕",
  description:
    "DW 從健身文化出發，以全黑設計與持續改進的理念，推出 DW Founder Edition 黑化護腕。",
  product: {
    name: "DW Founder Edition｜黑化護腕",
    color: "黑色",
    size: "約 50 × 8 cm",
    logoMaterial: "霧面 TPU",
    batch: "100 雙",
    card: "Founder Card 手寫編號卡",
    price: 399, // 首批預購價
    listPrice: 590, // 原定售價
  },
  links: {
    buy: "https://myship.7-11.com.tw/general/detail/GM2610097707229",
    line: "https://line.me/ti/g2/cvZvThSsmLELF7o0xjNH097-wzKJ3wBFxyeDaA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
  },
} as const;

export const buyLabel = `立即預購｜NT$${site.product.price}`;

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
  { q: "DW 護腕適合哪些訓練動作？", a: "適合臥推、肩推等需要手腕支撐的重量訓練動作，也可以依個人需求考慮用於其他讓手腕承受負荷的動作。不同動作的手腕角度、負荷與支撐需求不同，請依訓練情境調整配戴方式。不保證提升重量或避免受傷。" },
  { q: "護腕的作用是什麼？", a: "護腕透過纏繞與壓迫，為手腕周圍提供支撐與一定程度的活動限制。在臥推、肩推等動作中，適當配戴可能有助於維持需要的手腕位置。護腕不能取代正確的動作技巧、適當的負重與訓練控制，不能保證預防受傷，也不是治療用品。出現麻木、疼痛、異常壓迫感或其他不適時，請立即鬆開或停止使用。" },
  { q: "護腕應該綁多緊？", a: "依訓練需求調整，不必綁到過度緊繃。出現麻木、疼痛、異常壓迫感或不適，請立即鬆開或停止使用。" },
  { q: "DW 護腕適合力量舉嗎？", a: "DW Founder Edition 主要面向日常健身與重量訓練。如果你專注於力量舉比賽、極高負重，或需要高硬度與強烈固定感，請先確認產品的實際硬度、長度、固定方式與比賽規則是否符合需求。" },
  { q: "第一次使用護腕的人適合嗎？", a: "DW 主要面向日常健身與重量訓練的使用者。護腕不是每個動作都必須使用的裝備，手腕沒有負擔的動作可以不戴。" },
  { q: "拇指環會不會不舒服？", a: "我挑選了比較輕薄、配戴存在感較低的拇指環，是因為過去訓練時遇過拇指環太緊而不舒服的情況。但每個人的手型與感受不同，不能保證所有人都不會不適。這種設計的固定感，也可能與較緊的設計不同。配戴時請盡量避免拇指環黏到魔鬼氈，拔下時可能損壞拇指環。" },
  { q: "拇指環的作用是什麼？可以不使用嗎？", a: "依實際產品結構補上說明。", pending: true },
  { q: "DW 護腕可以水洗嗎？", a: "目前尚未確認可整體水洗或機洗，也未指定清潔劑。建議以濕布局部輕柔清潔，詳見上方保養指南。" },
  { q: "使用後應該如何保養？", a: "使用後鬆開讓它透氣，放在通風處自然陰乾；需要清潔時先以濕布局部輕柔清潔；避免高溫烘乾與直接熨燙；確認乾燥後再收起。" },
  { q: "護腕的尺寸是多少？", a: "約 50 × 8 cm，最終以確認的商品規格為準。實際配戴感受會因手腕尺寸、綁法與使用習慣而不同。" },
  { q: "下單後多久會出貨？", a: "出貨安排確認後補上。", pending: true },
  { q: "收到商品後想退換貨怎麼辦？", a: "退換貨政策確認後補上。", pending: true },
  { q: "如何購買 DW Founder Edition？", a: "目前透過 7-ELEVEN 賣貨便預購。", link: { href: site.links.buy, text: "前往商品頁面" } },
  { q: "如何加入 DW 的 LINE 社群？", a: "可以加入「DW 100 雙護腕」LINE 社群，繼續關注品牌與產品的相關資訊。", link: { href: site.links.line, text: "加入 LINE 社群" } },
];
