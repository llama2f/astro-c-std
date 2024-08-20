import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import wikiLinkPlugin from '@portaljs/remark-wiki-link'
import { defineConfig } from 'astro/config'
import remarkLinkCard from 'remark-link-card'

const pageUrlPathPrefix = 'blog/'

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
      [
        remarkLinkCard,
        {
          cache: true,
          shortenUrl: true,
        },
      ],
      [
        wikiLinkPlugin,
        {
          pathFormat: 'obsidian-absolute',
          // generate url of the linked page.
          // here `slug` would be "Page Name" for wiki link [[Page Name]].
          wikiLinkResolver: (slug) => [pageUrlPathPrefix + slug],
        },
      ],
    ],
  },
})
