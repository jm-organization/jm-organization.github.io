/**
 * Created by Magicmen on 19.06.2017.
 */

var jm_header = {
    header_height: $('#header').height(),
    menu_height: $('#header_menu').height(),
    position: [
        'absolute',
        'bottom'
    ],

    move_to_up: function (element_id) {
        var $opacity = (window.scrollX == 492)?'1':'0.'+(window.scrollX);

        if ((jm_header.header_height - jm_header.menu_height) != 492) {
            $('#'+element_id).css({
                "background": 'rgba(255,255,255,'+$opacity+')'
            });
        } else {
            $('#'+element_id).css({
                "background": 'rgba(255,255,255,'+$opacity+')'
            });
        }

    }
};

$(document).ready(function () {
    window.onscroll = jm_header.move_to_up($('#header_menu').attr('id'));
});