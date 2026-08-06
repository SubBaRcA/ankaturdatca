// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Yayına çıkmadan önce gerçek alan adını doğrula.
const SITE = 'https://www.ankaturdatca.com';

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  image: {
    // astro:assets ile yerel görseller WebP'ye optimize edilir
    responsiveStyles: true,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
