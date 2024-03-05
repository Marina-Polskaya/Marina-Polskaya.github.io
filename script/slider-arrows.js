//Arrows (768px)

let leftArrowDiv = document.querySelector('.arrow-left');
let rightArrowDiv = document.querySelector('.arrow-right');
let slideImgBox = document.querySelectorAll('.slide__img-container');
let sliderBox = document.querySelector('#slider-container');


if ((window.matchMedia("(min-width: 481px)").matches) & (window.matchMedia("(max-width: 768px)").matches)) {

    slideImgBox.before(leftArrowDiv);
    slideImgBox.after(rightArrowDiv);

}

if (window.matchMedia("(max-width: 480px)").matches) {

    sliderBox.before(leftArrowDiv);
    sliderBox.after(rightArrowDiv);
}