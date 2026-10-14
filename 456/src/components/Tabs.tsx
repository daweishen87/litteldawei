"use client";
import Image from "next/image";
import { useState } from "react";

type Tab = { id: string; label: string; img: string; alt: string; w: number; h: number; body: string[]; list?: string[] };

const tabs: Tab[] = [
  { id: "black", label: "全黑設計", img: "/images/hero.jpg", alt: "一對 DW Founder Edition 黑色護腕，正面可見霧面 TPU DW Logo", w: 1200, h: 1230, body: ["全黑織紋護腕，正面是霧面 TPU 的 DW 標誌。"] },
  { id: "tpu", label: "霧面 TPU Logo", img: "/images/logo-closeup.jpg", alt: "DW 護腕正面，霧面 TPU Logo 特寫", w: 900, h: 1338, body: ["霧面 TPU 的 DW 標誌。"] },
  {
    id: "thumb", label: "拇指環的選擇", img: "/images/thumb-loop.jpg", alt: "護腕攤開，可見拇指環與魔鬼氈", w: 900, h: 1200,
    body: [
      "我之前訓練時，遇過傳統護腕的拇指環太緊，戴久了大拇指會不舒服。所以這次特別挑了比較輕薄、戴起來存在感較低的拇指環，希望減少束縛感。",
      "取捨是：比起更緊的設計，固定感可能沒有那麼牢靠。手型、綁法和感受因人而異。",
      "配戴時，拇指環盡量不要黏到魔鬼氈，拔下時可能損壞拇指環。",
    ],
  },
  { id: "daily", label: "日常健身與重量訓練", img: "/images/gym-grip.jpg", alt: "戴著 DW 護腕握住健身器材把手", w: 900, h: 1200, body: ["日常健身與重量訓練。", "第一次買護腕的人。"] },
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
        <Image src={t.img} width={t.w} height={t.h} sizes="(min-width: 820px) 40vw, 100vw" alt={t.alt} className="round" />
        <div>
          {t.body.map((b) => (
            <p key={b}>{b}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
