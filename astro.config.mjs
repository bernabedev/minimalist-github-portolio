// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

import { loadEnv } from "vite";
const { HOST } = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), "");

console.log({ env: HOST })

// https://astro.build/config
export default defineConfig({
  site: `https://${HOST ?? 'bernabe.dev'}`,
  integrations: [tailwind(), sitemap()]
})