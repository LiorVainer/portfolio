"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 md:py-32 bg-zinc-950">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-xs tracking-[0.3em] text-white/40 uppercase">
                        Get in Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light text-white mt-2 mb-6">
                        Let's work together
                    </h2>
                    <p className="text-white/50 max-w-md mx-auto mb-12">
                        I'm always open to discussing new opportunities,
                        interesting projects, or just having a chat about tech.
                    </p>

                    {/* Contact Links */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                        <a
                            href="mailto:liorvainer@gmail.com"
                            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                        >
                            <Mail
                                size={20}
                                className="group-hover:scale-110 transition-transform"
                            />
                            <span>liorvainer@gmail.com</span>
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-8">
                        <a
                            href="https://github.com/LiorVainer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/lior-vainer"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-24 pt-8 border-t border-white/10"
                >
                    <p className="text-xs text-white/30">
                        © {new Date().getFullYear()} Lior Vainer
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
