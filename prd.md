# Catherine Dunn Portfolio Website - Product Requirements Document

## Project Overview
A single-page portfolio website for Catherine Dunn, a Public Relations professional. The site will showcase her work, personality, and expertise through a clean, elegant, and inviting design.

**Tech Stack:** Next.js 14 + Tailwind CSS + Framer Motion
**Hosting:** Vercel
**Layout:** Single-page with anchor navigation
**Theme:** Light mode only

---

## Design Direction

### Aesthetic
Minimal & Modern meets Warm & Approachable
- Clean, elegant typography with generous whitespace
- Soft, warm color palette (avoiding cold/corporate feel)
- Personable and inviting atmosphere
- **Subtle & elegant animations** - gentle fade-ins, soft hover effects

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Warm Terracotta | #E07A5F | Primary accent, buttons, highlights |
| Soft Sage | #81B29A | Secondary accent |
| Charcoal | #3D405B | Text, dark elements |
| Warm Cream | #F4F1DE | Backgrounds |
| Soft Gold | #F2CC8F | Subtle accents |

### Typography
- **Headings:** Playfair Display (elegant serif)
- **Body:** Inter (clean, readable sans-serif)

---

## Site Sections

### 1. Navigation (Sticky)
- Logo/name: "Catherine Dunn"
- Anchor links: About, Work, Contact
- Smooth scroll behavior
- Minimal, unobtrusive design

### 2. Hero Section
**Layout: Creative/Asymmetric**
- Dynamic layout with overlapping elements and unique positioning
- Name: "Catherine Dunn"
- Title: "Public Relations Professional"
- Tagline or brief intro statement
- Professional photo with creative placement
- Scroll indicator

### 3. About Section
- Professional bio/story
- Photo of Catherine
- Key highlights or specialties
- Years of experience, notable achievements

### 4. Portfolio/Work Section
**Layout: Masonry/Pinterest Grid with Filter Tabs**

#### Categories (5 total, 3-5 pieces each)
1. **Digital** - Digital PR campaigns, online presence work
2. **Print** - Press releases, print media coverage
3. **Social** - Social media campaigns and content
4. **Influencer Partnerships** - Influencer collaborations and campaigns
5. **Events** - Event PR, launches, activations

#### Navigation
- Horizontal filter tabs above the grid
- Click tab to filter by category
- Smooth transition between filters

#### Portfolio Item Behavior
- **If external link exists:** Direct link to live work/media coverage
- **If no external link:** Modal/lightbox opens with:
  - Detailed writeup
  - Photos/images
  - Results and metrics

#### Media Types
- Screenshots and photos
- **Embedded Instagram posts** (lazy loaded)
- **Embedded TikTok posts** (lazy loaded)
- Video embeds where applicable
- PDF previews for print work

#### Performance Strategy
- **Lazy load all social embeds** - show thumbnail first, load actual embed only when scrolled into view
- Optimized images with Next.js Image component

### 5. Contact Section
- Email address
- LinkedIn profile link
- Clean, simple layout
- No contact form needed

### 6. Footer
- Copyright notice
- Quick navigation links
- LinkedIn icon

---

## Technical Specifications

### Project Structure
```
catherine-dunn-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Portfolio.tsx
│   ├── PortfolioItem.tsx
│   ├── PortfolioModal.tsx
│   ├── FilterTabs.tsx
│   ├── SocialEmbed.tsx      # Lazy-loaded Instagram/TikTok embeds
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   ├── data.ts              # Portfolio content data
│   └── types.ts             # TypeScript interfaces
├── public/
│   └── images/
├── tailwind.config.ts
└── package.json
```

### Dependencies
- next (v14)
- react / react-dom
- tailwindcss
- framer-motion (animations)
- lucide-react (icons)
- react-masonry-css (masonry grid)

### Key Features
- [x] Responsive design (mobile-first)
- [x] Smooth scroll navigation
- [x] Subtle scroll-triggered animations
- [x] SEO optimization with meta tags
- [x] Image optimization (Next.js Image)
- [x] Accessibility (WCAG 2.1 AA)
- [x] Lazy-loaded social embeds
- [x] Masonry grid layout
- [x] Category filter tabs
- [ ] Analytics (add later)

---

## Content Requirements

### Content Status: Partially Ready
Use **realistic placeholders** for missing content that match the design aesthetic.

### From Catherine
- [ ] Professional headshot (high resolution)
- [ ] Additional photos for hero/about
- [ ] Bio/about text (150-300 words)
- [ ] Portfolio items per category:

#### Digital (3-5 pieces)
- Title, description, results
- Screenshots or links
- External URLs if available

#### Print (3-5 pieces)
- Title, description, results
- PDF or images of coverage
- Publication links if available

#### Social (3-5 pieces)
- Title, description, results
- Instagram/TikTok post URLs for embedding
- Screenshots as fallback

#### Influencer Partnerships (3-5 pieces)
- Title, description, results
- Partner names/handles
- Campaign visuals or social links

#### Events (3-5 pieces)
- Title, description, results
- Event photos
- Press coverage links

### Contact Information
- [ ] Email address
- [ ] LinkedIn profile URL

---

## Design Decisions Summary

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Hero Layout | Creative/Asymmetric | Shows personality and creativity |
| Portfolio Grid | Masonry | Visual interest, works well with mixed media |
| Category Nav | Filter Tabs | Clean, intuitive navigation |
| Portfolio Click | Mixed (Link/Modal) | Flexibility for different content types |
| Animations | Subtle & Elegant | Professional yet warm |
| Social Embeds | Lazy Load | Performance optimization |
| Dark Mode | No | Keep warm, inviting feel consistent |
| Testimonials | No | Focus on work itself |
| Analytics | Later | Simplify initial launch |

---

## Implementation Phases

### Phase 1: Project Setup
- Initialize Next.js 14 project with TypeScript
- Configure Tailwind CSS with custom colors
- Set up Google Fonts (Playfair Display + Inter)
- Create base layout and global styles
- Define color variables and design tokens

### Phase 2: Core Components
- Build Navbar with smooth scroll
- Create Hero section (creative/asymmetric layout)
- Build About section
- Create Contact section
- Build Footer

### Phase 3: Portfolio System
- Implement masonry grid layout
- Build filter tabs component
- Create portfolio item cards
- Build modal/lightbox component
- Implement lazy-loaded social embeds

### Phase 4: Content & Polish
- Add placeholder content (realistic)
- Implement Framer Motion animations
- Optimize for mobile responsiveness
- Add loading states and transitions

### Phase 5: Launch
- Deploy to Vercel
- Test all functionality
- Configure custom domain (when ready)
- Lighthouse audit and fixes

---

## Success Metrics
- Lighthouse Performance: >90
- Lighthouse Accessibility: >95
- Mobile responsive on all breakpoints
- Smooth 60fps animations
- Social embeds load without blocking page
- All portfolio filters work correctly

---

## Tradeoff Priority
**Balanced Approach** - Good design with core functionality, polish iteratively.
- Launch with solid foundation
- All 5 portfolio categories working
- Placeholder content where needed
- Can enhance over time
