import { Router } from './router.js'
import { ROUTES } from './constants.js'

const navContainerEl = document.querySelector('#app .side-navigation')
const navBodyEl = navContainerEl.querySelector('tbody')
const router = new Router(document.querySelector('#app .route-view'), ROUTES)

function renderNavItems(routes) {
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

        tr.innerHTML = `<td>${meta.title}</td><td>${meta.size}</td><td>${meta.modified_time}</td>`

        navBodyEl.appendChild(tr)
    })
}

function setBreadcrumb() {
    let breadcrumb = '< ~/CV'

    if (router.breadcrumbs.length) {
        breadcrumb += `/${router.breadcrumbs.join('/')}`
    }

    navContainerEl.setAttribute('data-breadcrumb', breadcrumb)
}

router.subscribe(() => {
    if (router.parentPath) {
        renderNavItems(router.siblings, router.parentPath.path)
        return
    }

    if (router.currentRoute?.children?.length) {
        renderNavItems(router.currentRoute.children, router.currentRoute.path)
    } else {
        renderNavItems(router.routes)
    }

    setBreadcrumb()
})

navContainerEl.addEventListener('click', (event) => {
    const tr = event.target.closest('tr')
    if (!tr) {
        return
    }

    const path = tr.getAttribute('data-path')

    if (path === '../') {
        router.push(router.parentPath?.path || '/')
    } else {
        router.push(path)
    }
})

router.init()
