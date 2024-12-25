import { Router } from './core/router.js'
import { ROUTES } from './constants.js'

const navContainerEl = document.querySelector('#app .side-navigation')
const navBodyEl = navContainerEl.querySelector('tbody')
const router = new Router(document.querySelector('#app .route-view'), ROUTES)

function renderNavItem(routes, path = '') {
    console.log('renderNavItem', { routes, path })
    navBodyEl.innerHTML = '<tr data-path="../"><td>../</td><td>UP--DIR</td><td>Jan 12 16:00</td></tr>'

    routes.forEach((route) => {
        const { meta } = route || {}
        if (!meta) {
            return
        }

        const itemPath = `${route.parent}${route.path}`

        const tr = document.createElement('tr')
        tr.setAttribute('data-path', itemPath)

        if (itemPath === router.path) {
            tr.classList.add('active')
        }

        tr.innerHTML = `
            <td>${meta.title}</td>
            <td>${meta.size}</td>
            <td>${meta.modified_time}</td>
        `

        navBodyEl.appendChild(tr)
    })
}

router.subscribe(() => {
    if (router.parent) {
        renderNavItem(router.children, router.parent.path)
        return
    }

    if (router.currentRoute?.children?.length) {
        renderNavItem(router.currentRoute.children, router.currentRoute.path)
    } else {
        renderNavItem(router.routes)
    }
})

navContainerEl.addEventListener('click', (event) => {
    const tr = event.target.closest('tr')
    if (!tr) {
        return
    }

    const path = tr.getAttribute('data-path')

    if (path === '../') {
        router.push(router.parent?.path || '/')
    } else {
        router.push(path)
    }
})

router.init()
