import "../globals.css";

import { Toaster } from "react-hot-toast";
import { firaCode, inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import Nav from "@/components/nav/nav";
import CookieConsent from "@/components/cookies/cookies";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnalyticsProvider } from "@/context/analysticsContext";
import { MobileProvider } from "@/context/mobileContext";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    metadataBase: new URL("https://www.kacperbartlomiejczak.pl"),
    title: "Kacper Bartłomiejczak – Frontend developer",
    description:
      "Portfolio i projekty Kacpra Bartłomiejczaka – frontend developera (React, Next.js, TypeScript, Tailwind). Szybkie, czytelne i skuteczne strony internetowe.",
    authors: [
      {
        name: "Kacper Bartłomiejczak",
        url: "https://www.kacperbartlomiejczak.pl",
      },
    ],
    keywords: [
      "Kacper Bartłomiejczak",
      "frontend developer",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Toruń",
      "Poland",
      "portfolio",
      "web developer",
      "programista front-end",
    ],

    openGraph: {
      type: "website",
      url: "https://www.kacperbartlomiejczak.pl",
      siteName: "Kacper Bartłomiejczak",
      locale: locale === "pl" ? "pl_PL" : "en_US",
      title: "Kacper Bartłomiejczak – Portfolio Frontend developera",
      description:
        "Zobacz projekty i doświadczenie w technologiach React, Next.js, TypeScript i Tailwind CSS.",
      images: [
        {
          url: "https://www.kacperbartlomiejczak.pl/headerImg.webp",
          width: 1200,
          height: 630,
          alt: "Kacper Bartłomiejczak – portfolio frontend developera",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: "Kacper Bartłomiejczak – Frontend developer",
      description:
        "Szybkie, czytelne i skuteczne strony w React/Next.js. Portfolio i projekty.",
      images: ["https://www.kacperbartlomiejczak.pl/headerImg.webp"],
    },

    robots: {
      index: true,
      follow: true,
      googleBot:
        "index: true, follow: true, maxSnippet: -1, maxImagePreview: large,maxVideoPreview: -1,",
    },

    alternates: {
      canonical: `https://www.kacperbartlomiejczak.pl/${locale}`,
      languages: {
        pl: "https://www.kacperbartlomiejczak.pl/pl",
        en: "https://www.kacperbartlomiejczak.pl/en",
      },
    },

    referrer: "origin-when-cross-origin",

    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "64x64", type: "image/png" },
      ],
      shortcut: ["/favicon.png"],
    },

    verification: {
      google: "e3jI6WGBDgH3QQrRnuC0rzJSLs3UFBwhQmzYqKyfJaY",
    },

    category: "technology",
  };
}


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        {/* DNS Prefetch for critical domains */}
        <link rel="dns-prefetch" href="https://www.kacperbartlomiejczak.pl" />
        <link rel="dns-prefetch" href="https://api.emailjs.com" />

        {/* Preconnect to same origin with high priority */}
        <link
          rel="preconnect"
          href="https://www.kacperbartlomiejczak.pl"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-bg-color scroll-pt-24 md:scroll-pt-24">
        <NextIntlClientProvider messages={messages}>
          <MobileProvider>
            <AnalyticsProvider>
              <main className="w-full relative bg-bg-color dark:bg-background overflow-x-hidden">
                <Nav />
                {children}
              </main>
              <Toaster
                position="top-right"
                toastOptions={{
                  duration: 3000,
                  style: {
                    fontFamily: inter.style.fontFamily,
                  },
                }}
              />
              <CookieConsent />
            </AnalyticsProvider>
          </MobileProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
