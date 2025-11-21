import type { Asset } from 'contentful';

// Simplified field interfaces for easier use
export interface HeroFields {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage?: Asset;
}

export interface ServiceFields {
  title: string;
  slug: string;
  description: string;
  icon?: Asset;
  features: string[];
  benefits: string[];
  priority: number;
  featured: boolean;
  detailedDescription?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface TestimonialFields {
  customerName: string;
  company?: string;
  position?: string;
  content: string;
  rating: number;
  featured: boolean;
  avatar?: Asset;
}

export interface PageFields {
  title: string;
  slug: string;
  description?: string;
  content: any;
  seoTitle?: string;
  seoDescription?: string;
  featuredImage?: Asset;
}

// Helper function to get image URL from Contentful asset
export function getImageUrl(asset: Asset | undefined): string | null {
  if (!asset?.fields?.file?.url) return null;
  return `https:${asset.fields.file.url}`;
}

// Helper function to get image alt text
export function getImageAlt(asset: Asset | undefined, fallback = ''): string {
  const title = asset?.fields?.title;
  const description = asset?.fields?.description;
  
  if (typeof title === 'string') return title;
  if (typeof description === 'string') return description;
  return fallback;
}
