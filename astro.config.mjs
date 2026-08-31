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
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['sans-serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
      {
          // Serif display face for the academic look (name + headings).
          provider: fontProviders.google(),
          name: 'Newsreader',
          cssVariable: '--font-serif',
          fallbacks: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
          weights: [400, 500, 600],
          styles: ['normal', 'italic'],
      },
	],

  vite: {
    plugins: [tailwindcss()],
  },
});