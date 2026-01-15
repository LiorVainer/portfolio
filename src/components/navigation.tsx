"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "py-4" : "py-6",
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className={cn(
              "text-lg font-medium transition-colors",
              scrolled ? "text-white" : "text-white/80 hover:text-white",
            )}
          >
            LV
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/80 hover:text-white"
          >
            <span className="sr-only">Menu</span>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-transform",
                  mobileOpen && "rotate-45 translate-y-2",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-opacity",
                  mobileOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-full bg-current transition-transform",
                  mobileOpen && "-rotate-45 -translate-y-2",
                )}
              />
            </div>
          </button>
        </div>

        {/* Backdrop blur when scrolled */}
        <div
          className={cn(
            "absolute inset-0 -z-10 transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0",
          )}
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, transparent 100%)",
            backdropFilter: scrolled ? "blur(12px)" : "none",
          }}
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
