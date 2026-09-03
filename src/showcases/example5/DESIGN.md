---
name: Canva
colors:
  primary: "#9E9EFF"
  secondary: "#0F1015"
  surface: "#000000"
  on-surface: "#FFFFFF"
  error: "#DB142C"
typography:
  body-md:
    fontFamily: Canva Sans
    fontSize: 14px
    fontWeight: 400
rounded:
  md: 48px
---

# Design System Inspired by Canva

## 1. Visual Theme & Atmosphere

Canva's design system embodies creative possibility and accessibility through a vibrant, modern visual language. The system balances bold gradients flowing from deep purple to turquoise with clean, minimalist interfaces that prioritize user focus and content creation. The aesthetic feels premium yet approachable, combining energetic accent colors with sophisticated neutral foundations. The design celebrates creativity through generous use of color, smooth transitions, and carefully orchestrated depth, while maintaining clarity and usability across all interaction points. This creates an environment where users feel empowered to design without intimidation.

**Key Characteristics**

- Bold gradient backgrounds (purple to cyan/teal transitions)
- High contrast between vibrant accents and neutral canvases
- Clean, rounded button interfaces with subtle depth
- Modern, approachable typography emphasizing readability
- Seamless blend of professional tools with playful brand energy
- Generous whitespace supporting creative content
- Smooth, glassy elevation effects suggesting refinement

## 2. Color Palette & Roles

### Primary

- **Brand Purple** (`#8B3DFF`): Core brand identity, primary CTAs, key interactive elements
- **Deep Purple** (`#151E82`): Secondary brand anchor, darker UI contexts
- **Light Purple Accent** (`#9E9EFF`): Highlights, light backgrounds, supporting accent

### Accent Colors

- **Vibrant Purple** (`#A370FC`): Alternative accent, gradient transitions, visual interest
- **Cyan Teal** (`#00D9D9` inferred): Gradient terminus, secondary accent backgrounds (extrapolated from gradient hero)

### Interactive

- **CTA Purple** (`#8B3DFF`): Button fills, link highlights, primary interactions
- **Link Purple** (`#8B3DFF`): Hyperlink text, interactive text elements
- **Light Link** (`#9E9EFF`): Secondary links, footer links

### Neutral Scale

- **Black** (`#000000`): Primary text, strong contrast, dark UI elements
- **Deep Dark** (`#0F1015`): Alternative dark backgrounds, subtle contrast variations
- **Secondary Dark** (`#101219`): Panel backgrounds, card fills
- **Slate Gray** (`#394660`): Tertiary text, secondary UI elements
- **Medium Gray** (`#404F6D`): Border colors, dividers, subtle UI structure
- **White** (`#FFFFFF`): Primary backgrounds, light surfaces, text on dark

### Surface & Borders

- **Off-White** (`#F3F4F7`): Subtle light backgrounds, disabled states, surface variations
- **Gray Border** (`#404F6D`): Input borders, dividers, secondary structure

### Semantic / Status

- **Error Red** (`#DB142C`): Primary error states, alerts, destructive actions
- **Error Dark Red** (`#B61629`): Secondary error emphasis, alternative error contexts

## 3. Typography Rules

### Font Family

**Primary:** Canva Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif

**Secondary:** Times New Roman, Georgia, serif (used for specific list and hierarchical contexts)

**Code/Technical:** Monospace fallback, `Courier New`, monospace

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / H1 | Canva Sans | 24px | 600 | 32px | 0px | Hero headlines, major section titles |
| Heading / H2 | Times New Roman | 15px | 700 | normal | 0px | Secondary section headers, card titles |
| Subheading / H3 | Times New Roman | 11.7px | 700 | normal | 0px | Tertiary headers, subsection labels |
| Body / Paragraph | Canva Sans | 14px | 400 | 22px | 0px | Primary content text, descriptions |
| Button | Canva Sans | 14px | 600 | 22px | 0px | Button labels, call-to-action text |
| List Item | Times New Roman | 10px | 400 | normal | 0px | Unordered/ordered list items |
| Caption / Small | Canva Sans | 12px | 400 | 18px | 0px | Fine print, metadata, helper text |
| Code | Monospace | 12px | 400 | 18px | 0px | Code blocks, technical content |

### Principles

- **Clarity First**: Generous line heights and clear weight differentiation ensure readability at all scales
- **Semantic Hierarchy**: Font family and weight changes signal information importance — bold sans-serif for actions, serif for structured content
- **Accessibility**: Minimum 14px for body text, high contrast ratios (white text on brand purple, dark text on light backgrounds)
- **Brand Voice**: Canva Sans conveys modernity and approachability; serif supplements with formality where needed
- **Consistent Baseline**: All text uses pixel-aligned measurements for precise layout control

## 4. Component Stylings

### Buttons

#### Primary Button

- **Background**: `#8B3DFF` (Brand Purple)
- **Text Color**: `#FFFFFF` (White)
- **Font Size**: `14px`
- **Font Weight**: `600`
- **Font Family**: Canva Sans
- **Padding**: `12px 24px`
- **Border Radius**: `12px`
- **Border**: `0px none`
- **Height**: `44px` (minimum touch target)
- **Box Shadow**: `rgba(139, 61, 255, 0.3) 0px 8px 16px 0px`
- **Hover State**: Background `#7C2FE6`, shadow `rgba(139, 61, 255, 0.4) 0px 12px 20px 0px`
- **Active State**: Background `#6A27CC`, shadow `rgba(139, 61, 255, 0.2) 0px 4px 8px 0px`
- **Disabled State**: Background `#E8E8E8`, text color `#999999`, shadow `none`

#### Secondary Button

- **Background**: `rgba(255, 255, 255, 0.15)` (Transparent White)
- **Text Color**: `#FFFFFF`
- **Font Size**: `14px`
- **Font Weight**: `600`
- **Font Family**: Canva Sans
- **Padding**: `12px 24px`
- **Border Radius**: `12px`
- **Border**: `1px solid rgba(255, 255, 255, 0.3)`
- **Height**: `44px`
- **Box Shadow**: `rgba(255, 255, 255, 0.08) 0px 1px 0px inset`
- **Hover State**: Background `rgba(255, 255, 255, 0.25)`, border `1px solid rgba(255, 255, 255, 0.4)`
- **Active State**: Background `rgba(255, 255, 255, 0.1)`, border `1px solid rgba(255, 255, 255, 0.2)`
- **Disabled State**: Background `rgba(255, 255, 255, 0.05)`, text color `rgba(255, 255, 255, 0.5)`

#### Ghost Button

- **Background**: `transparent`
- **Text Color**: `#FFFFFF`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: Canva Sans
- **Padding**: `8px 16px`
- **Border Radius**: `10px`
- **Border**: `0px none`
- **Height**: `32px`
- **Box Shadow**: `none`
- **Hover State**: Background `rgba(255, 255, 255, 0.1)`, text color `#FFFFFF`
- **Active State**: Background `rgba(255, 255, 255, 0.05)`
- **Disabled State**: Text color `rgba(255, 255, 255, 0.4)`

### Cards & Containers

#### Feature Card (Colored Background)

- **Background**: `#FDD835` (Yellow) or `#FF6F00` (Orange) based on section
- **Text Color**: `#000000` (Black)
- **Padding**: `48px`
- **Border Radius**: `16px`
- **Border**: `0px none`
- **Box Shadow**: `0px 8px 32px rgba(0, 0, 0, 0.08)`
- **Min Height**: `280px`

#### Standard Card

- **Background**: `#FFFFFF` (White)
- **Text Color**: `#000000`
- **Padding**: `24px`
- **Border Radius**: `12px`
- **Border**: `1px solid #F3F4F7`
- **Box Shadow**: `0px 2px 8px rgba(0, 0, 0, 0.06)`

#### Dark Card / Panel

- **Background**: `#101219` (Secondary Dark)
- **Text Color**: `#FFFFFF`
- **Padding**: `24px`
- **Border Radius**: `12px`
- **Border**: `1px solid #404F6D`
- **Box Shadow**: `0px 4px 12px rgba(0, 0, 0, 0.2)`

### Inputs & Forms

#### Text Input

- **Background**: `#FFFFFF`
- **Text Color**: `#0F1015` (Deep Dark)
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Font Family**: Canva Sans
- **Padding**: `12px 16px`
- **Border Radius**: `8px`
- **Border**: `1px solid #E0E0E0`
- **Height**: `44px`
- **Line Height**: `22px`
- **Placeholder Color**: `#999999`
- **Focus State**: Border `1px solid #8B3DFF`, box-shadow `0px 0px 0px 3px rgba(139, 61, 255, 0.1)`
- **Disabled State**: Background `#F3F4F7`, border `1px solid #DDD`, text color `#CCCCCC`
- **Error State**: Border `1px solid #DB142C`, box-shadow `0px 0px 0px 3px rgba(219, 20, 44, 0.1)`

#### Checkbox

- **Size**: `20px × 20px`
- **Background**: `#FFFFFF`
- **Border**: `2px solid #404F6D`
- **Border Radius**: `4px`
- **Checked Background**: `#8B3DFF`
- **Checked Tick Color**: `#FFFFFF`
- **Focus Outline**: `0px 0px 0px 3px rgba(139, 61, 255, 0.15)`

#### Select/Dropdown

- **Background**: `#FFFFFF`
- **Text Color**: `#0F1015`
- **Font Size**: `14px`
- **Padding**: `12px 16px`
- **Border**: `1px solid #E0E0E0`
- **Border Radius**: `8px`
- **Height**: `44px`
- **Arrow Color**: `#394660`
- **Focus State**: Border `1px solid #8B3DFF`

### Navigation

#### Header Navigation

- **Background**: `#0F1015` or gradient purple-cyan
- **Text Color**: `#FFFFFF`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Padding**: `16px 0px`
- **Link Hover**: Text color `#9E9EFF`, no underline by default
- **Active Link**: Text color `#FFFFFF`, text-weight `600`

#### Link

- **Text Color**: `#8B3DFF`
- **Font Size**: `14px`
- **Font Weight**: `400`
- **Text Decoration**: `none`
- **Cursor**: `pointer`
- **Hover State**: Text color `#6A27CC`, text-decoration `underline`
- **Visited State**: Text color `#A370FC`
- **Disabled State**: Text color `#CCCCCC`, cursor `not-allowed`

### Badges

#### Primary Badge

- **Background**: `#8B3DFF`
- **Text Color**: `#FFFFFF`
- **Font Size**: `12px`
- **Font Weight**: `600`
- **Padding**: `4px 12px`
- **Border Radius**: `20px`
- **Height**: `24px`

#### Secondary Badge

- **Background**: `#F3F4F7`
- **Text Color**: `#000000`
- **Font Size**: `12px`
- **Font Weight**: `600`
- **Padding**: `4px 12px`
- **Border Radius**: `20px`
- **Height**: `24px`

#### Status Badge (Error)

- **Background**: `#DB142C`
- **Text Color**: `#FFFFFF`
- **Font Size**: `12px`
- **Font Weight**: `600`
- **Padding**: `4px 12px`
- **Border Radius**: `20px`

## 5. Layout Principles

### Spacing System

**Base Unit**: `4px`

**Spacing Scale**:
- **Extra Small**: `4px` — Micro gaps between inline elements
- **Small**: `8px` — Gaps between form fields, tight component spacing
- **Compact**: `12px` — Padding within components, tight container spacing
- **Base**: `16px` — Standard padding, default gaps between sections
- **Medium**: `24px` — Section padding, card internal spacing, navigation padding
- **Large**: `32px` — Between major content blocks, container sides
- **Extra Large**: `48px` — Full section padding, hero spacing, large container margins
- **Massive**: `64px` — Top-level section separation, full-width containers
- **Hero Gap**: `168px` — Large vertical spacing between hero and content sections

**Context Usage**:
- Buttons: `12px` vertical, `24px` horizontal
- Cards: `24px` padding
- Sections: `48px` to `64px` top/bottom
- Input fields: `12px` padding
- Navigation: `16px` horizontal, `12px` vertical

### Grid & Container

- **Max Width**: `1200px` (standard container max width)
- **Full Width Sections**: No max-width constraint on hero and full-bleed sections
- **Horizontal Padding**: `32px` on desktop, `16px` on tablet, `12px` on mobile
- **Column Strategy**: 12-column grid at desktop, 6-column at tablet, 1-column at mobile
- **Section Pattern**: Full-width hero, constrained content sections, alternating backgrounds

### Whitespace Philosophy

Whitespace is treated as a first-class design element. Generous vertical spacing (48px–64px) between major sections creates visual breathing room and helps users process information sequentially. Within components, balanced padding ensures content legibility without crowding. Negative space around CTAs draws focus without visual clutter. Backgrounds (solid colors or gradients) define spatial regions, reducing reliance on borders.

### Border Radius Scale

- **Sharp**: `0px` — Form inputs (minimal rounding), certain technical elements
- **Slight**: `4px` — Checkboxes, small interactive elements, subtle rounding
- **Subtle**: `8px` — Input fields, small cards, minor UI components
- **Standard**: `12px` — Buttons (primary), cards, containers, general components
- **Rounded**: `16px` — Feature cards, larger containers
- **Pill**: `20px` — Badges, pill-shaped buttons, fully rounded elements
- **Full**: `48px` — Circular buttons, avatars, hero-scale CTAs

### Border Widths

- **Thin**: `1px` — Input borders, subtle dividers, secondary structure
- **Medium**: `2px` — Focus outlines on interactive elements, emphasis borders
- **Thick**: `3px` — Focus rings (accessibility), strong visual emphasis

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base (0) | `box-shadow: none` | Flat surfaces, backgrounds, text |
| Raised (1) | `box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 8px 0px` | Standard cards, mild lift |
| Elevated (2) | `box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 32px 0px` | Feature cards, medium emphasis |
| Floating (3) | `box-shadow: rgba(0, 0, 0, 0.12) 0px 12px 48px 0px` | Modals, popovers, strong emphasis |
| Overlay (4) | `box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 64px 0px` | Dropdowns, tooltips, maximum prominence |

**Shadow Philosophy**: Shadows are used sparingly and subtly to create perceived depth without overwhelming the interface. Dark surfaces receive stronger shadows to maintain contrast, while light surfaces use minimal elevation. Multiple inset and outset shadows create a glassy, premium quality on interactive elements. Hover and active states intensify shadows to indicate interactivity.

### Opacity Levels

- **Subtle**: `0.03` (3%) — Barely perceptible hover states, minimal visual feedback
- **Light**: `0.04` (4%) — Soft overlays, disabled state backgrounds
- **Medium**: `0.07` (7%) — Noticeable hover effects, secondary interaction feedback
- **Strong**: `0.25` (25%) — Inset highlights on glassy components, secondary text
- **Heavy**: `0.5` (50%) — Modal backdrops, strong visual separation
- **Full**: `1` (100%) — Solid colors, opaque elements

### Z-index / Layering

- **Base Layer**: `1` — Default content, body text, standard components
- **Elevated Layer**: `2` — Hovering cards, raised buttons
- **High Layer**: `5` — Modals, overlays, popovers
- **Sticky Layer**: `100` — Fixed headers, sticky navigation, always-visible elements
- **Top Layer**: `999` — Toast notifications, alerts, topmost interactive elements

## 7. Do's and Don'ts

### Do

- **Use Canva Sans for body and UI text** — maintains brand consistency and modern readability
- **Leverage the purple-to-cyan gradient** on hero sections and prominent CTAs to establish brand presence
- **Apply consistent button padding** (`12px` vertical, `24px` horizontal) for touch-friendly targets
- **Include 16px minimum horizontal padding** on mobile to avoid edge-to-edge cramping
- **Use rounded corners (12px standard)** on buttons, cards, and inputs for a polished, approachable feel
- **Layer shadows subtly** — never stack more than two shadow values unless creating a glassy inset effect
- **Maintain 1.5x or higher line height** for body text (22px line height for 14px text) to ensure readability
- **Apply semantic colors consistently** — purple for primary actions, red only for errors or destructive actions
- **Center-align CTAs in hero sections** and use generous whitespace around them
- **Test all components at minimum 44px height** for mobile accessibility

### Don't

- **Don't use jarring color contrasts** outside the intentional purple-cyan gradient — maintain visual harmony
- **Don't apply shadows to backgrounds or static text** — reserve shadows for elevated interactive elements
- **Don't shrink buttons below 32px height** on any screen size; prioritize touch targets
- **Don't mix Canva Sans with serif fonts in buttons or primary CTAs** — keep serif for hierarchical headers only
- **Don't create input fields narrower than 200px** or with padding less than 12px
- **Don't use light colors on light backgrounds** — ensure WCAG AA contrast minimum (4.5:1 for normal text)
- **Don't apply border-radius greater than 20px** on rectangular components unless creating a full pill (48px)
- **Don't forget disabled state styling** — always gray out and adjust cursor for non-interactive elements
- **Don't use error red (#DB142C) for non-critical messaging** — reserve it for true errors and confirmations
- **Don't apply opacity to text below 0.5** — ensure readability; use color shifts instead for secondary text

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Key Changes |
|-----------|-------|-------------|
| Mobile | 320px – 599px | Single-column layout, full-width cards, 12px side padding, 32px section spacing, 14px font minimum |
| Tablet | 600px – 999px | Two-column grid, 16px side padding, 40px section spacing, buttons at 44px height |
| Desktop | 1000px – 1399px | 12-column grid, 32px side padding, 48px section spacing, full typography scale |
| Wide | 1400px+ | Constrained max-width 1200px, centered layout, 64px section spacing |

### Touch Targets

- **Minimum Height**: `44px` for all buttons and interactive elements
- **Minimum Width**: `44px` for square buttons and icon buttons
- **Minimum Spacing**: `8px` gap between adjacent touch targets to prevent accidental activation
- **Link/Text Hit Area**: Extend padding to 8px around clickable text links
- **Mobile Padding**: Increase padding to `16px` on mobile for easier tapping

### Collapsing Strategy

- **Hero Section**: Full-width on all breakpoints; font size reduces from 24px (desktop) to 20px (mobile)
- **Navigation**: Horizontal on desktop (32px height), collapses to hamburger menu on tablets below 600px
- **Cards**: 1 column on mobile, 2 columns on tablet, 3+ on desktop; full-width with 12px padding on mobile
- **Feature Sections**: 2-column on desktop with 24px gap, stacks to 1 column on tablet and mobile
- **Buttons**: Full-width CTA buttons on mobile (width 100% with 12px side margin), inline on desktop
- **Typography**: Headings scale: H1 from 24px (desktop) to 18px (mobile); body stays 14px minimum
- **Spacing**: Section margins reduce from 64px (desktop) to 48px (tablet) to 32px (mobile)
- **Inputs**: Full-width on mobile with 12px side padding, constrained width on desktop (max 400px)

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Brand Purple (`#8B3DFF`) — all primary buttons, key interactive elements
- **Background**: White (`#FFFFFF`) for light mode, Deep Dark (`#0F1015`) for dark mode
- **Heading Text**: Black (`#000000`) on light, White (`#FFFFFF`) on dark
- **Body Text**: Black (`#000000`) on light backgrounds, White (`#FFFFFF`) on dark
- **Links**: Brand Purple (`#8B3DFF`) — underline on hover
- **Error/Status**: Error Red (`#DB142C`) for alerts and destructive actions
- **Accents & Gradients**: Light Purple (`#9E9EFF`) for highlights; purple-to-cyan for hero gradients
- **Borders & Dividers**: Medium Gray (`#404F6D`) for subtle structure
- **Disabled States**: Off-White (`#F3F4F7`) background with Light Gray text (`#999999`)

### Iteration Guide

1. **All buttons default to 44px minimum height** with `12px` vertical and `24px` horizontal padding; use `12px` border-radius for standard, `48px` for pills
2. **Primary buttons are Brand Purple (`#8B3DFF`)** with White text (`#FFFFFF`); secondary buttons use transparent white with borders
3. **Typography hierarchy starts with Canva Sans for UI** (buttons, body, captions) and Times New Roman for structured headers and lists
4. **Spacing follows 4px base unit**: use 16px gaps between sections, 24px padding in cards, 48px between major content blocks
5. **Shadows are subtle**: only apply elevation shadows to cards (raised level) and interactive elements, never to static backgrounds
6. **Focus states on all interactive elements** must include a 3px box-shadow with color opacity (e.g., `rgba(139, 61, 255, 0.15)`)
7. **Mobile layouts require full-width sections** with 12px side padding; buttons must be 44px height and full-width on screens below 600px
8. **Disabled elements get desaturated** with `#F3F4F7` background, reduced opacity text, and `cursor: not-allowed`
9. **Every card and container uses 12px border-radius minimum**; feature cards use 16px for emphasis
10. **Contrast must meet WCAG AA (4.5:1)** for normal text; test all color pairs, especially light purple on white