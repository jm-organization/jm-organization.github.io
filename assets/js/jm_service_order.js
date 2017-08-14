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
        $('#terms-of-use').val('Я, '+value_name+' ('+value_email+')'+', соглашаюсь с условием подачи заказов и обязуюсь заплатить за него полную суму, предявленную исполнителем.')
    });

    $('a[data-toggle="cosoo"]').click(function () {
        $('#cosoo').toggle();
    });

    //order-text
    $(document).on('input', '#order-text', function () {
        var $item = $(this),
            value = $item.val(),
            length = value.length,
            char_counter = '#char-counter';

        if (length < 100) {
            $(char_counter).addClass('text-danger');
        } else if (length >= 100) {
            $(char_counter).removeClass('text-danger');
            $(char_counter).addClass('text-warning');
        } else if (length >= 200) {
            $(char_counter).removeClass('text-warning');
            $(char_counter).addClass('text-success');
        } else if (length >= 612) {
            $(char_counter).removeClass('text-success');
            $(char_counter).addClass('text-warning');
        }  else if (length >= 712) {
            $(char_counter).removeClass('text-warning');
            $(char_counter).addClass('text-danger');
        }

        $(char_counter).html(length);
    });
});