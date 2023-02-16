const menu = document.getElementsByClassName('menu')[0]
const links = document.getElementsByClassName('navbar-links')[0]

menu.addEventListener('click', () => {
    links.classList.toggle('active')
})
