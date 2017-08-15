/**
 * Created by JM Organization on 10.08.2017.
 */

var articles = {
    list_id: '#articles_list',

    list: $(articles.list_id).data('articles'),
    articles_list_array: articles.list.substring(0, articles.list.length - 1).split('/')
};

$(document).ready(function () {
    $(document).on('input', '#search', function () {
        var $item = $(this),
            value = $item.val(),
            pattern = new RegExp(value, "i");

        articles.articles_list_array.each(function (index, title) {
            if (pattern.test(title)) {
                $("#article-"+index).show();
            } else if (news != '' && news != ' ') {
                $('.short-article').hide();
            }
        });
    });
});

