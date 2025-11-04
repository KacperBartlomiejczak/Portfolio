import "./globals.css";

import { Toaster } from "react-hot-toast";
import { firaCode, inter } from "@/app/ui/fonts";
import { Metadata } from "next";
import Nav from "@/components/nav/nav";

export const metadata: Metadata = {
  title: "Kacper Bartłomiejczak – Frontend Developer",

  description:
    "Portfolio i projekty programistyczne Kacpra Bartłomiejczaka – frontend developera specjalizującego się w React, Next.js i nowoczesnych technologiach webowych.",
  authors: [
    {
      name: "Kacper Bartłomiejczak",
      url: "https://www.kacperbartlomiejczak.pl",
    },
  ],
  keywords: [
    "Kacper Bartłomiejczak",
    "Frontend Developer",
    "Next.js",
    "React",
    "JavaScript",
    "Portfolio",
    "Web Developer",
    "Programista",
  ],
  metadataBase: new URL("https://www.kacperbartlomiejczak.pl"),

  openGraph: {
    title: "Kacper Bartłomiejczak – Portfolio Frontend Developera",
    description:
      "Zobacz moje projekty, aplikacje webowe i doświadczenie w technologiach React, Next.js, TypeScript i Tailwind CSS.",
    url: "https://www.kacperbartlomiejczak.pl",
    siteName: "Kacper Bartłomiejczak",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/headerImg.webp",
        width: 1200,
        height: 630,
        alt: "Kacper Bartłomiejczak – portfolio frontend developera",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.kacperbartlomiejczak.pl",
  },

  category: "technology",
  verification: {
    google: "e3jI6WGBDgH3QQrRnuC0rzJSLs3UFBwhQmzYqKyfJaY",
  },
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
        className={`${firaCode.className} bg-bg-color scroll-pt-24 md:scroll-pt-24 overflow-hidden`}
      >
        <main className="w-full relative bg-bg-color dark:bg-background">
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
      </body>
    </html>
  );
}
