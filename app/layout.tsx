import "./globals.css";
import { firaCode } from "@/app/ui/fonts";
import { Toaster } from "react-hot-toast";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.className} bg-bg-color scroll-pt-24 md:scroll-pt-24`}
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
