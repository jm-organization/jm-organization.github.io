/**
 * Created by JM Organization on 10.08.2017.
 */

$(document).ready(function () {
    var articles_list = $("#articles").data("articles"),
        articles_list_array = articles_list.substring(0, articles_list.length - 1).split('/');

    $(document).on('input', '#search', function () {
        var $item = $(this),
            value = $item.val(),
            pattern = new RegExp(value, "i");

        $("#articles").data("articles").substring(0, $("#articles").data("articles").length - 1).split('/').each(function (index, title) {
            if (pattern.test(title)) {
                $("#article-"+index).show();
            } else if (news != '' && news != ' ') {
                $('.short-article').hide();
            }
        });
    });
});

