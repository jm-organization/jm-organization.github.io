/**
 * Created by Admin on 15.07.2017.
 */

$(document).ready(function () {
    var web_sites_block = $('#web-sites');
    var href_pattern_before = /([a-z]{3,6}:\/\/)/g;
    var href_pattern_after = /\/([\w@\/?=&\.%#]{0,256})\/?/g;

    var $sites = web_sites_block.data('ws').split(',');

    $sites.forEach(function (site) {
        web_sites_block.append(tags.tag({
            tag: 'a',
            tagContent: tags.tag({
                tag: 'span',
                attributes: {
                    class: 'label label-success',
                    style: 'padding-right: 4px'
                },
                tagContent: site
            }),
            attributes: {
                href: site.replace(href_pattern_before, '').replace(href_pattern_after, '')
            }
        }));
    });
});