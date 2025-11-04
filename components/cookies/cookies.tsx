"use client";

import { useEffect, useState } from "react";
import { initAnalytics } from "@/lib/analystics";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "all") {
      initAnalytics();
    }
  }, []);

  const handleConsent = (type: "all" | "necessary") => {
    localStorage.setItem("cookie-consent", type);
    setVisible(false);
    if (type === "all") initAnalytics();
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 
                 max-w-3xl w-[95%] p-5 rounded-2xl shadow-xl
                 flex flex-col  md:items-center md:justify-between gap-4
                 bg-card text-primary border border-secondary"
    >
      <p className="text-sm md:text-base leading-snug text-secondary">
        Używamy plików cookie, aby zapewnić najlepsze wrażenia na stronie.
        Niektóre są niezbędne, inne pomagają nam analizować ruch i ulepszać
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
                     hover:bg-bg-color border border-secondary-color transition font-medium"
        >
          Tylko niezbędne
        </button>
        <button
          onClick={() => handleConsent("all")}
          className="px-4 py-2 rounded-xl bg-cta text-white font-semibold 
                     hover:opacity-90 transition"
        >
          Akceptuję wszystkie
        </button>
      </div>
    </div>
  );
}
