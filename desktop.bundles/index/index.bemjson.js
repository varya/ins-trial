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
            block: 'layout',
            content: [
                {
                    block: 'users-table',
                    head: [
                        {
                            id: 'name',
                            title: 'Username'
                        },
                        {
                            id: 'comments',
                            title: 'Comments'
                        },
                        {
                            id: 'topics',
                            title: 'Topics'
                        },
                        {
                            id: 'userGroup',
                            title: 'Usergroup',
                        },
                        {
                            id: 'regDate',
                            title: 'Registration date'
                        },
                        {
                            id: 'lastLogin',
                            title: 'Last login'
                        },
                        {
                            id: 'lastComment',
                            title: 'Last comment'
                        }
                    ],
                    users: [
                        {
                            id: 1,
                            name: 'Amber H',
                            upic: 'data/upics/25x25/1.jpg',
                            comments: 64,
                            topics: 9,
                            userGroup: 'Registered user',
                            regDate: '19-mar-12 12:00',
                            lastLogin: '16-aug-12 21:11',
                            lastComment: '16-aug-12 16:10'
                        }
                    ]
                }
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
