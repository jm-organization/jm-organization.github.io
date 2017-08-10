/**
 * Created by JM Organization on 10.08.2017.
 */

function search_news(news, filter) {
    $('#article').each(function () {
        if ($(this).data('article').search(news) > 0) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
