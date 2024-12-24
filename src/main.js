import { createRouter } from './router.js'

const appEl = document.querySelector('#app')
const routeViewEl = appEl.querySelector('.route-view')

createRouter(routeViewEl, [
    {
        name: 'home',
        path: '/',
        component: './pages/home.page.js',
    },
    {
        name: 'certificates',
        path: '/certificates',
        component: './pages/certificates.page.js',
    },
    {
        name: 'experience',
        path: '/experience',
        component: './pages/experience.page.js',
    },
])
