"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { ImageSwiper } from "@/components/ui/image-swiper";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "Nest Hex",
        description:
            "A tiny, class-based, NestJS-native library for building pluggable adapters following the Ports & Adapters (Hexagonal Architecture) pattern with minimal boilerplate.",
        tags: ["NestJS", "CLI", "CI/CD", "TypeScript"],
        liveUrl: "https://npmjs.com/package/nest-hex",
        githubUrl: "https://github.com/LiorVainer/nest-hex",
        gradient: "from-emerald-500 to-teal-600",
        images: [],
    },
    {
        title: "SportScanner",
        description:
            "AI-powered platform for discovering and generating personalized sport match travel packages. Search, refine, and collaborate on group trips based on your favorite teams.",
        tags: ["Google Gemini", "AI Agents", "SSE", "Observability"],
        liveUrl: undefined,
        githubUrl: "https://github.com/LiorVainer/sport-scanner",
        gradient: "from-orange-500 to-red-500",
        images: [],
    },
    {
        title: "Sitewave",
        description:
            "AI-powered website discovery and bookmarking assistant. Suggests useful websites via natural language prompts, enriched with videos, folder suggestions, and a searchable bookmark tree.",
        tags: ["Next.js", "Tailwind CSS", "Convex", "Clerk"],
        liveUrl: "https://sitewave.app",
        githubUrl: "https://github.com/LiorVainer/sitewave",
        gradient: "from-violet-500 to-purple-600",
        images: [
            "/sitewave-1.png",
            "/sitewave-2.png",
            "/sitewave-3.png",
            "/sitewave-4.png",
        ],
    },
    {
        title: "4REST",
        description:
            "HTTP REST Client built on top of axios and zod packages. Easy to use and extensively customizable, extendable and configurable services with built-in CRUD methods.",
        tags: ["TypeScript", "npm", "Jest", "REST APIs"],
        liveUrl: "https://npmjs.com/package/4rest",
        githubUrl: "https://github.com/LiorVainer/4rest",
        gradient: "from-cyan-500 to-blue-600",
        images: [],
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
                            {/* Project Images */}
                            {project.images.length > 0 ? (
                                <ImageSwiper
                                    images={project.images}
                                    className="h-[200px] aspect-auto rounded-none rounded-t-2xl"
                                />
                            ) : (
                                <div
                                    className={cn(
                                        "h-[200px] bg-gradient-to-br opacity-30",
                                        project.gradient,
                                    )}
                                />
                            )}

                            {/* Content */}
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
