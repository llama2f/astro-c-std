---
title: リセットCSSが原因でアニメーションが効かなかった
tags:
  - Web
  - Web/CSS
categories:
  - web
pubDate: 2024-08-27
upDate: 2024-08-27
image: noimage.png
description: 
author: caori
isDraft: false
cDate: 2024-08-27
---

CSSのtransitionやtransformが効かずに困ったご、リセットCSSが影響していた。

実際はリセットCSS自体が悪いのではなく、OSで余計なアニメーションを表示しない設定にしているとアニメーションしないスタイルで上書きされる仕様。要は自分の環境のせいである。

今回使っていたのはmodern-css-resetだったが、他のリセットCSSでもあり得るだろう。

https://github.com/Andy-set-studio/modern-css-reset

アニメーションの設定なんてすっかり忘れていたので悩んでしまった。
