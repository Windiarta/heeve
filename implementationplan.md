# Implementation Plan

## Goal

React showcase gallery dengan Rsbuild + Bun. Tiga storefront demo. Konten per showcase dalam `config.json`. Light/dark theme. Layout React Bits lokal.

## Structure

```text
heeve/
├── implementationplan.md
├── package.json
├── rsbuild.config.ts
├── tsconfig.json
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── app.css
│   ├── types/showcase.ts
│   ├── hooks/useTheme.ts
│   ├── hooks/useRoute.ts
│   ├── components/
│   │   ├── AppHeader.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── ProductGrid.tsx
│   │   ├── react-bits/Aurora.tsx
│   │   ├── react-bits/BlurText.tsx
│   │   ├── react-bits/AnimatedContent.tsx
│   │   ├── react-bits/ChromaGrid.tsx
│   │   └── react-bits/SpotlightCard.tsx
│   ├── pages/
│   │   ├── GalleryPage.tsx
│   │   ├── AboutPage.tsx
│   │   └── ProductPage.tsx
│   └── showcases/
│       ├── registry.ts
│       ├── example1/{Example1.tsx,example1.css,config.json,DESIGN.md}
│       ├── example2/{Example2.tsx,example2.css,config.json,DESIGN.md}
│       └── example3/{Example3.tsx,example3.css,config.json,DESIGN.md}
└── tests/showcase-config.test.ts
```

## Implementation

1. Bootstrap Bun, React, TypeScript, Rsbuild.
2. Move existing design documents into showcase folders.
3. Add typed per-showcase JSON config.
4. Add native History API routing for `/`, `/about`, `/showcase/:slug`, and `/showcase/:slug/product/:number`.
5. Add global theme state with `localStorage` and system preference fallback.
6. Add local React Bits-style layouts: `AppHeader` navigation, `Aurora`, `BlurText`, `AnimatedContent`, `ChromaGrid`, `SpotlightCard`. `CardNav` is not a literal component; header provides its current navigation behavior.
7. Build gallery page with animated hero and three showcase cards.
8. Build three distinct storefront pages from each config. Shared `ProductGrid` provides category filtering, image fallback, stock status, product detail navigation, price, variant, unit, and description:
   - Example 1: Spotify-inspired music storefront.
   - Example 2: Netlify-inspired digital template store.
   - Example 3: Stripe-inspired commerce toolkit store.
9. Support responsive mobile-first layout, keyboard focus, semantic landmarks, reduced motion.
10. Add one Bun runtime config validation test.
11. Validate with `bun install`, `bun run typecheck`, `bun test`, `bun run build`.

## Acceptance criteria

- Bun starts Rsbuild dev server.
- Gallery displays all three showcases.
- Direct showcase routes work.
- Product detail routes work.
- About route works.
- Browser back/forward works.
- Each showcase owns one TSX, CSS, config JSON, and design document.
- Global components live under `src/components`.
- Layout uses local React Bits-style components.
- Light/dark theme persists.
- Showcase and product content comes from per-showcase config.
- Optional company/contact/social fields exist in each config.
- Product `hide` and `stockOut` flags work.
- Mobile layout has no intentional horizontal overflow.
- Reduced motion disables decorative animation.
- Typecheck, tests, and production build pass.

## Known gaps

- `CardNav` is represented by the simpler `AppHeader`; add a literal expandable card navigation only if mobile navigation needs richer interaction.
- Theme toggle is global; per-showcase `theme.light/dark` tokens currently serve config data, while global CSS owns rendered tokens.
- Product detail `Hubungi penjual` is intentionally non-functional because contact/checkout flow is not specified yet.

## Deliberate scope

No React Router, backend, CMS, upload, real cart, checkout, or external image dependency. Add only when this becomes a transactional product rather than a visual showcase.
