"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Sitewave",
        description:
            "AI-powered website discovery and bookmarking assistant with natural language prompts and searchable bookmark trees.",
        tags: ["Next.js", "AI/LLM", "TypeScript"],
        liveUrl: "https://sitewave.app",
        githubUrl: "https://github.com/yourusername/sitewave",
        gradient: "from-violet-500 to-purple-600",
    },
    {
        title: "4rest",
        description:
            "Type-safe HTTP REST Client with extensible services, CRUD methods, and Zod validation. 100% test coverage.",
        tags: ["TypeScript", "npm", "REST"],
        liveUrl: "https://npmjs.com/package/4rest",
        githubUrl: "https://github.com/yourusername/4rest",
        gradient: "from-cyan-500 to-blue-600",
    },
    {
        title: "Starzi",
        description:
            "Multilingual movie discovery platform with IMDB data integration, alerts, and Hebrew localization.",
        tags: ["React", "Node.js", "MongoDB"],
        liveUrl: "https://starzi.app",
        githubUrl: "https://github.com/yourusername/starzi",
        gradient: "from-orange-500 to-red-500",
    },
    {
        title: "nest-hex",
        description:
            "NestJS-native library for hexagonal architecture with pluggable adapters and a built-in generator CLI tool.",
        tags: ["NestJS", "Architecture", "CLI"],
        liveUrl: "https://npmjs.com/package/nest-hex",
        githubUrl: "https://github.com/yourusername/nest-hex",
        gradient: "from-emerald-500 to-teal-600",
    },
];

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 md:py-32 bg-black">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <span className="text-xs tracking-[0.3em] text-white/40 uppercase">
                        Featured Work
                    </span>
                    <h2 className="text-3xl md:text-4xl font-light text-white mt-2">
                        Projects
                    </h2>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, i) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
                        >
                            {/* Gradient accent */}
                            <div
                                className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
                            />

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-medium text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-3">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/40 hover:text-white transition-colors"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-white/40 hover:text-white transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-white/60 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-3 py-1 bg-white/5 text-white/50 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
