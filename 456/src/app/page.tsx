import Image from "next/image";
import { site, careGuide } from "@/config/site";
import { buyLabel } from "@/config/site";
import { Faq } from "@/components/Faq";
import { Tabs } from "@/components/Tabs";
import { Squad } from "@/components/Squad";

const p = site.product;
const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <header className="top">
        <a href="#top" aria-label="DW">
          <Image src="/images/dw-logo.png" alt="DW" width={700} height={418} className="top-logo" priority />
        </a>
        <a className="pill pill-dark" href={site.links.buy} {...ext}>立即預購</a>
      </header>

      <main id="top">
        <section className="hero">
          <Image src="/images/hero-dark.jpg" alt="一對 DW Founder Edition 黑色護腕，正面可見霧面 TPU DW Logo" width={1100} height={946} priority sizes="100vw" className="hero-img" />
          <div className="hero-copy">
            <h1>DW Founder Edition<br />黑化護腕。</h1>
            <p className="hero-l1">全黑織紋，霧面 TPU Logo。</p>
            <p className="hero-l2">DW 的第一個作品，從實際訓練經驗開始做起。</p>
            <div className="btn-row">
              <a className="pill pill-light" href={site.links.buy} {...ext}>{buyLabel}</a>
              <a className="pill pill-ghost" href="#product">第一款護腕 ↓</a>
            </div>
            <p className="note-light">點擊後前往 7-ELEVEN 賣貨便下單</p>
          </div>
        </section>

        <section className="facts wrap">
          <p className="slogan">{site.tagline}</p>
          <div className="facts-grid">
            <span>全黑織紋</span><span>霧面 TPU</span><span>Founder Edition</span><span>首批 100 雙</span>
          </div>
        </section>

        <section className="statement wrap">
          <p><b>DW 從我自己的訓練開始，護腕是第一個作品。</b><br /><span>接下來會依照大家實際使用的回饋，一版一版改。</span></p>
        </section>

        <section className="break">
          <Image src="/images/story-break.jpg" width={1000} height={1241} sizes="(min-width: 820px) 560px, 100vw" alt="戴著 DW 護腕的手。文字：但我不想只是做一雙印著 Logo 的護腕。我希望它是真的能融入日常訓練的東西。" />
        </section>

        <section className="stats wrap">
          <div><b>50 × 8<small> cm</small></b><span>約略尺寸</span></div>
          <div><b>100 雙</b><span>首批數量</span></div>
          <div><b>TPU</b><span>霧面 Logo</span></div>
          <div><b>NT${p.price}</b><span>首批預購價 <s>NT${p.listPrice}</s></span></div>
          <p className="stats-note">顏色：{p.color}　首批附贈 {p.card}</p>
        </section>

        <section id="product" className="product wrap">
          <p className="eyebrow">01 / DW FOUNDER EDITION</p>
          <h2>第一款護腕</h2>
          <Tabs />
        </section>

        <Squad />

        <section className="dark story" id="story">
          <div className="wrap">
            <Image className="round story-photo" src="/images/gym-press.jpg" width={1000} height={1333} sizes="(min-width: 820px) 480px, 100vw" alt="創辦人戴著 DW 護腕在健身房推舉" />
            <p className="quote">You don’t have to be the best.</p>
            <p className="quote dim">You just have to keep going.</p>
            <p>我一直最享受的，是健身的過程：訓練後的疲勞與痠痛、一次次慢慢累積、看著鏡子裡的自己逐漸改變。對我來說，最有價值的不只是結果，而是一路走過的過程。</p>
            <Image className="logo-inline" src="/images/dw-logo.png" width={700} height={418} alt="DW Logo" />
            <p>從設計到產品，DW 也在一步步成長。<br />這個 Logo 裡，藏著我們對成長的想像。</p>
          </div>
        </section>

        <section className="founder" id="founder">
          <div className="founder-card">
            <div className="founder-photo">
              <Image src="/images/pair.jpg" width={600} height={1159} sizes="(min-width: 820px) 360px, 80vw" alt="收在一起的 DW 護腕，Logo 朝前" />
              <span className="badge">首批 100 雙</span>
            </div>
            <div>
              <p className="eyebrow">DW FOUNDER EDITION</p>
              <h2>第一批，<br />是 DW 開始的地方。</h2>
              <p>首批 100 雙，每雙附一張手寫編號的 Founder Card，從 001 到 100。</p>
              <p>而你，是 DW 最早的其中一位。</p>
              <p className="card-no">No. 001 <span>/ 100</span></p>
              <p className="note">Founder Card 編號範例，實際為手寫</p>
              <p className="price-row"><b>NT${p.price}</b> <s>NT${p.listPrice}</s> <span>首批預購價</span></p>
              <a className="pill pill-dark" href={site.links.buy} {...ext}>{buyLabel}</a>
              <p className="note">點擊後前往 7-ELEVEN 賣貨便下單</p>
            </div>
          </div>
        </section>

        <section className="dark care" id="care">
          <div className="wrap">
            <div className="care-photos">
              <Image src="/images/product-flat.jpg" width={900} height={1600} sizes="50vw" alt="攤開的 DW 護腕，可見織紋、魔鬼氈與霧面 TPU Logo" />
              <Image src="/images/wrapping.jpg" width={900} height={1035} sizes="50vw" alt="手持 DW 護腕纏繞手腕的過程" />
            </div>
            <h2>使用與保養</h2>
            <ol className="care-list">
              {careGuide.map((c, i) => (
                <li key={c.title}>
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <div><b>{c.title}</b><p>{c.text}</p></div>
                </li>
              ))}
            </ol>
            <p className="note-light">以上為一般性保養建議，並非經過產品測試的官方清洗規範。</p>
          </div>
        </section>

        <Faq />

        <section className="follow">
          <Image src="/images/gym-press.jpg" alt="" fill sizes="100vw" className="follow-img" />
          <div className="follow-shade" />
          <div className="follow-copy">
            <h2>DW 還在持續成長。<br />接下來的每一步，<br />歡迎繼續關注。</h2>
            <a className="pill pill-light" href={site.links.line} {...ext}>加入 DW 社群 ↗</a>
            <p className="note-light">LINE 社群「DW 100 雙護腕」，不會直接購買。</p>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <h3>DW Founder Edition<br />黑化護腕。</h3>
          <a className="pill pill-dark" href={site.links.buy} {...ext}>{buyLabel}</a>
          <div className="foot-cols">
            <div><span>DW</span><a href="#product">第一款護腕</a><a href="#story">DW 的故事</a><a href="#founder">首批 100 雙</a></div>
            <div><span>了解更多</span><a href="#care">使用與保養</a><a href="#faq">常見問題</a><a href={site.links.line} {...ext}>LINE 社群 ↗</a></div>
          </div>
          <div className="foot-brand">
            <Image src="/images/dw-logo.png" alt="DW" width={700} height={418} style={{ height: 52, width: "auto" }} />
            <span>{site.tagline}</span>
          </div>
          <a className="foot-link" href={site.links.buy} {...ext}>賣貨便預購 ↗</a>
        </div>
      </footer>
    </>
  );
}
