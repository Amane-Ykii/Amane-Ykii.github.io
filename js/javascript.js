alert("проверка");
jQuery(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 274) {
            $('#navigation').addClass('fixed');
        } else if ($(this).scrollTop() < 274) {
            $('#navigation').removeClass('fixed');
        }
    });
});

$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() > 550) {

            $('#knopohka_wtf').fadeIn();

        } else {

            $('#knopohka_wtf').fadeOut();

        }

    });

    $('#knopohka_wtf').click(function () {

        $('body,html').animate({
            scrollTop: 0
        }, 800);

    });

});
