// @ts-check
import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';
import rehypeHighlight from 'rehype-highlight';
import { loadEnv } from "vite";
const { HOST } = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: `https://${HOST ?? 'bernabe.dev'}`,
  integrations: [tailwind(), sitemap(), mdx(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  },

  markdown: {
    rehypePlugins: [rehypeHighlight],
  },

  adapter: vercel()
})