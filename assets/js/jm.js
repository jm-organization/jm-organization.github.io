/**
 * Created by Admin on 21.06.2017.
 */

//
$(document).ready(function () {
    $('.warp-button-to-content').on('click', 'a', function () {
        if ($(this).data('href') == '@to-top') {
            $('body').scrollTop(0);
        }
    });
});
