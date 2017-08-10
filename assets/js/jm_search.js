/**
 * Created by JM Organization on 10.08.2017.
 */

function search_news(news, filter) {
    var pattern = new RegExp(news, "ig");

    $('.short-article').each(function () {
        var search_string = $(this).data('article');

        if (news == '' && news == ' ') {
            if (search_string.match(pattern).index >= 0) {
                $(this).show();
            } else {
                $('.short-article').hide();
            }
        }
    });
}
