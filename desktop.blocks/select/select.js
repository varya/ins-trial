modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

DOM.decl('select', {

    _onChange: function(e) {
        var selected = $(e.target)
            val = selected.attr('data-value');
        this.elem('text').text(selected.text());
        this.elem('select').val(val);
        this.emit('selected', {
            value: val
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
