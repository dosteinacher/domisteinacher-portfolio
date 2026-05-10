import type { Metadata } from "next";
import { Barlow_Condensed, Barlow } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dominik Steinacher",
    template: "%s · Dominik Steinacher",
  },
  description:
    "Swiss Pole Vault Champion. CrossFit Coach at GO PURE. Senior Manager Transformational Growth & Strategy at Adobe. Building communities and pushing limits.",
  metadataBase: new URL("https://www.domisteinacher.me"),
  openGraph: {
    siteName: "Dominik Steinacher",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable} ${barlow.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
