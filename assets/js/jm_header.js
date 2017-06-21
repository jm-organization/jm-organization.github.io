/**
 * Created by Magicmen on 19.06.2017.
 */

$(document).ready(function () {
    var opacityControl = $('.jm-layer');

    $(window).scroll(function(){
        var top = $(window).scrollTop(),
            opacity = top > 500 ? 1 : top * 2 / 950;

        opacityControl.css('opacity', opacity);
        if (top > 3 ) {
            $('.jm-layer').css('z-index', '6');
        } else {
            $('.jm-layer').css('z-index', '');
        }

        if (window.scrollY == 0 && top < (window.screen.availHeight - 90) - 48) {
            $('.jm-warp.warp-button-to-top').css({'z-index':'-1', 'opacity':'0'});
        } else if (top > (window.screen.availHeight - 90) - 48) {
            $('.jm-warp.warp-button-to-top').css({'z-index':'1', 'opacity':'1'});
        }
    });

    $('.warp-button-to-content').on('click', 'a', function () {
        if ($(this).data('href') == '@content') {
            $('body').scrollTop((window.screen.availHeight - 90) - 48);
        }
    });

    $('a[data-href="@content"]').hover(function () {
        $(this).tooltip('toggle');
    })
});