import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/wrist-wrap-finder`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/guides/how-to-choose-wrist-wraps`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
