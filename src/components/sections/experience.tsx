"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        period: "Feb 2024 – Present",
        role: "Senior Software Engineer",
        company: "Lotem, IDF Digital & Data Unit (Mazpen)",
        description:
            "Leading end-to-end development of large-scale, real-time distributed systems. Driving architectural migration from Java monolith to microservices-based monorepo.",
        current: true,
    },
    {
        period: "Mar 2021 – Feb 2024",
        role: "Full Stack Developer",
        company: "Unit 8200, Israeli Military Intelligence",
        description:
            "Built management and data analysis systems for disaster response. Led two end-to-end projects and designed a 3-month full-stack programming course.",
        current: false,
    },
    {
        period: "Sep 2022 – Sep 2025",
        role: "BSc Computer Science",
        company: "The College of Management",
        description:
            "Final Average: 91. Focused on algorithms, distributed systems, and software architecture.",
        current: false,
    },
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-24 md:py-32 bg-zinc-950">
            <div className="max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-xs tracking-[0.3em] text-white/40 uppercase">
                        Career Path
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-white mt-2">
                        Experience
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-white/10" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.period}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative pl-8 md:pl-16 pb-12 last:pb-0"
                        >
                            {/* Dot */}
                            <div
                                className={`absolute left-0 md:left-4 top-1 w-2 h-2 -translate-x-1/2 rounded-full ${exp.current ? "bg-emerald-500 ring-4 ring-emerald-500/20" : "bg-white/40"}`}
                            />

                            {/* Content */}
                            <div className="space-y-2">
                                <span className="text-xs text-white/40 font-mono">
                                    {exp.period}
                                </span>
                                <h3 className="text-lg font-medium text-white">
                                    {exp.role}
                                </h3>
                                <p className="text-sm text-white/60">
                                    {exp.company}
                                </p>
                                <p className="text-sm text-white/40 leading-relaxed pt-2">
                                    {exp.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
