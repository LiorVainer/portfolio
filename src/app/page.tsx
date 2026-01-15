// ============================================
// page.tsx - Enhanced Homepage
// ============================================

import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { DotScreenShader } from "@/components/dot-shader-background";
import { Navigation } from "@/components/navigation";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { Typewriter } from "@/components/ui/typewriter-text";

export default function Home() {
    return (
        <main className="bg-black">
            {/* Fixed Navigation */}
            <Navigation />

            {/* Hero Section */}
            <section
                id="hero"
                className="h-svh w-screen flex flex-col gap-6 items-center justify-center relative overflow-hidden"
            >
                {/* Shader Background */}
                <div className="absolute inset-0">
                    <DotScreenShader />
                </div>

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

                    {/* Subtle label */}
                    <span className="text-xs md:text-sm tracking-[0.3em] text-white/50 uppercase">
                        Senior Full-Stack Engineer
                    </span>

                    {/* Name */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mix-blend-exclusion text-white whitespace-nowrap pointer-events-none">
                        LIOR VAINER
                    </h1>

                    {/* Typewriter - cycling through different focuses */}
                    <div className="h-16 flex items-center">
                        <Typewriter
                            text={[
                                "Building scalable real-time systems",
                                "Crafting cloud-native architectures",
                                "Creating open-source developer tools",
                                "Integrating AI into production apps",
                            ]}
                            speed={70}
                            deleteSpeed={40}
                            delay={2000}
                            loop
                            className="text-base sm:text-lg md:text-xl text-center text-white/70 mix-blend-exclusion max-w-xl leading-relaxed pointer-events-none"
                        />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mt-4">
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

                {/* Scroll Indicator */}
                <ScrollIndicator />
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
    );
}
