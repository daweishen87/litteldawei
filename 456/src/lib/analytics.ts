export type AnalyticsEvent = "purchase_link_click" | "finder_start" | "finder_complete";

type EventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Send only when GA4 is configured; never equate an outbound click with an order. */
export function trackEvent(name: AnalyticsEvent, params: EventParams = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}
