document.querySelector('.header_menu').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('show')
    document.querySelector('.header_menu').classList.toggle('active')
})
document.querySelectorAll('.navbar__link').forEach(e => e.addEventListener('click', () => {
    document.querySelector('.navbar').classList.remove('show')
    document.querySelector('.header_menu').classList.remove('active')
}))