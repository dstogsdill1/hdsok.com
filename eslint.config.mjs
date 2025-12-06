import nextConfig from 'eslint-config-next/core-web-vitals.js';

const config = [
  ...nextConfig,
  {
    ignores: ['.vercel/**'],
  },
];

export default config;
