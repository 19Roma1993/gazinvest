$(document).foundation()

window.addEventListener("load", function () {
    $(".masonry").masonry();
}, false);

$(document).ready(function () {
    var mainMenuWrap = $('.main-menu-wrap'),
        mobileMenuExpanded = mainMenuWrap.add($('.free-space')),
        mainSlider=$('.main-slider');

    mainMenuWrap.find('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

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

    $('#team-tabs').foundation('selectTab', $('.team-content').find('.tabs-panel').first().attr('id'));

    $('#gallery').lightGallery({
        selector: '.gallery-item a'
    });
});