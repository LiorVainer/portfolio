"use client";

import { useEffect, useRef, useState } from "react";
import { useLoaderContext } from "@/components/loader-context";

export interface TypewriterProps {
    text: string | string[];
    speed?: number;
    cursor?: string;
    loop?: boolean;
    deleteSpeed?: number;
    delay?: number;
    className?: string;
    /** Whether to wait for loader to be dismissed before starting. Default: true */
    waitForLoader?: boolean;
    /** Whether to wait until element is in viewport before starting. Default: false */
    startOnView?: boolean;
}

export function Typewriter({
    text,
    speed = 100,
    cursor = "|",
    loop = false,
    deleteSpeed = 50,
    delay = 1500,
    className,
    waitForLoader = true,
    startOnView = false,
}: TypewriterProps) {
    const { isLoaderDismissed } = useLoaderContext();
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [textArrayIndex, setTextArrayIndex] = useState(0);
    const [isInView, setIsInView] = useState(!startOnView);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    // Intersection Observer for viewport detection
    useEffect(() => {
        if (!startOnView || hasStarted) return;

        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    setIsInView(true);
                    setHasStarted(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [startOnView, hasStarted]);

    // Validate and process input text
    const textArray = Array.isArray(text) ? text : [text];
    const currentText = textArray[textArrayIndex] || "";

    // Determine if typing should be active
    const loaderReady = !waitForLoader || isLoaderDismissed;
    const canStart = loaderReady && isInView;

    // biome-ignore lint/correctness/useExhaustiveDependencies: textArray.length is derived from text prop
    useEffect(() => {
        if (!currentText || !canStart) return;

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (currentIndex < currentText.length) {
                        setDisplayText(
                            (prev) => prev + currentText[currentIndex],
                        );
                        setCurrentIndex((prev) => prev + 1);
                    } else if (loop) {
                        setTimeout(() => setIsDeleting(true), delay);
                    }
                } else {
                    if (displayText.length > 0) {
                        setDisplayText((prev) => prev.slice(0, -1));
                    } else {
                        setIsDeleting(false);
                        setCurrentIndex(0);
                        setTextArrayIndex(
                            (prev) => (prev + 1) % textArray.length,
                        );
                    }
                }
            },
            isDeleting ? deleteSpeed : speed,
        );

        return () => clearTimeout(timeout);
    }, [
        currentIndex,
        isDeleting,
        currentText,
        loop,
        speed,
        deleteSpeed,
        delay,
        displayText,
        textArray.length,
        canStart,
    ]);

    // Always render the span for IntersectionObserver, but hide content until loader is ready
    const showContent = loaderReady;

    return (
        <span ref={ref} className={className}>
            {showContent && (
                <>
                    {displayText}
                    <span className="animate-pulse">{cursor}</span>
                </>
            )}
        </span>
    );
}
