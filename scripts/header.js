const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');
const header = document.getElementsByTagName("header");
const navLinks = nav.querySelectorAll('a')

const openOrCloseMenu = () => { //abre o nav em dispositivos mobile
    btnMenu.classList.toggle('active');
    nav.classList.toggle('active');
}

window.addEventListener("scroll", () => { //diminui o header quando scroll a tela
    if (window.scrollY > 10)
        header[0].classList.remove("transparent");
    else {
        header[0].classList.add("transparent");
    }
});

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active') &&
            btnMenu.classList.contains('active'))
            openOrCloseMenu();
    })
});