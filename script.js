const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function navtoggle() {
    nav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}
btn.addEventListener('click', navtoggle);

