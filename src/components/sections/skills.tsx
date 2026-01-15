// ============================================
// components/sections/skills.tsx
// ============================================

"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            "React",
            "Next.js",
            "React Native",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
        ],
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "NestJS",
            "Express",
            "Kafka",
            "WebSockets",
            "REST APIs",
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            "AWS",
            "Azure",
            "Kubernetes",
            "Docker",
            "CI/CD",
            "Microservices",
        ],
    },
    {
        title: "Data & AI",
        skills: [
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "LLM Integration",
            "AI Agents",
        ],
    },
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-24 md:py-32 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-xs tracking-[0.3em] text-white/40 uppercase">
                        Tech Stack
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-white mt-2">
                        Skills
                    </h2>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-white/5 border border-white/10 rounded-2xl"
                        >
                            <h3 className="text-sm font-medium text-white/80 mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs px-3 py-1.5 bg-white/5 text-white/60 rounded-full hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
