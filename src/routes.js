import { createRouter } from './core/router.js'

export const router = createRouter(document.querySelector('#app .route-view'), [
    {
        name: 'home',
        path: '/',
        component: '/src/pages/home.page.js',
    },
    {
        name: 'certificates',
        path: '/certificates',
        component: '/src/pages/certificates.page.js',
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
