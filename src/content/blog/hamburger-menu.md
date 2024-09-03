---
title: 基本のハンバーガーメニューのつくりかた
tags:
  - Web/menu
categories:
  - menu
pubDate: 2024-08-28
upDate: 2024-08-30
image: noimage.png
description:
author: caori
isDraft: false
cDate: 2024-08-27
---

ハンバーガーメニュー周りの実装。環境に左右されず使える基本的なものを。

- html,css,javascriptを使用
- アイコンはfontawesome
- アイコンクリックで回転アニメーション

chatGPTに手伝ってもらいつつ適宜変更しました。
色やサイズ等のデザインはchatGPT先生の赴くままのため適宜変更するべしで。

## 基本構造

### html

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    />
  </head>
  <body>
       
    <div id="menuToggle">
              <i id="menuIcon" class="fas fa-bars"></i>    
    </div>
       
    <ul id="menuList">
             
      <li><a href="#">Home</a></li>
             
      <li><a href="#">About</a></li>
             
      <li><a href="#">Services</a></li>
             
      <li><a href="#">Contact</a></li>
         
    </ul>
  </body>
</html>
```

### CSS

```css
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: #f3f4f6; /* bg-gray-100 */
}

#menuToggle {
    z-index: 20;
    color: #f1f5f9; /* text-slate-100 */
    width: 3rem; /* w-12 */
    height: 3rem; /* h-12 */
    cursor: pointer;
    position: fixed;
    right: 1rem; /* right-4 */
    top: 1rem; /* top-4 */
}

#menuIcon {
    z-index: 30;
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    font-size: 1.875rem; /* text-3xl */
    transition: all 0.5s ease;
    transform: rotate(0deg);
    transform-origin: center;
}

#menuList {
    display: none; /* hidden */
    position: fixed;
    z-index: 10;
    background-color: rgba(158, 158, 158, 0.8); /* bg-stone-300/[.8] */
    min-height: 100vh;
    right: 0;
    top: 0;
    padding-top: 5rem; /* pt-20 */
    padding-left: 2rem;
    padding-right: 2rem;
}

  #menuList a {
    display: block;
    font-size: 1.125rem; /* text-lg */
    color: #374151; /* text-gray-800 */
    transition: color 0.2s ease; /* transition-colors */
}

#menuList a:hover {
    color: #3b82f6; /* hover:text-blue-500 */
}

@media (min-width: 768px) {
    #menuToggle {
        display: none; /* md:hidden */
    }

    #menuList {
        display: block;
        position: relative;
        background-color: transparent;
        min-height: auto;
        padding: 1rem; /* md:p-4 */
    }

    #menuList a {
        font-size: 1.5rem; /* md:text-2xl */
        color: #ffffff; /* md:text-white */
    }
}
```

### JavaScript

```javascript
document.getElementById('menuToggle').addEventListener('click', function () {
  this.classList.toggle('active')
  const icon = document.getElementById('menuIcon')

  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-xmark')
    icon.style.transform = 'rotate(180deg)'
  } else if (icon.classList.contains('fa-xmark')) {
    icon.classList.replace('fa-xmark', 'fa-bars')
    icon.style.transform = 'rotate(0deg)'
  }

  const menuList = document.getElementById('menuList')
  if (menuList.style.display === 'none' || menuList.style.display === '') {
    menuList.style.display = 'block'
  } else {
    menuList.style.display = 'none'
  }
})
```

## Tailwind CSS を使用する場合

CSSを使わずhtmlのクラスにスタイルを入れていく。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="flex flex-col items-center h-screen bg-gray-100">
    <div
      id="menuToggle"
      class="z-20 text-slate-100  w-12 h-12 cursor-pointer fixed right-4 top-4 md:hidden"
    >
      <i
        id="menuIcon"
        class="z-30 fas menu-icon fa-bars absolute top-0 right-0 block text-3xl transition-all transform rotate-0  origin-center duration-500"
      ></i>
    </div>

    <ul
      id="menuList"
      class="hidden fixed z-10 bg-stone-300/[.8] min-h-full right-0 top-0 pt-20  px-8 md:block md:w-full md:relative md:min-h-fit md:p-4"
    >
      <li>
        <a
          href="#"
          class="text-lg md:text-2xl text-gray-800 md:text-white hover:text-blue-500 transition-colors"
          >Home</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-lg md:text-2xl text-gray-800 md:text-white hover:text-blue-500 transition-colors"
          >About</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-lg md:text-2xl text-gray-800 md:text-white hover:text-blue-500 transition-colors"
          >Services</a
        >
      </li>
      <li>
        <a
          href="#"
          class="text-lg md:text-2xl text-gray-800 md:text-white hover:text-blue-500 transition-colors"
          >Contact</a
        >
      </li>
    </ul>

    <script>
      document
        .getElementById('menuToggle')
        .addEventListener('click', function () {
          this.classList.toggle('active')
          const icon = document.getElementById('menuIcon')

          if (icon.classList.contains('fa-bars')) {
            icon.classList.replace('fa-bars', 'fa-xmark')
            icon.classList.replace('rotate-0', 'rotate-180')
          } else if (icon.classList.contains('fa-xmark')) {
            icon.classList.replace('fa-xmark', 'fa-bars')
            icon.classList.replace('rotate-180', 'rotate-0')
          }

          document.getElementById('menuList').classList.toggle('hidden')
        })
    </script>
  </body>
</html>
```

JavaScriptもhtml内に書いてるver。

ハンバーガーメニューは使用頻度高いのでいちいち書くのは大変なので書き残したのでした。

なお、アニメーションが動かない（アイコンが回転しない）理由として、リセットCSSとOSの視覚効果を減らす設定の影響があった。

[CSSのtransformとかがリセットCSSで効かなかった](resetcss-animation)

[[resetcss-animation]]
