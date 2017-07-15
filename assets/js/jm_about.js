/**
 * Created by Admin on 15.07.2017.
 */

$(document).ready(function () {
    var web_sites = {
        ws_block: $('#web-sites'),
        ws: web_sites.ws_block.data('ws')
    };

    var $sites = web_sites.ws.split(',');

    $sites.forEach(function (site) {
        web_sites.ws_block.append(tags.tag({
            tag: 'span',
            attributes: {
                class: 'label label-success'
            },
            tagContent: site
        }));
    });
});