modules.define('i-bem__dom', ['jquery', 'BEMHTML'], function(provide, $, BEMHTML, DOM) {

DOM.decl('filter', {

    _onSelect: function(e, data) {
        var select = e.target.domElem,
            row = select.closest(this.buildSelector('row')),
            td = row.find(this.buildSelector('val')),
            newSelect;

        if (data.value === "comments") {
            newSelect = {
                block: 'select',
                name: 'field',
                options: [
                    {
                        elem: 'option',
                        value: '',
                        content: 'bigger than'
                    },
                    {
                        elem: 'option',
                        value: '10',
                        content: '10'
                    },
                    {
                        elem: 'option',
                        value: '20',
                        content: '20'
                    },
                    {
                        elem: 'option',
                        value: '30',
                        content: '30'
                    }
                ]
            }
        }
        if (data.value === "usergroup") {
            newSelect = {
                block: 'select',
                name: 'val',
                options: [
                    {
                        elem: 'option',
                        value: '',
                        content: '—'
                    },
                    {
                        elem: 'option',
                        value: 'moderators',
                        content: 'Moderators'
                    },
                    {
                        elem: 'option',
                        value: 'user',
                        content: 'Registered user'
                    }
                ]
            }
        }

        if (newSelect) {
            DOM.update(td, BEMHTML.apply(newSelect));
        }


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
