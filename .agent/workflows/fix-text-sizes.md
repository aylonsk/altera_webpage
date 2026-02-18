---
description: Audit and fix text sizes across the Altera webpage for readability and visual hierarchy
---

# Graphic Designer Text Size Audit

You are a graphic designer agent auditing a dark-themed landing page (`index.html`) for text size issues. Your goal is to ensure every piece of text is appropriately sized, visible, and follows a consistent hierarchy.

## Design System

**Background:** `zinc-950` (near-black). All text must have sufficient contrast.

### Font Size Hierarchy (Tailwind classes)

| Tier | Class | Size | When to Use |
|------|-------|------|-------------|
| Display | `text-5xl` / `text-6xl` | 48–60px | Hero headline only |
| Section Title | `text-3xl` / `text-4xl` | 30–36px | Section `<h2>` headers |
| Card Title | `text-xl` / `text-2xl` | 20–24px | Card headers, person names, milestone titles |
| Sub-header | `text-lg` | 18px | Key feature labels, prominent sub-labels |
| Body | `text-base` | 16px | Advisory bios, main readable paragraphs |
| Description | `text-sm` | 14px | Card descriptions, timeline body text, section sub-labels |
| Label | `text-xs` | 12px | **Minimum floor.** Tags, dates, role titles, captions, footer, tech badges |

> [!CAUTION]
> **Nothing should be smaller than `text-xs` (12px).** If you find `text-[8px]`, `text-[9px]`, `text-[10px]`, `text-[11px]`, `text-tag`, `text-nano`, or `text-micro` in the HTML markup, replace it with `text-xs` or larger.

### Color Hierarchy (text on dark background)

| Color | When to Use |
|-------|-------------|
| `text-white` | Primary headers, hero text, bold emphasized inline text |
| `text-zinc-100` / `text-zinc-200` | Card titles, person names, `<strong>` highlights |
| `text-zinc-300` | Secondary headers, institution names |
| `text-zinc-400` | Body text, descriptions, advisory bios |
| `text-zinc-500` | Labels, captions, supplementary info |
| `text-royal-blue` | Accent labels (role titles, section toppers, dates, links) |

> [!IMPORTANT]
> **Never use `text-zinc-600` or darker for visible text.** It's nearly invisible on `zinc-950`. Replace with `text-zinc-500` minimum.

### Brand Color
- Primary accent: `text-royal-blue` (`#476ee3`) — use for links, role titles, section toppers, date badges.

## Audit Process

1. **Open** the page in a browser at full width and scroll through every section
2. **For each section**, check every text element against the hierarchy above
3. **Flag** anything that:
   - Uses a font size smaller than `text-xs` (12px)
   - Uses `text-zinc-600` or darker on the dark background
   - Uses hardcoded pixel sizes like `text-[Npx]` instead of Tailwind classes
   - Uses custom size classes (`text-tag`, `text-nano`, `text-micro`) in HTML markup
   - Breaks visual hierarchy (e.g., a label larger than its parent header)
   - Is hard to read or requires squinting

4. **Fix** flagged items by replacing with the appropriate tier from the hierarchy

## Sections to Audit (in order)

1. **Navigation bar** — logo text, nav links
2. **Hero section** — headline, subheadline, partner logos and labels
3. **Problem statement** — stat numbers, stat descriptions, source citation
4. **Solution section** — "How It Works" header, comparison card labels
5. **Bento cards** — toppers, headers, descriptions, tech tags, mastery scores
6. **BKT Engine** — equation labels, faculty endorsement attribution
7. **Interactive graph** — feature descriptions, legend labels
8. **Timeline** — date badges, milestone titles, body text, attribution
9. **Team bios** — names, role titles, university, degree info, bio text
10. **Advisory board** — section header, description, advisor names, titles, specialties, bios
11. **Footer** — copyright, nav links

## Rules

- **Lean and consistent:** Use only standard Tailwind classes. No arbitrary pixel values.
- **One scale:** Everything maps to the hierarchy above. No exceptions.
- **Bright enough to read:** If you have to squint, it's too dim. Bump the color up one tier.
- **Hierarchy matters:** Headers > sub-headers > body > labels. Never invert this.
