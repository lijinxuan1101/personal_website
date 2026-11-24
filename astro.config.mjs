// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://lijinxuan1101.com',
  integrations: [mdx(), sitemap()],

  devToolbar: { enabled: false },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'EB Garamond',
      cssVariable: '--font-serif',
      fallbacks: ['Garamond', 'Georgia', 'Times New Roman', 'serif'],
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});