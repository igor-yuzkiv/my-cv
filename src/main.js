import { createRouter } from './router.js'
import { NAV_ITEMS } from './constants.js'

const appEl = document.querySelector('#app')
const routeViewEl = appEl.querySelector('.route-view')
const navContainer = appEl.querySelector('.side-navigation nav table tbody')

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

function renderNavItems() {
    navContainer.innerHTML = NAV_ITEMS.map((item) => {
        const title = item.path ? `<a href="#${item.path}">${item.title}</a>` : item.title
        return `<tr data-path="${item.path}">
            <td>${title}</td>
            <td>${item.size}</td>
            <td>${item.modified_time}</td>
        </tr>`
    }).join('')
}

renderNavItems()
