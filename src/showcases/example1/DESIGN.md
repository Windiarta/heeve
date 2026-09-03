---
name: Spotify
colors:
  primary: "#0000EE"
  secondary: "#B3B3B3"
  surface: "#000000"
  on-surface: "#FFFFFF"
  error: "#D00000"
typography:
  body-md:
    fontFamily: SpotifyMixUI
    fontSize: 14px
    fontWeight: 700
rounded:
  md: 9999px
---

# Design System Inspired by Spotify

## 1. Visual Theme & Atmosphere

Spotify's design system embodies a dark, sophisticated aesthetic centered around music discovery and seamless playback. The visual language emphasizes contrast and clarity through a predominantly dark foundation punctuated by the iconic Spotify green accent, creating a premium yet accessible environment. The interface prioritizes content—album art, artist imagery, and user-generated playlists—by surrounding them with deep blacks and neutral grays that recede into the background. This creates an immersive, cinematic quality that keeps focus on the music itself. The design conveys energy through bright, saturated accents while maintaining visual calm through generous use of negative space and thoughtful typography hierarchy.

**Key Characteristics**
- Deep, dark color palette with true blacks and dark charcoals creating high contrast
- Iconic green accent (`#1ED760`) used strategically for calls-to-action and success states
- Rounded, friendly button shapes balancing modern minimalism with approachability
- Large, bold typography hierarchy that guides users intuitively through content
- Generous spacing and breathing room that feels premium and uncluttered
- Monochromatic neutral scale with subtle grays for secondary information
- Image-first design philosophy where visual content becomes the star

## 2. Color Palette & Roles

### Primary
- **Spotify Green** (`#1ED760`): Primary brand color used for active states, CTAs, play buttons, and positive feedback; the iconic Spotify accent that drives brand recognition

### Accent Colors
- **Deep Red** (`#980808`): Accent for album artwork and thematic content elements
- **Warm Red** (`#B03830`): Secondary accent for varied content styling
- **Dark Red** (`#400808`): Deep tone for layered visual hierarchy in themed sections
- **Burnt Orange** (`#B65E29`): Warm accent for content differentiation
- **Rich Burgundy** (`#680808`): Deep accent for premium or highlighted content

### Interactive
- **Link Blue** (`#0000EE`): Primary link color for interactive text and web navigation elements

### Neutral Scale
- **Bright White** (`#FFFFFF`): Primary text color on dark backgrounds; high contrast for readability
- **Light Gray** (`#B3B3B3`): Secondary text, icons, and subtle UI elements; most frequently used neutral
- **Medium Gray** (`#C1C1C1`): Tertiary text and disabled states; subtle visual separation
- **Dark Gray** (`#333333`): Enhanced contrast for secondary headings and supporting text
- **Pure Black** (`#000000`): Darkest elements and backgrounds for maximum contrast
- **Almost Black 1** (`#1F1F1F`): Primary background color; slightly warmer than pure black
- **Almost Black 2** (`#121212`): Secondary background for surface variations
- **Almost Black 3** (`#101010`): Tertiary dark surface for depth and layering

### Surface & Borders
- **Dark Charcoal** (`#1F1F1F`): Primary background for main containers and page surfaces
- **Deep Black** (`#121212`): Secondary surface backgrounds for cards and modals
- **Soft Gray Border** (`#C1C1C1`): Subtle borders for input fields and form elements

### Semantic / Status
- **Success Green** (`#1ED760`): Positive confirmations, successful actions, and playing state indicators
- **Error Red** (`#D00000`): Error states, warnings, and destructive action confirmations

## 3. Typography Rules

### Font Family
**Primary Font:** SpotifyMixUI (sans-serif, modern, geometric)
Fallback stack: `SpotifyMixUI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif`

**Secondary Font:** SpotifyMixUITitle (sans-serif, display-focused)
Fallback stack: `SpotifyMixUITitle, SpotifyMixUI, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display / H1 | SpotifyMixUITitle | 24px | 700 | Normal | 0px | Large section headings, primary page titles |
| Heading / H2 | SpotifyMixUI | 16px | 700 | Normal | 0px | Section headers, card titles, secondary headings |
| Body / Paragraph | SpotifyMixUI | 14px | 400 | Normal | 0px | Primary content, descriptions, song metadata |
| Body Strong | SpotifyMixUI | 14px | 700 | Normal | 0px | Emphasized body text, artist names |
| Button / Label | SpotifyMixUI | 16px | 700 | Normal | 0px | Button text, strong call-to-action labels |
| Caption / Small | SpotifyMixUI | 13px | 400 | Normal | 0px | Secondary metadata, timestamps, helpers |
| Link | SpotifyMixUI | 16px | 400 | Normal | 0px | Clickable text links and navigation items |

### Principles
- Hierarchy is driven by size and weight rather than multiple font families, maintaining visual cohesion
- Line heights remain consistent at `normal`, allowing the generous spacing system to create breathing room
- Weights are limited to 400 (regular) and 700 (bold) to avoid visual noise and ensure clarity
- All sizes use absolute pixel values to guarantee precision across devices
- Typography pairs with color contrast: white text on dark backgrounds ensures legibility for sighted users

## 4. Component Stylings

### Buttons

#### Primary Icon Button (Circular, Filled)
- Background: `rgb(31, 31, 31)`
- Text Color: `rgb(255, 255, 255)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `12px`
- Border Radius: `50%`
- Border: `0px none`
- Box Shadow: `none`
- Height: `48px`
- Width: `48px`
- Line Height: `normal`
- Hover State: Background opacity to `0.8`, scale to `1.06`

#### Secondary Icon Button (Circular, Ghost)
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgb(179, 179, 179)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `12px`
- Border Radius: `9999px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `48px`
- Width: `48px`
- Line Height: `normal`
- Hover State: Text color changes to `rgb(255, 255, 255)`, background to `rgba(179, 179, 179, 0.1)`

#### Tertiary Small Icon Button
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgb(179, 179, 179)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `0px 12px`
- Border Radius: `9999px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `auto`
- Width: `auto`
- Line Height: `normal`
- Hover State: Text color to `rgb(255, 255, 255)`

#### Minimal Icon Button (Micro)
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgb(179, 179, 179)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `0px`
- Border Radius: `9999px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `24px`
- Width: `24px`
- Line Height: `normal`
- Hover State: Text color to `rgb(255, 255, 255)`, background to `rgba(179, 179, 179, 0.15)`

#### Text Button (Navigation)
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgb(179, 179, 179)`
- Font Size: `16px`
- Font Weight: `700`
- Font Family: `SpotifyMixUI`
- Padding: `8px 0px`
- Border Radius: `9999px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `48px`
- Width: `auto`
- Line Height: `normal`
- Hover State: Text color to `rgb(255, 255, 255)`, background opacity to `0.1`
- Active State: Text color to `rgb(30, 215, 96)` (Spotify Green)

### Inputs & Forms

#### Search Input (Dark Theme, Large)
- Background: `rgb(31, 31, 31)`
- Text Color: `rgb(255, 255, 255)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `12px 96px 12px 48px`
- Border Radius: `500px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `48px`
- Width: `474px`
- Line Height: `normal`
- Placeholder Color: `rgba(255, 255, 255, 0.6)`
- Focus State: Border `1px solid rgb(30, 215, 96)`, box-shadow `0 0 0 2px rgba(30, 215, 96, 0.2)`

#### Form Input (Light Theme, Standard)
- Background: `rgb(255, 255, 255)`
- Text Color: `rgb(0, 0, 0)`
- Font Size: `13.3333px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `12px 12px`
- Border Radius: `0px`
- Border: `1px solid rgb(193, 193, 193)`
- Box Shadow: `none`
- Height: `40px`
- Width: `250px`
- Line Height: `normal`
- Focus State: Border color to `rgb(30, 215, 96)`, outline `none`
- Disabled State: Background `rgb(240, 240, 240)`, text color `rgb(179, 179, 179)`, cursor `not-allowed`

### Cards & Containers

#### Music Card (Transparent with Padding)
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgb(255, 255, 255)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `12px`
- Border Radius: `6px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `251px`
- Width: `195px`
- Line Height: `normal`
- Hover State: Background `rgba(179, 179, 179, 0.2)`, scale `1.04`, transition `all 0.3s ease`

#### Content Card (No Padding)
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgb(255, 255, 255)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `0px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `251px`
- Width: `195px`
- Line Height: `normal`

#### Artist Card (Compact)
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgb(255, 255, 255)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `0px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `47px`
- Width: `171px`
- Line Height: `normal`

### Navigation

#### Sidebar Navigation
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgb(179, 179, 179)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `0px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `754px`
- Width: `331px`
- Line Height: `normal`
- Navigation Link Active State: Text color `rgb(255, 255, 255)`, left border `3px solid rgb(30, 215, 96)`
- Navigation Link Hover State: Text color `rgb(255, 255, 255)`, background `rgba(179, 179, 179, 0.1)`

### Links

#### Text Link (Blue)
- Background: `rgb(255, 255, 255)`
- Text Color: `rgb(0, 0, 238)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `0px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Text Decoration: `none`
- Hover State: Text Decoration `underline`, opacity `0.8`

#### Icon Link (White)
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgb(255, 255, 255)`
- Font Size: `16px`
- Font Weight: `400`
- Font Family: `SpotifyMixUI`
- Padding: `0px`
- Border Radius: `0px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `32px`
- Width: `32px`
- Line Height: `normal`
- Hover State: Opacity `0.7`, scale `1.1`

#### Navigation Link (Gray with Icon)
- Background: `rgba(0, 0, 0, 0)`
- Text Color: `rgb(179, 179, 179)`
- Font Size: `14px`
- Font Weight: `700`
- Font Family: `SpotifyMixUI`
- Padding: `4px 16px 4px 36px`
- Border Radius: `9999px`
- Border: `0px none`
- Box Shadow: `none`
- Height: `32px`
- Width: `auto`
- Line Height: `normal`
- Hover State: Text color `rgb(255, 255, 255)`, background `rgba(179, 179, 179, 0.2)`

## 5. Layout Principles

### Spacing System
Spotify uses an 8-pixel base unit with a comprehensive scale that accommodates both micro interactions and large compositional blocks. The spacing scale progresses as: `4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `28px`, `32px`, `40px`, `48px`, `64px`, and `160px`. Smaller values (`4px–12px`) are used for component padding and internal spacing. Medium values (`16px–32px`) handle gaps between components, list items, and navigation elements. Large values (`40px–64px`) create breathing room between major content sections. The largest value (`160px`) is reserved for significant margin breaks between major layout zones, such as sidebar to main content transition or between hero sections.

### Grid & Container
The layout uses a flexible container approach with a maximum width of approximately `1400px` for the main content area, accommodating modern wide displays while maintaining readability. A persistent left sidebar (`331px` wide) houses navigation on desktop, collapsing to a mobile drawer on smaller screens. The main content area uses horizontal scrolling grids for music discovery sections (trending songs, popular artists, albums) with uniform card dimensions of `195px` × `251px` for album artwork and artist cards. Grid gaps consistently use `16px` spacing. Sections use `32px` margin separation vertically and `24px` padding horizontally within containers.

### Whitespace Philosophy
Spotify prioritizes generous whitespace to create an uncluttered, premium experience. Negative space is not treated as empty but as an active design element that provides visual rest and guides focus toward content. Between major content sections, `64px` or more of vertical space ensures sections feel distinct and independent. Around individual cards and interactive elements, `12px–16px` of breathing room prevents visual crowding. The sidebar and main content area are separated by space, allowing each zone to exist independently without visual bleed. Form inputs and buttons maintain minimum spacing of `12px` from surrounding content. This philosophy ensures users never feel overwhelmed, even when encountering large music libraries or discovery feeds.

### Border Radius Scale
- `0px`: Form inputs (standard text inputs), full-width containers
- `2px`: Small badges, compact tags
- `4px`: Input fields (some variations), subtle micro components
- `6px`: Music cards, album artwork containers, hover states
- `50%`: Perfect circles for user avatars, artist profile pictures, small icon buttons
- `500px`: Large search inputs, rounded pill buttons
- `9999px`: Fully rounded buttons, ghost buttons, navigation pill buttons

### Border Widths
- **Thin** (`1px`): Primary border weight for input fields, form elements, and subtle dividers
- **Medium** (`2px`): Accent borders for highlighted states, active navigation indicators
- **Thick** (`3px`): Active state left border on navigation items, emphasis indicators

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base | No shadow, no elevation | Content cards at rest, flat UI elements, backgrounds |
| Hover | `box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3)` | Cards on hover, interactive elements on focus |
| Overlay | `box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4)` | Modals, dropdowns, expanded player |
| Modal | `box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6)` | Full-screen modals, sidebars, notifications |
| Floating | `box-shadow: 0 24px 80px rgba(0, 0, 0, 0.7)` | Fixed bottom player, persistent toasts, sticky headers |

Spotify's shadow philosophy emphasizes subtlety and refinement. Shadows are rarely used on the main interface, allowing content (particularly album artwork) to take center stage. Elevation is introduced sparingly for interactive feedback: a light shadow appears on hover to indicate interactivity, while darker, larger shadows are reserved for modal windows and the persistent playback footer. Shadows always use black with varied opacity rather than colored shadows, maintaining the system's sophistication. The darkest shadows (`0.6–0.7` opacity) are limited to the most prominent containers, such as the now-playing bar and modal overlays.

### Opacity Levels
- **Full** (`1.0` or 100%): Primary text, active states, primary UI
- **High** (`0.7` or 70%): Secondary text, hover states, emphasis reduction
- **Medium** (`0.3` or 30%): Disabled states, tertiary information, subtle backgrounds
- **Low** (`0.1–0.15` or 10–15%): Hover background tints, disabled buttons, ghost elements

### Z-index / Layering
- **Base Layer** (`z-index: 1`): Main content, cards, default page elements
- **Dropdown Layer** (`z-index: 2`): Dropdowns from navigation, contextual menus
- **Modal Backdrop Layer** (`z-index: 3`): Semi-transparent overlays behind modals
- **Modal / Dialog Layer** (`z-index: 4`): Modal windows, alerts, confirmations
- **Notification Layer** (`z-index: 5`): Toast messages, inline notifications
- **Tooltip Layer** (`z-index: 6`): Hover tooltips, help text
- **Sticky / Fixed Layer** (`z-index: 100`): Fixed headers, persistent navigation, bottom player bar

## 7. Do's and Don'ts

### Do
- **Use the Spotify Green** (`#1ED760`) for all primary calls-to-action, play buttons, and success confirmations to maintain brand recognition
- **Maintain high contrast** between text and backgrounds; pair white or light gray text on dark backgrounds exclusively
- **Apply generous spacing** around interactive elements; minimum `12px` padding for buttons and `16px` gaps between major sections
- **Use rounded buttons** (`border-radius: 9999px`) for all CTA buttons; reserve sharp corners (`0px`) for standard form inputs only
- **Implement hover states** with subtle opacity or background tints; avoid dramatic color shifts
- **Keep typography hierarchy simple**: use only two font weights (400 and 700) and limit to three primary sizes
- **Prioritize content visibility**: keep cards, album artwork, and user-generated content clean and unobstructed
- **Use semantic colors** consistently: green for success/active, red for errors/destructive actions, gray for disabled/secondary states
- **Test accessibility**: ensure all interactive elements meet WCAG AA contrast ratios and have visible focus states
- **Respect the dark theme** exclusively on the player interface; use white/light backgrounds only for supplementary web forms

### Don't
- **Avoid using multiple accent colors** in the same interface; if using red variants, reserve them for content themes only, not UI controls
- **Don't use light backgrounds** in the main player UI; the dark theme is integral to Spotify's identity
- **Avoid thin, hard-to-read fonts**; always pair bold weights (700) with larger sizes for headings
- **Don't override the green accent** with other colors for primary actions; maintain consistency across all experiences
- **Avoid excessive shadow effects**; use shadows sparingly for depth, not decoration
- **Don't apply borders to all elements**; borders are reserved for subtle input dividers and accent highlights
- **Avoid padding less than** `8px` on interactive elements; insufficient padding makes targets difficult to click
- **Don't use pure red** (`#FF0000`) for errors; use the system red (`#D00000`) instead
- **Avoid mixing rounded and sharp button styles** in the same UI section; choose one approach per interface
- **Don't place content directly adjacent to edges**; always use minimum `16px` margin from container edges

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Mobile | 320px–640px | Single-column layout, sidebar becomes drawer, cards stack vertically, button sizes reduce to `40px`, font sizes reduce by 1-2px |
| Tablet | 641px–1024px | Two-column layout, sidebar collapses to icons, grid cards scale to `150px` width, spacing reduces by 20%, container padding `16px` |
| Desktop | 1025px–1440px | Three to four-column layout, full sidebar visible, standard card sizes (`195px`), full spacing scale, main container max-width `1400px` |
| Large Desktop | 1441px+ | Four to five-column layout, expanded sidebar, scaling maintained, container centered with margin |

### Touch Targets
All interactive elements must maintain a minimum touch target size of `44px` × `44px` on mobile and tablet devices. On desktop with mouse input, minimum size is `32px` × `32px`. Icon buttons are `48px` × `48px` on all platforms. Text buttons maintain `32px` height with horizontal padding of at least `16px`. Links and navigation items must have a minimum height of `44px` with `12px` vertical padding to accommodate thumb reach on mobile devices.

### Collapsing Strategy
On mobile devices (320px–640px), the left sidebar transforms into a hamburger menu or bottom navigation. The main content area expands to full width. Music discovery grids collapse to single or double columns depending on device orientation. Card widths scale proportionally: `195px` becomes `150px` on tablet and `120px` on phone. Large spacing values (`64px`, `48px`) reduce to `32px` and `24px` respectively. Font sizes remain constant for readability but line-height increases by 1.5x on small screens. The search input shrinks to `280px` on tablet and `220px` on mobile. Button padding reduces from `12px` to `8px` on mobile, but touch target sizes never fall below `44px`. Horizontal margins reduce from `24px` to `16px` on tablet and `12px` on mobile to maximize content space.

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA / Play Button**: Spotify Green (`#1ED760`)
- **Primary Background**: Almost Black (`#1F1F1F`) or Deep Black (`#121212`)
- **Secondary Background**: Deep Charcoal (`#121212`) or Almost Black (`#101010`)
- **Heading Text**: Bright White (`#FFFFFF`)
- **Body Text**: Bright White (`#FFFFFF`)
- **Secondary Text**: Light Gray (`#B3B3B3`)
- **Tertiary Text / Disabled**: Medium Gray (`#C1C1C1`) or Light Gray (`#B3B3B3`)
- **Error / Destructive**: Error Red (`#D00000`)
- **Success / Active State**: Spotify Green (`#1ED760`)
- **Link Color**: Link Blue (`#0000EE`)
- **Button Border**: Light Gray (`#B3B3B3`) for ghost buttons, none for filled

### Iteration Guide

1. **Always use dark backgrounds** (`#1F1F1F`, `#121212`, `#101010`) for primary surfaces; reserve white backgrounds for supplementary forms only
2. **Apply Spotify Green** (`#1ED760`) exclusively to primary CTAs, play buttons, success confirmations, and active navigation states; never use for secondary actions
3. **Maintain minimum contrast ratios** of 4.5:1 for body text and 3:1 for large text; pair white text on dark backgrounds exclusively
4. **Use rounded buttons** with `border-radius: 9999px` for all primary and ghost buttons; reserve `0px` border-radius for form inputs only
5. **Implement hover states** using opacity reduction (70% → 100%) or subtle background tints (`rgba(179, 179, 179, 0.1)`) rather than color shifts
6. **Maintain consistent spacing scale**: use `8px` multiples (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`) for all padding and gaps
7. **Keep typography simple**: use SpotifyMixUI exclusively, limit to weights 400 and 700, use sizes `14px`, `16px`, and `24px` for primary roles
8. **Reserve card border-radius** at `6px`; use `50%` only for avatars and small circular icons
9. **Apply shadows sparingly**: use subtle shadows (`0 8px 16px rgba(0, 0, 0, 0.3)`) on hover, darker shadows (`0 20px 60px rgba(0, 0, 0, 0.6)`) only on modals
10. **Test interactive feedback**: all buttons and links must have visible hover states, focus states (outline or ring), and active states
11. **Ensure accessibility**: provide sufficient color contrast, keyboard navigation support, ARIA labels, and focus indicators meeting WCAG AA standards
12. **Scale responsively**: collapse sidebar to drawer on mobile, reduce card widths proportionally, maintain minimum `44px` touch targets on mobile devices