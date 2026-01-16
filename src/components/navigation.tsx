"use client";

import { Briefcase, Code, FolderOpen, Home, Mail } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLoaderContext } from "@/components/loader-context";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
    { name: "Home", url: "#hero", icon: Home },
    { name: "Projects", url: "#projects", icon: FolderOpen },
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Skills", url: "#skills", icon: Code },
    { name: "Contact", url: "#contact", icon: Mail },
];

export function Navigation() {
    const { isLoaderDismissed } = useLoaderContext();

    return (
        <AnimatePresence>
            {isLoaderDismissed && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <NavBar items={navItems} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
