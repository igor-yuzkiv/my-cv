import { createRouter } from './core/router.js'

export const router = createRouter(document.querySelector('#app .route-view'), [
    {
        name: 'home',
        path: '/',
        component: '/src/pages/home.page.js',
    },
    {
        name: 'vue-certificate',
        path: '/vue-certificate',
        component: '/src/pages/vue-certificate.page.js',
    },
    {
        name: 'experience',
        path: '/experience',
        component: '/src/pages/experience.page.js',
    },
    {
        name: 'todo',
        path: '/todo',
        component: '/src/pages/todo.page.js',
    },
])
