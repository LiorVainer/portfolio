# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

<!-- OPENSPEC:START -->
## OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:
- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:
- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

## Commands

```bash
pnpm dev          # Start development server at localhost:3000
pnpm build        # Production build
pnpm lint         # Run Biome linter (biome check)
pnpm format       # Format code with Biome (biome format --write)
pnpm tsc          # Type check (run after making changes)
```

## Architecture

This is a Next.js 16 portfolio site using the App Router with React 19.

**Key Technologies:**
- **Styling:** Tailwind CSS v4 with shadcn/ui components (new-york style)
- **Animation:** Framer Motion for UI animations, React Three Fiber + drei for 3D WebGL graphics
- **Linting/Formatting:** Biome (not ESLint) - uses 4-space indentation

**Project Structure:**
- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - React components
  - `sections/` - Page sections (experience, projects, skills, contact)
  - `ui/` - Reusable UI components (shadcn/ui pattern)
- `src/lib/utils.ts` - Utility functions including `cn()` for Tailwind class merging

**Path Aliases:**
- `@/*` maps to `./src/*`

## TypeScript Guidelines

- Strict mode is enabled
- Minimize use of `as` type assertions and `any` types
- Run `pnpm tsc` after making changes to verify no type errors

## Development Workflow

**IMPORTANT:** After each code change (Edit/Write tool calls), run:
```bash
pnpm run build
```
This ensures changes compile correctly and catches errors early. Do not batch multiple changes before building.