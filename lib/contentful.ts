import { createClient } from 'contentful';
import type { Entry, EntryCollection } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN || '',
  host: 'preview.contentful.com',
});

function getClient(preview = false) {
  return preview ? previewClient : client;
}

// Fetch hero content for homepage
export async function getHeroContent(preview = false) {
  try {
    const entries = await getClient(preview).getEntries({
      content_type: 'hero',
      limit: 1,
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error('Error fetching hero content:', error);
    return null;
  }
}

// Fetch all services
export async function getServices(preview = false) {
  try {
    const entries = await getClient(preview).getEntries({
      content_type: 'service',
      order: ['-fields.priority'],
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// Fetch a single service by slug
export async function getServiceBySlug(slug: string, preview = false) {
  try {
    const entries = await getClient(preview).getEntries({
      content_type: 'service',
      'fields.slug': slug,
      limit: 1,
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// Fetch testimonials
export async function getTestimonials(preview = false, limit = 6) {
  try {
    const entries = await getClient(preview).getEntries({
      content_type: 'testimonial',
      order: ['-fields.featured', '-sys.createdAt'],
      limit,
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

// Fetch featured content for homepage
export async function getFeaturedContent(preview = false) {
  try {
    const [hero, services, testimonials] = await Promise.all([
      getHeroContent(preview),
      getServices(preview),
      getTestimonials(preview, 3),
    ]);

    return {
      hero,
      services: services.slice(0, 6), // Featured services
      testimonials,
    };
  } catch (error) {
    console.error('Error fetching featured content:', error);
    return {
      hero: null,
      services: [],
      testimonials: [],
    };
  }
}

// Fetch page content by slug
export async function getPageContent(slug: string, preview = false) {
  try {
    const entries = await getClient(preview).getEntries({
      content_type: 'page',
      'fields.slug': slug,
      limit: 1,
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}
