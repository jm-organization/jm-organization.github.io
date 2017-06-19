/**
 * Created by Magicmen on 19.06.2017.
 */

$(document).ready(function () {
    var opacityControl = $('.jm-layer');

    $(window).scroll(function(){
        var top = $(window).scrollTop(),
            opacity = top > 500 ? 1 : top * 2 / 750;

        opacityControl.css('opacity', opacity);
        if (top > 1 ) {
            $('.jm-layer').css('position', 'absolute');
        } else {
            $('.jm-layer').css('position', '');
        }
    });
});