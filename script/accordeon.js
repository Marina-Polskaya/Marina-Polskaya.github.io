$(document).ready(function() {

    const closeEachItem = list => {
        const contentBlock = list.find('.accordeon__content');
        const listItems = list.find('.accordeon__item');
        contentBlock.height('0rem');
        listItems.removeClass('accordeon__item--active');
        //listItems.removeClass('active');
        const link = list.find('.accordeon__link');
        link.removeClass('active');
    };

    const closeItem = title => {
        const item = title.closest('.accordeon__item');
        const contentBlock = item.find('.accordeon__content');

        item.removeClass('accordeon__item--active');
        //item.removeClass('active');
        title.removeClass('active');

        contentBlock.animate({
            'height': '0rem'
        }, 200);

    };

    const openItem = item => {

        const container = item.closest('.accordeon__item');
        const contentBlock = container.find('.accordeon__content');
        const textBlock = contentBlock.find('.accordeon__content-wrap');
        const innerTextBlockHeight = textBlock.height();

        contentBlock.animate({
            'height': innerTextBlockHeight
        }, 200);
        container.addClass('accordeon__item--active');
        //
        item.addClass('active');
    };

    $('.accordeon__link').on('click', e => {

        const $this = $(e.currentTarget);
        const teamList = $this.closest('.accordeon');
        const listItem = $this.parent('.accordeon__item');
        const isActive = listItem.hasClass('accordeon__item--active');
        //const isActive = listItem.hasClass('active');
        

        if (isActive) {
            closeItem($this);
        } else {
            closeEachItem(teamList);
            openItem($this);
            
        }     
    });    
});