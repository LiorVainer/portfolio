# Project Context

## Purpose
A senior portfolio website to showcase professional experience, projects, skills, and contact information. Built as a single-page application with smooth scrolling sections and modern visual effects.

## Tech Stack
- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with shadcn/ui components (new-york style)
- **Animation:** Framer Motion for UI transitions
- **3D Graphics:** React Three Fiber + drei for WebGL backgrounds
- **Icons:** Lucide React
- **Utilities:** clsx, tailwind-merge for class composition

## Project Conventions

### Code Style
- **Formatter/Linter:** Biome (not ESLint/Prettier)
- **Indentation:** 4 spaces
- **Imports:** Auto-organized by Biome
- **TypeScript:** Minimize `as` type assertions and `any` types
- **Components:** Functional components with TypeScript interfaces for props

### Architecture Patterns
- **App Router:** All pages in `src/app/` directory
- **Component Organization:**
  - `src/components/sections/` - Page section components (experience, projects, skills, contact)
  - `src/components/ui/` - Reusable UI primitives (shadcn/ui pattern)
  - `src/components/` - Feature-specific components
- **Utilities:** Shared utilities in `src/lib/utils.ts`, including `cn()` for Tailwind class merging
- **Path Aliases:** `@/*` maps to `./src/*`

### Testing Strategy
No testing framework currently configured.

### Git Workflow
Single `master` branch. Standard commit practices.

## Domain Context
This is a personal portfolio showcasing:
- Professional work experience
- Technical projects
- Skills and competencies
- Contact information

The site uses WebGL shader effects for visual appeal and Framer Motion for smooth scroll-based animations.

## Important Constraints
- **Type Safety:** Run `pnpm tsc` after changes to verify no TypeScript errors
- **React 19:** Uses latest React features including React Compiler (babel-plugin-react-compiler)
- **No SSR for 3D:** Three.js/R3F components should be client-side only

## External Dependencies
- **Fonts:** Geist and Geist Mono loaded via next/font
- **shadcn/ui:** Component library configured in `components.json`
