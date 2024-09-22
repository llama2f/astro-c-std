//remark-link-card画像をlazy付与

const img = document.getElementsByClassName('rlc-image')

for(let i = 0; i < img.length; i++){
  img[i].setAttribute('loading', 'lazy')
  console.log(i)
}


