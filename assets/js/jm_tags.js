/**
 * Created by Magicfar4 on 06.06.2017.
 *
 * @project: magic-addons [Magic-Addons]
 * @e-mail: vany.58.98.2013@gmail.com
 */

var tags = {
    attributes: function ($attr = {}) {
        if (typeof $attr.attributes != 'undefined' && $attr.attributes != null) {
            var attributes = '';

            for (var key in $attr.attributes) {
                attributes += ' '+key+'="'+$attr.attributes[key]+'"';
            }

            return attributes;
        }

        return '';
    },
    content: function ($attr = {}) {
        return (typeof $attr.tagContent != 'undefined' && $attr.tagContent != null)?$attr.tagContent:'';
    },

    tag: function ($attr = {}) {
        if (typeof $attr.tag != 'undefined' && $attr.tag != null) {
            return '<'+$attr.tag+tags.attributes($attr)+'>'+(($attr.tag != 'img')?tags.content($attr)+'</'+$attr.tag+'>':'');
        }

        return null;
    }
};