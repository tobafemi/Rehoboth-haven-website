# Rehoboth Haven Design System

**Last Updated:** January 2025  
**Version:** 1.2.0

This document outlines the design system, components, and design patterns used across the Rehoboth Haven website. This is a living document that should be updated as the design evolves.

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Patterns & Guidelines](#patterns--guidelines)
7. [Accessibility Standards](#accessibility-standards)
8. [Responsive Breakpoints](#responsive-breakpoints)
9. [Animation & Transitions](#animation--transitions)
10. [Changelog](#changelog)

---

## Design Principles

### Core Values
- **Compassion**: Warm, welcoming, and empathetic design
- **Trust**: Professional, reliable, and transparent
- **Clarity**: Easy to understand and navigate
- **Accessibility**: Usable by everyone, regardless of ability

### Design Philosophy
The Rehoboth Haven website should feel like a trusted care partner - professional yet warm, modern yet approachable. Every design decision should prioritize the user's emotional journey and information needs. As a nurse-led domiciliary care service, the design emphasizes professionalism, trust, and the comfort of receiving care in one's own home.

---

## Color Palette

### Primary Colors
- **Primary**: `hsl(260, 45%, 30%)` - Deep purple, trustworthy and professional
- **Primary Light**: `hsl(260, 45%, 45%)` - Lighter variant for hover states
- **Primary Dark**: `hsl(260, 50%, 20%)` - Darker variant for emphasis
- **Primary Foreground**: `hsl(0, 0%, 100%)` - White text on primary backgrounds

### Accent Colors
- **Gold**: `hsl(43, 75%, 60%)` - Warm, premium accent for CTAs and highlights
- **Gold Light**: `hsl(43, 80%, 70%)` - Lighter gold variant
- **Gold Dark**: `hsl(43, 70%, 50%)` - Darker gold variant
- **Gold Foreground**: `hsl(260, 45%, 30%)` - Dark text on gold backgrounds

### Neutral Colors
- **Background**: `hsl(0, 0%, 100%)` - White
- **Foreground**: `hsl(260, 35%, 20%)` - Dark purple-gray for text
- **Secondary**: `hsl(210, 40%, 96.1%)` - Light gray-blue for backgrounds
- **Muted**: `hsl(210, 40%, 96.1%)` - Muted backgrounds
- **Muted Foreground**: `hsl(215.4, 16.3%, 46.9%)` - Muted text

### Semantic Colors
- **Destructive**: `hsl(0, 84.2%, 60.2%)` - Red for errors/destructive actions
- **Border**: `hsl(214.3, 31.8%, 91.4%)` - Light borders
- **Input**: `hsl(214.3, 31.8%, 91.4%)` - Input borders
- **Ring**: `hsl(260, 45%, 30%)` - Focus rings

### Usage Guidelines
- Use **Primary** for main CTAs, navigation, and key elements
- Use **Gold** sparingly for premium CTAs and important highlights
- Maintain sufficient contrast ratios (WCAG AA minimum)
- Use **Secondary** backgrounds to create visual separation

---

## Typography

### Font Family
- **Primary Font**: Inter (via Next.js font optimization)
- **Font Variable**: `--font-inter`
- **Fallback**: System font stack

### Font Sizes
- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)

### Font Weights
- **Normal**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Typography Scale
- **Hero Headings**: text-4xl to text-6xl, font-bold
- **Page Headings**: text-3xl to text-5xl, font-bold
- **Section Headings**: text-2xl to text-3xl, font-semibold
- **Body Text**: text-base to text-lg
- **Small Text**: text-sm
- **Labels**: text-sm, font-medium

### Line Heights
- **Tight**: 1.25 (headings)
- **Normal**: 1.5 (body text)
- **Relaxed**: 1.75 (long-form content)

---

## Spacing & Layout

### Spacing Scale
Based on Tailwind's default scale (4px base unit):
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 6rem (96px)

### Container Widths
- **Max Content Width**: `max-w-7xl` (1280px)
- **Content Padding**: `px-4 sm:px-6 lg:px-8` (responsive)

### Grid System
- **Mobile**: Single column
- **Tablet**: 2 columns (`md:grid-cols-2`)
- **Desktop**: 3 columns (`lg:grid-cols-3`)
- **Wide Desktop**: 4 columns (`xl:grid-cols-4`)

### Section Spacing
- **Section Padding**: `py-16` (64px vertical)
- **Component Gap**: `gap-8` to `gap-12` (32px to 48px)

---

## Components

### Buttons

#### Primary Button
```tsx
className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
```

#### Secondary Button
```tsx
className="rounded-md bg-secondary px-6 py-3 text-base font-semibold text-foreground shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
```

#### Gold CTA Button
```tsx
className="rounded-md bg-gold px-8 py-4 text-base font-semibold text-primary-dark shadow-lg hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-colors"
```

#### Hero Secondary Button (White with Border)
```tsx
className="rounded-md border-2 border-white bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
```

### Cards
- **Background**: White (`bg-white`)
- **Shadow**: `shadow-lg`
- **Border Radius**: `rounded-lg` (0.5rem)
- **Padding**: `p-6`

### Forms
- **Input Style**: Rounded borders, focus ring in primary color
- **Label Style**: `text-sm font-medium text-foreground`
- **Error Style**: Red text (`text-destructive`), red border on input
- **Success Style**: Green background (`bg-green-50`), green text

### Navigation
- **Header**: Sticky, white background, shadow
- **Mobile Menu**: Slide-down menu with hamburger icon
- **Active State**: Primary color underline or background

---

## Patterns & Guidelines

### Hero Sections
- **Background**: Full-width image with purple gradient overlay (`bg-gradient-to-r from-primary/90 via-primary/75 to-primary/55`)
- **Image**: High-quality hero image (`quality={100}`) with Ken Burns animation effect
- **Height**: `min-h-[600px] sm:min-h-[700px] lg:min-h-[800px]`
- **Padding**: `py-24 sm:py-32` (96px to 128px vertical)
- **Content**: Left-aligned, max-width constrained (`max-w-3xl`)
- **CTAs**: Primary action (gold button) + secondary (white border button)
- **Badge**: CQC Registration Pending badge with gold accent (`bg-gold/20 text-gold rounded-full`)
- **Motion**: Subtle zoom and pan animation on background image (20s zoom, 25s pan cycles)

### Trust Signals
- **Layout**: 3-column grid on desktop
- **Icons**: Circular background with primary/gold accent
- **Text**: Centered, clear hierarchy
- **Hero Trust Indicators**: Inline flex layout with gold icons, white text
  - Nurse-Led Management
  - Care in Your Own Home
  - CQC Registration Pending

### Service Cards
- **Layout**: Grid (1 col mobile, 2-3 cols desktop)
- **Hover**: Scale transform (`hover:scale-105`)
- **Image**: Aspect ratio maintained, placeholder gradients
- **Services**: Personal Care, Medication Support, Companionship, Mobility Assistance, Dementia Care, Respite Care

### Testimonials
- **Layout**: Grid with cards
- **Quote Icon**: Gold accent
- **Author Info**: Name + role, optional photo

### Forms
- **Layout**: Single column, full width on mobile
- **Validation**: Real-time with clear error messages
- **Success State**: Green confirmation message

---

## Accessibility Standards

### WCAG 2.1 AA Compliance
- **Color Contrast**: Minimum 4.5:1 for text, 3:1 for UI components
- **Focus Indicators**: Visible focus rings on all interactive elements
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **ARIA Labels**: Used for icon-only buttons and complex components
- **Semantic HTML**: Proper heading hierarchy, landmarks, alt text

### Implementation Checklist
- [x] Semantic HTML elements
- [x] ARIA labels where needed
- [x] Keyboard navigation support
- [x] Focus management
- [x] Color contrast verification needed
- [x] Screen reader testing needed

---

## Responsive Breakpoints

### Tailwind Default Breakpoints
- **sm**: 640px (small tablets)
- **md**: 768px (tablets)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large desktops)
- **2xl**: 1536px (extra large desktops)

### Mobile-First Approach
- Design starts with mobile (320px+)
- Progressive enhancement for larger screens
- Touch-friendly targets (minimum 44x44px)

---

## Animation & Transitions

### Transition Timing
- **Smooth**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Fast**: `150ms ease-in-out`
- **Slow**: `500ms ease-in-out`

### Common Animations
- **Hover**: Color transitions on buttons/links
- **Scale**: Card hover effects (`hover:scale-105`)
- **Fade**: Form success/error messages
- **Slide**: Mobile menu transitions

### Hero Image Animations
- **Ken Burns Effect**: Combined zoom and pan animation
  - **Zoom**: `heroZoom` - 20s ease-in-out infinite alternate (scale 1 to 1.1)
  - **Pan**: `heroPan` - 25s ease-in-out infinite (subtle translate movement)
  - **Class**: `hero-image-animated` applied to hero background image
  - **Performance**: Uses `will-change: transform` for smooth rendering
- **Content**: No animation on text content (appears immediately for professional feel)

### Shadows
- **Elegant**: `0 10px 30px -10px hsl(var(--primary) / 0.15)`
- **Gold**: `0 4px 20px -4px hsl(var(--gold) / 0.3)`
- **Standard**: `shadow-lg` (Tailwind default)

---

## Component Library

### Reusable Components

#### RequestConsultationForm
- **Purpose**: Lead capture for free consultation requests
- **Fields**: Name, Email, Phone, Preferred Date (optional), Message (optional)
- **Validation**: Zod schema with React Hook Form
- **Success State**: Green confirmation message
- **CTA**: "Request a Free Consultation" (replaces "Book a Tour")

#### DownloadBrochureForm
- **Purpose**: Lead capture for brochure downloads
- **Fields**: Name, Email, Phone (optional)
- **Validation**: Zod schema with React Hook Form
- **Success State**: Green confirmation message

#### Testimonials
- **Purpose**: Display customer testimonials
- **Props**: `testimonials` array, `title`, `showImages`, `className`
- **Layout**: Responsive grid (1-3 columns)

#### Header
- **Features**: Sticky navigation, mobile menu, click-to-call button
- **Logo**: Image + text
- **Navigation**: Desktop horizontal, mobile vertical

#### Footer
- **Sections**: Care links, About links, Contact info
- **Layout**: 3-column grid on desktop, stacked on mobile

---

## Image Guidelines

### Image Specifications
- **Format**: WebP preferred, JPG fallback
- **Optimization**: Next.js Image component with lazy loading
- **Hero Quality**: Maximum quality (`quality={100}`) for crisp, non-pixelated images
- **Aspect Ratios**: 
  - Hero images: 16:9
  - Cards: 16:9
  - Team photos: 1:1 (square)
  - Testimonials: 1:1 (square)

### Image Sizes
- **Hero**: 1920x1080px (desktop), 800x450px (mobile)
- **Cards**: 800x450px
- **Team Photos**: 400x400px
- **Logo**: 200x200px (scaled down)

### Hero Image Requirements
- **File**: `/images/hero-care-home.jpg`
- **Content**: Warm, welcoming scene showing caregiver providing home care
- **Overlay**: Purple gradient overlay for text readability and brand consistency
- **Animation**: Ken Burns effect applied via CSS animations

### Required Images
- Logo (`/images/logo.jpg`)
- Hero Image (`/images/hero-care-home.jpg`) - Caregiver providing home care
- OG Image (`/images/og-image.jpg`)
- Service images: Personal Care, Medication Support, Companionship, Mobility Assistance, Dementia Care, Respite Care
- Team member photos
- Testimonial photos (optional)

---

## Content Guidelines

### Tone of Voice
- **Warm**: Compassionate and understanding
- **Professional**: Trustworthy and knowledgeable
- **Clear**: Easy to understand, no jargon
- **Supportive**: Reassuring and helpful

### Writing Style
- Use "we" and "our" to create connection
- Address the reader directly ("you")
- Focus on benefits, not just features
- Use short paragraphs and bullet points
- Include clear CTAs

---

## Changelog

### Version 1.2.0 - January 2025
**Blogs & News Feature**
- Added "Blogs & News" section (`/blogs`)
- Created individual blog post pages with SEO optimization
- Updated Header navigation to include "Blogs" dropdown menu
- Updated Footer to include links to blog posts and main blogs page
- Implemented responsive grid layout for blog cards
- Added "Press Releases" section placeholder

### Version 1.1.0 - December 2024
**Hero Section Enhancement & Service Model Update**
- Added Ken Burns animation effect to hero background image (zoom + pan)
- Updated hero section to use high-quality image with purple gradient overlay
- Changed from residential care to domiciliary/home care service model
- Updated CTAs: "Request a Free Consultation" replaces "Book a Tour"
- Updated component: RequestConsultationForm replaces BookTourForm
- Updated trust signals to reflect nurse-led management and home care focus
- Updated service offerings: Personal Care, Medication Support, Companionship, Mobility Assistance, Dementia Care, Respite Care
- Improved image quality settings (quality={100}) for crisp, non-pixelated images
- Removed text fade-in animation for more professional appearance
- Updated hero messaging: "Nurse-Led Home Care in Medway & Kent"

### Version 1.0.0 - [Initial Date]
**Initial Design System**
- Established color palette (purple/gold theme)
- Defined typography scale
- Created component patterns
- Set up spacing and layout system
- Documented accessibility standards

### Future Updates
- Document any design changes here
- Note component additions/modifications
- Update color values if changed
- Track accessibility improvements

---

## Notes for Future Updates

### Areas to Enhance
1. **Dark Mode**: Consider adding dark mode support
2. **Animation Library**: May want to add Framer Motion for complex animations
3. **Component Variants**: Document all button/form variants
4. **Icon System**: Standardize icon usage (currently SVG inline)
5. **Illustration Style**: If adding illustrations, document style guide

### Questions to Resolve
- [ ] Finalize team member photos and bios
- [ ] Confirm actual contact information (phone, address, email)
- [ ] Source real home care service photos
- [ ] Collect real testimonials with photos
- [ ] Create actual brochure PDF
- [ ] Optimize hero image for web (consider WebP format)

---

## Resources

### Design Tools
- **Figma**: [Link if available]
- **Design Tokens**: Defined in `tailwind.config.ts` and `app/globals.css`
- **Component Code**: Located in `/components` directory

### References
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/)

---

**Maintained by:** Development Team  
**Last Review:** [Date]  
**Next Review:** [Date + 3 months]

