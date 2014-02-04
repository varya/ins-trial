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
                    elem: 'header'
                },
                {
                    elem: 'sidebar'
                },
                {
                    elem: 'main',
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
                                    upic: '../../data/upics/25x25/1.jpg',
                                    comments: 64,
                                    topics: 9,
                                    userGroup: 'Registered user',
                                    regDate: '19-mar-12 12:00',
                                    lastLogin: '16-aug-12 21:11',
                                    lastComment: '16-aug-12 16:10'
                                },
                                {
                                    id: 2,
                                    name: 'Bart Pineapple',
                                    upic: '../../data/upics/25x25/2.jpg',
                                    comments: 37,
                                    topics: null,
                                    userGroup: 'Registered user',
                                    regDate: '19-mar-11 13:57',
                                    lastLogin: '15-may-12 17:34',
                                    lastComment: '14-may-12 20:01'
                                },
                                {
                                    id: 3,
                                    name: 'Caitlyn Appleseed',
                                    upic: '../../data/upics/25x25/3.jpg',
                                    comments: 37,
                                    topics: null,
                                    userGroup: 'Registered user',
                                    regDate: '19-mar-11 13:57',
                                    lastLogin: '15-may-12 17:34',
                                    lastComment: '14-may-12 20:01'
                                },
                                {
                                    id: 4,
                                    name: 'Carmen Candy',
                                    upic: '../../data/upics/25x25/4.jpg',
                                    comments: 37,
                                    topics: null,
                                    userGroup: 'Moderator',
                                    regDate: '19-mar-11 13:57',
                                    lastLogin: '15-may-12 17:34',
                                    lastComment: '14-may-12 20:01'
                                },
                                {
                                    id: 5,
                                    name: 'Dolf Dreamer',
                                    upic: '../../data/upics/25x25/5.jpg',
                                    comments: 37,
                                    topics: null,
                                    userGroup: 'Super user',
                                    regDate: '19-mar-11 13:57',
                                    lastLogin: '15-may-12 17:34',
                                    lastComment: '14-may-12 20:01'
                                },
                                {
                                    id: 6,
                                    name: 'Edgar Enders',
                                    upic: '../../data/upics/25x25/6.jpg',
                                    comments: 37,
                                    topics: null,
                                    userGroup: 'Registered user',
                                    regDate: '19-mar-11 13:57',
                                    lastLogin: '15-may-12 17:34',
                                    lastComment: '14-may-12 20:01'
                                },
                                {
                                    id: 7,
                                    name: 'Jane Blackswan',
                                    upic: '../../data/upics/25x25/7.jpg',
                                    comments: 37,
                                    topics: null,
                                    userGroup: 'Registered user',
                                    regDate: '19-mar-11 13:57',
                                    lastLogin: '15-may-12 17:34',
                                    lastComment: '14-may-12 20:01'
                                },
                                {
                                    id: 8,
                                    name: 'Jennifer Appleseed',
                                    upic: '../../data/upics/25x25/8.jpg',
                                    comments: 37,
                                    topics: null,
                                    userGroup: 'Registered user',
                                    regDate: '19-mar-11 13:57',
                                    lastLogin: '15-may-12 17:34',
                                    lastComment: '14-may-12 20:01'
                                },
                                {
                                    id: 9,
                                    name: 'John Doe',
                                    upic: '../../data/upics/25x25/9.jpg',
                                    comments: 37,
                                    topics: null,
                                    userGroup: 'Moderator',
                                    regDate: '19-mar-11 13:57',
                                    lastLogin: '15-may-12 17:34',
                                    lastComment: '14-may-12 20:01'
                                },
                                {
                                    id: 10,
                                    name: 'John Foe',
                                    upic: '../../data/upics/25x25/10.jpg',
                                    comments: 37,
                                    topics: null,
                                    userGroup: 'Registered user',
                                    regDate: '19-mar-11 13:57',
                                    lastLogin: '15-may-12 17:34',
                                    lastComment: '14-may-12 20:01'
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        { elem: 'js', url: '_index.js' }
    ]
})
