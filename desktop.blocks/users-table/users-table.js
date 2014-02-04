modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('users-table', {

    onSetMod: {
        'js' : {
            'inited' : function() {
                console.log('inited');
            }
        }
    }

}, {

    live : function() {
        this.liveInitOnEvent('click');
    }

});

provide(DOM);

});
