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
}

burger.addEventListener('click', toggleMenu);




//Slider menu

const paramsBtn = document.querySelector('#params-btn');
const paramsList = document.querySelector('#params-list');
let computedStyles = getComputedStyle(paramsList);

paramsBtn.addEventListener('mouseover', function(event) {
    event.preventDefault();
    paramsList.style.display = 'block';

    paramsList.addEventListener('mouseleave', function() {
        paramsList.style.display = 'none';
        });
});


