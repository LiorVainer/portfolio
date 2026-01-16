"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressBarProps {
    /** Height of the progress bar */
    height?: number;
    /** Color of the progress bar */
    color?: string;
    /** Background color of the track */
    backgroundColor?: string;
    /** Z-index for the progress bar */
    zIndex?: number;
}

export function ScrollProgressBar({
    height = 3,
    color = "white",
    backgroundColor = "rgba(255, 255, 255, 0.1)",
    zIndex = 50,
}: ScrollProgressBarProps) {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();

    // Smooth spring animation for the progress
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    // Show progress bar only after scrolling a bit
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsVisible(scrollTop > 100);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Check initial state

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 right-0 pointer-events-none"
            style={{
                zIndex,
                height,
                backgroundColor,
                opacity: isVisible ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
            }}
        >
            <motion.div
                className="h-full origin-left"
                style={{
                    scaleX,
                    backgroundColor: color,
                }}
            />
        </div>
    );
}
