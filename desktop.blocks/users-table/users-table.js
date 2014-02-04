modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('users-table', {

    toggleRow: function() {
        console.log('Toggle Row');
    }

}, {

    live : function() {
        this.liveInitOnBlockInsideEvent('change', 'checkbox', function() {
            this.toggleRow();
        });
    }

});

provide(DOM);

});
