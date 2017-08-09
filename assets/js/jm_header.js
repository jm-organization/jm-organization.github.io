/**
 * Created by Magicmen on 19.06.2017.
 */

$(document).ready(function () {
    var opacityControl = $('.jm-layer');

    if (document.documentElement.clientWidth > 1024) {
        $('.item > [data-role="img"]').css({'height': (document.documentElement.clientHeight - 108)});
    }

    if (window.scrollY == 0) $('.jm-warp.warp-button-to-top').css({'z-index':'-1', 'opacity':'0'});

    $(window).scroll(function(){
        var top = $(window).scrollTop(),
            opacity = top > 500 ? 1 : top * 2 / 950;

        opacityControl.css('opacity', opacity);
        if (top > 3 ) {
            $('.jm-layer').css('z-index', '6');
        } else {
            $('.jm-layer').css('z-index', '');
        }

        if (window.scrollY == 0) {
            $('.jm-warp.warp-button-to-top').css({'z-index':'-1', 'opacity':'0'});
        } else if (top > (window.screen.availHeight - 90) - 48) {
            $('.jm-warp.warp-button-to-top').css({'z-index':'1', 'opacity':'1'});
        }
    });

    $('.warp-button-to-content').on('click', 'a', function () {
        if ($(this).data('href') == '@content') {
            $('body').scrollTop($('.jm-header').height() - 48);
            $('.jm-warp.warp-button-to-top').css({'z-index':'1', 'opacity':'1'});
        }
    });
});