"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import { initAnalytics } from "@/lib/analystics";

interface AnalyticsContextType {
  analyticsEnabled: boolean;
  enableAnalytics: () => void;
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  analyticsEnabled: false,
  enableAnalytics: () => {},
});

export const useAnalytics = () => useContext(AnalyticsContext);

export const AnalyticsProvider = ({ children }: { children: ReactNode }) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const enableAnalytics = () => {
    if (!analyticsEnabled) {
      initAnalytics();
      setAnalyticsEnabled(true);
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "all") enableAnalytics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnalyticsContext.Provider value={{ analyticsEnabled, enableAnalytics }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
