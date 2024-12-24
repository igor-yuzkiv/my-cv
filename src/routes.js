import { createRouter } from './core/router.js'

export const router = createRouter(document.querySelector('#app .route-view'), [
    {
        name: 'home',
        path: '/',
        component: '/my-cv/src/pages/home.page.js',
    },
    {
        name: 'vue-certificate',
        path: '/vue-certificate',
        component: '/my-cv/src/pages/vue-certificate.page.js',
    },
    {
        name: 'experience',
        path: '/experience',
        component: '/my-cv/src/pages/experience.page.js',
    },
    {
        name: 'todo',
        path: '/todo',
        component: '/my-cv/src/pages/todo.page.js',
    },
])
