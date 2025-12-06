import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you', '/booking-confirmed', '/404'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/thank-you', '/booking-confirmed', '/404'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/thank-you', '/booking-confirmed', '/404'],
      },
    ],
    sitemap: 'https://www.hdsok.com/sitemap.xml',
    host: 'https://www.hdsok.com',
  }
}
