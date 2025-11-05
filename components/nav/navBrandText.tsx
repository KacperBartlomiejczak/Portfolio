import Link from "next/link";
import { inter } from "@/app/ui/fonts";

export default function NavBrandText() {
  return (
    <Link
      href="/"
      className={`${inter.className} antialiased text-primary-color dark:text-brand relative z-20 text-lg md:text-xl font-bold hover:text-cta dark:hover:text-accent transition-colors duration-500`}
    >
      Kacper Bartłomiejczak
    </Link>
  );
}
