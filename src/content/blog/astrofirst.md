---
title: astrofirst
tags:
  - ブログ
categories:
  - web
pubDate: 2024-08-14
upDate: 
image: noimage.png
description: 
author: caori
isDraft: true
---
# Astro を最初からやってみる

[Astro](https://astro.build/)
[初めての Astro プロジェクト | Docs](https://docs.astro.build/ja/tutorial/1-setup/2/)

チュートリアルを追ってみます

## 開発環境のセットアップ

導入済みの部分は飛ばして OK

### Node.js のインストール

javascript 実行用。以下でダウンロード
[Node.js — Run JavaScript Everywhere](https://nodejs.org/en/)

### corepack のインストール

パッケージ管理の管理。インストールの際は既存 npm や yarn を削除してから。

[Installation | Yarn](https://yarnpkg.com/getting-started/install)
コマンドプロンプトを管理者で実行後

```shell
corepack enable

yarn init -2
```

package.json に利用するパッケージ管理を記述する必要あり
なければ自動で追加される

```package.json
{
  "packageManager": "yarn@3.2.0"
}
```

### Git のインストール

バージョン管理。以下でダウンロード
[Install Git | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/install-git#windows)

### VSCode の拡張機能をインストールする

[Astro - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

## Astro で開発を始める

```shell
# create a new project with yarn
yarn create astro
```

サイト制作に必要な情報（フォルダ名、サンプルファイルを含めるかなど）を聞かれる
Empty、TypeScript なし、依存関係インストールで始めた

```shell
yarn run dev
```

dev サーバー起動するので確認

### インデックスページ編集

src/pages/index.astro を編集する

```html
<html lang="ja">
	<head>
		<meta charset="utf-8" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="viewport" content="width=device-width" />
		<meta name="generator" content="{Astro.generator}" />
		<title>Livingpokke</title>
	</head>
	<body>
		<h1>Hello World</h1>
	</body>
</html>
```

### Github に同期しておく

新しくリポジトリを作成し、

```bash
git remote add origin https://github.com/llama2f/livingpokke-astro.git
git branch -M main
git push -u origin main
```

エラーが出た場合は VSCode のソース管理から右の…アイコン、リモートを追加で URL を追加しコミット・プッシュする

## About,Blog ページを作成する

index.astro を src/pages/about.astro として複製保存し、内容を書き換える

```html
<body>
	<a href="/">ホーム</a>
	<a href="/about/">概要</a>
	<h1>私について</h1>
	<h2>... そして私の新しいAstroサイトについて！</h2>

	<p>
		私はAstroの入門チュートリアルを進めています。これは私のウェブサイトの2番目のページで、自分で作った初めてのページです！
	</p>

	<p>
		このサイトはチュートリアルを進めるにつれて更新されていきます。定期的にチェックして、私の旅の様子を見に来てください！
	</p>
</body>
```

同様に src/pages/blog.astro も作成する

```html
<body>
	<a href="/">ホーム</a>
	<a href="/about/">概要</a>
	<a href="/blog/">ブログ</a>

	<h1>私のAstroサイト</h1>
	<h1>私のAstro学習ブログ</h1>
	<p>ここには、私がAstroを学んでいく旅の様子を投稿します。</p>
</body>
```

## markdown でブログコンテンツを作成する

-   src/pages/posts フォルダを作成する
-   post-1.md という空のファイルを posts に追加
-   http://localhost:4321/posts/post-1 を確認
-   http://localhost:4321/posts/post-2 （存在しない）を確認

1 は空白ページ、2 は 404 が表示される

post-1.md の内容を書く

```md
---
title: '私の最初のブログ記事'
pubDate: 2022-07-01
description: 'これは私の新しいAstroブログの最初の記事です。'
author: 'Astro学習者'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Astroのロゴ。'
tags: ['astro', 'ブログ', '公開学習']
---

# 私の最初のブログ記事

投稿日: 2022-07-01

Astro の学習についての私の _新しいブログ_ へようこそ！ここでは、新しいウェブサイトを作りながら、私の学習過程を共有します。

## 達成したこと

1. **Astro のインストール**: まず、新しい Astro プロジェクトを作成し、オンラインアカウントを設定しました。

2. **ページの作成**: 次に、新しい`.astro`ファイルを作成し、それを`src/pages/`フォルダに配置することで、ページを作成する方法を学びました。

3. **ブログ記事の作成**: これが私の最初のブログ記事です！Astro ページと Markdown の記事があります！

## 次の目標

Astro チュートリアルを終え、さらに記事を追加していきます。これからもこの場所をご覧ください。
```

同様に post-2,post-3 を作成し、blog.astro に記事リンクタグを追加する

Could not find Sharp エラー
↓
yarn add sharp --ignore-engines で入れたら解決した
