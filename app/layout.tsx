import "./globals.css";

import { Toaster } from "react-hot-toast";
import { firaCode, inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import Nav from "@/components/nav/nav";
import CookieConsent from "@/components/cookies/cookies";

export const metadata: Metadata = {
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
    locale: "pl_PL",
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
    canonical: "https://www.kacperbartlomiejczak.pl",
  },

  referrer: "origin-when-cross-origin",

  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },

  verification: {
    google: "e3jI6WGBDgH3QQrRnuC0rzJSLs3UFBwhQmzYqKyfJaY",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://api.emailjs.com" />
      </head>
      <body
        className={`${firaCode.className} bg-bg-color scroll-pt-24 md:scroll-pt-24 overflow-hidden `}
      >
        <main className="w-full relative bg-bg-color dark:bg-background ">
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
      </body>
    </html>
  );
}
