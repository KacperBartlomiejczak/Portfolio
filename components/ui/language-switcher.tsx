"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Locale");

  const toggleLanguage = () => {
    const nextLocale = locale === "pl" ? "en" : "pl";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-3 py-1 bg-transparent border border-zinc-700 hover:border-zinc-500 rounded-md text-sm font-medium transition-colors text-zinc-300 hover:text-white"
    >
      {locale === "pl" ? "EN" : "PL"}
    </motion.button>
  );
}
