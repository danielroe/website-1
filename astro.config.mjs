import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import vercel from "@astrojs/vercel/serverless";
import { rehypePlugins, remarkPlugins } from "./config/plugins";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: "https://vorillaz.com",
  prefetch: true,
  markdown: {
    smartypants: true,
    drafts: true,
    syntaxHighlight: false,
    extendDefaultPlugins: true,
    rehypePlugins,
    remarkPlugins,
  },
  integrations: [mdx(), svelte({ preprocess: [] }), sitemap(), db()],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  output: "server",
  adapter: vercel(),
});
