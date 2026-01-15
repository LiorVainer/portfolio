# Implementation Tasks

## 1. Hero Section - Profile Picture
- [x] 1.1 Create placeholder SVG in `public/profile-picture.svg` (user will swap for PNG)
- [x] 1.2 Add profile picture above the name, centered with circular styling
- [x] 1.3 Add subtle glow effect and border (`border-white/20`, `shadow-[0_0_40px_rgba(255,255,255,0.1)]`)
- [x] 1.4 Size: 128px mobile / 160px desktop with responsive classes
- [x] 1.5 Run `pnpm run build` to verify
- [x] 1.6 (Added) Install @types/three for existing Three.js code

## 2. Skills Section - Technology Icons
- [x] 2.1 Install `developer-icons` package (instead of custom SVGs)
- [x] 2.2 Create `src/components/icons/tech-icons.tsx` with icon wrappers
- [x] 2.3 Create icon mapping: skill name → icon component
- [x] 2.4 Add category fallback icons using Lucide (Database, Code, Cloud, Cpu)
- [x] 2.5 Update skill badges to show icon (14px) + text with `aria-hidden="true"`
- [x] 2.6 Run `pnpm run build` to verify

## 3. Projects Section - WebPreview (AI Elements)
- [ ] 3.1 Install AI Elements: `npx ai-elements@latest` and select web-preview component
- [ ] 3.2 Customize web-preview styles for dark theme (`bg-white/5`, `border-white/10`)
- [ ] 3.3 Create minimal WebPreview wrapper with:
  - URL display bar only (no navigation buttons)
  - Iframe body
  - 3s timeout fallback handler
- [ ] 3.4 Update projects data to include optional `previewImage` for fallback
- [ ] 3.5 Integrate WebPreview into project cards (show above description)
- [ ] 3.6 Run `pnpm run build` to verify

## 4. Final Verification
- [ ] 4.1 Run `pnpm run build` for final build check
- [ ] 4.2 Run `pnpm lint` for Biome check
- [ ] 4.3 Test responsive behavior at 320px, 768px, 1024px, 1440px
- [ ] 4.4 Verify iframe fallback works when site blocks embedding
