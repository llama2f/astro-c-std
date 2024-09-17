import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import wikiLinkPlugin from '@portaljs/remark-wiki-link';
import { defineConfig } from 'astro/config';
import remarkLinkCard from 'remark-link-card';

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://c-std.com',
  integrations: [preact(), sitemap(), mdx(), tailwind(), partytown({
    config: {
      forward: ['dataLayer.push']
    }
  }), playformCompress()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/_mixin.scss";`
        }
      }
    }
  },
  markdown: {
    remarkPlugins: [wikiLinkPlugin, [remarkLinkCard, {
      cache: true,
      shortenUrl: true
    }]]
  }
});