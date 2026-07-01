---
name: clean-ui
description: >-
  Builds sleek, Nike-inspired clothing brand UI with consistent typography,
  spacing, and components. Use when designing or implementing pages, layouts,
  product listings, navigation, product cards, filters, or any frontend UI for
  this clothing brand site.
---

# Clean UI — Clothing Brand Design System

Design reference: Nike.com — minimal, product-first, grid-aligned, black/white/gray with photography as the only strong color.

## Core principles

1. **Product is the hero** — UI recedes; photography and whitespace carry the page.
2. **Restraint** — No decorative blobs, gradients, glassmorphism, or playful display fonts.
3. **Grid discipline** — Strict alignment; predictable spacing; no overlapping "scene" layouts.
4. **Functional e-commerce** — Every page has a clear job: browse, filter, compare, buy.
5. **Consistency** — Reuse tokens and components; never one-off styling on a single page.

## Do / Don't

| Do | Don't |
|----|-------|
| White, black, neutral grays | Warm beige palettes, accent blobs, blur orbs |
| Single sans-serif family | Fredoka, Nunito, or rounded display fonts |
| 3-column product grids on PLP | Asymmetric card scatter, overlapping text |
| Subtle hover (opacity, underline) | Bouncy springs, staggered hero animations |
| Pill search bar, thin icons | Heavy shadows, thick borders, pill-everything |
| `max-w-[1440px]` full-width layouts | Narrow `max-w-5xl` marketing-style containers |

---

## Design tokens

Update `frontend/src/index.css` to these values. All new UI must use CSS variables / Tailwind semantic tokens — never hardcode hex in components.

### Typography

```css
--font-sans: "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif;
--font-display: var(--font-sans); /* no separate display font */
```

- **Remove** Fredoka and Nunito from the project for brand UI.
- Hierarchy via **weight and size only**, not color or font family.
- Body: `text-sm` (14px) or `text-base` (16px), `font-normal`.
- Headings: `font-medium` or `font-bold`, `tracking-tight`.
- Labels/tags: `text-xs uppercase tracking-wide` sparingly (e.g. "Just In").
- Line height: `leading-tight` for titles, `leading-normal` for body.

### Color palette

```css
:root {
  --radius: 0.25rem; /* 4px — sharp, not rounded shadcn default */

  --background: oklch(1 0 0);           /* #FFFFFF */
  --foreground: oklch(0.145 0 0);       /* near-black #111 */
  --card: oklch(0.97 0 0);              /* #F5F5F5 image bg */
  --card-foreground: oklch(0.145 0 0);
  --muted: oklch(0.96 0 0);             /* #F5F5F5 */
  --muted-foreground: oklch(0.45 0 0);  /* #707072 */
  --border: oklch(0.9 0 0);             /* #E5E5E5 */
  --primary: oklch(0.145 0 0);          /* black CTAs */
  --primary-foreground: oklch(1 0 0);
  --accent: oklch(0.62 0.19 35);        /* orange-red badge only */
  --accent-foreground: oklch(1 0 0);
  --ring: oklch(0.145 0 0);
}
```

- **No dark mode** unless explicitly requested.
- Use `text-foreground` for titles/prices; `text-muted-foreground` for subtitles.
- `accent` is **only** for status badges ("Just In", "Sale"), not buttons or links.

### Spacing scale

| Use | Class |
|-----|-------|
| Page horizontal padding | `px-6 lg:px-12` |
| Section vertical gap | `py-8` or `py-12` |
| Card internal padding | `pt-3` below image only |
| Grid gap | `gap-x-4 gap-y-8` (PLP) |
| Nav height | `h-16` main bar, `h-10` utility bar |

### Layout width

```tsx
// App shell — full width, not max-w-5xl
<div className="mx-auto w-full max-w-[1440px]">
```

---

## Page structure

Every page follows this shell:

```
┌─────────────────────────────────────┐
│ Utility bar (Find Store, Help, etc) │  h-10, text-xs, right-aligned
├─────────────────────────────────────┤
│ Main nav (logo | links | search)    │  h-16, border-b border-border
├─────────────────────────────────────┤
│ Promo bar (optional)                │  h-9, bg-muted, centered text-xs
├─────────────────────────────────────┤
│ Page content                        │
└─────────────────────────────────────┘
```

### Required layout components

Create under `frontend/src/components/layout/`:

| Component | Responsibility |
|-----------|----------------|
| `SiteHeader` | Utility bar + main nav + promo strip |
| `SiteFooter` | Minimal links, legal, region |
| `AppLayout` | Header + `<main>` + Footer; **no** decorative background elements |

`AppLayout` main:

```tsx
<main className="min-h-[calc(100dvh-theme(spacing.16))]">
  <Outlet />
</main>
```

---

## Navigation

### Utility bar
- `text-xs text-muted-foreground`
- Links: Find a Store, Help, Join Us, Sign In
- Right-aligned, `gap-6`

### Main nav
- Logo left (`h-6` or `h-8` wordmark/svg)
- Category links centered: `text-base font-medium`, hover `text-muted-foreground`
- Right: rounded-full search (`bg-muted rounded-full px-4 py-2`), heart icon, bag icon
- Icons: `lucide-react`, `size-5`, `strokeWidth={1.5}`

### Promo bar
- Full width `bg-muted text-xs text-center py-2`
- Single line; optional chevron controls

---

## Product listing page (PLP)

```
┌──────────────────────────────────────────────────┐
│ Clothing (2686)          [Hide Filters] [Sort ▾] │
├────────────┬─────────────────────────────────────┤
│ Sidebar    │  ┌─────┐ ┌─────┐ ┌─────┐           │
│ 240px      │  │     │ │     │ │     │           │
│ categories │  └─────┘ └─────┘ └─────┘           │
│ + filters  │  ┌─────┐ ┌─────┐ ┌─────┐           │
└────────────┴─────────────────────────────────────┘
```

### Page header row

```tsx
<div className="flex items-center justify-between px-6 py-6 lg:px-12">
  <h1 className="text-2xl font-medium">
    Clothing <span className="text-muted-foreground">(2686)</span>
  </h1>
  <div className="flex gap-4 text-sm">
    <button>Hide Filters</button>
    <button>Sort By</button>
  </div>
</div>
```

### Sidebar (`FilterSidebar`)
- Fixed width `w-60 shrink-0`, `border-r border-border`
- Category list: plain text links, `text-sm py-2`, active = `font-medium`
- Collapsible sections with `ChevronDown` size-4
- No card chrome or backgrounds

### Product grid

```tsx
<div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 px-6 lg:px-12">
```

2 columns on mobile, 3 on tablet+. Never 4+ columns on desktop.

---

## Product card

Component: `frontend/src/components/product/product-card.tsx`

```tsx
<article className="group cursor-pointer">
  {/* Image — square aspect, neutral bg */}
  <div className="aspect-square bg-card overflow-hidden">
    <img className="h-full w-full object-cover object-center transition-opacity group-hover:opacity-85" />
  </div>

  {/* Badge — optional, only for status */}
  <p className="mt-3 text-sm font-medium text-accent">Just In</p>

  {/* Title */}
  <h3 className="mt-1 text-base font-medium leading-tight">Jordan Brooklyn</h3>

  {/* Subtitle */}
  <p className="mt-0.5 text-sm text-muted-foreground">Men's Long-Sleeve Goalie Top</p>

  {/* Price */}
  <p className="mt-2 text-base font-medium">RM 319</p>
</article>
```

Rules:
- No card border, shadow, or padding wrapper
- No price or badges overlaid on the image
- Hover: image opacity only — no scale transforms
- Same structure on every card, every page

---

## Buttons & interactive elements

| Variant | Use | Shape |
|---------|-----|-------|
| `default` | Primary CTA | `rounded-full h-12 px-6` |
| `outline` | Secondary CTA | `rounded-full border-foreground` |
| `ghost` | Nav, filter controls | `rounded-sm hover:bg-muted` |
| `link` | Inline text actions | `p-0 h-auto underline-offset-4` |

- No `shadow-xs` on buttons
- Sort By / Hide Filters: plain `<button className="text-sm">` — no variant chrome

---

## Forms & filters

- Checkboxes: Radix, `border-border`, no heavy fill
- Search input: `bg-muted rounded-full border-0 h-10 pl-10`
- Focus ring: `ring-1 ring-foreground` — thin, not thick shadcn default
- Select/sort dropdowns: `border-b` style, not floating card panels

---

## Motion

- **Default: no animation** on PLP and catalog pages
- Marketing hero only: simple fade-in, `duration-300`, no bounce or spring
- Prefer CSS `transition-opacity` / `transition-colors` over Framer Motion for UI chrome
- Never stagger children on product grids

---

## Imagery

- Product photos: consistent `bg-card` (light gray) background
- `object-cover`, model centered, `aspect-square` on PLP always
- Hero/editorial: full-bleed allowed; no UI elements overlapping product grids

---

## File conventions

```
frontend/src/
├── components/
│   ├── layout/
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── app-layout.tsx
│   ├── product/
│   │   ├── product-card.tsx
│   │   ├── product-grid.tsx
│   │   └── filter-sidebar.tsx
│   └── ui/          # shadcn primitives — restyle, don't replace
├── pages/
│   ├── home-page.tsx
│   └── catalog-page.tsx
```

- Pages compose layout + domain components; no one-off styles in pages.
- Use `cn()` from `@/lib/utils` for all conditional classes.
- Icons: `lucide-react` only, `strokeWidth={1.5}`.

---

## Pre-ship checklist

Before finishing any UI task, verify:

- [ ] Colors come from CSS variables / semantic Tailwind tokens only
- [ ] No Fredoka, Nunito, or decorative background blur elements
- [ ] Single sans-serif font stack; hierarchy via weight and size only
- [ ] Product cards match the exact 4-line structure (badge → title → subtitle → price)
- [ ] PLP uses sidebar + 3-column grid at `md+`
- [ ] Layout is `max-w-[1440px]` full-width, not narrow centered
- [ ] Hover states are subtle (opacity/underline), not scale or bounce
- [ ] `accent` color used only for status badges
- [ ] Header matches utility bar + main nav + optional promo strip pattern
