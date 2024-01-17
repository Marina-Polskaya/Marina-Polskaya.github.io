//Burger and fullscreen menu

let burger = document.querySelector('.burger');
let overlay = document.querySelector('.fullscreen-menu');
let body = document.querySelector('body');

let links = document.querySelectorAll('.fullscreen-menu__link');

links.forEach(function(elem){
    elem.addEventListener('click', toggleMenu);
})

function toggleMenu() {
    burger.classList.toggle('burger--active');
    overlay.classList.toggle('fullscreen-menu--active');
    body.classList.toggle('body--active-menu');
}

burger.addEventListener('click', toggleMenu);