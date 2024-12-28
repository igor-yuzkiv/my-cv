import { Router } from './router.js'
import { ROUTES } from './constants.js'

const navContainerEl = document.querySelector('#app .side-navigation')
const navBodyEl = navContainerEl.querySelector('tbody')
const router = new Router(document.querySelector('#app .route-view'), ROUTES)

function renderNavItems(routes, upDir = '/') {
    if (!routes || !routes.length) {
        routes = ROUTES
    }

    navBodyEl.innerHTML = `<tr data-path="${upDir}"><td>../</td><td>UP--DIR</td><td>Jan 12 16:00</td></tr>`

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
    const isFile = Boolean(router.currentRoute?.component)
    let upDir = isFile ? router.routesMap.get(router.parentPath)?.parent : router.parentPath

    renderNavItems(router.currentRoute?.children?.length ? router.currentRoute.children : router.siblings, upDir || '/')
    setBreadcrumb()
})

navContainerEl.addEventListener('click', (event) => {
    const tr = event.target.closest('tr')
    if (tr) {
        router.push(tr.getAttribute('data-path') || '/')
    }
})

router.init()
