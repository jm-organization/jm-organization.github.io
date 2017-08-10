/**
 * Created by JM Organization on 10.08.2017.
 */

function search_news(news, filter) {
    $('#article').each(function () {
        $('#article[data-article="'+news+'"]').show();
    });
}
