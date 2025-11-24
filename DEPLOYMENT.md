# Deployment Guide - HDSOK.com

## Pages Created

All required pages have been created with proper SEO metadata and styling:

### Public Pages
- ✅ `/` - Home page (updated with new branding)
- ✅ `/about` - About HDS
- ✅ `/services` - Services overview
- ✅ `/services/facility-maintenance` - Facility maintenance details
- ✅ `/services/mechanical-refrigeration` - Mechanical & refrigeration details
- ✅ `/services/construction-special-projects` - Construction services
- ✅ `/services/design-build-consulting` - Design-build services
- ✅ `/services/energy-management-sustainability` - Energy management
- ✅ `/vendors` - Vendor network page
- ✅ `/contact` - Contact page with forms
- ✅ `/hds-console` - HDS Console product page

### New Utility Pages (Not in menu but accessible)
- ✅ `/thank-you` - Service request confirmation page
- ✅ `/booking-confirmed` - Meeting booking confirmation page
- ✅ `/book-a-call` - Calendly integration for scheduling (30-min calls)
- ✅ `/privacy-policy` - Full privacy policy with GDPR/CCPA compliance
- ✅ `/404` - Custom 404 error page

## SEO Implementation

### Metadata
All pages include comprehensive metadata:
- Page titles optimized for search
- Meta descriptions (150-160 characters)
- Keywords where applicable
- Open Graph tags for social sharing
- Canonical URLs via Next.js defaults

### Sitemap
- Dynamic sitemap at `/sitemap.xml`
- Includes all public pages with priorities
- Automatic lastModified timestamps
- Proper changeFrequency values

### Robots.txt
- Dynamic robots.txt at `/robots.txt`
- Allows all crawlers for public pages
- Blocks utility pages (thank-you, booking-confirmed, 404)
- Points to sitemap.xml

## Calendly Integration

The `/book-a-call` page includes:
- Calendly inline widget
- Custom styling matching HDS brand
- Background: #1a1a1a (base dark)
- Text color: #ffffff (white)
- Primary color: #39ff14 (neon green)
- GDPR banner hidden
- Event type details hidden

## Deployment to Vercel

### Prerequisites
1. Vercel account connected to GitHub repository
2. Environment variables (if any) configured in Vercel dashboard

### Build Command
```bash
npm run build
```

This will:
1. Build Next.js application
2. Generate sitemap.xml automatically
3. Generate robots.txt automatically

### Deployment Steps

#### Option 1: Automatic Deployment (Recommended)
1. Push changes to main branch:
   ```bash
   git add .
   git commit -m "Add utility pages, SEO implementation, and Calendly integration"
   git push origin main
   ```
2. Vercel will automatically detect the push and deploy
3. Monitor deployment at https://vercel.com/your-dashboard

#### Option 2: Manual Deployment via Vercel CLI
1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy to production:
   ```bash
   vercel --prod
   ```

### Verification Checklist

After deployment, verify:

- [ ] Home page loads with new "Homeland Development Services" title
- [ ] All service pages accessible
- [ ] `/book-a-call` shows Calendly widget properly
- [ ] `/thank-you` displays confirmation message
- [ ] `/booking-confirmed` shows booking success
- [ ] `/privacy-policy` displays full policy
- [ ] `/404` shows custom error page
- [ ] `/sitemap.xml` returns XML sitemap
- [ ] `/robots.txt` returns robots directives
- [ ] All metadata appears in page source
- [ ] Open Graph tags present for social sharing

### Post-Deployment SEO Tasks

1. **Google Search Console**
   - Submit sitemap: https://www.hdsok.com/sitemap.xml
   - Request indexing for key pages

2. **Google Analytics** (if configured)
   - Verify tracking code fires on all pages
   - Set up goals for form submissions

3. **Social Media**
   - Test Open Graph preview on Facebook/LinkedIn
   - Verify correct image, title, description appear

4. **Performance**
   - Run Lighthouse audit
   - Check Core Web Vitals
   - Verify mobile responsiveness

## Environment Variables (if needed)

If you have any API keys or secrets, add them in Vercel dashboard:
- Go to Project Settings > Environment Variables
- Add variables for Production, Preview, and Development

## Rollback Plan

If issues occur:
1. In Vercel dashboard, go to Deployments
2. Find previous working deployment
3. Click "..." menu > "Promote to Production"

## Support

For deployment issues:
- Vercel Support: https://vercel.com/support
- Next.js Docs: https://nextjs.org/docs
- Project Repository: https://github.com/dstogsdill1/hdsok.com

---

**Deployment Date:** November 23, 2025  
**Next.js Version:** 16.0.3  
**Node Version:** 22+
