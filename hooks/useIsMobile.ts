"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if the current device is a mobile device
 * Uses both matchMedia for screen size and userAgent for device detection
 * @returns boolean - true if mobile device, false otherwise
 */
export function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check screen size
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        // Check user agent for mobile devices
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

        // Consider it mobile if either screen is small OR it's a mobile device
        const checkIsMobile = () => {
            setIsMobile(mediaQuery.matches || isMobileDevice);
        };

        // Initial check
        checkIsMobile();

        // Listen for screen size changes
        mediaQuery.addEventListener("change", checkIsMobile);

        return () => {
            mediaQuery.removeEventListener("change", checkIsMobile);
        };
    }, []);

    return isMobile;
}
