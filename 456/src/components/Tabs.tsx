"use client";
import Image from "next/image";
import { useState } from "react";

type Tab = { id: string; label: string; img: string; alt: string; w: number; h: number; body: string[] };

const tabs: Tab[] = [
  { id: "black", label: "織紋與外觀", img: "/images/product-flat.jpg", alt: "DW 護腕攤開，呈現黑色織帶、霧面 Logo 與魔鬼氈細節", w: 900, h: 1600, body: ["黑色織帶搭配霧面 TPU DW Logo。照片呈現實際產品細節；螢幕顯示與實物色彩可能略有差異。"] },
  { id: "tpu", label: "霧面 TPU Logo", img: "/images/logo-closeup.jpg", alt: "DW 護腕正面霧面 TPU Logo 特寫", w: 900, h: 1338, body: ["Logo 使用霧面 TPU。這裡呈現外觀與材質細節，不代表經過額外的耐磨或耐用度測試。"] },
  { id: "thumb", label: "拇指環的取捨", img: "/images/thumb-loop.jpg", alt: "DW 護腕攤開，可見拇指環與魔鬼氈", w: 900, h: 1200, body: ["創辦人過去使用傳統護腕時，曾遇過拇指環太緊的不適，因此這款選擇較輕薄、佩戴存在感較低的拇指環。", "取捨是：相較較緊的設計，固定感可能沒有那麼牢靠。手型、綁法與感受因人而異；配戴時避免讓拇指環黏到魔鬼氈。"] },
  { id: "daily", label: "日常訓練實拍", img: "/images/gym-grip.jpg", alt: "訓練者佩戴 DW 護腕握住健身器材把手", w: 900, h: 1200, body: ["實際使用情境照片。產品定位為日常健身與重量訓練；若需要比賽用或高固定感護腕，請先核對需求、產品規格與比賽規則。"] },
];

export function Tabs() {
  const [i, setI] = useState(0);
  const t = tabs[i];
  return (
    <div>
      <div className="tablist" role="tablist" aria-label="產品特色">
        {tabs.map((x, k) => (
          <button key={x.id} role="tab" id={`tab-${x.id}`} aria-selected={k === i} aria-controls="tabpanel" type="button" onClick={() => setI(k)}>
            {x.label}
          </button>
        ))}
      </div>
      <div id="tabpanel" role="tabpanel" aria-labelledby={`tab-${t.id}`} className="tabpanel">
        <Image src={t.img} width={t.w} height={t.h} sizes="(min-width: 820px) 48vw, 100vw" alt={t.alt} />
        <div className="tabpanel-copy">{t.body.map((b) => <p key={b}>{b}</p>)}</div>
      </div>
    </div>
  );
}
