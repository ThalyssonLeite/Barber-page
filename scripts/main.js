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