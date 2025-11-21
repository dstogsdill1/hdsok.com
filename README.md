# Homeland Development Services Website

A modern, responsive Next.js website for Homeland Development Services, LLC - a full-service facility management company serving commercial properties across Oklahoma.

## Features

- **Modern Dark Theme**: Professional dark color scheme with neon green accents
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Service Pages**: Comprehensive pages for all HDS service offerings
- **Contact Form**: Integrated contact form with API route for email submissions
- **Real-time Updates**: Information about the HDS Console platform for work order management
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Built with Next.js 16 for optimal speed and performance

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component
- **Icons**: SVG icons

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd "c:\Users\DarrinStogsdill\OneDrive - Homeland Development Services LLC\HDS_LLC\HDS_Console\hdsok.com"
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
hdsok.com/
├── app/                        # Next.js app directory
│   ├── about/                 # About HDS page
│   ├── api/
│   │   └── contact/          # Contact form API route
│   ├── contact/              # Contact page with form
│   ├── hds-console/          # HDS Console information page
│   ├── services/             # Services pages
│   │   ├── mechanical-refrigeration/
│   │   ├── facility-maintenance/
│   │   ├── construction-special-projects/
│   │   ├── design-build-consulting/
│   │   └── energy-management-sustainability/
│   ├── vendors/              # Vendor network page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   └── Layout.tsx            # Main layout component with nav/footer
├── public/
│   └── images/               # Logo and image assets
│       ├── hds_logo_lime_shadow_vibrant.png
│       ├── HDS_Live_logo.jpg
│       ├── HDS_Logo_Inverted_HighRes.png
│       ├── HDS_Watermark.png
│       └── pagelogo.png
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## Adding Images

The site includes placeholder divs for screenshots and additional images. To add your own images:

1. Place image files in the `public/images/` directory
2. Update the `src` attributes in the relevant component files
3. Recommended images to add:
   - Dashboard screenshot: `public/images/dashboard.png` (for HDS Console section on home page)
   - Additional service-specific images as needed

## Contact Form Setup

The contact form currently logs submissions to the console. To enable email functionality:

1. Install an email service package (e.g., Nodemailer, SendGrid, Resend)
2. Add environment variables for email configuration in `.env.local`:
```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
```
3. Uncomment and configure the email sending code in `app/api/contact/route.ts`

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Visit [vercel.com](https://vercel.com) and sign up/log in

3. Click "New Project" and import your repository

4. Configure your project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (leave as default)

5. Add environment variables if using email functionality

6. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

### Custom Domain Setup

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add your custom domain (e.g., hdsok.com)
4. Follow Vercel's instructions to configure DNS records

### Other Deployment Options

- **Netlify**: Similar process to Vercel
- **AWS Amplify**: Deploy through AWS console
- **Self-hosted**: Run `npm run build` then `npm run start` on your server

## Color Scheme

The site uses a dark theme with neon green accents:

- **Background**: `#0a0a0a` (dark-bg)
- **Card Background**: `#1a1a1a` (dark-card)
- **Navigation**: `#1f1f1f` (grey-nav)
- **Neon Green**: `#00ff41` (neon-green)
- **Neon Green Dark**: `#00cc33` (neon-green-dark)
- **Borders**: `#2a2a2a` (dark-border)

## Pages

- **Home** (`/`): Hero, services overview, work order info, service request options
- **About HDS** (`/about`): Company information and mission
- **Services** (`/services`): Complete service suite overview
  - Mechanical & Refrigeration
  - Facility Maintenance
  - Construction & Special Projects
  - Design-Build & Consulting
  - Energy Management & Sustainability
- **Vendors** (`/vendors`): Vendor network information and application process
- **HDS Console** (`/hds-console`): Platform features and access information
- **Contact** (`/contact`): Contact form and information

## Support

For questions or issues with the website, contact:
- Email: info@hdsok.com
- Phone: (405) 546-2820

## License

Copyright © 2025 Homeland Development Services, LLC. All rights reserved.
