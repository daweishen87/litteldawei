"use client";

import { faq, site } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <h2><span className="zh">常見問題</span></h2>
        <div className="faq">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>
                {item.pending && <span className="tbc">【待確認】</span>}
                {item.a}
                {item.link && (
                  <>
                    {" "}
                    <a href={item.link.href} target="_blank" rel="noopener noreferrer" onClick={item.link.href === site.links.buy ? () => trackEvent("purchase_link_click", { placement: "faq", destination: "7eleven" }) : undefined}>{item.link.text}</a>
                  </>
                )}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
