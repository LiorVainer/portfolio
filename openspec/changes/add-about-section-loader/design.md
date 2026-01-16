# Design: About Me Section and Full-Screen Loader

## Context
The portfolio currently has a hero section with basic information. The user wants to:
1. Enhance it with a longer self-typing professional description
2. Add a full-screen loader that creates a polished first impression

## Goals / Non-Goals

### Goals
- Create a professional, engaging first impression with the loader
- Showcase detailed professional background in the About section
- Maintain existing visual design language (minimalist, dark theme)
- Ensure smooth animations and transitions

### Non-Goals
- Actual asset preloading (the loader is purely aesthetic)
- Server-side loading indicators
- Complex loading state management
- Analytics tracking for load times

## Decisions

### Loader Implementation
**Decision:** Use a client-side React component with useState/useEffect for fake progress

**Rationale:**
- Simple implementation, no external dependencies
- Full control over timing and animation
- Consistent with existing Framer Motion usage
- No real assets need preloading (WebGL loads independently)

**Alternatives Considered:**
- Real preloading (e.g., image preload, font loading) - Unnecessary complexity for this use case
- CSS-only loader - Less control over progress simulation
- Suspense boundaries - Overkill for aesthetic loader

### Progress Bar Component
**Decision:** Use shadcn/ui Progress component (if available) or create minimal custom component

**Rationale:**
- Consistent with existing shadcn/ui usage
- Accessible by default
- Easy to style with Tailwind

### Loader Timing
**Decision:** 2-3 second simulated loading with easing curve

**Implementation:**
```typescript
// Easing function for realistic progress
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

// Progress simulation over ~2.5 seconds
useEffect(() => {
  const duration = 2500;
  const start = Date.now();

  const animate = () => {
    const elapsed = Date.now() - start;
    const t = Math.min(elapsed / duration, 1);
    setProgress(easeOutQuart(t) * 100);

    if (t < 1) requestAnimationFrame(animate);
    else setLoaded(true);
  };

  requestAnimationFrame(animate);
}, []);
```

### About Section Layout
**Decision:** Keep existing hero structure, add description below the typewriter phrases

**Layout Structure:**
```
┌────────────────────────────────────────┐
│           Profile Picture              │
│                                        │
│        Senior Full-Stack Engineer      │
│                                        │
│           LIOR VAINER                  │
│                                        │
│    [Typewriter: short phrases]         │
│                                        │
│    [Typewriter: long description]      │
│           (new addition)               │
│                                        │
│      [View Projects] [Get in Touch]    │
│                                        │
│         [Social Links]                 │
│                                        │
│         [Scroll Indicator]             │
└────────────────────────────────────────┘
```

### Description Presentation
**Decision:** Use a second Typewriter instance for the long description

**Options Considered:**
1. **Single typewriter with both** - Too long, loses impact
2. **Static text** - Less engaging, inconsistent with design language
3. **Second typewriter for description** - Best balance of engagement and readability

## Risks / Trade-offs

### Risk: Loader may feel slow
**Mitigation:**
- Keep duration to 2-3 seconds max
- Use easing that feels fast initially
- Consider adding subtle animation/branding to keep user engaged

### Risk: Multiple typewriters may be overwhelming
**Mitigation:**
- Stagger the animations (short phrases first, then description)
- Use different speeds (slower for long description)
- Consider making description appear only once (no loop)

### Trade-off: Fake loading vs real loading
**Accepted:** The loader is purely aesthetic. This is acceptable for a portfolio site where the goal is impression over utility.

## Open Questions

1. Should the loader show on every visit or only the first visit (session storage)?
   - **Recommendation:** Every visit for consistent experience

2. Should the long description typewriter loop or play once?
   - **Recommendation:** Play once, then stay visible

3. Exact duration for the loader?
   - **Recommendation:** 2.5 seconds with easeOutQuart

## Component Structure

```
src/components/
├── full-screen-loader.tsx    # Main loader component
│   ├── Progress bar
│   ├── Optional branding
│   └── Scroll indicator (after load)
└── ui/
    └── progress.tsx          # Progress bar primitive

src/app/page.tsx
├── FullScreenLoader         # Wraps entire page
└── main
    ├── Section: About (formerly Hero)
    │   ├── Existing content
    │   └── New: Long description typewriter
    ├── Section: Projects
    ├── Section: Experience
    ├── Section: Skills
    └── Section: Contact
```
