document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('active')

  const icon = document.getElementById('hamburgerIcon')
  const nav = document.getElementById('navLinks')

  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-xmark')
    icon.classList.replace('rotate-0', 'rotate-180')
    nav.classList.replace('translate-x-full', 'translate-x-0')
  } else if (icon.classList.contains('fa-xmark')) {
    icon.classList.replace('fa-xmark', 'fa-bars')
    icon.classList.replace('rotate-180', 'rotate-0')
    nav.classList.replace('translate-x-0', 'translate-x-full')
  }
})
