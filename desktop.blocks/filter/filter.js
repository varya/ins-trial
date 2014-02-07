modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('filter', {

    _onSelect: function(e, data) {
        var select = e.target.domElem,
            row = select.closest(this.buildSelector('row')),
            td = row.find(this.buildSelector('val'));

        td[0].innerHTML = 'test';
    }

}, {

    live : function() {

        this.liveInitOnBlockInsideEvent('selected', 'select', function(e, data){
            this._onSelect(e, data);
        });

    }

});

provide(DOM);

});
