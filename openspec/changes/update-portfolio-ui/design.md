# Design Document: Portfolio UI Enhancements

## Context
The portfolio needs visual enhancements to stand out. Current state:
- Hero: Text-only with shader background
- Skills: Text badges without icons
- Projects: Static cards with gradient accents

Constraints:
- Must maintain existing dark theme and minimal aesthetic
- WebPreview must handle sites that block iframe embedding gracefully (this is common)
- Should be accessible (alt text, aria labels)

## Goals / Non-Goals

**Goals:**
- Add profile picture to hero for personal touch
- Add recognizable technology icons to skills for quick scanning
- Show live project previews where possible, with graceful fallback

**Non-Goals:**
- Complete redesign of layout structure
- Adding new sections
- Complex preview interactions (navigation, console, etc.)

## Decisions

### 1. Profile Picture Placement
**Decision:** Place profile picture above the name on all viewports, centered
**Rationale:** Keeps the vertical flow consistent with the existing design; side-by-side can feel cramped with the shader background

**Specs:**
- Size: 128px on mobile, 160px on desktop
- Style: Circular with subtle white/20 border and soft glow
- Format: Support both PNG and SVG (user will swap placeholder)

### 2. Skill Icons Approach
**Decision:** Use inline SVG components for tech logos + Lucide React for category fallbacks
**Implementation:**
- Create `src/components/icons/` directory with individual SVG components
- Map skill names to icon components
- Fallback icons by category: `Database` for DB skills, `Code` for languages, `Cloud` for infra, `Cpu` for AI/ML

**Why not external packages:**
- Simple Icons package is 50MB+ (includes all icons)
- We only need ~20 specific icons
- Inline SVGs are tree-shakeable and customizable

### 3. WebPreview Implementation
**Decision:** Use AI Elements via CLI (`npx ai-elements@latest`)
**Rationale:**
- Copies source files into project (like shadcn/ui)
- Full customization control
- No runtime dependency
- Already have shadcn/ui installed (prerequisite met)

**Critical: Iframe Blocking Reality**
Most production sites block iframe embedding:
- npm registry: Blocks
- GitHub: Blocks
- Most SaaS apps: Block

**Strategy:**
1. Attempt iframe load with 3s timeout
2. On failure/timeout, show fallback card with gradient and "View Live →" button
3. Projects should include optional `previewImage` URL for screenshot fallback
4. Keep WebPreview minimal: just URL bar + iframe body (no navigation controls per user request)

### 4. Styling for Dark Theme
All AI Elements components will be customized to match:
- Background: `bg-white/5` instead of `bg-card`
- Borders: `border-white/10`
- Text: `text-white/60` for secondary

## Risks / Trade-offs

| Risk | Mitigation |
|------|------------|
| Sites blocking iframes | Fallback to screenshot/gradient card with link |
| AI Elements CLI conflicts | Review generated files before committing |
| SVG icons increasing bundle | Only include icons actually used |
| Profile picture aspect ratio | Use `object-cover` with fixed dimensions |

## Accessibility

- Profile picture: `alt="Lior Vainer profile photo"`
- Skill icons: `aria-hidden="true"` (decorative, text label is primary)
- WebPreview iframe: `title` attribute describing content

## Open Questions
- [x] Should WebPreview have navigation controls? → **No, keep minimal**
- [x] What size should profile picture be? → **128-160px**
