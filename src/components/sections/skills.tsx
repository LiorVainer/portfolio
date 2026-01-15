// ============================================
// components/sections/skills.tsx
// ============================================

"use client";

import { motion } from "framer-motion";
import { getSkillIcon } from "@/components/icons/tech-icons";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            "React",
            "Next.js",
            "React Native",
            "Redux.js",
            "TypeScript",
            "JavaScript",
            "Tailwind CSS",
            "ShadCN",
            "Sass",
            "HTML",
            "CSS",
            "Figma",
        ],
    },
    {
        title: "Backend",
        skills: [
            "Node.js",
            "NestJS",
            "Express",
            "Spring Boot",
            "Java",
            "Kotlin",
            "REST APIs",
            "WebSocket",
            "SSE",
        ],
    },
    {
        title: "Cloud & DevOps",
        skills: [
            "AWS",
            "Azure",
            "Azure DevOps",
            "Lambda",
            "Azure Functions",
            "S3",
            "Azure Blob",
            "SQS",
            "Service Bus",
            "Rekognition",
            "Docker",
            "Kubernetes",
            "CI/CD",
        ],
    },
    {
        title: "Data & Storage",
        skills: [
            "PostgreSQL",
            "MongoDB",
            "Redis",
            "SQL Server",
            "TypeORM",
            "Apache Kafka",
        ],
    },
    {
        title: "AI & ML",
        skills: ["Google Gemini", "AI Agents", "Artificial Intelligence"],
    },
    {
        title: "Testing & Tools",
        skills: [
            "Jest",
            "Unit Testing",
            "Code Coverage",
            "npm",
            "Nx",
            "Monorepo",
            "Observability",
            "Agile",
            "Version Control",
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
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {skillCategories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="h-full p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col"
                        >
                            <h3 className="text-sm font-medium text-white/80 mb-4">
                                {category.title}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => {
                                    const Icon = getSkillIcon(
                                        skill,
                                        category.title,
                                    );
                                    return (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-white/5 text-white/60 rounded-full hover:bg-white/10 hover:text-white transition-colors cursor-default"
                                        >
                                            <Icon
                                                size={14}
                                                aria-hidden="true"
                                            />
                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
