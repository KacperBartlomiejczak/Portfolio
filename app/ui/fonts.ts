import { Inter, Fira_Code } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-fira-code",
});
