---
inclusion: auto
---

# Inferdat Design System

A practical reference for building UIs across all Inferdat products. Extracted from the marketing site's established patterns, adapted for general application development.

---

## When to Use What

| Context                                 | Animation Level                                                                     | Visual Complexity                                                          |
| --------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Marketing pages (homepage, landing)     | Full: parallax, scroll-hijacking, orbital rings, typing effects, auto-cycling demos | Maximum: particle canvas, gradient orbs, animated borders, floating badges |
| Product pages (dashboards, tools, apps) | Subtle: entrance fades, hover states, smooth transitions                            | Clean: consistent spacing, clear hierarchy, functional layouts             |
| Forms & workflows                       | Minimal: focus rings, validation feedback, loading states                           | Functional: clear labels, logical grouping, obvious actions                |

Most UIs you build will be product/app UIs. Keep them clean, polished, and premium — but skip the cinematic scroll experiences and particle networks. Those are marketing-only.

---

## Color System

### Brand Colors (Tailwind tokens)

```
purple-primary: #7C3AED    — Primary actions, links, active states
purple-light:   #A78BFA    — Hover accents, secondary highlights
purple-dark:    #5B21B6    — Pressed states, emphasis

pink-primary:   #EC4899    — Gradient endpoints, accent highlights
pink-light:     #F472B6    — Secondary accents
pink-dark:      #BE185D    — Pressed states
```

### Neutral Palette

```
background-primary:   #FAFAFA    — Page backgrounds
background-secondary: #FFFFFF    — Cards, panels, elevated surfaces
background-tertiary:  #F3F4F6    — Subtle section backgrounds, input fills

text-primary:    #111827    — Headlines, primary content
text-secondary:  #4B5563    — Body text, descriptions
text-tertiary:   #9CA3AF    — Captions, placeholders, disabled text

border-DEFAULT:  #E5E7EB    — Card borders, dividers
border-hover:    #D1D5DB    — Hover state borders
```

### Usage Rules

- Primary gradient: `from-purple-primary to-pink-primary` — CTAs, active nav, key emphasis
- Gradient text: `.gradient-text` utility — hero headlines, key numbers, brand moments
- Subtle backgrounds: radial gradients at 5-15% opacity for depth (marketing only)
- Dark sections: `from-[#0a0a12] to-[#12121f]` with gradient fade transitions at edges
- Never use raw hex in components — always use the Tailwind tokens
- For status colors: emerald for success, red for error, amber for warning — standard Tailwind shades

---

## Typography

### Scale (defined in tailwind.config.ts)

```
display:    72px / 0.95 / -0.035em / 600  — Marketing hero headlines only
display-sm: 56px / 0.95 / -0.03em / 600   — Secondary marketing headlines
h1:         48px / 1.0  / -0.025em / 600   — Page titles
h2:         36px / 1.1  / -0.02em  / 600   — Section titles
h3:         28px / 1.2  / -0.015em / 600   — Subsection titles
h4:         22px / 1.3  / -0.01em  / 600   — Card titles, panel headers
h5:         18px / 1.4  / -0.005em / 600   — Small headers
body-lg:    18px / 1.7  / normal   / 400   — Lead paragraphs
body:       16px / 1.65 / normal   / 400   — Default body text
body-sm:    14px / 1.6  / normal   / 400   — Secondary text, descriptions
label:      13px / 1.4  / -0.01em  / 500   — Form labels, metadata
caption:    12px / 1.5  / normal   / 500   — Timestamps, fine print
```

### CSS Utilities (defined in globals.css)

```css
.heading-display  — clamp(40px, 8vw, 72px), marketing heroes
.heading-1        — clamp(36px, 6vw, 56px), page titles
.heading-2        — clamp(28px, 4vw, 40px), section titles
.heading-3        — clamp(22px, 3vw, 28px), subsection titles
.heading-4        — clamp(18px, 2vw, 22px), card/panel titles
.body-large       — 17px, text-text-secondary
.body-default     — 15px, text-text-secondary
.label-text       — 13px, text-purple-primary, font-medium
.gradient-text    — purple-to-pink gradient text
```

### Rules

- Headlines always use negative letter-spacing (tighter = more premium)
- Body text uses relaxed line-height (1.6-1.7) for readability
- Use `clamp()` for responsive headlines — never fixed pixel sizes for anything h2 and above
- Font stack: Inter (sans), JetBrains Mono (code)
- Labels and badges: 11-13px, font-semibold, sometimes uppercase with tracking-wider

---

## Spacing & Layout

### Container Widths

```
max-w-content:         min(90vw, 1800px)   — Full-width sections
max-w-content-narrow:  min(85vw, 1400px)   — Focused content
```

### Section Padding

```
Marketing sections:  py-24 to py-32 (96-128px)
App sections:        py-12 to py-16 (48-64px)
Card padding:        p-6 to p-10 depending on content density
```

### Responsive Padding

```
Horizontal: px-6 lg:px-16
Gaps:       gap-8 lg:gap-12
```

### Grid Patterns

```
Full layout:     grid-cols-1 lg:grid-cols-12
Two column:      grid-cols-1 lg:grid-cols-2
Asymmetric:      lg:col-span-5 + lg:col-span-7 (prefer over 6+6)
Cards:           grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

### Fixed Header

- Header height: h-20 (80px)
- All pages need `pt-20` on the first section to clear the fixed header
- Hero sections: `min-h-screen pt-20 flex items-center justify-center`

---

## Component Patterns

### Cards

```
Standard card:
- bg-white (or bg-background-secondary)
- border border-border
- rounded-2xl (16px) to rounded-[32px]
- shadow-lg on hover
- hover:border-purple-primary/30
- hover:-translate-y-1 (subtle lift)
- transition-all duration-300

Dark card:
- bg-white/[0.03] backdrop-blur-sm
- border border-white/10
- hover:border-white/20
- hover:bg-white/[0.05]
```

### Buttons (use the Button component from @/components/ui/Button)

```
Primary:   gradient-primary text-white rounded-full shadow-purple
           hover:-translate-y-0.5 hover:shadow-purple-lg
Secondary: bg-transparent border border-border text-text-primary rounded-full
           hover:border-purple-primary hover:text-purple-primary
Ghost:     bg-transparent text-text-secondary
           hover:text-purple-primary hover:bg-purple-primary/5

Sizes: sm (px-5 py-2.5), md (px-8 py-4), lg (px-10 py-5)
All buttons are rounded-full (pill shape)
```

### Badges / Pills

```
Brand badge:
- inline-flex items-center gap-2
- px-5 py-2.5
- text-[13px] font-semibold text-purple-primary
- bg-purple-primary/10 (or bg-white/80 backdrop-blur-sm)
- border border-purple-primary/20
- rounded-full

Often include a pulsing dot: w-2 h-2 rounded-full bg-purple-primary animate-pulse
```

### Form Inputs

```
- h-[52px] for single-line inputs
- px-4 bg-white border border-border rounded-[10px]
- placeholder:text-text-tertiary
- Focus: border-purple-primary ring-2 ring-purple-primary/10
- Labels: text-sm font-medium text-text-primary mb-2
- Required indicator: text-red-500 ml-1 "*"
```

### Icon Containers

```
Small:  w-8 h-8 rounded-lg
Medium: w-10 h-10 rounded-xl (or w-11 h-11)
Large:  w-12 h-12 rounded-xl

Fill with gradient: bg-gradient-to-br from-purple-primary to-pink-primary
Fill with tint:     bg-purple-primary/10 (icon in text-purple-primary)
Fill with color:    bg-gradient-to-br ${gradient} (per-item unique gradients)
```

---

## Animation (Framer Motion)

### For Product/App UIs — Keep It Subtle

```tsx
// Entrance animation (use AnimatedSection component)
<AnimatedSection delay={0.1}>
  <YourContent />
</AnimatedSection>

// Or manually:
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
```

### Standard Easing

```
Default ease: [0.16, 1, 0.3, 1]  — ease-out-expo, smooth deceleration
Spring:       type: 'spring', stiffness: 400, damping: 30
```

### Hover States (required on all interactive elements)

```
Buttons:  hover:-translate-y-0.5, shadow increase
Cards:    hover:-translate-y-1, shadow-xl, border color shift
Links:    color transition to purple-primary
Icons:    whileHover={{ scale: 1.05 }} or scale: 1.1
```

### Stagger Pattern (use StaggerContainer + StaggerItem)

```tsx
<StaggerContainer staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <Card {...item} />
    </StaggerItem>
  ))}
</StaggerContainer>
```

### Content Transitions (tabs, panels)

```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={activeTab}
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
  >
    {content}
  </motion.div>
</AnimatePresence>
```

### Marketing-Only Animations (do NOT use in product UIs)

- Orbital rings, particle canvas (GlobalCanvas)
- Scroll-hijacking / sticky scroll experiences
- Typing animations, auto-cycling demos
- Floating gradient orbs, animated gradient borders
- Parallax with useScroll + useTransform
- Modular assembly SVG animations

### Reduced Motion

Always respect `prefers-reduced-motion`. The global CSS already handles this:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Dark Sections

Used for contrast and emphasis (Programs Preview, CTA sections).

```
Background:     bg-gradient-to-b from-[#0a0a12] via-[#0f0f1a] to-[#0a0a12]
Text:           text-white, text-white/70, text-white/50, text-white/40
Borders:        border-white/10, hover:border-white/20
Cards:          bg-white/[0.03] backdrop-blur-sm border border-white/10
Grid overlay:   opacity-[0.03], 48px grid lines
Gradient orbs:  purple-primary/10 and pink-primary/10, blur-[100px]

Transitions from light:
- Top:    h-32 bg-gradient-to-b from-white via-white/50 to-transparent
- Bottom: h-32 bg-gradient-to-t from-white via-white/50 to-transparent
```

---

## Responsive Design

### Breakpoints

```
Mobile:    < 640px  (default)
Tablet:    640px    (sm)
Desktop:   1024px   (lg)
Large:     1400px   (2xl)
```

### Patterns

```
Direction:    flex-col lg:flex-row
Grid:         grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Visibility:   hidden lg:block (desktop-only decorative elements)
Padding:      px-6 lg:px-16
Typography:   Always use clamp() for h2+ headlines
Touch:        Minimum 44x44px tap targets
```

### Mobile Simplification

- Single column layouts
- Simplified or hidden decorative elements
- Reduced animation complexity
- Vertical tabs/selectors instead of horizontal

---

## Content Architecture

All user-facing text lives in `/src/content/*.ts` files. Components import from these.

```typescript
// content/page-name.ts
export const pageContent = {
  section: {
    title: 'string',
    subtitle: 'string',
    items: [{ id, title, description, icon, ... }],
    cta: { text: 'string', href: 'string' }
  }
};

// Component
import { pageContent } from '@/content/page-name';
```

Rules:

- No hardcoded strings in components
- Content structured for future CMS migration
- Icons referenced by string name in content, mapped in components
- All content is typed with TypeScript interfaces

---

## Import Conventions

```typescript
import { ComponentName } from "@/components/feature/ComponentName";
import { pageContent } from "@/content/page-name";
import { cn } from "@/lib/utils";
```

- Path alias: `@/*` → `./src/*`
- One component per file, named after the component
- Page sections: `[Page][Section].tsx` (e.g., `ABIHero.tsx`, `ContactForm.tsx`)
- `'use client'` directive on any component with interactivity, state, or Framer Motion

---

## Key Utilities

```typescript
// Class merging (clsx + tailwind-merge)
import { cn } from "@/lib/utils";
cn("base-class", condition && "conditional-class", className);

// Icons
import { IconName } from "lucide-react";
// Always use lucide-react, never other icon libraries
```

---

## Quality Checklist

Before shipping any UI:

- [ ] Typography follows the scale (no arbitrary font sizes)
- [ ] Colors use Tailwind tokens (no raw hex)
- [ ] All interactive elements have hover states
- [ ] Entrance animations on scroll (at minimum, opacity + y fade)
- [ ] Responsive across mobile → desktop
- [ ] Content comes from content files, not hardcoded
- [ ] `prefers-reduced-motion` respected
- [ ] Touch targets ≥ 44px on mobile
- [ ] Adequate whitespace — don't crowd elements
