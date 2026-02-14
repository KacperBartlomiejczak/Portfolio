"use client";

import { useEffect, useState } from "react";
import { useAnalytics } from "@/context/analysticsContext";
import { useTranslations, useLocale } from "next-intl";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { enableAnalytics } = useAnalytics();
  const t = useTranslations("Cookies");
  const locale = useLocale();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (type: "all" | "necessary") => {
    localStorage.setItem("cookie-consent", type);
    setVisible(false);
    if (type === "all") enableAnalytics();
  };

  if (!visible) return null;

  // Locale-aware privacy policy link
  const privacyPolicyPath = locale === "pl" ? "/pl/polityka-prywatnosci" : "/en/privacy-policy";

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 
                 max-w-3xl w-[95%] p-4 sm:p-5 rounded-2xl shadow-xl bg-card
                 flex flex-col gap-4
                 dark:bg-card text-primary border dark:border-secondary border-card"
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
    >
      <p className="text-sm sm:text-base leading-snug text-white dark:text-white">
        {t("message")}{" "}
        <a
          href={privacyPolicyPath}
          className="text-accent underline hover:text-brand transition"
        >
          {t("privacy_link")}
        </a>
        .
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-end">
        <button
          onClick={() => handleConsent("necessary")}
          className="px-4 py-2 rounded-xl bg-secondary-bg text-secondary-color 
                     hover:bg-bg-color border border-secondary-color transition font-medium cursor-pointer
                     text-sm sm:text-base w-full sm:w-auto"
          aria-label={t("button_necessary")}
        >
          {t("button_necessary")}
        </button>
        <button
          onClick={() => handleConsent("all")}
          className="px-4 py-2 rounded-xl bg-[#257d79] text-white font-semibold 
                     hover:opacity-90 transition cursor-pointer
                     text-sm sm:text-base w-full sm:w-auto"
          aria-label={t("button_accept")}
        >
          {t("button_accept")}
        </button>
      </div>
    </div>
  );
}
