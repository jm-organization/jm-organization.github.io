/**
 * Created by JM Organization on 10.08.2017.
 */

$(document).ready(function () {
    var articles_list = $("#articles").data("articles").substring(0, str.length - 1).split(',');

    $(document).on('input', '#search', function () {
        var $item = $(this),
            value = $item.val(),
            pattern = new RegExp(value, "i");

        articles_list.each(function () {
            var article_title = this.title,
                article_id = this.id;

            if (pattern.test(article_title)) {
                $("#article-"+article_id).show();
            } else if (news != '' && news != ' ') {
                $('.short-article').hide();
            }
        });
    });
});

function search_news(news, filter) {
    var pattern = new RegExp(news, "i");

    if (news != '' && news != ' ') {
        $('.short-article').each(function () {
            var title = $(this).data('article');

            if (pattern.test(title)) {
                $(this).show();
            } else if (news != '' && news != ' ') {
                $('.short-article').hide();
            }

            console.log(pattern.test(title) + " / title: "+ title + " / pattern: "+ pattern)
        });
    }
}

