import "./globals.css";
import { firaCode } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} bg-bg-color`}>{children}</body>
    </html>
  );
}
