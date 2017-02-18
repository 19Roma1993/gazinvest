$(document).foundation();

$(document).ready(function () {
    var mobileMenuExpanded = $('.main-menu-wrap').add($('.free-space')),
        mainSlider=$('.main-slider');

    $('.menu-icon-mobile').click(function () {
        mobileMenuExpanded.addClass('active');
    });
    $('.free-space').click(function () {
        mobileMenuExpanded.removeClass('active');
    });

    var slider = new Foundation.Orbit(mainSlider, {
        bullets: false,
        navButtons: false,
        animInFromRight: 'fade-in',
        animOutToRight: 'fade-out',
        animInFromLeft: 'fade-in',
        animOutToLeft: 'fade-out'
    });
});