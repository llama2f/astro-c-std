import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import wikiLinkPlugin from '@portaljs/remark-wiki-link'
import { defineConfig } from 'astro/config'
import remarkLinkCard from 'remark-link-card'

// https://astro.build/config
export default defineConfig({
  site: 'https://c-std.com',
  integrations: [preact(), sitemap(), mdx(), tailwind()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "src/styles/_mixin.scss";`,
        },
      },
    },
  },
  markdown: {
    remarkPlugins: [
      wikiLinkPlugin,
      [
        remarkLinkCard,
        {
          cache: true,
          shortenUrl: true,
        },
      ],
    ],
  },
})
