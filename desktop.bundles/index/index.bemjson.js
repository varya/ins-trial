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
            block: 'menu',
            js: true,
            content: [
                {
                    elem: 'item',
                    content: 'First point'
                },
                {
                    elem: 'item',
                    content: 'Second point'
                },
                {
                    elem: 'item',
                    content: 'Third point'
                },
                {
                    elem: 'item',
                    content: 'Fourth point'
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
