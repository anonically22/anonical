# anonically22 – Design System & Implementation Spec

---

## 🎯 AESTHETIC DIRECTION

**Vibe:** Industrial Lab / Hacker Workspace  
**Feel:** Raw but refined, technical but readable, high contrast, organized chaos  
**Opposite of:** Polished, corporate, resume-y  
**Key:** Controlled intensity, not clutter

---

## 🎨 COLOR SYSTEM

### Primary Palette

```
Background:    #0a0a0a  (almost black, slightly warm)
Surface:       #141414  (card/section bg)
Text Primary:  #f5f5f5  (off-white, not pure white)
Text Secondary: #a0a0a0 (muted gray)
Border:        #252525  (subtle dividers)

Accent (primary): #ff3b30  (alert red – calls attention)
Accent (secondary): #00d4ff  (electric cyan – tech feel)
```

### Usage

- **Accent red** (#ff3b30): Live status badges, important CTAs, hover states
- **Accent cyan** (#00d4ff): Links, code snippets, technical metadata
- **Grays**: Hierarchy through contrast, not color

---

## 🔤 TYPOGRAPHY

### Font Stack

**Display/Headings:**
```
Font: Courier Prime Bold OR JetBrains Mono Bold
Weight: 700
Line-height: 1.1
Letter-spacing: -0.01em
(Monospaced gives "code" feel, not sans-serif)
```

**Body:**
```
Font: Outfit OR Proxima Nova
Weight: 400
Line-height: 1.6
Letter-spacing: 0
Size: 16px base
```

**Metadata/Logs:**
```
Font: JetBrains Mono
Weight: 400
Size: 13px
Color: #a0a0a0
Line-height: 1.5
```

### Hierarchy

```
H1 (Hero): 56px bold monospaced, leading -0.01em
H2 (Sections): 32px bold monospaced
H3 (Cards): 20px bold monospaced
Body: 16px regular sans
Meta: 13px mono gray
```

---

## 📐 SPACING SYSTEM

**Base unit: 8px**

```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
xxl: 48px
xxxl: 64px
```

**Section padding:** `48px 32px` (desktop) / `32px 16px` (mobile)  
**Card padding:** `24px`  
**Gap between items:** `16px`

---

## 🧩 COMPONENT SPECS

### 1. Hero Section

**Layout:**
```
[*a22]  ← in top left (brand/logo)

building in public.
shipping ideas.
breaking things (sometimes).

Experiments in AI, web systems, and product thinking.

[View Lab]  [Idea Log]
```

**Spacing:**
- Logo to headline: 64px
- Headline to subtext: 24px
- Subtext to CTA: 32px
- CTA button gap: 16px

**Hero height:** `100vh` (viewport height)

**Background:** Subtle animated grid OR very subtle gradient noise  
(Don't overdo it – keep it subtle)

---

### 2. Section Headers (Repeated Pattern)

**Format:**
```
━━━━━━━━━━━━━━━━━━━━━
  LAB / BUILDS
━━━━━━━━━━━━━━━━━━━━━
```

Or simpler:
```
→ LAB
```

Use decorative dividers (━ or →) to signal "technical"

---

### 3. Project/Build Card

**Layout (Grid: 1-2 cols on desktop, 1 on mobile):**

```
┌─────────────────────────────────┐
│ SubsTrack                       │
│ Track subscriptions + behavior  │
│                                 │
│ status: live                    │
│ stack: react / node / mongo     │
│                                 │
│ [ LIVE ] [ VIEW ] [ CODE ]      │
└─────────────────────────────────┘
```

**Card specs:**
- Border: `1px solid #252525`
- Padding: `24px`
- Hover: Border becomes `1px solid #ff3b30`
- Background: Subtle hover lift (opacity or shadow)

**Status badges:**
- Live: bg `#ff3b30` text black
- In Progress: bg transparent, border `#00d4ff`, text `#00d4ff`
- Abandoned: bg transparent, text `#a0a0a0`, strikethrough font

**Links (buttons):**
- Solid red for primary CTA
- Text + underline for secondary

---

### 4. Idea Log / Notes

**Format (monospaced, minimal):**

```
→ building a tool to detect fake images using lightweight models
→ exploring UI patterns for AI-first apps
→ testing subscription behavior tracking with event streams
→ design system for anonically22 – radical minimalism approach
```

**Styling:**
- Font: monospace 13px
- Color: `#a0a0a0`
- Line-height: 1.8 (breathing room)
- Prefix: `→` in accent color `#00d4ff`
- Hover: Full line becomes `#f5f5f5`, slight background highlight

---

### 5. Currently Building (Featured)

**Format:**

```
╔═══════════════════════════════════╗
║ CURRENTLY BUILDING                ║
║─────────────────────────────────  ║
║                                   ║
║ AI-powered Subscription Analyzer  ║
║                                   ║
║ Real-time pattern detection for   ║
║ subscription spending behavior    ║
║                                   ║
║ stack: claude api / react / node  ║
║ status: in progress (week 2/4)    ║
║                                   ║
║ [ TRY BETA ] [ FOLLOW PROGRESS ]  ║
╚═══════════════════════════════════╝
```

**Styling:**
- Heavier border: `2px solid #00d4ff`
- Background: Slightly lighter, `#1a1a1a`
- Accent color: cyan (#00d4ff) for borders/highlights

---

### 6. About Section

**Simple, no flourish:**

```
I'm Anirbaan.

I build things as anonically22.

Mostly web products, sometimes AI experiments.
Trying to get better at turning ideas into products
that people actually use.

Before this: AI/ML at Leonard Corporate Solutions.
Published on cryptographic security and IP law.
Currently: B.Tech CS at Techno India University.
```

**Styling:**
- Single column, max-width 600px
- Line-height: 1.8
- All body font, no special formatting

---

### 7. Footer

**Format:**

```
built by a22
aka anirbaan

[twitter] [github] [email]

© 2024
```

**Styling:**
- Meta font (mono, small)
- Center aligned
- Links are cyan with hover underline

---

## 🎬 INTERACTION & MOTION

### Hover States

**Cards:**
```
border-color: #141414 → #ff3b30
box-shadow: 0 0 20px rgba(255, 59, 48, 0.1)
```

**Links:**
```
color: #f5f5f5
text-decoration: underline
text-decoration-color: #00d4ff
```

**Idea log items:**
```
color: #a0a0a0 → #f5f5f5
background: transparent → rgba(0, 212, 255, 0.05)
```

### Page Load Animation

1. **Logo/brand** fades in (0ms)
2. **Hero headline** typewriter effect (chars appear sequentially, 50ms per char)
3. **Subtext** fades in (600ms delay)
4. **CTA buttons** slide up from below (800ms delay)

Keep **simple & fast** – no long waits.

### Scroll Reveal

- **Sections** fade in as they scroll into view (stagger 100ms between items)
- **Cards** have subtle scale-up on reveal (1.0 → 1.02)

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
```

**Key changes:**
- Hero: Headline shrinks 56px → 40px
- Cards: 2 cols → 1 col
- Padding: 48px → 32px → 16px
- Button stack vertically on mobile

---

## 🖼️ LAYOUT GRID

**Desktop (>1024px):**
- Max-width container: 1200px
- Column grid: 12 cols
- Gutter: 24px

**Cards on Lab page:**
- 2 columns (6 cols each)
- Gap: 24px

---

## 🔤 SPECIFIC CONTENT & COPY

### Hero

**Primary:**
```
*a22
```

**Headline:**
```
building in public.
shipping ideas.
breaking things (sometimes).
```

**Subtext:**
```
Experiments in AI, web systems, and product thinking.
```

**Buttons:**
```
[View Lab] [Idea Log]
```

---

### Lab Section

**All projects (status: live, in progress, abandoned):**

```
PROJECT 1: SubsTrack
One-liner: Track subscriptions + spending behavior
Status: live
Stack: react / node / mongodb
CTAs: [LIVE] [CODE]

PROJECT 2: Second Look
One-liner: AI-powered UX analysis tool for design systems
Status: in progress
Stack: claude api / react / fastapi
CTAs: [TRY] [CODE]

PROJECT 3: Workbench
One-liner: 27+ UI/dev tools collection
Status: live
Stack: react / tailwind
CTAs: [LIVE] [CODE]

PROJECT 4: (abandoned) Dashboard Analytics
One-liner: Real-time analytics for side projects
Status: abandoned
Stack: react / firebase
Reason: Didn't solve the problem I thought it did
```

---

### Currently Building

**Example:**

```
TITLE: AI-Powered Subscription Analyzer

DESCRIPTION:
Real-time pattern detection for subscription spending behavior.
Analyzes user data to find optimization opportunities.

STACK: Claude API / React / Node.js

STATUS: In Progress (2/4 weeks)

CTAs:
[TRY BETA] [FOLLOW PROGRESS]
```

---

### Idea Log (Sample Entries)

```
→ building a tool to detect fake images using lightweight ML models
→ exploring dark UI patterns for AI-first applications – how do you signal uncertainty?
→ testing subscription behavior tracking with event streams, not snapshots
→ rethinking password managers – can AI make them more usable?
→ what if you could generate type-safe APIs from Figma designs?
→ design systems are hard – what if we generated them from code?
→ exploring cursor tracking as a UX metric – does it tell you anything real?
```

---

### About

```
I'm Anirbaan.

I build things as anonically22.

Mostly web products, sometimes AI experiments.
Trying to turn ideas into products that people actually use.

Some background:
- AI/ML intern at Leonard Corporate Solutions
- IP law intern at Office of CGPDTM
- Published research in cryptographic security & IP
- B.Tech in CS from Techno India University (2022–2026)

When I'm not building: thinking about design systems, exploring AI, or writing about web architecture.
```

---

## 🚀 IMPLEMENTATION CHECKLIST

### For Coding Agent

- [ ] Set up Vite + React + Tailwind (or vanilla + CSS)
- [ ] Import fonts (Courier Prime + Outfit, or alternatives)
- [ ] Create CSS variables for color palette
- [ ] Build Hero section with typewriter animation
- [ ] Build Section Header component (reusable)
- [ ] Build Project Card component
- [ ] Build Idea Log component
- [ ] Build Currently Building featured section
- [ ] Build About section
- [ ] Build Footer
- [ ] Add hover animations & scroll reveals
- [ ] Responsive design for mobile/tablet
- [ ] Test animation performance
- [ ] Add smooth scroll behavior

---

## 🎬 Tech Stack Recommendation

**Stack:**
```
Frontend: React 19 + Vite
Styling: Tailwind CSS (with custom color vars) OR raw CSS
Animation: Framer Motion (optional) OR CSS animations
Fonts: Google Fonts (Courier Prime, Outfit)
```

**OR simpler:**
```
Frontend: Next.js 15
Styling: Tailwind + CSS modules
Animation: CSS only
```

---

## 📦 File Structure

```
anonically22/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── SectionHeader.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── IdeaLog.jsx
│   │   ├── CurrentlyBuilding.jsx
│   │   ├── About.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── globals.css
│   │   └── variables.css (color palette)
│   ├── App.jsx
│   └── main.jsx
├── public/
├── vite.config.js
├── tailwind.config.js (if using tailwind)
└── package.json
```

---

## ✨ FINAL DESIGN NOTES

1. **Contrast is everything** – use the red & cyan strategically
2. **Whitespace is your friend** – don't fill empty space
3. **Typography drives mood** – monospaced headlines = technical
4. **Animations are subtle** – typewriter + fade, not spinning wheels
5. **Dark theme** – saves eyes, signals "dev tool"
6. **Links should be obvious** – cyan underlines everywhere

---

Done. Hand this to your coding agent.
