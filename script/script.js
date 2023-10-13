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




//Slider menu

let paramsBtn = document.querySelector('#params-btn');
let paramsList = document.querySelector('#params-list');
let computedStyles = getComputedStyle(paramsList);


function openParamsMenu(event) {
    event.preventDefault();
    paramsList.style.display = 'block';

    paramsBtn.addEventListener('mouseleave', function(e) {
        if ((e.target === paramsBtn) && (e.relatedTarget !== paramsList)) {
            paramsList.style.display = 'none';
        }
    });
}

function closeParamsMenu(event) {
    paramsList.style.display = 'none';
}

paramsBtn.addEventListener('mouseover', openParamsMenu);
paramsList.addEventListener('mouseleave', closeParamsMenu);
