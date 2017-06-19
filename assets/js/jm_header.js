/**
 * Created by Magicmen on 19.06.2017.
 */

$(document).ready(function () {
    $(window).scroll(function () {
        var navigation = $('#navigation');
        var object_to_stick = $(navigation).offset().top;
        var windowScroll = $(window).scrollTop();

        if (windowScroll > object_to_stick) {
            $(navigation).css("position", "fixed");
        } else {
            $(navigation).css("position", "relative");
        }
    });
});