# HDSOK.com Website Instructions

> ⚠️ **CRITICAL: READ THIS FILE FIRST**
> 
> Before taking any action on the HDSOK.com marketing project, you must:
> 1. Read this entire instruction file
> 2. Verify all instructions remain current with the actual codebase
> 3. **Update this file immediately** when anything changes
> 4. Keep this file synchronized with reality at all times

**Last Updated:** November 26, 2025

---

## 📋 Quick Reference

| Item | Value |
|------|-------|
| **Repository** | `dstogsdill1/hdsok.com` |
| **Live URL** | https://www.hdsok.com |
| **Deployment** | Vercel (auto-deploy on push to `main`) |
| **Framework** | Next.js 16+ with TypeScript |
| **Styling** | Tailwind CSS with dark theme |
| **Service Request URL** | `https://www.hds.live/service-request` |

---

## 🚨 Critical URLs & Links

### Service Request Form
**Always use:** `https://www.hds.live/service-request`

> ❌ **DEPRECATED:** JotForm links (`app.jotform.com/*`) are no longer used.
> 
> If you find any JotForm links in the codebase, replace them with the HDS.live service request URL.

### Key External Links
| Purpose | URL |
|---------|-----|
| Service Request | `https://www.hds.live/service-request` |
| HDS Console (Login) | `https://www.hds.live` |
| Phone (Live Agent) | `tel:14057774156` |

---

## 🏗️ Project Structure

```
hdsok.com/
├── .github/
│   └── agents/
│       └── hdsok.com MyHomie.agent.md  # Copilot agent instructions
├── app/                                 # Next.js App Router pages
│   ├── api/                            # API routes
│   │   ├── contact/                    # Contact form handler
│   │   ├── service-request/            # Service request handler
│   │   └── test-email/                 # Email testing
│   ├── about/
│   ├── book-a-call/
│   ├── contact/
│   ├── hds-console/                    # HDS Console marketing page
│   ├── services/                       # Service pages
│   │   ├── construction-special-projects/
│   │   ├── design-build-consulting/
│   │   ├── energy-management-sustainability/
│   │   ├── facility-maintenance/
│   │   └── mechanical-refrigeration/
│   ├── vendors/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                        # Homepage
├── components/                          # Reusable React components
│   ├── Layout.tsx                      # Main layout with nav/footer
│   ├── DashboardCharts.tsx             # Portfolio dashboard charts
│   ├── HeroShowcase.tsx                # Hero section
│   ├── QuickActionsGrid.tsx            # Quick action cards
│   ├── PortfolioShowcase.tsx           # Portfolio tenant cards
│   └── ...
├── lib/                                 # Utility functions
├── public/                              # Static assets
│   └── images/
├── types/                               # TypeScript type definitions
├── INSTRUCTIONS.md                      # ⬅️ THIS FILE
├── .env.local                           # Environment variables (not in git)
├── env.local.example                    # Example env file
└── package.json
```

---

## 🎨 Design System

### Brand Colors
| Name | Value | Usage |
|------|-------|-------|
| Neon Green | `#c6ff00` | Primary accent, CTAs, highlights |
| Surface | Dark slate | Backgrounds |
| Border Subtle | `white/10` | Card borders |
| Text Primary | White | Headings |
| Text Secondary | Gray-400 | Body text |

### Theme
- **Dark-themed** website throughout
- Gradient backgrounds with blur effects
- Neon-green accents for interactivity
- Glass-morphism card effects
- Smooth animations with Framer Motion

---

## 📊 Portfolio Data (Current as of Nov 2025)

These numbers should match HDS Console's Portfolio Overview:

| Metric | Value |
|--------|-------|
| Portfolio Locations | **372** |
| Total Spend YTD | **$37.4M** |
| Work Orders YTD | **24,631** |
| Active Work Orders | **14,586** |
| Portfolio Brands | **6** |

### Sample Tenant Data (for marketing displays)
| Tenant | Locations | Work Orders |
|--------|-----------|-------------|
| HDS SuperStores | 20 | 1,925 |
| Cimarron Manufacturing | 3 | 847 |
| MegaMarts | 14 | 2,156 |
| HDS Living | 8 | 1,329 |
| Property Group | 6 | 678 |
| HDS Civic Services | 11 | 742 |

> ⚠️ **Note:** The sample tenant totals (62 locations) are demo data. The actual portfolio (372 locations) is much larger.

---

## 🔧 Environment Variables

Required variables in `.env.local`:

```env
# Email Configuration
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
CONTACT_EMAIL=

# HDS.live Integration
HDS_API_ENDPOINT=
HDS_API_KEY=

# Optional
NEXT_PUBLIC_SITE_URL=https://www.hdsok.com
```

See `env.local.example` for the full template.

---

## 🚀 Deployment

### Automatic Deployment
- Push to `main` branch triggers Vercel deployment
- Build command: `npm run build`
- Output: Static + Server functions

### Manual Commands
```bash
# Development
npm run dev

# Build
npm run build

# Start production locally
npm run start
```

---

## 📝 Content Guidelines

### Messaging Focus
HDS is a **vendor-management partner**, NOT a self-performing contractor.

✅ **Do say:**
- "We coordinate licensed vendors"
- "Managed dispatch services"
- "Vendor network management"
- "Portfolio-wide coordination"

❌ **Don't say:**
- "We perform maintenance"
- "Our technicians"
- "We fix/repair"

### Pages to Maintain
1. **Home** - Hero, features, portfolio preview
2. **About** - Company story, vendor-management focus
3. **Services** - 5 service category pages
4. **Vendors** - Vendor network information
5. **HDS Console** - Platform marketing page
6. **Contact** - Contact form + service request link

---

## 🔗 Related Files

| File | Purpose |
|------|---------|
| `.github/agents/hdsok.com MyHomie.agent.md` | Copilot agent instructions |
| `README.md` | Developer setup guide |
| `DEPLOYMENT.md` | Deployment procedures |
| `env.local.example` | Environment variable template |

---

## ✅ Maintenance Checklist

When opening this project, verify:

- [ ] Service request links point to `https://www.hds.live/service-request`
- [ ] No JotForm links exist in codebase
- [ ] Portfolio numbers match HDS Console data
- [ ] Environment variables are configured
- [ ] Vercel deployment is connected
- [ ] This INSTRUCTIONS.md file is up to date

---

## 📞 Support

- **Repository:** https://github.com/dstogsdill1/hdsok.com
- **Live Site:** https://www.hdsok.com
- **HDS Console:** https://www.hds.live

---

*This file should be updated whenever the project structure, URLs, or requirements change. It serves as the single source of truth for the HDSOK.com marketing website.*
