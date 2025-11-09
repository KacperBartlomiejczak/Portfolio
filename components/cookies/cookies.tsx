"use client";

import { useEffect, useState } from "react";
import { useAnalytics } from "@/context/analysticsContext";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { enableAnalytics } = useAnalytics();

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

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 
                 max-w-3xl w-[95%] p-5 rounded-2xl shadow-xl bg-card
                 flex flex-col md:items-center md:justify-between gap-4
                 dark:bg-card text-primary border dark:border-secondary border-card"
    >
      <p className="text-sm md:text-base leading-snug text-white dark:text-white">
        Używam plików cookie, aby zapewnić najlepsze wrażenia na stronie.
        Niektóre są niezbędne, inne pomagają mi analizować ruch i ulepszać
        treści. Więcej informacji znajdziesz w{" "}
        <a
          href="/polityka-prywatnosci"
          className="text-accent underline hover:text-brand transition"
        >
          polityce prywatności
        </a>
        .
      </p>

      <div className="flex gap-3 justify-end shrink-0">
        <button
          onClick={() => handleConsent("necessary")}
          className="px-4 py-2 rounded-xl bg-secondary-bg text-secondary-color 
                     hover:bg-bg-color border border-secondary-color transition font-medium cursor-pointer"
        >
          Tylko niezbędne
        </button>
        <button
          onClick={() => handleConsent("all")}
          className="px-4 py-2 rounded-xl bg-[#257d79] text-white font-semibold 
                     hover:opacity-90 transition cursor-pointer"
        >
          Akceptuję wszystkie
        </button>
      </div>
    </div>
  );
}
