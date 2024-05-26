const display = $('#display');
const sections = $('section');
sections.first().addClass('section--active');

const points = $('.fixed-menu__point');
points.first().addClass('fixed-menu__point--active');
const pointsLinks = $('.fixed-menu__link');

const burgerLines = $('.burger__line');

const orderModal = $('#response');

let inScroll = false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

$(window).on('wheel', (event)=> {
    const deltaY = event.originalEvent.deltaY;   

    if (!isModalActive()) {
        if (deltaY > 0) {
            scrollViewport().next();
        } else if (deltaY < 0) {
            scrollViewport().prev();
        }
    }
});

$(window).on('keydown', (e) => {
    const currentTag = e.target.tagName.toLowerCase();

    if (!isModalActive()) {
        if (currentTag !== 'textarea' && currentTag !== 'input') {
            switch (e.keyCode) {
                case 38:
                    scrollViewport().prev();
                    break;
                case 40:
                    scrollViewport().next();
                    break;
                default:
                    break;
            }
        }
    }
});

$('[data-scroll-to]').on('click', e => {
    const $this = $(e.currentTarget);
    const target = $this.attr('data-scroll-to');
    const reqSection = $(`[data-section-name = ${target}]`);

    const sectionId = reqSection.index();

    if (!isModalActive()) {
        shiftBySectionName(sectionId);
    }
});

$('.wrapper').on('touchmove', e => {
    e.preventDefault();
});

//https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
if (isMobile) {
    $(body).swipe({
        swipe: function(event, direction) {

            if (!isModalActive()) {
                const scroller = scrollViewport();
                let scrollDirection = '';

                switch (direction) {
                    case 'up':
                        scrollDirection = 'next';
                        break;
                    case 'down':
                        scrollDirection = 'prev';
                        break;
                    case 'left':
                        scrollDirection = 'right';
                        break;
                    case 'right':
                        scrollDirection = 'left';
                }

                scroller[scrollDirection]();
            }
        }
    });
}

const shiftBySectionName = (number) => {

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
        prev() {
            if (prevSection.length) {
                shiftBySectionName(prevSection.index());
            }
        },
        next() {
            if (nextSection.length) {
                shiftBySectionName(nextSection.index());
            }
        },
        left() {

        },
        right() {

        }
    }
};

const scrollStopper = () => {
    setTimeout(() => {
        inScroll = false;
    }, 800);
};

const setThemeColor = number => {
    setTimeout(() => {
        if (sections.eq(number).attr('data-sidemenu-theme') === 'black') {
            pointsLinks.addClass('fixed-menu__link-shadow');
            burgerLines.addClass('burger__line-shadow');
        } else {
            pointsLinks.removeClass('fixed-menu__link-shadow');
            burgerLines.removeClass('burger__line-shadow');
        }
    }, 300);
};

const resetActiveClass = (collection, index, addedClass) => {
    collection.eq(index).addClass(addedClass).siblings().removeClass(addedClass);
};

const isModalActive = () => {
    return orderModal.hasClass('response--active');
};