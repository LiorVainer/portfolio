## ADDED Requirements

### Requirement: Full-Screen Loader
The portfolio SHALL display a full-screen loader overlay when the page initially loads.

The loader SHALL include:
- A progress bar showing simulated loading progress from 0% to 100%
- A dark (black) background consistent with the portfolio theme
- Centered content layout
- Smooth fade-out transition when loading completes

The loading simulation SHALL:
- Complete within 2-3 seconds
- Use an easing function for realistic progress feel
- Trigger the loader dismissal upon reaching 100%

#### Scenario: Initial page load
- **WHEN** a user navigates to the portfolio for the first time
- **THEN** a full-screen loader overlay is displayed
- **AND** a progress bar animates from 0% to 100%
- **AND** after completion, the loader fades out to reveal the content

#### Scenario: Loader dismissal
- **WHEN** the progress bar reaches 100%
- **THEN** the loader smoothly transitions out
- **AND** the user can see the portfolio content
- **AND** the user MAY scroll or interact with the page

### Requirement: Scroll Invitation After Load
After the loader completes, the system SHALL provide a visual cue inviting the user to scroll down.

#### Scenario: Scroll indicator appears
- **WHEN** the loader finishes and fades out
- **THEN** a scroll indicator or "scroll down" prompt is visible
- **AND** the indicator animates to draw attention

### Requirement: About Me Section with Extended Description
The About Me section (formerly Hero section) SHALL include a self-typing extended professional description.

The description content SHALL be:
"Senior Full-Stack Software Engineer experienced in building scalable TypeScript-based systems with React, Node.js, and NestJS. Worked on large-scale, real-time, cloud-native platforms using AWS, Azure, microservices, and Kubernetes. Strong focus on system design, AI integration, and end-to-end development of production-grade systems."

The description SHALL:
- Use the Typewriter component for animated text effect
- Appear below the existing rotating phrases
- Be styled for readability with appropriate font size and line height
- Play the typing animation once (not loop continuously)

#### Scenario: Description typewriter animation
- **WHEN** the about section becomes visible
- **THEN** the extended description types itself character by character
- **AND** the animation completes and the text remains visible

#### Scenario: Mobile responsiveness
- **WHEN** the portfolio is viewed on a mobile device
- **THEN** the extended description is readable with appropriate font size
- **AND** the text wraps correctly within the viewport

### Requirement: Progress Bar Component
The system SHALL include a reusable progress bar component for the loader.

The progress bar SHALL:
- Accept a value prop (0-100) for current progress
- Support animated transitions between values
- Use dark theme styling (white/light progress on dark background)
- Be accessible with appropriate ARIA attributes

#### Scenario: Progress bar rendering
- **WHEN** the progress bar component receives a value of 50
- **THEN** the bar displays 50% fill
- **AND** the fill animates smoothly from the previous value

#### Scenario: Progress bar accessibility
- **WHEN** a screen reader accesses the progress bar
- **THEN** the current progress value is announced
- **AND** the component has appropriate role and aria-valuenow attributes

### Requirement: Scroll Progress Bar
The portfolio SHALL display a scroll progress bar at the top of the viewport after the initial loader completes.

The scroll progress bar SHALL:
- Be fixed at the top of the viewport spanning full width
- Show progress from 0% to 100% based on page scroll position
- Reach 100% when the user has scrolled to the bottom of the page
- Use smooth spring-based animation for progress updates
- Be visible only after the user has scrolled past an initial threshold

#### Scenario: Scroll progress tracking
- **WHEN** the user scrolls through the page content
- **THEN** the progress bar fills proportionally to the scroll position
- **AND** reaching the bottom of the page shows 100% progress

#### Scenario: Initial visibility
- **WHEN** the page first loads and user has not scrolled
- **THEN** the scroll progress bar is hidden
- **AND** it appears after scrolling past a threshold (e.g., 100px)

#### Scenario: Smooth animation
- **WHEN** the user scrolls quickly through the page
- **THEN** the progress bar animates smoothly with spring physics
- **AND** does not appear janky or stuttering
