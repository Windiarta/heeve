---
name: Netlify
colors:
  primary: "#181A1C"
  secondary: "#545A61"
  surface: "#000000"
  on-surface: "#FFFFFF"
  error: "#DD0000"
typography:
  body-md:
    fontFamily: Figtree
    fontSize: 14px
    fontWeight: 600
rounded:
  md: 6px
---

# Design System Inspired by Netlify

## 1. Visual Theme & Atmosphere

Netlify's design system embodies a modern, developer-centric aesthetic that balances technical sophistication with accessible clarity. The visual language prioritizes content hierarchy through bold typography and strategic color blocking, with a preference for clean whitespace and minimalist layouts. Dark hero sections contrast sharply with light content areas, creating visual momentum and guiding user attention toward key actions. The system feels engineered yet approachable, reflecting the platform's commitment to making web deployment and AI-powered development intuitive for both beginners and enterprise teams. Playful illustrations (like the smiling star mascot) humanize the technical offering, while a restrained, purposeful use of accent colors creates focal points without overwhelming the interface.

**Key Characteristics**
- Bold, condensed typography (800-weight headings dominate hero sections)
- High contrast between dark (#181A1C) and light backgrounds for visual separation
- Strategic use of vibrant cyan (#2E51ED derived primary) as interactive focal point
- Generous whitespace and breathing room around content blocks
- Illustrated, approachable design elements paired with technical precision
- Developer-friendly code snippets and terminal-like components
- Responsive, card-based layouts with soft shadows for depth
- Emphasis on clarity and scanability over decorative elements

## 2. Color Palette & Roles

### Primary
- **Dark Base** (`#181A1C`): Primary background for hero sections, deep text color, and dominant neutral anchor throughout the system
- **Slate Gray** (`#545A61`): Secondary text, reduced-emphasis content, and supporting UI elements
- **Pure Black** (`#000000`): High-contrast text on light backgrounds, maximum legibility for body copy

### Accent Colors
- **Bright Blue** (`#2E51ED`): Primary interactive states, call-to-action buttons, focus indicators, and brand accent for data visualization elements
- **Cyan Teal** (`#0E7FE1`): Secondary accent for links and hover states with slightly cooler tone

### Interactive
- **Bright Cyan** (derived as `#16D9D9` or bright teal from hero buttons): Primary CTA button background for "Start building" and "Sign up" actions, high energy and conversion focus

### Neutral Scale
- **Pure White** (`#FFFFFF`): Card backgrounds, input fields, and light surface containers
- **Light Gray** (`#F0F0F0`): Subtle background tints and disabled states
- **Soft Gray** (`#F5F5F5`): Alternate background color for secondary surfaces
- **Border Gray** (`#E9EBED`): Dividers and card borders, very subtle contrast
- **Dark Gray** (`#757575`): Tertiary text for metadata and captions
- **Medium Gray** (`#808080`): Placeholder text and reduced-emphasis labels

### Surface & Borders
- **Light Border** (`#E5E5E5`): Standard border color for form inputs and card outlines
- **Card Border** (`#E9EBED`): Premium surface edges with minimal contrast
- **Input Border** (`#778089` or `#C1C1C1`): Form field strokes in default and interactive states

### Semantic / Status
- **Error Red** (`#DD0000`): Error messages, validation failures, and destructive actions

## 3. Typography Rules

### Font Family
**Primary: Figtree** (Headings, large display text)
- Fallback stack: `'Figtree', 'Segoe UI', system-ui, sans-serif`
- Characteristics: Bold, friendly, modern sans-serif with strong personality

**Secondary: Martian Mono** (Code, technical content)
- Fallback stack: `'Martian Mono', 'Courier New', monospace`
- Characteristics: Technical monospace for code blocks and inline code

**Tertiary: Instrument Sans** (Body, labels, UI text)
- Fallback stack: `'Instrument Sans', 'Segoe UI', 'Helvetica Neue', sans-serif`
- Characteristics: Clean, neutral sans-serif for readability at all sizes

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Large | Figtree | 72px | 800 | 79.2px | 0px | Hero/page title maximum scale |
| Display Medium | Figtree | 64px | 800 | 70.4px | 0px | Primary heading for major sections |
| Display Small | Figtree | 64.16px | 800 | 70.576px | 0px | Pricing page headings |
| Heading 1 | Figtree | 48.64px | 800 | 53.504px | 0px | Section headline |
| Heading 2 | Figtree | 32px | 700 | 35.2px | 0px | Subsection title |
| Body Large | Instrument Sans | 16px | 400 | 24px | 0px | Primary body text, form labels |
| Body Regular | Instrument Sans | 14px | 600 | 21px | 0px | UI text, button labels |
| Body Small | Instrument Sans | 14px | 400 | 21px | 0px | Secondary text, metadata |
| Caption | Instrument Sans | 12px | 400 | 18px | 0px | Fine print, helper text |
| Code Large | Martian Mono | 16px | 400 | 24px | 0px | Multi-line code blocks |
| Code Regular | Martian Mono | 12px | 500 | 13.2px | 0px | Inline code, terminal snippets |
| Button | Figtree | 14px | 600 | 21px | 0px | Primary button text |
| Link | Instrument Sans | 16px | 400 | 24px | 0px | Hyperlink text, navigation items |

### Principles
- Headings always use **Figtree** at weight 800 for maximum visual impact and brand recognition
- Body copy and UI labels use **Instrument Sans** for clarity and scanability; never smaller than 14px in production UIs
- Code and technical content uses **Martian Mono** at 12–16px to maintain monospace readability
- Line height scales proportionally with font size; never below 1.4× for body text to ensure comfortable reading
- Weight hierarchy (800 → 700 → 600 → 400) creates clear visual distinction between content layers
- Letter spacing remains neutral (0px) for standard text; only adjusted for all-caps or display use cases when needed

## 4. Component Stylings

### Buttons

#### Primary Button (CTA)
- **Background**: `#16D9D9` (bright cyan, derived from hero section buttons)
- **Text Color**: `#181A1C`
- **Font**: Figtree, 14px, weight 600
- **Padding**: `12px 24px` (inferred from extracted data and standard button padding)
- **Border Radius**: `6px`
- **Border**: `none`
- **Box Shadow**: `none` (on default state)
- **Height**: `auto` (min 44px for touch)
- **Line Height**: `21px`
- **Hover State**: Opacity 0.85, `box-shadow: 0px 4px 12px rgba(22, 217, 217, 0.25)`
- **Active State**: `#0E7FE1`, `box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1)`
- **Disabled State**: Background `#F0F0F0`, text `#757575`, opacity 0.50

#### Secondary Button (Outline)
- **Background**: `transparent`
- **Text Color**: `#16D9D9`
- **Font**: Figtree, 14px, weight 600
- **Padding**: `12px 24px`
- **Border Radius**: `6px`
- **Border**: `1px solid #16D9D9`
- **Box Shadow**: `none`
- **Hover State**: Background `rgba(22, 217, 217, 0.10)`, opacity 0.85
- **Active State**: Background `rgba(22, 217, 217, 0.20)`, border `1px solid #0E7FE1`
- **Disabled State**: Border `1px solid #E9EBED`, text `#757575`, opacity 0.50

#### Ghost Button (Text-only)
- **Background**: `transparent`
- **Text Color**: `#181A1C`
- **Font**: Instrument Sans, 16px, weight 400
- **Padding**: `8px 0px`
- **Border Radius**: `0px`
- **Border**: `none`
- **Box Shadow**: `none`
- **Hover State**: Text color `#2E51ED`, opacity 0.85
- **Underline**: `underline` on hover (optional)
- **Disabled State**: Text `#757575`, opacity 0.50

### Cards & Containers

#### Standard Card
- **Background**: `#FFFFFF`
- **Text Color**: `#181A1C`
- **Font**: Instrument Sans, 16px, weight 400
- **Padding**: `24px`
- **Border Radius**: `6px`
- **Border**: `1px solid #E9EBED`
- **Box Shadow**: `none` (on default)
- **Line Height**: `24px`
- **Hover State**: `box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.07), 0px 6px 30px rgba(0, 0, 0, 0.06), 0px 8px 10px rgba(0, 0, 0, 0.10)`

#### Elevated Card (Pricing)
- **Background**: `#FFFFFF`
- **Text Color**: `#181A1C`
- **Padding**: `24px`
- **Border Radius**: `6px`
- **Border**: `2px solid #2E51ED` (highlighted tier indicator)
- **Box Shadow**: `0px 0px 0px 2px rgba(46, 81, 237, 1) inset`
- **Badge Background** (Best Value): `#2E51ED`
- **Badge Text**: `#FFFFFF`, weight 600, size 12px

#### Dark Hero Section
- **Background**: `#181A1C` (or `#0D1818` for teal-tinted dark variant)
- **Text Color**: `#FFFFFF`
- **Padding**: `96px 48px` (large vertical rhythm)
- **Border Radius**: `0px` (full-width sections)
- **Border**: `none`

### Inputs & Forms

#### Text Input (Default)
- **Background**: `#FFFFFF`
- **Text Color**: `#181A1C`
- **Font**: Instrument Sans, 16px, weight 400
- **Padding**: `12px 16px`
- **Border Radius**: `4px`
- **Border**: `1px solid #778089`
- **Box Shadow**: `none`
- **Height**: `42px` (min touch target: 44px)
- **Line Height**: `24px`
- **Placeholder Color**: `#757575`, opacity 0.70
- **Focus State**: `border: 2px solid #2E51ED`, `box-shadow: 0px 0px 0px 3px rgba(46, 81, 237, 0.1)`
- **Error State**: `border: 1px solid #DD0000`, `background: rgba(221, 0, 0, 0.05)`

#### Search Input
- **Background**: `#FFFFFF`
- **Text Color**: `#181A1C`
- **Font**: Instrument Sans, 16px, weight 400
- **Padding**: `8px 16px`
- **Border Radius**: `4px`
- **Border**: `1px solid #C1C1C1`
- **Height**: `40px`
- **Icon Color**: `#545A61`
- **Focus State**: `border: 2px solid #2E51ED`

#### Checkbox / Radio
- **Unchecked**: `border: 1px solid #C1C1C1`, `background: #FFFFFF`
- **Checked**: `background: #2E51ED`, `border: 1px solid #2E51ED`
- **Size**: `16px × 16px`
- **Border Radius**: `2px` (checkbox), `50%` (radio)
- **Disabled State**: `background: #F0F0F0`, `opacity: 0.50`

### Navigation

#### Top Navigation Bar
- **Background**: `#FFFFFF`
- **Height**: `73.8px` (inferred from extracted data)
- **Padding**: `16px 48px`
- **Border Bottom**: `1px solid #E9EBED`
- **Box Shadow**: `0px 2px 4px rgba(32, 34, 37, 0.08), 0px 1px 10px rgba(32, 34, 37, 0.06)`
- **Item Text**: Instrument Sans, 16px, weight 400, color `#181A1C`
- **Item Hover**: Color `#2E51ED`, opacity 0.85
- **Item Active**: Color `#2E51ED`, `border-bottom: 2px solid #2E51ED`
- **Logo**: Max width `120px`, height `auto`
- **CTA Button** (Sign up): Bright cyan background, positioned right-aligned

#### Dropdown Menu
- **Background**: `#FFFFFF`
- **Padding**: `8px 0px`
- **Border Radius**: `6px`
- **Border**: `1px solid #E9EBED`
- **Box Shadow**: `0px 16px 24px rgba(0, 0, 0, 0.07), 0px 6px 30px rgba(0, 0, 0, 0.06), 0px 8px 10px rgba(0, 0, 0, 0.10)`
- **Menu Item Padding**: `12px 16px`
- **Menu Item Font**: Instrument Sans, 14px, weight 400
- **Menu Item Hover**: `background: #F5F5F5`
- **Separator**: `border-top: 1px solid #E9EBED`

### Links

#### Standard Link (Body)
- **Color**: `#2E51ED`
- **Font**: Instrument Sans, 16px, weight 400
- **Text Decoration**: `underline`
- **Cursor**: `pointer`
- **Hover State**: Color `#0E7FE1`, opacity 0.85
- **Visited State**: Color `#545A61` (optional; not always semantic)

#### Navigation Link
- **Color**: `#181A1C`
- **Font**: Instrument Sans, 16px, weight 400
- **Text Decoration**: `none`
- **Hover State**: Color `#2E51ED`
- **Active State**: Color `#2E51ED`, `border-bottom: 2px solid #2E51ED`

#### Code Link (Inline)
- **Color**: `#2E51ED`
- **Font**: Martian Mono, 12px, weight 500
- **Background**: `rgba(46, 81, 237, 0.05)`
- **Padding**: `2px 6px`
- **Border Radius**: `2px`
- **Hover State**: `background: rgba(46, 81, 237, 0.10)`

## 5. Layout Principles

### Spacing System
**Base Unit**: `4px`

**Spacing Scale**:
- `4px` (xs) — Tight internal spacing within components
- `8px` (sm) — Small gap between related elements
- `12px` (md) — Standard internal padding for compact components
- `16px` (base) — Primary padding and gap unit
- `20px` (lg) — Generous internal spacing
- `24px` (xl) — Standard section/card spacing
- `32px` (2xl) — Medium spacing between sections
- `48px` (3xl) — Large spacing for major section divisions
- `64px` (4xl) — Extra-large gap between major layout blocks
- `96px` (5xl) — Hero section padding and maximum breathing room

**Usage Context**:
- **Component Internal**: 8px–16px (button padding, input height, card padding)
- **Component-to-Component**: 16px–24px (gap between cards in grid)
- **Section Spacing**: 48px–96px (vertical rhythm between major sections)
- **Page Margins**: 32px–48px (horizontal padding on containers)

### Grid & Container
- **Max Container Width**: `1200px` (standard desktop layout)
- **Grid Column Count**: 12-column system (inferred from 1200px with 16px gutters)
- **Gutter Width**: `16px` (gap between columns)
- **Breakpoint Padding**: 
  - Desktop (1200px+): `48px` left/right
  - Tablet (768px–1199px): `32px` left/right
  - Mobile (320px–767px): `16px` left/right

**Section Patterns**:
- **Full-width Hero**: Background extends to viewport edges; content constrained to `1200px` max
- **Two-Column Layout**: Image (50%) + Text (50%) with 24px gutter; responsive to single-column on tablet
- **Card Grid**: 4 cards on desktop (25% width each), 2 on tablet (50%), 1 on mobile (100%)
- **Navbar**: Full-width with `1200px` max-width container inside, fixed or sticky positioning

### Whitespace Philosophy
Netlify's design prioritizes generous, intentional whitespace to reduce cognitive load and highlight key information. Dark hero sections are separated from light content areas with 96px vertical padding, creating visual breathing room. Cards and containers maintain consistent 24px internal padding, with 16–24px gaps between elements. This approach makes the interface feel premium and intentional rather than crowded, allowing illustrations, typography, and interactive elements to dominate without visual clutter.

### Border Radius Scale
- `0px` — Full-width sections, utility spacers (no radius)
- `2px` — Minimal radius for inline code tags, checkboxes
- `4px` — Form inputs, small utility elements
- `6px` — Standard button radius, card radius, dropdown menus
- `12px` — Large cards, modals (reserved for special emphasis)
- `50%` — Circular buttons, avatars, radio buttons
- `360px` — Fully rounded pill-style buttons (for CTAs like "Start building")

### Border Widths
- **Thin** (`1px`) — Standard borders on inputs, cards, navigation items
- **Medium** (`2px`) — Focus states on inputs, highlighted card tiers, active navigation indicators
- **Thick** (`4px`) — Reserved for prominent focus rings and high-emphasis indicators (use sparingly)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (0) | No shadow | Card backgrounds, input fields, body text |
| Hover (1) | `0px 4px 12px rgba(0, 0, 0, 0.10)` | Standard interactive elements on hover |
| Raised (2) | `0px 2px 4px rgba(32, 34, 37, 0.08), 0px 1px 10px rgba(32, 34, 37, 0.06)` | Navigation bar, floating labels, sticky elements |
| Elevated (3) | `0px 8px 24px rgba(0, 0, 0, 0.07), 0px 6px 30px rgba(0, 0, 0, 0.06), 0px 8px 10px rgba(0, 0, 0, 0.10)` | Dropdown menus, floating panels, card hover |
| Modal (4) | `0px 16px 48px rgba(0, 0, 0, 0.15)` | Modals, tooltips, popovers (inferred for depth) |

**Shadow Philosophy**: Netlify uses subtle, multi-layer shadows that increase in blur and spread with elevation level, creating natural depth without harsh black drop-shadows. The primary shadow color maintains the system's dark (#181A1C) with low opacity (6–10%), ensuring shadows feel integrated rather than floating. Shadows are reserved for interactive states and overlays; static card backgrounds remain unshaded for clarity.

### Opacity Levels
- **Disabled** (`0.50` / 50%) — Buttons, inputs, and text in disabled state
- **Hover** (`0.85` / 85%) — Subtle intensity reduction on hover states
- **Overlay** (`0.60` / 60%) — Semi-transparent dark overlay for modals
- **Text Reduction** (`0.70` / 70%) — Secondary text, metadata, reduced-emphasis content
- **Partial Visibility** (`0.10` / 10%) — Placeholder text, ghost borders, very light backgrounds

### Z-index / Layering
- **Base** (`1`) — Standard page content, body text
- **Relative** (`2`) — Cards, floating elements slightly above base
- **Sticky** (`100`) — Fixed navigation bars, sticky headers
- **Dropdown** (`1000`) — Dropdown menus, tooltips
- **Modal Underlay** (`9989`) — Semi-transparent backdrop behind modals
- **Modal** (`9999`) — Modal dialogs, important overlays
- **Toast** (`2000000000`) — Notifications, alerts (maximum z-index to ensure visibility above all content)

## 7. Do's and Don'ts

### Do
- **Use Figtree weight 800** for all headings (h1–h3) to establish visual hierarchy and brand consistency
- **Maintain 16px minimum font size** for body text and UI labels to ensure readability and accessibility
- **Apply the 24px spacing** as default padding inside cards and containers; scale up to 48px+ for major sections
- **Leverage dark hero sections** (#181A1C or #0D1818) to create visual separation and draw focus to CTAs
- **Use bright cyan (#16D9D9)** exclusively for primary CTAs and interactive focal points
- **Include 2px focus borders** (`#2E51ED`) on all interactive elements for keyboard navigation and accessibility
- **Stack multiple cards in a 12-column grid** with 16px gutters, collapsing to single-column on mobile
- **Pair Martian Mono code blocks** with light backgrounds and subtle borders to maintain scannability
- **Use 6px border radius** as the standard for buttons, inputs, and cards for a modern, polished feel
- **Combine box-shadow layers** (blur + spread) for elevation; never use solid black shadows
- **Test touch targets** at 44px minimum height/width on mobile interfaces
- **Color interactive links blue (#2E51ED)** and underline them for clear affordance

### Don't
- **Don't use Instrument Sans** for display headings; reserve it for body, labels, and UI text only
- **Don't set font sizes below 14px** in production UIs; use 12px only for code or captions
- **Don't apply shadows to every card**; use shadows only for hover states and overlay elements
- **Don't mix multiple accent colors** in a single section; cyan CTAs should dominate over secondary blues
- **Don't exceed 48px padding** in standard cards; reserve 96px+ for hero sections only
- **Don't use full-opacity black (#000000)** as a background; use #181A1C for dark surfaces
- **Don't create border radius below 2px** except for technical elements like inline code
- **Don't disable buttons with opacity alone**; always include visual distinction (e.g., gray background, reduced opacity, cursor disabled)
- **Don't nest more than two levels of shadow** effects; simplicity prevents visual confusion
- **Don't override button font sizes** from 14px; maintain consistency across all CTAs
- **Don't use color as the only indicator** of state changes; combine color with spacing, weight, or opacity
- **Don't forget keyboard focus states**; always include `:focus-visible` styles on interactive elements

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | 320px–479px | Single column, 16px padding, 12px gaps, button full-width, font-size +1px |
| Mobile Large | 480px–767px | Single column, 16px padding, 16px gaps, stacked nav, button 80% width |
| Tablet | 768px–1199px | 2-column grid, 32px padding, 20px gaps, collapsed navigation menu, hero padding 48px 32px |
| Desktop | 1200px+ | 4-column/12-column grid, 48px padding, 24px gaps, full navigation, max-width 1200px container |
| Wide Desktop | 1920px+ | Centered layout with increased side margins, whitespace expansion on hero sections |

**Responsive Text Scaling**:
- **Display (72px on desktop)**: 48px on tablet, 36px on mobile
- **Heading (48px on desktop)**: 32px on tablet, 24px on mobile
- **Body (16px on desktop)**: 14px on tablet and mobile
- **Button (14px)**: Remains 14px but padding increases to 12px 16px on touch devices

### Touch Targets
- **Minimum Height/Width**: 44px × 44px for all interactive elements (buttons, links, checkboxes, radio buttons)
- **Spacing Between Targets**: 8px minimum gap to prevent accidental taps
- **Button Padding on Mobile**: Increase to `12px 20px` (from desktop `12px 24px`) for comfortable thumb interaction
- **Link Padding**: Add `4px 8px` padding around text links on mobile to increase tap area
- **Form Input Height**: 48px on mobile (vs. 42px on desktop) for easier interaction
- **Dropdown/Menu Items**: Minimum 44px tall, 16px padding vertical to accommodate touch

### Collapsing Strategy
- **Navigation**: Hamburger menu (≡ icon) appears at tablet breakpoint (768px); full nav hides, slides into off-canvas or fixed overlay
- **Grid Layouts**: 4-column → 2-column → 1-column collapse; maintain 16px gaps throughout
- **Hero Sections**: Image and text stack vertically on tablet; stagger on mobile with image above text
- **Pricing Cards**: Horizontal scroll or single-column stack on mobile; maintain 24px padding per card
- **Forms**: Single-column layout on all mobile devices; label above input (no side-by-side)
- **Sidebars**: Convert to collapsible accordion or slide-out panel on tablet/mobile
- **Footer**: Multi-column on desktop → 2-column on tablet → single column on mobile, with accordion groups for sections
- **Modals**: Full viewport width on mobile with 16px margin; maintain 48px padding on desktop
- **Table Data**: Horizontal scroll with sticky left column on mobile; card-based layout alternative if applicable

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA Background**: Bright Cyan (`#16D9D9`) — "Start building", "Sign up", primary button fills
- **Primary CTA Hover**: Cyan with opacity 0.85 or shift to `#0E7FE1` on active
- **Text (Primary)**: Dark Base (`#181A1C`) — All body text, high-contrast headings
- **Text (Secondary)**: Slate Gray (`#545A61`) — Supporting text, metadata, reduced emphasis
- **Link Color**: Bright Blue (`#2E51ED`) — All hyperlinks, navigation active state
- **Background (Light)**: Pure White (`#FFFFFF`) — Card backgrounds, input fields, light containers
- **Background (Dark)**: Dark Base (`#181A1C`) — Hero sections, dark-mode sections
- **Border (Standard)**: Light Border (`#E9EBED` or `#E5E5E5`) — Card outlines, dividers, input defaults
- **Border (Focus)**: Bright Blue (`#2E51ED`) — Input focus rings, active states (2px width)
- **Error / Alert**: Error Red (`#DD0000`) — Error messages, validation failures
- **Disabled State**: Light Gray (`#F0F0F0`) background with opacity 0.50 or text `#757575`

### Iteration Guide

**1. Typography Foundation**
Always use Figtree weight 800 for all display and heading levels (h1–h3). Reserve Instrument Sans for body copy, labels, and UI text at 14–16px. Code and technical snippets use Martian Mono at 12–16px with monospace fallback. Never set any production text below 14px except for captions.

**2. Color Hierarchy**
Establish visual hierarchy through color: Dark Base (#181A1C) for dominant text and backgrounds, Slate Gray (#545A61) for secondary information, and Bright Blue (#2E51ED) for interactive elements and links. Bright Cyan (#16D9D9) is reserved exclusively for primary CTAs and high-energy actions. Always test contrast ratios (WCAG AA minimum 4.5:1 for text).

**3. Spacing & Rhythm**
Use 24px as the default internal padding for cards and containers. Scale spacing in multiples of 4px (8px, 16px, 32px, 48px, 96px). Maintain 16px gutters between grid columns and 16–24px gaps between inline elements. Large sections (hero, full-width blocks) use 96px vertical padding; standard sections use 48px. Never compress spacing below 8px for interactive elements.

**4. Button & CTA Styling**
Primary buttons: Bright Cyan (#16D9D9) background, Figtree 14px weight 600, 12px 24px padding, 6px border-radius, no border, no shadow on default state. Add hover shadow: `0px 4px 12px rgba(22, 217, 217, 0.25)`. Secondary buttons use transparent background with 1px cyan border. Ghost buttons are text-only (#181A1C) on light backgrounds, shifting to Bright Blue on hover.

**5. Elevation & Depth**
Apply subtle multi-layer shadows only on hover and overlay states. Base shadow: `0px 2px 4px rgba(0, 0, 0, 0.08)`. Elevated shadow (dropdowns, modals): `0px 8px 24px rgba(0, 0, 0, 0.07), 0px 6px 30px rgba(0, 0, 0, 0.06), 0px 8px 10px rgba(0, 0, 0, 0.10)`. Never use harsh black drops; maintain consistent dark opacity across all shadows.

**6. Form & Input Components**
Input fields: White background, 16px height with 12px 16px padding, 1px border in #778089, Instrument Sans 16px weight 400. Focus state: 2px Bright Blue border with `0px 0px 0px 3px rgba(46, 81, 237, 0.1)` shadow. Error state: Red (#DD0000) border with light red background `rgba(221, 0, 0, 0.05)`. Disabled: Light Gray background #F0F0F0 with 0.50 opacity.

**7. Dark Hero Sections**
Hero sections use Dark Base (#181A1C) or teal-tinted #0D1818 as background. Text is Pure White (#FFFFFF). Padding: 96px vertical, 48px horizontal. Include a bright cyan CTA button with appropriate whitespace. Illustrations and decorative elements add personality; keep them clean and aligned to the grid.

**8. Responsive Collapsing**
Design mobile-first but optimize for desktop first (3–4 columns). Tablet (768px): Collapse to 2-column grid, hide full navigation behind hamburger, stack hero image and text. Mobile (320px–767px): Single column, 16px padding, full-width buttons, font-size adjustments (display 36px, body 14px), touch targets 44px minimum.

**9. Focus & Accessibility**
Every interactive element must have a visible `:focus-visible` state with a 2px Bright Blue (#2E51ED) border and optional background tint `rgba(46, 81, 237, 0.1)`. Maintain color contrast ratios of at least 4.5:1 for text and 3:1 for UI components. Never rely on color alone for state indication; combine with opacity, borders, or weight changes.

**10. Consistency & Scale**
Maintain the established scale across all components: Use 6px as standard border-radius for buttons and cards, never vary within a feature unless intentionally emphasizing hierarchy. Keep button sizes and padding consistent (44px minimum touch height). Repeat spacing ratios (multiples of 4px) and shadow values across all elevations. Document any deviation from the system and update the design system accordingly.