/**
 * Created by Magicmen on 19.06.2017.
 */

$(document).ready(function () {
    var opacityControl = $('.jm-layer');
    var top = $(window).scrollTop(),
        opacity = top > 500 ? 1 : top * 2 / 950;

    $(window).scroll(function(){
        opacityControl.css('opacity', opacity);
        if (top > 3 ) {
            $('.jm-layer').css('z-index', '6');
        } else {
            $('.jm-layer').css('z-index', '');
        }
    });

    if (top == 0) {
        $('.jm-warp.warp-button-to-top').css({'z-index':'-1', 'opacity':'0'});
    } else if (top > window.screen.availHeight) {
        $('.jm-warp.warp-button-to-top').css({'z-index':'1', 'opacity':'1'});
    }

    $('.warp-button-to-content').on('click', 'a', function () {
        if ($(this).data('href') == '@content') {
            $('body').scrollTop((window.screen.availHeight - 90) - 48);
        }
    });

    $('a[data-href="@content"]').hover(function () {
        $(this).tooltip('toggle');
    })
});