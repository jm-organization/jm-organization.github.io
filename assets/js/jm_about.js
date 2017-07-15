/**
 * Created by Admin on 15.07.2017.
 */

var web_sites = {
    ws: $('#web-sites').data('ws')
};

$(document).ready(function () {
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