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

    // if (computedStyles.display == 'block') {

    //     paramsBtn.addEventListener('mouseleave', function() {
    //         paramsList.style.display = 'none';
    //     });
    // }



// const buttonParams = document.querySelector('.parameters');
// const paramList = document.querySelector('.parameters__list');


// buttonParams.addEventListener('click', function() {
//     paramList.style.display = 'block';
// });

// $(function() {
//     $('.parameters').on('click', function ()
//     {
//         $('.parameters__list').show(500);
//         $('.parameters__list').on('mouseleave', function () 
//         {
//             $('.parameters__list').hide(500);
//         });
//     });
// });



// $(function() {
//     $('button').on('click', function ()
//     {
//         $('.menuList').show(500);
//         $('.miniMenu').on('mouseleave', function() 
//         {
//             $('.menuList').hide(500);
//         });
//     });
// });