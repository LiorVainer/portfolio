# Change: Add About Me Section and Full-Screen Loader

## Why
The portfolio needs a more comprehensive "About Me" section that combines the current hero elements with a detailed professional description. Additionally, a full-screen loader with a progress bar will create a polished first impression and manage perceived loading time for the WebGL shader background.

## What Changes

### 1. About Me Section Redesign
- **Restructure Hero Section**: Rename current hero to "About Me" section
- **Add Self-Typing Description**: Long-form professional description using the existing Typewriter component pattern
- **Content**: "Senior Full-Stack Software Engineer experienced in building scalable TypeScript-based systems with React, Node.js, and NestJS. Worked on large-scale, real-time, cloud-native platforms using AWS, Azure, microservices, and Kubernetes. Strong focus on system design, AI integration, and end-to-end development of production-grade systems."
- **Layout**: Maintain existing hero elements (profile photo, name, title, social links) while adding the extended description

### 2. Full-Screen Loader
- **Full-Screen Overlay**: Black background with centered content
- **Progress Bar Component**: Animated progress bar with fake loading progression (0-100%)
- **Fake Loading Time**: Simulated loading duration (~2-3 seconds)
- **Scroll Invitation**: Visual cue inviting user to scroll down after load completes
- **Smooth Transition**: Fade out loader and reveal portfolio content

### 3. Scroll Progress Bar
- **Fixed Position**: Full-width progress bar fixed at top of viewport
- **Scroll Tracking**: Progress fills (0-100%) as user scrolls through page content
- **Smooth Animation**: Spring-based animation for smooth progress updates
- **Visibility Threshold**: Appears after initial scroll to avoid cluttering the hero view

## Impact
- Affected specs: `portfolio-ui` (new capability)
- Affected code:
  - `src/app/page.tsx` - Add loader wrapper, restructure hero as About Me
  - `src/components/ui/progress-bar.tsx` - New progress bar component
  - `src/components/full-screen-loader.tsx` - New loader component
  - `src/components/sections/about.tsx` - New about section (optional refactor)
  - `src/components/ui/typewriter-text.tsx` - May need enhancements for longer text
  - `src/components/scroll-progress-bar.tsx` - New scroll progress component
