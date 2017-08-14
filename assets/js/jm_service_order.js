/**
 * Created by JM Organization on 13.08.2017.
 */

$(document).ready(function () {
    $('[data-open="order-modale"]').click(function (element) {
        var subject = "#order-subject-hidden";
        var subject_view = "#order-subject-text";
        var subject_text = '[Заказ] '+element.target.dataset.service;

        $('#order-modale').modal('show');
        $(subject).val(subject_text);
        $(subject_view).val(subject_text);
    });

    var name = '#order-name';
    var email = '#order-email';

    $(document).on('change', name+', '+email, function () {
        $('.jm-terms-of-use').show();

        var value_name = $(name).val();
        var value_email = $(email).val();

        $('#client').html(value_name+' ('+value_email+')');
        $('#terms-of-use').val('Я, '+value_name+' ('+value_email+')'+', соглашаюсь с условием подачи заказов и обязуюсь заплатить за него полную суму, предявленную исполнитетелм.')
    });

    $('a[data-toggle="cosoo"]').click(function () {
        $('#cosoo').toggle();
    });

});