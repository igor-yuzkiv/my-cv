export const ROUTES = [
    {
        path: '/certificates',
        meta: {
            title: '/certificates',
            size: '4096',
            modified_time: 'Jan 12 16:00',
        },
        children: [
            {
                path: '/vue',
                name: 'vue-certificate',
                component: '/my-cv/src/pages/certificates/vue-certificate.page.js',
                meta: {
                    title: 'vue.pdf',
                    size: '3214',
                    modified_time: 'Jan 12 16:00',
                },
            },
            {
                path: '/english',
                name: 'english-certificate',
                component: '/my-cv/src/pages/certificates/english-certificate.page.js',
                meta: {
                    title: 'english.pdf',
                    size: '1032',
                    modified_time: 'Jan 12 16:00',
                },
            },
        ],
    },
    {
        path: '/',
        name: 'home',
        component: '/my-cv/src/pages/home.page.js',
        meta: {
            title: 'greeting.txt',
            size: '160',
            modified_time: 'Jan 12 16:00',
        },
    },
    {
        path: '/experience',
        name: 'experience',
        component: '/my-cv/src/pages/experience.page.js',
        meta: {
            title: 'experience.txt',
            size: '4 year',
            modified_time: 'Jan 12 16:00',
        },
    },
    {
        path: '/skills',
        name: 'skills',
        component: '/my-cv/src/pages/skills.page.js',
        meta: {
            title: 'skills.txt',
            size: '4096',
            modified_time: 'Jan 12 16:00',
        },
    },
    {
        path: '/readme',
        name: 'readme',
        component: '/my-cv/src/pages/readme.page.js',
        meta: {
            title: 'README.md',
            size: '1032',
            modified_time: 'Jan 12 16:00',
        },
    },
]
