({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index.ie.css', ie: 'gte IE 6' },
        { elem: 'meta', attrs: { name: 'description', content: '' }}
    ],
    content:[
        {
            block: 'header',
            content: [
                'header content goes here'
            ]
        },
        {
            block: 'menu-vert',
            js: true,
            content: [
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        mix: [{ block: 'menu-vert', elem: 'item-selector'}],
                        url: '/',
                        content: 'First point'
                    }
                },
                {
                    elem: 'item',
                    content: {
                            block: 'link',
                            mix: [{ block: 'menu-vert', elem: 'item-selector'}],
                            url: '/',
                            content: 'Second point'
                        },
                    'item-content': {
                        elem: 'item-content',
                        elemMods: { 'visibility' : 'visible' },
                        content:
                            {
                                elem: 'submenu',
                                content: [
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            mix: [{ block: 'menu-vert', elem: 'item-selector'}],
                                            url: '/',
                                            content: 'First submenu point'
                                        }
                                    },
                                    {
                                        elem: 'item',
                                        content: {
                                            block: 'link',
                                            mix: [{ block: 'menu-vert', elem: 'item-selector'}],
                                            url: '/',
                                            content: 'Second submenu point'
                                        }
                                    }
                                ]
                            }
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        mods : { 'pseudo' : 'yes'},
                        mix: [{ block: 'menu-vert', elem: 'item-selector'}],
                        url: '/',
                        content: 'Third point'
                    }
                },
                {
                    elem: 'item',
                    content: {
                        block: 'link',
                        mix: [{ block: 'menu-vert', elem: 'item-selector'}],
                        url: '/',
                        content: 'Fourth point'
                    }
                }
            ]
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
