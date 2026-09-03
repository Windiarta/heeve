---
name: Uber
colors:
  primary: "#0000EE"
  secondary: "#757575"
  surface: "#000000"
  on-surface: "#FFFFFF"
typography:
  body-md:
    fontFamily: UberMove
    fontSize: 20px
    fontWeight: 700
rounded:
  md: 999px
---

# Design System Inspired by Uber

## 1. Visual Theme & Atmosphere

Uber's design system embodies a bold, efficient, and accessible aesthetic built for a global on-demand mobility platform. The visual language prioritizes clarity and speed—using a high-contrast monochromatic palette anchored by pure black and white, complemented by a striking electric blue accent. The typography is confident and modern, with generous whitespace creating breathing room in dense information hierarchies. The system balances utilitarian functionality with approachability, reflecting Uber's mission to make transportation seamless across diverse markets and user contexts.

**Key Characteristics**
- High-contrast, monochromatic foundation with decisive black and white
- Electric blue accent for interactive elements and primary calls-to-action
- Bold, confident typography using Uber's proprietary font family
- Generous spacing and strategic whitespace for clarity
- Accessibility-first approach with strong color contrast ratios
- Minimalist component styling with rounded affordances for buttons
- Global scalability across multiple markets and languages

## 2. Color Palette & Roles

### Primary
- **Primary CTA** (`#0000EE`): Electric blue used for links, primary interactive elements, and emphasis points. Appears 76 times across pages, establishing the brand's accent color.

### Interactive
- **Primary Button** (`#000000`): Deep black background for dominant action buttons, ensuring maximum contrast and visual weight.
- **Secondary Button** (`#FFFFFF`): White background with black text for secondary actions, creating visual hierarchy.
- **Tertiary Button** (`#EEEEEE`): Light gray background for tertiary or lower-priority actions.

### Neutral Scale
- **Dominant Text** (`#000000`): Primary text color used 3651 times; the backbone of all readable content across the platform.
- **Secondary Text** (`#333333`): Slightly lighter black for supporting copy, used 456 times for subheadings and contextual information.
- **Tertiary Text** (`#757575`): Medium gray for disabled, hint, or de-emphasized text; used 1182 times for placeholders and labels.
- **Quaternary Text** (`#5E5E5E`): Subtle gray for very light content hierarchies, used 70 times.
- **Background Text** (`#767676`): Neutral gray for borders and dividers, used 23 times.

### Surface & Borders
- **Primary Surface** (`#FFFFFF`): White background for main content areas and cards, used 400 times.
- **Secondary Surface** (`#F3F3F3`): Off-white background for secondary surfaces and form containers, used 68 times.
- **Tertiary Surface** (`#4A4A4A`): Dark gray for footer and secondary content blocks, used 36 times.
- **Border Color** (`#767676`): Medium gray stroke for input fields and subtle dividers.

## 3. Typography Rules

### Font Family
- **Primary**: UberMove (display and headings) with fallback to `sans-serif`
- **Secondary**: UberMoveText (body, buttons, and interface text) with fallback to `sans-serif`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display / H1 | UberMove | 52px | 700 | 64px | 0 | Page hero headlines |
| Heading / H2 | UberMove | 36px | 700 | 44px | 0 | Section headings |
| Subheading / H3 (large) | UberMove | 24px | 700 | 32px | 0 | Card titles and prominent sections |
| Subheading / H3 (medium) | UberMove | 20px | 700 | 28px | 0 | Component headings |
| Label / H4 | UberMoveText | 18px | 500 | 24px | 0 | Field labels and descriptive headings |
| Body | UberMoveText | 16px | 400 | 24px | 0 | Primary body text and form input |
| Button / Label | UberMoveText | 14px | 500 | 16px | 0 | Button text and dense labels |

### Principles
- All headings use UberMove for distinctive brand presence and visual weight
- Body and UI text use UberMoveText for optimal legibility at smaller sizes
- Line height consistently exceeds font size by 20–50% for comfortable reading
- Font weights restricted to 400 (regular), 500 (medium), and 700 (bold) for consistency
- Letter spacing is uniform (0) to maintain tight, efficient layouts

## 4. Component Stylings

### Buttons

**Primary Button**
- `background-color: #000000`
- `color: #FFFFFF`
- `font-family: UberMoveText`
- `font-size: 14px`
- `font-weight: 500`
- `padding: 10px 12px`
- `height: 36px–38px` (auto-adjust based on content)
- `border-radius: 999px`
- `border: none`
- `line-height: 16px`
- **Hover state**: `background-color: #333333` (slightly lighter)
- **Active state**: `background-color: #000000` with `box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px`
- **Disabled state**: `background-color: #EEEEEE`, `color: #757575`, `opacity: 0.20`

**Secondary Button**
- `background-color: #FFFFFF`
- `color: #000000`
- `font-family: UberMoveText`
- `font-size: 14px`
- `font-weight: 500`
- `padding: 10px 12px`
- `height: 36px` (auto-adjust)
- `border-radius: 999px`
- `border: 1px solid #000000`
- `line-height: 16px`
- **Hover state**: `background-color: #F3F3F3`
- **Active state**: `background-color: #E8E8E8` with `box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 8px 0px`

**Tertiary / Ghost Button**
- `background-color: #EEEEEE`
- `color: #000000`
- `font-family: UberMoveText`
- `font-size: 14px`
- `font-weight: 500`
- `padding: 10px 12px`
- `height: auto`
- `border-radius: 999px`
- `border: none`
- `line-height: 16px`
- **Hover state**: `background-color: #E0E0E0`
- **Active state**: `background-color: #D8D8D8`

**Icon Button**
- `background-color: #000000`
- `color: #FFFFFF`
- `font-size: 16px`
- `padding: 10px`
- `height: auto` (square)
- `width: auto`
- `border-radius: 50%`
- `border: none`
- **Hover state**: `background-color: #333333`

### Links

**Primary Link**
- `color: #0000EE`
- `background-color: transparent`
- `font-family: sans-serif`
- `font-size: 16px`
- `font-weight: 400`
- `text-decoration: underline`
- **Hover state**: `color: #0000BB` (darker blue)
- **Active state**: `color: #0000AA`
- **Visited state**: `color: #551A8B` (optional, if needed)

**Navigation Link**
- `color: #FFFFFF`
- `background-color: #000000`
- `font-family: UberMoveText`
- `font-size: 14px`
- `font-weight: 500`
- `padding: 10px 12px`
- `height: 36px`
- `border-radius: 999px`
- **Hover state**: `color: #E8E8E8`

### Input Fields & Forms

**Text Input (Default)**
- `background-color: transparent`
- `color: #000000`
- `font-family: UberMoveText`
- `font-size: 16px`
- `font-weight: 400`
- `padding: 10px 14px 10px 48px` (left padding for icon)
- `height: 44px`
- `border: none`
- `border-bottom: 1px solid #767676`
- `line-height: 24px`
- **Focus state**: `border-bottom: 2px solid #0000EE`, `outline: none`
- **Placeholder text**: `color: #757575`

**Text Input (Search/Secondary)**
- `background-color: #F6F6F6`
- `color: #000000`
- `font-family: UberMoveText`
- `font-size: 16px`
- `font-weight: 400`
- `padding: 11px 33px 11px 41px` (horizontal padding for icon)
- `height: auto` (min-height: 40px)
- `width: 100%`
- `border: none`
- `border-radius: 0px`
- `line-height: 24px`
- **Focus state**: `background-color: #FFFFFF`, `border: 1px solid #0000EE`
- **Placeholder text**: `color: #757575`
- **Disabled state**: `background-color: #EEEEEE`, `color: #757575`, `opacity: 0.20`

**Date/Time Input**
- `background-color: #FFFFFF`
- `color: #000000`
- `font-family: UberMoveText`
- `font-size: 16px`
- `font-weight: 400`
- `padding: 11px 14px`
- `height: 44px`
- `border: 1px solid #D8D8D8`
- `border-radius: 0px`
- `line-height: 24px`
- **Focus state**: `border: 1px solid #0000EE`, `box-shadow: 0 0 0 2px rgba(0, 0, 238, 0.1)`

### Navigation

**Top Navigation Bar**
- `background-color: #000000`
- `height: 64px`
- `padding: 12px 0px`
- `display: flex`
- `align-items: center`
- `justify-content: space-between`
- `position: sticky`
- `top: 0`
- `z-index: 100`

**Navigation Link (in header)**
- `color: #FFFFFF`
- `font-family: UberMoveText`
- `font-size: 14px`
- `font-weight: 400`
- `padding: 8px 16px`
- **Hover state**: `color: #EEEEEE`
- **Active state**: `color: #0000EE`

**Dropdown Menu**
- `background-color: #FFFFFF`
- `border: 1px solid #D8D8D8`
- `border-radius: 0px`
- `box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 8px 0px`
- `z-index: 101`
- `min-width: 200px`

### Cards & Containers

**Card**
- `background-color: #FFFFFF`
- `border: 1px solid #D8D8D8`
- `border-radius: 0px`
- `padding: 20px 24px`
- `box-shadow: none` (optional: add subtle shadow on hover)
- **Hover state**: `box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 12px 0px`

**Surface / Section**
- `background-color: #F3F3F3`
- `padding: 32px` to `64px`
- `border-radius: 0px`
- `border: none`

**Modal Overlay**
- `background-color: rgba(0, 0, 0, 0.5)`
- `position: fixed`
- `top: 0`
- `left: 0`
- `width: 100%`
- `height: 100%`
- `z-index: 2001`

**Modal Dialog**
- `background-color: #FFFFFF`
- `border-radius: 0px`
- `padding: 24px 32px`
- `box-shadow: rgba(0, 0, 0, 0.24) 0px 8px 24px 0px`
- `z-index: 2002`
- `max-width: 500px`

## 5. Layout Principles

### Spacing System

Base unit: **8px**

Scale:
- **4px**: Tight gaps between inline elements, micro-spacing
- **8px**: Gutters, icon-text spacing, dense component spacing
- **12px**: Button padding, form field internal spacing
- **16px**: Standard margin, padding for sections
- **20px**: Comfortable spacing between related content blocks
- **24px**: Comfortable spacing, form field vertical spacing
- **28px**: Section spacing gaps
- **32px**: Standard padding for cards and containers
- **36px**: Large section padding
- **64px**: Extra-large section padding, hero spacing
- **80px**: Maximum vertical spacing between major sections

**Usage Context**:
- 4px–8px: Icons, badges, inline elements
- 12px–16px: Form fields, buttons, navigation items
- 20px–32px: Content sections, card spacing
- 36px–80px: Major layout sections, hero blocks

### Grid & Container

- **Max width**: 1440px (standard desktop viewport)
- **Column strategy**: Flexible 12-column grid, adapts to 6-column on tablet, 1-column on mobile
- **Gutter width**: 16px (between columns)
- **Container padding**: 20px on mobile, 32px on tablet, 40px on desktop
- **Section patterns**: Full-width hero sections, max-width content sections, asymmetric two-column layouts

### Whitespace Philosophy

Whitespace is used strategically to establish hierarchy and reduce cognitive load. Large generous margins between sections (36px–80px) create clear visual breathing room. Dense form layouts employ tighter spacing (12px–16px) to maintain focus. Asymmetric layouts pair dense information with generous whitespace on opposing sides, guiding user attention.

### Border Radius Scale

- **0px**: Default for inputs, cards, modals, and most UI elements (sharp, utilitarian aesthetic)
- **8px**: Subtle rounding for secondary surfaces, optional card treatments
- **50%**: Perfect circles for icon buttons and avatars
- **999px**: Pills and small buttons (max-width pill shape)

### Border Widths

- **1px**: Standard stroke weight for input fields, borders, and dividers (most common)
- **2px**: Focus state borders and active indicators
- **None**: Most cards and surfaces (borderless, relying on shadow or background)

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Base / Ground | No shadow, flat | Surfaces, cards, neutral backgrounds |
| Hover / Raised | `rgba(0, 0, 0, 0.08) 0px 2px 8px 0px` | Button hover, card hover, subtle lift |
| Floating / Elevated | `rgba(0, 0, 0, 0.16) 0px 2px 8px 0px` | Active buttons, dropdowns, tooltips |
| Modal / Dialog | `rgba(0, 0, 0, 0.24) 0px 8px 24px 0px` | Modal overlays, important dialogs |

**Shadow Philosophy**: Shadows are minimal and controlled, reinforcing the utilitarian aesthetic. Shadows appear primarily on interactive states (hover, focus) and elevated UI layers (dropdowns, modals). The system avoids stacked shadows, maintaining clarity. All shadow values use black with controlled opacity for consistency across light backgrounds.

### Opacity Levels

- **100% (1.0)**: Full opacity for primary content and interactive elements
- **80% (0.80)**: Slightly transparent for secondary content or hover states
- **50% (0.50)**: Moderate transparency for disabled content or overlays
- **20% (0.20)**: Very light transparency for disabled states, hints, or watermarks

### Z-index / Layering

- **Base**: `z-index: 1`
- **Elevated**: `z-index: 2`
- **Sticky / Fixed**: `z-index: 100`
- **Dropdown / Popover**: `z-index: 101`
- **Modal Overlay**: `z-index: 2001`
- **Modal Dialog**: `z-index: 2002`
- **Toast / Notification**: `z-index: 2003`

## 7. Do's and Don'ts

### Do

- Use pure black (`#000000`) and pure white (`#FFFFFF`) as the primary foundation; they provide maximum contrast and accessibility
- Apply the electric blue (`#0000EE`) accent sparingly for primary CTAs, links, and focus states to maintain visual impact
- Keep button padding consistent at `10px 12px` with pill-shaped border-radius for a cohesive, recognizable button style
- Use UberMove for display-size headings (20px and above) to establish brand presence; use UberMoveText for body and UI text for legibility
- Maintain 20px–32px padding in cards and containers; 36px–64px between major layout sections
- Set input field height to at least 44px to meet touch target minimums across all devices
- Use 1px borders for inputs and subtle dividers; 2px for focus states to signal interactivity
- Group related buttons horizontally; separate primary actions from secondary actions with spacing or background color
- Enable focus states with clear visual indicators (2px colored border or ring) for keyboard navigation
- Test all color combinations for WCAG AA contrast compliance (minimum 4.5:1 for text, 3:1 for UI components)

### Don't

- Do not override the 999px border-radius on primary and secondary buttons; it's a core affordance signaling interactivity
- Do not use color alone to convey meaning; pair color with text, icons, or visual patterns
- Do not reduce button height below 36px; Uber's system ensures touch-friendly dimensions
- Do not mix UberMove and UberMoveText arbitrarily; maintain strict hierarchy (UberMove for headings 20px+, UberMoveText for body/UI)
- Do not add more than one box-shadow per element; the system uses single, controlled shadows for clarity
- Do not use custom hex colors outside the defined palette; the 9-color system covers all UI needs
- Do not set line-height below 120% of font size; maintain readability, especially for body text
- Do not apply padding smaller than 8px inside buttons or form elements; maintain visual breathing room
- Do not use opacity to make text unreadable; if content is secondary, reduce weight or use a lighter gray instead
- Do not nest modals or create z-index chains beyond 2003; keep layering simple and predictable

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–767px | Single-column layout, 20px padding, 14px base font, stacked navigation |
| Tablet | 768px–1023px | Two-column layout where applicable, 24px padding, 16px base font, simplified navigation |
| Desktop | 1024px–1439px | Full 12-column grid, 32px padding, 16px base font, full navigation menu |
| Large Desktop | 1440px+ | Max-width container (1440px) centered, 40px padding, generous whitespace |

### Touch Targets

- **Minimum size**: 44px × 44px for all interactive elements (buttons, inputs, links in touch contexts)
- **Recommended size**: 48px × 48px for frequently tapped buttons
- **Spacing between targets**: Minimum 8px gap to prevent mis-taps
- **Button padding**: Scale up from 10px 12px on desktop to 12px 16px on mobile if needed
- **Link tap areas**: Extend clickable region beyond visible text (add 4px–8px padding around link text)

### Collapsing Strategy

- **Hero section**: Reduce padding from 64px to 40px on tablet, 20px on mobile; font sizes scale down one step (H1 52px → 36px on tablet, 28px on mobile)
- **Two-column layouts**: Stack to single column at tablet breakpoint; maintain full-width flow on mobile
- **Navigation**: Collapse top navigation to hamburger menu at 768px breakpoint; show inline links on desktop
- **Form fields**: Full width on mobile and tablet; constrain to 400px max-width on desktop for readability
- **Cards**: Full width on mobile with 20px margin; two-column grid on tablet (400px per card); three-column on desktop
- **Button groups**: Stack vertically on mobile (full width each), display horizontally on tablet and desktop
- **Spacing**: Reduce all margins and padding by one step at each breakpoint (e.g., 24px → 20px → 16px)

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA / Link**: Electric Blue (`#0000EE`)
- **Primary Button Background**: Black (`#000000`)
- **Secondary Button Background**: White (`#FFFFFF`)
- **Tertiary Button Background**: Light Gray (`#EEEEEE`)
- **Primary Text**: Black (`#000000`)
- **Secondary Text**: Dark Gray (`#333333`)
- **Tertiary Text / Placeholder**: Medium Gray (`#757575`)
- **Background Surface**: White (`#FFFFFF`)
- **Secondary Surface**: Off-White (`#F3F3F3`)
- **Border / Divider**: Gray (`#767676`)

### Iteration Guide

1. **Always start with black and white**: The system's foundation is pure black (`#000000`) for dominance and pure white (`#FFFFFF`) for contrast. Use these for 90% of UI.

2. **Reserve electric blue for primary interactivity**: Apply `#0000EE` only to primary CTAs, links, and focus indicators. Do not use it for secondary actions or passive content.

3. **Buttons are pill-shaped**: Use `border-radius: 999px` for all primary and secondary buttons. Icon buttons use `border-radius: 50%`. This is non-negotiable.

4. **Button padding is 10px 12px**: Maintain consistent internal padding. Button height auto-adjusts to 36px–38px; do not force smaller heights.

5. **Input fields are 44px tall minimum**: Ensure all form inputs meet touch-target requirements. Use 1px bottom borders on light inputs, full borders on darker surfaces.

6. **Typography uses two fonts**: UberMove (headings 20px+, weights 700), UberMoveText (body/UI, weights 400–500). No other fonts or weights.

7. **Spacing follows 8px multiples**: All margins, padding, and gaps are multiples of 8px (4px, 8px, 12px, 16px, 20px, 24px, 28px, 32px, 36px, 64px, 80px).

8. **Shadows are subtle and rare**: Use only `rgba(0, 0, 0, 0.16) 0px 2px 8px 0px` for floated elements and `rgba(0, 0, 0, 0.24) 0px 8px 24px 0px` for modals. Avoid layered or excessive shadows.

9. **Focus states require visible indicators**: All interactive elements need a focus state with `border: 2px solid #0000EE` or `outline: 2px solid #0000EE` with 2px offset.

10. **Responsive stacking is mandatory**: At 768px and below, collapse two-column layouts to single column; stack form fields full-width; collapse navigation to hamburger menu. Reduce padding by one step at each breakpoint.