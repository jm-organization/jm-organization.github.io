/**
 * Created by Admin on 15.07.2017.
 */

$(document).ready(function () {
    var web_sites = {
        ws: $('#web-sites').data('ws')
    };

    var $sites = web_sites.ws.split(',');

    $sites.forEach(function (site) {
        web_sites.ws.append(tags.tag({
            tag: 'span',
            attributes: {
                class: 'label label-success'
            },
            tagContent: site
        }));
    });
});