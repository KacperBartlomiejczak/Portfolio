import {
  Inter as InterVariable,
  Fira_Code as FiraCodeVariable,
} from "next/font/google";

export const inter = InterVariable({
  subsets: ["latin"],

  display: "swap",
  variable: "--font-inter",
});

export const firaCode = FiraCodeVariable({
  subsets: ["latin"],

  display: "swap",
  variable: "--font-fira-code",
});
