# New Marketing Components

These interactive components have been added to enhance the HDSOK.com marketing site, particularly the HDS Console showcase page.

## Components Overview

### 1. StatsCounter (`components/StatsCounter.tsx`)
An animated statistics counter with smooth number animations.

**Features:**
- Counts up to target numbers when scrolled into view
- Customizable stats with prefix/suffix support
- Responsive grid layout (2 columns mobile, 4 columns desktop)
- Framer Motion animations with spring physics

**Usage:**
```tsx
<StatsCounter />
// Or with custom stats:
<StatsCounter stats={[
  { value: 1000, suffix: '+', label: 'Properties' },
  { value: 99, suffix: '%', label: 'Uptime' }
]} />
```

### 2. InteractiveFeatureGrid (`components/InteractiveFeatureGrid.tsx`)
Expandable feature cards with click-to-reveal details.

**Features:**
- 6 pre-configured platform features
- Smooth expand/collapse animations
- Icon rotation on selection
- Responsive grid (1-3 columns)
- Glassmorphism design with gradient overlays

**Usage:**
```tsx
<InteractiveFeatureGrid />
```

### 3. BeforeAfterComparison (`components/BeforeAfterComparison.tsx`)
Side-by-side transformation showcase with animated arrow.

**Features:**
- 6 before/after comparisons
- Color-coded cards (red = before, green = after)
- Animated directional arrow
- Staggered reveal animations
- Responsive mobile/desktop layouts

**Usage:**
```tsx
<BeforeAfterComparison />
```

### 4. TestimonialCarousel (`components/TestimonialCarousel.tsx`)
Auto-rotating testimonial slider with manual controls.

**Features:**
- 5 customer testimonials
- Auto-advance every 7 seconds
- Pause on hover
- Navigation arrows and dot indicators
- Star ratings with staggered animation
- Avatar initials with gradient backgrounds

**Usage:**
```tsx
<TestimonialCarousel />
```

### 5. ProductShowcase (`components/ProductShowcase.tsx`)
Tabbed product feature showcase with smooth transitions.

**Features:**
- 4 product feature categories
- Tab navigation with animated indicator
- Coordinated text/visual transitions
- Checkmark list animations
- Floating badge and pulse effects

**Usage:**
```tsx
<ProductShowcase />
```

## Integration

All components are integrated into:
- **HDS Console Page** (`app/hds-console/page.tsx`) - Full showcase
- **Home Page** (`app/page.tsx`) - StatsCounter and TestimonialCarousel

### Component Order on HDS Console Page:
1. HeroShowcase
2. Platform Overview
3. Dashboard Preview
4. **StatsCounter** ← New
5. **BeforeAfterComparison** ← New
6. **InteractiveFeatureGrid** ← New
7. **ProductShowcase** ← New
8. Core Features (existing grid)
9. Integration & Security
10. **TestimonialCarousel** ← New
11. CTA Section

## Design Philosophy

All components follow the HDSOK.com design system:
- Dark theme (`bg-dark-bg`, slate/black gradients)
- Neon green accent color (`#00FF88`)
- Glassmorphism effects with backdrop blur
- Large shadows (`shadow-[0_30px_80px_rgba(0,0,0,0.7)]`)
- Framer Motion for smooth animations
- Responsive layouts with Tailwind CSS

## Dependencies

Required packages (already installed):
- `framer-motion`: ^12.23.24 - Animations and transitions
- `react`: ^19.0.0
- `next`: ^16.0.3

## Customization

Each component accepts optional props for customization:
- **StatsCounter**: Pass custom `stats` array
- Others use internal data arrays that can be edited directly in the component files

## Performance

All components use:
- `useInView` hook for scroll-triggered animations
- CSS transforms for GPU-accelerated animations
- Lazy loading with `AnimatePresence`
- `once: true` for one-time scroll animations to prevent re-triggering

## Browser Support

Compatible with all modern browsers supporting:
- CSS Grid
- CSS Flexbox
- CSS Transforms
- Framer Motion requirements
