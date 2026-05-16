# Nextron E&I — Project Checklist

## 1. Development (Core Build)

### Components
- [x] Header — sticky navigation, smooth scroll
- [x] Footer — links, contact info, copyright
- [x] Hero section — animated background, CTAs, stats
- [x] About section — company background, industries, capabilities
- [x] Services section — 4 expandable service cards
- [x] Industries section — 6 sectors with hover animations
- [x] Why Choose section — 6 differentiators with stats
- [x] Commitment section — 5 core values
- [x] Contact section — form + company info

### Technical Setup
- [x] Next.js 14 app router
- [x] TypeScript configured
- [x] Tailwind CSS with custom industrial theme
- [x] Framer Motion animations
- [x] Custom scrollbar styling
- [x] Responsive / mobile-first layout
- [x] Production build passing (`npm run build`)

### SEO & Meta
- [x] Page metadata (title, description, keywords)
- [x] Open Graph tags
- [x] Robots meta / `robots.ts`
- [x] `sitemap.ts`
- [x] `robots.txt` in `public/`
- [x] `manifest.json`

---

## 2. Content Customization

- [ ] Update real company phone numbers in `src/lib/config.ts`
- [ ] Update real contact email in `src/lib/config.ts`
- [ ] Update real website URL (`siteConfig.url`) in `src/lib/config.ts`
- [ ] Update LinkedIn / Facebook URLs in `src/lib/config.ts`
- [ ] Review and finalize all copy in `src/lib/data.ts`
- [ ] Verify industry-specific terminology is accurate
- [ ] Update domain in `src/app/sitemap.ts`
- [ ] Add real company logo to `src/logo/` and wire it into `Logo.tsx`
- [ ] Add Open Graph image (`/public/og-image.jpg`)
- [ ] Add favicon (`/public/favicon.ico` or `favicon.png`)

---

## 3. Environment & Configuration

- [ ] Create `.env.local` from `.env.example` (if applicable)
- [ ] Set `NEXT_PUBLIC_SITE_URL` for production domain
- [ ] Configure contact form backend / email service (e.g., Resend, EmailJS, Formspree)
- [ ] Set up Google Analytics or preferred analytics platform
- [ ] Configure any SMTP / email credentials securely (never commit to git)

---

## 4. Testing & QA

### Functionality
- [ ] All navigation links scroll to correct sections
- [ ] Contact form submits without errors
- [ ] All service cards expand/collapse correctly
- [ ] Mobile menu opens and closes properly
- [ ] All external links open in new tab

### Visual / UX
- [ ] Cross-browser check (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness verified (360px, 768px, 1024px, 1440px)
- [ ] Animations perform smoothly on low-end devices
- [ ] No layout overflow or horizontal scroll on mobile

### Performance
- [ ] Run `npm run build` — 0 errors, 0 warnings
- [ ] Lighthouse audit: Performance ≥ 90
- [ ] Lighthouse audit: SEO ≥ 90
- [ ] Lighthouse audit: Accessibility ≥ 90
- [ ] Core Web Vitals: LCP < 2.5s, CLS < 0.1, FID < 100ms
- [ ] Images optimized (WebP format preferred)

### Accessibility
- [ ] All images have `alt` text
- [ ] Color contrast passes WCAG AA
- [ ] Keyboard navigation works across all interactive elements
- [ ] Screen reader tested (VoiceOver / NVDA)

---

## 5. Pre-Deployment

- [ ] Final content review and sign-off
- [ ] Remove any placeholder/dummy data
- [ ] Run `npm run lint` — 0 errors
- [ ] Run `npm run build` — successful
- [ ] Commit all changes to version control (Git)
- [ ] Tag release version (e.g., `v1.0.0`)

---

## 6. Deployment

- [ ] Choose hosting platform (Vercel / traditional server / Docker)
- [ ] Configure environment variables on hosting platform
- [ ] Deploy to staging URL and do final smoke test
- [ ] Point custom domain to hosting server
- [ ] Enable HTTPS / SSL certificate (Let's Encrypt or platform-provided)
- [ ] Set up `www` redirect to apex domain (or vice versa)
- [ ] Verify sitemap is accessible at `https://yourdomain.com/sitemap.xml`
- [ ] Verify `robots.txt` is accessible at `https://yourdomain.com/robots.txt`

---

## 7. Post-Deployment

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Open Graph preview with [https://www.opengraph.xyz](https://www.opengraph.xyz)
- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Test contact form on live domain end-to-end
- [ ] Check analytics is recording sessions
- [ ] Schedule periodic content reviews

---

## Priority Summary

| Priority | Task |
|----------|------|
| 🔴 High | Update real contact details in `config.ts` |
| 🔴 High | Configure contact form backend |
| 🔴 High | Add real logo and favicon |
| 🟡 Medium | Add OG image for social sharing |
| 🟡 Medium | Lighthouse audit and fixes |
| 🟢 Low | Analytics integration |
| 🟢 Low | Search Console submission |
