import { NAV_ITEMS } from './constants.js'
import { router } from './routes.js'

const appEl = document.querySelector('#app')
const navContainer = appEl.querySelector('.side-navigation nav table tbody')

function renderNavItems() {
    navContainer.innerHTML = ''

    NAV_ITEMS.forEach((item) => {
        const tr = document.createElement('tr')
        if (item.path) {
            tr.setAttribute('data-path', item.path)
        }

        tr.innerHTML = `
            <td>${item.title}</td>
            <td>${item.size}</td>
            <td>${item.modified_time}</td>
        `

        navContainer.appendChild(tr)
    })
}

router.onRouteChange = (route) => {
    navContainer.querySelectorAll('tr').forEach((tr) => {
        const path = tr.getAttribute('data-path')
        path === route.path ? tr.classList.add('active') : tr.classList.remove('active')
    })
}

navContainer.addEventListener('click', (event) => {
    const tr = event.target.closest('tr')
    if (!tr) {
        return
    }
    const path = tr.getAttribute('data-path')
    if (path) {
        router.push(path)
    }
})

renderNavItems()
router.init()
