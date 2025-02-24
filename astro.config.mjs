// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { loadEnv } from "vite";
import node from '@astrojs/node';
const { HOST } = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: `https://${HOST ?? 'bernabe.dev'}`,
  integrations: [tailwind(), sitemap()],

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },

  adapter: node({
    mode: 'standalone'
  })
})