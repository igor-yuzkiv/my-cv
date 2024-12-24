import { createRouter } from './router.js'

const appEl = document.querySelector('#app')
const routeViewEl = appEl.querySelector('.route-view')

const router = createRouter(routeViewEl, [
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

appEl.querySelector('#navigate').addEventListener('click', () => {
    router.push('experience')
})

appEl.querySelector('#back').addEventListener('click', () => {
    router.go(-1)
})
