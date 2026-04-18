# anonically22 Portfolio – Coding Handoff

**Designer:** Anirbaan  
**Project:** anonically22 – Alternative portfolio site (experimental, product-focused identity)  
**Timeline:** [Your timeline]  
**Status:** Ready for implementation

---

## 🎯 PROJECT BRIEF

**Goal:** Build a portfolio site that feels like a "builder's lab" instead of a corporate resume.

**Key differentiator:**
- Main portfolio (`anirbaansarkar`) = hiring-focused, clean
- anonically22 = idea-driven, experimental, product-thinking

**Target audience:** Other builders, potential collaborators, curious people

---

## 📋 DELIVERABLES

### 1. Complete Design System
**File:** `anonically22_design_system.md`

Contains:
- Color palette (specific hex values)
- Typography specs (fonts, sizes, weights)
- Spacing/grid system
- Component specifications (Hero, Card, IdeaLog, etc.)
- Content & copy examples
- Animation/interaction specs
- Responsive breakpoints

### 2. Working React Prototype
**File:** `AnonicallyPortfolio.jsx`

- Full-page React component
- All sections implemented (Hero, Lab, Currently Building, Idea Log, About, Footer)
- Animations (typewriter effect, fade-ins, hover states)
- Responsive grid layout
- Hover interactions
- Ready to use as reference or base code

### 3. This Handoff Document
Everything you need to build the real version.

---

## 🎨 DESIGN AT A GLANCE

**Aesthetic:** Industrial Lab (raw but refined, technical, high-contrast)

**Colors:**
```
Background:    #0a0a0a
Surface:       #141414
Text Primary:  #f5f5f5
Text Muted:    #a0a0a0
Accent Red:    #ff3b30  (calls attention)
Accent Cyan:   #00d4ff  (technical, links)
Border:        #252525
```

**Typography:**
- **Headings:** Courier Prime Bold (monospaced, technical feel)
- **Body:** Outfit or Proxima Nova (clean sans-serif)
- **Code/Meta:** JetBrains Mono (for logs, small text)

**Spacing:** Base 8px unit (4, 8, 16, 24, 32, 48, 64px)

---

## 📄 SITE STRUCTURE

```
1. Hero Section
   - Brand mark (*a22)
   - Headline (typewriter animation)
   - Subtext
   - CTA buttons

2. Lab Section
   - Section divider
   - Project grid (1-2 columns)
   - Each card shows: name, description, status, stack, links

3. Currently Building
   - Featured project section
   - Highlighted with cyan border
   - Shows real-time progress

4. Idea Log
   - List of bullet-point ideas
   - Hover reveals
   - Monospaced, technical feel

5. About
   - Minimal bio
   - Background info
   - One or two paragraphs

6. Footer
   - Credit line
   - Social links
   - Copyright
```

---

## ⚙️ IMPLEMENTATION REQUIREMENTS

### Stack Options

**Option A (Recommended):**
```
Frontend: React 19 + Vite
Styling: Tailwind CSS (custom color variables)
Animation: CSS only (or Framer Motion if needed)
Fonts: Google Fonts (Courier Prime, Outfit, JetBrains Mono)
```

**Option B (Simpler):**
```
Frontend: Next.js 15
Styling: CSS modules + Tailwind
Animation: CSS only
```

### Core Features (MUST HAVE)

- [ ] Typewriter effect on hero headline
- [ ] Smooth fade-in animations on page load
- [ ] Hover states on cards (border color + shadow)
- [ ] Hover states on links (underline + color change)
- [ ] Grid layout for projects (responsive 1-2 cols)
- [ ] Monospaced typography for headings & logs
- [ ] Exact color palette implementation
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] Section dividers (━ ━ ━ or → arrows)
- [ ] Status badges (live = red, in-progress = cyan outline, abandoned = strikethrough)

### Nice-to-Have

- [ ] Scroll reveal animations (fade-in as sections scroll into view)
- [ ] Custom cursor on hover (if matching main portfolio style)
- [ ] Subtle background grid or texture
- [ ] Terminal-style typing for idea log items
- [ ] Smooth scroll behavior

---

## 📝 CONTENT TO USE

All final content is in `anonically22_design_system.md` under "SPECIFIC CONTENT & COPY" section.

Quick summary:
- **Brand:** *a22 (full: anonically22 / Anirbaan)
- **Hero copy:** See design doc (typewriter-friendly)
- **Projects:** SubsTrack, Second Look, Workbench, (abandoned) Dashboard Analytics
- **Currently Building:** AI-powered Subscription Analyzer
- **Idea Log:** 6+ sample ideas provided
- **About:** Brief bio + background
- **Footer:** Links to Twitter, GitHub, Email

---

## 🎬 ANIMATIONS SPEC

### Hero Load
1. **0ms:** Logo fades in
2. **0ms:** Headline starts typewriter (50ms per character)
3. **600ms:** Subtext fades in
4. **800ms:** Buttons slide up & fade in

### Scroll Reveals
- Sections fade in as they scroll into view (staggered 100ms between items)
- Cards scale slightly (1.0 → 1.02) on reveal

### Hover States
- **Cards:** border → red, shadow appears
- **Links:** text → white, underline → cyan
- **Idea log items:** text → white, background → cyan with low opacity
- **Buttons:** all transitions 0.2-0.3s ease

---

## 📱 RESPONSIVE BREAKPOINTS

```
Mobile: < 768px
- Hero headline: 56px → 40px
- Cards: 2 cols → 1 col
- Padding: 48px → 32px
- Buttons stack vertically

Tablet: 768px - 1024px
- Hero: 48px font
- Cards: 2 cols
- Padding: 40px

Desktop: > 1024px
- Full spec from design system
```

---

## 🚀 BUILD CHECKLIST

**Phase 1: Setup**
- [ ] Initialize Vite/Next.js project
- [ ] Import fonts from Google Fonts
- [ ] Set up CSS variables for color palette
- [ ] Create global styles

**Phase 2: Components**
- [ ] Build Hero component (with typewriter)
- [ ] Build SectionHeader component
- [ ] Build ProjectCard component
- [ ] Build IdeaLog component
- [ ] Build CurrentlyBuilding section
- [ ] Build About section
- [ ] Build Footer component

**Phase 3: Layouts**
- [ ] Assemble full page layout
- [ ] Implement grid system
- [ ] Set up responsive breakpoints
- [ ] Test on mobile/tablet/desktop

**Phase 4: Polish**
- [ ] Add animations (fade-ins, typewriter, hover)
- [ ] Refine spacing & alignment
- [ ] Test hover states on all interactive elements
- [ ] Performance optimization (lazy loading images if any)

**Phase 5: QA**
- [ ] Cross-browser testing
- [ ] Accessibility check (links are obvious, text contrast ok)
- [ ] Mobile responsiveness
- [ ] Animation smoothness
- [ ] Load time optimization

---

## 📂 FILE STRUCTURE (Suggested)

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

## 🔗 REFERENCE FILES

1. **anonically22_design_system.md** – Complete design specifications
2. **AnonicallyPortfolio.jsx** – Working React prototype (use as visual reference)

Both files have all the details you need.

---

## ⚠️ IMPORTANT NOTES

1. **Don't overdesign:** Keep it raw, not polished. Controlled chaos.
2. **Typography matters:** Monospaced headings are KEY to the "technical" feel.
3. **Color restraint:** Only use red & cyan for accents. Grays for everything else.
4. **Mobile-first mindset:** Design works beautifully on mobile too.
5. **Animations are subtle:** Typewriter + fade, nothing spinning or flashy.
6. **Content is king:** Make sure project descriptions are clear & snappy.

---

## 💬 QUESTIONS?

If anything is unclear:
1. Check `anonically22_design_system.md` (comprehensive)
2. Look at `AnonicallyPortfolio.jsx` (shows exactly how it looks)
3. Refer back to this document for implementation specifics

---

**Ready to build. Let's go.**
