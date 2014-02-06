modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('select', {

    _onChange: function(e) {
        var selected = $(e.target);
        this.elem('text').text(selected.text());
        this.emit('selected', {
            value: selected.attr('data-value')
        });
    }

}, {

    live : function() {

        this.liveBindTo('click', function() {
            this.toggleMod('expand');
        });

        this.liveBindTo('option', 'click', function(e) {
            this._onChange(e)
        });

    }

});

provide(DOM);

});
