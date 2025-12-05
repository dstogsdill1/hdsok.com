/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.hdsok.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.hdsok.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/services')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/contact') {
      priority = 0.9;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
