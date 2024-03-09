const allSlides = $('.slide');
const listItems = allSlides.children();

const getIndexOfActiveItem = () => {
    let activeItem = $('.slide__item--active');
    index = 0;

    for (let i = 0; i < listItems.length; i++) {
        if ($(listItems[i]).hasClass('slide__item--active')) {
            index = i;
        }
    }
    return index;
};

const isLastItem = (index) => {
    return (index === listItems.length-1) ? true : false;
};

const isFirstItem = (index) => {
    return (index === 0) ? true : false;
};

const makeItemInactive = (index) => {
    $(listItems[index]).removeClass('slide__item--active');
};

const makeItemActive = (index) => {
    $(listItems[index]).addClass('slide__item--active');
};

const moveLeft = (index) => {
    allSlides.css({
        'transform' : `translateX(-${(index+1)*100}%)`
    });
    makeItemActive(index+1);
    makeItemInactive(index);
};

const moveRight = (index) => {
    allSlides.css({
        'transform' : `translateX(-${(index-1)*100}%)`
    });
    makeItemInactive(index);
    makeItemActive(index-1);
};

$('.arrow-right').on('click', e => {
    //console.log(getIndexOfActiveItem());
    //$this = $(e.currentTarget);
    e.preventDefault();
    let activeItem = $('.slide__item--active');
    let itemIndex = getIndexOfActiveItem();

    if(!isLastItem(itemIndex)) {
        moveLeft(itemIndex);
    //     activeItem.stop(true, false).animate({
    //         'transform' : `translateX(-100%)`,
    //         'right' : '0rem'
    //    }, 400, function () {
    //         makeItemActive(itemIndex+1);
    //         makeItemInactive(itemIndex);
    //    });

    //     makeItemActive(itemIndex+1);
    //     makeItemInactive(itemIndex);
    }
});

$('.arrow-left').on('click', e => {
    e.preventDefault();
    let activeItem = $('.slide__item--active');
    let itemIndex = getIndexOfActiveItem();
    console.log(itemIndex);
    if (!isFirstItem(itemIndex)) {
        console.log('left');
        moveRight(itemIndex);
    }
});

//const slidesList = document.querySelector('.slide');


