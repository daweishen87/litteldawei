import Image from "next/image";
import Link from "next/link";
import { site, careGuide, buyLabel, LINE_OFFICIAL_URL } from "@/config/site";
import { Faq } from "@/components/Faq";
import { Tabs } from "@/components/Tabs";
import { PurchaseLink } from "@/components/PurchaseLink";

export default function Home() {
  return (
    <>
      <header className="top">
        <a href="#top" className="top-brand" aria-label="DW 首頁">
          <Image src="/images/dw-logo.png" alt="DW" width={700} height={418} className="top-logo" priority />
        </a>
        <nav className="top-nav" aria-label="主要導覽">
          <a href="#product">產品細節</a>
          <a href="#fit">適合我的訓練嗎</a>
          <Link href="/guides/how-to-choose-wrist-wraps">選購指南</Link>
        </nav>
        <PurchaseLink className="pill pill-dark top-buy" placement="header">前往商品頁</PurchaseLink>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-visual">
            <Image src="/images/dw-hero-cover.webp" alt="DW Founder Edition 一雙全黑護腕產品封面實拍" width={1024} height={1024} priority sizes="(min-width: 820px) 52vw, 100vw" className="hero-img" />
          </div>
          <div className="hero-copy">
            <h1>日常訓練<br />一雙黑色護腕</h1>
            <p className="hero-product">DW Founder Edition</p>
            <p className="hero-l1">全黑織紋<br />霧面 TPU Logo</p>
            <p className="hero-l2">拇指環較輕薄，佩戴存在感較低；固定感可能不如較緊的設計。</p>
            <div className="hero-price"><b>NT${site.product.price}</b><span>網站目前列示首批預購價</span></div>
            <div className="btn-row">
              <PurchaseLink className="pill pill-light" placement="hero">{buyLabel}</PurchaseLink>
              <a className="pill pill-ghost" href="#product">看實物細節</a>
            </div>
            <p className="note-light">價格、庫存、付款與配送依 7-ELEVEN 賣貨便商品頁為準。</p>
          </div>
        </section>

        <section className="product-facts wrap" aria-label="產品重點">
          <p className="hero-slogan">Don’t stop until you win</p>
          <ul className="quick-facts">
            <li><b>一雙入</b><span>Founder Edition 黑色護腕</span></li>
            <li><b>{site.product.size}</b><span>網站目前列示尺寸</span></li>
            <li><b>日常重量訓練</b><span>目前產品定位</span></li>
          </ul>
        </section>

        <section id="product" className="product wrap">
          <div className="section-heading">
            <p className="eyebrow">PRODUCT · FOUNDER EDITION</p>
            <h2>先看實物<br className="mobile-only" />再看取捨</h2>
            <p className="section-intro">織紋、佩戴與訓練情境，都用實拍呈現。</p>
          </div>
          <Tabs />
          <div className="product-buyline">
            <div><b>NT${site.product.price}</b><span>網站目前列示首批預購價</span></div>
            <PurchaseLink className="pill pill-dark" placement="product">{buyLabel}</PurchaseLink>
          </div>
        </section>

        <section className="brand-portrait-section" aria-label="DW 品牌形象照">
          <Image
            src="/images/dw-standalone-portrait.webp"
            width={1108}
            height={1477}
            sizes="(max-width: 600px) 100vw, 1108px"
            alt="DW 品牌形象照（完整未裁切）"
            className="brand-portrait-image"
          />
          <p className="brand-portrait-tagline">DON&apos;T STOP UNTIL YOU WIN</p>
          <p className="brand-portrait-quote">You don&apos;t have to be the best. Just keep going.</p>
        </section>

        <section className="selection-section" id="fit">
          <div className="wrap selection-layout">
            <div className="section-heading">
              <p className="eyebrow">CHOOSE FOR YOUR TRAINING</p>
              <h2>你的訓練<br />需要哪種固定感</h2>
              <p className="section-intro">用訓練動作、佩戴偏好和預算來比較，不必只看品牌名稱。</p>
              <div className="selection-links">
                <Link className="text-link" href="/wrist-wrap-finder">用 4 題整理選購方向 <span aria-hidden="true">→</span></Link>
                <Link className="text-link secondary-link" href="/guides/how-to-choose-wrist-wraps">查看完整護腕選購指南 <span aria-hidden="true">→</span></Link>
              </div>
            </div>
            <aside className="selection-note">
              <p className="eyebrow">DW FOUNDER EDITION</p>
              <p><b>日常健身與重量訓練取向。</b></p>
              <p>若偏好高固定感或用於比賽，請先比較硬度、尺寸與賽事規則。</p>
            </aside>
          </div>
        </section>

        <div className="wrap line-strip-wrap">
          <aside className="line-question-strip" aria-label="官方 LINE 詢問">
            <div className="line-strip-copy">
              <strong>還在比較？</strong>
              <small>配戴、尺寸，直接問 DW</small>
            </div>
            <a className="line-strip-cta" href={LINE_OFFICIAL_URL} target="_blank" rel="noopener noreferrer" data-cta="line-strip">
              LINE 詢問
            </a>
          </aside>
        </div>

        <section className="story-section" id="story">
          <div className="wrap story-layout">
            <figure className="story-figure">
              <Image className="story-photo" src="/images/dw-training-portrait.jpg" width={1350} height={1800} sizes="(min-width: 820px) 46vw, 100vw" alt="健身房裡實際配戴 DW 護腕的訓練者" />
              <figcaption>健身房實際配戴</figcaption>
            </figure>
            <div className="story-copy">
              <p className="eyebrow">WHY DW</p>
              <h2>You don’t have to be the best<br />Just keep going</h2>
              <p>每個人都有自己的起點。DW 也從一位健身者的日常訓練開始；不必等到完美，先把今天這次完成。</p>
            </div>
          </div>
        </section>

        <section className="founder" id="founder">
          <div className="founder-card">
            <div className="founder-photo">
              <Image src="/images/dw-founder-card.jpg" width={1024} height={1024} sizes="(min-width: 820px) 34vw, 88vw" alt="DW 黑化護腕與 Founder Card 實拍，卡片上有手寫編號欄位" />
            </div>
            <div className="founder-copy">
              <p className="eyebrow">FIRST RUN · FOUNDER EDITION</p>
              <h2>首批 100 雙<br />DW 從這裡開始</h2>
              <p>每雙附手寫編號 Founder Card。對 DW，這是第一件作品的紀錄；對你，也可以是某段訓練歷程的紀念。</p>
              <p className="note">照片中的「##」是編號欄位；實際手寫序號以收到的卡片為準。</p>
              <p className="price-row"><b>NT${site.product.price}</b><span>網站目前列示首批預購價</span></p>
              <PurchaseLink className="pill pill-dark" placement="founder">{buyLabel}</PurchaseLink>
              <p className="note">付款、庫存、出貨及退換貨資訊以賣貨便商品頁與實際政策為準。</p>
            </div>
          </div>
        </section>

        <section className="care-section" id="care">
          <div className="wrap">
            <div className="care-heading">
              <p className="eyebrow">CARE &amp; USE</p>
              <h2>使用與保養</h2>
            </div>
            <ol className="care-list">
              {careGuide.map((c, i) => (
                <li key={c.title}><span className="care-number">{String(i + 1).padStart(2, "0")}</span><div><b>{c.title}</b><p>{c.text}</p></div></li>
              ))}
            </ol>
            <p className="note">目前未確認可整體水洗或機洗；以上為一般保養建議，並非產品測試後的官方清洗規範。</p>
          </div>
        </section>

        <Faq />

        <section className="line-card-section" id="official-line" aria-labelledby="line-card-title">
          <div className="wrap">
            <div className="line-card">
              <p className="line-card-eyebrow">DW OFFICIAL LINE</p>
              <h2 id="line-card-title">有問題？直接找 DW。</h2>
              <p className="line-card-description">想了解護腕、詢問配戴方式，或掌握新品消息，都可以透過官方 LINE 聯絡我們。</p>

              <h3 className="line-card-list-title">加入好友後</h3>
              <ul className="line-card-benefits">
                <li>
                  <span className="line-check" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="m5 12.5 4.4 4.2L19 7" /></svg></span>
                  <span>查看 DW Founder Edition 護腕</span>
                </li>
                <li>
                  <span className="line-check" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="m5 12.5 4.4 4.2L19 7" /></svg></span>
                  <span>詢問產品與配戴方式</span>
                </li>
                <li>
                  <span className="line-check" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="m5 12.5 4.4 4.2L19 7" /></svg></span>
                  <span>掌握 DW 新品消息</span>
                </li>
              </ul>

              <a className="line-main-cta" href={LINE_OFFICIAL_URL} target="_blank" rel="noopener noreferrer" data-cta="line-main">
                <span className="line-main-cta-primary">
                  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 5.5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8.2L5 21v-3.5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z" /></svg>
                  <span>加入 DW 官方 LINE</span>
                </span>
                <span className="line-main-cta-secondary">產品諮詢・新品消息</span>
              </a>

              <div className="line-card-browse">
                <span>先逛逛：</span>
                <a href="#product">看實物細節</a>
                <Link href="/guides/how-to-choose-wrist-wraps">選購指南</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <div className="foot-top"><div><p className="eyebrow">DW · FOUNDER EDITION</p><h2>看完細節<br />選適合自己的裝備</h2></div><PurchaseLink className="pill pill-dark" placement="footer">{buyLabel}</PurchaseLink></div>
          <div className="foot-cols">
            <div><span>產品</span><a href="#product">Founder Edition</a><a href="#care">使用與保養</a><a href="#faq">FAQ</a></div>
            <div><span>選購與品牌</span><Link href="/wrist-wrap-finder">Wrist Wrap Finder</Link><Link href="/guides/how-to-choose-wrist-wraps">重訓護腕選購指南</Link><a href="#story">DW 的故事</a></div>
            <div><span>聯絡與購買</span><a className="line-footer-link" href={LINE_OFFICIAL_URL} target="_blank" rel="noopener noreferrer" data-cta="line-footer">DW 官方 LINE ↗</a><PurchaseLink className="foot-purchase-link" placement="footer_text">7-ELEVEN 賣貨便 ↗</PurchaseLink></div>
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
