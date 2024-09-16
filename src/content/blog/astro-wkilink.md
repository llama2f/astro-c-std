---
title: AstroでObsidianのwikiリンク形式を使用する
tags:
  - Web
  - astro
categories:
  - web
pubDate: 2024-08-30
upDate: 2024-08-30
image: noimage.png
description: 
author: caori
isDraft: false
cDate: 2024-08-30
---

obsidianで書いたmdファイルをAstroでブログに変換する際。wikilink形式を[remark-wiki-link](https://github.com/datopian/datahub/tree/8a4ec39d25d10a859dc7ed3e3a578882a63cc95a/packages/remark-wiki-link)で変換して使用したいと思ったがにっちもさっちもいかなかった。

こちらのissueを参考にremark-wiki-linkのindex.jsを書き換えたらなんとか成功した。

https://github.com/datopian/datahub/issues/1059

```javascript

  function exitWikiLink(token) {
    
    //var wikiLink = this.exit(token);     削除して以下を追加
    var wikiLink = top(this.stack)
    
    /* この範囲削除して下を追加
    var _wikiLink$data = wikiLink.data,
      isEmbed = _wikiLink$data.isEmbed,
      target = _wikiLink$data.target,
      alias = _wikiLink$data.alias;
    */

	//ここから追加
   const {
    data: {isEmbed, target, alias},
    } = wikiLink;
    
	this.exit(token);
	//ここまで

```

exitの返り値がなくなったことよるにエラーとのことで別のかたちで追加しているみたい。
Astro３から４にバージョンアップに伴って出たエラーらしい？

ちなみにastro.config.mjsはこんな感じ。

```javascript
import wikiLinkPlugin from '@portaljs/remark-wiki-link'  

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [
      wikiLinkPlugin,
    ],
  },
})
```
