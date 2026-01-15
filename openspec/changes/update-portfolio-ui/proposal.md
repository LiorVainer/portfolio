# Change: Enhance Portfolio UI with Visual Elements

## Why
The current portfolio lacks visual personality - skills are text-only without icons, the hero section has no profile photo, and project cards don't show live previews. These enhancements will make the portfolio more engaging and professional while showcasing technical work more effectively.

## What Changes
- **Hero Section**: Add circular profile picture with subtle glow effect, positioned alongside the name/title content
- **Skills Section**: Add technology icons next to each skill using inline SVGs for tech logos + Lucide React for fallbacks
- **Projects Section**: Add WebPreview components from AI SDK Elements showing live website previews (with fallback for sites blocking iframes)

## Impact
- Affected specs: `portfolio-ui` (new capability)
- Affected code:
  - `src/app/page.tsx` - Hero section layout changes
  - `src/components/sections/skills.tsx` - Add icons to skill items
  - `src/components/sections/projects.tsx` - Integrate WebPreview component
  - `src/components/ai-elements/web-preview.tsx` - Installed via AI Elements CLI
- New dependencies:
  - AI Elements (`npx ai-elements@latest`) - for WebPreview component
  - Inline SVGs for tech logos (no external package needed)
