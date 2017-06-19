/**
 * Created by Magicmen on 19.06.2017.
 */

$(document).ready(function () {
    var opacityControl = $('.jm-layer, .jm-preview');

    $(window).scroll(function(){
        var top = $(window).scrollTop(),
            opacity = top > 500 ? 1 : top * 2 / 750;

        opacityControl.css('opacity', opacity);
    });
});