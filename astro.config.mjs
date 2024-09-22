import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import wikiLinkPlugin from '@portaljs/remark-wiki-link';
import { defineConfig } from 'astro/config';
import remarkLinkCard from 'remark-link-card';
import rehypeAutoAds from 'rehype-auto-ads';
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
    
    rehypePlugins: [
            [
                rehypeAutoAds,
                {
                   adCode: '<!-- cst-display01 --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6941266528303285" data-ad-slot="4877856038"     data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>',
                   countFrom: 0,
                   paragraphInterval: 30,
                    // オプション
                }
            ]
        ],
    
    remarkPlugins: [wikiLinkPlugin, [remarkLinkCard, {
      cache: true,
      shortenUrl: true
    }]]
  }
});