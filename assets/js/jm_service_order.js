/**
 * Created by JM Organization on 13.08.2017.
 */

$(document).ready(function () {
    $('[data-open="order-modale"]').click(function (element) {
        console.log(element);

        $('#order-modale').modal('show');
    });
});