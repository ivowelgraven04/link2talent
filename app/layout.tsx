import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", weight: ["300","400","500","600","700","800"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://link2talent.nl";

export const viewport: Viewport = {
  width: "device-width", initialScale: 1, maximumScale: 5, themeColor: "#007BFF",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Link2Talent — Remote Salesprofessionals via de app", template: "%s | Link2Talent" },
  description: "Wij leveren binnen 14 dagen een remote setter die direct gesprekken voor je inplant. Flexibele salescapaciteit via een seatmodel. Vanaf €295 per maand.",
  keywords: ["remote setter", "salescapaciteit", "recruitment", "Link2Talent", "Amsterdam"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: "Link2Talent",
    title: "Link2Talent — Remote Salesprofessionals via de app",
    description: "Wij leveren binnen 14 dagen een remote setter die direct gesprekken voor je inplant. Vanaf €295 per maand.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={outfit.variable}>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <CustomCursor />
        {children}
        <Analytics />
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="681ad6ffbd14c522e7dd3d12"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
