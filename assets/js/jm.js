/**
 * Created by Admin on 21.06.2017.
 */

//
$(document).ready(function () {
    $('*[data-toggle="tooltip"]').hover(function () {
        $(this).tooltip('toggle');
    });
    
    $('.warp-button-to-top').on('click', 'a', function () {
        if ($(this).data('href') == '@to-top') {
            $('body').scrollTop(0);
        }
    });
});
