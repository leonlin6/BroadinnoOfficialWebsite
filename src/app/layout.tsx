import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import { ThemeRegistry } from "@/components/ThemeRegistry";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TitleUnderlineObserver } from "@/components/TitleUnderlineObserver";
import { siteUrl } from "@/lib/content";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({ variable: "--font-noto-sans-tc", display: "swap", preload: false });
const gtmId = process.env.NEXT_PUBLIC_GTM_ID?.trim();

if (gtmId && !/^GTM-[A-Z0-9]+$/i.test(gtmId)) {
  throw new Error("NEXT_PUBLIC_GTM_ID must be a GTM container ID (for example, GTM-ABCDEFGH).");
}

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

/* eslint-disable @next/next/next-script-for-ga -- Keep the official GTM snippet in the exported HTML head before hydration. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant" className={notoSansTC.variable}>
      <head>
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(gtmId)});`,
            }}
          />
        )}
      </head>
      <body>
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        )}
        <ThemeRegistry><Header /><main>{children}</main><Footer /><TitleUnderlineObserver /></ThemeRegistry>
      </body>
    </html>
  );
}
/* eslint-enable @next/next/next-script-for-ga */
