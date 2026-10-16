import type { Metadata, Viewport } from "next";
import { site } from "@/config/site";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "zh_TW",
    url: site.url,
    images: [{ url: "/images/dw-hero-cover.webp", width: 1024, height: 1024, alt: "DW Founder Edition 一雙全黑護腕產品封面實拍" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/images/dw-hero-cover.webp"],
  },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fbfaf7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body><Analytics />{children}</body>
    </html>
  );
}
