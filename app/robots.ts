import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/thank-you', '/booking-confirmed', '/404'],
      },
    ],
    sitemap: 'https://www.hdsok.com/sitemap.xml',
  }
}
