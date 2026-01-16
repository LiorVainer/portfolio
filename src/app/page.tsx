// ============================================
// page.tsx - Enhanced Homepage
// ============================================

import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { DotScreenShader } from "@/components/dot-shader-background";
import { FullScreenLoader } from "@/components/full-screen-loader";
import { HashRedirect } from "@/components/hash-redirect";
import { Navigation } from "@/components/navigation";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { Typewriter } from "@/components/ui/typewriter-text";

const ABOUT_DESCRIPTION =
    "I'm a Senior Full-Stack Software Engineer experienced in building scalable TypeScript-based systems with React, Node.js, and NestJS. I've worked on large-scale, real-time, cloud-native platforms using AWS, Azure, microservices, and Kubernetes. My focus is on system design, AI integration, and end-to-end development of production-grade systems.";

export default function Home() {
    return (
        <FullScreenLoader>
            {/* Redirect to base URL if hash is present */}
            <HashRedirect />

            <main className="bg-black">
                {/* Fixed Navigation */}
                <Navigation />

                {/* Scroll Progress Bar */}
                <ScrollProgressBar />

                {/* Hero Section */}
                <section
                    id="hero"
                    className="h-svh w-screen flex flex-col items-center justify-center relative overflow-hidden"
                >
                    {/* Shader Background */}
                    <div className="absolute inset-0">
                        <DotScreenShader />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-6 px-4">
                        {/* Subtle label */}
                        <span className="text-xs md:text-sm tracking-[0.3em] text-white/50 uppercase">
                            Senior Full-Stack Engineer
                        </span>

                        {/* Name */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mix-blend-exclusion text-white whitespace-nowrap pointer-events-none">
                            LIOR VAINER
                        </h1>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-all hover:scale-105"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-white/30 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all"
                            >
                                Get in Touch
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 mt-8">
                            <a
                                href="https://github.com/LiorVainer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/lior-vainer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:liorvainer@gmail.com"
                                className="p-3 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Profile / About Section */}
                <section
                    id="about"
                    className="min-h-svh w-screen flex flex-col items-center justify-center relative overflow-hidden py-20 bg-black"
                >
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-6 px-4">
                        {/* Profile Picture */}
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-white/10 blur-xl scale-110" />
                            <Image
                                src="/profile-picture.jpg"
                                alt="Lior Vainer profile photo"
                                width={160}
                                height={160}
                                className="relative size-32 md:size-40 rounded-full border-2 border-white/20 object-cover shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                                priority
                            />
                        </div>

                        {/* Section Title */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white pointer-events-none">
                            About Me
                        </h2>

                        {/* Extended About Description - container reserves space for full text */}
                        <div className="max-w-2xl mt-4 relative">
                            {/* Invisible text to reserve space */}
                            <span className="text-sm sm:text-base text-center text-transparent leading-relaxed pointer-events-none block" aria-hidden="true">
                                {ABOUT_DESCRIPTION}
                            </span>
                            {/* Typewriter positioned on top */}
                            <Typewriter
                                text={ABOUT_DESCRIPTION}
                                speed={30}
                                loop={false}
                                startOnView
                                className="text-sm sm:text-base text-center text-white/60 leading-relaxed pointer-events-none absolute inset-0"
                            />
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <ProjectsSection />

                {/* Experience Section */}
                <ExperienceSection />

                {/* Skills Section */}
                <SkillsSection />

                {/* Contact Section */}
                <ContactSection />
            </main>
        </FullScreenLoader>
    );
}
