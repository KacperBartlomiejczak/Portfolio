import "./globals.css";

import { Toaster } from "react-hot-toast";
import { firaCode, inter } from "@/app/ui/fonts";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Kacper Bartłomiejczak",
  description: "Portfolio i projekty programistyczne Kacpra Bartłomiejczaka",
  authors: [{ name: "Kacper Bartłomiejczak" }],

  openGraph: {
    title: "Kacper Bartłomiejczak",
    description: "Portfolio frontend developera",

    siteName: "Kacper Bartłomiejczak",
    locale: "pl_PL",
    type: "website",
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
        <link rel="preload" href="/headerImg.jpg" as="image" />
      </head>
      <body
        className={`${firaCode.className} bg-bg-color scroll-pt-24 md:scroll-pt-24 overflow-hidden`}
      >
        {children}

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
