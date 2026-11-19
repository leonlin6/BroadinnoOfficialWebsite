import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import { ThemeRegistry } from "@/components/ThemeRegistry";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TitleUnderlineObserver } from "@/components/TitleUnderlineObserver";
import { siteUrl } from "@/lib/content";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({ variable: "--font-noto-sans-tc", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "博創數科 Broadinno｜數據、數位與科技整合顧問", template: "%s｜博創數科 Broadinno" },
  description: "博創數科提供數據分析、數位轉型、金融科技及專案管理相關顧問服務，協助企業規劃並落實解決方案。",
  icons: {
    icon: "/images/broadinno-logo-transparent.png",
    apple: "/images/broadinno-logo-transparent.png",
  },
  openGraph: { type: "website", locale: "zh_TW", siteName: "博創數科 Broadinno" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant" className={notoSansTC.variable}><body><ThemeRegistry><Header /><main>{children}</main><Footer /><TitleUnderlineObserver /></ThemeRegistry></body></html>;
}
