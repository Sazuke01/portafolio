// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: '_astro/[name].[hash].js',
        },
      },
    },
  },
  site: 'https://sazuke01.github.io',
  base: '/portafolio',
});
