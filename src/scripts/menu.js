document.getElementById('hamburger').addEventListener('click', function () {
  this.classList.toggle('active')

  const icon = document.getElementById('hamburgerIcon')
  if (icon.classList.contains('fa-bars')) {
    icon.classList.replace('fa-bars', 'fa-xmark')
    icon.classList.replace('rotate-0', 'rotate-180')
  } else if (icon.classList.contains('fa-xmark')) {
    icon.classList.replace('fa-xmark', 'fa-bars')
    icon.classList.replace('rotate-180', 'rotate-0')
  }

  document.getElementById('navLinks').classList.toggle('hidden')
  document.getElementById('navLinks').classList.toggle('flex')
})
