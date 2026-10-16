"use client";
import type { ReactNode } from "react";
import { site, buyLabel } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function PurchaseLink({ className, placement, children = buyLabel }: { className: string; placement: string; children?: ReactNode }) {
  return (
    <a
      className={className}
      href={site.links.buy}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("purchase_link_click", { placement, destination: "7eleven" })}
    >
      {children}
    </a>
  );
}
