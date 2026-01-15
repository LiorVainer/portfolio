// Tech Icons - Using developer-icons package
// https://xandemon.github.io/developer-icons/

import {
    AWS,
    Azure,
    Docker,
    ExpressJsLight,
    Figma,
    Java,
    JavaScript,
    Kotlin,
    Kubernetes,
    MongoDB,
    NestJS,
    NextJs,
    NodeJs,
    PostgreSQL,
    React,
    Redis,
    Redux,
    Sass,
    Spring,
    TailwindCSS,
    TypeScript,
} from "developer-icons";
import {
    Boxes,
    Brain,
    CheckCircle,
    Cloud,
    Code,
    Cpu,
    Database,
    Eye,
    FileCode,
    FlaskConical,
    FunctionSquare,
    GitBranch,
    Globe,
    HardDrive,
    Layers,
    MessageSquare,
    Package,
    Paintbrush,
    Radio,
    Server,
    TestTube,
    Users,
    Workflow,
    Zap,
} from "lucide-react";
import type { ComponentType } from "react";

type IconProps = {
    size?: number;
    className?: string;
};

// Size class mapping for Tailwind
const sizeClasses: Record<number, string> = {
    12: "w-3 h-3",
    14: "w-3.5 h-3.5",
    16: "w-4 h-4",
    18: "w-[18px] h-[18px]",
    20: "w-5 h-5",
    24: "w-6 h-6",
};

// Wrapper to normalize developer-icons to accept size prop
function createDevIconWrapper(
    Icon: ComponentType<{ className?: string }>,
): ComponentType<IconProps> {
    return function DevIconWrapper({ size = 16, className }: IconProps) {
        const sizeClass = sizeClasses[size] ?? `w-[${size}px] h-[${size}px]`;
        return (
            <Icon className={`inline-block ${sizeClass} ${className ?? ""}`} />
        );
    };
}

// Wrapper for Lucide icons
function createLucideWrapper(
    Icon: ComponentType<{ size?: number; className?: string }>,
): ComponentType<IconProps> {
    return function LucideWrapper({ size = 16, className }: IconProps) {
        return (
            <Icon size={size} className={`inline-block ${className ?? ""}`} />
        );
    };
}

// Icon mapping: skill name → icon component
export const skillIcons: Record<string, ComponentType<IconProps>> = {
    // Frontend
    React: createDevIconWrapper(React),
    "Next.js": createDevIconWrapper(NextJs),
    "React Native": createDevIconWrapper(React),
    "Redux.js": createDevIconWrapper(Redux),
    TypeScript: createDevIconWrapper(TypeScript),
    JavaScript: createDevIconWrapper(JavaScript),
    "Tailwind CSS": createDevIconWrapper(TailwindCSS),
    ShadCN: createLucideWrapper(Layers),
    Sass: createDevIconWrapper(Sass),
    HTML: createLucideWrapper(FileCode),
    CSS: createLucideWrapper(Paintbrush),
    Figma: createDevIconWrapper(Figma),

    // Backend
    "Node.js": createDevIconWrapper(NodeJs),
    NestJS: createDevIconWrapper(NestJS),
    Express: createDevIconWrapper(ExpressJsLight),
    "Spring Boot": createDevIconWrapper(Spring),
    Java: createDevIconWrapper(Java),
    Kotlin: createDevIconWrapper(Kotlin),
    "REST APIs": createLucideWrapper(Globe),
    WebSocket: createLucideWrapper(Zap),
    SSE: createLucideWrapper(Radio),

    // Cloud & DevOps - AWS
    AWS: createDevIconWrapper(AWS),
    Lambda: createLucideWrapper(FunctionSquare),
    S3: createLucideWrapper(HardDrive),
    SQS: createLucideWrapper(MessageSquare),
    Rekognition: createLucideWrapper(Eye),

    // Cloud & DevOps - Azure
    Azure: createDevIconWrapper(Azure),
    "Azure DevOps": createDevIconWrapper(Azure),
    "Azure Functions": createLucideWrapper(FunctionSquare),
    "Azure Blob": createLucideWrapper(HardDrive),
    "Service Bus": createLucideWrapper(MessageSquare),

    // Cloud & DevOps - General
    Docker: createDevIconWrapper(Docker),
    Kubernetes: createDevIconWrapper(Kubernetes),
    "CI/CD": createLucideWrapper(GitBranch),

    // Data & Storage
    PostgreSQL: createDevIconWrapper(PostgreSQL),
    MongoDB: createDevIconWrapper(MongoDB),
    Redis: createDevIconWrapper(Redis),
    "SQL Server": createLucideWrapper(Database),
    TypeORM: createLucideWrapper(Database),
    "Apache Kafka": createLucideWrapper(Workflow),

    // AI & ML
    "Google Gemini": createLucideWrapper(Brain),
    "AI Agents": createLucideWrapper(Cpu),
    "Artificial Intelligence": createLucideWrapper(Brain),

    // Testing & Tools
    Jest: createLucideWrapper(TestTube),
    "Unit Testing": createLucideWrapper(TestTube),
    "Code Coverage": createLucideWrapper(CheckCircle),
    npm: createLucideWrapper(Package),
    Nx: createLucideWrapper(Package),
    Monorepo: createLucideWrapper(Layers),
    Observability: createLucideWrapper(FlaskConical),
    Agile: createLucideWrapper(Users),
    "Version Control": createLucideWrapper(GitBranch),
};

// Category fallback icons
export const categoryFallbackIcons: Record<string, ComponentType<IconProps>> = {
    Frontend: createLucideWrapper(Code),
    Backend: createLucideWrapper(Server),
    "Cloud & DevOps": createLucideWrapper(Cloud),
    "Data & Storage": createLucideWrapper(Database),
    "AI & ML": createLucideWrapper(Brain),
    "Testing & Tools": createLucideWrapper(TestTube),
};

// Helper to get icon for a skill
export function getSkillIcon(
    skill: string,
    category?: string,
): ComponentType<IconProps> {
    if (skillIcons[skill]) {
        return skillIcons[skill];
    }
    if (category && categoryFallbackIcons[category]) {
        return categoryFallbackIcons[category];
    }
    return createLucideWrapper(Code);
}
