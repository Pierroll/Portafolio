import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://pmorris-portafolio.onrender.com',
  integrations: [
    sitemap()
  ]
});