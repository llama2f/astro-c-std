---
title: 【寒い】エアコン過冷却？冷えすぎる原因と対策
pubDate: 2023-08-06
categories:
  - electronics
tags:
  - Electronics/Aircon
  - DIY
  - Temperature-Humidity
image: ./images/20230806_124213_0000.jpg
relatedPosts:
isDraft: false
---

![霧ヶ峰MSZ-ZW565S-W](./images/PXL_20230714_023100043-01-1024x576.jpeg)

リビングにある 200V エアコン(霧ヶ峰 MSZ-ZW565S-W)が寒い。

猛暑の折、冷えないよりマシとはいえ明らかに挙動がおかしいです。設定温度を 29℃、30℃ にしても 26〜7℃ にしてくれます。頑張り過ぎなんです。昼間ガンガンに冷えて、夜は逆にあまり効かない(というか戻る)様子です。

涼しくなるのは構わないですが、指示してないことをされるのは困ります。真夏に着る毛布着てるとかおかしい。

<!--more-->

## 冷えすぎる理由を推測

まず原因を考えました。

1. エアコン・リモコンが壊れている
2. 家の断熱性能が高すぎる
3. エアコンの性能が高すぎる
4. エアコンの温度センサーがおかしい
5. そもそもエアコンはそういうもの

1 はとりあえず動いているので除外。

2 は住宅性能的に考えられないので除外。

3 は 200V ということもあり少し考えられるものの、冬に効きすぎると感じたこともなく。可能性は低そう。

4 は霧ヶ峰のセンサーを疑うのもどうかと思いつつも可能性あり。

5 は元も子もないので除外。

というわけで、冷えすぎる原因推測はエアコンのパワーが強すぎる or センサーの異常の 2 つに絞られました。

## エアコン近くの給気口原因説

![給気口からの暑い外気がエアコンにあたる](./images/PXL_20230803_233641854-01-1024x576.jpeg)

気になったのが 24 時間換気(第 3 種)の給気口。

エアコンのある壁の左側、吹出口のほぼ真下に給気口があります。外気が直接入ってくるのでもしかして影響している？

調べてみると、エアコンの冷えすぎに対して言及していらっしゃる方がおられました。

https://www.unagiworks.net/blog/note/2019/08/17/717/

https://bohemia.hatenablog.com/entry/2018/09/06/211250

お二方とも窓とカーテン間の熱気がエアコンの温度センサーに影響して冷えすぎていたということです。更に日中過冷房になると。お二方の記事を拝見し、温度センサーが実際の室温とは異なる値を検知する場合があることがわかりました。

外的要因によりセンサーがうまく働かないことがあるなら、給気口原因説も十分にありえます。

給気口から入った外気は暖かいため(上画像のみはりん棒でも 31.9℃)上に昇りエアコンにあたる。エアコンの温度センサーが外気を検知し、室温は下がっているにも関わらず冷えない冷えない！と頑張って働く。

![霧ヶ峰説明書](./images/Screenshot_20230805-182908-300x106.png)

重要なのが霧ヶ峰のセンサー位置。ムーブアイは右端に露出していますが、説明書によると温度センサーは左側にあるようです。カバー表面、カバー開けてもそれらしきものが見当たらないので内部にあるのかもしれません。※メーカー、機種による

ムーブアイをオンにしても冷えすぎは変わらなかったので、温度センサーは重要なようです。

## エアコン冷えすぎ実際の対策

給気口からの外気が問題なら、外気とセンサーが触れないようにせねばなりません。

### 試作 1 号：スタイロフォームを乗せてみる

![給気口の上にスタイロフォームを乗せる](./images/PXL_20230804_025053924-1024x576.jpg)

試しに余っていたスタイロフォームを給気口の上に乗せてみました。

給気口上の温度は 28.6℃。対策なしの 31.9℃ に比べると大分遮熱できています。

![サーモカメラで外気の遮断を確認](./images/FLIR_20230804_113628_5102-1024x576.jpg)

サーモカメラで撮った様子。給気口からの熱が上に昇り、スタイロで熱が区切られているのがわかります。しかしまだ右側の隙間から漏れて上に行ってしまってますね。

これだけでもかなり改善されました。冷気出過ぎ感が抑えられています。

### 試作 2 号：スタイロ+アルミシート

スタイロを乗せただけでは隙間から熱気が漏れていました。そこをカバーすべく適当試作 2 号です。

![スタイロフォーム](./images/PXL_20230804_025509000-1024x576.jpg)

スタイロをなるべく真っ直ぐ切って…（歪んでる）

![スタイロフォームにアルミシートを巻く](./images/PXL_20230804_025954088-1024x576.jpg)

アルミシートで巻くだけ。アルミシートは 100 均の保温用だったかと思います。

これだけですが、アルミシートのクッション性が加わって壁に密着しやすくなったように思います。

![給気口の上にアルミシート巻いたスタイロを乗せる](./images/PXL_20230804_030220052-1024x576.jpg)

両面テープで壁と給気口にくっつけます。熱気がなるべく上にいかんように、と。

![エアコン真下のさらなる外気遮断を確認](./images/PXL_20230804_045348066-1024x576.jpg)

更にやりすぎですが給気口の右側を養生テープで塞いでみました。みはりん棒 28.3℃。こうなると給気口の左側しか機能しなくなるので、換気量に影響が出ると思います。諸刃の剣。初心者にはお勧めできない。

### サーキュレーターを使えばいいのでは…

今更ですがサーキュレーターを給気口に向けて熱気を散らせば効果出そうですね。変に給気口塞ぐより簡単だし安全。

## 対策の結果

![サーモカメラで壁際の外気漏れないことも確認](./images/FLIR_20230806_010456_773-1024x575.jpg)

お試作 2 号の結果、28.3℃ と更に下げることができました。熱気はエアコン真下に行かないよう遮断され、吹出口側から抜けるように。冷房も設定温度にかなり忠実になってきたと感じます。少なくとも 29℃ や 30℃ にしてもヒエヒエにはまずなりません。

給気口からの熱気で温度センサーがうまくはたらかない現象は外気が暑いほど顕著になります。猛暑だからこそ気がついたのでしょう。

## エアコン設置の際は給気口とセンサーの位置にも気を配りたい

そもそもわが家の給気口の位置と霧ヶ峰のセンサー位置が絶妙に噛み合ってしまったのが問題です。給気口がもう少しエアコンより離れていたら。センサーが右側にあったら。このような現象は起こらなかったでしょう。

温湿度管理的にエアコンの吹出口近くに給気口を設けることがベターであるとは言われているようですが、センサーに関しても頭の片隅に入れておいたほうが良さそうです。

ということで、気がつけば当たり前のようなことではありました。ありがとうございました。