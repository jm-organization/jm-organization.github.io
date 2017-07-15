/**
 * Created by Admin on 15.07.2017.
 */

$(document).ready(function () {
    var web_sites_block = $('#web-sites');

    var $sites = web_sites_block.data('ws').split(',');

    $sites.forEach(function (site) {
        web_sites_block.append(tags.tag({
            tag: 'span',
            attributes: {
                class: 'label label-success'
            },
            tagContent: site
        }));
    });
});