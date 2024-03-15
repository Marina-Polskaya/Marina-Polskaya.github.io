const findBlockByAlias = alias => {
    return $('.reviews__item').filter((ndx, item) => {
        return $(item).attr('data-linked-with') === alias;
    });
};

$('.reviews__switcher-item').on('click', e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const activeNumberAttr = $this.attr('data-open');
    
    
    if (!$this.hasClass('interractive-avatar--active')) {
        $this.addClass('interractive-avatar--active').siblings().removeClass('interractive-avatar--active');

        const activeItem = findBlockByAlias(activeNumberAttr);

        if (!activeItem.hasClass('reviews__item--active')) {
            activeItem.addClass('reviews__item--active').siblings().removeClass('reviews__item--active');     
        }
    }
});