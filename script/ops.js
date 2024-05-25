const display = $('#display');
const sections = $('section');
sections.first().addClass('section--active');
const points = $('.fixed-menu__point');
points.first().addClass('fixed-menu__point--active');
const pointsLinks = $('.fixed-menu__link');
let inScroll = false;

$(window).on('wheel', (event)=> {
    const deltaY = event.originalEvent.deltaY;   

    if (deltaY > 0) {
        scrollViewport().next();
    } else if (deltaY < 0) {
        scrollViewport().previous();
    }
});

$(window).on('keydown', (e) => {

    const currentTag = e.target.tagName.toLowerCase();
    if (currentTag !== 'textarea' && currentTag !== 'input') {
        switch (e.keyCode) {
            case 38:
                scrollViewport().previous();
                break;
            case 40:
                scrollViewport().next();
                break;
            default:
                break;
        }
    }
});

$('[data-scroll-to]').on('click', e => {
    const $this = $(e.currentTarget);
    const target = $this.attr('data-scroll-to');
    const reqSection = $(`[data-section-name = ${target}]`);

    const sectionId = reqSection.index();
    renderBySectionNumber(sectionId);
});

const renderBySectionNumber = (number) => {

    if (inScroll === false) {
        inScroll = true;
        const position = number * (-100);

        display.css({ transform: `translateY(${position}%)` });

        resetActiveClass(sections, number, 'section--active');
        resetActiveClass(points, number, 'fixed-menu__point--active');

        scrollStopper();
        setThemeColor(number);
    }
};

const scrollViewport = () => {

    const activeSection = sections.filter('.section--active');
    const prevSection = activeSection.prev();
    const nextSection = activeSection.next();

    return {
        previous() {
            if (prevSection.length) {
                renderBySectionNumber(prevSection.index());
            }
        },
        next() {
            if (nextSection.length) {
                renderBySectionNumber(nextSection.index());
            }
        }
    }

    // if (direction === 'prev' && prevSection.length) {
    //     renderBySectionNumber(prevSection.index());
    // } else if (direction === 'next' && nextSection.length) {
    //     renderBySectionNumber(nextSection.index());
    // }
};

const scrollStopper = () => {
    setTimeout(() => {
        inScroll = false;
    }, 1300);
};

const setThemeColor = number => {
    setTimeout(() => {
        if (sections.eq(number).attr('data-sidemenu-theme') === 'black') {
            pointsLinks.addClass('fixed-menu__link-shadow');
        } else {
            pointsLinks.removeClass('fixed-menu__link-shadow');
        }
    }, 300);
};

const resetActiveClass = (collection, index, addedClass) => {
    collection.eq(index).addClass(addedClass).siblings().removeClass(addedClass);
};