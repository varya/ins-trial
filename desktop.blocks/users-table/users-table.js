modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('users-table', {

    toggleRow: function(e) {
        var row = $(e.target.domElem).closest(this.buildSelector('tr'));
        this.toggleMod(row, 'current', true);
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
