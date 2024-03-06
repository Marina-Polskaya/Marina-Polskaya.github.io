const allParamBtns = $('.parameters');

const activeBtnColor = btn => {
    $(btn).css('background-color', '#3465A3');
};

const inActiveBtnColor = btn => {
    $(btn).css('background-color', '#3A587E');
}

allParamBtns.on('mouseenter', function () {
    activeBtnColor($(this));
});

allParamBtns.on('mouseleave', function () {
    const thisParamBtn = $(this);
    const paramlist = thisParamBtn.siblings('.parameters__list');

    paramlist.on('mouseenter', function(e) {
        activeBtnColor(thisParamBtn);
    });
    paramlist.on('mouseleave', function(e) {
        inActiveBtnColor(thisParamBtn);
    });
    inActiveBtnColor(this);
});