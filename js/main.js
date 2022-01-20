jQuery(document).on('ready', function ($) {
    "use strict";


    // ссылка якорь 
    var $page = $('html, body');
    $('a[href*="#main"], a[href*="#posts"]').click(function () {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
      

    // ACTIVE WOW JS - Плавная анимация при скролле
    new WOW().init();

}(jQuery));