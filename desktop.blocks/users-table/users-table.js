modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('users-table', {

    onElemSetMod: {
        'row' : {
            'current' : function(elem, modName, modVal, prevModVal) {
                var ch = this.findBlockInside(elem, 'checkbox');
                ch.setMod('checked', modVal);
            }
        }
    },

    toggleRow: function(e) {
        var checkbox = $(e.target.domElem).bem('checkbox');
        var isInHead = checkbox.domElem.closest(this.buildSelector('head-row')).length;
        if (isInHead) {
            this.toggleAll(checkbox.hasMod('checked'));
        } else {
            var row = checkbox.domElem.closest(this.buildSelector('row'));
            this.setMod(row, 'current', checkbox.hasMod('checked'));
        }
    },
    toggleAll: function(state) {
        this.setMod(this.elem('row'), 'current', state);
    }

}, {

    live : function() {
        this.liveInitOnBlockInsideEvent('change', 'checkbox', function(e) {
            this.toggleRow(e);
        });
    }

});

provide(DOM);

});
