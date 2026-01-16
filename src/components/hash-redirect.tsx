"use client";

import { useEffect } from "react";

/**
 * Removes hash from URL on mount to ensure users start from the top.
 * This prevents direct navigation to sections like #skills or #about.
 */
export function HashRedirect() {
    useEffect(() => {
        // Check if there's a hash in the URL
        if (window.location.hash) {
            // Replace the URL without the hash (without adding to history)
            window.history.replaceState(null, "", window.location.pathname);
            // Scroll to top
            window.scrollTo(0, 0);
        }
    }, []);

    return null;
}
