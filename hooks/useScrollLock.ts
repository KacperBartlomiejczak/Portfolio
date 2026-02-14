"use client";

import { useEffect } from "react";

/**
 * Hook to lock body scroll when a modal/overlay is open
 * Handles scrollbar width to prevent layout shift
 * Prevents both touch and wheel scrolling outside modal
 * @param enabled - Optional boolean to conditionally enable scroll lock (default: true)
 */
export function useScrollLock(enabled: boolean = true) {
    useEffect(() => {
        // Only apply scroll lock if enabled
        if (!enabled) return;

        const body = document.body;

        // Calculate scrollbar width to prevent layout shift
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

        // Store original styles
        const originalOverflow = body.style.overflow;
        const originalPaddingRight = body.style.paddingRight;

        // Apply scroll lock
        body.style.overflow = "hidden";

        // Add padding to prevent layout shift if scrollbar exists
        if (scrollBarWidth > 0) {
            body.style.paddingRight = `${scrollBarWidth}px`;
        }

        // Prevent touch move on iOS outside scrollable areas
        const preventTouchScroll = (e: TouchEvent) => {
            const target = e.target as HTMLElement;
            const isScrollable = target.closest('[data-scrollable="true"]');

            if (!isScrollable) {
                e.preventDefault();
            }
        };

        // Prevent wheel scroll on desktop outside scrollable areas
        const preventWheelScroll = (e: WheelEvent) => {
            const target = e.target as HTMLElement;
            const isScrollable = target.closest('[data-scrollable="true"]');

            if (!isScrollable) {
                e.preventDefault();
            }
        };

        // Add event listeners
        document.addEventListener("touchmove", preventTouchScroll, { passive: false });
        document.addEventListener("wheel", preventWheelScroll, { passive: false });

        // Cleanup function
        return () => {
            // Restore original styles
            body.style.overflow = originalOverflow;
            body.style.paddingRight = originalPaddingRight;

            // Remove event listeners
            document.removeEventListener("touchmove", preventTouchScroll);
            document.removeEventListener("wheel", preventWheelScroll);
        };
    }, [enabled]);
}
