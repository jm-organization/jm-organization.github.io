/**
 * Created by JM Organization on 10.08.2017.
 */

function search_news(news, filter) {
    $('.short-article').each(function () {
        var string = new RegExp(news, "igm");

        if ($(this).data('article').search(string) >= 0
            && news != ''
            && news != ' '
        ) {
            $(this).show();
        } else {
            $('.short-article').hide();
        }
    });
}
