import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, buyLabel } from "@/config/site";
import { PurchaseLink } from "@/components/PurchaseLink";

export const metadata: Metadata = {
  title: "重訓護腕怎麼選？硬度、舒適度與訓練情境｜DW",
  description: "重訓護腕選購指南：先判斷訓練情境，再比較硬度、舒適度、固定方式、尺寸與預算，並了解 DW Founder Edition 的適用定位與限制。",
  alternates: { canonical: "/guides/how-to-choose-wrist-wraps" },
  openGraph: { title: "重訓護腕怎麼選？從需求而非口號開始｜DW", description: "依訓練情境、佩戴感、規格與預算比較護腕，認識 DW Founder Edition 的實際定位。", url: `${site.url}/guides/how-to-choose-wrist-wraps`, type: "article", locale: "zh_TW" },
};

export default function WristWrapGuidePage() {
  return (
    <>
      <header className="top">
        <Link href="/" className="top-brand" aria-label="DW 首頁"><Image src="/images/dw-logo.png" alt="DW" width={700} height={418} className="top-logo" priority /></Link>
        <nav className="top-nav" aria-label="主要導覽"><Link href="/#product">產品特色</Link><Link href="/wrist-wrap-finder">護腕選購工具</Link></nav>
        <PurchaseLink className="pill pill-dark top-buy" placement="guide_header">{buyLabel}</PurchaseLink>
      </header>
      <main className="content-page">
        <div className="wrap page-hero">
          <p className="breadcrumb"><Link href="/">DW</Link>　/　選購指南</p>
          <p className="eyebrow">DW TRAINING NOTES</p>
          <h1>重訓護腕怎麼選？<br className="mobile-only" />先看訓練、固定感與舒適度。</h1>
          <p className="lead">護腕不是每個人、每個動作都必備。比較時先弄清楚自己做什麼訓練、喜歡什麼佩戴感，再核對商品規格與政策。</p>
        </div>
        <article className="wrap article">
          <h2>先問：你什麼時候想戴護腕？</h2>
          <p>推舉類動作會讓手腕承受負荷，有些訓練者會使用護腕，讓手腕周圍獲得包覆和一定程度的活動限制。但是否需要、喜歡什麼固定感，會因動作、負重、綁法與個人感受而不同。護腕不能取代動作技巧，也不保證預防受傷。</p>
          <p>如果只是剛開始訓練，不需要因為別人使用就立刻購買。先熟悉動作與自身需要，再決定是否要增加裝備。</p>

          <h2>硬度、舒適度與固定感怎麼比較？</h2>
          <p>不同品牌未必採用相同的硬度分級，名稱或材質也不能直接代表每個人的實際佩戴感。若可以，試戴或確認賣場的退換貨條件；比較時可留意：</p>
          <ul>
            <li><b>固定感：</b>你希望綁上後有多少包覆、手腕可活動到什麼程度？比賽或高負重需求，需查明是否有相符的規格與規則。</li>
            <li><b>舒適度：</b>拇指環、魔鬼氈、厚薄與纏繞方式都會影響穿戴感。太緊或造成麻木、疼痛時，不要勉強使用。</li>
            <li><b>使用便利：</b>確認長度、寬度、左右手／綁法、清潔保養方式，以及是否能在訓練中快速調整。</li>
            <li><b>總購買條件：</b>不要只看標價；同時查看運費、出貨時程、庫存和退換貨政策。</li>
          </ul>

          <h2>哪些資訊應該向賣家確認？</h2>
          <ol>
            <li>商品實際尺寸與材質，是否與照片相符。</li>
            <li>預期的訓練情境與佩戴方式；不要只用「專業」或「高支撐」等形容詞推測效果。</li>
            <li>庫存、付款、配送、保養與退換貨規則。</li>
            <li>若用於比賽，確認賽事規章；不要假設一般訓練護腕符合規定。</li>
          </ol>

          <div className="article-callout">
            <b>DW Founder Edition 的已知定位與取捨</b>
            <p>DW 是日常健身與重量訓練取向的黑色護腕，使用全黑織帶與霧面 TPU Logo；網站目前列示約 50 × 8 cm，首批預購價 NT$399。拇指環選擇較輕薄、佩戴存在感較低的設計；相較較緊的設計，固定感可能沒有那麼牢靠。網站沒有提供支撐力測試、醫療效果或比賽適用性的證明，所以若你最重視高硬度或比賽用途，請先比較其他規格更明確的選擇。</p>
          </div>

          <h2>依自己的答案做下一步</h2>
          <p>如果你還不確定要優先看什麼，可以用四題式工具整理訓練類型、經驗、固定感偏好與預算。它不是專業測試，也不會不論答案都推薦 DW。</p>
          <div className="article-actions">
            <Link href="/wrist-wrap-finder" className="pill pill-dark">使用 Wrist Wrap Finder</Link>
            <PurchaseLink className="pill pill-outline" placement="guide_article">{buyLabel}</PurchaseLink>
          </div>
          <p className="note">價格、規格、供應、付款與配送以賣貨便商品頁及賣場實際政策為準。本文為一般購物資訊，不是醫療或個別訓練建議。</p>
          <Link className="back-link" href="/">← 返回 DW 首頁</Link>
        </article>
      </main>
      <footer className="tool-footer"><div className="wrap"><Link href="/wrist-wrap-finder">護腕選購工具 →</Link><span>　·　</span><Link href="/">DW 首頁</Link></div></footer>
    </>
  );
}
