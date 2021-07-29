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
function changeHeaderWhenScroll() {
    
    if (window.scrollY >= headerHeight) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
}


const backToTop = document.querySelector('.back-to-top');
function changeBackToTopButton() {
    
    if (window.scrollY >= 560) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
}

const sections = document.querySelectorAll('.section');
function activateMenuAtCurrentSection() {
    const checkpoint = (innerHeight / 2) + scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const upperLimit = checkpoint >= sectionTop;
        const lowerLimit = checkpoint <= sectionTop + sectionHeight;

        if (upperLimit && lowerLimit) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
        }
    });
}



window.addEventListener('scroll', () => {
    changeHeaderWhenScroll();
    changeBackToTopButton();

    //if (largeScreen) {
    activateMenuAtCurrentSection();
    //}
});

//TESTIMONIAL SWIPER LIB
const largeScreen = screen.width >= 990;

function slidesPerDeviceWidth() {

    if (largeScreen) {
        return 2
    } else {
        return 1
    }
}

const swiper = new Swiper('.swiper-container', {
    slidesPerView: slidesPerDeviceWidth(),
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

function scrollRevealDeviceWidth() {
    if (!largeScreen) {
        return `
        #home .image, #home .text,
        #about .image, #about .text,
        #services header, #services .cards, #services .card-wrapper,
        #contact header, #contact .links, #contact .links .logo, #contact .link li,
        #footer a, #footer .text, #footer .links
    `
    } else {
        return `
        #home,
        #about,
        #services header, #services .cards, #services .card-wrapper,
        #contact header, #contact .links, #contact .links .logo, #contact .link li,
        #footer a, #footer .text, #footer .links
    `
    }
}

scrollReveal.reveal(scrollRevealDeviceWidth(), { interval: 100 });