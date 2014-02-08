modules.define('i-bem__dom', ['jquery', 'BEMHTML'], function(provide, $, BEMHTML, DOM) {

DOM.decl('filter', {

    _onSelect: function(e, data) {
        var select = e.target.domElem,
            row = select.closest(this.buildSelector('row')),
            td = row.find(this.buildSelector('val')),
            newSelect;

        if (data.value === "comments" || data.value === "topics") {
            newSelect = {
                block: 'select',
                name: 'field',
                options: [
                    {
                        elem: 'option',
                        value: '0',
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
                        value: 'all',
                        content: 'All'
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
        };

        if (data.value === "") {
            DOM.update(td, "");
            this.setMod(this.elem('add'), 'invisible', true); // for 1 row only!!!
        }

        if (newSelect) {
            DOM.update(td, BEMHTML.apply(newSelect));
            this.setMod(this.elem('add'), 'invisible', false);
        }

    },

    _addRow: function() {
        var row = {
            block: 'filter',
            elem: 'row',
            mix: [{ elem: 'filter-item' }],
            content: [
                {
                    elem: 'td',
                    content: {
                        block: 'select',
                        name: 'field',
                        options: [
                            {
                                elem: 'option',
                                value: '',
                                content: 'Select'
                            },
                            {
                                elem: 'option',
                                value: 'comments',
                                content: 'Comments'
                            },
                            {
                                elem: 'option',
                                value: 'topics',
                                content: 'Topics'
                            },
                            {
                                elem: 'option',
                                value: 'usergroup',
                                content: 'User Group'
                            }
                        ]
                    }
                },
                {
                    elem: 'td',
                    mix: [{ elem: 'val' }]
                },
                {
                    elem: 'td',
                    content: {
                        block: 'button',
                        mods: { action: 'remove' },
                        text: '×'
                    }
                },
                {
                    elem: 'td'
                }
            ]
        };
        var currentRows = this.domElem.find(this.buildSelector('filter-item'));
        if (currentRows.length <= 2) {
            if (currentRows.length == 2) {
                this.setMod(this.elem('add'), 'invisible', true);
            }
            $(currentRows[0]).after(BEMHTML.apply(row));
        }
    },
    _removeRow: function(e) {
        var row = e.target.domElem.closest(this.buildSelector('row'));
        row.remove();
        var currentRows = this.domElem.find(this.buildSelector('filter-item'));
        if (currentRows.length <= 2) {
            this.setMod(this.elem('add'), 'invisible', false);
        }
    }

}, {

    live : function() {

        this.liveInitOnBlockInsideEvent('selected', 'select', function(e, data){
            this._onSelect(e, data);
        });

        this.liveInitOnBlockInsideEvent('click', 'button', function(e){
            if (e.target.hasMod('action', 'add')) {
                this._addRow();
            }
            if (e.target.hasMod('action', 'remove')) {
                this._removeRow(e)
            }
        });

    }

});

provide(DOM);

});
