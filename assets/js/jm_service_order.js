/**
 * Created by JM Organization on 13.08.2017.
 */

$(document).ready(function () {
    $('[data-open="order-modale"]').click(function (element) {
        var subject = "#order-subject-hidden";
        var subject_view = "#order-subject-text";
        var subject_text = $(subject)[0].value+' '+element.target.dataset.service;

        $('#order-modale').modal('show');
        $(subject).val(subject_text);
        $(subject_view).val(subject_text);
    });
});