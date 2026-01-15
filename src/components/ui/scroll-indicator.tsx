"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
            <span className="text-xs text-white/40 tracking-widest uppercase">
                Scroll
            </span>
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-2"
            >
                <motion.div className="w-1 h-1 bg-white/60 rounded-full" />
            </motion.div>
        </motion.div>
    );
}
