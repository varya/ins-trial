[
{
    mustDeps : { block : 'i-bem', elems : ['dom'] },
    shouldDeps: [
        { block: 'select' },
        { block: 'button' },
        { tech : 'bemhtml', block : 'i-bem' },
    ]
},
{
    tech : 'js',
    shouldDeps : [
        { tech : 'bemhtml', block : 'i-bem' },
        {
            tech: 'bemhtml',
            block: 'filter'
        }
    ]
}
]
