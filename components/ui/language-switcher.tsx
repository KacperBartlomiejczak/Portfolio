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
      className="px-3 py-1 bg-transparent border border-black/10 hover:border-black/30 dark:border-white/20 dark:hover:border-white/50 rounded-md text-sm font-medium transition-colors text-black/70 hover:text-black dark:text-zinc-300 dark:hover:text-white"
    >
      {locale === "pl" ? "EN" : "PL"}
    </motion.button>
  );
}
