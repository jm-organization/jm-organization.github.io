/**
 * Created by Magicmen on 19.06.2017.
 */

$(document).ready(function () {
    $(window).scroll(function () {
        var navigation = $('#navigation');
        var object_to_stick = $(navigation).offset().top;
        var windowScroll = $(window).scrollTop();

        if (windowScroll > object_to_stick) {
            $('.jm-navigation-bar').css('position','inherit');
            $(navigation).css({
                "position":"fixed",
                "top":"0",
                "bottom":"inherit"
            });
        } else {
            $('.jm-navigation-bar').css('position','');
            $(navigation).css({
                "position":"",
                "top":"",
                "bottom":""
            });
        }
    });
});