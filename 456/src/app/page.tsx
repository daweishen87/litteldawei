import Image from "next/image";
import Link from "next/link";
import { site, careGuide, buyLabel } from "@/config/site";
import { Faq } from "@/components/Faq";
import { Tabs } from "@/components/Tabs";
import { PurchaseLink } from "@/components/PurchaseLink";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <header className="top">
        <a href="#top" className="top-brand" aria-label="DW 首頁">
          <Image src="/images/dw-logo.png" alt="DW" width={700} height={418} className="top-logo" priority />
        </a>
        <nav className="top-nav" aria-label="主要導覽">
          <a href="#product">產品特色</a>
          <Link href="/wrist-wrap-finder">護腕選購</Link>
          <Link href="/guides/how-to-choose-wrist-wraps">選購指南</Link>
        </nav>
        <PurchaseLink className="pill pill-dark top-buy" placement="header">立即預購</PurchaseLink>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-visual">
            <Image src="/images/hero-dark.jpg" alt="DW Founder Edition 黑色護腕的實際商品照片" width={1100} height={946} priority sizes="(min-width: 820px) 52vw, 100vw" className="hero-img" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">DW · FOUNDER EDITION</p>
            <h1>日常重訓護腕，<br />從真實訓練開始。</h1>
            <p className="hero-product">DW Founder Edition 黑化護腕</p>
            <p className="hero-l1">全黑織紋・霧面 TPU Logo・較輕薄的拇指環設計</p>
            <p className="hero-l2">給偏好低調全黑外觀、以日常重量訓練為主的使用者。拇指環較輕薄，固定感可能不如較緊的設計；請依自己的訓練需求與佩戴感受選擇。</p>
            <div className="hero-price"><b>NT${site.product.price}</b><span>首批預購價</span></div>
            <div className="btn-row">
              <PurchaseLink className="pill pill-light" placement="hero">{buyLabel}</PurchaseLink>
              <a className="pill pill-ghost" href="#product">查看產品細節</a>
            </div>
            <p className="note-light">點擊預購會前往 7-ELEVEN 賣貨便；付款與配送依該商品頁為準。</p>
          </div>
        </section>

        <section className="brand-intro wrap">
          <p className="slogan">{site.tagline}</p>
          <div className="brand-intro-copy">
            <p className="brand-lead">DW 從創辦人的實際訓練經驗出發，先把每天會用到的裝備做好。</p>
            <p className="muted">第一款是黑化護腕。之後會依實際使用回饋，逐步改善產品。</p>
          </div>
          <ul className="quick-facts" aria-label="產品重點">
            <li><b>全黑織紋</b><span>低調外觀</span></li>
            <li><b>霧面 TPU</b><span>Logo 材質</span></li>
            <li><b>約 50 × 8 cm</b><span>尺寸，依商品資訊</span></li>
            <li><b>NT${site.product.price}</b><span>網站目前列示首批預購價</span></li>
          </ul>
        </section>

        <section id="product" className="product wrap">
          <div className="section-heading">
            <p className="eyebrow">PRODUCT · FOUNDER EDITION</p>
            <h2>細節與取捨，<br className="mobile-only" />都先說清楚。</h2>
            <p className="section-intro">先看實際商品照片，再依自己的訓練、佩戴感和需求判斷是否適合。</p>
          </div>
          <Tabs />
          <div className="product-buyline">
            <div><b>NT${site.product.price}</b><span>首批預購價・網站目前列示</span></div>
            <PurchaseLink className="pill pill-dark" placement="product">{buyLabel}</PurchaseLink>
          </div>
        </section>

        <section className="selection-section" id="selection">
          <div className="wrap selection-layout">
            <div className="section-heading">
              <p className="eyebrow">CHOOSE FOR YOUR TRAINING</p>
              <h2>先想清楚<br />你需要哪一種固定感。</h2>
              <p className="section-intro">挑護腕不只看外觀；訓練動作、支撐偏好、拇指環與尺寸、預算都值得一起比較。</p>
              <div className="selection-links">
                <Link className="text-link" href="/wrist-wrap-finder">開始 DW Wrist Wrap Finder <span aria-hidden="true">→</span></Link>
                <Link className="text-link secondary-link" href="/guides/how-to-choose-wrist-wraps">閱讀重訓護腕選購指南 <span aria-hidden="true">→</span></Link>
              </div>
            </div>
            <ol className="selection-points">
              <li><span>01</span><div><b>對應訓練動作</b><p>臥推、肩推等推舉動作的手腕負荷，和一般訓練或比賽需求不一定相同。</p></div></li>
              <li><span>02</span><div><b>比較舒適與固定感</b><p>更緊的包覆可能有不同的佩戴感。請看清綁法、材質與設計取捨，不只看品牌文案。</p></div></li>
              <li><span>03</span><div><b>核對規格與政策</b><p>下單前確認實際尺寸、價格、出貨安排和退換貨方式；目前未確認的項目仍標示待確認。</p></div></li>
            </ol>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="wrap story-layout">
            <Image className="story-photo" src="/images/gym-press.jpg" width={1000} height={1333} sizes="(min-width: 820px) 46vw, 100vw" alt="創辦人在健身房佩戴 DW 護腕進行推舉訓練" />
            <div className="story-copy">
              <p className="eyebrow">WHY DW</p>
              <h2>You don’t have to be the best.<br />You just have to keep going.</h2>
              <p>我一直最享受健身的過程：每次訓練後的疲勞、一次次累積，以及看著自己慢慢改變。</p>
              <p>DW 從這些真實訓練經驗開始。護腕是第一個作品；我們會依實際使用回饋持續調整，不用誇大的承諾代替產品本身。</p>
              <p className="brand-signature">{site.tagline}</p>
            </div>
          </div>
        </section>

        <section className="founder" id="founder">
          <div className="founder-card">
            <div className="founder-photo">
              <Image src="/images/pair.jpg" width={600} height={1159} sizes="(min-width: 820px) 34vw, 76vw" alt="DW Founder Edition 單只護腕實物照片" />
            </div>
            <div className="founder-copy">
              <p className="eyebrow">FIRST RUN · FOUNDER EDITION</p>
              <h2>第一批，<br />是 DW 開始的地方。</h2>
              <p>網站目前介紹的首批為 100 雙，並說明每雙附一張手寫編號 Founder Card。商品實際供應情況請以賣貨便頁面為準。</p>
              <p className="card-no">No. 001 <span>/ 100</span></p>
              <p className="note">編號卡照片為示意；實際編號以手寫卡片為準。</p>
              <p className="price-row"><b>NT${site.product.price}</b><span>網站目前列示首批預購價</span></p>
              <PurchaseLink className="pill pill-dark" placement="founder">{buyLabel}</PurchaseLink>
              <p className="note">付款、庫存、出貨及退換貨資訊以 7-ELEVEN 賣貨便頁面與實際政策為準。</p>
            </div>
          </div>
        </section>

        <section className="care-section" id="care">
          <div className="wrap">
            <div className="care-heading">
              <p className="eyebrow">CARE &amp; USE</p>
              <h2>使用與保養</h2>
              <p className="section-intro">先以溫和方式清潔並自然陰乾；目前沒有確認可機洗或高溫烘乾。</p>
            </div>
            <div className="care-photos">
              <figure><Image src="/images/product-flat.jpg" width={900} height={1600} sizes="(min-width: 820px) 32vw, 48vw" alt="DW 護腕攤開後可見織帶、魔鬼氈與霧面 Logo 細節" /><figcaption>織帶與魔鬼氈細節</figcaption></figure>
              <figure><Image src="/images/wrapping.jpg" width={900} height={1035} sizes="(min-width: 820px) 32vw, 48vw" alt="實際以 DW 護腕纏繞手腕的方式" /><figcaption>實際纏繞方式</figcaption></figure>
            </div>
            <ol className="care-list">
              {careGuide.map((c, i) => (
                <li key={c.title}><span className="care-number">{String(i + 1).padStart(2, "0")}</span><div><b>{c.title}</b><p>{c.text}</p></div></li>
              ))}
            </ol>
            <p className="note">以上是一般保養建議，並非經過產品測試的官方清洗規範。</p>
          </div>
        </section>

        <Faq />

        <section className="follow">
          <Image src="/images/gym-grip.jpg" alt="創辦人在訓練中佩戴 DW 護腕" fill sizes="100vw" className="follow-img" />
          <div className="follow-shade" />
          <div className="follow-copy">
            <p className="eyebrow">FOLLOW DW</p>
            <h2>從一件裝備開始，<br />持續把細節做好。</h2>
            <a className="pill pill-light" href={site.links.line} {...ext}>加入 DW LINE 社群 ↗</a>
            <p className="note-light">LINE 社群「DW 100 雙護腕」用於品牌資訊交流，不是購買或客服承諾。</p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <div className="foot-top"><div><p className="eyebrow">DW · FOUNDER EDITION</p><h2>日常重訓護腕，從真實訓練開始。</h2></div><PurchaseLink className="pill pill-dark" placement="footer">{buyLabel}</PurchaseLink></div>
          <div className="foot-cols">
            <div><span>產品</span><a href="#product">Founder Edition</a><a href="#care">使用與保養</a><a href="#faq">常見問題</a></div>
            <div><span>選購與品牌</span><Link href="/wrist-wrap-finder">Wrist Wrap Finder</Link><Link href="/guides/how-to-choose-wrist-wraps">重訓護腕選購指南</Link><a href="#story">DW 的故事</a></div>
            <div><span>聯絡與購買</span><a href={site.links.line} {...ext}>LINE 社群 ↗</a><PurchaseLink className="foot-purchase-link" placement="footer_text">7-ELEVEN 賣貨便 ↗</PurchaseLink></div>
          </div>
          <div className="foot-brand">
            <Image src="/images/dw-logo.png" alt="DW" width={700} height={418} />
            <span>{site.tagline}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
