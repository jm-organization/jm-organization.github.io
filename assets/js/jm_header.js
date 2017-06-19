/**
 * Created by Magicmen on 19.06.2017.
 */

$(document).ready(function () {
    $(window).scroll(function () {
        var obj = $('#header_menu');
        var objtostick = $(obj).offset().top;
        var windowScroll = $(window).scrollTop();

        if (windowScroll > objtostick) {
            $(obj).css("position", "fixed");
        } else {
            $(obj).css("position", "relative");
        }
    });
});