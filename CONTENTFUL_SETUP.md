# Contentful CMS Setup Guide

Your HDS website is now configured to use Contentful CMS for dynamic content management! 🚀

## What's Been Added

### 1. **Contentful SDK Integration**
- Installed `contentful` package
- Created `lib/contentful.ts` with client configuration and helper functions
- Type-safe content fetching with TypeScript

### 2. **Reusable Components**
- `components/ServiceCard.tsx` - Dynamic service display
- `components/TestimonialCard.tsx` - Customer testimonial cards with ratings

### 3. **Content Types**
Your site supports these content models:

#### **Hero** (homepage banner)
- Title, subtitle, description
- Primary & secondary button links
- Background image (optional)

#### **Service**
- Title, slug, description
- Icon image
- Features list
- Benefits list
- Priority (for ordering)
- Featured flag
- Detailed description
- Custom CTA text & link

#### **Testimonial**
- Customer name, company, position
- Review content
- Star rating (1-5)
- Featured flag
- Avatar image (optional)

#### **Page**
- Title, slug, description
- Rich text content
- SEO fields
- Featured image

### 4. **Environment Variables**
Added to `.env.local` and `env.local.example`:
```
CONTENTFUL_SPACE_ID=<YOUR_SPACE_ID>
CONTENTFUL_ACCESS_TOKEN=<YOUR_ACCESS_TOKEN>
CONTENTFUL_PREVIEW_ACCESS_TOKEN=<YOUR_PREVIEW_TOKEN>
```

### 5. **Image Optimization**
Configured Next.js to optimize images from Contentful CDN (`images.ctfassets.net`)

## Getting Your Contentful Credentials

1. **Go to Contentful Dashboard**: https://app.contentful.com
2. **Select your space** (or create a new one)
3. **Get Space ID**: 
   - Settings → General settings → Space ID
4. **Get Access Tokens**:
   - Settings → API keys → Content delivery / preview tokens
   - Copy the "Content Delivery API access token"
   - Copy the "Content Preview API access token"

## Setting Up Content in Contentful

### Create Content Models

Go to **Content model** in your Contentful space and create these content types:

#### 1. **Hero** Content Type
- ID: `hero`
- Fields:
  - `title` (Short text, required)
  - `subtitle` (Short text, required)
  - `description` (Long text, required)
  - `primaryButtonText` (Short text)
  - `primaryButtonLink` (Short text)
  - `secondaryButtonText` (Short text)
  - `secondaryButtonLink` (Short text)
  - `backgroundImage` (Media, one file)

#### 2. **Service** Content Type
- ID: `service`
- Fields:
  - `title` (Short text, required)
  - `slug` (Short text, required, unique)
  - `description` (Long text, required)
  - `icon` (Media, one file)
  - `features` (Short text, list)
  - `benefits` (Short text, list)
  - `priority` (Integer, required)
  - `featured` (Boolean)
  - `detailedDescription` (Long text)
  - `ctaText` (Short text)
  - `ctaLink` (Short text)

#### 3. **Testimonial** Content Type
- ID: `testimonial`
- Fields:
  - `customerName` (Short text, required)
  - `company` (Short text)
  - `position` (Short text)
  - `content` (Long text, required)
  - `rating` (Integer, required, validation: 1-5)
  - `featured` (Boolean)
  - `avatar` (Media, one file)

#### 4. **Page** Content Type
- ID: `page`
- Fields:
  - `title` (Short text, required)
  - `slug` (Short text, required, unique)
  - `description` (Long text)
  - `content` (Rich text)
  - `seoTitle` (Short text)
  - `seoDescription` (Long text)
  - `featuredImage` (Media, one file)

## Using Contentful in Your Pages

### Example: Fetch Services
```typescript
import { getServices } from '@/lib/contentful';
import ServiceCard from '@/components/ServiceCard';

export default async function ServicesPage() {
  const services = await getServices();
  
  return (
    <div>
      {services.map((service) => (
        <ServiceCard key={service.sys.id} service={service} />
      ))}
    </div>
  );
}
```

### Example: Fetch Hero Content
```typescript
import { getHeroContent } from '@/lib/contentful';

export default async function Home() {
  const hero = await getHeroContent();
  
  return (
    <div>
      <h1>{hero?.fields.title}</h1>
      <p>{hero?.fields.description}</p>
    </div>
  );
}
```

## Available Helper Functions

From `lib/contentful.ts`:
- `getHeroContent(preview?)` - Fetch hero section
- `getServices(preview?)` - Fetch all services
- `getServiceBySlug(slug, preview?)` - Fetch single service
- `getTestimonials(preview?, limit?)` - Fetch testimonials
- `getFeaturedContent(preview?)` - Fetch homepage content bundle
- `getPageContent(slug, preview?)` - Fetch any page by slug

## Next Steps

1. **Add your Contentful credentials** to `.env.local`
2. **Create content models** in Contentful (see above)
3. **Add content** to each content type
4. **Update pages** to fetch and display Contentful data
5. **Test locally** with `npm run dev`
6. **Deploy** and your content will be live!

## Benefits

✅ **Easy Content Management** - Update site content without code changes  
✅ **Preview Mode** - Preview unpublished content before going live  
✅ **Optimized Images** - Automatic image optimization via Contentful CDN  
✅ **Type Safety** - Full TypeScript support for content  
✅ **Flexible** - Add new content types easily  
✅ **Fast** - Built-in caching and CDN delivery  

## Need Help?

- Contentful Docs: https://www.contentful.com/developers/docs/
- Next.js + Contentful: https://github.com/contentful/contentful.js
