"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface MobileContextType {
    isMobile: boolean;
}

const MobileContext = createContext<MobileContextType | undefined>(undefined);

export function MobileProvider({ children }: { children: ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if device is touch-enabled
        const checkMobile = () => {
            setIsMobile(
                typeof window !== "undefined" &&
                ("ontouchstart" in window || navigator.maxTouchPoints > 0)
            );
        };

        checkMobile();

        // Optional: listen for orientation changes
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <MobileContext.Provider value={{ isMobile }}>
            {children}
        </MobileContext.Provider>
    );
}

export function useMobile() {
    const context = useContext(MobileContext);
    if (context === undefined) {
        throw new Error("useMobile must be used within a MobileProvider");
    }
    return context.isMobile;
}
