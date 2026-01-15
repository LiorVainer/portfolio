"use client";

import { Briefcase, Code, FolderOpen, Home, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
    { name: "Home", url: "#hero", icon: Home },
    { name: "Projects", url: "#projects", icon: FolderOpen },
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Skills", url: "#skills", icon: Code },
    { name: "Contact", url: "#contact", icon: Mail },
];

export function Navigation() {
    return <NavBar items={navItems} />;
}
