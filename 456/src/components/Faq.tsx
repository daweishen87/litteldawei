"use client";

import { faq, LINE_OFFICIAL_URL, site } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

function renderAnswer(answer: string, emphasis?: string[]) {
  if (!emphasis?.length) return answer;

  const escaped = emphasis.map((phrase) => phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = answer.split(new RegExp(`(${escaped.join("|")})`, "g"));

  return parts.map((part, index) =>
    emphasis.includes(part) ? <strong key={index}>{part}</strong> : part,
  );
}

export function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <h2>FAQ</h2>
        <div className="faq">
          {faq.map((item) => {
            const isLineLink = item.link?.href === LINE_OFFICIAL_URL;

            return (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>
                  {item.pending && <span className="tbc">【待確認】</span>}
                  {renderAnswer(item.a, item.emphasis)}
                  {item.link && !isLineLink && (
                    <>
                      {" "}
                      <a
                        href={item.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={item.link.href === site.links.buy ? () => trackEvent("purchase_link_click", { placement: "faq", destination: "7eleven" }) : undefined}
                      >
                        {item.link.text}
                      </a>
                    </>
                  )}
                </p>
                {isLineLink && item.link && (
                  <a
                    className="faq-line-cta"
                    href={LINE_OFFICIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="line-faq"
                  >
                    {item.link.text}
                  </a>
                )}
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
