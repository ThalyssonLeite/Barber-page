const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('#header nav .toggle');

toggle.forEach(element => {
    element.addEventListener('click', () => nav.classList.toggle('show'));
});

const menuLinks = document.querySelectorAll('#header nav ul li a');

menuLinks.forEach(element => {
    element.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});

const header = document.querySelector('#header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= headerHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
});

//TESTIMONIAL SWIPER LIB
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
})

//SCROLLREVEAL LIB
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
});

scrollReveal.reveal(`
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .cards, #services .card-wrapper,
    #contact header, #contact .links, #contact .links .logo, #contact .link li,
    #footer a, #footer .text, #footer .links
`, { interval: 100 });