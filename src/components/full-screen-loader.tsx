"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { LoaderContext } from "@/components/loader-context";
import { Progress } from "@/components/ui/progress";

interface FullScreenLoaderProps {
    children: ReactNode;
    /** Duration of the loading animation in milliseconds */
    duration?: number;
    /** Minimum loader display time before allowing dismiss */
    minDisplayTime?: number;
}

// Easing function for realistic progress feel
const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

export function FullScreenLoader({
    children,
    duration = 2500,
    minDisplayTime = 2000,
}: FullScreenLoaderProps) {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    // Track scroll progress for the reveal animation (0 to 1)
    const scrollProgress = useMotionValue(0);
    const accumulatedScroll = useRef(0);
    const scrollThreshold = 400; // Total scroll needed to fully dismiss

    // Spring animation for smooth movement
    const smoothProgress = useSpring(scrollProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Transform scroll progress to translateY values
    const loaderY = useTransform(smoothProgress, [0, 1], ["0%", "-100%"]);

    // Hide scrollbars while loader is active
    useEffect(() => {
        if (!isDismissed) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isDismissed]);

    // Animate progress from 0 to 100
    useEffect(() => {
        const start = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - start;
            const t = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuart(t) * 100;

            setProgress(easedProgress);

            if (t < 1) {
                requestAnimationFrame(animate);
            } else {
                const remaining = minDisplayTime - elapsed;
                if (remaining > 0) {
                    setTimeout(() => setIsLoaded(true), remaining);
                } else {
                    setIsLoaded(true);
                }
            }
        };

        requestAnimationFrame(animate);
    }, [duration, minDisplayTime]);

    // Handle scroll-based dismissal
    useEffect(() => {
        if (!isLoaded || isDismissed) return;

        const handleWheel = (e: WheelEvent) => {
            // Only respond to downward scroll
            if (e.deltaY > 0) {
                accumulatedScroll.current += e.deltaY;
                const newProgress = Math.min(accumulatedScroll.current / scrollThreshold, 1);
                scrollProgress.set(newProgress);

                if (newProgress >= 1) {
                    setIsDismissed(true);
                }
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            const touch = e.touches[0];
            if (touch) {
                (window as Window & { _touchStartY?: number })._touchStartY = touch.clientY;
            }
        };

        const handleTouchMove = (e: TouchEvent) => {
            const touchStartY = (window as Window & { _touchStartY?: number })._touchStartY;
            if (touchStartY === undefined) return;

            const touch = e.touches[0];
            if (!touch) return;

            const deltaY = touchStartY - touch.clientY;

            // Only respond to upward swipe (scroll down)
            if (deltaY > 0) {
                accumulatedScroll.current += deltaY * 2; // Multiply for faster response on touch
                const newProgress = Math.min(accumulatedScroll.current / scrollThreshold, 1);
                scrollProgress.set(newProgress);

                if (newProgress >= 1) {
                    setIsDismissed(true);
                }
            }

            (window as Window & { _touchStartY?: number })._touchStartY = touch.clientY;
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown" || e.key === " " || e.key === "Enter") {
                e.preventDefault();
                accumulatedScroll.current += 100;
                const newProgress = Math.min(accumulatedScroll.current / scrollThreshold, 1);
                scrollProgress.set(newProgress);

                if (newProgress >= 1) {
                    setIsDismissed(true);
                }
            }
        };

        // Prevent actual page scroll while loader is active
        const preventScroll = (e: Event) => {
            if (!isDismissed) {
                e.preventDefault();
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isLoaded, isDismissed, scrollProgress]);

    // Re-enable scroll and reset to top after dismissed
    useEffect(() => {
        if (isDismissed) {
            document.body.style.overflow = "";
            // Reset scroll position to top
            window.scrollTo(0, 0);
        }
    }, [isDismissed]);

    return (
        <div className="relative">
            {/* Loader Overlay - slides up on scroll */}
            {!isDismissed && (
                <motion.div
                    style={{ y: loaderY }}
                    className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
                >
                    {/* Loader Content - Centered */}
                    <div className="flex flex-col items-center gap-8 px-8 w-full max-w-md">
                        {/* Name/Branding */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-3xl md:text-4xl font-light tracking-[0.2em] text-white"
                        >
                            LIOR VAINER
                        </motion.h1>

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ opacity: 0, scaleX: 0.8 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="w-full"
                        >
                            <Progress
                                value={progress}
                                className="h-1 bg-white/10 [&>[data-slot=progress-indicator]]:bg-white"
                            />
                        </motion.div>

                        {/* Progress Percentage */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.3 }}
                            className="text-sm text-white/50 font-mono"
                        >
                            {Math.round(progress)}%
                        </motion.span>
                    </div>

                    {/* Scroll Indicator - Absolute positioned at bottom */}
                    {isLoaded && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                        >
                            <span className="text-xs text-white/60 tracking-widest uppercase">
                                Scroll to enter
                            </span>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                                className="w-5 h-8 border border-white/30 rounded-full flex items-start justify-center p-1"
                            >
                                <motion.div
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut",
                                    }}
                                    className="w-1 h-2 bg-white/60 rounded-full"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            )}

            {/* Main Content - visible behind loader */}
            <LoaderContext.Provider value={{ isLoaderDismissed: isDismissed }}>
                <div className={isDismissed ? "" : "pointer-events-none"}>
                    {children}
                </div>
            </LoaderContext.Provider>
        </div>
    );
}
