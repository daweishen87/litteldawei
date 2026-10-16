import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, buyLabel } from "@/config/site";
import { WristWrapFinder } from "@/components/WristWrapFinder";
import { PurchaseLink } from "@/components/PurchaseLink";

export const metadata: Metadata = {
  title: "Wrist Wrap Finder｜依訓練、固定感與預算選護腕｜DW",
  description: "回答四個簡單問題，整理重訓護腕選購提醒。不是醫療診斷，不論答案如何都不會強制推薦 DW。",
  alternates: { canonical: "/wrist-wrap-finder" },
  openGraph: { title: "DW Wrist Wrap Finder｜找到適合你訓練的護腕", description: "依照訓練類型、經驗、佩戴偏好與預算整理護腕選購提醒。", url: `${site.url}/wrist-wrap-finder`, type: "website", locale: "zh_TW" },
};

export default function FinderPage() {
  return (
    <>
      <header className="top">
        <Link href="/" className="top-brand" aria-label="DW 首頁"><Image src="/images/dw-logo.png" alt="DW" width={700} height={418} className="top-logo" priority /></Link>
        <nav className="top-nav" aria-label="主要導覽"><Link href="/#product">產品特色</Link><Link href="/guides/how-to-choose-wrist-wraps">選購指南</Link></nav>
        <PurchaseLink className="pill pill-dark top-buy" placement="finder_header">{buyLabel}</PurchaseLink>
      </header>
      <main className="content-page">
        <div className="wrap page-hero">
          <p className="breadcrumb"><Link href="/">DW</Link>　/　護腕選購工具</p>
          <p className="eyebrow">DW WRIST WRAP FINDER</p>
          <h1>護腕怎麼選，<br className="mobile-only" />先從你的訓練開始。</h1>
          <p className="lead">用四個問題整理訓練類型、經驗、固定感偏好與預算。結果是一般性比較提示，也可能建議你先看其他款式。</p>
        </div>
        <WristWrapFinder />
      </main>
      <footer className="tool-footer"><div className="wrap"><Link href="/guides/how-to-choose-wrist-wraps">先讀重訓護腕選購指南 →</Link><span>　·　</span><Link href="/">返回 DW 首頁</Link></div></footer>
    </>
  );
}
