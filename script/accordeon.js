$(document).ready(function () {

    $('.accordeon__link').on('click', function(e) {

        e.preventDefault();
        let itemNumber = $('.accordeon').index('.accordeon__item');
        console.log(itemNumber);

        // let result = $('.accordeon__content-wrap').outerHeight();
        // console.log(result);
        //console.log(e.currentTarget);

        //$(e.currentTarget).toggleClass('accordeon__content-active');
    });
});