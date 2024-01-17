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