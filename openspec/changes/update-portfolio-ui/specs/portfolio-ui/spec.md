# Portfolio UI Specification

## ADDED Requirements

### Requirement: Hero Profile Picture
The hero section SHALL display a circular profile picture of the portfolio owner above the name and title.

#### Scenario: Profile picture display
- **WHEN** the hero section loads
- **THEN** a circular profile picture displays centered above the name
- **AND** picture has dimensions of 128px on mobile, 160px on desktop
- **AND** picture has a subtle border (`border-white/20`) and glow effect

#### Scenario: Profile picture accessibility
- **WHEN** screen reader encounters the profile picture
- **THEN** alt text "Lior Vainer profile photo" is announced

### Requirement: Skill Icons
Each skill item in the skills section SHALL display a recognizable icon representing the technology.

#### Scenario: Skill with specific technology icon
- **WHEN** a skill has a corresponding technology icon (e.g., React, TypeScript, AWS)
- **THEN** the icon (16px) displays inline before the skill name
- **AND** icon color matches the text color (`currentColor`)
- **AND** icon has `aria-hidden="true"` attribute

#### Scenario: Skill with category fallback icon
- **WHEN** a skill does not have a specific icon (e.g., REST APIs, Microservices)
- **THEN** a category-appropriate Lucide icon displays:
  - Database icon for data-related skills (PostgreSQL, MongoDB, Redis)
  - Code icon for languages/frameworks without specific logo
  - Cloud icon for infrastructure skills
  - Cpu icon for AI/ML skills

### Requirement: Project WebPreview
Project cards SHALL include a preview area showing the live project website or a fallback when iframe embedding is blocked.

#### Scenario: Project with embeddable live URL
- **WHEN** project has a `liveUrl` that allows iframe embedding
- **THEN** WebPreview component displays with:
  - URL bar showing the site address (read-only)
  - Iframe rendering the live site
  - Height of approximately 200px

#### Scenario: Project with non-embeddable URL (iframe blocked)
- **WHEN** project's live URL blocks iframe embedding
- **OR** iframe fails to load within 3 seconds
- **THEN** fallback display shows:
  - Gradient background matching project theme
  - "View Live →" button linking to the site
  - Optional preview image if `previewImage` is provided

#### Scenario: Project without live URL
- **WHEN** project does not have a `liveUrl`
- **THEN** WebPreview area is not rendered
- **AND** project card displays with description and tags only
