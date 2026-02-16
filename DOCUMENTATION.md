# Nextron E&I - Project Documentation

## Project Overview

This is a premium, production-ready corporate website for Nextron Electrical & Instrumentation, built with enterprise-grade standards for the oil & gas, petrochemical, and industrial sectors.

## Technology Stack

### Core Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.3+
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React

### Key Features
- Server-Side Rendering (SSR)
- Optimized performance (Lighthouse 90+)
- SEO optimized
- Fully responsive design
- Accessible (WCAG compliant)
- Premium animations
- Type-safe development

## Project Structure

```
nextron/
├── public/                 # Static assets
│   ├── robots.txt
│   ├── manifest.json
│   └── icon.svg
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout with metadata
│   │   ├── page.tsx       # Home page
│   │   ├── globals.css    # Global styles
│   │   ├── sitemap.ts     # Dynamic sitemap
│   │   └── robots.ts      # Robots configuration
│   ├── components/
│   │   ├── layout/        # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/      # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Industries.tsx
│   │   │   ├── WhyChoose.tsx
│   │   │   ├── Commitment.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/            # Reusable UI components
│   ├── lib/               # Utilities and data
│   │   ├── data.ts        # Content and data
│   │   ├── utils.ts       # Utility functions
│   │   └── config.ts      # Site configuration
│   └── types/
│       └── index.ts       # TypeScript definitions
├── .env.example           # Environment variables template
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
├── README.md              # Project README
└── DEPLOYMENT.md          # Deployment guide
```

## Design System

### Color Palette

**Primary Colors:**
- `industrial-dark`: #0a0e1a (Background)
- `industrial-navy`: #0f172a (Sections)
- `industrial-slate`: #1e293b (Cards)
- `industrial-steel`: #334155 (Borders)
- `industrial-blue`: #2563eb (Primary accent)
- `industrial-orange`: #f97316 (Alternative accent)

**Usage Guidelines:**
- Dark background creates industrial, professional feel
- Blue accent for interactive elements and highlights
- Steel grey for borders and subtle separators

### Typography

**Font Family:** Inter (Google Fonts)

**Heading Styles:**
- `heading-1`: 4xl-6xl, bold, for hero sections
- `heading-2`: 3xl-5xl, bold, for section titles
- `heading-3`: 2xl-3xl, bold, for subsections

**Body Styles:**
- `body-large`: lg-xl, for introductory text
- Default: base, for regular content

### Components

**Buttons:**
- `btn-primary`: Filled blue button with hover effects
- `btn-secondary`: Outlined blue button

**Cards:**
- `card-industrial`: Glass-morphism effect, hover animations

**Layout:**
- `section-container`: Max-width container with padding
- `section-padding`: Vertical padding for sections

## Content Management

### Updating Content

All content is centralized in `src/lib/data.ts`:

**Services:**
```typescript
export const services: Service[] = [...]
```

**Industries:**
```typescript
export const industries: Industry[] = [...]
```

**Why Choose Items:**
```typescript
export const whyChooseItems: WhyChooseItem[] = [...]
```

**Commitments:**
```typescript
export const commitments: Commitment[] = [...]
```

### Adding New Content

1. Define the data structure in `src/types/index.ts`
2. Add content to `src/lib/data.ts`
3. Use the data in relevant components

## Animation Standards

### Framer Motion Patterns

**Scroll Reveal:**
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-100px' });
```

**Stagger Children:**
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
```

**Item Animation:**
```typescript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
```

### Animation Guidelines

- Keep animations smooth and purposeful
- Use 0.3-0.6s duration for most transitions
- Stagger children by 0.1-0.2s
- Always use `once: true` for scroll animations
- Avoid excessive movement

## SEO Best Practices

### Metadata Configuration

Located in `src/app/layout.tsx`:
- Page title with keywords
- Meta description (155 characters)
- Open Graph tags
- Robots directives
- Viewport settings

### Content SEO

- Semantic HTML5 tags
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for images (when added)
- Internal linking structure
- Mobile-first responsive design

### Technical SEO

- Sitemap generation (`sitemap.ts`)
- Robots.txt configuration
- Clean URL structure
- Fast page load times
- Core Web Vitals optimization

## Performance Optimization

### Current Optimizations

1. **Image Optimization**: Next.js Image component ready
2. **Code Splitting**: Automatic with Next.js App Router
3. **CSS Optimization**: Tailwind purges unused styles
4. **Bundle Size**: Tree-shaking enabled
5. **Font Loading**: Inter font with display swap

### Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Lighthouse Score: 90+ (all categories)

## Accessibility

### Implemented Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Responsive text sizing
- Skip-to-content functionality (can be added)

### Testing Accessibility

```bash
# Use Lighthouse accessibility audit
npm run build
# Test with screen readers
# Verify keyboard navigation
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development Workflow

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Code Style

- Use TypeScript for type safety
- Follow ESLint rules
- Use Prettier for formatting (if configured)
- Meaningful variable and function names
- Component-based architecture

## Customization Guide

### Changing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  industrial: {
    dark: '#0a0e1a',  // Update here
    // ...
  },
}
```

### Adding New Sections

1. Create component in `src/components/sections/`
2. Import in `src/app/page.tsx`
3. Add to navigation in `src/lib/data.ts`

### Modifying Animations

Adjust in component files:
```typescript
transition={{ duration: 0.6 }} // Change timing
```

## Integration Points

### Contact Form

Currently logs to console. To integrate:

1. Add form endpoint to `.env.local`
2. Update `handleSubmit` in `Contact.tsx`
3. Add error handling and success messages

### Analytics

To add Google Analytics:

1. Add GA ID to `.env.local`
2. Install `@next/third-parties`
3. Add to `layout.tsx`

### CMS Integration

For dynamic content:

1. Choose CMS (Contentful, Sanity, etc.)
2. Create data fetching functions
3. Replace static data with API calls
4. Add revalidation strategy

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Security audit quarterly
- Content review quarterly
- Performance testing monthly
- Backup configuration

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all
npm update

# Or update specific package
npm install package-name@latest
```

## Troubleshooting

### Common Issues

**Issue: Build fails**
- Check TypeScript errors: `npm run lint`
- Verify all imports are correct
- Check for missing dependencies

**Issue: Animations not working**
- Verify Framer Motion is installed
- Check browser compatibility
- Ensure `useInView` ref is attached

**Issue: Styles not applying**
- Run `npm run dev` to restart
- Check Tailwind config
- Verify class names are correct

## Contact & Support

For questions or issues:
- Review this documentation
- Check Next.js documentation
- Review Tailwind CSS documentation
- Check Framer Motion documentation

## License

Proprietary - Nextron Electrical & Instrumentation

---

**Version**: 1.0.0
**Last Updated**: February 2026
**Maintained By**: Development Team
